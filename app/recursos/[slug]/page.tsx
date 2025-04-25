import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Download, ExternalLink, Share2, ArrowLeft } from "lucide-react"
import SafeImage from "@/components/safe-image"
import KitPromoBlock from "@/components/kit-promo-block"
import ResourceGridCard from "@/components/resource-grid-card"

// Función para generar metadatos dinámicos
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const resource = getResourceBySlug(params.slug)

  if (!resource) {
    return {
      title: "Recurso no encontrado | NeuroWorkAI",
      description: "El recurso que buscas no existe o ha sido movido.",
    }
  }

  return {
    title: `${resource.title} | NeuroWorkAI`,
    description: resource.description,
    keywords: `${resource.category}, ${resource.title}, IA, productividad, ${resource.toolName || ""}`.trim(),
  }
}

// Función para obtener datos del recurso por slug
function getResourceBySlug(slug: string) {
  // Aquí normalmente obtendrías los datos de una API o base de datos
  // Para este ejemplo, usaremos datos estáticos

  const allResources = [
    {
      title: "50 Prompts Avanzados para Notion AI, ChatGPT y Jasper",
      description:
        "Colección de prompts optimizados para generar contenido de alta calidad con las principales herramientas de escritura IA.",
      content: `
        <h2>Introducción a los prompts avanzados</h2>
        <p>Los prompts son instrucciones que le das a una IA para obtener resultados específicos. La calidad de tus prompts determina directamente la calidad de las respuestas que obtendrás.</p>
        
        <p>En esta guía, encontrarás 50 prompts avanzados diseñados específicamente para Notion AI, ChatGPT y Jasper, organizados por caso de uso y optimizados para obtener los mejores resultados.</p>
        
        <h2>Prompts para creación de contenido</h2>
        <ol>
          <li><strong>Artículo de blog SEO:</strong> "Escribe un artículo de blog de 1500 palabras sobre [tema] optimizado para SEO. Incluye una introducción atractiva, al menos 3 subtítulos H2, 2 subtítulos H3 bajo cada H2, conclusión y una llamada a la acción. Utiliza un tono conversacional y profesional. Incluye datos estadísticos recientes y cita fuentes confiables."</li>
          <li><strong>Email de ventas:</strong> "Redacta un email de ventas persuasivo para [producto/servicio] dirigido a [audiencia objetivo]. El email debe tener un asunto atractivo, una introducción que genere curiosidad, 3-4 beneficios clave, testimonios, una oferta limitada y un CTA claro. Utiliza un tono [formal/casual/amigable] y mantén el email en menos de 300 palabras."</li>
        </ol>
        
        <h2>Prompts para análisis y resumen</h2>
        <ol start="3">
          <li><strong>Resumen ejecutivo:</strong> "Resume el siguiente texto en un resumen ejecutivo de 250 palabras, destacando los puntos clave, conclusiones principales y recomendaciones: [texto a resumir]"</li>
          <li><strong>Análisis DAFO:</strong> "Realiza un análisis DAFO (Debilidades, Amenazas, Fortalezas, Oportunidades) detallado para [empresa/producto/idea]. Para cada categoría, proporciona al menos 3 puntos con una breve explicación."</li>
        </ol>
      `,
      imageUrl: "/ai-prompt-examples.png",
      category: "Prompts IA",
      categoryId: "prompts",
      slug: "prompts-avanzados-notion-chatgpt-jasper",
      readTime: "15 min",
      toolName: "Notion AI",
      toolAffiliateUrl: "https://notion.so/product/ai?ref=neuroworkai",
      isDownloadable: true,
      downloadUrl: "/recursos/descargar/prompts-avanzados-notion-chatgpt-jasper",
      relatedResources: [
        "guia-definitiva-prompts-chatgpt-notion-ai",
        "prompts-marketing-digital-ia",
        "plantilla-productividad-ia-notion",
      ],
    },
    {
      title: "Automatiza tu equipo remoto con Zapier y Make",
      description:
        "Guía paso a paso para crear flujos de trabajo automatizados que ahorran hasta 10 horas semanales a tu equipo.",
      content: `
        <h2>Introducción a la automatización de equipos remotos</h2>
        <p>La automatización es clave para que los equipos remotos puedan trabajar de forma eficiente y coordinada. En esta guía, te mostraremos cómo utilizar Zapier y Make (anteriormente Integromat) para crear flujos de trabajo automatizados que ahorrarán tiempo y reducirán errores en tu equipo.</p>
        
        <h2>¿Por qué automatizar tu equipo remoto?</h2>
        <p>Los equipos remotos se enfrentan a desafíos únicos de comunicación, coordinación y seguimiento. La automatización puede ayudar a:</p>
        <ul>
          <li>Reducir el tiempo dedicado a tareas repetitivas</li>
          <li>Minimizar errores humanos</li>
          <li>Mejorar la comunicación entre miembros del equipo</li>
          <li>Mantener a todos sincronizados y actualizados</li>
          <li>Centralizar la información importante</li>
        </ul>
        
        <h2>Flujo de trabajo #1: Onboarding automático de nuevos miembros</h2>
        <p>Este flujo de trabajo automatiza el proceso de incorporación de nuevos miembros al equipo, asegurando que reciban toda la información necesaria y tengan acceso a las herramientas adecuadas desde el primer día.</p>
        
        <h3>Paso 1: Configurar el desencadenante</h3>
        <p>En Zapier, selecciona "Google Forms" como desencadenante y "Nueva respuesta de formulario" como evento. Este será el formulario que completará RRHH cuando se incorpore un nuevo miembro.</p>
        
        <h3>Paso 2: Crear cuenta en herramientas necesarias</h3>
        <p>Añade acciones para crear cuentas en las herramientas que utiliza tu equipo, como Slack, Asana, Google Workspace, etc.</p>
      `,
      imageUrl: "/automation-workflows-templates.png",
      category: "Automatización",
      categoryId: "automatizacion",
      slug: "automatiza-equipo-remoto-zapier-make",
      readTime: "20 min",
      toolName: "Zapier",
      toolAffiliateUrl: "https://zapier.com/?utm_source=neuroworkai&utm_medium=affiliate",
      isDownloadable: false,
      relatedResources: [
        "automatizacion-principiantes-zapier",
        "flujos-trabajo-automatizados-equipos-marketing",
        "plantilla-calendario-editorial-ia-content-marketing",
      ],
    },
    // Más recursos...
  ]

  return allResources.find((resource) => resource.slug === slug)
}

