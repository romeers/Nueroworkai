"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ToolCardCompact from "@/components/tool-card-compact"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

// Datos de ejemplo para las herramientas
const tools = [
  {
    name: "Notion AI",
    description: "Asistente de escritura y organización con IA integrada en Notion.",
    imageUrl: "/notion-ai-blue.png",
    category: "Escritura IA",
    slug: "notion-ai",
  },
  {
    name: "Zapier",
    description: "Automatiza tareas entre aplicaciones sin necesidad de código.",
    imageUrl: "/zapier-blue-background.png",
    category: "Automatización",
    slug: "zapier",
  },
  {
    name: "ClickUp",
    description: "Plataforma todo en uno para gestión de proyectos con funciones de IA.",
    imageUrl: "/clickup-blue-background.png",
    category: "Gestión de tareas",
    slug: "clickup",
  },
  {
    name: "Jasper",
    description: "Generador de contenido con IA para marketing y comunicación.",
    imageUrl: "/ai-logo-blue.png",
    category: "Escritura IA",
    slug: "jasper",
  },
  {
    name: "Fireflies",
    description: "Transcribe y analiza reuniones automáticamente con IA.",
    imageUrl: "/fireflies-ai-logo-blue.png",
    category: "Reuniones",
    slug: "fireflies",
  },
  {
    name: "Grammarly",
    description: "Corrector gramatical y asistente de escritura con IA.",
    imageUrl: "/grammarly-blue.png",
    category: "Escritura IA",
    slug: "grammarly",
  },
  {
    name: "Make",
    description: "Plataforma de automatización visual para conectar apps y automatizar flujos de trabajo.",
    imageUrl: "/abstract-geometric-logo.png",
    category: "Automatización",
    slug: "make",
  },
  {
    name: "Otter.ai",
    description: "Asistente de notas con IA para transcribir y resumir reuniones.",
    imageUrl: "/otter-ai-logo-inspired-design.png",
    category: "Reuniones",
    slug: "otter-ai",
  },
  {
    name: "Asana",
    description: "Plataforma de gestión de proyectos y tareas para equipos.",
    imageUrl: "/Asana-logo-abstract.png",
    category: "Gestión de tareas",
    slug: "asana",
  },
  {
    name: "Trello",
    description: "Herramienta visual de gestión de proyectos basada en tableros Kanban.",
    imageUrl: "/trello-logo-abstract.png",
    category: "Gestión de tareas",
    slug: "trello",
  },
  {
    name: "ChatGPT",
    description: "Asistente de IA conversacional para múltiples tareas de escritura y análisis.",
    imageUrl: "/stylized-chat-icon.png",
    category: "Otros",
    slug: "chatgpt",
  },
  {
    name: "Midjourney",
    description: "Generador de imágenes con IA a partir de descripciones textuales.",
    imageUrl: "/placeholder.svg?height=80&width=80&query=Midjourney logo",
    category: "Otros",
    slug: "midjourney",
  },
]

export default function HerramientasPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("todas")

  // Filtrar herramientas según la búsqueda y categoría
  const filteredTools = tools.filter((tool) => {
    const matchesSearch =
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory = activeCategory === "todas" || tool.category.toLowerCase() === activeCategory.toLowerCase()

    return matchesSearch && matchesCategory
  })

  return (
    <>
      {/* Hero Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-3xl font-bold tracking-tight text-secondary sm:text-4xl md:text-5xl">
              Herramientas de Productividad con IA
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Descubre las mejores apps con IA para trabajar de forma más inteligente, rápida y desde cualquier lugar.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="border-b border-t bg-gray-50 py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative w-full md:max-w-xs">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <Input
                type="text"
                placeholder="Buscar herramientas..."
                className="w-full pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <Tabs defaultValue="todas" className="w-full md:w-auto" onValueChange={setActiveCategory}>
              <TabsList className="grid w-full grid-cols-3 md:grid-cols-5 lg:grid-cols-6">
                <TabsTrigger value="todas">Todas</TabsTrigger>
                <TabsTrigger value="Escritura IA">Escritura IA</TabsTrigger>
                <TabsTrigger value="Automatización">Automatización</TabsTrigger>
                <TabsTrigger value="Gestión de tareas">Gestión de tareas</TabsTrigger>
                <TabsTrigger value="Reuniones">Reuniones</TabsTrigger>
                <TabsTrigger value="Otros">Otros</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Tools Grid Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredTools.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredTools.map((tool) => (
                <ToolCardCompact
                  key={tool.slug}
                  name={tool.name}
                  description={tool.description}
                  imageUrl={tool.imageUrl}
                  category={tool.category}
                  slug={tool.slug}
                />
              ))}
            </div>
          ) : (
            <div className="py-12 text-center">
              <p className="text-lg text-gray-600">No se encontraron herramientas que coincidan con tu búsqueda.</p>
              <Button
                variant="link"
                className="mt-2 text-primary"
                onClick={() => {
                  setSearchQuery("")
                  setActiveCategory("todas")
                }}
              >
                Mostrar todas las herramientas
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-2xl font-bold text-secondary sm:text-3xl">
              ¿No estás seguro de qué herramienta es adecuada para ti?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Utiliza nuestro comparador de herramientas IA para encontrar la solución perfecta para tus necesidades.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/comparativas">Usar el Comparador de Herramientas IA</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
