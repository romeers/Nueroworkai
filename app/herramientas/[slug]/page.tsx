import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, X, Star, ExternalLink, ThumbsUp, ThumbsDown } from "lucide-react"
import SafeImage from "@/components/safe-image"

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
      neuroScore: {
        overall: 9.2,
        easeOfUse: 9.5,
        aiFeatures: 9.0,
        valueForMoney: 8.8,
        support: 9.0,
        integration: 9.7,
      },
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
          url: "/notion-ai-text-generation.png",
          alt: "Interfaz de Notion AI mostrando generación de texto",
        },
        {
          url: "/notion-ai-summarization.png",
          alt: "Notion AI resumiendo un documento",
        },
        {
          url: "/notion-ai-translation-workflow.png",
          alt: "Función de traducción de Notion AI en acción",
        },
      ],
      alternatives: [
        {
          name: "Jasper",
          slug: "jasper",
          description: "Plataforma especializada en generación de contenido con IA.",
        },
        {
          name: "Grammarly",
          slug: "grammarly",
          description: "Enfocado en corrección gramatical y mejora de textos.",
        },
      ],
      reviews: [
        {
          author: "María G.",
          rating: 5,
          title: "Transformó mi forma de trabajar",
          comment:
            "Notion AI ha cambiado completamente mi flujo de trabajo. Ahorro horas cada semana en la creación de contenido y documentación.",
          date: "15/03/2023",
          helpful: 24,
          unhelpful: 2,
        },
        {
          author: "Carlos R.",
          rating: 4,
          title: "Excelente, pero con margen de mejora",
          comment:
            "Una herramienta fantástica que me ayuda diariamente. Le falta pulir algunas funciones, pero su integración con Notion es perfecta.",
          date: "22/04/2023",
          helpful: 18,
          unhelpful: 3,
        },
      ],
    },
    // Aquí irían más herramientas...
  }

  return toolsData[slug] || null
}

