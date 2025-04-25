import { unstable_cache } from "next/cache"

interface Category {
  name: string
  slug: string
  icon: string
}

export const getToolData = unstable_cache(
  async (slug: string) => {
    // El código existente para obtener datos de la herramienta
    // ...
  },
  ["tool-data"],
  { revalidate: 3600 }, // Revalidar cada hora
)

export const getToolsByCategory = unstable_cache(
  async (categorySlug: string) => {
    const allTools = [
      {
        name: "Notion AI",
        description: "Asistente de escritura y organización con IA integrada en Notion.",
        imageUrl: "/notion-ai-blue.png",
        category: "Escritura IA",
        slug: "notion-ai",
        score: 9.2,
      },
      {
        name: "Jasper",
        description: "Generador de contenido con IA para marketing y comunicación.",
        imageUrl: "/ai-logo-blue.png",
        category: "Escritura IA",
        slug: "jasper",
        score: 8.7,
      },
      {
        name: "Grammarly",
        description: "Corrector gramatical y asistente de escritura con IA.",
        imageUrl: "/grammarly-blue.png",
        category: "Escritura IA",
        slug: "grammarly",
        score: 8.9,
      },
      {
        name: "Zapier",
        description: "Automatiza tareas entre aplicaciones sin necesidad de código.",
        imageUrl: "/zapier-blue-background.png",
        category: "Automatización",
        slug: "zapier",
        score: 9.0,
      },
      {
        name: "Make",
        description: "Plataforma de automatización visual para conectar apps y automatizar flujos de trabajo.",
        imageUrl: "/abstract-geometric-logo.png",
        category: "Automatización",
        slug: "make",
        score: 8.8,
      },
      {
        name: "ClickUp",
        description: "Plataforma todo en uno para gestión de proyectos con funciones de IA.",
        imageUrl: "/clickup-blue-background.png",
        category: "Gestión de tareas",
        slug: "clickup",
        score: 8.8,
      },
      {
        name: "Asana",
        description: "Plataforma de gestión de proyectos y tareas para equipos.",
        imageUrl: "/Asana-logo-abstract.png",
        category: "Gestión de tareas",
        slug: "asana",
        score: 8.5,
      },
      {
        name: "Fireflies",
        description: "Transcribe y analiza reuniones automáticamente con IA.",
        imageUrl: "/fireflies-ai-logo-blue.png",
        category: "Reuniones",
        slug: "fireflies",
        score: 8.9,
      },
      {
        name: "Otter.ai",
        description: "Asistente de notas con IA para transcribir y resumir reuniones.",
        imageUrl: "/otter-ai-logo-inspired-design.png",
        category: "Reuniones",
        slug: "otter-ai",
        score: 8.7,
      },
      {
        name: "ChatGPT",
        description: "Asistente conversacional de IA para múltiples tareas y generación de contenido.",
        imageUrl: "/stylized-chat-icon.png",
        category: "Escritura IA",
        slug: "chatgpt",
        score: 9.1,
      },
    ]

    const categoryMap: Record<string, string> = {
      "escritura-ia": "Escritura IA",
      automatizacion: "Automatización",
      "gestion-tareas": "Gestión de Tareas",
      reuniones: "Reuniones",
      comunicacion: "Comunicación",
      otras: "Otras Herramientas",
    }

    const categoryName = categoryMap[categorySlug] || "Categoría no encontrada"

    const filteredTools = allTools.filter((tool) => tool.category === categoryName)
    return filteredTools
  },
  ["tools-by-category"],
  { revalidate: 3600 },
)

export const getAllCategories = unstable_cache(
  async (): Promise<Category[]> => {
    const categories = [
      { name: "Escritura IA", slug: "escritura-ia", icon: "✍️" },
      { name: "Automatización", slug: "automatizacion", icon: "⚙️" },
      { name: "Gestión de Tareas", slug: "gestion-tareas", icon: "📋" },
      { name: "Reuniones", slug: "reuniones", icon: "🎯" },
      { name: "Comunicación", slug: "comunicacion", icon: "💬" },
      { name: "Otras Herramientas", slug: "otras", icon: "🧰" },
    ]
    return categories
  },
  ["all-categories"],
  { revalidate: 3600 },
)
