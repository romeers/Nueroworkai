import { put, del } from "@vercel/blob"
import { executeQuery } from "./db-connection"
import sharp from "sharp"

// Tipos para el servicio de imágenes
export interface ImageMetadata {
  id?: number
  url: string
  blob_url: string
  filename: string
  alt_text?: string
  width?: number
  height?: number
  size_kb?: number
  mime_type?: string
  category?: string
  tags?: string[]
  uploaded_by?: number
  is_optimized?: boolean
  optimized_url?: string
  created_at?: Date
  updated_at?: Date
}

export interface ImageUploadOptions {
  alt_text?: string
  category?: string
  tags?: string[]
  uploaded_by?: number
  optimize?: boolean
  max_width?: number
  max_height?: number
}

/**
 * Sube una imagen a Vercel Blob y guarda sus metadatos en la base de datos
 */
export async function uploadImage(file: File, options: ImageUploadOptions = {}): Promise<ImageMetadata> {
  try {
    // 1. Subir la imagen a Vercel Blob
    const blob = await put(file.name, file, {
      access: "public",
    })

    // 2. Obtener metadatos de la imagen
    const buffer = Buffer.from(await file.arrayBuffer())
    const imageInfo = await sharp(buffer).metadata()

    // 3. Calcular el tamaño en KB
    const sizeKb = Math.round(file.size / 1024)

    // 4. Preparar los metadatos para la base de datos
    const imageMetadata: ImageMetadata = {
      url: blob.url,
      blob_url: blob.url,
      filename: file.name,
      alt_text: options.alt_text || file.name,
      width: imageInfo.width,
      height: imageInfo.height,
      size_kb: sizeKb,
      mime_type: file.type,
      category: options.category,
      tags: options.tags,
      uploaded_by: options.uploaded_by,
      is_optimized: false,
    }

    // 5. Optimizar la imagen si se solicita
    if (options.optimize) {
      const optimizedImage = await optimizeImage(buffer, options.max_width || 1200, options.max_height || 1200)

      // Subir la imagen optimizada
      const optimizedBlob = await put(`optimized-${file.name}`, optimizedImage, { access: "public" })

      imageMetadata.is_optimized = true
      imageMetadata.optimized_url = optimizedBlob.url
    }

    // 6. Guardar los metadatos en la base de datos
    const result = await executeQuery(
      `
      INSERT INTO images (
        url, blob_url, filename, alt_text, width, height, size_kb, 
        mime_type, category, tags, uploaded_by, is_optimized, optimized_url
      ) 
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
      RETURNING id, created_at, updated_at
      `,
      [
        imageMetadata.url,
        imageMetadata.blob_url,
        imageMetadata.filename,
        imageMetadata.alt_text,
        imageMetadata.width,
        imageMetadata.height,
        imageMetadata.size_kb,
        imageMetadata.mime_type,
        imageMetadata.category,
        imageMetadata.tags,
        imageMetadata.uploaded_by,
        imageMetadata.is_optimized,
        imageMetadata.optimized_url,
      ],
    )

    // 7. Devolver los metadatos completos
    return {
      ...imageMetadata,
      id: result[0].id,
      created_at: result[0].created_at,
      updated_at: result[0].updated_at,
    }
  } catch (error) {
    console.error("Error al subir la imagen:", error)
    throw error
  }
}

/**
 * Optimiza una imagen reduciendo su tamaño y calidad
 */
async function optimizeImage(buffer: Buffer, maxWidth: number, maxHeight: number): Promise<Buffer> {
  try {
    return await sharp(buffer)
      .resize(maxWidth, maxHeight, {
        fit: "inside",
        withoutEnlargement: true,
      })
      .jpeg({ quality: 80, progressive: true })
      .toBuffer()
  } catch (error) {
    console.error("Error al optimizar la imagen:", error)
    throw error
  }
}

/**
 * Elimina una imagen de Vercel Blob y sus metadatos de la base de datos
 */
export async function deleteImage(imageId: number): Promise<boolean> {
  try {
    // 1. Obtener los metadatos de la imagen
    const result = await executeQuery("SELECT blob_url, optimized_url FROM images WHERE id = $1", [imageId])

    if (result.length === 0) {
      throw new Error(`No se encontró la imagen con ID ${imageId}`)
    }

    const { blob_url, optimized_url } = result[0]

    // 2. Eliminar la imagen de Vercel Blob
    await del(blob_url)

    // 3. Eliminar la imagen optimizada si existe
    if (optimized_url) {
      await del(optimized_url)
    }

    // 4. Eliminar los metadatos de la base de datos
    await executeQuery("DELETE FROM images WHERE id = $1", [imageId])

    return true
  } catch (error) {
    console.error("Error al eliminar la imagen:", error)
    throw error
  }
}

