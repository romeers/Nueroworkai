import Link from "next/link"
import { Button } from "@/components/ui/button"
import ComparisonTable from "@/components/comparison-table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ToolComparisonSelector from "@/components/tool-comparison-selector"

// Datos de ejemplo para las comparativas
const writingTools = {
  category: "Escritura IA",
  tools: [
    {
      name: "Notion AI",
      logo: "/placeholder.svg?height=40&width=40&query=Notion AI logo",
      price: "Desde $10/mes",
      features: {
        "Generación de texto": true,
        "Corrección gramatical": true,
        "Resumen automático": true,
        Traducción: true,
        "Integración con workspace": true,
      },
      rating: 4.5,
      url: "#",
    },
    {
      name: "Jasper",
      logo: "/placeholder.svg?height=40&width=40&query=Jasper AI logo",
      price: "Desde $39/mes",
      features: {
        "Generación de texto": true,
        "Corrección gramatical": true,
        "Resumen automático": true,
        Traducción: false,
        "Integración con workspace": false,
      },
      rating: 4.2,
      url: "#",
    },
    {
      name: "Grammarly",
      logo: "/placeholder.svg?height=40&width=40&query=Grammarly logo",
      price: "Desde $12/mes",
      features: {
        "Generación de texto": false,
        "Corrección gramatical": true,
        "Resumen automático": false,
        Traducción: false,
        "Integración con workspace": false,
      },
      rating: 4.7,
      url: "#",
    },
  ],
  features: [
    "Generación de texto",
    "Corrección gramatical",
    "Resumen automático",
    "Traducción",
    "Integración con workspace",
  ],
}

const automationTools = {
  category: "Automatización",
  tools: [
    {
      name: "Zapier",
      logo: "/placeholder.svg?height=40&width=40&query=Zapier logo",
      price: "Desde $19.99/mes",
      features: {
        Integraciones: true,
        "Automatizaciones complejas": true,
        "Plantillas predefinidas": true,
        "Interfaz sin código": true,
        "API personalizada": true,
      },
      rating: 4.6,
      url: "#",
    },
    {
      name: "Make",
      logo: "/placeholder.svg?height=40&width=40&query=Make logo",
      price: "Desde $9/mes",
      features: {
        Integraciones: true,
        "Automatizaciones complejas": true,
        "Plantillas predefinidas": true,
        "Interfaz sin código": true,
        "API personalizada": true,
      },
      rating: 4.4,
      url: "#",
    },
    {
      name: "IFTTT",
      logo: "/placeholder.svg?height=40&width=40&query=IFTTT logo",
      price: "Desde $5/mes",
      features: {
        Integraciones: true,
        "Automatizaciones complejas": false,
        "Plantillas predefinidas": true,
        "Interfaz sin código": true,
        "API personalizada": false,
      },
      rating: 4.0,
      url: "#",
    },
  ],
  features: [
    "Integraciones",
    "Automatizaciones complejas",
    "Plantillas predefinidas",
    "Interfaz sin código",
    "API personalizada",
  ],
}

const projectTools = {
  category: "Gestión de tareas",
  tools: [
    {
      name: "ClickUp",
      logo: "/placeholder.svg?height=40&width=40&query=ClickUp logo",
      price: "Desde $5/mes",
      features: {
        "Gestión de tareas": true,
        "Funciones IA": true,
        "Colaboración en tiempo real": true,
        Automatizaciones: true,
        Personalización: true,
      },
      rating: 4.3,
      url: "#",
    },
    {
      name: "Asana",
      logo: "/placeholder.svg?height=40&width=40&query=Asana logo",
      price: "Desde $10.99/mes",
      features: {
        "Gestión de tareas": true,
        "Funciones IA": false,
        "Colaboración en tiempo real": true,
        Automatizaciones: true,
        Personalización: false,
      },
      rating: 4.1,
      url: "#",
    },
    {
      name: "Notion",
      logo: "/placeholder.svg?height=40&width=40&query=Notion logo",
      price: "Desde $8/mes",
      features: {
        "Gestión de tareas": true,
        "Funciones IA": true,
        "Colaboración en tiempo real": true,
        Automatizaciones: false,
        Personalización: true,
      },
      rating: 4.8,
      url: "#",
    },
  ],
  features: ["Gestión de tareas", "Funciones IA", "Colaboración en tiempo real", "Automatizaciones", "Personalización"],
}

const meetingTools = {
  category: "Reuniones",
  tools: [
    {
      name: "Fireflies",
      logo: "/placeholder.svg?height=40&width=40&query=Fireflies AI logo",
      price: "Desde $10/mes",
      features: {
        "Transcripción automática": true,
        "Resumen de reuniones": true,
        "Búsqueda en transcripciones": true,
        "Integración con calendarios": true,
        "Análisis de conversaciones": true,
      },
      rating: 4.5,
      url: "#",
    },
    {
      name: "Otter.ai",
      logo: "/placeholder.svg?height=40&width=40&query=Otter.ai logo",
      price: "Desde $8.33/mes",
      features: {
        "Transcripción automática": true,
        "Resumen de reuniones": true,
        "Búsqueda en transcripciones": true,
        "Integración con calendarios": true,
        "Análisis de conversaciones": false,
      },
      rating: 4.4,
      url: "#",
    },
    {
      name: "Fathom",
      logo: "/placeholder.svg?height=40&width=40&query=Fathom logo",
      price: "Desde $12/mes",
      features: {
        "Transcripción automática": true,
        "Resumen de reuniones": true,
        "Búsqueda en transcripciones": true,
        "Integración con calendarios": false,
        "Análisis de conversaciones": true,
      },
      rating: 4.2,
      url: "#",
    },
  ],
  features: [
    "Transcripción automática",
    "Resumen de reuniones",
    "Búsqueda en transcripciones",
    "Integración con calendarios",
    "Análisis de conversaciones",
  ],
}

