import { type NextRequest, NextResponse } from "next/server"
import { uploadImage, getImagesByCategory, type ImageUploadOptions } from "@/lib/image-service"
import { isAuthenticated, getUserId } from "@/lib/auth"

export async function POST(request: NextRequest) {
  try {
    // Verificar autenticación
    const isAuth = await isAuthenticated(request)
    if (!isAuth) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 })
    }

    // Obtener el ID del usuario
    const userId = await getUserId(request)

    // Procesar la solicitud multipart/form-data
    const formData = await request.formData()
    const file = formData.get("file") as File

    if (!file) {
      return NextResponse.json({ error: "No se proporcionó ningún archivo" }, { status: 400 })
    }

    // Obtener opciones adicionales
    const options: ImageUploadOptions = {
      alt_text: (formData.get("alt_text") as string) || undefined,
      category: (formData.get("category") as string) || undefined,
      tags: formData.get("tags") ? (formData.get("tags") as string).split(",") : undefined,
      uploaded_by: userId,
      optimize: formData.get("optimize") === "true",
      max_width: formData.get("max_width") ? Number.parseInt(formData.get("max_width") as string) : undefined,
      max_height: formData.get("max_height") ? Number.parseInt(formData.get("max_height") as string) : undefined,
    }

    // Subir la imagen
    const imageMetadata = await uploadImage(file, options)

    return NextResponse.json(imageMetadata, { status: 201 })
  } catch (error) {
    console.error("Error al subir la imagen:", error)
    return NextResponse.json({ error: "Error al subir la imagen", details: error }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    // Obtener parámetros de consulta
    const { searchParams } = new URL(request.url)
    const category = searchParams.get("category")
    const limit = searchParams.get("limit") ? Number.parseInt(searchParams.get("limit") as string) : 20
    const offset = searchParams.get("offset") ? Number.parseInt(searchParams.get("offset") as string) : 0

    if (!category) {
      return NextResponse.json({ error: "Se requiere el parámetro 'category'" }, { status: 400 })
    }

    // Obtener imágenes por categoría
    const images = await getImagesByCategory(category, limit, offset)

    return NextResponse.json(images, { status: 200 })
  } catch (error) {
    console.error("Error al obtener imágenes:", error)
    return NextResponse.json({ error: "Error al obtener imágenes", details: error }, { status: 500 })
  }
}
