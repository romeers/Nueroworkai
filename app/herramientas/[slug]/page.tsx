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
        implementationTime: 8.5,
      },
      url: "https://notion.so/product/ai",
      affiliateUrl: "https://notion.so/product/ai?ref=neuroworkai",
      verified: true,
      specialOffer: "7 días de prueba gratuita + 20% de descuento en el primer año",
      whyWeRecommend:
        "Notion AI destaca por su perfecta integración con el ecosistema de Notion, lo que lo convierte en una solución ideal para equipos que ya utilizan esta plataforma. Su capacidad para generar contenido contextual, resumir documentos y traducir textos sin salir del espacio de trabajo ahorra tiempo considerable y mejora la productividad.",
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
          imageUrl: "/notion-ai-text-generation.png",
        },
        {
          name: "Resumen automático",
          description: "Resume documentos largos o reuniones en puntos clave.",
          imageUrl: "/notion-ai-summarization.png",
        },
        {
          name: "Traducción",
          description: "Traduce contenido a múltiples idiomas con un solo clic.",
          imageUrl: "/notion-ai-translation-workflow.png",
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
      comparisonFeatures: [
        "Generación de texto",
        "Resumen automático",
        "Traducción",
        "Corrección gramatical",
        "Integración con workspace",
      ],
      pricing: [
        {
          plan: "Personal",
          price: "$10/mes",
          features: ["20 créditos de IA al mes", "Todas las funciones básicas de IA", "Uso personal"],
          recommended: false,
          affiliateUrl: "https://notion.so/product/ai/personal?ref=neuroworkai",
        },
        {
          plan: "Plus",
          price: "$15/mes",
          features: ["50 créditos de IA al mes", "Todas las funciones de IA", "Uso personal o en equipos pequeños"],
          recommended: true,
          affiliateUrl: "https://notion.so/product/ai/plus?ref=neuroworkai",
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
          recommended: false,
          affiliateUrl: "https://notion.so/product/ai/business?ref=neuroworkai",
        },
      ],
      pricingAnalysis:
        "Notion AI ofrece un buen equilibrio entre precio y funcionalidades. El plan Plus es el más recomendable para la mayoría de usuarios, ya que proporciona suficientes créditos para un uso regular y acceso a todas las funciones de IA. Para equipos grandes, el plan Business puede resultar costoso, pero las funciones adicionales de administración y seguridad justifican el precio para empresas que priorizan estos aspectos.",
      useCases: [
        {
          title: "Creación de contenido",
          description: "Genera borradores de artículos, publicaciones de blog o correos electrónicos rápidamente.",
          icon: "Pencil",
          steps: [
            "Selecciona la opción 'Escribir con IA' en Notion",
            "Proporciona un prompt claro sobre el contenido que necesitas",
            "Edita y refina el resultado según tus necesidades",
          ],
        },
        {
          title: "Documentación de proyectos",
          description: "Resume reuniones y crea documentación clara y concisa para tu equipo.",
          icon: "FileText",
          steps: [
            "Toma notas durante la reunión en Notion",
            "Usa la función 'Resumir con IA' para condensar la información",
            "Organiza los puntos clave en una estructura clara",
          ],
        },
        {
          title: "Gestión del conocimiento",
          description: "Organiza y resume información importante para facilitar su acceso y comprensión.",
          icon: "Brain",
          steps: [
            "Recopila información relevante en una página de Notion",
            "Utiliza IA para resumir y estructurar el contenido",
            "Crea una base de conocimiento accesible para todo el equipo",
          ],
        },
      ],
      realExamples: [
        {
          title: "Optimización del proceso de creación de contenido en Acme Marketing",
          company: "Acme Marketing",
          description:
            "Acme Marketing implementó Notion AI para su equipo de contenido, reduciendo el tiempo de creación de artículos de blog en un 40%. El equipo utiliza la IA para generar borradores iniciales y resumir investigaciones, permitiéndoles enfocarse en la estrategia y el refinamiento.",
          results: [
            "Reducción del 40% en tiempo de creación de contenido",
            "Aumento del 25% en la producción mensual de artículos",
            "Mejora en la consistencia y calidad del contenido",
          ],
        },
        {
          title: "Documentación eficiente en TechSolutions",
          company: "TechSolutions",
          description:
            "El equipo de desarrollo de TechSolutions adoptó Notion AI para mejorar su documentación técnica. Utilizan la IA para resumir reuniones de planificación, generar documentación de API y traducir contenido para su equipo internacional.",
          results: [
            "Reducción del 60% en tiempo dedicado a documentación",
            "Mejora en la claridad y accesibilidad de la documentación técnica",
            "Facilitación de la colaboración entre equipos internacionales",
          ],
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
          imageUrl: "/ai-logo-blue.png",
          score: 8.7,
        },
        {
          name: "Grammarly",
          slug: "grammarly",
          description: "Enfocado en corrección gramatical y mejora de textos.",
          imageUrl: "/grammarly-blue.png",
          score: 8.9,
        },
      ],
      relatedTools: [
        {
          name: "Jasper",
          slug: "jasper",
          description: "Plataforma especializada en generación de contenido con IA.",
          imageUrl: "/ai-logo-blue.png",
          category: "Escritura IA",
          score: 8.7,
        },
        {
          name: "Grammarly",
          slug: "grammarly",
          description: "Enfocado en corrección gramatical y mejora de textos.",
          imageUrl: "/grammarly-blue.png",
          category: "Escritura IA",
          score: 8.9,
        },
        {
          name: "ClickUp",
          slug: "clickup",
          description: "Plataforma todo en uno para gestión de proyectos con funciones de IA.",
          imageUrl: "/clickup-blue-background.png",
          category: "Gestión de tareas",
          score: 8.8,
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
      testimonials: [
        {
          quote:
            "Notion AI ha revolucionado nuestra forma de documentar proyectos. Ahorramos al menos 5 horas semanales en la creación y organización de contenido.",
          author: "Laura Martínez",
          role: "Project Manager",
          company: "Digital Innovators",
          avatarUrl: "/testimonial-avatar-1.png",
        },
        {
          quote:
            "La capacidad de resumir reuniones y generar documentación clara ha mejorado significativamente nuestra comunicación interna.",
          author: "Javier Rodríguez",
          role: "Team Lead",
          company: "TechSolutions",
          avatarUrl: "/testimonial-avatar-2.png",
        },
      ],
      ctaText: "Prueba Notion AI gratis durante 7 días y descubre cómo puede transformar tu productividad.",
      lastUpdated: "15 de abril, 2023",
      reviewedBy: {
        name: "Ana Gómez",
        role: "Especialista en Productividad",
        avatarUrl: "/expert-ana-gomez.png",
        bio: "Ana es experta en herramientas de productividad y ha analizado más de 50 soluciones de IA para trabajo remoto.",
      },
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
      {/* Schema.org markup para SEO */}
      <ToolSchema tool={toolData} slug={params.slug} />

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
                <VerifiedBadge verified={toolData.verified} />
              </div>
              <h1 className="font-heading text-3xl font-bold tracking-tight text-secondary sm:text-4xl md:text-5xl">
                {toolData.name}
              </h1>
              <p className="mt-4 text-lg text-gray-600">{toolData.description}</p>

              {/* NeuroScore */}
              <div className="mt-6 inline-flex items-center rounded-xl bg-primary/10 px-4 py-2">
                <div className="mr-2 rounded-full bg-primary px-3 py-1 text-lg font-bold text-white">
                  {toolData.neuroScore.overall}
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
                    href={toolData.affiliateUrl || toolData.url}
                    target="_blank"
                    rel="noopener sponsored"
                    className="inline-flex items-center gap-2"
                  >
                    Probar Gratis
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href={`/comparativas/personalizado?tool=${params.slug}`}>Comparar con otras</Link>
                </Button>
              </div>

              {/* Oferta especial */}
              {toolData.specialOffer && (
                <div className="mt-4 rounded-md bg-green-50 p-2 text-sm text-green-700 border border-green-200">
                  <span className="font-semibold">Oferta Exclusiva:</span> {toolData.specialOffer}
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
                <ExpertAuthor author={toolData.reviewedBy} />
              </div>
              <div className="text-sm text-gray-500">Actualizado: {toolData.lastUpdated}</div>
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
                  <p className="mt-4 text-gray-600">{toolData.longDescription}</p>

                  {/* Por qué lo recomendamos */}
                  <div className="mt-8 rounded-lg bg-primary/5 p-6 border border-primary/10">
                    <h3 className="flex items-center text-xl font-semibold text-secondary">
                      <Award className="mr-2 h-5 w-5 text-primary" />
                      Por qué recomendamos {toolData.name}
                    </h3>
                    <p className="mt-2 text-gray-600">{toolData.whyWeRecommend}</p>
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
                        score={toolData.neuroScore.easeOfUse}
                        icon={<Users className="h-4 w-4" />}
                      />
                      <ToolRating
                        label="Funciones IA"
                        score={toolData.neuroScore.aiFeatures}
                        icon={<Star className="h-4 w-4" />}
                      />
                      <ToolRating
                        label="Relación calidad-precio"
                        score={toolData.neuroScore.valueForMoney}
                        icon={<DollarSign className="h-4 w-4" />}
                      />
                      <ToolRating
                        label="Soporte"
                        score={toolData.neuroScore.support}
                        icon={<Users className="h-4 w-4" />}
                      />
                      <ToolRating
                        label="Integración"
                        score={toolData.neuroScore.integration}
                        icon={<Users className="h-4 w-4" />}
                      />
                      <ToolRating
                        label="Tiempo de implementación"
                        score={toolData.neuroScore.implementationTime}
                        icon={<Clock className="h-4 w-4" />}
                      />
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

                  {/* Testimonios destacados */}
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-secondary">Lo que dicen los usuarios</h3>
                    <div className="mt-4 grid gap-4 md:grid-cols-2">
                      {toolData.testimonials.slice(0, 2).map((testimonial: any, index: number) => (
                        <UserTestimonial key={index} testimonial={testimonial} />
                      ))}
                    </div>
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
                        <div className="flex items-center">
                          <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-md mr-3">
                            <SafeImage src={alt.imageUrl} alt={alt.name} fill className="object-contain" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-secondary">{alt.name}</h4>
                            <div className="flex items-center mt-1">
                              <div className="text-sm font-medium text-primary mr-2">{alt.score}</div>
                              <div className="text-xs text-gray-500">NeuroScore™</div>
                            </div>
                          </div>
                        </div>
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
                  <p className="mt-2 text-gray-600">
                    Análisis detallado de las funcionalidades que hacen destacar a {toolData.name}.
                  </p>
                  <div className="mt-6 space-y-6">
                    {toolData.features.map((feature: any, index: number) => (
                      <div key={index} className="rounded-lg border bg-gray-50 p-4">
                        <h3 className="text-lg font-semibold text-secondary">{feature.name}</h3>
                        <p className="mt-2 text-gray-600">{feature.description}</p>
                        {feature.imageUrl && (
                          <div className="mt-4 rounded-lg overflow-hidden">
                            <SafeImage
                              src={feature.imageUrl}
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
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-secondary">Comparación de características</h3>
                    <p className="mt-2 text-gray-600">
                      Cómo se compara {toolData.name} con sus principales alternativas.
                    </p>
                    <div className="mt-4">
                      <FeatureComparison
                        mainTool={toolData}
                        competitors={toolData.alternatives.slice(0, 2)}
                        features={toolData.comparisonFeatures}
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="pricing" className="mt-6">
                <div className="rounded-lg border bg-white p-6 shadow-sm">
                  <h2 className="text-2xl font-bold text-secondary">Planes y precios</h2>
                  <p className="mt-2 text-gray-600">
                    Análisis detallado de las opciones de precios de {toolData.name}.
                  </p>

                  <div className="mt-6">
                    <PricingTable
                      plans={toolData.pricing}
                      toolName={toolData.name}
                      affiliateUrl={toolData.affiliateUrl}
                    />
                  </div>

                  {toolData.pricingAnalysis && (
                    <div className="mt-8 rounded-lg bg-gray-50 p-6">
                      <h3 className="text-lg font-semibold text-secondary">Análisis de precios</h3>
                      <p className="mt-2 text-gray-600">{toolData.pricingAnalysis}</p>
                    </div>
                  )}

                  {toolData.specialOffer && (
                    <div className="mt-8">
                      <AffiliateBanner
                        toolName={toolData.name}
                        offer={toolData.specialOffer}
                        affiliateUrl={toolData.affiliateUrl}
                        imageUrl={toolData.imageUrl}
                      />
                    </div>
                  )}

                  <p className="mt-6 text-sm text-gray-500">
                    * Los precios pueden variar. Última actualización: {toolData.lastUpdated}. Consulta el sitio web
                    oficial para obtener la información más actualizada.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="usecases" className="mt-6">
                <div className="rounded-lg border bg-white p-6 shadow-sm">
                  <h2 className="text-2xl font-bold text-secondary">Casos de uso</h2>
                  <p className="mt-2 text-gray-600">
                    Descubre cómo {toolData.name} puede resolver problemas específicos en diferentes escenarios.
                  </p>

                  <div className="mt-6 grid gap-6 md:grid-cols-2">
                    {toolData.useCases.map((useCase: any, index: number) => (
                      <UseCaseCard key={index} useCase={useCase} />
                    ))}
                  </div>

                  {/* Ejemplos reales */}
                  {toolData.realExamples && toolData.realExamples.length > 0 && (
                    <div className="mt-8">
                      <h3 className="text-xl font-semibold text-secondary">Ejemplos reales</h3>
                      <p className="mt-2 text-gray-600">Casos de éxito y ejemplos prácticos de implementación.</p>
                      <div className="mt-4 space-y-6">
                        {toolData.realExamples.map((example: any, index: number) => (
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
                    Experiencias reales de usuarios que utilizan {toolData.name} en su día a día.
                  </p>

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
              {toolData.ctaText ||
                `Descubre cómo ${toolData.name} puede transformar tu productividad y optimizar tu trabajo remoto.`}
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link
                  href={toolData.affiliateUrl || toolData.url}
                  target="_blank"
                  rel="noopener sponsored"
                  className="inline-flex items-center gap-2"
                >
                  {toolData.specialOffer ? "Aprovechar oferta especial" : "Probar gratis"}
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
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-2xl font-bold text-secondary sm:text-3xl">Herramientas relacionadas</h2>
            <p className="mt-4 text-lg text-gray-600">Explora otras herramientas similares que podrían interesarte.</p>
          </div>

          <div className="mt-12">
            <RelatedTools
              currentTool={toolData.name}
              category={toolData.category}
              tools={toolData.relatedTools || toolData.alternatives}
            />
          </div>
        </div>
      </section>
    </>
  )
}
