"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, SlidersHorizontal, X } from "lucide-react"
import ToolCard from "@/components/tool-card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"

// Datos de ejemplo para todas las herramientas
const allTools = [
  {
    name: "Notion AI",
    description: "Asistente de escritura y organización con IA integrada en Notion.",
    imageUrl: "/notion-ai-blue.png",
    category: "Escritura IA",
    slug: "notion-ai",
    score: 9.2,
    price: "Desde $10/mes",
    tags: ["Escritura", "Organización", "Colaboración"],
    verified: true,
  },
  {
    name: "Zapier",
    description: "Automatiza tareas entre aplicaciones sin necesidad de código.",
    imageUrl: "/zapier-blue-background.png",
    category: "Automatización",
    slug: "zapier",
    score: 9.0,
    price: "Desde $19.99/mes",
    tags: ["Automatización", "Integración", "Sin código"],
    verified: true,
  },
  {
    name: "ClickUp",
    description: "Plataforma todo en uno para gestión de proyectos con funciones de IA.",
    imageUrl: "/clickup-blue-background.png",
    category: "Gestión de tareas",
    slug: "clickup",
    score: 8.8,
    price: "Desde $5/mes",
    tags: ["Gestión de proyectos", "Colaboración", "Tareas"],
    verified: true,
  },
  {
    name: "Jasper",
    description: "Generador de contenido con IA para marketing y comunicación.",
    imageUrl: "/ai-logo-blue.png",
    category: "Escritura IA",
    slug: "jasper",
    score: 8.7,
    price: "Desde $39/mes",
    tags: ["Escritura", "Marketing", "Contenido"],
    verified: true,
  },
  {
    name: "Grammarly",
    description: "Corrector gramatical y asistente de escritura con IA.",
    imageUrl: "/grammarly-blue.png",
    category: "Escritura IA",
    slug: "grammarly",
    score: 8.9,
    price: "Desde $12/mes",
    tags: ["Escritura", "Gramática", "Corrección"],
    verified: true,
  },
  {
    name: "Make",
    description: "Plataforma de automatización visual para conectar apps y automatizar flujos de trabajo.",
    imageUrl: "/abstract-geometric-logo.png",
    category: "Automatización",
    slug: "make",
    score: 8.8,
    price: "Desde $9/mes",
    tags: ["Automatización", "Integración", "Visual"],
    verified: false,
  },
  {
    name: "Asana",
    description: "Plataforma de gestión de proyectos y tareas para equipos.",
    imageUrl: "/Asana-logo-abstract.png",
    category: "Gestión de tareas",
    slug: "asana",
    score: 8.5,
    price: "Desde $10.99/mes",
    tags: ["Gestión de proyectos", "Colaboración", "Tareas"],
    verified: true,
  },
  {
    name: "Fireflies",
    description: "Transcribe y analiza reuniones automáticamente con IA.",
    imageUrl: "/fireflies-ai-logo-blue.png",
    category: "Reuniones",
    slug: "fireflies",
    score: 8.9,
    price: "Desde $10/mes",
    tags: ["Transcripción", "Reuniones", "Análisis"],
    verified: true,
  },
  {
    name: "Otter.ai",
    description: "Asistente de notas con IA para transcribir y resumir reuniones.",
    imageUrl: "/otter-ai-logo-inspired-design.png",
    category: "Reuniones",
    slug: "otter-ai",
    score: 8.7,
    price: "Desde $8.33/mes",
    tags: ["Transcripción", "Reuniones", "Notas"],
    verified: false,
  },
  {
    name: "Trello",
    description: "Herramienta visual para gestionar proyectos y tareas con tableros Kanban.",
    imageUrl: "/trello-logo-abstract.png",
    category: "Gestión de tareas",
    slug: "trello",
    score: 7.8,
    price: "Desde $5/mes",
    tags: ["Kanban", "Gestión de proyectos", "Visual"],
    verified: true,
  },
  {
    name: "ChatGPT",
    description: "Asistente de IA conversacional para múltiples tareas y generación de contenido.",
    imageUrl: "/stylized-chat-icon.png",
    category: "Escritura IA",
    slug: "chatgpt",
    score: 9.1,
    price: "Desde $20/mes",
    tags: ["Conversacional", "Escritura", "Asistente"],
    verified: true,
  },
  {
    name: "Fathom",
    description: "Herramienta de análisis y transcripción de reuniones con IA.",
    imageUrl: "/abstract-geometric-logo.png",
    category: "Reuniones",
    slug: "fathom",
    score: 8.2,
    price: "Desde $12/mes",
    tags: ["Transcripción", "Reuniones", "Análisis"],
    verified: false,
  },
]

