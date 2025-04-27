"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Upload, X, Check } from "lucide-react"

interface ImageUploaderProps {
  onUpload: (imageData: any) => void
  category?: string
  optimize?: boolean
  maxWidth?: number
  maxHeight?: number
  className?: string
}

export function ImageUploader({
  onUpload,
  category = "general",
  optimize = true,
  maxWidth = 1200,
  maxHeight = 1200,
  className = "",
}: ImageUploaderProps) {
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [altText, setAltText] = useState("")
  const [tags, setTags] = useState("")
  const [isUploading, setIsUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (!selectedFile) return

    setFile(selectedFile)
    setAltText(selectedFile.name.split(".")[0].replace(/-|_/g, " "))

    // Crear una URL para la vista previa
    const objectUrl = URL.createObjectURL(selectedFile)
    setPreview(objectUrl)

    // Limpiar estados anteriores
    setError(null)
    setSuccess(false)
    setUploadProgress(0)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()

    const droppedFile = e.dataTransfer.files?.[0]
    if (!droppedFile) return

    setFile(droppedFile)
    setAltText(droppedFile.name.split(".")[0].replace(/-|_/g, " "))

    // Crear una URL para la vista previa
    const objectUrl = URL.createObjectURL(droppedFile)
    setPreview(objectUrl)

    // Limpiar estados anteriores
    setError(null)
    setSuccess(false)
    setUploadProgress(0)
  }

  const handleUpload = async () => {
    if (!file) {
      setError("Por favor, selecciona una imagen primero")
      return
    }

    setIsUploading(true)
    setUploadProgress(10)
    setError(null)

    try {
      const formData = new FormData()
      formData.append("file", file)
      formData.append("alt_text", altText)
      formData.append("category", category)
      formData.append("tags", tags)
      formData.append("optimize", optimize.toString())
      formData.append("max_width", maxWidth.toString())
      formData.append("max_height", maxHeight.toString())

      // Simular  maxWidth.toString())
      formData.append("max_height", maxHeight.toString())

      // Simular progreso de carga
      setUploadProgress(30)

      const response = await fetch("/api/images", {
        method: "POST",
        body: formData,
      })

      setUploadProgress(90)

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Error al subir la imagen")
      }

      const imageData = await response.json()
      setUploadProgress(100)
      setSuccess(true)

      // Notificar al componente padre
      onUpload(imageData)

      // Resetear después de 2 segundos
      setTimeout(() => {
        setFile(null)
        setPreview(null)
        setAltText("")
        setTags("")
        setSuccess(false)
        setUploadProgress(0)
        setIsUploading(false)
      }, 2000)
    } catch (err: any) {
      setError(err.message || "Error al subir la imagen")
      setIsUploading(false)
    }
  }

  const handleCancel = () => {
    setFile(null)
    setPreview(null)
    setAltText("")
    setTags("")
    setError(null)
    setSuccess(false)
    setUploadProgress(0)
  }

  return (
    <div className={`w-full ${className}`}>
      {!file ? (
        <div
          className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:bg-gray-50 transition-colors"
          onClick={() => fileInputRef.current?.click()}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" className="hidden" />
          <Upload className="mx-auto h-12 w-12 text-gray-400" />
          <p className="mt-2 text-sm text-gray-600">Arrastra y suelta una imagen aquí, o haz clic para seleccionar</p>
          <p className="mt-1 text-xs text-gray-500">PNG, JPG, GIF hasta 10MB</p>
        </div>
      ) : (
        <div className="border rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium">Vista previa</h3>
            <button onClick={handleCancel} className="text-gray-500 hover:text-gray-700" disabled={isUploading}>
              <X className="h-5 w-5" />
            </button>
          </div>

          {preview && (
            <div className="relative mb-4 rounded-md overflow-hidden">
              <img
                src={preview || "/placeholder.svg"}
                alt="Vista previa"
                className="w-full h-auto max-h-64 object-contain bg-gray-100"
              />
            </div>
          )}

          <div className="space-y-3">
            <div>
              <label htmlFor="alt-text" className="block text-sm font-medium text-gray-700 mb-1">
                Texto alternativo
              </label>
              <input
                type="text"
                id="alt-text"
                value={altText}
                onChange={(e) => setAltText(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Describe la imagen para accesibilidad"
                disabled={isUploading}
              />
            </div>

            <div>
              <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-1">
                Etiquetas (separadas por comas)
              </label>
              <input
                type="text"
                id="tags"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="ej: logo, banner, producto"
                disabled={isUploading}
              />
            </div>

            {error && <div className="text-red-500 text-sm py-2">{error}</div>}

            {isUploading && (
              <div className="mt-2">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
                    style={{ width: `${uploadProgress}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500 mt-1 text-right">{uploadProgress}%</p>
              </div>
            )}

            {success && (
              <div className="flex items-center text-green-500 text-sm py-2">
                <Check className="h-4 w-4 mr-1" />
                Imagen subida correctamente
              </div>
            )}

            <div className="flex justify-end">
              <button
                type="button"
                onClick={handleUpload}
                disabled={isUploading || !file}
                className={`px-4 py-2 rounded-md text-white font-medium ${
                  isUploading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {isUploading ? "Subiendo..." : "Subir imagen"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
