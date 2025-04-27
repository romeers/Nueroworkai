"use client"

import { useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ImageUploader } from "@/components/image-uploader"
import { ImageGallery } from "@/components/image-gallery"
import type { ImageMetadata } from "@/lib/image-service"
import { Loader, RefreshCw } from "lucide-react"

export function ImageManagerClient() {
  const [categories, setCategories] = useState<string[]>([
    "herramientas",
    "recursos",
    "blog",
    "banners",
    "logos",
    "general",
  ])
  const [selectedCategory, setSelectedCategory] = useState("herramientas")
  const [tools, setTools] = useState<any[]>([])
  const [resources, setResources] = useState<any[]>([])
  const [selectedTool, setSelectedTool] = useState<number | null>(null)
  const [selectedResource, setSelectedResource] = useState<number | null>(null)
  const [loading, setLoading] = useState(false)
  const [refreshKey, setRefreshKey] = useState(0)

  useEffect(() => {
    fetchTools()
    fetchResources()
  }, [])

  const fetchTools = async () => {
    try {
      const response = await fetch("/api/tools")
      if (response.ok) {
        const data = await response.json()
        setTools(data)
      }
    } catch (error) {
      console.error("Error al cargar herramientas:", error)
    }
  }

  const fetchResources = async () => {
    try {
      const response = await fetch("/api/resources")
      if (response.ok) {
        const data = await response.json()
        setResources(data)
      }
    } catch (error) {
      console.error("Error al cargar recursos:", error)
    }
  }

  const handleImageUpload = (imageData: ImageMetadata) => {
    // Refrescar la galería después de subir una imagen
    setRefreshKey((prev) => prev + 1)
  }

  const handleAssociateWithTool = async (imageId: number) => {
    if (!selectedTool) {
      alert("Por favor, selecciona una herramienta primero")
      return
    }

    setLoading(true)

    try {
      const response = await fetch(`/api/tools/${selectedTool}/images`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          imageId,
          isPrimary: false,
        }),
      })

      if (!response.ok) {
        throw new Error("Error al asociar la imagen con la herramienta")
      }

      alert("Imagen asociada correctamente con la herramienta")
      setRefreshKey((prev) => prev + 1)
    } catch (error) {
      console.error("Error:", error)
      alert("Error al asociar la imagen")
    } finally {
      setLoading(false)
    }
  }

  const handleAssociateWithResource = async (imageId: number) => {
    if (!selectedResource) {
      alert("Por favor, selecciona un recurso primero")
      return
    }

    setLoading(true)

    try {
      const response = await fetch(`/api/resources/${selectedResource}/images`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          imageId,
          isPrimary: false,
        }),
      })

      if (!response.ok) {
        throw new Error("Error al asociar la imagen con el recurso")
      }

      alert("Imagen asociada correctamente con el recurso")
      setRefreshKey((prev) => prev + 1)
    } catch (error) {
      console.error("Error:", error)
      alert("Error al asociar la imagen")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <Tabs defaultValue="upload">
        <TabsList className="mb-6">
          <TabsTrigger value="upload">Subir Imágenes</TabsTrigger>
          <TabsTrigger value="manage">Gestionar Imágenes</TabsTrigger>
          <TabsTrigger value="tools">Imágenes de Herramientas</TabsTrigger>
          <TabsTrigger value="resources">Imágenes de Recursos</TabsTrigger>
        </TabsList>

        <TabsContent value="upload" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">Subir Nueva Imagen</h2>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Categoría</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              <ImageUploader onUpload={handleImageUpload} category={selectedCategory} optimize={true} />
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Imágenes Recientes</h2>
                <button
                  onClick={() => setRefreshKey((prev) => prev + 1)}
                  className="flex items-center text-sm text-blue-600 hover:text-blue-800"
                >
                  <RefreshCw className="h-4 w-4 mr-1" />
                  Actualizar
                </button>
              </div>

              <div key={refreshKey}>
                <ImageGallery entityId={0} entityType="tool" readOnly={true} className="mb-4" />
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="manage" className="space-y-6">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Filtrar por Categoría</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full max-w-xs px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <div key={refreshKey}>
            <ImageGallery entityId={0} entityType="tool" readOnly={false} />
          </div>
        </TabsContent>

        <TabsContent value="tools" className="space-y-6">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Seleccionar Herramienta</label>
            <select
              value={selectedTool || ""}
              onChange={(e) => setSelectedTool(e.target.value ? Number.parseInt(e.target.value) : null)}
              className="w-full max-w-xs px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Selecciona una herramienta</option>
              {tools.map((tool) => (
                <option key={tool.id} value={tool.id}>
                  {tool.name}
                </option>
              ))}
            </select>
          </div>

          {selectedTool && (
            <div key={`tool-${selectedTool}-${refreshKey}`}>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Imágenes de la Herramienta</h2>
                <button
                  onClick={() => setRefreshKey((prev) => prev + 1)}
                  className="flex items-center text-sm text-blue-600 hover:text-blue-800"
                >
                  <RefreshCw className="h-4 w-4 mr-1" />
                  Actualizar
                </button>
              </div>

              <ImageGallery entityId={selectedTool} entityType="tool" readOnly={false} />
            </div>
          )}
        </TabsContent>

        <TabsContent value="resources" className="space-y-6">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Seleccionar Recurso</label>
            <select
              value={selectedResource || ""}
              onChange={(e) => setSelectedResource(e.target.value ? Number.parseInt(e.target.value) : null)}
              className="w-full max-w-xs px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Selecciona un recurso</option>
              {resources.map((resource) => (
                <option key={resource.id} value={resource.id}>
                  {resource.title}
                </option>
              ))}
            </select>
          </div>

          {selectedResource && (
            <div key={`resource-${selectedResource}-${refreshKey}`}>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Imágenes del Recurso</h2>
                <button
                  onClick={() => setRefreshKey((prev) => prev + 1)}
                  className="flex items-center text-sm text-blue-600 hover:text-blue-800"
                >
                  <RefreshCw className="h-4 w-4 mr-1" />
                  Actualizar
                </button>
              </div>

              <ImageGallery entityId={selectedResource} entityType="resource" readOnly={false} />
            </div>
          )}
        </TabsContent>
      </Tabs>

      {loading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-md flex items-center">
            <Loader className="h-6 w-6 animate-spin text-blue-500 mr-2" />
            <span>Procesando...</span>
          </div>
        </div>
      )}
    </div>
  )
}
