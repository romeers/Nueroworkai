import Link from "next/link"
import { Button } from "@/components/ui/button"
import ResponsiveComparisonTable from "@/components/responsive-comparison-table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Check, X } from "lucide-react"
import { getCachedToolBySlug } from "@/lib/db"

// Función para obtener datos de la comparativa basados en el slug
async function getComparisonData(slug: string) {
  // Extraer los slugs de las herramientas a comparar
  const toolSlugs = slug.split("-vs-")

  if (toolSlugs.length < 2) {
    return null
  }

  // Obtener datos de cada herramienta
  const toolsData = await Promise.all(
    toolSlugs.map(async (toolSlug) => {
      return await getCachedToolBySlug(toolSlug)
    }),
  )

  // Verificar que todas las herramientas existan
  if (toolsData.some((tool) => tool === null)) {
    return null
  }

  // Extraer características comunes para comparar
  const allFeatures = toolsData.flatMap((tool) => tool.features.map((feature) => feature.name))

  // Eliminar duplicados
  const uniqueFeatures = [...new Set(allFeatures)]

  // Crear objeto de herramientas con formato para la tabla de comparación
  const tools = toolsData.map((tool) => {
    // Crear un objeto de características para la comparación
    const featureMap = {}
    uniqueFeatures.forEach((feature) => {
      // Verificar si la herramienta tiene esta característica
      const hasFeature = tool.features.some((f) => f.name === feature)
      featureMap[feature] = hasFeature
    })

    let logo = tool.image_url

    // Actualizar las referencias a las imágenes
    if (logo === "/notion-ai-blue.png") {
      logo = "/notion-logo.png"
    } else if (logo === "/zapier-blue-background.png") {
      logo = "/zapier-logo.png"
    } else if (logo === "/clickup-blue-background.png") {
      logo = "/clickup-logo.png"
    } else if (logo === "/fireflies-ai-logo-blue.png") {
      logo = "/fireflies-logo-full.png"
    } else if (logo === "/otter-ai-logo-inspired-design.png") {
      logo = "/otter-ai-logo-full.png"
    } else if (logo === "/grammarly-blue.png") {
      logo = "/grammarly-logo.png"
    } else if (logo === "/ai-logo-blue.png") {
      logo = "/jasper-logo.png"
    }

    return {
      name: tool.name,
      logo: logo,
      price: tool.pricing && tool.pricing.length > 0 ? `Desde ${tool.pricing[0].price}` : "Consultar precios",
      features: featureMap,
      rating: tool.score,
      url: `/herramientas/${tool.slug}`,
    }
  })

  // Generar título y descripción de la comparativa
  const title = toolsData.map((tool) => tool.name).join(" vs ")
  const category = toolsData[0].category_name

  // Generar una conclusión basada en los datos
  let conclusion = `Comparativa entre ${toolsData.map((tool) => tool.name).join(" y ")}, dos herramientas populares en la categoría de ${category}.`

  if (toolsData[0].score > toolsData[1].score) {
    conclusion += ` ${toolsData[0].name} tiene una puntuación más alta (${toolsData[0].score}) que ${toolsData[1].name} (${toolsData[1].score}), lo que sugiere que podría ser una mejor opción para la mayoría de los usuarios.`
  } else if (toolsData[1].score > toolsData[0].score) {
    conclusion += ` ${toolsData[1].name} tiene una puntuación más alta (${toolsData[1].score}) que ${toolsData[0].name} (${toolsData[0].score}), lo que sugiere que podría ser una mejor opción para la mayoría de los usuarios.`
  } else {
    conclusion += ` Ambas herramientas tienen una puntuación similar, por lo que la elección dependerá de tus necesidades específicas.`
  }

  return {
    title,
    description: `Comparativa detallada entre ${toolsData.map((tool) => tool.name).join(" y ")}.`,
    category,
    tools,
    features: uniqueFeatures,
    conclusion,
    recommendation: `Para obtener más información sobre cada herramienta, te recomendamos revisar las reseñas detalladas de ${toolsData.map((tool) => tool.name).join(" y ")}.`,
  }
}