/**
 * Obtiene los metadatos de una imagen por su ID
 */
export async function getImageById(imageId: number): Promise<ImageMetadata | null> {
  try {
    const result = await executeQuery("SELECT * FROM images WHERE id = $1", [imageId])

    if (result.length === 0) {
      return null
    }

    return result[0] as ImageMetadata
  } catch (error) {
    console.error("Error al obtener la imagen:", error)
    throw error
  }
}

/**
 * Obtiene imágenes por categoría
 */
export async function getImagesByCategory(category: string, limit = 20, offset = 0): Promise<ImageMetadata[]> {
  try {
    const result = await executeQuery(
      "SELECT * FROM images WHERE category = $1 ORDER BY created_at DESC LIMIT $2 OFFSET $3",
      [category, limit, offset],
    )

    return result as ImageMetadata[]
  } catch (error) {
    console.error("Error al obtener imágenes por categoría:", error)
    throw error
  }
}

/**
 * Asocia una imagen a una herramienta
 */
export async function associateImageWithTool(
  imageId: number,
  toolId: number,
  isPrimary = false,
  displayOrder = 0,
): Promise<boolean> {
  try {
    // Si es primaria, actualizar todas las demás a no primarias
    if (isPrimary) {
      await executeQuery("UPDATE tool_images SET is_primary = FALSE WHERE tool_id = $1", [toolId])
    }

    // Insertar la asociación
    await executeQuery(
      `
      INSERT INTO tool_images (tool_id, image_id, is_primary, display_order)
      VALUES ($1, $2, $3, $4)
      ON CONFLICT (tool_id, image_id) 
      DO UPDATE SET is_primary = $3, display_order = $4
      `,
      [toolId, imageId, isPrimary, displayOrder],
    )

    return true
  } catch (error) {
    console.error("Error al asociar imagen con herramienta:", error)
    throw error
  }
}

/**
 * Obtiene las imágenes asociadas a una herramienta
 */
export async function getToolImages(toolId: number): Promise<ImageMetadata[]> {
  try {
    const result = await executeQuery(
      `
      SELECT i.*, ti.is_primary, ti.display_order
      FROM images i
      JOIN tool_images ti ON i.id = ti.image_id
      WHERE ti.tool_id = $1
      ORDER BY ti.is_primary DESC, ti.display_order ASC
      `,
      [toolId],
    )

    return result as ImageMetadata[]
  } catch (error) {
    console.error("Error al obtener imágenes de la herramienta:", error)
    throw error
  }
}

/**
 * Asocia una imagen a un recurso
 */
export async function associateImageWithResource(
  imageId: number,
  resourceId: number,
  isPrimary = false,
  displayOrder = 0,
): Promise<boolean> {
  try {
    // Si es primaria, actualizar todas las demás a no primarias
    if (isPrimary) {
      await executeQuery("UPDATE resource_images SET is_primary = FALSE WHERE resource_id = $1", [resourceId])
    }

    // Insertar la asociación
    await executeQuery(
      `
      INSERT INTO resource_images (resource_id, image_id, is_primary, display_order)
      VALUES ($1, $2, $3, $4)
      ON CONFLICT (resource_id, image_id) 
      DO UPDATE SET is_primary = $3, display_order = $4
      `,
      [resourceId, imageId, isPrimary, displayOrder],
    )

    return true
  } catch (error) {
    console.error("Error al asociar imagen con recurso:", error)
    throw error
  }
}

/**
 * Obtiene las imágenes asociadas a un recurso
 */
export async function getResourceImages(resourceId: number): Promise<ImageMetadata[]> {
  try {
    const result = await executeQuery(
      `
      SELECT i.*, ri.is_primary, ri.display_order
      FROM images i
      JOIN resource_images ri ON i.id = ri.image_id
      WHERE ri.resource_id = $1
      ORDER BY ri.is_primary DESC, ri.display_order ASC
      `,
      [resourceId],
    )

    return result as ImageMetadata[]
  } catch (error) {
    console.error("Error al obtener imágenes del recurso:", error)
    throw error
  }
}
