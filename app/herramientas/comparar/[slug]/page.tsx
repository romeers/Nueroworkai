import Link from "next/link"
import { Button } from "@/components/ui/button"
import ResponsiveComparisonTable from "@/components/responsive-comparison-table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Check, X } from "lucide-react"

// Función para obtener datos de la comparativa basados en el slug
function getComparisonData(slug: string) {
  // Aquí normalmente obtendrías los datos de una API o base de datos
  // Para este ejemplo, usaremos datos estáticos

  const comparisons: Record<string, any> = {
    "notion-ai-vs-jasper": {
      title: "Notion AI vs Jasper",
      description: "Comparativa detallada entre dos de las herramientas de escritura con IA más populares.",
      category: "Escritura IA",
      tools: [
        {
          name: "Notion AI",
          logo: "/notion-ai-blue.png",
          price: "Desde $10/mes",
          features: {
            "Generación de texto": true,
            "Corrección gramatical": true,
            "Resumen automático": true,
            Traducción: true,
            "Integración con workspace": true,
          },
          rating: 4.5,
          url: "/herramientas/notion-ai",
        },
        {
          name: "Jasper",
          logo: "/ai-logo-blue.png",
          price: "Desde $39/mes",
          features: {
            "Generación de texto": true,
            "Corrección gramatical": true,
            "Resumen automático": true,
            Traducción: false,
            "Integración con workspace": false,
          },
          rating: 4.2,
          url: "/herramientas/jasper",
        },
      ],
      features: [
        "Generación de texto",
        "Corrección gramatical",
        "Resumen automático",
        "Traducción",
        "Integración con workspace",
      ],
      conclusion:
        "Notion AI es ideal para usuarios que ya utilizan Notion y necesitan funcionalidades de IA integradas en su espacio de trabajo. Jasper, por otro lado, es una solución más especializada para la generación de contenido de marketing y ofrece más opciones avanzadas para este propósito específico.",
      recommendation:
        "Si ya utilizas Notion para organizar tu trabajo, Notion AI es la opción más conveniente. Si necesitas generar contenido de marketing de forma regular, Jasper podría ser más adecuado a pesar de su mayor precio.",
    },
    "zapier-vs-make": {
      title: "Zapier vs Make",
      description: "Comparación exhaustiva de las principales plataformas de automatización sin código.",
      category: "Automatización",
      tools: [
        {
          name: "Zapier",
          logo: "/zapier-blue-background.png",
          price: "Desde $19.99/mes",
          features: {
            Integraciones: true,
            "Automatizaciones complejas": true,
            "Plantillas predefinidas": true,
            "Interfaz sin código": true,
            "API personalizada": true,
          },
          rating: 4.6,
          url: "/herramientas/zapier",
        },
        {
          name: "Make",
          logo: "/abstract-geometric-logo.png",
          price: "Desde $9/mes",
          features: {
            Integraciones: true,
            "Automatizaciones complejas": true,
            "Plantillas predefinidas": true,
            "Interfaz sin código": true,
            "API personalizada": true,
          },
          rating: 4.4,
          url: "/herramientas/make",
        },
      ],
      features: [
        "Integraciones",
        "Automatizaciones complejas",
        "Plantillas predefinidas",
        "Interfaz sin código",
        "API personalizada",
      ],
      conclusion:
        "Tanto Zapier como Make ofrecen capacidades similares para automatizar flujos de trabajo entre aplicaciones. Zapier tiene una interfaz más sencilla y un mayor número de integraciones, mientras que Make ofrece más flexibilidad para automatizaciones complejas a un precio más accesible.",
      recommendation:
        "Para automatizaciones sencillas y usuarios principiantes, Zapier es más fácil de usar. Para flujos de trabajo complejos y usuarios técnicos que buscan más control, Make ofrece mejor relación calidad-precio.",
    },
  }

  return comparisons[slug] || null
}

export default function ComparisonPage({ params }: { params: { slug: string } }) {
  const comparisonData = getComparisonData(params.slug)

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

                {/* Aquí iría el contenido detallado de características */}
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
                                  <p className="ml-2 text-sm text-gray-600">
                                    {feature === "Generación de texto" &&
                                      tool.name === "Notion AI" &&
                                      "Ofrece generación de texto contextual dentro del entorno de Notion, ideal para notas, documentación y contenido estructurado."}
                                    {feature === "Generación de texto" &&
                                      tool.name === "Jasper" &&
                                      "Especializado en generación de contenido de marketing con plantillas específicas para diferentes formatos y tonos."}
                                    {/* Aquí irían más descripciones específicas */}
                                  </p>
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
                {/* Contenido de precios */}
              </div>
            </TabsContent>

            <TabsContent value="usecases" className="mt-6">
              <div className="bg-white rounded-lg border p-6">
                <h3 className="text-xl font-bold text-secondary mb-4">Casos de uso ideales</h3>
                {/* Contenido de casos de uso */}
              </div>
            </TabsContent>

            <TabsContent value="alternatives" className="mt-6">
              <div className="bg-white rounded-lg border p-6">
                <h3 className="text-xl font-bold text-secondary mb-4">Alternativas a considerar</h3>
                {/* Contenido de alternativas */}
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
