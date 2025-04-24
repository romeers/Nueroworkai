import Link from "next/link"
import { Button } from "@/components/ui/button"
import ToolCard from "@/components/tool-card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

// Datos de ejemplo para las herramientas
const tools = [
  {
    name: "Notion AI",
    description: "Asistente de escritura y organización con IA integrada en Notion.",
    imageUrl: "/notion-ai-blue.png",
    category: "Escritura IA",
    url: "#",
    featured: true,
  },
  {
    name: "Zapier",
    description: "Automatiza tareas entre aplicaciones sin necesidad de código.",
    imageUrl: "/zapier-blue-background.png",
    category: "Automatización",
    url: "#",
    featured: true,
  },
  {
    name: "ClickUp",
    description: "Plataforma todo en uno para gestión de proyectos con funciones de IA.",
    imageUrl: "/clickup-blue-background.png",
    category: "Gestión de tareas",
    url: "#",
    featured: true,
  },
  {
    name: "Jasper",
    description: "Generador de contenido con IA para marketing y comunicación.",
    imageUrl: "/ai-logo-blue.png",
    category: "Escritura IA",
    url: "#",
    featured: false,
  },
  {
    name: "Fireflies",
    description: "Transcribe y analiza reuniones automáticamente con IA.",
    imageUrl: "/fireflies-ai-logo-blue.png",
    category: "Reuniones",
    url: "#",
    featured: false,
  },
  {
    name: "Grammarly",
    description: "Corrector gramatical y asistente de escritura con IA.",
    imageUrl: "/placeholder.svg?height=160&width=320&query=Grammarly logo on blue background",
    category: "Escritura IA",
    url: "#",
    featured: false,
  },
  {
    name: "Make",
    description: "Plataforma de automatización visual para conectar apps y automatizar flujos de trabajo.",
    imageUrl: "/placeholder.svg?height=160&width=320&query=Make logo on blue background",
    category: "Automatización",
    url: "#",
    featured: false,
  },
  {
    name: "Otter.ai",
    description: "Asistente de notas con IA para transcribir y resumir reuniones.",
    imageUrl: "/placeholder.svg?height=160&width=320&query=Otter.ai logo on blue background",
    category: "Reuniones",
    url: "#",
    featured: false,
  },
]

// Categorías disponibles
const categories = ["Todas", "Escritura IA", "Automatización", "Gestión de tareas", "Reuniones", "Comunicación"]

export default function ResenasPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-light to-sky py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-3xl font-bold tracking-tight text-secondary sm:text-4xl md:text-5xl">
              Reseñas de Herramientas IA
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Análisis detallados de las mejores herramientas de productividad con IA para profesionales remotos.
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
              <Input type="text" placeholder="Buscar herramientas..." className="w-full pl-10" />
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

      {/* Tools Grid Section */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool) => (
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              ¿Quieres comparar herramientas?
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Visita nuestra sección de comparativas para ver análisis lado a lado de las mejores herramientas por
              categoría.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link href="/comparativas">Ver comparativas</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
