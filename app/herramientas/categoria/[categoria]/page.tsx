import { generateMetadata as generateCategoryMetadata } from "@/lib/metadata"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import ToolCard from "@/components/tool-card"
import CategoryLeadMagnet from "@/components/category-lead-magnet"

interface Params {
  categoria: string
}

export async function generateMetadata({ params }: { params: Params }) {
  const categoryName = getCategoryName(params.categoria)
  return generateCategoryMetadata({
    title: `Herramientas de ${categoryName} | NeuroWorkAI`,
    description: `Descubre y compara las mejores herramientas de ${categoryName.toLowerCase()} para potenciar tu productividad.`,
  })
}

// Función para obtener datos de herramientas por categoría
function getToolsByCategory(category: string) {
  // Datos de ejemplo - en una implementación real, esto vendría de una API o base de datos
  const allTools = {
    "escritura-ia": [
      {
        name: "Notion AI",
        description: "Asistente de escritura y organización con IA integrada en Notion.",
        imageUrl: "/notion-ai-blue.png",
        category: "Escritura IA",
        slug: "notion-ai",
        score: 9.2,
      },
      {
        name: "Jasper",
        description: "Generador de contenido con IA para marketing y comunicación.",
        imageUrl: "/ai-logo-blue.png",
        category: "Escritura IA",
        slug: "jasper",
        score: 8.7,
      },
      {
        name: "Grammarly",
        description: "Corrector gramatical y asistente de escritura con IA.",
        imageUrl: "/grammarly-blue.png",
        category: "Escritura IA",
        slug: "grammarly",
        score: 8.9,
      },
    ],
    automatizacion: [
      {
        name: "Zapier",
        description: "Automatiza tareas entre aplicaciones sin necesidad de código.",
        imageUrl: "/zapier-blue-background.png",
        category: "Automatización",
        slug: "zapier",
        score: 9.0,
      },
      {
        name: "Make",
        description: "Plataforma de automatización visual para conectar apps y automatizar flujos de trabajo.",
        imageUrl: "/abstract-geometric-logo.png",
        category: "Automatización",
        slug: "make",
        score: 8.8,
      },
    ],
    "gestion-tareas": [
      {
        name: "ClickUp",
        description: "Plataforma todo en uno para gestión de proyectos con funciones de IA.",
        imageUrl: "/clickup-blue-background.png",
        category: "Gestión de tareas",
        slug: "clickup",
        score: 8.8,
      },
      {
        name: "Asana",
        description: "Plataforma de gestión de proyectos y tareas para equipos.",
        imageUrl: "/Asana-logo-abstract.png",
        category: "Gestión de tareas",
        slug: "asana",
        score: 8.5,
      },
    ],
    reuniones: [
      {
        name: "Fireflies",
        description: "Transcribe y analiza reuniones automáticamente con IA.",
        imageUrl: "/fireflies-ai-logo-blue.png",
        category: "Reuniones",
        slug: "fireflies",
        score: 8.9,
      },
      {
        name: "Otter.ai",
        description: "Asistente de notas con IA para transcribir y resumir reuniones.",
        imageUrl: "/otter-ai-logo-inspired-design.png",
        category: "Reuniones",
        slug: "otter-ai",
        score: 8.7,
      },
    ],
  }

  return allTools[category as keyof typeof allTools] || []
}

// Función para obtener el nombre legible de la categoría
function getCategoryName(slug: string) {
  const categoryMap: Record<string, string> = {
    "escritura-ia": "Escritura IA",
    automatizacion: "Automatización",
    "gestion-tareas": "Gestión de Tareas",
    reuniones: "Reuniones",
    comunicacion: "Comunicación",
    otras: "Otras Herramientas",
  }

  return categoryMap[slug] || "Categoría no encontrada"
}

