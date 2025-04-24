import Link from "next/link"
import { Button } from "@/components/ui/button"
import ToolCard from "@/components/tool-card"
import BlogCard from "@/components/blog-card"
import NewsletterForm from "@/components/newsletter-form"
import { ArrowRight } from "lucide-react"
import SafeImage from "@/components/safe-image"

// Datos de ejemplo para las herramientas destacadas
const featuredTools = [
  {
    name: "Notion AI",
    description: "Asistente de escritura y organización con IA integrada en Notion.",
    imageUrl: "/notion-ai-blue.png",
    category: "Escritura IA",
    url: "/resenas/notion-ai",
    featured: true,
  },
  {
    name: "Zapier",
    description: "Automatiza tareas entre aplicaciones sin necesidad de código.",
    imageUrl: "/zapier-blue-background.png",
    category: "Automatización",
    url: "/resenas/zapier",
    featured: true,
  },
  {
    name: "ClickUp",
    description: "Plataforma todo en uno para gestión de proyectos con funciones de IA.",
    imageUrl: "/clickup-blue-background.png",
    category: "Gestión de tareas",
    url: "/resenas/clickup",
    featured: true,
  },
  {
    name: "Jasper",
    description: "Generador de contenido con IA para marketing y comunicación.",
    imageUrl: "/ai-logo-blue.png",
    category: "Escritura IA",
    url: "/resenas/jasper",
    featured: true,
  },
  {
    name: "Fireflies",
    description: "Transcribe y analiza reuniones automáticamente con IA.",
    imageUrl: "/fireflies-ai-logo-blue.png",
    category: "Reuniones",
    url: "/resenas/fireflies",
    featured: true,
  },
  {
    name: "Grammarly",
    description: "Corrector gramatical y asistente de escritura con IA.",
    imageUrl: "/grammarly-blue.png",
    category: "Escritura IA",
    url: "/resenas/grammarly",
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

export default function Home() {
  const backgroundImage = "/interconnected-flow.png"
  const logoImage = "/logo.png"
  const ebookImage = "/ai-productivity-ebook.png"

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-sky-light to-sky py-20 md:py-32">
        <div className="absolute inset-0 z-0 opacity-30">
          <SafeImage
            src={backgroundImage}
            fallbackSrc="/interconnected-nodes.png"
            alt="Background Pattern"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <SafeImage
              src={logoImage}
              fallbackSrc="/abstract-brain-network.png"
              alt="NeuroWorkAI Logo"
              width={300}
              height={100}
              className="mx-auto mb-8 h-auto w-64"
              priority
            />
            <h1 className="font-heading text-4xl font-bold tracking-tight text-secondary sm:text-5xl md:text-6xl">
              Haz que la IA trabaje para ti.
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              La plataforma #1 para descubrir herramientas de productividad con IA
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-primary px-8 hover:bg-primary/90">
                <Link href="/comparativas">Explora las mejores herramientas IA</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/recursos">Descarga recursos gratuitos</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

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
              <Link href="/comparativas" className="inline-flex items-center gap-2">
                Ver todas las herramientas
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

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

      {/* CTA Section */}
      <section className="bg-primary py-16 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Potencia tu productividad con IA
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Descubre las mejores herramientas de IA para optimizar tu trabajo remoto y aumentar tu eficiencia.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link href="/comparativas">Explora herramientas IA</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
