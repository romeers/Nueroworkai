// Definición de tipos
export interface Tool {
  id: number
  name: string
  slug: string
  description: string
  longDescription?: string
  imageUrl: string
  category: string
  categoryId: number
  categorySlug: string
  link?: string
  price?: string
  featured: boolean
  score: number
  viewCount?: number
  affiliateUrl: string
  pros?: string[]
  cons?: string[]
  features?: {
    name: string
    description: string
    imageUrl?: string
  }[]
  isNew?: boolean
  verified?: boolean
  specialOffer?: string
}

export interface Comparison {
  id: number
  title: string
  slug: string
  description: string
  content: string
  imageUrl: string
  viewCount: number
  published: boolean
  publishedAt: string
}

// Definición de categorías
export const categories = [
  {
    id: 1,
    name: "Escritura IA",
    slug: "escritura-ia",
    icon: "✍️",
    description: "Herramientas de IA para mejorar tu escritura y generar contenido",
    imageUrl: "/abstract-ai-icon.png",
  },
  {
    id: 2,
    name: "Automatización",
    slug: "automatizacion",
    icon: "⚙️",
    description: "Automatiza tareas repetitivas y flujos de trabajo",
    imageUrl: "/automation-blueprint.png",
  },
  {
    id: 3,
    name: "Gestión de Tareas",
    slug: "gestion-tareas",
    icon: "📋",
    description: "Organiza y gestiona tus tareas y proyectos con IA",
    imageUrl: "/task-management-templates.png",
  },
  {
    id: 4,
    name: "Reuniones",
    slug: "reuniones",
    icon: "🎯",
    description: "Optimiza tus reuniones con herramientas de IA",
    imageUrl: "/collaborative-ai-meeting.png",
  },
  {
    id: 5,
    name: "Comunicación",
    slug: "comunicacion",
    icon: "💬",
    description: "Mejora tu comunicación con asistentes de IA",
    imageUrl: "/stylized-chat-icon.png",
  },
  {
    id: 6,
    name: "Otras Herramientas",
    slug: "otras",
    icon: "🧰",
    description: "Otras herramientas de IA para profesionales remotos",
    imageUrl: "/ai-toolkit-icons.png",
  },
]

// Añadimos Fireflies.ai como primera herramienta
export const tools: Tool[] = [
  {
    id: 1,
    name: "Fireflies.ai",
    slug: "fireflies-ai",
    description:
      "Fireflies.ai es una herramienta de IA que transcribe, resume, busca y analiza reuniones automáticamente, ahorrando tiempo y mejorando la productividad.",
    longDescription:
      "Fireflies.ai es un asistente de reuniones con IA que se une a tus llamadas, toma notas y crea resúmenes automáticamente. Permite buscar, transcribir y analizar conversaciones para extraer información valiosa, ahorrando tiempo y mejorando la productividad de equipos remotos y presenciales.",
    imageUrl: "/fireflies-logo.png",
    category: "Reuniones",
    categoryId: 4,
    categorySlug: "reuniones",
    featured: true,
    score: 9.2,
    affiliateUrl: "https://fireflies.ai/?fpr=daniel72",
    isNew: true,
    verified: true,
    specialOffer: "Prueba gratuita disponible",
    pros: [
      "Transcripción automática precisa en múltiples idiomas",
      "Resúmenes inteligentes de reuniones con puntos clave",
      "Búsqueda avanzada en transcripciones",
      "Integración con las principales plataformas de videoconferencia",
      "Análisis de conversaciones con insights valiosos",
    ],
    cons: [
      "Algunas funciones avanzadas solo disponibles en planes de pago",
      "Puede requerir ajustes para acentos específicos",
      "El plan gratuito tiene limitaciones de uso",
    ],
    features: [
      {
        name: "Transcripción automática",
        description:
          "Convierte automáticamente el audio de tus reuniones en texto con alta precisión en múltiples idiomas.",
        imageUrl: "/fireflies-transcription.png",
      },
      {
        name: "Resúmenes inteligentes",
        description:
          "Genera resúmenes concisos con los puntos clave, decisiones y elementos de acción de cada reunión.",
        imageUrl: "/fireflies-summary.png",
      },
      {
        name: "Búsqueda avanzada",
        description:
          "Encuentra rápidamente cualquier información en tus reuniones pasadas con búsqueda por palabras clave.",
        imageUrl: "/fireflies-search.png",
      },
      {
        name: "Análisis de conversaciones",
        description:
          "Obtén insights valiosos sobre tus reuniones, incluyendo tiempo de habla, temas recurrentes y sentimiento.",
        imageUrl: "/fireflies-analytics.png",
      },
    ],
  },
]

