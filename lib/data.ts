// Definición de categorías
export const categories = [
  {
    name: "Escritura IA",
    slug: "escritura-ia",
    icon: "✍️",
    description: "Herramientas de IA para mejorar tu escritura y generar contenido",
    imageUrl: "/abstract-ai-icon.png",
  },
  {
    name: "Automatización",
    slug: "automatizacion",
    icon: "⚙️",
    description: "Automatiza tareas repetitivas y flujos de trabajo",
    imageUrl: "/automation-blueprint.png",
  },
  {
    name: "Gestión de Tareas",
    slug: "gestion-tareas",
    icon: "📋",
    description: "Organiza y gestiona tus tareas y proyectos con IA",
    imageUrl: "/task-management-templates.png",
  },
  {
    name: "Reuniones",
    slug: "reuniones",
    icon: "🎯",
    description: "Optimiza tus reuniones con herramientas de IA",
    imageUrl: "/collaborative-ai-meeting.png",
  },
  {
    name: "Comunicación",
    slug: "comunicacion",
    icon: "💬",
    description: "Mejora tu comunicación con asistentes de IA",
    imageUrl: "/stylized-chat-icon.png",
  },
  {
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
    name: "Notion AI",
    slug: "notion-ai",
    description: "Asistente de escritura y organización con IA integrada en Notion.",
    longDescription:
      "Notion AI es una potente herramienta de inteligencia artificial integrada directamente en la plataforma de Notion. Permite a los usuarios generar texto, resumir contenido, traducir a múltiples idiomas, mejorar la escritura y mucho más, todo sin salir de su espacio de trabajo habitual.",
    imageUrl: "/notion-logo.png",
    category: "escritura-ia",
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
    name: "Zapier",
    slug: "zapier",
    description: "Automatiza tareas entre aplicaciones sin necesidad de código.",
    longDescription:
      "Zapier es una plataforma de automatización que conecta más de 5,000 aplicaciones, permitiéndote crear flujos de trabajo automatizados sin necesidad de programación. Ideal para profesionales remotos que buscan ahorrar tiempo en tareas repetitivas.",
    imageUrl: "/zapier-logo.png",
    category: "automatizacion",
    tags: ["Automatización", "Integración", "Sin código", "Productividad"],
    score: 9.0,
    featured: true,
    affiliateUrl: "https://zapier.com/?utm_source=neuroworkai&utm_medium=affiliate",
    verified: true,
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
  },
  {
    name: "ClickUp",
    slug: "clickup",
    description: "Plataforma todo en uno para gestión de proyectos con funciones de IA.",
    longDescription:
      "ClickUp es una plataforma de productividad todo en uno que reemplaza todas tus aplicaciones de trabajo. Combina tareas, documentos, chat, metas y más en una plataforma, ahora potenciada con IA.",
    imageUrl: "/clickup-logo.png",
    category: "gestion-tareas",
    tags: ["Gestión de proyectos", "Productividad", "Colaboración", "IA"],
    score: 8.8,
    featured: true,
    affiliateUrl: "https://clickup.com/?af=123",
    verified: true,
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
  },
  {
    name: "Fireflies",
    slug: "fireflies",
    description: "Transcribe y analiza reuniones automáticamente con IA.",
    longDescription:
      "Fireflies.ai es un asistente de reuniones con IA que se une a tus llamadas, toma notas y crea resúmenes automáticamente. Permite buscar, transcribir y analizar conversaciones para extraer información valiosa.",
    imageUrl: "/fireflies-logo-full.png",
    category: "reuniones",
    tags: ["Transcripción", "Reuniones", "IA", "Productividad"],
    score: 8.9,
    featured: false,
    affiliateUrl: "#",
    verified: true,
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
  },
  {
    name: "Otter.ai",
    slug: "otter-ai",
    description: "Asistente de notas con IA para transcribir y resumir reuniones.",
    longDescription:
      "Otter.ai es una aplicación de transcripción y toma de notas impulsada por IA que convierte conversaciones de voz en texto en tiempo real. Ideal para reuniones, entrevistas y conferencias.",
    imageUrl: "/otter-ai-logo-full.png",
    category: "reuniones",
    tags: ["Transcripción", "Notas", "IA", "Reuniones"],
    score: 8.7,
    featured: false,
    affiliateUrl: "#",
    verified: true,
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
  },
  {
    name: "Grammarly",
    slug: "grammarly",
    description: "Corrector gramatical y asistente de escritura con IA.",
    longDescription:
      "Grammarly es un asistente de escritura impulsado por IA que ayuda a mejorar la gramática, ortografía, puntuación y estilo. Ofrece sugerencias en tiempo real mientras escribes en cualquier plataforma.",
    imageUrl: "/grammarly-logo.png",
    category: "escritura-ia",
    tags: ["Escritura", "Gramática", "IA", "Productividad"],
    score: 8.9,
    featured: false,
    affiliateUrl: "#",
    verified: true,
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
    tool1_image: "/notion-logo.png",
    tool1_description: "Asistente de escritura y organización con IA integrada en Notion.",
    tool2_name: "Grammarly",
    tool2_slug: "grammarly",
    tool2_image: "/grammarly-logo.png",
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
    tool1_image: "/zapier-logo.png",
    tool1_description: "Automatiza tareas entre aplicaciones sin necesidad de código.",
    tool2_name: "ClickUp",
    tool2_slug: "clickup",
    tool2_image: "/clickup-logo.png",
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
    tool1_image: "/fireflies-logo-full.png",
    tool1_description: "Transcribe y analiza reuniones automáticamente con IA.",
    tool2_name: "Otter.ai",
    tool2_slug: "otter-ai",
    tool2_image: "/otter-ai-logo-full.png",
    tool2_description: "Asistente de notas con IA para transcribir y resumir reuniones.",
  },
]

// Función para obtener todas las categorías
export const getAllCategories = async () => {
  return categories
}

// Función para obtener herramientas por categoría
export const getToolsByCategory = async (categorySlug: string) => {
  return tools.filter((tool) => tool.category === categorySlug)
}

// Función para obtener todas las herramientas
export const getAllTools = async () => {
  return tools
}

// Función para obtener una herramienta por slug
export const getToolBySlug = async (slug: string) => {
  return tools.find((tool) => tool.slug === slug) || null
}
