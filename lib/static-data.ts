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

// Definición de herramientas
export const tools = [
  {
    id: 1,
    name: "Notion AI",
    slug: "notion-ai",
    description: "Asistente de escritura y organización con IA integrada en Notion.",
    longDescription:
      "Notion AI es una potente herramienta de inteligencia artificial integrada directamente en la plataforma de Notion. Permite a los usuarios generar texto, resumir contenido, traducir a múltiples idiomas, mejorar la escritura y mucho más, todo sin salir de su espacio de trabajo habitual.",
    imageUrl: "/notion-ai-blue.png",
    category: "escritura-ia",
    categoryId: 1,
    categorySlug: "escritura-ia",
    tags: ["Escritura IA", "Productividad", "Organización", "Colaboración"],
    score: 9.2,
    featured: true,
    isNew: false,
    affiliateUrl: "https://notion.so/product/ai?ref=neuroworkai",
    verified: true,
    specialOffer: "7 días de prueba gratuita + 20% de descuento en el primer año",
    pros: [
      "Integración perfecta con el ecosistema de Notion",
      "Interfaz intuitiva y fácil de usar",
      "Múltiples funcionalidades de IA en una sola herramienta",
      "Excelente para equipos que ya utilizan Notion",
      "Mejora continua con nuevas funcionalidades",
    ],
    cons: [
      "Requiere suscripción a Notion para acceder a todas las funciones",
      "Algunas funciones avanzadas tienen limitaciones",
      "Puede ser costoso para equipos grandes",
      "Curva de aprendizaje para nuevos usuarios de Notion",
    ],
    features: [
      {
        name: "Generación de texto",
        description: "Crea contenido de alta calidad a partir de prompts simples.",
        imageUrl: "/notion-ai-text-generation.png",
      },
      {
        name: "Resumen automático",
        description: "Resume documentos largos o reuniones en puntos clave.",
        imageUrl: "/notion-ai-summarization.png",
      },
      {
        name: "Traducción",
        description: "Traduce contenido a múltiples idiomas con un solo clic.",
        imageUrl: "/notion-ai-translation-workflow.png",
      },
    ],
    pricing: [
      {
        plan: "Personal",
        price: "$10/mes",
        features: ["20 créditos de IA al mes", "Todas las funciones básicas de IA", "Uso personal"],
        recommended: false,
        affiliateUrl: "https://notion.so/product/ai/personal?ref=neuroworkai",
      },
      {
        plan: "Plus",
        price: "$15/mes",
        features: ["50 créditos de IA al mes", "Todas las funciones de IA", "Uso personal o en equipos pequeños"],
        recommended: true,
        affiliateUrl: "https://notion.so/product/ai/plus?ref=neuroworkai",
      },
    ],
    reviews: [
      {
        author: "María G.",
        rating: 5,
        title: "Transformó mi forma de trabajar",
        comment:
          "Notion AI ha cambiado completamente mi flujo de trabajo. Ahorro horas cada semana en la creación de contenido y documentación.",
        date: "2023-03-15",
        helpful: 24,
        unhelpful: 2,
      },
      {
        author: "Carlos R.",
        rating: 4,
        title: "Excelente, pero con margen de mejora",
        comment:
          "Una herramienta fantástica que me ayuda diariamente. Le falta pulir algunas funciones, pero su integración con Notion es perfecta.",
        date: "2023-04-22",
        helpful: 18,
        unhelpful: 3,
      },
    ],
  },
  {
    id: 2,
    name: "Zapier",
    slug: "zapier",
    description: "Automatiza tareas entre aplicaciones sin necesidad de código.",
    longDescription:
      "Zapier es una plataforma de automatización que conecta más de 5,000 aplicaciones, permitiéndote crear flujos de trabajo automatizados sin necesidad de programación. Ideal para profesionales remotos que buscan ahorrar tiempo en tareas repetitivas.",
    imageUrl: "/zapier-blue-background.png",
    category: "automatizacion",
    categoryId: 2,
    categorySlug: "automatizacion",
    tags: ["Automatización", "Integración", "Sin código", "Productividad"],
    score: 9.0,
    featured: true,
    isNew: false,
    affiliateUrl: "https://zapier.com/?utm_source=neuroworkai&utm_medium=affiliate",
    verified: true,
    specialOffer: null,
    pros: [
      "Conecta más de 5,000 aplicaciones",
      "No requiere conocimientos de programación",
      "Interfaz visual intuitiva",
      "Automatizaciones confiables y estables",
    ],
    cons: [
      "Los planes gratuitos tienen limitaciones significativas",
      "Puede volverse costoso para automatizaciones complejas",
      "Algunas integraciones avanzadas requieren conocimientos técnicos",
    ],
    features: [
      {
        name: "Zaps",
        description: "Crea flujos de trabajo automatizados entre aplicaciones",
        imageUrl: "/connected-apps-workflow.png",
      },
      {
        name: "Integraciones",
        description: "Conecta con más de 5,000 aplicaciones populares",
        imageUrl: "/interconnected-ai-workflow.png",
      },
    ],
    pricing: [
      {
        plan: "Free",
        price: "$0/mes",
        features: ["5 Zaps", "100 tareas/mes", "Actualizaciones cada 15 minutos"],
        recommended: false,
        affiliateUrl: "https://zapier.com/pricing?ref=neuroworkai",
      },
      {
        plan: "Starter",
        price: "$19.99/mes",
        features: ["20 Zaps", "750 tareas/mes", "Actualizaciones cada 2 minutos"],
        recommended: true,
        affiliateUrl: "https://zapier.com/pricing?ref=neuroworkai",
      },
    ],
    reviews: [
      {
        author: "Juan P.",
        rating: 5,
        title: "Indispensable para mi negocio",
        comment:
          "Zapier ha automatizado procesos que antes me tomaban horas. Ahora puedo concentrarme en lo que realmente importa.",
        date: "2023-05-10",
        helpful: 32,
        unhelpful: 1,
      },
    ],
  },
  {
    id: 3,
    name: "ClickUp",
    slug: "clickup",
    description: "Plataforma todo en uno para gestión de proyectos con funciones de IA.",
    longDescription:
      "ClickUp es una plataforma de productividad todo en uno que reemplaza todas tus aplicaciones de trabajo. Combina tareas, documentos, chat, metas y más en una plataforma, ahora potenciada con IA.",
    imageUrl: "/clickup-blue-background.png",
    category: "gestion-tareas",
    categoryId: 3,
    categorySlug: "gestion-tareas",
    tags: ["Gestión de proyectos", "Productividad", "Colaboración", "IA"],
    score: 8.8,
    featured: true,
    isNew: false,
    affiliateUrl: "https://clickup.com/?af=123",
    verified: true,
    specialOffer: null,
    pros: [
      "Todo en una sola plataforma",
      "Altamente personalizable",
      "Funciones de IA para automatizar tareas",
      "Excelente para equipos remotos",
    ],
    cons: [
      "Puede resultar abrumador al principio",
      "La curva de aprendizaje es pronunciada",
      "Algunas funciones avanzadas solo están en planes de pago",
    ],
    features: [
      {
        name: "Gestión de tareas",
        description: "Organiza y prioriza tu trabajo con múltiples vistas",
        imageUrl: "/clickup-project-template-overview.png",
      },
      {
        name: "Documentos colaborativos",
        description: "Crea y edita documentos en tiempo real con tu equipo",
        imageUrl: "/ai-integrated-content-calendar.png",
      },
    ],
    pricing: [
      {
        plan: "Free Forever",
        price: "$0/mes",
        features: ["Tareas ilimitadas", "Miembros ilimitados", "100MB de almacenamiento"],
        recommended: false,
        affiliateUrl: "https://clickup.com/pricing?ref=neuroworkai",
      },
      {
        plan: "Unlimited",
        price: "$5/mes por usuario",
        features: ["Almacenamiento ilimitado", "Vistas ilimitadas", "Integraciones ilimitadas"],
        recommended: true,
        affiliateUrl: "https://clickup.com/pricing?ref=neuroworkai",
      },
    ],
    reviews: [
      {
        author: "Laura M.",
        rating: 4,
        title: "Gran herramienta para equipos",
        comment:
          "ClickUp ha mejorado significativamente la organización de nuestro equipo. La curva de aprendizaje vale la pena.",
        date: "2023-04-15",
        helpful: 19,
        unhelpful: 3,
      },
    ],
  },
  {
    id: 4,
    name: "Fireflies",
    slug: "fireflies",
    description: "Transcribe y analiza reuniones automáticamente con IA.",
    longDescription:
      "Fireflies.ai es un asistente de reuniones con IA que se une a tus llamadas, toma notas y crea resúmenes automáticamente. Permite buscar, transcribir y analizar conversaciones para extraer información valiosa.",
    imageUrl: "/fireflies-ai-logo-blue.png",
    category: "reuniones",
    categoryId: 4,
    categorySlug: "reuniones",
    tags: ["Transcripción", "Reuniones", "IA", "Productividad"],
    score: 8.9,
    featured: false,
    isNew: true,
    affiliateUrl: "#",
    verified: true,
    specialOffer: null,
    pros: [
      "Transcripción precisa en múltiples idiomas",
      "Integración con las principales plataformas de videoconferencia",
      "Búsqueda avanzada en transcripciones",
      "Resúmenes automáticos de reuniones",
    ],
    cons: [
      "El plan gratuito tiene limitaciones importantes",
      "Ocasionalmente puede tener problemas con acentos fuertes",
      "Requiere buena conexión a internet para funcionar correctamente",
    ],
    features: [
      {
        name: "Transcripción automática",
        description: "Convierte el audio de tus reuniones en texto con alta precisión",
        imageUrl: "/abstract-fireflies.png",
      },
    ],
    pricing: [
      {
        plan: "Free",
        price: "$0/mes",
        features: ["8 horas de transcripción/mes", "Búsqueda básica", "Integración con calendario"],
        recommended: false,
        affiliateUrl: "#",
      },
      {
        plan: "Pro",
        price: "$10/mes por usuario",
        features: ["Horas ilimitadas", "Búsqueda avanzada", "Resúmenes con IA"],
        recommended: true,
        affiliateUrl: "#",
      },
    ],
    reviews: [
      {
        author: "Miguel A.",
        rating: 5,
        title: "Revolucionó nuestras reuniones",
        comment:
          "Ya no tenemos que preocuparnos por tomar notas. Fireflies captura todo y los resúmenes son increíblemente útiles.",
        date: "2023-06-20",
        helpful: 27,
        unhelpful: 1,
      },
    ],
  },
  {
    id: 5,
    name: "Otter.ai",
    slug: "otter-ai",
    description: "Asistente de notas con IA para transcribir y resumir reuniones.",
    longDescription:
      "Otter.ai es una aplicación de transcripción y toma de notas impulsada por IA que convierte conversaciones de voz en texto en tiempo real. Ideal para reuniones, entrevistas y conferencias.",
    imageUrl: "/otter-ai-blue.png",
    category: "reuniones",
    categoryId: 4,
    categorySlug: "reuniones",
    tags: ["Transcripción", "Notas", "IA", "Reuniones"],
    score: 8.7,
    featured: false,
    isNew: false,
    affiliateUrl: "#",
    verified: true,
    specialOffer: null,
    pros: [
      "Transcripción en tiempo real",
      "Identificación de hablantes",
      "Resúmenes automáticos",
      "Interfaz fácil de usar",
    ],
    cons: [
      "Limitaciones en el plan gratuito",
      "Puede tener dificultades con terminología técnica",
      "La precisión varía según la calidad del audio",
    ],
    features: [
      {
        name: "Transcripción en tiempo real",
        description: "Convierte conversaciones en texto mientras hablas",
        imageUrl: "/otter-ai-logo-inspired-design.png",
      },
    ],
    pricing: [
      {
        plan: "Basic",
        price: "$0/mes",
        features: ["600 minutos/mes", "Transcripción básica", "Exportación limitada"],
        recommended: false,
        affiliateUrl: "#",
      },
      {
        plan: "Pro",
        price: "$8.33/mes",
        features: ["6,000 minutos/mes", "Transcripción avanzada", "Resúmenes con IA"],
        recommended: true,
        affiliateUrl: "#",
      },
    ],
    reviews: [
      {
        author: "Ana L.",
        rating: 4,
        title: "Muy útil para entrevistas",
        comment:
          "Uso Otter.ai para transcribir entrevistas y funciona muy bien. Ocasionalmente tiene problemas con términos técnicos.",
        date: "2023-05-05",
        helpful: 15,
        unhelpful: 2,
      },
    ],
  },
  {
    id: 6,
    name: "Grammarly",
    slug: "grammarly",
    description: "Corrector gramatical y asistente de escritura con IA.",
    longDescription:
      "Grammarly es un asistente de escritura impulsado por IA que ayuda a mejorar la gramática, ortografía, puntuación y estilo. Ofrece sugerencias en tiempo real mientras escribes en cualquier plataforma.",
    imageUrl: "/grammarly-blue.png",
    category: "escritura-ia",
    categoryId: 1,
    categorySlug: "escritura-ia",
    tags: ["Escritura", "Gramática", "IA", "Productividad"],
    score: 8.9,
    featured: false,
    isNew: false,
    affiliateUrl: "#",
    verified: true,
    specialOffer: null,
    pros: [
      "Corrección gramatical precisa",
      "Sugerencias de estilo y tono",
      "Funciona en múltiples plataformas",
      "Extensiones para navegadores y aplicaciones",
    ],
    cons: [
      "Las mejores funciones están en el plan premium",
      "Ocasionalmente sugiere cambios innecesarios",
      "No siempre entiende contextos específicos",
    ],
    features: [
      {
        name: "Corrección gramatical",
        description: "Detecta y corrige errores gramaticales y ortográficos",
        imageUrl: "/Grammarly-icon.png",
      },
    ],
    pricing: [
      {
        plan: "Free",
        price: "$0/mes",
        features: ["Corrección básica", "Sugerencias limitadas", "Extensión de navegador"],
        recommended: false,
        affiliateUrl: "#",
      },
      {
        plan: "Premium",
        price: "$12/mes",
        features: ["Corrección avanzada", "Sugerencias de estilo", "Detector de plagio"],
        recommended: true,
        affiliateUrl: "#",
      },
    ],
    reviews: [
      {
        author: "Pedro S.",
        rating: 5,
        title: "Indispensable para escritores",
        comment:
          "Grammarly ha mejorado significativamente mi escritura. Las sugerencias de estilo son particularmente útiles.",
        date: "2023-03-30",
        helpful: 22,
        unhelpful: 1,
      },
    ],
  },
]

