"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, SlidersHorizontal, X, Sparkles } from "lucide-react"
import ToolCard from "@/components/tool-card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"

// Sample data for all tools
const allTools = [
  {
    name: "Fireflies.ai",
    description:
      "Fireflies.ai es una herramienta de IA que transcribe, resume, busca y analiza reuniones automáticamente.",
    imageUrl: "/fireflies-logo.png",
    category: "Reuniones",
    slug: "fireflies-ai",
    score: 9.2,
    price: "Desde $10/mes",
    tags: ["Transcripción", "Reuniones", "Análisis"],
    verified: true,
  },
  // Other tools removed for brevity
]

// Available categories
const categories = ["Todas", "Escritura IA", "Automatización", "Gestión de tareas", "Reuniones", "Comunicación"]

// Price ranges
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
  const [isClient, setIsClient] = useState(false) // State variable for client-side rendering
  const tools = allTools

  useEffect(() => {
    setIsClient(true) // Set to true when component mounts on client
  }, [])

  // Apply filters when criteria change
  useEffect(() => {
    let filtered = [...allTools]
    const newActiveFilters: string[] = []

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (tool) =>
          tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          tool.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())),
      )
      newActiveFilters.push(`Búsqueda: "${searchTerm}"`)
    }

    // Filter by category
    if (selectedCategory !== "Todas") {
      filtered = filtered.filter((tool) => tool.category === selectedCategory)
      newActiveFilters.push(`Categoría: ${selectedCategory}`)
    }

    // Filter by price range
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

    // Filter by minimum rating
    if (minRating > 0) {
      filtered = filtered.filter((tool) => tool.score >= minRating)
      newActiveFilters.push(`Valoración: ≥ ${minRating}`)
    }

    // Filter verified only
    if (verifiedOnly) {
      filtered = filtered.filter((tool) => tool.verified)
      newActiveFilters.push("Solo verificadas")
    }

    // Sort results
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

  // Clear all filters
  const clearFilters = () => {
    setSearchTerm("")
    setSelectedCategory("Todas")
    setSelectedPriceRange("all")
    setMinRating(0)
    setVerifiedOnly(false)
    setSortBy("rating")
  }

  // Remove a specific filter
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

      {/* Filters and search */}
      <section className="border-b border-t bg-gray-50 py-6 sticky top-16 z-30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4">
            {/* Search bar and filter button */}
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

            {/* Active filters */}
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

            {/* Advanced filters panel */}
            {showFilters && (
              <div className="mt-4 rounded-lg border bg-white p-4 shadow-sm">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                  {/* Category filter */}
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

                  {/* Price filter */}
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

                  {/* Minimum rating filter */}
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

                  {/* Verified filter */}
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

      {/* Tools list */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {isClient ? (
            <>
              {filteredTools.length > 0 ? (
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
                        slug={tool.slug}
                      />
                    ))}
                  </div>
                </>
              ) : (
                <div className="bg-gray-50 rounded-lg p-8 text-center">
                  <div className="mb-4">
                    <Sparkles className="h-12 w-12 text-blue-500 mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">No se encontraron herramientas</h3>
                  <p className="text-gray-600 mb-6">
                    No se encontraron herramientas que coincidan con tus criterios de búsqueda. Prueba con otros filtros
                    o sugiere una herramienta.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button onClick={clearFilters} className="bg-primary hover:bg-primary/90">
                      Limpiar filtros
                    </Button>
                    <Button asChild variant="outline">
                      <Link href="/contacto">Sugerir una herramienta</Link>
                    </Button>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="flex justify-center py-12">
              <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
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
                <Link href="/contacto">Contactar</Link>
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
