"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Star, ExternalLink, Download } from "lucide-react"
import SafeImage from "@/components/safe-image"
import { useEffect, useState, useCallback } from "react"
import { useMediaQuery } from "@/hooks/use-media-query"

// Añadir después de los imports
const noScrollbarStyles = `
  /* Ocultar scrollbar para Chrome, Safari y Opera */
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  
  /* Ocultar scrollbar para IE, Edge y Firefox */
  .no-scrollbar {
    -ms-overflow-style: none;  /* IE y Edge */
    scrollbar-width: none;  /* Firefox */
  }
`

export default function HerramientasIAPageClient({
  initialSearchParams,
  tools,
  categories,
}: { initialSearchParams: { categoria?: string; q?: string }; tools: any[]; categories: any[] }) {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(initialSearchParams.categoria || "todas")
  const [searchQuery, setSearchQuery] = useState(initialSearchParams.q || "")
  const [filteredTools, setFilteredTools] = useState(tools)
  const [isFiltering, setIsFiltering] = useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)")
  const imageSize = isMobile ? 48 : 64

  const debounce = (func, wait) => {
    let timeout
    return (...args) => {
      clearTimeout(timeout)
      timeout = setTimeout(() => func(...args), wait)
    }
  }

  const handleSearch = useCallback(
    debounce((value) => {
      setSearchQuery(value)
      // Lógica de búsqueda
    }, 300),
    [],
  )

  useEffect(() => {
    setCategoriaSeleccionada(initialSearchParams.categoria || "todas")
    setSearchQuery(initialSearchParams.q || "")
    setFilteredTools(tools)
  }, [initialSearchParams, tools])

  useEffect(() => {
    if (categoriaSeleccionada === "todas") {
      setFilteredTools(tools)
    } else {
      const filtered = tools.filter(
        (tool) =>
          tool.category_slug === categoriaSeleccionada || tool.category?.toLowerCase() === categoriaSeleccionada,
      )
      setFilteredTools(filtered.length > 0 ? filtered : tools)
    }
  }, [categoriaSeleccionada, tools])

  // Añadir la categoría "Todas" al principio
  const allCategories = [{ name: "Todas", slug: "todas", icon: "🧠" }, ...categories]

  // Función para obtener la URL oficial de cada herramienta si no existe affiliate_url
  const getDefaultAffiliateUrl = (toolName: string) => {
    const toolUrls: Record<string, string> = {
      "Notion AI": "https://www.notion.so/product/ai",
      Zapier: "https://zapier.com/",
      ClickUp: "https://clickup.com/",
      Fireflies: "https://fireflies.ai/",
      "Otter.ai": "https://otter.ai/",
      Grammarly: "https://www.grammarly.com/",
      Jasper: "https://www.jasper.ai/",
      ChatGPT: "https://chat.openai.com/",
    }

    return toolUrls[toolName] || "https://www.notion.so/product/ai" // Notion AI como fallback
  }

  // Función para renderizar estrellas basadas en la puntuación
  const renderStars = (score: number) => {
    const fullStars = Math.floor(score / 2)
    const halfStar = score % 2 >= 1
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0)

    return (
      <div className="flex">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={`full-${i}`} className="h-3.5 w-3.5 text-yellow-500 fill-yellow-500" />
        ))}
        {halfStar && (
          <span className="relative">
            <Star className="h-3.5 w-3.5 text-yellow-500 fill-yellow-500" style={{ clipPath: "inset(0 50% 0 0)" }} />
            <Star
              className="absolute top-0 left-0 h-3.5 w-3.5 text-gray-300"
              style={{ clipPath: "inset(0 0 0 50%)" }}
            />
          </span>
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <Star key={`empty-${i}`} className="h-3.5 w-3.5 text-gray-300" />
        ))}
      </div>
    )
  }

  // Añadir justo antes del return
  const toolListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: filteredTools.map((tool, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "SoftwareApplication",
        name: tool.name,
        description: tool.description,
        image: tool.image_url,
        applicationCategory: "ProductivityApplication",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "EUR",
        },
        ...(tool.score && {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: tool.score,
            bestRating: "10",
            worstRating: "1",
            ratingCount: "1",
          },
        }),
      },
    })),
  }

  return (
    <>
      {/* Estilos para ocultar scrollbar */}
      <style jsx global>
        {noScrollbarStyles}
      </style>

      {/* Hero Section */}
      <section
        className="py-16 md:py-24 relative overflow-hidden"
        style={{
          background: "linear-gradient(to right, #F9FAFB, #E6F0FF)",
        }}
      >
        {/* Abstract background pattern */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none hidden md:block"
          style={{
            backgroundImage: "url('/neural-network-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden="true"
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-secondary mb-6">
              Herramientas de Productividad con IA
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Explora y prueba las mejores herramientas IA para optimizar tu trabajo remoto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link href="#herramientas">Explorar herramientas</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="#kit-gratuito" className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Descargar Kit Gratuito
                </Link>
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-6">+50 herramientas analizadas · Actualizado 2025</p>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative w-full md:w-2/3 lg:w-1/2 mx-auto">
            <form action="/herramientas-ia" method="GET">
              {categoriaSeleccionada !== "todas" && (
                <input type="hidden" name="categoria" value={categoriaSeleccionada} />
              )}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  name="q"
                  placeholder="Buscar herramienta IA..."
                  className="pl-10 py-3 pr-4 w-full rounded-md border-gray-300"
                  defaultValue={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  aria-label="Buscar herramientas de IA"
                />
                <Button
                  type="submit"
                  className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-primary hover:bg-primary/90 h-8"
                >
                  Buscar
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Filter Tabs - Scrollable on mobile */}
      <section className="py-6 bg-white sticky top-16 z-30 border-b" id="herramientas">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto pb-2 gap-2 no-scrollbar whitespace-nowrap w-full">
            {allCategories.map((category) => (
              <Link
                key={category.slug}
                href={`/herramientas-ia/${category.slug === "todas" ? "" : `?categoria=${category.slug}`}`}
                className={`px-4 py-2 rounded-full border font-medium text-sm whitespace-nowrap flex-shrink-0 transition ${
                  categoriaSeleccionada === category.slug
                    ? "bg-primary text-white border-primary"
                    : "text-gray-700 border-gray-300 hover:bg-violet-100"
                }`}
                onClick={(e) => {
                  e.preventDefault()
                  setIsFiltering(true)
                  setCategoriaSeleccionada(category.slug)
                  // Actualizar la URL sin recargar la página
                  const url = new URL(window.location.href)
                  if (category.slug === "todas") {
                    url.searchParams.delete("categoria")
                  } else {
                    url.searchParams.set("categoria", category.slug)
                  }
                  window.history.pushState({}, "", url.toString())

                  // Simular tiempo de carga para mejor UX
                  setTimeout(() => {
                    setIsFiltering(false)
                  }, 300)
                }}
              >
                <span className="mr-1">{category.icon}</span> {category.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Grid - Responsive layout */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-secondary mb-8 text-center">
            {categoriaSeleccionada === "todas"
              ? "Todas las herramientas"
              : `Herramientas de ${allCategories.find((c) => c.slug === categoriaSeleccionada)?.name || ""}`}
          </h2>

          {filteredTools.length > 0 ? (
            <div
              className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ${isFiltering ? "opacity-70 transition-opacity duration-300" : ""}`}
            >
              {filteredTools.map((tool: any) => (
                <div
                  key={tool.slug}
                  className="rounded-xl shadow-sm hover:shadow-md transition bg-white p-5 flex flex-col items-center text-center h-full"
                >
                  <div className="relative mb-4">
                    <div className="w-16 h-16 flex items-center justify-center">
                      <SafeImage
                        src={
                          tool.image_url
                            ? tool.image_url
                                .replace("/notion-ai-blue.png", "/notion-logo.png")
                                .replace("/zapier-blue-background.png", "/zapier-logo.png")
                                .replace("/clickup-blue-background.png", "/clickup-logo.png")
                                .replace("/fireflies-ai-logo-blue.png", "/fireflies-logo-full.png")
                                .replace("/otter-ai-logo-inspired-design.png", "/otter-ai-logo-full.png")
                                .replace("/grammarly-blue.png", "/grammarly-logo.png")
                                .replace("/ai-logo-blue.png", "/jasper-logo-gray.png")
                            : `/placeholder.svg?height=64&width=64&query=logo for ${tool.name}`
                        }
                        alt={`Logo de ${tool.name}`}
                        width={64}
                        height={64}
                        className="object-contain"
                        loading="lazy"
                        onError={() => {
                          // Fallback a un placeholder si la imagen falla
                          return `/placeholder.svg?height=64&width=64&query=logo for ${tool.name}`
                        }}
                      />
                    </div>

                    {/* Badges */}
                    <div className="absolute -top-2 -right-2 flex flex-col gap-1">
                      {tool.featured && <Badge className="bg-primary text-white">Top Valorada</Badge>}
                      {tool.is_new && <Badge className="bg-green-500 text-white">Nueva</Badge>}
                    </div>
                  </div>

                  <h3 className="font-semibold text-gray-800 text-lg mb-1">{tool.name}</h3>

                  {/* NeuroScore Badge - Improved visual presentation */}
                  <div className="flex flex-col items-center mb-3">
                    <span className="text-sm font-medium text-gray-600 mb-1">
                      NeuroScore: <span className="text-violet-700 font-semibold">{tool.score} / 10</span>
                    </span>
                    <div className="flex items-center">{renderStars(tool.score)}</div>
                  </div>

                  <p className="text-sm text-gray-600 mb-4 flex-grow">{tool.description}</p>

                  {/* Category badge */}
                  <div className="mb-3">
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
                      {tool.category}
                    </span>
                  </div>

                  {/* Action buttons - Horizontal layout */}
                  <div className="flex flex-col sm:flex-row gap-2 w-full mt-auto">
                    <Button asChild className="bg-primary hover:bg-primary/90 flex-1">
                      <Link
                        href={tool.affiliate_url || getDefaultAffiliateUrl(tool.name)}
                        target="_blank"
                        rel="noopener sponsored"
                        className="flex items-center justify-center gap-1"
                      >
                        Probar Gratis
                        <ExternalLink className="h-3.5 w-3.5" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="flex-1">
                      <Link href={`/herramientas/${tool.slug}`}>Ver análisis</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600 mb-4">
                No se encontraron herramientas que coincidan con tu búsqueda.
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link href="/herramientas-ia">Ver todas las herramientas</Link>
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Lead Magnet CTA - Enhanced with more padding and better visual separation */}
      <section id="kit-gratuito" className="bg-primary py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white rounded-xl p-8 shadow-lg">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-secondary mb-2">¿No sabes cuál elegir?</h2>
              <p className="text-gray-600">Descarga gratis el Kit de Productividad con IA para Trabajo Remoto (2025)</p>
            </div>

            <form
              className="max-w-md mx-auto"
              onSubmit={async (e) => {
                e.preventDefault()
                const form = e.currentTarget
                const emailInput = form.querySelector('input[type="email"]') as HTMLInputElement
                const email = emailInput?.value

                if (!email) return

                try {
                  const response = await fetch("/api/subscribe", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email, source: "herramientas-ia-page" }),
                  })

                  if (response.ok) {
                    window.location.href = "/kit-digital?success=true"
                  }
                } catch (error) {
                  console.error("Error al enviar el formulario:", error)
                }
              }}
            >
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Tu correo electrónico"
                  required
                  className="flex-grow"
                  aria-label="Email para recibir el kit gratuito"
                />
                <Button
                  type="submit"
                  className="bg-primary hover:bg-primary/90 whitespace-nowrap font-medium text-white transition-all duration-300 transform hover:scale-105"
                  data-analytics-event="kit-download-main-cta"
                >
                  Quiero mejorar mi productividad
                </Button>
              </div>
              <p className="text-xs text-center text-gray-500 mt-2">Sin spam · Descarga inmediata tras confirmar</p>
            </form>
          </div>
        </div>
      </section>
      {/* Schema.org structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolListSchema) }} />
    </>
  )
}
