import { Button } from "@/components/ui/button"
import BlogCard from "@/components/blog-card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

// Datos de ejemplo para los artículos del blog
const blogPosts = [
  {
    title: "Top 10 herramientas de productividad con IA para equipos remotos",
    excerpt:
      "Descubre las mejores herramientas de IA que están transformando la forma en que trabajan los equipos remotos, aumentando la eficiencia y reduciendo las tareas repetitivas.",
    imageUrl: "/placeholder.svg?height=240&width=480&query=remote team using AI tools, digital illustration",
    category: "Productividad",
    date: "15 de abril, 2023",
    slug: "top-10-herramientas-productividad-ia-equipos-remotos",
  },
  {
    title: "Cómo automatizar tareas con Zapier y Make",
    excerpt:
      "Aprende a crear flujos de trabajo automatizados entre tus aplicaciones favoritas utilizando Zapier y Make, ahorrando tiempo y reduciendo errores.",
    imageUrl: "/placeholder.svg?height=240&width=480&query=automation workflow diagram with connected apps",
    category: "Automatización",
    date: "3 de mayo, 2023",
    slug: "como-automatizar-tareas-zapier-make",
  },
  {
    title: "Mejores extensiones de Chrome para productividad con IA",
    excerpt:
      "Potencia tu navegador con estas extensiones de Chrome impulsadas por IA que te ayudarán a ser más productivo durante tu jornada laboral remota.",
    imageUrl: "/placeholder.svg?height=240&width=480&query=chrome browser with productivity extensions",
    category: "Herramientas",
    date: "22 de mayo, 2023",
    slug: "mejores-extensiones-chrome-productividad-ia",
  },
  {
    title: "Notion AI vs. ClickUp: ¿Cuál es mejor para gestionar proyectos remotos?",
    excerpt:
      "Comparamos en profundidad Notion AI y ClickUp para ayudarte a decidir cuál es la mejor herramienta para gestionar tus proyectos y equipos remotos.",
    imageUrl: "/placeholder.svg?height=240&width=480&query=notion and clickup logos side by side",
    category: "Comparativas",
    date: "10 de junio, 2023",
    slug: "notion-ai-vs-clickup-mejor-gestion-proyectos-remotos",
  },
  {
    title: "Guía completa de prompts para Notion AI",
    excerpt:
      "Maximiza el potencial de Notion AI con esta guía completa de prompts que te ayudarán a generar mejores textos, resúmenes y más.",
    imageUrl: "/placeholder.svg?height=240&width=480&query=person typing prompts in Notion AI interface",
    category: "Tutoriales",
    date: "28 de junio, 2023",
    slug: "guia-completa-prompts-notion-ai",
  },
  {
    title: "Cómo usar Fireflies AI para optimizar tus reuniones remotas",
    excerpt:
      "Descubre cómo Fireflies AI puede transcribir, resumir y extraer información clave de tus reuniones remotas, mejorando la productividad de tu equipo.",
    imageUrl: "/placeholder.svg?height=240&width=480&query=virtual meeting with AI transcription",
    category: "Reuniones",
    date: "15 de julio, 2023",
    slug: "como-usar-fireflies-ai-optimizar-reuniones-remotas",
  },
]

// Categorías disponibles
const categories = [
  "Todas",
  "Productividad",
  "Automatización",
  "Herramientas",
  "Comparativas",
  "Tutoriales",
  "Reuniones",
]

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-light to-sky py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-3xl font-bold tracking-tight text-secondary sm:text-4xl md:text-5xl">
              Blog
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Artículos, tutoriales y consejos sobre productividad con IA para profesionales remotos.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative w-full md:max-w-md">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <Input type="text" placeholder="Buscar artículos..." className="w-full pl-10" />
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "Todas" ? "default" : "outline"}
                  className={category === "Todas" ? "bg-primary hover:bg-primary/90" : ""}
                  size="sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid Section */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-primary py-16 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">Mantente actualizado</h2>
            <p className="mt-4 text-lg text-white/90">
              Suscríbete a nuestro newsletter para recibir los últimos artículos, tutoriales y recursos sobre
              productividad con IA.
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