// Función para obtener el lead magnet específico de la categoría
function getCategoryLeadMagnet(category: string) {
  const leadMagnets: Record<string, any> = {
    "escritura-ia": {
      category: "Escritura IA",
      title: "50 Prompts Avanzados para Notion AI, Jasper y ChatGPT",
      description:
        "Descarga esta colección de prompts optimizados para generar contenido de alta calidad con las principales herramientas de escritura IA.",
      bulletPoints: [
        "Prompts para crear contenido SEO optimizado",
        "Plantillas para emails y comunicación profesional",
        "Fórmulas para resumir y estructurar documentos largos",
        "Técnicas avanzadas de prompt engineering",
      ],
      imageUrl: "/ai-writing-prompts-collection.png",
      formId: "writing-prompts",
    },
    automatizacion: {
      category: "Automatización",
      title: "10 Flujos de Trabajo en Zapier y Make para Profesionales Remotos",
      description:
        "Automatiza tareas repetitivas y ahorra hasta 10 horas semanales con estas plantillas listas para usar.",
      bulletPoints: [
        "Automatización de seguimiento de clientes y leads",
        "Flujos para sincronizar datos entre aplicaciones",
        "Plantillas para gestión automática de redes sociales",
        "Automatizaciones para organizar documentos y archivos",
      ],
      imageUrl: "/automation-workflows-templates.png",
      formId: "automation-workflows",
    },
    "gestion-tareas": {
      category: "Gestión de Tareas",
      title: "Plantillas de ClickUp y Asana para Equipos Remotos",
      description:
        "Optimiza la gestión de proyectos con estas plantillas diseñadas específicamente para equipos distribuidos.",
      bulletPoints: [
        "Plantilla de seguimiento de proyectos ágiles",
        "Dashboard para gestión de recursos y tiempo",
        "Sistema de OKRs para equipos remotos",
        "Flujos de trabajo para onboarding de nuevos miembros",
      ],
      imageUrl: "/task-management-templates.png",
      formId: "task-templates",
    },
    reuniones: {
      category: "Reuniones",
      title: "Guía Definitiva para Optimizar Reuniones Remotas con IA",
      description:
        "Aprende a utilizar herramientas de IA para hacer tus reuniones más productivas y extraer el máximo valor de ellas.",
      bulletPoints: [
        "Plantillas para agendas de reuniones efectivas",
        "Técnicas para extraer insights de transcripciones",
        "Flujos de trabajo para seguimiento post-reunión",
        "Mejores prácticas para reuniones asíncronas",
      ],
      imageUrl: "/ai-meetings-optimization-guide.png",
      formId: "meetings-guide",
    },
  }

  return leadMagnets[category] || null
}

export default function CategoryPage({ params }: { params: { categoria: string } }) {
  const tools = getToolsByCategory(params.categoria)
  const categoryName = getCategoryName(params.categoria)
  const leadMagnet = getCategoryLeadMagnet(params.categoria)

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-light to-sky py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-3xl font-bold tracking-tight text-secondary sm:text-4xl md:text-5xl">
              Herramientas de {categoryName}
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Descubre y compara las mejores herramientas de {categoryName.toLowerCase()} para potenciar tu
              productividad.
            </p>
          </div>
        </div>
      </section>

      {/* Filtros y búsqueda */}
      <section className="border-b border-t bg-gray-50 py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative w-full md:max-w-xs">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <Input type="text" placeholder="Buscar en esta categoría..." className="w-full pl-10" />
            </div>

            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm" className="bg-white">
                Más valoradas
              </Button>
              <Button variant="outline" size="sm" className="bg-white">
                Más populares
              </Button>
              <Button variant="outline" size="sm" className="bg-white">
                Precio: Bajo a alto
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Magnet específico de la categoría */}
      {leadMagnet && (
        <section className="py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <CategoryLeadMagnet
              category={leadMagnet.category}
              title={leadMagnet.title}
              description={leadMagnet.description}
              bulletPoints={leadMagnet.bulletPoints}
              imageUrl={leadMagnet.imageUrl}
              formId={leadMagnet.formId}
            />
          </div>
        </section>
      )}

      {/* Lista de herramientas */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {tools.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {tools.map((tool) => (
                <ToolCard
                  key={tool.slug}
                  name={tool.name}
                  description={tool.description}
                  imageUrl={tool.imageUrl}
                  category={tool.category}
                  url={`/herramientas/${tool.slug}`}
                  featured={tool.score > 9}
                />
              ))}
            </div>
          ) : (
            <div className="py-12 text-center">
              <p className="text-lg text-gray-600">No se encontraron herramientas en esta categoría.</p>
              <Button asChild variant="link" className="mt-2 text-primary">
                <Link href="/herramientas">Ver todas las categorías</Link>
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Comparativas relacionadas */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-8">
            <h2 className="text-2xl font-bold text-secondary">Comparativas de {categoryName}</h2>
            <p className="mt-4 text-gray-600">
              Análisis detallados entre las principales herramientas de esta categoría.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {params.categoria === "escritura-ia" && (
              <>
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
                  href="/herramientas/comparar/jasper-vs-grammarly"
                  className="block p-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="text-xl font-semibold text-secondary">Jasper vs Grammarly</h3>
                  <p className="mt-2 text-gray-600">Comparativa entre herramientas de escritura y corrección.</p>
                </Link>
              </>
            )}

            {params.categoria === "automatizacion" && (
              <Link
                href="/herramientas/comparar/zapier-vs-make"
                className="block p-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold text-secondary">Zapier vs Make</h3>
                <p className="mt-2 text-gray-600">Comparativa entre las principales plataformas de automatización.</p>
              </Link>
            )}

            {params.categoria === "gestion-tareas" && (
              <Link
                href="/herramientas/comparar/clickup-vs-asana"
                className="block p-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold text-secondary">ClickUp vs Asana</h3>
                <p className="mt-2 text-gray-600">Descubre cuál es la mejor plataforma para gestionar tus proyectos.</p>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              ¿Necesitas ayuda para elegir?
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Descarga nuestro Kit de Productividad con IA para Trabajo Remoto (2025) y encuentra la herramienta
              perfecta para tus necesidades.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link href="/guias-recursos">Descargar Kit gratuito</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