// Empty comparisons array - will be populated manually as affiliate links get approved
export const comparisons: Comparison[] = []

// Definición de recursos
export const resources = [
  {
    id: 1,
    title: "Guía completa de herramientas de IA para escritores",
    slug: "guia-herramientas-ia-escritores",
    description: "Descubre las mejores herramientas de IA para mejorar tu escritura y productividad",
    content: "Contenido detallado de la guía de herramientas de IA para escritores...",
    imageUrl: "/ai-writing-prompts-collection.png",
    category: "Escritura IA",
    categoryId: 1,
    categorySlug: "escritura-ia",
    viewCount: 2300,
    published: true,
    publishedAt: "2023-05-15T10:00:00Z",
    relatedTools: [],
  },
  {
    id: 2,
    title: "Cómo automatizar tu flujo de trabajo con Zapier",
    slug: "automatizar-flujo-trabajo-zapier",
    description: "Aprende a crear automatizaciones eficientes con Zapier para ahorrar tiempo",
    content: "Contenido detallado sobre cómo automatizar tu flujo de trabajo con Zapier...",
    imageUrl: "/automation-workflows-templates.png",
    category: "Automatización",
    categoryId: 2,
    categorySlug: "automatizacion",
    viewCount: 1850,
    published: true,
    publishedAt: "2023-06-10T14:30:00Z",
    relatedTools: [],
  },
  {
    id: 3,
    title: "Optimiza tus reuniones con asistentes de IA",
    slug: "optimiza-reuniones-asistentes-ia",
    description: "Descubre cómo los asistentes de IA pueden transformar tus reuniones",
    content: "Contenido detallado sobre cómo optimizar reuniones con asistentes de IA...",
    imageUrl: "/ai-meetings-optimization-guide.png",
    category: "Reuniones",
    categoryId: 4,
    categorySlug: "reuniones",
    viewCount: 1420,
    published: true,
    publishedAt: "2023-07-05T09:15:00Z",
    relatedTools: [],
  },
]

// Funciones para obtener datos
export function getAllCategories() {
  return categories
}

export function getCategoryBySlug(slug: string) {
  return categories.find((category) => category.slug === slug) || null
}

export function getAllTools() {
  return tools
}

export function getToolsByCategory(categorySlug: string) {
  return tools.filter((tool) => tool.categorySlug === categorySlug)
}

export function getFeaturedTools(limit = 6) {
  return tools
    .filter((tool) => tool.featured)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
}

export function getToolBySlug(slug: string) {
  return tools.find((tool) => tool.slug === slug) || null
}

export function getToolById(id: number) {
  return tools.find((tool) => tool.id === id) || null
}

export function getPopularComparisons(limit = 5) {
  return comparisons.sort((a, b) => b.viewCount - a.viewCount).slice(0, limit)
}

export function getComparisonBySlug(slug: string) {
  return comparisons.find((comparison) => comparison.slug === slug) || null
}

export function getResources(limit = 10) {
  return resources
    .filter((resource) => resource.published)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit)
}

export function getResourceBySlug(slug: string) {
  return resources.find((resource) => resource.slug === slug) || null
}

export function searchTools(query: string) {
  const lowerQuery = query.toLowerCase()
  return tools.filter(
    (tool) =>
      tool.name.toLowerCase().includes(lowerQuery) ||
      tool.description.toLowerCase().includes(lowerQuery) ||
      tool.category.toLowerCase().includes(lowerQuery),
  )
}
