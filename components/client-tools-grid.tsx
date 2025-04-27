"use client"

import { useEffect, useState } from "react"
import ToolCard from "@/components/tool-card"
import { useAuth } from "@/contexts/auth-context"

// Datos de ejemplo para las herramientas (puedes reemplazar esto con datos reales de la API)
const defaultTools = [
  {
    id: 1,
    name: "Notion AI",
    description: "Asistente de escritura y organización con IA integrada en Notion.",
    imageUrl: "/notion-ai-blue.png",
    category: "Escritura IA",
    url: "#",
    featured: true,
    score: 9.2,
    verified: true,
    slug: "notion-ai",
  },
  {
    id: 2,
    name: "Zapier",
    description: "Automatiza tareas entre aplicaciones sin necesidad de código.",
    imageUrl: "/zapier-blue-background.png",
    category: "Automatización",
    url: "#",
    featured: true,
    score: 9.0,
    verified: true,
    slug: "zapier",
  },
  {
    id: 3,
    name: "ClickUp",
    description: "Plataforma todo en uno para gestión de proyectos con funciones de IA.",
    imageUrl: "/clickup-blue-background.png",
    category: "Gestión de tareas",
    url: "#",
    featured: true,
    score: 8.8,
    verified: true,
    slug: "clickup",
  },
  // Más herramientas...
]

export default function ClientToolsGrid() {
  const { user, isAuthenticated } = useAuth()
  const [tools, setTools] = useState(defaultTools)
  const [favorites, setFavorites] = useState<number[]>([])
  const [isLoading, setIsLoading] = useState(true)

  // Cargar herramientas y favoritos
  useEffect(() => {
    async function loadData() {
      try {
        setIsLoading(true)
        // Cargar herramientas
        const toolsResponse = await fetch("/api/tools")
        if (toolsResponse.ok) {
          const toolsData = await toolsResponse.json()
          setTools(toolsData.length > 0 ? toolsData : defaultTools)
        }

        // Cargar favoritos si el usuario está autenticado
        if (isAuthenticated) {
          const favoritesResponse = await fetch("/api/favorites")
          if (favoritesResponse.ok) {
            const favoritesData = await favoritesResponse.json()
            setFavorites(favoritesData.map((fav: any) => fav.toolId))
          }
        }
      } catch (error) {
        console.error("Error cargando datos:", error)
      } finally {
        setIsLoading(false)
      }
    }

    loadData()
  }, [isAuthenticated])

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {tools.map((tool) => (
        <ToolCard
          key={tool.id}
          name={tool.name}
          description={tool.description}
          imageUrl={tool.imageUrl}
          category={tool.category}
          url={`/herramientas/${tool.slug}`}
          featured={tool.featured}
          score={tool.score}
          verified={tool.verified}
          slug={tool.slug}
          isFavorite={favorites.includes(tool.id)}
          toolId={tool.id}
        />
      ))}
    </div>
  )
}