// Categorías disponibles
const categories = ["Todas", "Escritura IA", "Automatización", "Gestión de tareas", "Reuniones", "Comunicación"]

// Rangos de precios
const priceRanges = [
  { label: "Todos los precios", value: "all" },
  { label: "Gratis", value: "free" },
  { label: "Menos de $10/mes", value: "under10" },
  { label: "Entre $10 y $20/mes", value: "10to20" },
  { label: "Más de $20/mes", value: "over20" },
]

export default function TodasLasHerramientasPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Todas")
  const [selectedPriceRange, setSelectedPriceRange] = useState("all")
  const [minRating, setMinRating] = useState(0)
  const [verifiedOnly, setVerifiedOnly] = useState(false)
  const [sortBy, setSortBy] = useState("rating")
  const [showFilters, setShowFilters] = useState(false)
  const [activeFilters, setActiveFilters] = useState<string[]>([])
  const [filteredTools, setFilteredTools] = useState(allTools)
  const [isClient, setIsClient] = useState(false) // New state variable

  useEffect(() => {
    setIsClient(true) // Set to true when component mounts on client
  }, [])

  // Aplicar filtros cuando cambien los criterios
  useEffect(() => {
    let filtered = [...allTools]
    const newActiveFilters: string[] = []

    // Filtrar por término de búsqueda
    if (searchTerm) {
      filtered = filtered.filter(
        (tool) =>
          tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          tool.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())),
      )
      newActiveFilters.push(`Búsqueda: "${searchTerm}"`)
    }

    // Filtrar por categoría
    if (selectedCategory !== "Todas") {
      filtered = filtered.filter((tool) => tool.category === selectedCategory)
      newActiveFilters.push(`Categoría: ${selectedCategory}`)
    }

    // Filtrar por rango de precio
    if (selectedPriceRange !== "all") {
      switch (selectedPriceRange) {
        case "free":
          filtered = filtered.filter((tool) => tool.price.includes("Gratis") || tool.price.includes("$0"))
          newActiveFilters.push("Precio: Gratis")
          break
        case "under10":
          filtered = filtered.filter((tool) => {
            const price = Number.parseFloat(tool.price.replace(/[^0-9.]/g, ""))
            return price < 10
          })
          newActiveFilters.push("Precio: < $10/mes")
          break
        case "10to20":
          filtered = filtered.filter((tool) => {
            const price = Number.parseFloat(tool.price.replace(/[^0-9.]/g, ""))
            return price >= 10 && price <= 20
          })
          newActiveFilters.push("Precio: $10-$20/mes")
          break
        case "over20":
          filtered = filtered.filter((tool) => {
            const price = Number.parseFloat(tool.price.replace(/[^0-9.]/g, ""))
            return price > 20
          })
          newActiveFilters.push("Precio: > $20/mes")
          break
      }
    }

    // Filtrar por valoración mínima
    if (minRating > 0) {
      filtered = filtered.filter((tool) => tool.score >= minRating)
      newActiveFilters.push(`Valoración: ≥ ${minRating}`)
    }

    // Filtrar solo verificadas
    if (verifiedOnly) {
      filtered = filtered.filter((tool) => tool.verified)
      newActiveFilters.push("Solo verificadas")
    }

    // Ordenar resultados
    switch (sortBy) {
      case "rating":
        filtered.sort((a, b) => b.score - a.score)
        break
      case "name":
        filtered.sort((a, b) => a.name.localeCompare(b.name))
        break
      case "price_low":
        filtered.sort((a, b) => {
          const priceA = Number.parseFloat(a.price.replace(/[^0-9.]/g, ""))
          const priceB = Number.parseFloat(b.price.replace(/[^0-9.]/g, ""))
          return priceA - priceB
        })
        break
      case "price_high":
        filtered.sort((a, b) => {
          const priceA = Number.parseFloat(a.price.replace(/[^0-9.]/g, ""))
          const priceB = Number.parseFloat(b.price.replace(/[^0-9.]/g, ""))
          return priceB - priceA
        })
        break
    }

    setFilteredTools(filtered)
    setActiveFilters(newActiveFilters)
  }, [searchTerm, selectedCategory, selectedPriceRange, minRating, verifiedOnly, sortBy])

  // Limpiar todos los filtros
  const clearFilters = () => {
    setSearchTerm("")
    setSelectedCategory("Todas")
    setSelectedPriceRange("all")
    setMinRating(0)
    setVerifiedOnly(false)
    setSortBy("rating")
  }

  // Eliminar un filtro específico
  const removeFilter = (filter: string) => {
    if (filter.startsWith("Búsqueda:")) {
      setSearchTerm("")
    } else if (filter.startsWith("Categoría:")) {
      setSelectedCategory("Todas")
    } else if (filter.startsWith("Precio:")) {
      setSelectedPriceRange("all")
    } else if (filter.startsWith("Valoración:")) {
      setMinRating(0)
    } else if (filter === "Solo verificadas") {
      setVerifiedOnly(false)
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-light to-sky py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-3xl font-bold tracking-tight text-secondary sm:text-4xl md:text-5xl">
              Todas las Herramientas
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Explora nuestra colección completa de herramientas de IA para trabajo remoto.
            </p>
          </div>
        </div>
      </section>

      {/* Filtros y búsqueda */}
      <section className="border-b border-t bg-gray-50 py-6 sticky top-16 z-30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4">
            {/* Barra de búsqueda y botón de filtros */}
            <div className="flex items-center gap-2">
              <div className="relative flex-1">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  type="text"
                  placeholder="Buscar herramientas..."
                  className="w-full pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button
                variant="outline"
                className="flex items-center gap-2"
                onClick={() => setShowFilters(!showFilters)}
              >
                <SlidersHorizontal className="h-4 w-4" />
                <span className="hidden sm:inline">Filtros</span>
                {activeFilters.length > 0 && <Badge className="ml-1 bg-primary">{activeFilters.length}</Badge>}
              </Button>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">Mejor valoradas</SelectItem>
                  <SelectItem value="name">Alfabético</SelectItem>
                  <SelectItem value="price_low">Precio: Bajo a alto</SelectItem>
                  <SelectItem value="price_high">Precio: Alto a bajo</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Filtros activos */}
            {activeFilters.length > 0 && (
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm text-gray-500">Filtros activos:</span>
                {activeFilters.map((filter) => (
                  <Badge key={filter} variant="secondary" className="flex items-center gap-1 bg-gray-100">
                    {filter}
                    <button
                      onClick={() => removeFilter(filter)}
                      className="ml-1 rounded-full hover:bg-gray-200"
                      aria-label={`Eliminar filtro ${filter}`}
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
                <Button variant="ghost" size="sm" onClick={clearFilters} className="text-xs text-gray-500">
                  Limpiar todos
                </Button>
              </div>
            )}

            {/* Panel de filtros avanzados */}
            {showFilters && (
              <div className="mt-4 rounded-lg border bg-white p-4 shadow-sm">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                  {/* Filtro por categoría */}
                  <div>
                    <h3 className="mb-2 text-sm font-medium">Categoría</h3>
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccionar categoría" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Filtro por precio */}
                  <div>
                    <h3 className="mb-2 text-sm font-medium">Precio</h3>
                    <Select value={selectedPriceRange} onValueChange={setSelectedPriceRange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccionar rango de precio" />
                      </SelectTrigger>
                      <SelectContent>
                        {priceRanges.map((range) => (
                          <SelectItem key={range.value} value={range.value}>
                            {range.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Filtro por valoración mínima */}
                  <div>
                    <h3 className="mb-2 text-sm font-medium">Valoración mínima: {minRating}</h3>
                    <Slider
                      value={[minRating]}
                      min={0}
                      max={10}
                      step={0.5}
                      onValueChange={(value) => setMinRating(value[0])}
                      className="py-2"
                    />
                  </div>

                  {/* Filtro por verificación */}
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="verified"
                      checked={verifiedOnly}
                      onCheckedChange={(checked) => setVerifiedOnly(checked as boolean)}
                    />
                    <label
                      htmlFor="verified"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Solo herramientas verificadas
                    </label>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Lista de herramientas */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredTools.length > 0 && isClient ? (
            <>
              <div className="mb-6 flex items-center justify-between">
                <p className="text-sm text-gray-500">
                  Mostrando {filteredTools.length} de {allTools.length} herramientas
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredTools.map((tool) => (
                  <ToolCard
                    key={tool.slug}
                    name={tool.name}
                    description={tool.description}
                    imageUrl={tool.imageUrl}
                    category={tool.category}
                    url={`/herramientas/${tool.slug}`}
                    featured={tool.score > 9}
                    score={tool.score}
                    verified={tool.verified}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="py-12 text-center">
              <p className="text-lg text-gray-600">
                No se encontraron herramientas que coincidan con tus criterios de búsqueda.
              </p>
              <Button onClick={clearFilters} className="mt-4 bg-primary hover:bg-primary/90">
                Limpiar filtros
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              ¿No encuentras lo que buscas?
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Contáctanos para recibir recomendaciones personalizadas o sugerir una herramienta que deberíamos incluir.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link href="/sobre-nosotros#contacto">Contactar</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link href="/herramientas/comparar">Comparar herramientas</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