export default function ToolPage({ params }: { params: { slug: string } }) {
  const toolData = getToolData(params.slug)

  if (!toolData) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-secondary">Herramienta no encontrada</h1>
        <p className="mt-4 text-gray-600">Lo sentimos, no pudimos encontrar la herramienta que estás buscando.</p>
        <Button asChild className="mt-8 bg-primary hover:bg-primary/90">
          <Link href="/herramientas">Ver todas las herramientas</Link>
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
              <SafeImage
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

              {/* NeuroScore */}
              <div className="mt-6 inline-flex items-center rounded-full bg-primary/10 px-4 py-2">
                <div className="mr-2 rounded-full bg-primary px-3 py-1 text-lg font-bold text-white">
                  {toolData.neuroScore.overall}
                </div>
                <span className="font-semibold text-primary">NeuroScore™</span>
              </div>

              <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90" id="probar">
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
                <Button asChild variant="outline" size="lg">
                  <Link href={`/herramientas/comparar?tool=${params.slug}`}>Comparar con otras</Link>
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
              <TabsList className="mb-8 grid w-full grid-cols-2 gap-2 md:grid-cols-5">
                <TabsTrigger value="overview">Resumen</TabsTrigger>
                <TabsTrigger value="features">Características</TabsTrigger>
                <TabsTrigger value="pricing">Precios</TabsTrigger>
                <TabsTrigger value="screenshots">Capturas</TabsTrigger>
                <TabsTrigger value="reviews">Opiniones</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-6">
                <div className="rounded-lg border bg-white p-6 shadow-sm">
                  <h2 className="text-2xl font-bold text-secondary">Descripción general</h2>
                  <p className="mt-4 text-gray-600">{toolData.longDescription}</p>

                  {/* NeuroScore detallado */}
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-secondary">NeuroScore™ Detallado</h3>
                    <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      <div className="rounded-lg bg-gray-50 p-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-600">Facilidad de uso</span>
                          <span className="rounded-full bg-primary px-2 py-1 text-sm font-bold text-white">
                            {toolData.neuroScore.easeOfUse}
                          </span>
                        </div>
                      </div>
                      <div className="rounded-lg bg-gray-50 p-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-600">Funciones IA</span>
                          <span className="rounded-full bg-primary px-2 py-1 text-sm font-bold text-white">
                            {toolData.neuroScore.aiFeatures}
                          </span>
                        </div>
                      </div>
                      <div className="rounded-lg bg-gray-50 p-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-600">Relación calidad-precio</span>
                          <span className="rounded-full bg-primary px-2 py-1 text-sm font-bold text-white">
                            {toolData.neuroScore.valueForMoney}
                          </span>
                        </div>
                      </div>
                      <div className="rounded-lg bg-gray-50 p-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-600">Soporte</span>
                          <span className="rounded-full bg-primary px-2 py-1 text-sm font-bold text-white">
                            {toolData.neuroScore.support}
                          </span>
                        </div>
                      </div>
                      <div className="rounded-lg bg-gray-50 p-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-600">Integración</span>
                          <span className="rounded-full bg-primary px-2 py-1 text-sm font-bold text-white">
                            {toolData.neuroScore.integration}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

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

                  {/* Alternativas */}
                  <h3 className="mt-8 text-xl font-semibold text-secondary">Alternativas a {toolData.name}</h3>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    {toolData.alternatives.map((alt: any, index: number) => (
                      <Link
                        key={index}
                        href={`/herramientas/${alt.slug}`}
                        className="rounded-lg border bg-gray-50 p-4 transition-colors hover:border-primary/30 hover:bg-primary/5"
                      >
                        <h4 className="font-semibold text-secondary">{alt.name}</h4>
                        <p className="mt-2 text-sm text-gray-600">{alt.description}</p>
                        <p className="mt-2 text-sm font-medium text-primary">Ver análisis →</p>
                      </Link>
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

              <TabsContent value="reviews" className="mt-6">
                <div className="rounded-lg border bg-white p-6 shadow-sm">
                  <h2 className="text-2xl font-bold text-secondary">Opiniones de usuarios</h2>

                  <div className="mt-6 space-y-6">
                    {toolData.reviews.map((review: any, index: number) => (
                      <div key={index} className="rounded-lg border bg-gray-50 p-4">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-semibold text-secondary">{review.title}</h3>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-5 w-5 ${
                                  i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="mt-2 text-sm text-gray-500">
                          Por {review.author} • {review.date}
                        </p>
                        <p className="mt-2 text-gray-600">{review.comment}</p>
                        <div className="mt-4 flex items-center gap-4">
                          <button className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-primary">
                            <ThumbsUp className="h-4 w-4" />
                            <span>Útil ({review.helpful})</span>
                          </button>
                          <button className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-primary">
                            <ThumbsDown className="h-4 w-4" />
                            <span>No útil ({review.unhelpful})</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 rounded-lg border border-dashed border-gray-300 p-6 text-center">
                    <h3 className="text-lg font-semibold text-secondary">¿Has usado {toolData.name}?</h3>
                    <p className="mt-2 text-gray-600">
                      Comparte tu experiencia y ayuda a otros usuarios a tomar mejores decisiones.
                    </p>
                    <Button className="mt-4 bg-primary hover:bg-primary/90">Escribir una opinión</Button>
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

      {/* Comparar con otras herramientas */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-2xl font-bold text-secondary sm:text-3xl">
              Comparar {toolData.name} con otras herramientas
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Selecciona otra herramienta para ver una comparativa detallada lado a lado.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {toolData.alternatives.map((alt: any) => (
              <Button
                key={alt.slug}
                asChild
                variant="outline"
                className="border-primary/30 text-primary hover:bg-primary/10"
              >
                <Link href={`/herramientas/comparar/${params.slug}-vs-${alt.slug}`}>Comparar con {alt.name}</Link>
              </Button>
            ))}
            <Button asChild>
              <Link href={`/herramientas/comparar?tool=${params.slug}`}>Ver todas las comparativas</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
