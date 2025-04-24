import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import CategoryCard from "@/components/category-card"
import FeaturedToolCard from "@/components/featured-tool-card"

// Categorías de herramientas
const categories = [
  {
    name: "Escritura IA",
    description: "Herramientas de IA para generar, editar y mejorar contenido escrito.",
    slug: "escritura-ia",
    icon: "✍️",
    toolCount: 6,
  },
  {
    name: "Automatización",
    description: "Plataformas para automatizar flujos de trabajo y conectar aplicaciones.",
    slug: "automatizacion",
    icon: "⚙️",
    toolCount: 4,
  },
  {
    name: "Gestión de tareas",
    description: "Herramientas para organizar proyectos y gestionar tareas con funciones de IA.",
    slug: "gestion-tareas",
    icon: "📋",
    toolCount: 5,
  },
  {
    name: "Reuniones",
    description: "Soluciones para transcribir, resumir y analizar reuniones automáticamente.",
    slug: "reuniones",
    icon: "🎯",
    toolCount: 3,
  },
  {
    name: "Comunicación",
    description: "Herramientas de IA para mejorar la comunicación en equipos remotos.",
    slug: "comunicacion",
    icon: "💬",
    toolCount: 3,
  },
  {
    name: "Otras herramientas",
    description: "Herramientas de IA adicionales para diversos casos de uso.",
    slug: "otras",
    icon: "🧰",
    toolCount: 4,
  },
]

// Herramientas destacadas
const featuredTools = [
  {
    name: "Notion AI",
    description: "Asistente de escritura y organización con IA integrada en Notion.",
    imageUrl: "/notion-ai-blue.png",
    category: "Escritura IA",
    slug: "notion-ai",
    score: 9.2,
  },
  {
    name: "Zapier",
    description: "Automatiza tareas entre aplicaciones sin necesidad de código.",
    imageUrl: "/zapier-blue-background.png",
    category: "Automatización",
    slug: "zapier",
    score: 9.0,
  },
  {
    name: "ClickUp",
    description: "Plataforma todo en uno para gestión de proyectos con funciones de IA.",
    imageUrl: "/clickup-blue-background.png",
    category: "Gestión de tareas",
    slug: "clickup",
    score: 8.8,
  },
]

export default function HerramientasPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-light to-sky py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-3xl font-bold tracking-tight text-secondary sm:text-4xl md:text-5xl">
              Herramientas de Productividad con IA
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Descubre, compara y elige las mejores herramientas de IA para potenciar tu trabajo remoto.
            </p>

            {/* Buscador de herramientas */}
            <div className="mt-8 flex items-center justify-center">
              <div className="relative w-full max-w-md">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <Input type="text" placeholder="Buscar herramientas de IA..." className="w-full pl-10 py-6 text-base" />
              </div>
              <Button className="ml-2 bg-primary hover:bg-primary/90 py-6 px-6">Buscar</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categorías de herramientas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-secondary text-center mb-12">Categorías de Herramientas</h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <CategoryCard
                key={category.slug}
                name={category.name}
                description={category.description}
                slug={category.slug}
                icon={category.icon}
                toolCount={category.toolCount}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Herramientas destacadas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-2xl font-bold text-secondary">Herramientas Mejor Valoradas</h2>
            <p className="mt-4 text-gray-600">
              Nuestras recomendaciones principales basadas en nuestro análisis exhaustivo.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {featuredTools.map((tool) => (
              <FeaturedToolCard
                key={tool.slug}
                name={tool.name}
                description={tool.description}
                imageUrl={tool.imageUrl}
                category={tool.category}
                slug={tool.slug}
                score={tool.score}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link href="/herramientas/todas">Ver todas las herramientas</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Comparativas populares */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-2xl font-bold text-secondary">Comparativas Populares</h2>
            <p className="mt-4 text-gray-600">Análisis detallados entre las herramientas más buscadas del mercado.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/herramientas/comparar/notion-ai-vs-jasper"
              className="block p-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold text-secondary">Notion AI vs Jasper</h3>
              <p className="mt-2 text-gray-600">
                ¿Cuál es la mejor herramienta de escritura con IA para tu caso de uso?
              </p>
            </Link>

            <Link
              href="/herramientas/comparar/zapier-vs-make"
              className="block p-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold text-secondary">Zapier vs Make</h3>
              <p className="mt-2 text-gray-600">Comparativa entre las principales plataformas de automatización.</p>
            </Link>

            <Link
              href="/herramientas/comparar/clickup-vs-asana"
              className="block p-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold text-secondary">ClickUp vs Asana</h3>
              <p className="mt-2 text-gray-600">Descubre cuál es la mejor plataforma para gestionar tus proyectos.</p>
            </Link>
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline">
              <Link href="/herramientas/comparar">Ver todas las comparativas</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Newsletter */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">Mantente actualizado</h2>
            <p className="mt-4 text-lg text-white/90">
              Recibe en tu email las últimas novedades sobre herramientas de IA y consejos para maximizar tu
              productividad.
            </p>
            <form className="mx-auto mt-6 flex max-w-md flex-col gap-2 sm:flex-row">
              <Input type="email" placeholder="Tu correo electrónico" className="w-full bg-white" required />
              <Button className="bg-secondary hover:bg-secondary/90">Suscribirse</Button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