// Definición de comparaciones
export const comparisons = [
  {
    id: 1,
    slug: "notion-ai-vs-grammarly",
    title: "Notion AI vs Grammarly: ¿Cuál es mejor para escritores?",
    description: "Comparativa detallada entre Notion AI y Grammarly para mejorar tu escritura",
    content: "Contenido detallado de la comparación entre Notion AI y Grammarly...",
    viewCount: 1250,
    tool1_id: 1,
    tool2_id: 6,
    tool1_name: "Notion AI",
    tool1_slug: "notion-ai",
    tool1_image: "/notion-ai-blue.png",
    tool1_description: "Asistente de escritura y organización con IA integrada en Notion.",
    tool2_name: "Grammarly",
    tool2_slug: "grammarly",
    tool2_image: "/grammarly-blue.png",
    tool2_description: "Corrector gramatical y asistente de escritura con IA.",
  },
  {
    id: 2,
    slug: "zapier-vs-clickup",
    title: "Zapier vs ClickUp: Automatización y gestión de proyectos",
    description: "Análisis comparativo entre Zapier y ClickUp para automatizar tu flujo de trabajo",
    content: "Contenido detallado de la comparación entre Zapier y ClickUp...",
    viewCount: 980,
    tool1_id: 2,
    tool2_id: 3,
    tool1_name: "Zapier",
    tool1_slug: "zapier",
    tool1_image: "/zapier-blue-background.png",
    tool1_description: "Automatiza tareas entre aplicaciones sin necesidad de código.",
    tool2_name: "ClickUp",
    tool2_slug: "clickup",
    tool2_image: "/clickup-blue-background.png",
    tool2_description: "Plataforma todo en uno para gestión de proyectos con funciones de IA.",
  },
  {
    id: 3,
    slug: "fireflies-vs-otter-ai",
    title: "Fireflies vs Otter.ai: La batalla de los asistentes de reuniones",
    description: "Comparamos Fireflies y Otter.ai para transcripción y análisis de reuniones",
    content: "Contenido detallado de la comparación entre Fireflies y Otter.ai...",
    viewCount: 850,
    tool1_id: 4,
    tool2_id: 5,
    tool1_name: "Fireflies",
    tool1_slug: "fireflies",
    tool1_image: "/fireflies-ai-logo-blue.png",
    tool1_description: "Transcribe y analiza reuniones automáticamente con IA.",
    tool2_name: "Otter.ai",
    tool2_slug: "otter-ai",
    tool2_image: "/otter-ai-blue.png",
    tool2_description: "Asistente de notas con IA para transcribir y resumir reuniones.",
  },
]

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
    relatedTools: [
      {
        id: 1,
        name: "Notion AI",
        slug: "notion-ai",
        description: "Asistente de escritura y organización con IA integrada en Notion.",
        imageUrl: "/notion-ai-blue.png",
        category: "Escritura IA",
      },
      {
        id: 6,
        name: "Grammarly",
        slug: "grammarly",
        description: "Corrector gramatical y asistente de escritura con IA.",
        imageUrl: "/grammarly-blue.png",
        category: "Escritura IA",
      },
    ],
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
    relatedTools: [
      {
        id: 2,
        name: "Zapier",
        slug: "zapier",
        description: "Automatiza tareas entre aplicaciones sin necesidad de código.",
        imageUrl: "/zapier-blue-background.png",
        category: "Automatización",
      },
    ],
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
    relatedTools: [
      {
        id: 4,
        name: "Fireflies",
        slug: "fireflies",
        description: "Transcribe y analiza reuniones automáticamente con IA.",
        imageUrl: "/fireflies-ai-logo-blue.png",
        category: "Reuniones",
      },
      {
        id: 5,
        name: "Otter.ai",
        slug: "otter-ai",
        description: "Asistente de notas con IA para transcribir y resumir reuniones.",
        imageUrl: "/otter-ai-blue.png",
        category: "Reuniones",
      },
    ],
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