// Función para obtener recursos relacionados
function getRelatedResources(relatedSlugs: string[]) {
  // Aquí normalmente obtendrías los datos de una API o base de datos
  // Para este ejemplo, usaremos datos estáticos

  const allResources = [
    {
      title: "Guía definitiva de prompts para ChatGPT y Notion AI",
      description:
        "Aprende a crear prompts efectivos para obtener los mejores resultados de las herramientas de IA generativa.",
      imageUrl: "/ai-prompt-examples.png",
      category: "Prompts IA",
      categoryId: "prompts",
      slug: "guia-definitiva-prompts-chatgpt-notion-ai",
      readTime: "15 min",
      toolName: "ChatGPT",
      toolAffiliateUrl: "#",
    },
    {
      title: "30 prompts para marketing digital con IA",
      description: "Colección de prompts optimizados para crear contenido de marketing digital de alta calidad con IA.",
      imageUrl: "/ai-marketing-brainstorm.png",
      category: "Prompts IA",
      categoryId: "prompts",
      slug: "prompts-marketing-digital-ia",
      readTime: "7 min",
      toolName: "Jasper",
      toolAffiliateUrl: "#",
    },
    {
      title: "Plantilla editable de productividad IA en Notion",
      description:
        "Sistema completo para gestionar tareas, proyectos y objetivos con integración de IA para maximizar tu productividad.",
      imageUrl: "/task-management-templates.png",
      category: "Plantillas",
      categoryId: "plantillas",
      slug: "plantilla-productividad-ia-notion",
      readTime: "5 min",
      toolName: "Notion",
      toolAffiliateUrl: "https://notion.so/product/ai?ref=neuroworkai",
    },
    {
      title: "Automatización para principiantes: Primeros pasos con Zapier",
      description:
        "Aprende a crear tus primeras automatizaciones y conectar tus aplicaciones favoritas sin escribir código.",
      imageUrl: "/connected-apps-workflow.png",
      category: "Automatización",
      categoryId: "automatizacion",
      slug: "automatizacion-principiantes-zapier",
      readTime: "12 min",
      toolName: "Zapier",
      toolAffiliateUrl: "https://zapier.com/?utm_source=neuroworkai&utm_medium=affiliate",
    },
    {
      title: "Flujos de trabajo automatizados para equipos de marketing",
      description:
        "Plantillas y ejemplos de automatizaciones para optimizar las tareas repetitivas en equipos de marketing.",
      imageUrl: "/interconnected-marketing-flow.png",
      category: "Automatización",
      categoryId: "automatizacion",
      slug: "flujos-trabajo-automatizados-equipos-marketing",
      readTime: "11 min",
      toolName: "Zapier",
      toolAffiliateUrl: "https://zapier.com/?utm_source=neuroworkai&utm_medium=affiliate",
    },
    {
      title: "Plantilla de calendario editorial con IA para content marketing",
      description: "Sistema para planificar, crear y distribuir contenido optimizado con herramientas de IA.",
      imageUrl: "/placeholder.svg?height=200&width=300&query=AI content calendar template",
      category: "Plantillas",
      categoryId: "plantillas",
      slug: "plantilla-calendario-editorial-ia-content-marketing",
      readTime: "8 min",
      toolName: "Jasper",
      toolAffiliateUrl: "#",
    },
  ]

  return allResources.filter((resource) => relatedSlugs.includes(resource.slug))
}

