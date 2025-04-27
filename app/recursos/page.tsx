"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Download, Search, ArrowRight, Clock, Star } from "lucide-react"
import SafeImage from "@/components/safe-image"
import KitPromoBlock from "@/components/kit-promo-block"
import { cn } from "@/lib/utils"

// Función segura para formatear la fecha en español
function obtenerFechaFormateada() {
  try {
    return new Date().toLocaleDateString("es-ES", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })
  } catch (error) {
    // Fallback por si hay problemas con la localización
    const fecha = new Date()
    return `${fecha.getDate()} de abril, ${fecha.getFullYear()}`
  }
}

const fechaActual = obtenerFechaFormateada()

// Update the categories to include all former blog content
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

// Datos para recursos destacados
const featuredResources = [
  {
    title: "Cómo implementar IA en tu flujo de trabajo diario",
    description:
      "Descubre cómo integrar herramientas de IA en tus procesos diarios sin necesidad de ser un experto técnico. Guía práctica para empresas de cualquier tamaño.",
    imageUrl: "/implementar-ia-flujo-trabajo-2025.png",
    category: "Guías prácticas",
    categoryId: "guias",
    slug: "implement-ai-daily-workflow",
    ctaText: "Leer guía",
    isDownloadable: false,
    toolAffiliateUrl: "https://notion.so/product/ai?ref=neuroworkai",
    toolName: "Notion AI",
    featured: true,
  },
]

// Datos para todos los recursos
const allResources = [
  // Incluir el recurso destacado
  {
    title: "Cómo implementar IA en tu flujo de trabajo diario",
    description:
      "Descubre cómo integrar herramientas de IA en tus procesos diarios sin necesidad de ser un experto técnico. Guía práctica para empresas de cualquier tamaño.",
    imageUrl: "/implementar-ia-flujo-trabajo-2025.png",
    category: "Guías prácticas",
    categoryId: "guias",
    slug: "implement-ai-daily-workflow",
    readTime: "8 min",
    toolName: "Notion AI",
    toolAffiliateUrl: "https://notion.so/product/ai?ref=neuroworkai",
    featured: true,
  },
]

