interface Category {
  name: string
  slug: string
  icon: string
}

const allTools = {
  "escritura-ia": [
    {
      name: "Notion AI",
      description: "Asistente de escritura y organización con IA integrada en Notion.",
      imageUrl: "/notion-logo.png",
      category: "Escritura IA",
      slug: "notion-ai",
      score: 9.2,
    },
    {
      name: "Jasper",
      description: "Generador de contenido con IA para marketing y comunicación.",
      imageUrl: "/jasper-logo.png",
      category: "Escritura IA",
      slug: "jasper",
      score: 8.7,
    },
    {
      name: "Grammarly",
      description: "Corrector gramatical y asistente de escritura con IA.",
      imageUrl: "/grammarly-logo.png",
      category: "Escritura IA",
      slug: "grammarly",
      score: 8.9,
    },
  ],
  automatizacion: [
    {
      name: "Zapier",
      description: "Automatiza tareas entre aplicaciones sin necesidad de código.",
      imageUrl: "/zapier-logo.png",
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
  ],
  "gestion-tareas": [
    {
      name: "ClickUp",
      description: "Plataforma todo en uno para gestión de proyectos con funciones de IA.",
      imageUrl: "/clickup-logo.png",
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
  ],
  reuniones: [
    {
      name: "Fireflies",
      description: "Transcribe y analiza reuniones automáticamente con IA.",
      imageUrl: "/fireflies-logo-full.png",
      category: "Reuniones",
      slug: "fireflies",
      score: 8.9,
    },
    {
      name: "Otter.ai",
      description: "Asistente de notas con IA para transcribir y resumir reuniones.",
      imageUrl: "/otter-ai-logo-full.png",
      category: "Reuniones",
      slug: "otter-ai",
      score: 8.7,
    },
  ],
}

export const getToolData = (slug: string) => {
  return (
    Object.values(allTools)
      .flat()
      .find((tool) => tool.slug === slug) || null
  )
}

export const getToolsByCategory = (category: string) => {
  return allTools[category] || []
}

export const getAllCategories = async (): Promise<Category[]> => {
  return [
    { name: "Escritura IA", slug: "escritura-ia", icon: "✍️" },
    { name: "Automatización", slug: "automatizacion", icon: "⚙️" },
    { name: "Gestión de Tareas", slug: "gestion-tareas", icon: "📋" },
    { name: "Reuniones", slug: "reuniones", icon: "🎯" },
    { name: "Comunicación", slug: "comunicacion", icon: "💬" },
    { name: "Otras Herramientas", slug: "otras", icon: "🧰" },
  ]
}
