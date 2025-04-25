"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import HeroSection from "@/components/hero-section"
import Testimonials from "@/components/testimonials"
import Stats from "@/components/stats"
import TrustBadges from "@/components/trust-badges"
import EnhancedCTA from "@/components/enhanced-cta"
import KitPromoBlock from "@/components/kit-promo-block"
import { CalendarIcon } from "lucide-react"

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
  return (
    <>
      {/* Nuevo Hero Section */}
      <HeroSection />

      {/* Trust Badges Section */}
      <TrustBadges title="Herramientas de IA líderes confían en nuestros análisis" badges={trustBadges} />

      {/* Featured Tools Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-10">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
              Herramientas Destacadas
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Descubre las herramientas de IA más populares que están transformando el trabajo remoto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredTools.map((tool) => (
              <div
                key={tool.name}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 flex flex-col h-full"
              >
                <div className="flex flex-col items-center mb-4">
                  <img
                    src={tool.imageUrl || "/placeholder.svg"}
                    alt={`Logo de ${tool.name}`}
                    className="w-12 h-auto mb-3"
                    loading="lazy"
                  />
                  <h3 className="text-lg font-bold text-secondary text-center">{tool.name}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-6 flex-grow line-clamp-2">{tool.description}</p>
                <div className="mt-auto">
                  <div className="flex justify-center mb-4">
                    <span className="text-sm bg-violet-100 text-violet-700 rounded-full px-3 py-1">
                      {tool.category}
                    </span>
                  </div>
                  <div className="flex justify-between gap-3">
                    <Button asChild variant="outline" size="sm" className="flex-1">
                      <Link href={tool.url}>Ver detalles</Link>
                    </Button>
                    <Button asChild className="bg-violet-600 text-white hover:bg-violet-700 flex-1" size="sm">
                      <Link href={`${tool.url}#probar`}>Probar gratis</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild className="bg-violet-600 hover:bg-violet-700 px-6 py-2.5">
              <Link href="/herramientas-ia" className="inline-flex items-center gap-2">
                Ver todas las herramientas
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <Stats
        title="NeuroWorkAI en números"
        subtitle="Datos que respaldan nuestra experiencia y compromiso con la calidad"
        stats={stats}
      />

      {/* Lead Magnet Section */}
      <section className="bg-primary/10 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <KitPromoBlock />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials
        title="Lo que dicen nuestros usuarios"
        subtitle="Profesionales que han mejorado su productividad con nuestras recomendaciones"
        testimonials={testimonials}
      />

      {/* Blog Preview Section */}
      <section className="py-16 bg-gray-50" aria-labelledby="featured-articles-heading">
        <div className="container mx-auto px-4 md:px-12 lg:px-20">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2
              id="featured-articles-heading"
              className="font-heading text-3xl font-bold tracking-tight text-secondary sm:text-4xl"
            >
              Recursos Destacados
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Descubre nuestros mejores recursos sobre productividad con IA para trabajo remoto.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource) => (
              <article
                key={resource.slug}
                className="bg-white rounded-xl shadow-md hover:shadow-lg hover:scale-[1.01] transition duration-300 border border-gray-100 overflow-hidden flex flex-col h-full"
              >
                <div className="relative">
                  <img
                    src={
                      resource.imageUrl ||
                      `/placeholder.svg?height=160&width=320&query=${encodeURIComponent(resource.title)}`
                    }
                    alt={`Imagen para el recurso: ${resource.title}`}
                    className="h-[160px] w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <span className="absolute top-4 right-4 bg-violet-100 text-violet-700 text-xs px-3 py-1 rounded-full font-medium">
                    {resource.category}
                  </span>
                </div>

                <div className="p-5 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-secondary line-clamp-2 mb-2 hover:text-primary">
                    <Link href={`/recursos/${resource.slug}`}>{resource.title}</Link>
                  </h3>
                  <p className="text-gray-600 line-clamp-3 mb-4 text-sm flex-grow">{resource.excerpt}</p>

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                    <div className="flex items-center text-sm text-gray-500">
                      <CalendarIcon className="h-4 w-4 mr-1" />
                      <span>{resource.date}</span>
                    </div>
                    <Link
                      href={`/recursos/${resource.slug}`}
                      className="text-violet-600 font-medium hover:underline flex items-center"
                    >
                      Leer más
                      <ArrowRight className="h-3.5 w-3.5 ml-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              asChild
              className="bg-violet-600 hover:bg-violet-700 px-6 py-2.5 shadow-md hover:shadow-lg transition"
            >
              <Link href="/recursos" className="inline-flex items-center gap-2">
                Ver todos los recursos
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <EnhancedCTA
        title="Potencia tu productividad con IA"
        subtitle="Descarga nuestro Kit de Productividad con IA para Trabajo Remoto (2025) y comienza a trabajar mejor con IA desde hoy."
        primaryButtonText="Descargar Kit gratuito"
        primaryButtonUrl="/guias-recursos"
        withEmailForm={true}
        emailPlaceholder="Tu correo electrónico"
        formButtonText="Descargar Kit gratuito"
        onSubmit={(email) => {
          console.log("Email submitted:", email)
          // Here you would typically handle the form submission
          // For example, sending the email to your API
        }}
        microcopy="Sin spam · Descarga inmediata tras confirmar"
        bgColor="primary"
      />
    </>
  )
}
