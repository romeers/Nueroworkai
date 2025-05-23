import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, X, Star, ExternalLink, ThumbsUp, ThumbsDown, Award, Clock, DollarSign, Users } from "lucide-react"
import SafeImage from "@/components/safe-image"
import UserTestimonial from "@/components/user-testimonial"
import PricingTable from "@/components/pricing-table"
import FeatureComparison from "@/components/feature-comparison"
import ToolRating from "@/components/tool-rating"
import AffiliateBanner from "@/components/affiliate-banner"
import VerifiedBadge from "@/components/verified-badge"
import ExpertAuthor from "@/components/expert-author"
import RelatedTools from "@/components/related-tools"
import UseCaseCard from "@/components/use-case-card"
import ToolSchema from "@/components/seo/tool-schema"
import { getCachedToolBySlug } from "@/lib/db"
import { notFound } from "next/navigation"

export default async function ToolPage({ params }: { params: { slug: string } }) {
  // Obtener datos de la herramienta desde la base de datos
  const toolData = await getCachedToolBySlug(params.slug)

  // Si no se encuentra la herramienta, mostrar la página 404
  if (!toolData) {
    notFound()
  }

  // Datos adicionales que no están en la base de datos (se podrían añadir en futuras actualizaciones)
  const additionalData = {
    neuroScore: {
      overall: toolData.score || 8.5,
      easeOfUse: 9.0,
      aiFeatures: 8.5,
      valueForMoney: 8.8,
      support: 8.0,
      integration: 9.0,
      implementationTime: 8.5,
    },
    useCases: [
      {
        title: "Creación de contenido",
        description: "Genera borradores de artículos, publicaciones de blog o correos electrónicos rápidamente.",
        icon: "Pencil",
        steps: [
          "Selecciona la opción adecuada en la herramienta",
          "Proporciona un prompt claro sobre el contenido que necesitas",
          "Edita y refina el resultado según tus necesidades",
        ],
      },
      {
        title: "Automatización de tareas",
        description: "Automatiza tareas repetitivas para ahorrar tiempo y reducir errores.",
        icon: "Settings",
        steps: [
          "Identifica las tareas que quieres automatizar",
          "Configura el flujo de trabajo en la herramienta",
          "Prueba y ajusta según sea necesario",
        ],
      },
    ],
    realExamples: [
      {
        title: `Optimización del proceso de trabajo con ${toolData.name}`,
        company: "Empresa Innovadora",
        description: `Una empresa implementó ${toolData.name} para su equipo, mejorando la eficiencia en un 40%. El equipo utiliza la herramienta para automatizar tareas repetitivas y mejorar la colaboración.`,
        results: [
          "Reducción del 40% en tiempo dedicado a tareas repetitivas",
          "Aumento del 25% en la productividad general",
          "Mejora en la colaboración y comunicación del equipo",
        ],
      },
    ],
    screenshots: [
      {
        url: toolData.image_url,
        alt: `Interfaz de ${toolData.name}`,
      },
    ],
    testimonials: [
      {
        quote: `${toolData.name} ha revolucionado nuestra forma de trabajar. Ahorramos al menos 5 horas semanales en tareas repetitivas.`,
        author: "Laura Martínez",
        role: "Project Manager",
        company: "Digital Innovators",
        avatarUrl: "/testimonial-avatar-1.png",
      },
    ],
    ctaText: `Prueba ${toolData.name} y descubre cómo puede transformar tu productividad.`,
    lastUpdated: new Date().toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" }),
    reviewedBy: {
      name: "Ana Gómez",
      role: "Especialista en Productividad",
      avatarUrl: "/testimonial-avatar-2.png",
      bio: "Ana es experta en herramientas de productividad y ha analizado más de 50 soluciones de IA para trabajo remoto.",
    },
  }

  // Combinar datos de la base de datos con datos adicionales
  const completeToolData = {
    ...toolData,
    ...additionalData,
    category: toolData.category_name,
    tags: toolData.tags || [toolData.category_name],
    imageUrl: toolData.image_url,
    features: toolData.features || [],
    comparisonFeatures: toolData.features ? toolData.features.map((f: any) => f.name) : [],
    alternatives: toolData.relatedTools || [],
  }

  // Función para obtener la URL oficial si no hay URL de afiliado
  const getOfficialUrl = (toolName: string) => {
    const toolUrls: Record<string, string> = {
      "Notion AI": "https://www.notion.so/product/ai",
      Zapier: "https://zapier.com/",
      ClickUp: "https://clickup.com/",
      Fireflies: "https://fireflies.ai/",
      "Otter.ai": "https://otter.ai/",
      Grammarly: "https://www.grammarly.com/",
      Jasper: "https://www.jasper.ai/",
      ChatGPT: "https://chat.openai.com/",
    }

    return toolUrls[toolName] || "https://www.notion.so/product/ai" // Notion AI como fallback
  }

  return (
    <>
      {/* Schema.org markup para SEO */}
      <ToolSchema tool={completeToolData} slug={params.slug} />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-light to-sky py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-8 md:flex-row">
            <div className="relative h-32 w-32 flex-shrink-0 overflow-hidden rounded-lg bg-white p-4 shadow-md md:h-48 md:w-48">
              <SafeImage
                src={completeToolData.imageUrl || "/placeholder.svg"}
                alt={completeToolData.name}
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="text-center md:text-left">
              <div className="mb-2 flex flex-wrap justify-center gap-2 md:justify-start">
                <Badge className="bg-primary hover:bg-primary/90">{completeToolData.category}</Badge>
                {completeToolData.tags.map((tag: string) => (
                  <Badge key={tag} variant="outline" className="border-primary/30 text-primary">
                    {tag}
                  </Badge>
                ))}
                <VerifiedBadge verified={completeToolData.verified} />
              </div>
              <h1 className="font-heading text-3xl font-bold tracking-tight text-secondary sm:text-4xl md:text-5xl">
                {completeToolData.name}
              </h1>
              <p className="mt-4 text-lg text-gray-600">{completeToolData.description}</p>

              {/* NeuroScore */}
              <div className="mt-6 inline-flex items-center rounded-xl bg-primary/10 px-4 py-2">
                <div className="mr-2 rounded-full bg-primary px-3 py-1 text-lg font-bold text-white">
                  {completeToolData.neuroScore.overall}
                </div>
                <div>
                  <span className="font-semibold text-primary">NeuroScore™</span>
                  <Link href="/metodologia-neuroscore" className="ml-2 text-xs text-primary/70 hover:text-primary">
                    ¿Cómo evaluamos?
                  </Link>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90" id="probar">
                  <Link
                    href={completeToolData.affiliate_url || getOfficialUrl(completeToolData.name)}
                    target="_blank"
                    rel="noopener sponsored"
                    className="inline-flex items-center gap-2"
                  >
                    Probar Gratis
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href={`/herramientas/comparar?tool=${params.slug}`}>Comparar con otras</Link>
                </Button>
              </div>

              {/* Oferta especial */}
              {completeToolData.special_offer && (
                <div className="mt-4 rounded-md border border-green-200 bg-green-50 p-2 text-sm text-green-700">
                  <span className="font-semibold">Oferta Exclusiva:</span> {completeToolData.special_offer}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 flex items-center justify-between">
              <div className="flex items-center">
                <ExpertAuthor author={completeToolData.reviewedBy} />
              </div>
              <div className="text-sm text-gray-500">Actualizado: {completeToolData.lastUpdated}</div>
            </div>

            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="mb-8 grid w-full grid-cols-2 gap-2 md:grid-cols-5">
                <TabsTrigger value="overview">Resumen</TabsTrigger>
                <TabsTrigger value="features">Características</TabsTrigger>
                <TabsTrigger value="pricing">Precios</TabsTrigger>
                <TabsTrigger value="usecases">Casos de Uso</TabsTrigger>
                <TabsTrigger value="reviews">Opiniones</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-6">
                <div className="rounded-lg border bg-white p-6 shadow-sm">
                  <h2 className="text-2xl font-bold text-secondary">Descripción general</h2>
                  <p className="mt-4 text-gray-600">
                    {completeToolData.long_description || completeToolData.description}
                  </p>

                  {/* Por qué lo recomendamos */}
                  <div className="mt-8 rounded-lg border border-primary/10 bg-primary/5 p-6">
                    <h3 className="flex items-center text-xl font-semibold text-secondary">
                      <Award className="mr-2 h-5 w-5 text-primary" />
                      Por qué recomendamos {completeToolData.name}
                    </h3>
                    <p className="mt-2 text-gray-600">
                      {completeToolData.why_we_recommend ||
                        `${completeToolData.name} destaca por su facilidad de uso y potentes funcionalidades que ayudan a mejorar la productividad y eficiencia en el trabajo diario.`}
                    </p>
                    <div className="mt-4 text-sm text-gray-500">
                      <p>
                        <span className="font-medium">Nota de transparencia:</span> Si te registras a través de nuestros
                        enlaces, podemos recibir una comisión sin coste adicional para ti. Solo recomendamos
                        herramientas que hemos probado y consideramos valiosas para nuestros lectores.
                      </p>
                    </div>
                  </div>

                  {/* NeuroScore detallado */}
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-secondary">NeuroScore™ Detallado</h3>
                    <p className="mt-2 text-gray-600">
                      Nuestra evaluación exhaustiva basada en pruebas reales, opiniones de usuarios y análisis de
                      expertos.
                    </p>
                    <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      <ToolRating
                        label="Facilidad de uso"
                        score={completeToolData.neuroScore.easeOfUse}
                        icon={<Users className="h-4 w-4" />}
                      />
                      <ToolRating
                        label="Funciones IA"
                        score={completeToolData.neuroScore.aiFeatures}
                        icon={<Star className="h-4 w-4" />}
                      />
                      <ToolRating
                        label="Relación calidad-precio"
                        score={completeToolData.neuroScore.valueForMoney}
                        icon={<DollarSign className="h-4 w-4" />}
                      />
                      <ToolRating
                        label="Soporte"
                        score={completeToolData.neuroScore.support}
                        icon={<Users className="h-4 w-4" />}
                      />
                      <ToolRating
                        label="Integración"
                        score={completeToolData.neuroScore.integration}
                        icon={<Users className="h-4 w-4" />}
                      />
                      <ToolRating
                        label="Tiempo de implementación"
                        score={completeToolData.neuroScore.implementationTime}
                        icon={<Clock className="h-4 w-4" />}
                      />
                    </div>
                  </div>

                  <div className="mt-8 grid gap-8 md:grid-cols-2">
                    <div>
                      <h3 className="text-xl font-semibold text-secondary">Ventajas</h3>
                      <ul className="mt-4 space-y-2">
                        {completeToolData.pros.map((pro: string, index: number) => (
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
                        {completeToolData.cons.map((con: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <X className="mr-2 h-5 w-5 flex-shrink-0 text-red-500" />
                            <span>{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Testimonios destacados */}
                  {completeToolData.testimonials && completeToolData.testimonials.length > 0 && (
                    <div className="mt-8">
                      <h3 className="text-xl font-semibold text-secondary">Lo que dicen los usuarios</h3>
                      <div className="mt-4 grid gap-4 md:grid-cols-2">
                        {completeToolData.testimonials.slice(0, 2).map((testimonial: any, index: number) => (
                          <UserTestimonial key={index} testimonial={testimonial} />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Alternativas */}
                  {completeToolData.alternatives && completeToolData.alternatives.length > 0 && (
                    <>
                      <h3 className="mt-8 text-xl font-semibold text-secondary">
                        Alternativas a {completeToolData.name}
                      </h3>
                      <div className="mt-4 grid gap-4 sm:grid-cols-2">
                        {completeToolData.alternatives.map((alt: any, index: number) => (
                          <Link
                            key={index}
                            href={`/herramientas/${alt.slug}`}
                            className="rounded-lg border bg-gray-50 p-4 transition-colors hover:border-primary/30 hover:bg-primary/5"
                          >
                            <div className="flex items-center">
                              <div className="relative mr-3 h-10 w-10 flex-shrink-0 overflow-hidden rounded-md">
                                <SafeImage src={alt.image_url} alt={alt.name} fill className="object-contain" />
                              </div>
                              <div>
                                <h4 className="font-semibold text-secondary">{alt.name}</h4>
                                <div className="mt-1 flex items-center">
                                  <div className="mr-2 text-sm font-medium text-primary">{alt.score}</div>
                                  <div className="text-xs text-gray-500">NeuroScore™</div>
                                </div>
                              </div>
                            </div>
                            <p className="mt-2 text-sm text-gray-600">{alt.description}</p>
                            <p className="mt-2 text-sm font-medium text-primary">Ver análisis →</p>
                          </Link>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="features" className="mt-6">
                <div className="rounded-lg border bg-white p-6 shadow-sm">
                  <h2 className="text-2xl font-bold text-secondary">Características principales</h2>
                  <p className="mt-2 text-gray-600">
                    Análisis detallado de las funcionalidades que hacen destacar a {completeToolData.name}.
                  </p>
                  <div className="mt-6 space-y-6">
                    {completeToolData.features.map((feature: any, index: number) => (
                      <div key={index} className="rounded-lg border bg-gray-50 p-4">
                        <h3 className="text-lg font-semibold text-secondary">{feature.name}</h3>
                        <p className="mt-2 text-gray-600">{feature.description}</p>
                        {feature.image_url && (
                          <div className="mt-4 overflow-hidden rounded-lg">
                            <SafeImage
                              src={feature.image_url}
                              alt={feature.name}
                              width={800}
                              height={400}
                              className="w-full object-cover"
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Comparación con competidores */}
                  {completeToolData.alternatives && completeToolData.alternatives.length > 0 && (
                    <div className="mt-8">
                      <h3 className="text-xl font-semibold text-secondary">Comparación de características</h3>
                      <p className="mt-2 text-gray-600">
                        Cómo se compara {completeToolData.name} con sus principales alternativas.
                      </p>
                      <div className="mt-4">
                        <FeatureComparison
                          mainTool={completeToolData}
                          competitors={completeToolData.alternatives.slice(0, 2)}
                          features={completeToolData.comparisonFeatures}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="pricing" className="mt-6">
                <div className="rounded-lg border bg-white p-6 shadow-sm">
                  <h2 className="text-2xl font-bold text-secondary">Planes y precios</h2>
                  <p className="mt-2 text-gray-600">
                    Análisis detallado de las opciones de precios de {completeToolData.name}.
                  </p>

                  <div className="mt-6">
                    <PricingTable
                      plans={completeToolData.pricing || []}
                      toolName={completeToolData.name}
                      affiliateUrl={completeToolData.affiliate_url}
                    />
                  </div>

                  {completeToolData.pricing_analysis && (
                    <div className="mt-8 rounded-lg bg-gray-50 p-6">
                      <h3 className="text-lg font-semibold text-secondary">Análisis de precios</h3>
                      <p className="mt-2 text-gray-600">{completeToolData.pricing_analysis}</p>
                    </div>
                  )}

                  {completeToolData.special_offer && (
                    <div className="mt-8">
                      <AffiliateBanner
                        toolName={completeToolData.name}
                        offer={completeToolData.special_offer}
                        affiliateUrl={completeToolData.affiliate_url}
                        imageUrl={completeToolData.imageUrl}
                      />
                    </div>
                  )}

                  <p className="mt-6 text-sm text-gray-500">
                    * Los precios pueden variar. Última actualización: {completeToolData.lastUpdated}. Consulta el sitio
                    web oficial para obtener la información más actualizada.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="usecases" className="mt-6">
                <div className="rounded-lg border bg-white p-6 shadow-sm">
                  <h2 className="text-2xl font-bold text-secondary">Casos de uso</h2>
                  <p className="mt-2 text-gray-600">
                    Descubre cómo {completeToolData.name} puede resolver problemas específicos en diferentes escenarios.
                  </p>

                  <div className="mt-6 grid gap-6 md:grid-cols-2">
                    {completeToolData.useCases.map((useCase: any, index: number) => (
                      <UseCaseCard key={index} useCase={useCase} />
                    ))}
                  </div>

                  {/* Ejemplos reales */}
                  {completeToolData.realExamples && completeToolData.realExamples.length > 0 && (
                    <div className="mt-8">
                      <h3 className="text-xl font-semibold text-secondary">Ejemplos reales</h3>
                      <p className="mt-2 text-gray-600">Casos de éxito y ejemplos prácticos de implementación.</p>
                      <div className="mt-4 space-y-6">
                        {completeToolData.realExamples.map((example: any, index: number) => (
                          <div key={index} className="rounded-lg border p-6">
                            <h4 className="text-lg font-semibold text-secondary">{example.title}</h4>
                            <p className="mt-2 text-sm text-gray-500">{example.company}</p>
                            <p className="mt-2 text-gray-600">{example.description}</p>
                            {example.results && (
                              <div className="mt-4">
                                <h5 className="font-medium text-secondary">Resultados:</h5>
                                <ul className="mt-2 space-y-1 text-gray-600">
                                  {example.results.map((result: string, i: number) => (
                                    <li key={i} className="flex items-start">
                                      <Check className="mr-2 h-5 w-5 flex-shrink-0 text-green-500" />
                                      <span>{result}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="mt-6">
                <div className="rounded-lg border bg-white p-6 shadow-sm">
                  <h2 className="text-2xl font-bold text-secondary">Opiniones de usuarios</h2>
                  <p className="mt-2 text-gray-600">
                    Experiencias reales de usuarios que utilizan {completeToolData.name} en su día a día.
                  </p>

                  <div className="mt-6 space-y-6">
                    {completeToolData.reviews && completeToolData.reviews.length > 0 ? (
                      completeToolData.reviews.map((review: any, index: number) => (
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
                            Por {review.author} • {new Date(review.review_date).toLocaleDateString("es-ES")}
                          </p>
                          <p className="mt-2 text-gray-600">{review.comment}</p>
                          <div className="mt-4 flex items-center gap-4">
                            <button className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-primary">
                              <ThumbsUp className="h-4 w-4" />
                              <span>Útil ({review.helpful_count || 0})</span>
                            </button>
                            <button className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-primary">
                              <ThumbsDown className="h-4 w-4" />
                              <span>No útil ({review.unhelpful_count || 0})</span>
                            </button>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="rounded-lg border border-dashed border-gray-300 p-8 text-center">
                        <p className="text-gray-500">Aún no hay opiniones para esta herramienta.</p>
                      </div>
                    )}
                  </div>

                  <div className="mt-8 rounded-lg border border-dashed border-gray-300 p-6 text-center">
                    <h3 className="text-lg font-semibold text-secondary">¿Has usado {completeToolData.name}?</h3>
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
              ¿Listo para probar {completeToolData.name}?
            </h2>
            <p className="mt-4 text-lg text-white/90">
              {completeToolData.ctaText ||
                `Descubre cómo ${completeToolData.name} puede transformar tu productividad y optimizar tu trabajo remoto.`}
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link
                  href={completeToolData.affiliate_url || getOfficialUrl(completeToolData.name)}
                  target="_blank"
                  rel="noopener sponsored"
                  className="inline-flex items-center gap-2"
                >
                  {completeToolData.special_offer ? "Aprovechar oferta especial" : "Probar gratis"}
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

      {/* Related Tools Section */}
      {completeToolData.relatedTools && completeToolData.relatedTools.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-heading text-2xl font-bold text-secondary sm:text-3xl">Herramientas relacionadas</h2>
              <p className="mt-4 text-lg text-gray-600">
                Explora otras herramientas similares que podrían interesarte.
              </p>
            </div>

            <div className="mt-12">
              <RelatedTools
                currentTool={completeToolData.name}
                category={completeToolData.category}
                tools={completeToolData.relatedTools || []}
              />
            </div>
          </div>
        </section>
      )}
    </>
  )
}