export default function ComparativasPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-light to-sky py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-3xl font-bold tracking-tight text-secondary sm:text-4xl md:text-5xl">
              Comparativas de Herramientas IA
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Compara lado a lado las mejores herramientas de productividad con IA para encontrar la solución perfecta
              para tu trabajo remoto.
            </p>
          </div>
        </div>
      </section>

      {/* Tool Comparison Selector */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-2xl font-bold text-secondary">Comparar herramientas específicas</h2>
            <ToolComparisonSelector />
          </div>
        </div>
      </section>

      {/* Comparisons Section */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-2xl font-bold text-secondary">Comparativas por categoría</h2>
          <Tabs defaultValue="writing" className="w-full">
            <TabsList className="mb-8 grid w-full grid-cols-2 gap-2 md:grid-cols-4">
              <TabsTrigger value="writing">Escritura IA</TabsTrigger>
              <TabsTrigger value="automation">Automatización</TabsTrigger>
              <TabsTrigger value="project">Gestión de tareas</TabsTrigger>
              <TabsTrigger value="meeting">Reuniones</TabsTrigger>
            </TabsList>

            <TabsContent value="writing" className="mt-6">
              <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <h3 className="text-xl font-bold text-secondary">Herramientas de Escritura con IA</h3>
                  <p className="text-gray-600">
                    Compara las mejores herramientas para generar y mejorar contenido escrito.
                  </p>
                </div>
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <Link href="/blog/mejores-herramientas-escritura-ia">Ver análisis completo</Link>
                </Button>
              </div>
              <ComparisonTable
                category={writingTools.category}
                tools={writingTools.tools}
                features={writingTools.features}
              />
            </TabsContent>

            <TabsContent value="automation" className="mt-6">
              <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <h3 className="text-xl font-bold text-secondary">Herramientas de Automatización</h3>
                  <p className="text-gray-600">Compara las mejores herramientas para automatizar flujos de trabajo.</p>
                </div>
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <Link href="/blog/mejores-herramientas-automatizacion">Ver análisis completo</Link>
                </Button>
              </div>
              <ComparisonTable
                category={automationTools.category}
                tools={automationTools.tools}
                features={automationTools.features}
              />
            </TabsContent>

            <TabsContent value="project" className="mt-6">
              <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <h3 className="text-xl font-bold text-secondary">Herramientas de Gestión de Tareas</h3>
                  <p className="text-gray-600">Compara las mejores herramientas para gestionar proyectos y tareas.</p>
                </div>
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <Link href="/blog/mejores-herramientas-gestion-tareas">Ver análisis completo</Link>
                </Button>
              </div>
              <ComparisonTable
                category={projectTools.category}
                tools={projectTools.tools}
                features={projectTools.features}
              />
            </TabsContent>

            <TabsContent value="meeting" className="mt-6">
              <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <h3 className="text-xl font-bold text-secondary">Herramientas para Reuniones</h3>
                  <p className="text-gray-600">
                    Compara las mejores herramientas para transcribir y analizar reuniones.
                  </p>
                </div>
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <Link href="/blog/mejores-herramientas-reuniones">Ver análisis completo</Link>
                </Button>
              </div>
              <ComparisonTable
                category={meetingTools.category}
                tools={meetingTools.tools}
                features={meetingTools.features}
              />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Popular Comparisons */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-2xl font-bold text-secondary sm:text-3xl">Comparativas Populares</h2>
            <p className="mt-4 text-lg text-gray-600">
              Descubre nuestros análisis detallados de las herramientas más buscadas.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/comparativas/notion-ai-vs-jasper"
              className="group rounded-lg bg-white p-6 shadow-md transition-all duration-200 hover:shadow-lg"
            >
              <h3 className="mb-2 text-xl font-semibold text-secondary group-hover:text-primary">
                Notion AI vs Jasper
              </h3>
              <p className="mb-4 text-gray-600">
                Comparativa detallada entre dos de las herramientas de escritura con IA más populares.
              </p>
              <span className="inline-flex items-center text-primary">
                Ver comparativa
                <svg
                  className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </Link>

            <Link
              href="/comparativas/clickup-vs-asana"
              className="group rounded-lg bg-white p-6 shadow-md transition-all duration-200 hover:shadow-lg"
            >
              <h3 className="mb-2 text-xl font-semibold text-secondary group-hover:text-primary">ClickUp vs Asana</h3>
              <p className="mb-4 text-gray-600">
                Análisis comparativo de dos plataformas líderes en gestión de proyectos y tareas.
              </p>
              <span className="inline-flex items-center text-primary">
                Ver comparativa
                <svg
                  className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </Link>

            <Link
              href="/comparativas/zapier-vs-make"
              className="group rounded-lg bg-white p-6 shadow-md transition-all duration-200 hover:shadow-lg"
            >
              <h3 className="mb-2 text-xl font-semibold text-secondary group-hover:text-primary">Zapier vs Make</h3>
              <p className="mb-4 text-gray-600">
                Comparación exhaustiva de las principales plataformas de automatización sin código.
              </p>
              <span className="inline-flex items-center text-primary">
                Ver comparativa
                <svg
                  className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              ¿No encuentras lo que buscas?
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Explora nuestras reseñas detalladas de cada herramienta o contáctanos para recomendaciones personalizadas.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link href="/resenas">Ver reseñas detalladas</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link href="/contacto">Contactar</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
