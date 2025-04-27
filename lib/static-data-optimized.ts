import { cache } from "react"
import { captureError } from "./error-handling"

// Tipos para los datos
interface Tool {
  id: number
  name: string
  slug: string
  description: string
  long_description?: string
  category_id: number
  category_name: string
  image_url: string
  affiliate_url?: string
  score?: number
  pros: string[]
  cons: string[]
  features?: any[]
  pricing?: any[]
  tags?: string[]
  verified?: boolean
  special_offer?: string
  relatedTools?: any[]
  why_we_recommend?: string
  pricing_analysis?: string
}

interface Category {
  id: number
  name: string
  slug: string
  description: string
  icon?: string
}

interface Comparison {
  id: number
  title: string
  slug: string
  description: string
  tools: Tool[]
}

interface Resource {
  id: number
  title: string
  slug: string
  description: string
  content: string
  imageUrl: string
  category: string
  categoryId: string
  readTime: string
  toolName?: string
  toolAffiliateUrl?: string
  isDownloadable?: boolean
  downloadUrl?: string
  relatedResources?: string[]
  publishedAt?: string
}

// Datos estáticos
const tools: Tool[] = [
  {
    id: 1,
    name: "Notion AI",
    slug: "notion-ai",
    description: "Asistente de IA integrado en Notion para escritura, resumen y más",
    long_description:
      "Notion AI es un asistente de inteligencia artificial integrado en la plataforma Notion que ayuda a los usuarios a escribir, resumir, editar y generar ideas. Permite a los equipos trabajar de manera más eficiente automatizando tareas repetitivas de escritura y organización.",
    category_id: 1,
    category_name: "Escritura",
    image_url: "/notion-logo.png",
    affiliate_url: "https://www.notion.so/product/ai?ref=neuroworkai",
    score: 9.2,
    pros: [
      "Perfectamente integrado en Notion",
      "Excelente para resumir contenido largo",
      "Ayuda a generar ideas y estructuras",
      "Traduce contenido a múltiples idiomas",
      "Mejora la calidad de la escritura",
    ],
    cons: [
      "Requiere suscripción a Notion",
      "A veces genera contenido genérico",
      "Limitado a funcionar dentro de Notion",
    ],
    features: [
      {
        name: "Generación de texto",
        description: "Crea borradores, resúmenes y más con simples instrucciones",
        image_url: "/notion-ai-text-generation.png",
      },
      {
        name: "Resumen de contenido",
        description: "Resume documentos largos, reuniones o investigaciones en segundos",
        image_url: "/notion-ai-summarization.png",
      },
      {
        name: "Traducción",
        description: "Traduce tu contenido a múltiples idiomas manteniendo el formato",
        image_url: "/notion-ai-translation-workflow.png",
      },
    ],
    verified: true,
    special_offer: "Prueba gratuita disponible",
    tags: ["IA", "Productividad", "Escritura", "Organización"],
  },
  // Más herramientas...
]

const categories: Category[] = [
  {
    id: 1,
    name: "Escritura",
    slug: "escritura",
    description: "Herramientas de IA para mejorar tu escritura y crear contenido",
    icon: "Pencil",
  },
  {
    id: 2,
    name: "Automatización",
    slug: "automatizacion",
    description: "Automatiza tareas repetitivas y flujos de trabajo",
    icon: "Settings",
  },
  // Más categorías...
]

const comparisons: Comparison[] = [
  {
    id: 1,
    title: "Notion AI vs ChatGPT",
    slug: "notion-ai-vs-chatgpt",
    description: "Comparativa detallada entre Notion AI y ChatGPT para productividad",
    tools: [
      tools.find((t) => t.slug === "notion-ai")!,
      // Otra herramienta...
    ],
  },
  // Más comparaciones...
]

