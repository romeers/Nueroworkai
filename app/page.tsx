"use client"
import { redirect } from "next/navigation"
import { headers } from "next/headers"
import { defaultLocale, locales } from "@/config/i18n"

// Datos de ejemplo para las herramientas destacadas
const featuredTools = [
  {
    name: "Notion AI",
    description: "Asistente de escritura y organización con IA integrada en Notion.",
    imageUrl: "/abstract-ai-flow.png",
    category: "Escritura IA",
    url: "/herramientas/notion-ai",
  },
  {
    name: "Zapier",
    description: "Automatiza tareas entre aplicaciones sin necesidad de código.",
    imageUrl: "/zapier-logo-on-white.png",
    category: "Automatización",
    url: "/herramientas/zapier",
  },
  {
    name: "Grammarly",
    description: "Corrector gramatical y asistente de escritura con IA.",
    imageUrl: "/Grammarly-icon.png",
    category: "Escritura IA",
    url: "/herramientas/grammarly",
  },
  {
    name: "ClickUp",
    description: "Plataforma todo en uno para gestión de proyectos con funciones de IA.",
    imageUrl: "/clickup-logo-isolated.png",
    category: "Gestión de tareas",
    url: "/herramientas/clickup",
  },
  {
    name: "Jasper AI",
    description: "Generador de contenido con IA para marketing y comunicación.",
    imageUrl: "/abstract-ai-logo.png",
    category: "Escritura IA",
    url: "/herramientas/jasper-ai",
  },
  {
    name: "Fireflies.ai",
    description: "Transcribe y analiza reuniones automáticamente con IA.",
    imageUrl: "/abstract-fireflies.png",
    category: "Reuniones",
    url: "/herramientas/fireflies-ai",
  },
  {
    name: "Otter.ai",
    description: "Asistente de notas con IA para transcribir y resumir reuniones.",
    imageUrl: "/otter-ai-logo-inspired-design.png",
    category: "Reuniones",
    url: "/herramientas/otter-ai",
  },
  {
    name: "ChatGPT",
    description: "Asistente conversacional de IA para múltiples tareas y generación de contenido.",
    imageUrl: "/stylized-chat-icon.png",
    category: "Asistente IA",
    url: "/herramientas/chatgpt",
  },
]

// Rename blogPosts to resources
// Datos de ejemplo para los recursos destacados
const resources = [
  {
    title: "Cómo automatizar tareas con Make y Zapier en tu equipo remoto",
    excerpt:
      "Aprende a crear flujos de trabajo automatizados entre tus aplicaciones favoritas utilizando Zapier y Make, ahorrando tiempo y reduciendo errores.",
    imageUrl: "/connected-apps-workflow.png",
    category: "Automatización",
    date: "3 de mayo, 2023",
    slug: "como-automatizar-tareas-make-zapier-equipo-remoto",
  },
  {
    title: "Las mejores herramientas IA para freelancers en 2025",
    excerpt:
      "Descubre las herramientas de IA que están transformando la forma en que trabajan los freelancers, aumentando la eficiencia y reduciendo las tareas repetitivas.",
    imageUrl: "/ai-powered-freelance-artist.png",
    category: "Productividad",
    date: "15 de abril, 2023",
    slug: "mejores-herramientas-ia-freelancers-2025",
  },
  {
    title: "Análisis: Notion AI vs ClickUp para productividad",
    excerpt:
      "Analizamos en profundidad Notion AI y ClickUp para ayudarte a decidir cuál es la mejor herramienta para gestionar tus proyectos y equipos remotos.",
    imageUrl: "/productivity-apps.png",
    category: "Análisis",
    date: "10 de junio, 2023",
    slug: "analisis-notion-ai-vs-clickup-productividad",
  },
]

// Datos para testimonios
const testimonials = [
  {
    quote:
      "NeuroWorkAI me ayudó a encontrar las herramientas perfectas para mi flujo de trabajo. Ahorro más de 10 horas a la semana gracias a sus recomendaciones.",
    author: "María Rodríguez",
    role: "Diseñadora UX",
    company: "Freelance",
    avatarUrl: "/testimonial-avatar-1.png",
  },
  {
    quote:
      "Las reseñas son increíblemente detalladas y me ayudaron a tomar decisiones informadas para mi equipo. El NeuroScore es una métrica muy útil.",
    author: "Carlos Mendoza",
    role: "Project Manager",
    company: "TechSolutions",
    avatarUrl: "/testimonial-avatar-2.png",
  },
  {
    quote:
      "Los recursos gratuitos son oro puro. La guía de prompts me ha permitido sacar el máximo partido a las herramientas de IA que utilizo diariamente.",
    author: "Laura Sánchez",
    role: "Content Manager",
    company: "Digital Marketing Agency",
    avatarUrl: "/testimonial-avatar-3.png",
  },
]

// Datos para estadísticas
const stats = [
  {
    value: "50+",
    label: "Herramientas analizadas",
    description: "Reseñas detalladas y actualizadas",
  },
  {
    value: "15.000+",
    label: "Usuarios mensuales",
    description: "Profesionales que confían en nosotros",
  },
  {
    value: "200+",
    label: "Guías y recursos",
    description: "Contenido exclusivo y gratuito",
  },
  {
    value: "98%",
    label: "Satisfacción",
    description: "Valoraciones positivas de usuarios",
  },
]

// Datos para badges de confianza
const trustBadges = [
  {
    name: "Notion",
    logoUrl: "/notion-logo-gray.png",
    width: 120,
    height: 40,
  },
  {
    name: "Zapier",
    logoUrl: "/zapier-logo-gray.png",
    width: 120,
    height: 40,
  },
  {
    name: "ClickUp",
    logoUrl: "/clickup-logo-gray.png",
    width: 120,
    height: 40,
  },
  {
    name: "Jasper",
    logoUrl: "/jasper-logo-gray.png",
    width: 120,
    height: 40,
  },
  {
    name: "Grammarly",
    logoUrl: "/grammarly-logo-gray.png",
    width: 120,
    height: 40,
  },
]

export default function Home() {
  const headersList = headers()
  const acceptLanguage = headersList.get("accept-language") || ""

  // Check if the user's preferred language is supported
  const userPreferredLocale = acceptLanguage
    .split(",")
    .map((lang) => lang.split(";")[0].trim())
    .find((lang) => {
      const langPrefix = lang.substring(0, 2)
      return locales.includes(langPrefix as any)
    })

  // Use the user's preferred locale if supported, otherwise use the default
  const locale = userPreferredLocale ? userPreferredLocale.substring(0, 2) : defaultLocale

  // Redirect to the appropriate locale
  redirect(`/${locale}`)
}
