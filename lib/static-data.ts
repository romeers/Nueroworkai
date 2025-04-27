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
    imageUrl: "/notion-logo.png",
    category: "escritura-ia",
    categoryId: 1,
    categorySlug: "escritura-ia",
    tags: ["Escritura IA", "Productividad", "Organización", "Colaboración"],
    score: 9.2,
    featured: true,
    isNew: false,
    affiliateUrl: "https://www.notion.so/product/ai",
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
        imageUrl: "/notion-logo.png",
      },
      {
        name: "Resumen automático",
        description: "Resume documentos largos o reuniones en puntos clave.",
        imageUrl: "/notion-logo.png",
      },
      {
        name: "Traducción",
        description: "Traduce contenido a múltiples idiomas con un solo clic.",
        imageUrl: "/notion-logo.png",
      },
    ],
    pricing: [
      {
        plan: "Personal",
        price: "$10/mes",
        features: ["20 créditos de IA al mes", "Todas las funciones básicas de IA", "Uso personal"],
        recommended: false,
        affiliateUrl: "https://www.notion.so/product/ai",
      },
      {
        plan: "Plus",
        price: "$15/mes",
        features: ["50 créditos de IA al mes", "Todas las funciones de IA", "Uso personal o en equipos pequeños"],
        recommended: true,
        affiliateUrl: "https://www.notion.so/product/ai",
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
    imageUrl: "/zapier-logo.png",
    category: "automatizacion",
    categoryId: 2,
    categorySlug: "automatizacion",
    tags: ["Automatización", "Integración", "Sin código", "Productividad"],
    score: 9.0,
    featured: true,
    isNew: false,
    affiliateUrl: "https://zapier.com/",
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
        imageUrl: "/zapier-logo.png",
      },
      {
        name: "Integraciones",
        description: "Conecta con más de 5,000 aplicaciones populares",
        imageUrl: "/zapier-logo.png",
      },
    ],
    pricing: [
      {
        plan: "Free",
        price: "$0/mes",
        features: ["5 Zaps", "100 tareas/mes", "Actualizaciones cada 15 minutos"],
        recommended: false,
        affiliateUrl: "https://zapier.com/pricing",
      },
      {
        plan: "Starter",
        price: "$19.99/mes",
        features: ["20 Zaps", "750 tareas/mes", "Actualizaciones cada 2 minutos"],
        recommended: true,
        affiliateUrl: "https://zapier.com/pricing",
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
    imageUrl: "/clickup-logo.png",
    category: "gestion-tareas",
    categoryId: 3,
    categorySlug: "gestion-tareas",
    tags: ["Gestión de proyectos", "Productividad", "Colaboración", "IA"],
    score: 8.8,
    featured: true,
    isNew: false,
    affiliateUrl: "https://clickup.com/",
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
        imageUrl: "/clickup-logo.png",
      },
      {
        name: "Documentos colaborativos",
        description: "Crea y edita documentos en tiempo real con tu equipo",
        imageUrl: "/clickup-logo.png",
      },
    ],
    pricing: [
      {
        plan: "Free Forever",
        price: "$0/mes",
        features: ["Tareas ilimitadas", "Miembros ilimitados", "100MB de almacenamiento"],
        recommended: false,
        affiliateUrl: "https://clickup.com/pricing",
      },
      {
        plan: "Unlimited",
        price: "$5/mes por usuario",
        features: ["Almacenamiento ilimitado", "Vistas ilimitadas", "Integraciones ilimitadas"],
        recommended: true,
        affiliateUrl: "https://clickup.com/pricing",
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
    imageUrl: "/fireflies-logo-full.png",
    category: "reuniones",
    categoryId: 4,
    categorySlug: "reuniones",
    tags: ["Transcripción", "Reuniones", "IA", "Productividad"],
    score: 8.9,
    featured: false,
    isNew: true,
    affiliateUrl: "https://fireflies.ai/",
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
        imageUrl: "/fireflies-logo-icon.png",
      },
    ],
    pricing: [
      {
        plan: "Free",
        price: "$0/mes",
        features: ["8 horas de transcripción/mes", "Búsqueda básica", "Integración con calendario"],
        recommended: false,
        affiliateUrl: "https://fireflies.ai/",
      },
      {
        plan: "Pro",
        price: "$10/mes por usuario",
        features: ["Horas ilimitadas", "Búsqueda avanzada", "Resúmenes con IA"],
        recommended: true,
        affiliateUrl: "https://fireflies.ai/",
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
    imageUrl: "/otter-ai-logo-full.png",
    category: "reuniones",
    categoryId: 4,
    categorySlug: "reuniones",
    tags: ["Transcripción", "Notas", "IA", "Reuniones"],
    score: 8.7,
    featured: false,
    isNew: false,
    affiliateUrl: "https://otter.ai/",
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
        imageUrl: "/otter-ai-logo.png",
      },
    ],
    pricing: [
      {
        plan: "Basic",
        price: "$0/mes",
        features: ["600 minutos/mes", "Transcripción básica", "Exportación limitada"],
        recommended: false,
        affiliateUrl: "https://otter.ai/",
      },
      {
        plan: "Pro",
        price: "$8.33/mes",
        features: ["6,000 minutos/mes", "Transcripción avanzada", "Resúmenes con IA"],
        recommended: true,
        affiliateUrl: "https://otter.ai/",
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
    imageUrl: "/grammarly-logo.png",
    category: "escritura-ia",
    categoryId: 1,
    categorySlug: "escritura-ia",
    tags: ["Escritura", "Gramática", "IA", "Productividad"],
    score: 8.9,
    featured: false,
    isNew: false,
    affiliateUrl: "https://www.grammarly.com/",
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
        imageUrl: "/grammarly-logo.png",
      },
    ],
    pricing: [
      {
        plan: "Free",
        price: "$0/mes",
        features: ["Corrección básica", "Sugerencias limitadas", "Extensión de navegador"],
        recommended: false,
        affiliateUrl: "https://www.grammarly.com/",
      },
      {
        plan: "Premium",
        price: "$12/mes",
        features: ["Corrección avanzada", "Sugerencias de estilo", "Detector de plagio"],
        recommended: true,
        affiliateUrl: "https://www.grammarly.com/",
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
  {
    id: 7,
    name: "Jasper",
    slug: "jasper",
    description: "Generador de contenido con IA para marketing y comunicación.",
    longDescription:
      "Jasper es una plataforma de IA que ayuda a crear contenido de alta calidad para marketing, blogs, redes sociales y más. Utiliza modelos avanzados de lenguaje para generar texto que suena natural y persuasivo.",
    imageUrl: "/jasper-logo.png",
    category: "escritura-ia",
    categoryId: 1,
    categorySlug: "escritura-ia",
    tags: ["Escritura", "Marketing", "IA", "Contenido"],
    score: 8.7,
    featured: false,
    isNew: false,
    affiliateUrl: "https://www.jasper.ai/",
    verified: true,
    specialOffer: null,
    pros: [
      "Genera contenido de alta calidad rápidamente",
      "Múltiples plantillas para diferentes tipos de contenido",
      "Integración con herramientas de SEO",
      "Interfaz intuitiva",
    ],
    cons: [
      "Precio elevado para pequeñas empresas",
      "Requiere revisión humana para obtener los mejores resultados",
      "La calidad varía según el tema y la complejidad",
    ],
    features: [
      {
        name: "Generación de contenido",
        description: "Crea artículos, publicaciones y textos de marketing con IA",
        imageUrl: "/jasper-logo.png",
      },
    ],
    pricing: [
      {
        plan: "Creator",
        price: "$39/mes",
        features: ["50,000 palabras/mes", "Más de 50 plantillas", "Integración con Chrome"],
        recommended: false,
        affiliateUrl: "https://www.jasper.ai/",
      },
      {
        plan: "Teams",
        price: "$99/mes",
        features: ["100,000 palabras/mes", "Todas las plantillas", "Colaboración en equipo"],
        recommended: true,
        affiliateUrl: "https://www.jasper.ai/",
      },
    ],
    reviews: [
      {
        author: "Marta R.",
        rating: 4,
        title: "Excelente para marketing de contenidos",
        comment:
          "Jasper ha acelerado enormemente nuestro proceso de creación de contenido. Ahorramos horas cada semana.",
        date: "2023-07-15",
        helpful: 18,
        unhelpful: 2,
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

// Actualizar la sección de recursos para eliminar los recursos anteriores y añadir el nuevo recurso
export const resources = [
  {
    id: 1,
    title: "Cómo implementar IA en tu flujo de trabajo diario",
    slug: "implementar-ia-flujo-trabajo",
    description:
      "Guía práctica para integrar herramientas de IA en tus procesos diarios sin necesidad de ser un experto técnico.",
    content: "Contenido completo del artículo sobre implementación de IA...",
    imageUrl: "/ai-productivity-kit-ebook.png",
    category: "Productividad",
    categoryId: 1,
    categorySlug: "productividad",
    viewCount: 0,
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

// Mantener el resto de las funciones relacionadas con recursos
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
