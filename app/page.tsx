"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink } from "lucide-react"
import HeroSection from "@/components/hero-section"
import Testimonials from "@/components/testimonials"
import Stats from "@/components/stats"
import TrustBadges from "@/components/trust-badges"
import EnhancedCTA from "@/components/enhanced-cta"
import KitPromoBlock from "@/components/kit-promo-block"
import HomeSchema from "@/components/seo/home-schema"
import SafeImage from "@/components/safe-image"
import { getFeaturedTools } from "@/lib/static-data"

// Obtener herramientas destacadas
const featuredTools = getFeaturedTools()

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

// Empty array for trust badges - will be populated as partnerships are established
const trustBadges = []

export default function Home() {
  return (
    <>
      {/* Schema.org structured data */}
      <HomeSchema />

      {/* Nuevo Hero Section */}
      <HeroSection />

      {/* Trust Badges Section - Only show if there are badges */}
      {trustBadges.length > 0 && (
        <TrustBadges title="Herramientas de IA líderes confían en nuestros análisis" badges={trustBadges} />
      )}

      {/* Featured Tools Section - Modified to handle empty state */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-10">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
              Herramientas Destacadas
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {featuredTools.length > 0
                ? "Descubre las herramientas de IA más populares que están transformando el trabajo remoto."
                : "Próximamente añadiremos herramientas de IA seleccionadas que transformarán tu trabajo remoto."}
            </p>
          </div>

          {featuredTools.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredTools.map((tool) => (
                <div
                  key={tool.id || tool.slug}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 flex flex-col h-full"
                >
                  <div className="flex flex-col items-center mb-4">
                    <div className="relative w-16 h-16 mb-3">
                      <SafeImage
                        src={tool.imageUrl}
                        alt={`Logo de ${tool.name}`}
                        width={64}
                        height={64}
                        className="object-contain"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="text-lg font-bold text-secondary text-center">{tool.name}</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-6 flex-grow line-clamp-3">{tool.description}</p>
                  <div className="mt-auto">
                    <div className="flex justify-center mb-4">
                      <span className="text-sm bg-violet-100 text-violet-700 rounded-full px-3 py-1">
                        {tool.category}
                      </span>
                    </div>
                    <div className="flex justify-between gap-3">
                      <Button asChild variant="outline" size="sm" className="flex-1">
                        <Link href={`/herramientas/${tool.slug}`}>Ver análisis</Link>
                      </Button>
                      <Button asChild className="bg-violet-600 text-white hover:bg-violet-700 flex-1" size="sm">
                        <Link
                          href={tool.affiliateUrl}
                          target="_blank"
                          rel="noopener sponsored"
                          className="flex items-center justify-center gap-1"
                        >
                          Probar gratis
                          <ExternalLink className="h-3.5 w-3.5" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-sm p-10 text-center">
              <div className="mb-6">
                <div className="mx-auto w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-violet-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Próximamente nuevas herramientas</h3>
              <p className="text-gray-500 mb-6">
                Estamos seleccionando cuidadosamente las mejores herramientas de IA para trabajo remoto.
                <br />
                Vuelve pronto para descubrir nuestras recomendaciones.
              </p>
              <Button asChild className="bg-violet-600 hover:bg-violet-700">
                <Link href="/contacto">Sugerir una herramienta</Link>
              </Button>
            </div>
          )}

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
      <section className="py-16 bg-gradient-to-b from-white to-violet-50">
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

          <div className="bg-white rounded-xl shadow-sm p-10 text-center">
            <div className="mb-6">
              <div className="mx-auto w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-violet-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">
              Próximamente nuevos recursos de productividad con IA
            </h3>
            <p className="text-gray-500 mb-6">
              Estamos preparando guías, prompts y plantillas para ayudarte a optimizar tu trabajo.
              <br />
              Vuelve pronto para descubrir contenido exclusivo sobre productividad con IA.
            </p>
            <Button asChild variant="outline" className="mr-4">
              <Link href="/contacto">Sugerir un recurso</Link>
            </Button>
            <Button asChild className="bg-violet-600 hover:bg-violet-700">
              <Link href="/recursos">Ver todos los recursos</Link>
            </Button>
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
