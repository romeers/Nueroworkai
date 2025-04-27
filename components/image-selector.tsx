"use client"

import { useState, useEffect } from "react"
import { Loader, Search, X } from "lucide-react"
import type { ImageMetadata } from "@/lib/image-service"

interface ImageSelectorProps {
  onSelect: (image: ImageMetadata) => void
  category?: string
  multiple?: boolean
  initialSelected?: ImageMetadata[]
  className?: string
}

export function ImageSelector({
  onSelect,
  category = "general",
  multiple = false,
  initialSelected = [],
  className = "",
}: ImageSelectorProps) {
  const [images, setImages] = useState<ImageMetadata[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedImages, setSelectedImages] = useState<ImageMetadata[]>(initialSelected)

  useEffect(() => {
    fetchImages()
  }, [category])

  const fetchImages = async () => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch(`/api/images?category=${category}`)

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

  const handleImageClick = (image: ImageMetadata) => {
    if (multiple) {
      // Comprobar si la imagen ya está seleccionada
      const isSelected = selectedImages.some((img) => img.id === image.id)

      if (isSelected) {
        // Eliminar de la selección
        setSelectedImages(selectedImages.filter((img) => img.id !== image.id))
      } else {
        // Añadir a la selección
        setSelectedImages([...selectedImages, image])
      }

      // Notificar al componente padre
      onSelect(image)
    } else {
      // Modo de selección única
      setSelectedImages([image])
      onSelect(image)
    }
  }

  const handleRemoveSelected = (imageId: number) => {
    setSelectedImages(selectedImages.filter((img) => img.id !== imageId))
  }

  const filteredImages = searchTerm
    ? images.filter(
        (image) =>
          image.filename.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (image.alt_text && image.alt_text.toLowerCase().includes(searchTerm.toLowerCase())) ||
          (image.tags && image.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))),
      )
    : images

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Barra de búsqueda */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Buscar imágenes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Imágenes seleccionadas */}
      {selectedImages.length > 0 && (
        <div className="mb-4">
          <h3 className="text-sm font-medium text-gray-700 mb-2">Seleccionadas:</h3>
          <div className="flex flex-wrap gap-2">
            {selectedImages.map((image) => (
              <div key={image.id} className="relative group">
                <img
                  src={image.is_optimized && image.optimized_url ? image.optimized_url : image.url}
                  alt={image.alt_text || "Imagen seleccionada"}
                  className="h-16 w-16 object-cover rounded-md border"
                />
                <button
                  onClick={() => handleRemoveSelected(image.id!)}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X className="h-3 w-3" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Galería de imágenes */}
      {loading ? (
        <div className="flex items-center justify-center p-8">
          <Loader className="h-8 w-8 animate-spin text-gray-400" />
        </div>
      ) : error ? (
        <div className="p-4 bg-red-50 text-red-500 rounded-md">{error}</div>
      ) : filteredImages.length === 0 ? (
        <div className="p-6 text-center border border-dashed rounded-lg">
          <p className="text-gray-500">No se encontraron imágenes</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-h-96 overflow-y-auto p-2">
          {filteredImages.map((image) => {
            const isSelected = selectedImages.some((img) => img.id === image.id)

            return (
              <div
                key={image.id}
                className={`relative border rounded-md overflow-hidden cursor-pointer transition-all ${
                  isSelected ? "ring-2 ring-blue-500 border-blue-500" : "hover:border-gray-400"
                }`}
                onClick={() => handleImageClick(image)}
              >
                <img
                  src={image.is_optimized && image.optimized_url ? image.optimized_url : image.url}
                  alt={image.alt_text || "Imagen"}
                  className="w-full h-24 object-cover"
                />

                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-xs p-1 truncate">
                  {image.filename}
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
