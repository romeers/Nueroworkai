"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Star, ExternalLink, Download, CheckCircle, SearchX, Sparkles } from "lucide-react"
import SafeImage from "@/components/safe-image"
import { useState, useEffect } from "react"
import { useTranslations } from "next-intl"
import { Link } from "@/components/ui/link"

export default function HerramientasIAPageClient({
  initialSearchParams,
  tools,
  categories,
}: { initialSearchParams: { categoria?: string; q?: string }; tools: any[]; categories: any[] }) {
  const t = useTranslations("Tools")
  const tButtons = useTranslations("Buttons")
  const tCategories = useTranslations("Categories")
  const tErrors = useTranslations("Errors")

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
  const allCategories = [{ name: tCategories("all"), slug: "todas", icon: "🧠" }, ...categories]

  // Función para obtener la URL oficial de cada herramienta si no existe affiliate_url
  const getDefaultAffiliateUrl = (toolName: string) => {
    const toolUrls: Record<string, string> = {}
    return toolUrls[toolName] || "#" // Fallback to # if no URL is found
  }

  // Función para obtener la URL correcta del logo
  const getLogoUrl = (tool: any) => {
    if (!tool.image_url) {
      return `/placeholder.svg?height=64&width=64&query=${encodeURIComponent(tool.name + " logo")}`
    }
    return tool.image_url
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
        setError(data.message || tErrors("emailRegistrationError"))
      }
    } catch (error) {
      setError(tErrors("serverConnectionError"))
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
            alt={t("hero.backgroundAlt")}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-secondary mb-6">{t("hero.title")}</h1>
            <p className="text-lg text-gray-600 mb-8">{t("hero.subtitle")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link href="#herramientas">{tButtons("exploreTools")}</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="#kit-gratuito" className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  {tButtons("downloadFreeKit")}
                </Link>
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-6">{t("hero.updatedYear")}</p>
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
                  placeholder={t("search.placeholder")}
                  className="pl-10 py-3 pr-4 w-full rounded-md border-gray-300"
                  defaultValue={searchQuery}
                  aria-label={t("search.ariaLabel")}
                />
                <Button
                  type="submit"
                  className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-primary hover:bg-primary/90 h-8"
                >
                  {tButtons("search")}
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
              ? t("toolsGrid.allTools")
              : t("toolsGrid.categoryTools", {
                  category: allCategories.find((c) => c.slug === categoriaSeleccionada)?.name || "",
                })}
          </h2>

          {tools.length > 0 ? (
            <>
              {filteredTools.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredTools.map((tool: any) => (
                    <div
                      key={tool.slug}
                      className="rounded-xl shadow-sm hover:shadow-md transition bg-white p-5 flex flex-col items-center text-center h-full"
                    >
                      <div className="relative mb-4">
                        <div className="relative w-16 h-16 flex items-center justify-center">
                          <SafeImage
                            src={getLogoUrl(tool)}
                            alt={t("toolCard.logoAlt", { name: tool.name })}
                            width={64}
                            height={64}
                            className="object-contain"
                            loading="lazy"
                          />
                        </div>

                        {/* Badges */}
                        <div className="absolute -top-2 -right-2 flex flex-col gap-1">
                          {tool.featured && (
                            <Badge className="bg-primary text-white">{t("toolCard.badges.topRated")}</Badge>
                          )}
                          {tool.is_new && <Badge className="bg-green-500 text-white">{t("toolCard.badges.new")}</Badge>}
                        </div>
                      </div>

                      <h3 className="font-semibold text-gray-800 text-lg mb-1">{tool.name}</h3>

                      {/* NeuroScore Badge - Improved visual presentation */}
                      <div className="flex flex-col items-center mb-3">
                        <span className="text-sm font-medium text-gray-600 mb-1">
                          {t("toolCard.neuroScore")}:{" "}
                          <span className="text-violet-700 font-semibold">{tool.score} / 10</span>
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
                            {tButtons("tryFree")}
                            <ExternalLink className="h-3.5 w-3.5" />
                          </Link>
                        </Button>
                        <Button asChild variant="outline" className="flex-1">
                          <Link href={`/herramientas/${tool.slug}`}>{tButtons("viewAnalysis")}</Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <SearchX className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{t("toolsGrid.noResults.title")}</h3>
                  <p className="text-gray-600">{t("toolsGrid.noResults.message")}</p>
                  <button
                    onClick={() => {
                      setSearchTerm("")
                      setSelectedCategory(null)
                    }}
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    {tButtons("clearFilters")}
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <div className="mb-4">
                <Sparkles className="h-12 w-12 text-blue-500 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t("toolsGrid.comingSoon.title")}</h3>
              <p className="text-gray-600 mb-6">{t("toolsGrid.comingSoon.message")}</p>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                {tButtons("suggestTool")}
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
              <h2 className="text-2xl font-bold text-secondary mb-2">{t("leadMagnet.title")}</h2>
              <p className="text-gray-600">{t("leadMagnet.subtitle")}</p>
            </div>

            {success ? (
              <div className="max-w-md mx-auto bg-green-50 border border-green-200 rounded-md p-4 text-green-800">
                <div className="flex items-center mb-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <p className="font-medium">{t("leadMagnet.success.title")}</p>
                </div>
                <p className="text-sm">{t("leadMagnet.success.message")}</p>
              </div>
            ) : (
              <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder={t("leadMagnet.form.emailPlaceholder")}
                    required
                    className="flex-grow"
                    aria-label={t("leadMagnet.form.emailAriaLabel")}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Button type="submit" className="bg-primary hover:bg-primary/90 whitespace-nowrap" disabled={loading}>
                    {loading ? t("leadMagnet.form.sending") : t("leadMagnet.form.downloadButton")}
                  </Button>
                </div>
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                <p className="text-xs text-center text-gray-500 mt-2">{t("leadMagnet.form.disclaimer")}</p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
