import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, X, Star, ExternalLink } from "lucide-react"

// Función para obtener datos de la herramienta basados en el slug
function getToolData(slug: string) {
  // Aquí normalmente obtendrías los datos de una API o base de datos
  // Para este ejemplo, usaremos datos estáticos

  const toolsData: Record<string, any> = {
    "notion-ai": {
      name: "Notion AI",
      description: "Asistente de escritura y organización con IA integrada en Notion.",
      longDescription:
        "Notion AI es una potente herramienta de inteligencia artificial integrada directamente en la plataforma de Notion. Permite a los usuarios generar texto, resumir contenido, traducir a múltiples idiomas, mejorar la escritura y mucho más, todo sin salir de su espacio de trabajo habitual.",
      imageUrl: "/notion-ai-blue.png",
      category: "Escritura IA",
      tags: ["Escritura IA", "Productividad", "Organización", "Colaboración"],
      rating: 4.5,
      url: "#",
      pros: [
        "Integración perfecta con el ecosistema de Notion",
        "Interfaz intuitiva y fácil de usar",
        "Múltiples funcionalidades de IA en una sola herramienta",
        "Excelente para equipos que ya utilizan Notion",
        "Mejora continua con nuevas funcionalidades",
      ],
      cons: [
        "Requiere suscripción a Notion para acceder a todas las funciones",
        "Algunas funciones avanzadas tienen limitaciones",
        "Puede ser costoso para equipos grandes",
        "Curva de aprendizaje para nuevos usuarios de Notion",
      ],
      features: [
        {
          name: "Generación de texto",
          description: "Crea contenido de alta calidad a partir de prompts simples.",
        },
        {
          name: "Resumen automático",
          description: "Resume documentos largos o reuniones en puntos clave.",
        },
        {
          name: "Traducción",
          description: "Traduce contenido a múltiples idiomas con un solo clic.",
        },
        {
          name: "Corrección y mejora de texto",
          description: "Mejora la gramática, el estilo y la claridad de tus textos.",
        },
        {
          name: "Integración con workspace",
          description: "Funciona directamente dentro de tu espacio de trabajo de Notion.",
        },
      ],
      pricing: [
        {
          plan: "Personal",
          price: "$10/mes",
          features: ["20 créditos de IA al mes", "Todas las funciones básicas de IA", "Uso personal"],
        },
        {
          plan: "Plus",
          price: "$15/mes",
          features: ["50 créditos de IA al mes", "Todas las funciones de IA", "Uso personal o en equipos pequeños"],
        },
        {
          plan: "Business",
          price: "$25/usuario/mes",
          features: [
            "100 créditos de IA al mes por usuario",
            "Todas las funciones avanzadas de IA",
            "Funciones de administración y seguridad",
            "Soporte prioritario",
          ],
        },
      ],
      useCases: [
        {
          title: "Creación de contenido",
          description: "Genera borradores de artículos, publicaciones de blog o correos electrónicos rápidamente.",
        },
        {
          title: "Documentación de proyectos",
          description: "Resume reuniones y crea documentación clara y concisa para tu equipo.",
        },
        {
          title: "Gestión del conocimiento",
          description: "Organiza y resume información importante para facilitar su acceso y comprensión.",
        },
      ],
      screenshots: [
        {
          url: "/placeholder.svg?height=600&width=800&query=Notion AI interface showing text generation",
          alt: "Interfaz de Notion AI mostrando generación de texto",
        },
        {
          url: "/placeholder.svg?height=600&width=800&query=Notion AI summarizing a document",
          alt: "Notion AI resumiendo un documento",
        },
        {
          url: "/placeholder.svg?height=600&width=800&query=Notion AI translation feature in action",
          alt: "Función de traducción de Notion AI en acción",
        },
      ],
    },
    // Aquí irían más herramientas...
  }

  return toolsData[slug] || null
}

