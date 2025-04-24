import Link from "next/link"
import { Button } from "@/components/ui/button"
import ToolCard from "@/components/tool-card"
import BlogCard from "@/components/blog-card"
import NewsletterForm from "@/components/newsletter-form"
import { ArrowRight } from "lucide-react"
import SafeImage from "@/components/safe-image"
import HeroSection from "@/components/hero-section"
import Testimonials from "@/components/testimonials"
import Stats from "@/components/stats"
import TrustBadges from "@/components/trust-badges"
import EnhancedCTA from "@/components/enhanced-cta"

// Datos de ejemplo para las herramientas destacadas
const featuredTools = [
  {
    name: "Notion AI",
    description: "Asistente de escritura y organización con IA integrada en Notion.",
    imageUrl: "/notion-ai-blue.png",
    category: "Escritura IA",
    url: "/herramientas/notion-ai",
    featured: true,
  },
  {
    name: "Zapier",
    description: "Automatiza tareas entre aplicaciones sin necesidad de código.",
    imageUrl: "/zapier-blue-background.png",
    category: "Automatización",
    url: "/herramientas/zapier",
    featured: true,
  },
  {
    name: "ClickUp",
    description: "Plataforma todo en uno para gestión de proyectos con funciones de IA.",
    imageUrl: "/clickup-blue-background.png",
    category: "Gestión de tareas",
    url: "/herramientas/clickup",
    featured: true,
  },
]

// Datos de ejemplo para los artículos del blog
const blogPosts = [
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
    title: "Comparativa: Notion AI vs ClickUp para productividad",
    excerpt:
      "Comparamos en profundidad Notion AI y ClickUp para ayudarte a decidir cuál es la mejor herramienta para gestionar tus proyectos y equipos remotos.",
    imageUrl: "/productivity-apps.png",
    category: "Comparativas",
    date: "10 de junio, 2023",
    slug: "comparativa-notion-ai-vs-clickup-productividad",
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
      "Las comparativas son increíblemente detalladas y me ayudaron a tomar decisiones informadas para mi equipo. El NeuroScore es una métrica muy útil.",
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
  const ebookImage = "/ai-productivity-ebook.png"

  return (
    <>
      {/* Nuevo Hero Section */}
      <HeroSection />

      {/* Trust Badges Section */}
      <TrustBadges title="Herramientas de IA líderes confían en nuestros análisis" badges={trustBadges} />

      {/* Featured Tools Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
              Herramientas Destacadas
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Descubre las herramientas de IA más populares que están transformando el trabajo remoto.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredTools.map((tool) => (
              <ToolCard
                key={tool.name}
                name={tool.name}
                description={tool.description}
                imageUrl={tool.imageUrl}
                category={tool.category}
                url={tool.url}
                featured={tool.featured}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link href="/herramientas" className="inline-flex items-center gap-2">
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
          <div className="mx-auto max-w-6xl rounded-xl p-6 sm:p-10">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12">
              <div className="flex flex-col justify-center">
                <h2 className="font-heading text-2xl font-bold text-secondary sm:text-3xl">
                  Kit Completo de IA para Trabajo Remoto
                </h2>
                <p className="mt-4 text-lg text-gray-600">Descarga gratis nuestro kit completo con:</p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center">
                    <svg className="mr-2 h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Guía de 50+ herramientas de IA categorizadas</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="mr-2 h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>100+ prompts para maximizar la productividad</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="mr-2 h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Plantillas de automatización listas para usar</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-secondary">Suscríbete para descargar:</h3>
                  <NewsletterForm />
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-64 w-full max-w-md overflow-hidden rounded-lg shadow-lg sm:h-80">
                  <SafeImage
                    src={ebookImage}
                    fallbackSrc="/ai-productivity-kit-ebook.png"
                    alt="Kit de IA para Trabajo Remoto"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
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
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
              Artículos Destacados
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Descubre nuestros mejores artículos sobre productividad con IA para trabajo remoto.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <BlogCard
                key={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                imageUrl={post.imageUrl}
                category={post.category}
                date={post.date}
                slug={post.slug}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link href="/blog" className="inline-flex items-center gap-2">
                Ver todos los artículos
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <EnhancedCTA
        title="Potencia tu productividad con IA"
        subtitle="Descubre las mejores herramientas de IA para optimizar tu trabajo remoto y aumentar tu eficiencia."
        primaryButtonText="Explora herramientas IA"
        primaryButtonUrl="/herramientas"
        secondaryButtonText="Descargar recursos gratuitos"
        secondaryButtonUrl="/guias-recursos"
        bgColor="primary"
      />
    </>
  )
}
