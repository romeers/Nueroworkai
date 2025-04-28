"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ExternalLink } from "lucide-react"
import SafeImage from "@/components/safe-image"
import { useRouter, useSearchParams } from "next/navigation"
import { ChevronRight, Sparkles } from "lucide-react"

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
  id: string
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
  categories?: Category[]
  comparisons?: Comparison[]
  defaultCategory?: string
  title?: string
  viewAllLink?: string
  className?: string
}

function ToolCard({ tool }: { tool: Tool }) {
  return (
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

        {/* Badges positioned below the logo instead of overlapping */}
        <div className="mt-2 flex flex-wrap justify-center gap-1">
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
  )
}

export function ToolsSection({ title, tools, viewAllLink, className = "" }: ToolsSectionProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const tabsRef = useRef<HTMLDivElement>(null)

  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined)
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredTools, setFilteredTools] = useState<Tool[]>(tools)
  const [isClient, setIsClient] = useState(false)

  // Initialize from URL params and set client-side rendering flag
  useEffect(() => {
    setIsClient(true)
    const categoryParam = searchParams.get("categoria") || "todas"
    const queryParam = searchParams.get("q") || ""

    setSelectedCategory(categoryParam)
    setSearchQuery(queryParam)
  }, [searchParams])

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
    <section className={`py-12 ${className}`}>
      <div className="container px-4 mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{title}</h2>
          {viewAllLink && tools.length > 0 && (
            <Link href={viewAllLink} className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
              Ver todas
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          )}
        </div>

        {isClient && (
          <>
            {tools.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTools.map((tool) => (
                  <ToolCard key={tool.id || tool.slug} tool={tool} />
                ))}
              </div>
            ) : (
              <div className="bg-gray-50 rounded-lg p-8 text-center">
                <div className="mb-4">
                  <Sparkles className="h-12 w-12 text-blue-500 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Próximamente nuevas herramientas</h3>
                <p className="text-gray-600 mb-6">
                  Estamos seleccionando cuidadosamente las mejores herramientas de IA para ti. Vuelve pronto para
                  descubrir nuestras recomendaciones.
                </p>
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  Sugerir una herramienta
                </Link>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  )
}