export default function ToolReviewPage({ params }: { params: { slug: string } }) {
  const toolData = getToolData(params.slug)

  if (!toolData) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-secondary">Herramienta no encontrada</h1>
        <p className="mt-4 text-gray-600">Lo sentimos, no pudimos encontrar la herramienta que estás buscando.</p>
        <Button asChild className="mt-8 bg-primary hover:bg-primary/90">
          <Link href="/resenas">Ver todas las herramientas</Link>
        </Button>
      </div>
    )
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-light to-sky py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-8 md:flex-row">
            <div className="relative h-32 w-32 flex-shrink-0 overflow-hidden rounded-lg bg-white p-4 shadow-md md:h-48 md:w-48">
              <Image
                src={toolData.imageUrl || "/placeholder.svg"}
                alt={toolData.name}
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="text-center md:text-left">
              <div className="mb-2 flex flex-wrap justify-center gap-2 md:justify-start">
                <Badge className="bg-primary hover:bg-primary/90">{toolData.category}</Badge>
                {toolData.tags.map((tag: string) => (
                  <Badge key={tag} variant="outline" className="border-primary/30 text-primary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <h1 className="font-heading text-3xl font-bold tracking-tight text-secondary sm:text-4xl md:text-5xl">
                {toolData.name}
              </h1>
              <p className="mt-4 text-lg text-gray-600">{toolData.description}</p>
              <div className="mt-4 flex items-center justify-center gap-1 md:justify-start">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(toolData.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="ml-2 text-lg font-semibold">{toolData.rating}/5</span>
              </div>
              <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link
                    href={toolData.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    Probar herramienta
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href={`/comparativas?tool=${params.slug}`}>Comparar con otras</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="mb-8 grid w-full grid-cols-2 gap-2 md:grid-cols-4">
                <TabsTrigger value="overview">Descripción</TabsTrigger>
                <TabsTrigger value="features">Características</TabsTrigger>
                <TabsTrigger value="pricing">Precios</TabsTrigger>
                <TabsTrigger value="screenshots">Capturas</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-6">
                <div className="rounded-lg border bg-white p-6 shadow-sm">
                  <h2 className="text-2xl font-bold text-secondary">Descripción general</h2>
                  <p className="mt-4 text-gray-600">{toolData.longDescription}</p>

                  <div className="mt-8 grid gap-8 md:grid-cols-2">
                    <div>
                      <h3 className="text-xl font-semibold text-secondary">Ventajas</h3>
                      <ul className="mt-4 space-y-2">
                        {toolData.pros.map((pro: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <Check className="mr-2 h-5 w-5 flex-shrink-0 text-green-500" />
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-secondary">Desventajas</h3>
                      <ul className="mt-4 space-y-2">
                        {toolData.cons.map((con: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <X className="mr-2 h-5 w-5 flex-shrink-0 text-red-500" />
                            <span>{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <h3 className="mt-8 text-xl font-semibold text-secondary">Casos de uso</h3>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {toolData.useCases.map((useCase: any, index: number) => (
                      <div key={index} className="rounded-lg border bg-gray-50 p-4">
                        <h4 className="font-semibold text-secondary">{useCase.title}</h4>
                        <p className="mt-2 text-sm text-gray-600">{useCase.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="features" className="mt-6">
                <div className="rounded-lg border bg-white p-6 shadow-sm">
                  <h2 className="text-2xl font-bold text-secondary">Características principales</h2>
                  <div className="mt-6 space-y-6">
                    {toolData.features.map((feature: any, index: number) => (
                      <div key={index} className="rounded-lg border bg-gray-50 p-4">
                        <h3 className="text-lg font-semibold text-secondary">{feature.name}</h3>
                        <p className="mt-2 text-gray-600">{feature.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="pricing" className="mt-6">
                <div className="rounded-lg border bg-white p-6 shadow-sm">
                  <h2 className="text-2xl font-bold text-secondary">Planes y precios</h2>
                  <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {toolData.pricing.map((plan: any, index: number) => (
                      <div key={index} className="rounded-lg border p-6 shadow-sm">
                        <h3 className="text-lg font-semibold text-secondary">{plan.plan}</h3>
                        <p className="mt-2 text-2xl font-bold text-primary">{plan.price}</p>
                        <ul className="mt-4 space-y-2">
                          {plan.features.map((feature: string, featureIndex: number) => (
                            <li key={featureIndex} className="flex items-start">
                              <Check className="mr-2 h-5 w-5 flex-shrink-0 text-green-500" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button asChild className="mt-6 w-full bg-primary hover:bg-primary/90">
                          <Link href={toolData.url} target="_blank" rel="noopener noreferrer">
                            Probar {plan.plan}
                          </Link>
                        </Button>
                      </div>
                    ))}
                  </div>
                  <p className="mt-6 text-sm text-gray-500">
                    * Los precios pueden variar. Consulta el sitio web oficial para obtener la información más
                    actualizada.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="screenshots" className="mt-6">
                <div className="rounded-lg border bg-white p-6 shadow-sm">
                  <h2 className="text-2xl font-bold text-secondary">Capturas de pantalla</h2>
                  <div className="mt-6 grid gap-6">
                    {toolData.screenshots.map((screenshot: any, index: number) => (
                      <div key={index} className="overflow-hidden rounded-lg border">
                        <Image
                          src={screenshot.url || "/placeholder.svg"}
                          alt={screenshot.alt}
                          width={800}
                          height={600}
                          className="w-full object-cover"
                        />
                        <p className="bg-gray-50 p-2 text-center text-sm text-gray-600">{screenshot.alt}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              ¿Listo para probar {toolData.name}?
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Descubre cómo esta herramienta puede transformar tu productividad y optimizar tu trabajo remoto.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link
                  href={toolData.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  Probar gratis
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <p className="mt-4 text-sm text-white/70">
              * Utilizamos enlaces de afiliados. Si realizas una compra a través de nuestros enlaces, podemos recibir
              una comisión sin costo adicional para ti.
            </p>
          </div>
        </div>
      </section>

      {/* Related Tools */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-2xl font-bold text-secondary sm:text-3xl">Herramientas relacionadas</h2>
            <p className="mt-4 text-lg text-gray-600">Explora otras herramientas similares que podrían interesarte.</p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Aquí irían las tarjetas de herramientas relacionadas */}
            {/* Por simplicidad, no las incluimos en este ejemplo */}
          </div>
        </div>
      </section>
    </>
  )
}
