"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, SearchX, Sparkles, Download, CheckCircle } from "lucide-react"
import SafeImage from "@/components/safe-image"
import { useState, useEffect } from "react"
import UnifiedToolCard from "@/components/unified-tool-card"
import UnifiedCTA from "@/components/unified-cta"

export default function HerramientasIAPageClient({
  initialSearchParams,
  tools,
  categories,
}: { initialSearchParams: { categoria?: string; q?: string }; tools: any[]; categories: any[] }) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(initialSearchParams.categoria || "todas")
  const [searchQuery, setSearchQuery] = useState(initialSearchParams.q || "")
  const [filteredTools, setFilteredTools] = useState(tools)
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    setCategoriaSeleccionada(initialSearchParams.categoria || "todas")
    setSearchQuery(initialSearchParams.q || "")
    setFilteredTools(tools)
  }, [initialSearchParams, tools])

  // Añadir la categoría "Todas" al principio
  const allCategories = [{ name: "Todas", slug: "todas", icon: "🧠" }, ...categories]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "herramientas-ia-page" }),
      })

      const data = await response.json()

      if (response.ok) {
        setSuccess(true)
        setEmail("")
      } else {
        setError(data.message || "Error al registrar el correo")
      }
    } catch (error) {
      setError("Error al conectar con el servidor. Por favor, inténtalo de nuevo más tarde.")
      console.error("Error al enviar formulario:", error)
    } finally {
      setLoading(false)
    }
  }

  const filteredTools2 = tools.filter((tool) => {
    const matchesSearch =
      tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory ? tool.categories.includes(selectedCategory) : true
    return matchesSearch && matchesCategory
  })

  const categories2 = Array.from(new Set(tools.flatMap((tool) => tool.categories))).sort()

  return (
    <>
      {/* Hero Section */}
      <section
        className="py-16 md:py-24 relative overflow-hidden"
        style={{
          background: "linear-gradient(to right, #F9FAFB, #E6F0FF)",
        }}
      >
        {/* Abstract background pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none hidden md:block" aria-hidden="true">
          <SafeImage
            src="/neural-network-bg.png"
            alt="Fondo de red neuronal"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-secondary mb-6">
              Herramientas de Productividad con IA
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Explora y prueba las mejores herramientas IA para optimizar tu trabajo remoto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <UnifiedCTA href="#herramientas" variant="primary" size="md">
                Explorar herramientas
              </UnifiedCTA>
              <UnifiedCTA href="#kit-gratuito" variant="outline" size="md" icon={<Download className="h-4 w-4" />}>
                Descargar Kit Gratuito
              </UnifiedCTA>
            </div>
            <p className="text-sm text-gray-500 mt-6">Actualizado 2025</p>
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
          <div className="flex overflow-x-auto scrollbar-hide pb-2 gap-2">
            {allCategories.map((category) => (
              <Link
                key={category.slug}
                href={`/herramientas-ia${category.slug === "todas" ? "" : `?categoria=${category.slug}`}`}
                className={`px-4 py-2 rounded-full border font-medium text-sm whitespace-nowrap transition ${
                  categoriaSeleccionada === category.slug
                    ? "bg-primary text-white border-primary"
                    : "text-gray-700 border-gray-300 hover:bg-violet-100"
                }`}
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

          {tools.length > 0 ? (
            <>
              {filteredTools.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredTools.map((tool: any) => (
                    <UnifiedToolCard
                      key={tool.slug}
                      name={tool.name}
                      description={tool.description}
                      imageUrl={tool.image_url}
                      category={tool.category}
                      slug={tool.slug}
                      score={tool.score}
                      affiliateUrl={tool.affiliate_url}
                      featured={tool.featured}
                      isNew={tool.is_new}
                      variant="grid"
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <SearchX className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No se encontraron herramientas</h3>
                  <p className="text-gray-600">
                    No hay resultados para tu búsqueda. Intenta con otros términos o categorías.
                  </p>
                  <button
                    onClick={() => {
                      setSearchTerm("")
                      setSelectedCategory(null)
                    }}
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    Limpiar filtros
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <div className="mb-4">
                <Sparkles className="h-12 w-12 text-blue-500 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Próximamente nuevas herramientas</h3>
              <p className="text-gray-600 mb-6">
                Estamos seleccionando cuidadosamente las mejores herramientas de IA con programas de afiliados activos.
                Vuelve pronto para descubrir nuestras recomendaciones.
              </p>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Sugerir una herramienta
              </Link>
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

            {success ? (
              <div className="max-w-md mx-auto bg-green-50 border border-green-200 rounded-md p-4 text-green-800">
                <div className="flex items-center mb-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <p className="font-medium">¡Gracias por tu interés!</p>
                </div>
                <p className="text-sm">¡Gracias! Recibirás el Kit en tu correo en menos de 24 horas.</p>
              </div>
            ) : (
              <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="Tu correo electrónico"
                    required
                    className="flex-grow"
                    aria-label="Email para recibir el kit gratuito"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Button type="submit" className="bg-primary hover:bg-primary/90 whitespace-nowrap" disabled={loading}>
                    {loading ? "Enviando..." : "Descargar Kit gratuito"}
                  </Button>
                </div>
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                <p className="text-xs text-center text-gray-500 mt-2">Sin spam · Descarga inmediata tras confirmar</p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
