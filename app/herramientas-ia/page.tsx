import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Star, ExternalLink, Download } from "lucide-react"
import SafeImage from "@/components/safe-image"
import { generateMetadata } from "@/lib/metadata"
import { getCachedCategories, getCachedAllTools, searchTools } from "@/lib/db"

export const metadata: Metadata = generateMetadata({
  title: "Herramientas de Productividad con IA",
  description:
    "Explora y prueba las mejores herramientas de IA para optimizar tu trabajo remoto. Análisis detallados y actualizados 2025.",
  keywords:
    "herramientas IA, productividad, trabajo remoto, Notion AI, Zapier, ClickUp, ChatGPT, automatización, IA para trabajo",
})

export default async function HerramientasIAPage({
  searchParams,
}: { searchParams: { categoria?: string; q?: string } }) {
  // Obtener categorías y herramientas de la base de datos
  const categories = await getCachedCategories()

  // Añadir la categoría "Todas" al principio
  const allCategories = [{ name: "Todas", slug: "todas", icon: "🧠" }, ...categories]

  // Filtrar herramientas por categoría y búsqueda
  const categoriaSeleccionada = searchParams.categoria || "todas"
  const searchQuery = searchParams.q || ""

  let tools

  if (searchQuery) {
    // Si hay una búsqueda, usar la función de búsqueda
    tools = await searchTools(searchQuery)
  } else {
    // Si no hay búsqueda, obtener todas las herramientas
    tools = await getCachedAllTools()
  }

  // Filtrar por categoría si no es "todas"
  const filteredTools =
    categoriaSeleccionada === "todas"
      ? tools
      : tools.filter((tool: any) => {
          return tool.category.toLowerCase().replace(/\s+/g, "-") === categoriaSeleccionada
        })

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

          {filteredTools.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredTools.map((tool: any) => (
                <div
                  key={tool.slug}
                  className="rounded-xl shadow-sm hover:shadow-md transition bg-white p-5 flex flex-col items-center text-center h-full"
                >
                  <div className="relative mb-4">
                    <div className="w-16 h-16 flex items-center justify-center">
                      <SafeImage
                        src={tool.image_url}
                        alt={`Logo de ${tool.name}`}
                        width={64}
                        height={64}
                        className="object-contain"
                        loading="lazy"
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
                        href={tool.affiliate_url || `https://example.com/${tool.slug}`}
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

            <form className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Tu correo electrónico"
                  required
                  className="flex-grow"
                  aria-label="Email para recibir el kit gratuito"
                />
                <Button className="bg-primary hover:bg-primary/90 whitespace-nowrap">Descargar Kit gratuito</Button>
              </div>
              <p className="text-xs text-center text-gray-500 mt-2">Sin spam · Descarga inmediata tras confirmar</p>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