export default async function ComparisonPage({ params }: { params: { slug: string } }) {
  const comparisonData = await getComparisonData(params.slug)

  if (!comparisonData) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-secondary">Comparativa no encontrada</h1>
        <p className="mt-4 text-gray-600">Lo sentimos, no pudimos encontrar la comparativa que estás buscando.</p>
        <Button asChild className="mt-8 bg-primary hover:bg-primary/90">
          <Link href="/herramientas/comparar">Ver todas las comparativas</Link>
        </Button>
      </div>
    )
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-light to-sky py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Link href="/herramientas/comparar" className="inline-flex items-center text-primary mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver a comparativas
            </Link>
            <h1 className="font-heading text-3xl font-bold tracking-tight text-secondary sm:text-4xl md:text-5xl">
              {comparisonData.title}
            </h1>
            <p className="mt-4 text-lg text-gray-600">{comparisonData.description}</p>
            <div className="mt-6 inline-flex rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              {comparisonData.category}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-secondary mb-6">Comparativa detallada</h2>

          <ResponsiveComparisonTable
            category={comparisonData.category}
            tools={comparisonData.tools}
            features={comparisonData.features}
          />

          <div className="mt-12 bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-secondary mb-4">Conclusión</h3>
            <p className="text-gray-600">{comparisonData.conclusion}</p>

            <h3 className="text-xl font-bold text-secondary mt-6 mb-4">Nuestra recomendación</h3>
            <p className="text-gray-600">{comparisonData.recommendation}</p>
          </div>
        </div>
      </section>

      {/* Detailed Comparison Tabs */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-secondary mb-6">Análisis en profundidad</h2>

          <Tabs defaultValue="features" className="w-full">
            <TabsList className="mb-8 grid w-full grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="features">Características</TabsTrigger>
              <TabsTrigger value="pricing">Precios</TabsTrigger>
              <TabsTrigger value="usecases">Casos de uso</TabsTrigger>
              <TabsTrigger value="alternatives">Alternativas</TabsTrigger>
            </TabsList>

            <TabsContent value="features" className="mt-6">
              <div className="bg-white rounded-lg border p-6">
                <h3 className="text-xl font-bold text-secondary mb-4">Comparación de características</h3>
                <p className="text-gray-600 mb-6">
                  Análisis detallado de las principales características de {comparisonData.tools[0].name} y{" "}
                  {comparisonData.tools[1].name}.
                </p>

                {/* Contenido detallado de características */}
                <div className="space-y-6">
                  {comparisonData.features.map((feature: string) => (
                    <div key={feature} className="border-b pb-6">
                      <h4 className="font-semibold text-secondary mb-2">{feature}</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {comparisonData.tools.map((tool: any) => (
                          <div key={`${tool.name}-${feature}`} className="bg-gray-50 p-4 rounded-lg">
                            <div className="font-medium text-secondary mb-2">{tool.name}</div>
                            <div className="flex items-start">
                              {tool.features[feature] ? (
                                <>
                                  <div className="flex-shrink-0 mt-0.5">
                                    <Check className="h-5 w-5 text-green-500" />
                                  </div>
                                  <p className="ml-2 text-sm text-gray-600">Disponible</p>
                                </>
                              ) : (
                                <>
                                  <div className="flex-shrink-0 mt-0.5">
                                    <X className="h-5 w-5 text-red-500" />
                                  </div>
                                  <p className="ml-2 text-sm text-gray-600">No disponible</p>
                                </>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Otros tabs con contenido similar */}
            <TabsContent value="pricing" className="mt-6">
              <div className="bg-white rounded-lg border p-6">
                <h3 className="text-xl font-bold text-secondary mb-4">Comparación de precios</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {comparisonData.tools.map((tool: any) => (
                    <div key={`pricing-${tool.name}`} className="border rounded-lg p-4">
                      <h4 className="font-semibold text-secondary mb-2">{tool.name}</h4>
                      <p className="text-lg font-bold text-primary">{tool.price}</p>
                      <Button asChild className="mt-4 w-full">
                        <Link href={tool.url}>Ver planes detallados</Link>
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="usecases" className="mt-6">
              <div className="bg-white rounded-lg border p-6">
                <h3 className="text-xl font-bold text-secondary mb-4">Casos de uso ideales</h3>
                <p className="text-gray-600 mb-6">Cada herramienta tiene escenarios donde destaca especialmente.</p>
              </div>
            </TabsContent>

            <TabsContent value="alternatives" className="mt-6">
              <div className="bg-white rounded-lg border p-6">
                <h3 className="text-xl font-bold text-secondary mb-4">Alternativas a considerar</h3>
                <p className="text-gray-600 mb-6">
                  Si ninguna de estas herramientas se ajusta a tus necesidades, considera estas alternativas.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              ¿Listo para tomar una decisión?
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Prueba la herramienta que mejor se adapte a tus necesidades o explora más opciones.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link href={comparisonData.tools[0].url}>Probar {comparisonData.tools[0].name}</Link>
              </Button>
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link href={comparisonData.tools[1].url}>Probar {comparisonData.tools[1].name}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
