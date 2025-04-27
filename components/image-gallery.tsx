"use client"

import { useState, useEffect } from "react"
import { Trash2, Star, StarOff, MoveUp, MoveDown, Loader } from "lucide-react"
import type { ImageMetadata } from "@/lib/image-service"

interface ImageGalleryProps {
  entityId: number
  entityType: "tool" | "resource"
  onImageSelect?: (image: ImageMetadata) => void
  readOnly?: boolean
  className?: string
}

export function ImageGallery({
  entityId,
  entityType,
  onImageSelect,
  readOnly = false,
  className = "",
}: ImageGalleryProps) {
  const [images, setImages] = useState<ImageMetadata[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedImage, setSelectedImage] = useState<ImageMetadata | null>(null)

  useEffect(() => {
    fetchImages()
  }, [entityId, entityType])

  const fetchImages = async () => {
    setLoading(true)
    setError(null)

    try {
      const endpoint = entityType === "tool" ? `/api/tools/${entityId}/images` : `/api/resources/${entityId}/images`

      const response = await fetch(endpoint)

      if (!response.ok) {
        throw new Error("Error al cargar las imágenes")
      }

      const data = await response.json()
      setImages(data)
    } catch (err: any) {
      setError(err.message || "Error al cargar las imágenes")
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (imageId: number) => {
    if (!confirm("¿Estás seguro de que deseas eliminar esta imagen?")) {
      return
    }

    try {
      const response = await fetch(`/api/images/${imageId}`, {
        method: "DELETE",
      })

      if (!response.ok) {
        throw new Error("Error al eliminar la imagen")
      }

      // Actualizar la lista de imágenes
      setImages(images.filter((img) => img.id !== imageId))

      if (selectedImage?.id === imageId) {
        setSelectedImage(null)
      }
    } catch (err: any) {
      setError(err.message || "Error al eliminar la imagen")
    }
  }

  const handleSetPrimary = async (imageId: number) => {
    try {
      const endpoint = entityType === "tool" ? `/api/tools/${entityId}/images` : `/api/resources/${entityId}/images`

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          imageId,
          isPrimary: true,
        }),
      })

      if (!response.ok) {
        throw new Error("Error al establecer la imagen como principal")
      }

      // Actualizar la lista de imágenes
      setImages(
        images.map((img) => ({
          ...img,
          is_primary: img.id === imageId,
        })),
      )
    } catch (err: any) {
      setError(err.message || "Error al establecer la imagen como principal")
    }
  }

  const handleMoveUp = async (index: number) => {
    if (index === 0) return

    try {
      const newImages = [...images]
      const currentImage = newImages[index]
      const prevImage = newImages[index - 1]

      // Intercambiar órdenes de visualización
      const currentOrder = currentImage.display_order || 0
      const prevOrder = prevImage.display_order || 0

      const endpoint = entityType === "tool" ? `/api/tools/${entityId}/images` : `/api/resources/${entityId}/images`

      // Actualizar la imagen actual
      await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          imageId: currentImage.id,
          displayOrder: prevOrder,
        }),
      })

      // Actualizar la imagen anterior
      await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          imageId: prevImage.id,
          displayOrder: currentOrder,
        }),
      })

      // Actualizar el estado local
      newImages[index] = { ...currentImage, display_order: prevOrder }
      newImages[index - 1] = { ...prevImage, display_order: currentOrder }[
        // Reordenar el array
        (newImages[index], newImages[index - 1])
      ] = [newImages[index - 1], newImages[index]]

      setImages(newImages)
    } catch (err: any) {
      setError(err.message || "Error al reordenar las imágenes")
    }
  }

  const handleMoveDown = async (index: number) => {
    if (index === images.length - 1) return

    try {
      const newImages = [...images]
      const currentImage = newImages[index]
      const nextImage = newImages[index + 1]

      // Intercambiar órdenes de visualización
      const currentOrder = currentImage.display_order || 0
      const nextOrder = nextImage.display_order || 0

      const endpoint = entityType === "tool" ? `/api/tools/${entityId}/images` : `/api/resources/${entityId}/images`

      // Actualizar la imagen actual
      await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          imageId: currentImage.id,
          displayOrder: nextOrder,
        }),
      })

      // Actualizar la imagen siguiente
      await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          imageId: nextImage.id,
          displayOrder: currentOrder,
        }),
      })

      // Actualizar el estado local
      newImages[index] = { ...currentImage, display_order: nextOrder }
      newImages[index + 1] = { ...nextImage, display_order: currentOrder }[
        // Reordenar el array
        (newImages[index], newImages[index + 1])
      ] = [newImages[index + 1], newImages[index]]

      setImages(newImages)
    } catch (err: any) {
      setError(err.message || "Error al reordenar las imágenes")
    }
  }

  const handleImageClick = (image: ImageMetadata) => {
    setSelectedImage(image)
    if (onImageSelect) {
      onImageSelect(image)
    }
  }

  if (loading) {
    return (
      <div className={`flex items-center justify-center p-8 ${className}`}>
        <Loader className="h-8 w-8 animate-spin text-gray-400" />
      </div>
    )
  }

  if (error) {
    return <div className={`p-4 bg-red-50 text-red-500 rounded-md ${className}`}>{error}</div>
  }

  if (images.length === 0) {
    return (
      <div className={`p-6 text-center border border-dashed rounded-lg ${className}`}>
        <p className="text-gray-500">No hay imágenes disponibles</p>
      </div>
    )
  }

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`relative group border rounded-md overflow-hidden ${
              selectedImage?.id === image.id ? "ring-2 ring-blue-500" : ""
            }`}
          >
            <img
              src={image.is_optimized && image.optimized_url ? image.optimized_url : image.url}
              alt={image.alt_text || "Imagen"}
              className="w-full h-32 object-cover cursor-pointer"
              onClick={() => handleImageClick(image)}
            />

            {image.is_primary && (
              <div className="absolute top-2 left-2 bg-yellow-400 text-xs px-2 py-1 rounded-full">Principal</div>
            )}

            {!readOnly && (
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-2">
                <button
                  onClick={() => handleSetPrimary(image.id!)}
                  className="p-1 bg-yellow-500 rounded-full text-white hover:bg-yellow-600"
                  title={image.is_primary ? "Quitar como principal" : "Establecer como principal"}
                >
                  {image.is_primary ? <StarOff size={16} /> : <Star size={16} />}
                </button>

                <button
                  onClick={() => handleMoveUp(index)}
                  className="p-1 bg-gray-500 rounded-full text-white hover:bg-gray-600"
                  title="Mover arriba"
                  disabled={index === 0}
                >
                  <MoveUp size={16} />
                </button>

                <button
                  onClick={() => handleMoveDown(index)}
                  className="p-1 bg-gray-500 rounded-full text-white hover:bg-gray-600"
                  title="Mover abajo"
                  disabled={index === images.length - 1}
                >
                  <MoveDown size={16} />
                </button>

                <button
                  onClick={() => handleDelete(image.id!)}
                  className="p-1 bg-red-500 rounded-full text-white hover:bg-red-600"
                  title="Eliminar imagen"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="mt-4 p-4 border rounded-md bg-gray-50">
          <h3 className="font-medium mb-2">Detalles de la imagen</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="text-gray-600">Nombre:</div>
            <div>{selectedImage.filename}</div>

            <div className="text-gray-600">Texto alternativo:</div>
            <div>{selectedImage.alt_text || "-"}</div>

            <div className="text-gray-600">Dimensiones:</div>
            <div>
              {selectedImage.width}x{selectedImage.height} px
            </div>

            <div className="text-gray-600">Tamaño:</div>
            <div>{selectedImage.size_kb ? `${selectedImage.size_kb} KB` : "-"}</div>

            <div className="text-gray-600">Tipo:</div>
            <div>{selectedImage.mime_type || "-"}</div>

            <div className="text-gray-600">Categoría:</div>
            <div>{selectedImage.category || "-"}</div>

            <div className="text-gray-600">Etiquetas:</div>
            <div>{selectedImage.tags && selectedImage.tags.length > 0 ? selectedImage.tags.join(", ") : "-"}</div>

            <div className="text-gray-600">Optimizada:</div>
            <div>{selectedImage.is_optimized ? "Sí" : "No"}</div>
          </div>
        </div>
      )}
    </div>
  )
}