// Recursos más visitados esta semana
const topResources = [
  {
    title: "Cómo implementar IA en tu flujo de trabajo diario",
    slug: "implement-ai-daily-workflow",
    views: 120,
  },
]

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
  const filteredResourcesRef = useRef<HTMLDivElement>(null) // Nueva referencia para la sección de recursos filtrados

  // Inicializar desde parámetros de URL
  useEffect(() => {
    const categoryParam = searchParams.get("categoria") || "todos"
    const queryParam = searchParams.get("q") || ""

    setActiveCategory(categoryParam)
    setSearchQuery(queryParam)
  }, [searchParams])

  // Filtrar recursos cuando cambia la categoría o la búsqueda
  useEffect(() => {
    let filtered = [...allResources.filter((r) => !r.featured)]

    // Filtrar por categoría
    if (activeCategory !== "todos") {
      filtered = filtered.filter((resource) => resource.categoryId === activeCategory)
    }

    // Filtrar por búsqueda
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (resource) =>
          resource.title.toLowerCase().includes(query) || resource.description.toLowerCase().includes(query),
      )
    }

    setFilteredResources(filtered)
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
                <Download className="h-4 w-4" />
                Descargar Kit Gratuito
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

      {/* Featured Resources */}
      <section id="recursos" ref={recursosRef} className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-secondary mb-8">Recursos destacados</h2>
          {featuredResources.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredResources.map((resource) => (
                <article
                  key={resource.slug}
                  className="group rounded-xl overflow-hidden border bg-white shadow-sm hover:shadow-md transition-all duration-200 flex flex-col h-full"
                >
                  <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                    <SafeImage
                      src={resource.imageUrl}
                      alt={resource.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-0 left-0 m-3">
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                        {resource.category}
                      </span>
                    </div>
                    {resource.featured && (
                      <div className="absolute top-0 right-0 m-3">
                        <span className="inline-flex items-center rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-800">
                          <Star className="mr-1 h-3 w-3" />
                          Destacado
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="flex-1 p-6 flex flex-col">
                    <h3 className="text-xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
                      <Link href={`/recursos/${resource.slug}`}>{resource.title}</Link>
                    </h3>
                    <p className="text-gray-600 mb-4 flex-grow">{resource.description}</p>

                    <div className="mt-auto flex flex-col sm:flex-row gap-3">
                      <Button asChild variant={resource.isDownloadable ? "default" : "outline"} className="flex-1">
                        <Link
                          href={`/recursos/${resource.slug}`}
                          className="flex items-center justify-center"
                          data-umami-event={`resource-${resource.isDownloadable ? "download" : "read"}-${resource.slug}`}
                        >
                          {resource.isDownloadable ? (
                            <>
                              <Download className="mr-2 h-4 w-4" />
                              {resource.ctaText}
                            </>
                          ) : (
                            <>
                              {resource.ctaText}
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </>
                          )}
                        </Link>
                      </Button>

                      {resource.toolName && resource.toolAffiliateUrl && (
                        <Button asChild className="bg-primary hover:bg-primary/90 flex-1">
                          <Link
                            href={resource.toolAffiliateUrl}
                            target="_blank"
                            rel="noopener sponsored"
                            className="flex items-center justify-center"
                            data-umami-event={`affiliate-${resource.toolName.toLowerCase().replace(/\s+/g, "-")}-${resource.slug}`}
                          >
                            Probar {resource.toolName}
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <p className="text-lg text-gray-600 mb-4">Próximamente nuevos recursos destacados.</p>
              <Button
                onClick={() => {
                  setActiveCategory("todos")
                  setSearchQuery("")
                  router.push("/recursos", { scroll: false })
                }}
                className="bg-primary hover:bg-primary/90"
              >
                Explorar herramientas
              </Button>
            </div>
          )}
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

      {/* Resources Grid - Filtered by Category */}
      <section className="py-16 bg-white" ref={filteredResourcesRef}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-secondary">
              {activeCategory === "todos"
                ? "Todos los recursos"
                : `Recursos de ${categories.find((c) => c.id === activeCategory)?.label}`}
            </h2>
            <div className="flex items-center text-sm text-gray-500">
              <span>Mostrando {filteredResources.length} recursos</span>
            </div>
          </div>

          {filteredResources.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredResources.map((resource) => (
                <article
                  key={resource.slug}
                  className="group rounded-lg border bg-white overflow-hidden transition-all duration-200 hover:shadow-md flex flex-col h-full"
                >
                  <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                    <SafeImage
                      src={resource.imageUrl}
                      alt={resource.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-0 right-0 m-2">
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                        {resource.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 p-6 flex flex-col">
                    {resource.readTime && (
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs text-gray-500 flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {resource.readTime} de lectura
                        </span>
                      </div>
                    )}

                    <h3 className="text-xl font-bold text-secondary mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      <Link href={`/recursos/${resource.slug}`}>{resource.title}</Link>
                    </h3>

                    <p className="text-gray-600 mb-4 line-clamp-2">{resource.description}</p>

                    <div className="mt-auto flex flex-col sm:flex-row gap-3">
                      <Button asChild variant="outline" size="sm" className="flex-1">
                        <Link
                          href={`/recursos/${resource.slug}`}
                          className="flex items-center justify-center"
                          data-umami-event={`resource-read-${resource.slug}`}
                        >
                          Leer más
                          <ArrowRight className="ml-2 h-3 w-3" />
                        </Link>
                      </Button>

                      {resource.toolName && resource.toolAffiliateUrl && (
                        <Button asChild className="bg-primary hover:bg-primary/90 flex-1" size="sm">
                          <Link
                            href={resource.toolAffiliateUrl}
                            target="_blank"
                            rel="noopener sponsored"
                            className="flex items-center justify-center"
                            data-umami-event={`affiliate-${resource.toolName.toLowerCase().replace(/\s+/g, "-")}-${resource.slug}`}
                          >
                            Probar {resource.toolName}
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <p className="text-lg text-gray-600 mb-4">No se encontraron recursos que coincidan con tu búsqueda.</p>
              <Button
                onClick={() => {
                  setActiveCategory("todos")
                  setSearchQuery("")
                  router.push("/recursos", { scroll: false })
                }}
                className="bg-primary hover:bg-primary/90"
              >
                Ver todos los recursos
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Más visitados esta semana */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-secondary mb-8">Más visitados esta semana</h2>

          {topResources.length > 0 ? (
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="divide-y">
                {topResources.map((resource, index) => (
                  <Link
                    key={resource.slug}
                    href={`/recursos/${resource.slug}`}
                    className="flex items-center p-4 hover:bg-gray-50 transition-colors"
                    data-umami-event={`top-resource-click-${resource.slug}`}
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold mr-4">
                      {index + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-medium text-gray-900 truncate">{resource.title}</h3>
                    </div>
                    <div className="flex-shrink-0 text-sm text-gray-500">{resource.views.toLocaleString()} visitas</div>
                    <div className="ml-4">
                      <ArrowRight className="h-4 w-4 text-gray-400" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-lg shadow-sm">
              <p className="text-lg text-gray-600 mb-4">Próximamente estadísticas de recursos más visitados.</p>
            </div>
          )}
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