const resources: Resource[] = [
  {
    id: 1,
    title: "50 Prompts Avanzados para Notion AI, ChatGPT y Jasper",
    slug: "prompts-avanzados-notion-chatgpt-jasper",
    description:
      "Colección de prompts optimizados para generar contenido de alta calidad con las principales herramientas de escritura IA.",
    content: "...", // Contenido largo
    imageUrl: "/ai-prompt-examples.png",
    category: "Prompts IA",
    categoryId: "prompts",
    readTime: "15 min",
    toolName: "Notion AI",
    toolAffiliateUrl: "https://notion.so/product/ai?ref=neuroworkai",
    isDownloadable: true,
    downloadUrl: "/recursos/descargar/prompts-avanzados-notion-chatgpt-jasper",
    relatedResources: [
      "guia-definitiva-prompts-chatgpt-notion-ai",
      "prompts-marketing-digital-ia",
      "plantilla-productividad-ia-notion",
    ],
    publishedAt: "2023-05-15",
  },
  // Más recursos...
]

// Funciones optimizadas con caché
export const getAllTools = cache(() => {
  try {
    return tools
  } catch (error) {
    captureError(error, { context: "getAllTools" })
    return []
  }
})

export const getFeaturedTools = cache((limit = 6) => {
  try {
    // Ordenar por puntuación y tomar los primeros 'limit'
    return [...tools].sort((a, b) => (b.score || 0) - (a.score || 0)).slice(0, limit)
  } catch (error) {
    captureError(error, { context: "getFeaturedTools", limit })
    return []
  }
})

export const getToolsByCategory = cache((categorySlug: string) => {
  try {
    const category = categories.find((c) => c.slug === categorySlug)
    if (!category) return []

    return tools.filter((tool) => tool.category_id === category.id)
  } catch (error) {
    captureError(error, { context: "getToolsByCategory", categorySlug })
    return []
  }
})

export const getToolBySlug = cache((slug: string) => {
  try {
    const tool = tools.find((t) => t.slug === slug)

    if (!tool) return null

    // Añadir herramientas relacionadas
    const relatedTools = tools.filter((t) => t.category_id === tool.category_id && t.id !== tool.id).slice(0, 3)

    return { ...tool, relatedTools }
  } catch (error) {
    captureError(error, { context: "getToolBySlug", slug })
    return null
  }
})

export const getToolById = cache((id: number) => {
  try {
    return tools.find((t) => t.id === id) || null
  } catch (error) {
    captureError(error, { context: "getToolById", id })
    return null
  }
})

export const getAllCategories = cache(() => {
  try {
    return categories
  } catch (error) {
    captureError(error, { context: "getAllCategories" })
    return []
  }
})

export const getCategoryBySlug = cache((slug: string) => {
  try {
    return categories.find((c) => c.slug === slug) || null
  } catch (error) {
    captureError(error, { context: "getCategoryBySlug", slug })
    return null
  }
})

export const getPopularComparisons = cache((limit = 5) => {
  try {
    return comparisons.slice(0, limit)
  } catch (error) {
    captureError(error, { context: "getPopularComparisons", limit })
    return []
  }
})

export const getComparisonBySlug = cache((slug: string) => {
  try {
    return comparisons.find((c) => c.slug === slug) || null
  } catch (error) {
    captureError(error, { context: "getComparisonBySlug", slug })
    return null
  }
})

export const getResources = cache((limit = 10) => {
  try {
    return resources.slice(0, limit)
  } catch (error) {
    captureError(error, { context: "getResources", limit })
    return []
  }
})

export const getResourceBySlug = cache((slug: string) => {
  try {
    return resources.find((r) => r.slug === slug) || null
  } catch (error) {
    captureError(error, { context: "getResourceBySlug", slug })
    return null
  }
})

export const searchTools = (query: string) => {
  try {
    if (!query) return []

    const normalizedQuery = query.toLowerCase().trim()

    return tools.filter((tool) => {
      return (
        tool.name.toLowerCase().includes(normalizedQuery) ||
        tool.description.toLowerCase().includes(normalizedQuery) ||
        tool.category_name.toLowerCase().includes(normalizedQuery) ||
        (tool.tags && tool.tags.some((tag) => tag.toLowerCase().includes(normalizedQuery)))
      )
    })
  } catch (error) {
    captureError(error, { context: "searchTools", query })
    return []
  }
}
