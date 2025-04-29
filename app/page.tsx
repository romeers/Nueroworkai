"use client"
import { ArrowRight } from "lucide-react"
import HeroSection from "@/components/hero-section"
import Testimonials from "@/components/testimonials"
import Stats from "@/components/stats"
import TrustBadges from "@/components/trust-badges"
import EnhancedCTA from "@/components/enhanced-cta"
import KitPromoBlock from "@/components/kit-promo-block"
import HomeSchema from "@/components/seo/home-schema"
import { getFeaturedTools } from "@/lib/static-data"
import FeaturedToolsSection from "@/components/featured-tools-section"
import UnifiedCTA from "@/components/unified-cta"

// Obtener herramientas destacadas
const featuredTools = getFeaturedTools()

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

      {/* Featured Tools Section - Using our new unified component */}
      <FeaturedToolsSection
        title="Herramientas Destacadas"
        subtitle="Descubre las herramientas de IA más populares que están transformando el trabajo remoto."
        tools={featuredTools}
        viewAllLink="/herramientas-ia"
        viewAllText="Ver todas las herramientas"
        emptyStateTitle="Próximamente nuevas herramientas"
        emptyStateDescription="Estamos seleccionando cuidadosamente las mejores herramientas de IA para trabajo remoto."
        emptyStateAction={{
          text: "Sugerir una herramienta",
          href: "/contacto",
        }}
      />

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
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <UnifiedCTA href="/contacto" variant="outline">
                Sugerir un recurso
              </UnifiedCTA>
              <UnifiedCTA href="/recursos" variant="primary">
                Ver todos los recursos
              </UnifiedCTA>
            </div>
          </div>

          <div className="mt-12 text-center">
            <UnifiedCTA
              href="/recursos"
              variant="primary"
              size="lg"
              className="shadow-md hover:shadow-lg transition"
              icon={<ArrowRight className="h-4 w-4" />}
            >
              Ver todos los recursos
            </UnifiedCTA>
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