export default function ResourcePage({ params }: { params: { slug: string } }) {
  const resource = getResourceBySlug(params.slug)

  if (!resource) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-secondary">Recurso no encontrado</h1>
        <p className="mt-4 text-gray-600">Lo sentimos, no pudimos encontrar el recurso que estás buscando.</p>
        <Button asChild className="mt-8 bg-primary hover:bg-primary/90">
          <Link href="/recursos">Ver todos los recursos</Link>
        </Button>
      </div>
    )
  }

  const relatedResources = resource.relatedResources ? getRelatedResources(resource.relatedResources) : []

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-50 to-violet-50 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Link
              href="/recursos"
              className="inline-flex items-center text-primary mb-6 hover:underline"
              aria-label="Volver a recursos"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver a recursos
            </Link>

            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-primary/10 text-primary hover:bg-primary/20">{resource.category}</Badge>
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="h-4 w-4 mr-1" />
                {resource.readTime} de lectura
              </div>
            </div>

            <h1 className="font-heading text-3xl font-bold tracking-tight text-secondary sm:text-4xl md:text-5xl mb-6">
              {resource.title}
            </h1>

            <p className="text-xl text-gray-600 mb-8">{resource.description}</p>

            <div className="flex flex-col sm:flex-row gap-4">
              {resource.isDownloadable ? (
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <Link
                    href={resource.downloadUrl}
                    className="flex items-center"
                    data-umami-event={`resource-download-${resource.slug}`}
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Descargar recurso
                  </Link>
                </Button>
              ) : null}

              {resource.toolName && resource.toolAffiliateUrl && (
                <Button
                  asChild
                  variant={resource.isDownloadable ? "outline" : "default"}
                  className={!resource.isDownloadable ? "bg-primary hover:bg-primary/90" : ""}
                >
                  <Link
                    href={resource.toolAffiliateUrl}
                    target="_blank"
                    rel="noopener sponsored"
                    className="flex items-center"
                    data-umami-event={`affiliate-${resource.toolName.toLowerCase().replace(/\s+/g, "-")}-${resource.slug}`}
                  >
                    Probar {resource.toolName}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              )}

              <Button variant="outline" size="icon" aria-label="Compartir recurso">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="relative h-[300px] sm:h-[400px] w-full rounded-xl overflow-hidden">
              <SafeImage src={resource.imageUrl} alt={resource.title} fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: resource.content }} />

            {/* CTA Box */}
            <div className="mt-12 rounded-xl bg-primary/5 p-8 border border-primary/10">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-secondary mb-2">¿Quieres probar {resource.toolName}?</h3>
                  <p className="text-gray-600">
                    Descubre cómo {resource.toolName} puede ayudarte a mejorar tu productividad y optimizar tu flujo de
                    trabajo.
                  </p>
                </div>
                <div>
                  <Button asChild className="bg-primary hover:bg-primary/90 whitespace-nowrap">
                    <Link
                      href={resource.toolAffiliateUrl || "#"}
                      target="_blank"
                      rel="noopener sponsored"
                      data-umami-event={`affiliate-cta-${resource.toolName?.toLowerCase().replace(/\s+/g, "-")}-${resource.slug}`}
                    >
                      Probar gratis
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Magnet CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <KitPromoBlock variant="compact" />
          </div>
        </div>
      </section>

      {/* Related Resources */}
      {relatedResources.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">
              <h2 className="text-2xl font-bold text-secondary mb-8">Recursos relacionados</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {relatedResources.map((relatedResource) => (
                  <ResourceGridCard
                    key={relatedResource.slug}
                    title={relatedResource.title}
                    description={relatedResource.description}
                    imageUrl={relatedResource.imageUrl}
                    category={relatedResource.category}
                    slug={relatedResource.slug}
                    readTime={relatedResource.readTime}
                    toolName={relatedResource.toolName}
                    toolAffiliateUrl={relatedResource.toolAffiliateUrl}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-primary py-16 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              ¿Quieres más recursos como este?
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Explora nuestra colección completa de guías, plantillas y recursos para potenciar tu productividad con IA.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link href="/recursos" data-umami-event="resource-page-explore-more">
                  Explorar más recursos
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
