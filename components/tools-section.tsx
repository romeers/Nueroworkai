"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Star, ArrowRight, ExternalLink } from "lucide-react"
import SafeImage from "@/components/safe-image"
import { useRouter, useSearchParams } from "next/navigation"

interface Tool {
  name: string
  description: string
  imageUrl: string
  category: string
  slug: string
  score?: number
  featured?: boolean
  isNew?: boolean
  affiliateUrl: string
}

interface Category {
  name: string
  slug: string
  icon: string
}

interface Comparison {
  title: string
  description: string
  slug: string
  tools: string[]
}

interface ToolsSectionProps {
  tools: Tool[]
  categories: Category[]
  comparisons: Comparison[]
  defaultCategory?: string
}

export default function ToolsSection({ tools, categories, comparisons, defaultCategory = "todas" }: ToolsSectionProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const tabsRef = useRef<HTMLDivElement>(null)

  const [selectedCategory, setSelectedCategory] = useState(defaultCategory)
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredTools, setFilteredTools] = useState<Tool[]>(tools)

  // Initialize from URL params
  useEffect(() => {
    const categoryParam = searchParams.get("categoria") || defaultCategory
    const queryParam = searchParams.get("q") || ""

    setSelectedCategory(categoryParam)
    setSearchQuery(queryParam)
  }, [searchParams, defaultCategory])

  // Filter tools when category or search changes
  useEffect(() => {
    const filtered = tools.filter((tool) => {
      // Filter by category
      const matchesCategory =
        selectedCategory === "todas" || tool.category.toLowerCase().replace(/\s+/g, "-") === selectedCategory

      // Filter by search
      const matchesSearch =
        searchQuery === "" ||
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase())

      return matchesCategory && matchesSearch
    })

    setFilteredTools(filtered)
  }, [selectedCategory, searchQuery, tools])

  // Scroll selected tab into view
  useEffect(() => {
    if (tabsRef.current) {
      const activeTab = tabsRef.current.querySelector(`[data-category="${selectedCategory}"]`)
      if (activeTab) {
        // Scroll the active tab into view with smooth behavior
        activeTab.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" })
      }
    }
  }, [selectedCategory])

  // Handle category change
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)

    // Update URL
    const params = new URLSearchParams(searchParams.toString())
    if (category === "todas") {
      params.delete("categoria")
    } else {
      params.set("categoria", category)
    }

    if (searchQuery) {
      params.set("q", searchQuery)
    }

    router.push(`/herramientas-ia?${params.toString()}`)
  }

  // Handle search
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Update URL
    const params = new URLSearchParams()
    if (selectedCategory !== "todas") {
      params.set("categoria", selectedCategory)
    }

    if (searchQuery) {
      params.set("q", searchQuery)
    }

    router.push(`/herramientas-ia?${params.toString()}`)
  }

  return (
    <>
      {/* Search Bar */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative w-full md:w-2/3 lg:w-1/2 mx-auto">
            <form onSubmit={handleSearch}>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Buscar herramienta IA..."
                  className="pl-10 py-3 pr-4 w-full rounded-md border-gray-300"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
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

      {/* Filter Tabs - Sticky */}
      <section className="py-6 bg-white sticky top-16 z-30 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={tabsRef} className="flex overflow-x-auto pb-2 gap-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.slug}
                data-category={category.slug}
                onClick={() => handleCategoryChange(category.slug)}
                className={`px-4 py-2 rounded-full border font-medium text-sm whitespace-nowrap transition ${
                  selectedCategory === category.slug
                    ? "bg-primary text-white border-primary"
                    : "text-gray-700 border-gray-300 hover:bg-violet-100"
                }`}
              >
                <span className="mr-1">{category.icon}</span> {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-secondary mb-8 text-center">
            {selectedCategory === "todas"
              ? "Todas las herramientas"
              : `Herramientas de ${categories.find((c) => c.slug === selectedCategory)?.name || ""}`}
          </h2>

          {filteredTools.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredTools.map((tool) => (
                <div
                  key={tool.slug}
                  className="rounded-xl shadow-sm hover:shadow-md transition bg-white p-5 flex flex-col items-center text-center h-full"
                >
                  <div className="relative mb-4">
                    <div className="w-16 h-16 flex items-center justify-center">
                      <SafeImage
                        src={tool.imageUrl}
                        alt={`Logo de ${tool.name}`}
                        width={64}
                        height={64}
                        className="object-contain"
                      />
                    </div>

                    {/* Badges */}
                    <div className="absolute -top-2 -right-2 flex flex-col gap-1">
                      {tool.featured && <Badge className="bg-primary text-white">Top Valorada</Badge>}
                      {tool.isNew && <Badge className="bg-green-500 text-white">Nueva</Badge>}
                    </div>
                  </div>

                  <h3 className="font-semibold text-gray-800 text-lg mb-1">{tool.name}</h3>
                  <p className="text-sm text-gray-600 mb-2 flex-grow">{tool.description}</p>

                  {/* Category badge */}
                  <div className="mb-3">
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
                      {tool.category}
                    </span>
                  </div>

                  {/* NeuroScore */}
                  {tool.score && (
                    <div className="flex items-center justify-center mb-4">
                      <div className="flex items-center bg-gray-100 px-2 py-1 rounded-full">
                        <Star className="h-3.5 w-3.5 text-yellow-500 mr-1" />
                        <span className="text-sm font-medium">{tool.score}</span>
                        <span className="text-xs text-gray-500 ml-1">/ 10</span>
                      </div>
                    </div>
                  )}

                  {/* Action buttons */}
                  <div className="flex flex-col gap-2 w-full mt-auto">
                    <Button asChild className="bg-primary hover:bg-primary/90 w-full">
                      <Link
                        href={tool.affiliateUrl}
                        target="_blank"
                        rel="noopener sponsored"
                        className="flex items-center justify-center gap-1"
                      >
                        Probar Gratis
                        <ExternalLink className="h-3.5 w-3.5" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full">
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
              <Button
                onClick={() => {
                  setSelectedCategory("todas")
                  setSearchQuery("")
                  router.push("/herramientas-ia")
                }}
                className="bg-primary hover:bg-primary/90"
              >
                Ver todas las herramientas
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Comparisons Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-secondary mb-8 text-center">Comparativas Populares</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {comparisons.map((comparison) => (
              <Link
                key={comparison.slug}
                href={`/herramientas/comparar/${comparison.slug}`}
                className="flex flex-col items-center justify-between bg-gray-50 border p-6 rounded-lg hover:shadow transition h-full"
              >
                <div className="flex items-center justify-center gap-4 mb-4">
                  {comparison.tools.map((toolSlug) => {
                    const tool = tools.find((t) => t.slug === toolSlug)
                    return tool ? (
                      <div key={tool.slug} className="w-12 h-12 relative">
                        <SafeImage
                          src={tool.imageUrl}
                          alt={`Logo de ${tool.name}`}
                          width={48}
                          height={48}
                          className="object-contain"
                        />
                      </div>
                    ) : null
                  })}
                </div>

                <div className="text-center">
                  <h3 className="font-semibold text-gray-800 mb-2">{comparison.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{comparison.description}</p>
                </div>

                <span className="text-primary font-medium flex items-center">
                  Ver comparativa
                  <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link href="/herramientas/comparar">Ver todas las comparativas</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
