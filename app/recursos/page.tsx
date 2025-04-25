"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Download, Search, ArrowRight } from "lucide-react"
import SafeImage from "@/components/safe-image"
import KitPromoBlock from "@/components/kit-promo-block"
import { cn } from "@/lib/utils"
import { BaseCard, CardImage, CardContent, CardFooter } from "@/components/ui/card"

// Categorías disponibles
const categories = [
  { id: "todos", label: "Todos" },
  { id: "guias", label: "Guías prácticas" },
  { id: "prompts", label: "Prompts IA" },
  { id: "automatizacion", label: "Automatización" },
  { id: "plantillas", label: "Plantillas" },
]

// Datos para recursos destacados
const featuredResources = [
  {
    title: "50 Prompts Avanzados para Notion AI, ChatGPT y Jasper",
    description:
      "Colección de prompts optimizados para generar contenido de alta calidad con las principales herramientas de escritura IA.",
    imageUrl: "/ai-prompt-examples.png",
    category: "Prompts IA",
    categoryId: "prompts",
    slug: "prompts-avanzados-notion-chatgpt-jasper",
    ctaText: "Descargar prompts",
    isDownloadable: true,
    toolAffiliateUrl: "https://notion.so/product/ai?ref=neuroworkai",
    toolName: "Notion AI",
    featured: true,
  },
  {
    title: "Automatiza tu equipo remoto con Zapier y Make",
    description:
      "Guía paso a paso para crear flujos de trabajo automatizados que ahorran hasta 10 horas semanales a tu equipo.",
    imageUrl: "/automation-workflows-templates.png",
    category: "Automatización",
    categoryId: "automatizacion",
    slug: "automatiza-equipo-remoto-zapier-make",
    ctaText: "Leer guía",
    isDownloadable: false,
    toolAffiliateUrl: "https://zapier.com/?utm_source=neuroworkai&utm_medium=affiliate",
    toolName: "Zapier",
    featured: true,
  },
  {
    title: "Plantilla editable de productividad IA en Notion",
    description:
      "Sistema completo para gestionar tareas, proyectos y objetivos con integración de IA para maximizar tu productividad.",
    imageUrl: "/task-management-templates.png",
    category: "Plantillas",
    categoryId: "plantillas",
    slug: "plantilla-productividad-ia-notion",
    ctaText: "Obtener plantilla",
    isDownloadable: true,
    toolAffiliateUrl: "https://notion.so/product/ai?ref=neuroworkai",
    toolName: "Notion",
    featured: true,
  },
]

// Datos para todos los recursos
const allResources = [
  // Recursos destacados
  ...featuredResources,

  // Guías prácticas
  {
    title: "Cómo implementar IA en tu flujo de trabajo diario",
    description: "Guía paso a paso para integrar herramientas de IA en tu rutina diaria y aumentar tu productividad.",
    imageUrl: "/interconnected-ai-workflow.png",
    category: "Guías prácticas",
    categoryId: "guias",
    slug: "implementar-ia-flujo-trabajo",
    readTime: "8 min",
    toolName: "ChatGPT",
    toolAffiliateUrl: "#",
    featured: false,
  },
  {
    title: "Automatización para principiantes: Primeros pasos con Zapier",
    description:
      "Aprende a crear tus primeras automatizaciones y conectar tus aplicaciones favoritas sin escribir código.",
    imageUrl: "/connected-apps-workflow.png",
    category: "Automatización",
    categoryId: "automatizacion",
    slug: "automatizacion-principiantes-zapier",
    readTime: "12 min",
    toolName: "Zapier",
    toolAffiliateUrl: "https://zapier.com/?utm_source=neuroworkai&utm_medium=affiliate",
    featured: false,
  },
  {
    title: "Mejores prácticas para reuniones remotas con IA",
    description:
      "Descubre cómo utilizar herramientas de IA para hacer tus reuniones remotas más productivas y efectivas.",
    imageUrl: "/collaborative-ai-meeting.png",
    category: "Guías prácticas",
    categoryId: "guias",
    slug: "mejores-practicas-reuniones-remotas-ia",
    readTime: "10 min",
    toolName: "Fireflies.ai",
    toolAffiliateUrl: "#",
    featured: false,
  },

  // Prompts IA
  {
    title: "Guía definitiva de prompts para ChatGPT y Notion AI",
    description:
      "Aprende a crear prompts efectivos para obtener los mejores resultados de las herramientas de IA generativa.",
    imageUrl: "/ai-prompt-examples.png",
    category: "Prompts IA",
    categoryId: "prompts",
    slug: "guia-definitiva-prompts-chatgpt-notion-ai",
    readTime: "15 min",
    toolName: "ChatGPT",
    toolAffiliateUrl: "#",
    featured: false,
  },
  {
    title: "30 prompts para marketing digital con IA",
    description: "Colección de prompts optimizados para crear contenido de marketing digital de alta calidad con IA.",
    imageUrl: "/ai-marketing-brainstorm.png",
    category: "Prompts IA",
    categoryId: "prompts",
    slug: "prompts-marketing-digital-ia",
    readTime: "7 min",
    toolName: "Jasper",
    toolAffiliateUrl: "#",
    featured: false,
  },
  {
    title: "Prompts para crear imágenes profesionales con DALL-E y Midjourney",
    description: "Guía completa para generar imágenes de alta calidad para tu negocio o proyecto con IA.",
    imageUrl: "/bustling-city-market.png",
    category: "Prompts IA",
    categoryId: "prompts",
    slug: "prompts-imagenes-profesionales-dalle-midjourney",
    readTime: "9 min",
    toolName: "Midjourney",
    toolAffiliateUrl: "#",
    featured: false,
  },

  // Automatización
  {
    title: "Cómo automatizar tu proceso de ventas con IA",
    description:
      "Guía paso a paso para implementar automatizaciones que optimizan tu embudo de ventas y aumentan conversiones.",
    imageUrl: "/AI-Powered-Sales-Growth.png",
    category: "Automatización",
    categoryId: "automatizacion",
    slug: "automatizar-proceso-ventas-ia",
    readTime: "14 min",
    toolName: "Make",
    toolAffiliateUrl: "#",
    featured: false,
  },
  {
    title: "Flujos de trabajo automatizados para equipos de marketing",
    description:
      "Plantillas y ejemplos de automatizaciones para optimizar las tareas repetitivas en equipos de marketing.",
    imageUrl: "/interconnected-marketing-flow.png",
    category: "Automatización",
    categoryId: "automatizacion",
    slug: "flujos-trabajo-automatizados-equipos-marketing",
    readTime: "11 min",
    toolName: "Zapier",
    toolAffiliateUrl: "https://zapier.com/?utm_source=neuroworkai&utm_medium=affiliate",
    featured: false,
  },

  // Plantillas
  {
    title: "Plantilla de gestión de proyectos con IA en ClickUp",
    description:
      "Sistema completo para gestionar proyectos integrando funciones de IA para optimizar el seguimiento y la colaboración.",
    imageUrl: "/clickup-project-template-overview.png",
    category: "Plantillas",
    categoryId: "plantillas",
    slug: "plantilla-gestion-proyectos-ia-clickup",
    readTime: "5 min",
    toolName: "ClickUp",
    toolAffiliateUrl: "#",
    featured: false,
  },
  {
    title: "Dashboard de productividad personal con Notion AI",
    description: "Plantilla para monitorizar y mejorar tu productividad personal con la ayuda de Notion AI.",
    imageUrl: "/notion-ai-dashboard-concept.png",
    category: "Plantillas",
    categoryId: "plantillas",
    slug: "dashboard-productividad-personal-notion-ai",
    readTime: "6 min",
    toolName: "Notion AI",
    toolAffiliateUrl: "https://notion.so/product/ai?ref=neuroworkai",
    featured: false,
  },
  {
    title: "Plantilla de calendario editorial con IA para content marketing",
    description: "Sistema para planificar, crear y distribuir contenido optimizado con herramientas de IA.",
    imageUrl: "/ai-content-calendar-concept.png",
    category: "Plantillas",
    categoryId: "plantillas",
    slug: "plantilla-calendario-editorial-ia-content-marketing",
    readTime: "8 min",
    toolName: "Jasper",
    toolAffiliateUrl: "#",
    featured: false,
  },
]

