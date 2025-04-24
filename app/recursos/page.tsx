import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ResourceCard from "@/components/resource-card"
import NewsletterForm from "@/components/newsletter-form"

// Datos de ejemplo para los recursos
const resources = [
  {
    title: "Kit de herramientas IA para trabajo remoto",
    description:
      "Una guía completa con las mejores herramientas de IA para optimizar tu trabajo remoto, organizadas por categoría y caso de uso.",
    imageUrl: "/placeholder.svg?height=160&width=320&query=AI tools kit with icons on blue background",
    downloadUrl: "#",
    type: "PDF",
  },
  {
    title: "Guía de prompts para productividad",
    description:
      "Colección de prompts efectivos para ChatGPT, Notion AI, Jasper y otras herramientas de IA para maximizar tu productividad.",
    imageUrl: "/placeholder.svg?height=160&width=320&query=AI prompt guide with text examples",
    downloadUrl: "#",
    type: "PDF",
  },
  {
    title: "Comparativa: Herramientas de escritura con IA",
    description:
      "Tabla comparativa detallada de las principales herramientas de escritura con IA, con características, precios y casos de uso ideales.",
    imageUrl: "/placeholder.svg?height=160&width=320&query=comparison chart of AI writing tools",
    downloadUrl: "#",
    type: "PDF",
  },
  {
    title: "Plantillas de automatización para Zapier",
    description:
      "Colección de plantillas listas para usar en Zapier que automatizan tareas comunes para profesionales remotos.",
    imageUrl: "/placeholder.svg?height=160&width=320&query=automation templates and workflow diagrams",
    downloadUrl: "#",
    type: "ZIP",
  },
  {
    title: "Checklist: Optimización de reuniones con IA",
    description:
      "Lista de verificación para preparar, conducir y dar seguimiento a reuniones remotas utilizando herramientas de IA.",
    imageUrl: "/placeholder.svg?height=160&width=320&query=meeting checklist with AI tools",
    downloadUrl: "#",
    type: "PDF",
  },
  {
    title: "Calendario editorial con IA para content marketing",
    description:
      "Plantilla de calendario editorial que integra herramientas de IA para optimizar la creación y distribución de contenido.",
    imageUrl: "/placeholder.svg?height=160&width=320&query=content calendar template with AI integration",
    downloadUrl: "#",
    type: "XLSX",
  },
]

export default function RecursosPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-light to-sky py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-3xl font-bold tracking-tight text-secondary sm:text-4xl md:text-5xl">
              Recursos Gratuitos
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Descarga guías, plantillas y herramientas gratuitas para potenciar tu productividad con IA.
            </p>
          </div>
        </div>
      </section>

      {/* Lead Magnet Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl rounded-xl bg-primary/10 p-6 sm:p-10">
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
                  <li className="flex items-center">
                    <svg className="mr-2 h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Comparativas imprimibles de las mejores herramientas</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-secondary">Suscríbete para descargar:</h3>
                  <NewsletterForm />
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-64 w-full max-w-md overflow-hidden rounded-lg shadow-lg sm:h-80">
                  <Image
                    src="/placeholder.svg?height=320&width=400&query=3D ebook mockup of AI productivity kit with blue and purple colors"
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

      {/* Resources Grid Section */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-2xl font-bold text-secondary sm:text-3xl">Recursos Disponibles</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource) => (
              <ResourceCard
                key={resource.title}
                title={resource.title}
                description={resource.description}
                imageUrl={resource.imageUrl}
                downloadUrl={resource.downloadUrl}
                type={resource.type}
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
              ¿Necesitas ayuda personalizada?
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Explora nuestras reseñas detalladas o contáctanos para recibir recomendaciones adaptadas a tus necesidades
              específicas.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link href="/resenas">Ver reseñas</Link>
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
