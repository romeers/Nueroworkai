"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, ArrowRight, Star, PlusCircle } from "lucide-react"
import SafeImage from "@/components/safe-image"
import KitPromoBlock from "@/components/kit-promo-block"
import { cn } from "@/lib/utils"
import ResourcesCollectionSchema from "@/components/seo/resources-collection-schema"

// Categorías disponibles
const categories = [
  { id: "todos", label: "Todos" },
  { id: "guias", label: "Guías prácticas" },
  { id: "prompts", label: "Prompts IA" },
  { id: "automatizacion", label: "Automatización" },
  { id: "plantillas", label: "Plantillas" },
  { id: "analisis", label: "Análisis" },
  { id: "tutoriales", label: "Tutoriales" },
]

// Datos para recursos destacados - Ahora vacío
const featuredResources = []

// Datos para todos los recursos - Ahora vacío
const allResources = []

// Recursos más visitados esta semana - Ahora vacío
const topResources = []

export default function RecursosPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [activeCategory, setActiveCategory] = useState("todos")
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredResources, setFilteredResources] = useState([])
  const [isSearchFocused, setIsSearchFocused] = useState(false)

  // Referencias para scroll
  const recursosRef = useRef<HTMLDivElement>(null)
  const kitRef = useRef<HTMLDivElement>(null)
  const filteredResourcesRef = useRef<HTMLDivElement>(null)

  // Inicializar desde parámetros de URL
  useEffect(() => {
    const categoryParam = searchParams.get("categoria") || "todos"
    const queryParam = searchParams.get("q") || ""

    setActiveCategory(categoryParam)
    setSearchQuery(queryParam)
  }, [searchParams])

  // Filtrar recursos cuando cambia la categoría o la búsqueda
  useEffect(() => {
    // Como no hay recursos, siempre será un array vacío
    setFilteredResources([])
  }, [activeCategory, searchQuery])

  // Manejar cambio de categoría
  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId)

    // Actualizar URL sin recargar la página
    const params = new URLSearchParams(searchParams.toString())
    if (categoryId === "todos") {
      params.delete("categoria")
    } else {
      params.set("categoria", categoryId)
    }

    if (searchQuery) {
      params.set("q", searchQuery)
    }

    router.push(`/recursos?${params.toString()}`, { scroll: false })

    // Pequeño retraso para asegurar que los recursos se filtren antes de hacer scroll
    setTimeout(() => {
      // Scroll suave a la sección de recursos filtrados
      if (filteredResourcesRef.current) {
        filteredResourcesRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }, 100)
  }

  // Manejar búsqueda
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Actualizar URL sin recargar la página
    const params = new URLSearchParams()
    if (activeCategory !== "todos") {
      params.set("categoria", activeCategory)
    }

    if (searchQuery) {
      params.set("q", searchQuery)
    }

    router.push(`/recursos?${params.toString()}`, { scroll: false })

    // Pequeño retraso para asegurar que los recursos se filtren antes de hacer scroll
    setTimeout(() => {
      // Scroll suave a la sección de recursos filtrados
      if (filteredResourcesRef.current) {
        filteredResourcesRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }, 100)
  }

  // Scroll a secciones
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      {/* Schema.org structured data */}
      <ResourcesCollectionSchema
        title="Guías, Prompts y Plantillas IA para ser más productivo"
        description="Descubre recursos prácticos para escribir, automatizar, organizar y optimizar tu trabajo remoto con inteligencia artificial."
        resources={[]}
        categories={categories}
      />

      {/* Hero Section - SEO Optimized */}
      <section className="relative py-16 md:py-20 overflow-hidden bg-gradient-to-r from-gray-50 to-violet-50">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <SafeImage src="/neural-network-bg.png" alt="Patrón de red neuronal" fill className="object-cover" />
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-3xl font-bold tracking-tight text-secondary sm:text-4xl md:text-5xl">
              Guías, Prompts y Plantillas IA para ser más productivo
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Descubre recursos prácticos para escribir, automatizar, organizar y optimizar tu trabajo remoto con
              inteligencia artificial.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-primary hover:bg-primary/90" onClick={() => scrollToSection(recursosRef)}>
                Explorar recursos
              </Button>
              <Button variant="outline" className="flex items-center gap-2" onClick={() => scrollToSection(kitRef)}>
                <ArrowRight className="h-4 w-4" />
                Próximamente
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs - Sticky on Scroll */}
      <section className="sticky top-16 z-30 bg-white border-b py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="relative w-full md:max-w-md">
              <form onSubmit={handleSearch}>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input
                    type="text"
                    placeholder="Buscar recursos..."
                    className="w-full pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setIsSearchFocused(false)}
                    aria-label="Buscar recursos"
                  />
                  {isSearchFocused && (
                    <Button
                      type="submit"
                      size="sm"
                      className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-primary hover:bg-primary/90"
                    >
                      Buscar
                    </Button>
                  )}
                </div>
              </form>
            </div>

            <div
              className="flex overflow-x-auto pb-2 gap-2 scrollbar-hide"
              role="tablist"
              aria-label="Categorías de recursos"
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  role="tab"
                  aria-selected={activeCategory === category.id}
                  aria-controls={`panel-${category.id}`}
                  id={`tab-${category.id}`}
                  onClick={() => handleCategoryChange(category.id)}
                  className={cn(
                    "px-4 py-2 rounded-full border font-medium text-sm whitespace-nowrap transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                    activeCategory === category.id
                      ? "bg-primary text-white border-primary"
                      : "text-gray-700 border-gray-300 hover:bg-violet-100",
                  )}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resources - Placeholder */}
      <section id="recursos" ref={recursosRef} className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-secondary mb-8">Recursos destacados</h2>

          <div className="bg-gray-50 rounded-xl p-10 text-center">
            <div className="mb-6">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <PlusCircle className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">
              Próximamente nuevos recursos de productividad con IA
            </h3>
            <p className="text-gray-500 mb-6 max-w-2xl mx-auto">
              Estamos preparando guías, prompts y plantillas para ayudarte a optimizar tu trabajo.
              <br />
              Vuelve pronto para descubrir contenido exclusivo sobre productividad con IA.
            </p>
            <Button asChild variant="outline" className="mr-4">
              <Link href="/contacto">Sugerir un recurso</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Lead Magnet CTA */}
      <section id="kit-gratuito" ref={kitRef} className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <KitPromoBlock />
          </div>
        </div>
      </section>

      {/* Resources Grid - Filtered by Category - Placeholder */}
      <section className="py-16 bg-white" ref={filteredResourcesRef}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-secondary">
              {activeCategory === "todos"
                ? "Todos los recursos"
                : `Recursos de ${categories.find((c) => c.id === activeCategory)?.label}`}
            </h2>
            <div className="flex items-center text-sm text-gray-500">
              <span>Mostrando 0 recursos</span>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-12 text-center">
            <div className="mb-6">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <PlusCircle className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">
              Próximamente nuevos recursos de productividad con IA
            </h3>
            <p className="text-gray-500 mb-6 max-w-2xl mx-auto">
              Estamos preparando{" "}
              {activeCategory !== "todos"
                ? `recursos de ${categories.find((c) => c.id === activeCategory)?.label.toLowerCase()}`
                : "recursos"}{" "}
              para ayudarte a optimizar tu trabajo.
              <br />
              Vuelve pronto para descubrir contenido exclusivo sobre productividad con IA.
            </p>
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link href="/contacto">Sugerir un recurso</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Más visitados esta semana - Placeholder */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-secondary mb-8">Más visitados esta semana</h2>

          <div className="bg-white rounded-xl shadow-sm p-10 text-center">
            <div className="mb-6">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Star className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">Próximamente recursos destacados</h3>
            <p className="text-gray-500 mb-6">
              Estamos seleccionando los mejores recursos de productividad con IA para ti.
              <br />
              Vuelve pronto para descubrir nuestro contenido más popular.
            </p>
            <Button asChild variant="outline">
              <Link href="/contacto">Sugerir un recurso</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-primary py-16 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              ¿Listo para potenciar tu productividad?
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Explora herramientas IA y recursos prácticos para transformar tu flujo de trabajo.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link href="/herramientas-ia" data-umami-event="recursos-to-herramientas-cta">
                  Descubrir herramientas IA
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