// Recursos más visitados esta semana
const topResources = [
  {
    title: "50 Prompts Avanzados para Notion AI, ChatGPT y Jasper",
    slug: "prompts-avanzados-notion-chatgpt-jasper",
    views: 1250,
  },
  {
    title: "Automatiza tu equipo remoto con Zapier y Make",
    slug: "automatiza-equipo-remoto-zapier-make",
    views: 980,
  },
  {
    title: "Guía definitiva de prompts para ChatGPT y Notion AI",
    slug: "guia-definitiva-prompts-chatgpt-notion-ai",
    views: 845,
  },
  {
    title: "Plantilla editable de productividad IA en Notion",
    slug: "plantilla-productividad-ia-notion",
    views: 720,
  },
  {
    title: "Mejores prácticas para reuniones remotas con IA",
    slug: "mejores-practicas-reuniones-remotas-ia",
    views: 685,
  },
]

export default function RecursosPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [activeCategory, setActiveCategory] = useState("todos")
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredResources, setFilteredResources] = useState(allResources.filter((r) => !r.featured))
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
        <div className="absolute inset-0 opacity-10 pointer-events-none hidden md:block">
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
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredResources.map((resource) => (
              <BaseCard key={resource.slug}>
                <CardImage src={resource.imageUrl} alt={resource.title} aspectRatio="square" className="h-40" />
                <CardContent padding="medium">
                  <h3 className="text-xl font-bold text-secondary">{resource.title}</h3>
                  <p className="text-gray-600">{resource.description}</p>
                </CardContent>
                <CardFooter padding="small">
                  <Button asChild className="w-full gap-2 bg-primary hover:bg-primary/90">
                    <Link href={resource.downloadUrl} className="flex items-center justify-center">
                      <Download className="mr-2 h-4 w-4" />
                      Descargar
                    </Link>
                  </Button>
                </CardFooter>
              </BaseCard>
            ))}
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
                <BaseCard key={resource.slug}>
                  <CardImage src={resource.imageUrl} alt={resource.title} aspectRatio="square" className="h-40" />
                  <CardContent padding="medium">
                    <h3 className="text-xl font-bold text-secondary">{resource.title}</h3>
                    <p className="text-gray-600">{resource.description}</p>
                  </CardContent>
                  <CardFooter padding="small">
                    <Button asChild variant="outline" size="sm">
                      <Link href={`/recursos/${resource.slug}`}>Leer más</Link>
                    </Button>
                  </CardFooter>
                </BaseCard>
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

          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="divide-y">
              {topResources.map((resource, index) => (
                <Link
                  key={resource.slug}
                  href={`/recursos/${resource.slug}`}
                  className="flex items-center p-4 hover:bg-gray-50 transition-colors"
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
                <Link href="/herramientas-ia">Descubrir herramientas IA</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
