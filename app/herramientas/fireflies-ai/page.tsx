import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, X, ExternalLink, Award, Clock, DollarSign, Users, Mic, Search, FileText, BarChart2 } from "lucide-react"
import SafeImage from "@/components/safe-image"
import { getToolBySlug } from "@/lib/static-data"
import { notFound } from "next/navigation"

export const metadata = {
  title: "Fireflies.ai: Transcripción y análisis de reuniones con IA | NeuroWorkAI",
  description:
    "Descubre cómo Fireflies.ai transcribe, resume, busca y analiza tus reuniones automáticamente, ahorrando tiempo y mejorando la productividad de tu equipo.",
  openGraph: {
    title: "Fireflies.ai: Transcripción y análisis de reuniones con IA | NeuroWorkAI",
    description:
      "Descubre cómo Fireflies.ai transcribe, resume, busca y analiza tus reuniones automáticamente, ahorrando tiempo y mejorando la productividad de tu equipo.",
    images: [{ url: "/fireflies-banner.jpeg" }],
  },
}

export default async function FirefliesAIPage() {
  // Obtener datos de la herramienta
  const toolData = getToolBySlug("fireflies-ai")

  // Si no se encuentra la herramienta, mostrar la página 404
  if (!toolData) {
    notFound()
  }

  // Datos adicionales específicos para Fireflies.ai
  const firefliesData = {
    pricingPlans: [
      {
        name: "Free",
        price: "$0/mes",
        features: [
          "10 horas de transcripción al mes",
          "Transcripción automática",
          "Búsqueda básica",
          "Integración con calendario",
          "Acceso a la aplicación móvil",
        ],
        recommended: false,
      },
      {
        name: "Pro",
        price: "$10/mes por usuario",
        features: [
          "Horas ilimitadas de transcripción",
          "Resúmenes con IA",
          "Búsqueda avanzada",
          "Análisis de conversaciones",
          "Integración con herramientas de trabajo",
          "Soporte prioritario",
        ],
        recommended: true,
      },
      {
        name: "Business",
        price: "Personalizado",
        features: [
          "Todo lo del plan Pro",
          "Administración avanzada",
          "Seguridad empresarial",
          "API y webhooks",
          "Soporte dedicado",
          "Personalización de marca",
        ],
        recommended: false,
      },
    ],
    useCases: [
      {
        title: "Equipos remotos",
        description:
          "Ideal para equipos distribuidos que necesitan mantener a todos informados y alineados sin importar la zona horaria.",
        steps: [
          "Programa reuniones en tu plataforma favorita (Zoom, Teams, Google Meet)",
          "Invita a Fireflies.ai a la reunión",
          "Accede a la transcripción y resumen después de la reunión",
          "Comparte los insights con miembros del equipo que no pudieron asistir",
        ],
      },
      {
        title: "Ventas y atención al cliente",
        description:
          "Captura cada detalle de las conversaciones con clientes para mejorar el seguimiento y la personalización.",
        steps: [
          "Graba las llamadas con clientes con Fireflies.ai",
          "Analiza las transcripciones para identificar patrones y necesidades",
          "Utiliza los insights para personalizar el seguimiento",
          "Comparte información relevante con el equipo de ventas o soporte",
        ],
      },
      {
        title: "Investigación y desarrollo",
        description:
          "Documenta sesiones de brainstorming y entrevistas de investigación para no perder ideas valiosas.",
        steps: [
          "Graba sesiones de ideación y entrevistas",
          "Utiliza la búsqueda para encontrar conceptos clave",
          "Exporta notas y resúmenes para documentación",
          "Analiza tendencias y patrones en múltiples conversaciones",
        ],
      },
    ],
    integrations: [
      "Zoom",
      "Microsoft Teams",
      "Google Meet",
      "Webex",
      "Slack",
      "Notion",
      "Asana",
      "Trello",
      "HubSpot",
      "Salesforce",
    ],
    testimonials: [
      {
        quote:
          "Fireflies.ai ha transformado nuestras reuniones. Ya no perdemos tiempo tomando notas y podemos concentrarnos en la conversación.",
        author: "Carlos Martínez",
        role: "Director de Operaciones",
        company: "TechSolutions",
      },
      {
        quote:
          "Como equipo remoto, necesitábamos una forma de mantener a todos informados. Fireflies.ai no solo transcribe nuestras reuniones, sino que las hace accesibles y buscables.",
        author: "Laura Gómez",
        role: "Project Manager",
        company: "DigitalWorks",
      },
    ],
  }

  return (
    <>
      {/* Hero Banner */}
      <section className="relative bg-[#1a1a2e] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <SafeImage src="/fireflies-banner.jpeg" alt="Fireflies.ai Banner" fill className="object-cover" priority />
        </div>
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <div className="flex items-center mb-4">
                <div className="bg-white p-3 rounded-lg mr-4">
                  <SafeImage
                    src="/fireflies-logo.png"
                    alt="Fireflies.ai Logo"
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>
                <Badge className="bg-violet-500">NeuroScore: {toolData.score}/10</Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Fireflies.ai</h1>
              <p className="text-xl mb-6">Automatiza la transcripción, resumen y análisis de tus reuniones con IA</p>
              <div className="flex flex-wrap gap-3 mb-6">
                <Badge variant="outline" className="border-white/30 text-white">
                  Transcripción
                </Badge>
                <Badge variant="outline" className="border-white/30 text-white">
                  Reuniones
                </Badge>
                <Badge variant="outline" className="border-white/30 text-white">
                  IA
                </Badge>
                <Badge variant="outline" className="border-white/30 text-white">
                  Productividad
                </Badge>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-violet-600 hover:bg-violet-700">
                  <Link
                    href={toolData.affiliateUrl}
                    target="_blank"
                    rel="noopener sponsored"
                    className="flex items-center gap-2"
                  >
                    Probar Fireflies.ai Gratis
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  <a href="#caracteristicas">Ver características</a>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <SafeImage
                  src="/fireflies-screenshot.jpeg"
                  alt="Interfaz de Fireflies.ai"
                  width={600}
                  height={400}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="mb-8 grid w-full grid-cols-2 md:grid-cols-4 gap-2">
                <TabsTrigger value="overview">Resumen</TabsTrigger>
                <TabsTrigger value="features" id="caracteristicas">
                  Características
                </TabsTrigger>
                <TabsTrigger value="usecases">Casos de Uso</TabsTrigger>
                <TabsTrigger value="pricing">Precios</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-6">
                <div className="rounded-lg border bg-white p-6 shadow-sm">
                  <h2 className="text-2xl font-bold text-secondary mb-4">¿Qué es Fireflies.ai?</h2>
                  <p className="text-gray-600 mb-6">
                    Fireflies.ai es un asistente de reuniones con IA que se une a tus llamadas, toma notas y crea
                    resúmenes automáticamente. Permite buscar, transcribir y analizar conversaciones para extraer
                    información valiosa, ahorrando tiempo y mejorando la productividad de equipos remotos y
                    presenciales.
                  </p>

                  <div className="aspect-video rounded-lg overflow-hidden mb-8">
                    <SafeImage
                      src="/fireflies-features.jpeg"
                      alt="Características de Fireflies.ai"
                      width={800}
                      height={450}
                      className="object-cover w-full"
                    />
                  </div>

                  <h3 className="text-xl font-semibold text-secondary mb-4">¿Por qué elegir Fireflies.ai?</h3>
                  <div className="grid gap-8 md:grid-cols-2 mb-8">
                    <div>
                      <h4 className="font-semibold text-secondary mb-2">Ventajas</h4>
                      <ul className="space-y-2">
                        {toolData.pros?.map((pro, index) => (
                          <li key={index} className="flex items-start">
                            <Check className="mr-2 h-5 w-5 flex-shrink-0 text-green-500" />
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-secondary mb-2">Limitaciones</h4>
                      <ul className="space-y-2">
                        {toolData.cons?.map((con, index) => (
                          <li key={index} className="flex items-start">
                            <X className="mr-2 h-5 w-5 flex-shrink-0 text-red-500" />
                            <span>{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-violet-50 rounded-lg p-6 mb-8">
                    <h3 className="flex items-center text-xl font-semibold text-secondary mb-4">
                      <Award className="mr-2 h-5 w-5 text-violet-600" />
                      Confianza y seguridad
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Fireflies.ai es utilizado por más de 100,000 organizaciones en todo el mundo, desde startups hasta
                      empresas Fortune 500. La plataforma cumple con estándares de seguridad empresarial y ofrece
                      opciones de cumplimiento normativo para diferentes industrias.
                    </p>
                    <div className="flex flex-wrap gap-4 items-center">
                      <Badge variant="outline" className="text-violet-700 border-violet-200 bg-violet-50">
                        Cifrado de extremo a extremo
                      </Badge>
                      <Badge variant="outline" className="text-violet-700 border-violet-200 bg-violet-50">
                        Cumplimiento GDPR
                      </Badge>
                      <Badge variant="outline" className="text-violet-700 border-violet-200 bg-violet-50">
                        SOC 2 Tipo II
                      </Badge>
                    </div>
                  </div>

                  <div className="rounded-lg border p-6 mb-8">
                    <h3 className="text-xl font-semibold text-secondary mb-4">Integraciones</h3>
                    <p className="text-gray-600 mb-4">
                      Fireflies.ai se integra con las principales plataformas de videoconferencia y herramientas de
                      productividad:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {firefliesData.integrations.map((integration, index) => (
                        <Badge key={index} variant="outline" className="bg-gray-50">
                          {integration}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-secondary mb-4">Lo que dicen los usuarios</h3>
                    <div className="grid gap-6 md:grid-cols-2">
                      {firefliesData.testimonials.map((testimonial, index) => (
                        <div key={index} className="rounded-lg bg-gray-50 p-4">
                          <p className="italic text-gray-600 mb-4">"{testimonial.quote}"</p>
                          <div className="flex items-center">
                            <div className="mr-3 h-10 w-10 rounded-full bg-violet-100 flex items-center justify-center">
                              <span className="text-violet-700 font-semibold">{testimonial.author.charAt(0)}</span>
                            </div>
                            <div>
                              <p className="font-semibold">{testimonial.author}</p>
                              <p className="text-sm text-gray-500">
                                {testimonial.role}, {testimonial.company}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 text-center">
                    <Button asChild size="lg" className="bg-violet-600 hover:bg-violet-700">
                      <Link
                        href={toolData.affiliateUrl}
                        target="_blank"
                        rel="noopener sponsored"
                        className="flex items-center gap-2"
                      >
                        Probar Fireflies.ai Gratis
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="features" className="mt-6">
                <div className="rounded-lg border bg-white p-6 shadow-sm">
                  <h2 className="text-2xl font-bold text-secondary mb-6">Características principales</h2>

                  <div className="grid gap-8 md:grid-cols-2 mb-8">
                    <div className="rounded-lg border p-6 hover:shadow-md transition">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center mr-4">
                          <Mic className="h-6 w-6 text-violet-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-secondary">Transcripción automática</h3>
                      </div>
                      <p className="text-gray-600 mb-4">
                        Convierte automáticamente el audio de tus reuniones en texto con alta precisión en múltiples
                        idiomas. La transcripción se realiza en tiempo real y está disponible inmediatamente después de
                        la reunión.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Check className="mr-2 h-5 w-5 flex-shrink-0 text-green-500" />
                          <span>Soporte para más de 60 idiomas</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-5 w-5 flex-shrink-0 text-green-500" />
                          <span>Identificación de hablantes</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-5 w-5 flex-shrink-0 text-green-500" />
                          <span>Corrección y edición posterior</span>
                        </li>
                      </ul>
                    </div>

                    <div className="rounded-lg border p-6 hover:shadow-md transition">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center mr-4">
                          <FileText className="h-6 w-6 text-violet-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-secondary">Resúmenes inteligentes</h3>
                      </div>
                      <p className="text-gray-600 mb-4">
                        Genera resúmenes concisos con los puntos clave, decisiones y elementos de acción de cada
                        reunión. Ahorra tiempo y asegúrate de que nada importante se pierda.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Check className="mr-2 h-5 w-5 flex-shrink-0 text-green-500" />
                          <span>Extracción de puntos clave</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-5 w-5 flex-shrink-0 text-green-500" />
                          <span>Identificación de elementos de acción</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-5 w-5 flex-shrink-0 text-green-500" />
                          <span>Personalización del formato de resumen</span>
                        </li>
                      </ul>
                    </div>

                    <div className="rounded-lg border p-6 hover:shadow-md transition">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center mr-4">
                          <Search className="h-6 w-6 text-violet-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-secondary">Búsqueda avanzada</h3>
                      </div>
                      <p className="text-gray-600 mb-4">
                        Encuentra rápidamente cualquier información en tus reuniones pasadas con búsqueda por palabras
                        clave. Nunca más pierdas tiempo buscando información importante.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Check className="mr-2 h-5 w-5 flex-shrink-0 text-green-500" />
                          <span>Búsqueda en todas las reuniones</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-5 w-5 flex-shrink-0 text-green-500" />
                          <span>Filtros por fecha, participante y tema</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-5 w-5 flex-shrink-0 text-green-500" />
                          <span>Búsqueda semántica con IA</span>
                        </li>
                      </ul>
                    </div>

                    <div className="rounded-lg border p-6 hover:shadow-md transition">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center mr-4">
                          <BarChart2 className="h-6 w-6 text-violet-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-secondary">Análisis de conversaciones</h3>
                      </div>
                      <p className="text-gray-600 mb-4">
                        Obtén insights valiosos sobre tus reuniones, incluyendo tiempo de habla, temas recurrentes y
                        sentimiento. Mejora la calidad de tus reuniones con datos objetivos.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Check className="mr-2 h-5 w-5 flex-shrink-0 text-green-500" />
                          <span>Análisis de participación</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-5 w-5 flex-shrink-0 text-green-500" />
                          <span>Detección de temas recurrentes</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-5 w-5 flex-shrink-0 text-green-500" />
                          <span>Tendencias a lo largo del tiempo</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="rounded-lg bg-violet-50 p-6 mb-8">
                    <h3 className="text-xl font-semibold text-secondary mb-4">
                      Fred: Tu asistente de reuniones con IA
                    </h3>
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                      <div className="md:w-1/2">
                        <p className="text-gray-600 mb-4">
                          Fred es el asistente de IA de Fireflies que puede responder preguntas sobre tus reuniones,
                          encontrar información específica y ayudarte a extraer valor de tus conversaciones.
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <Check className="mr-2 h-5 w-5 flex-shrink-0 text-green-500" />
                            <span>Responde preguntas sobre el contenido de las reuniones</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="mr-2 h-5 w-5 flex-shrink-0 text-green-500" />
                            <span>Genera resúmenes personalizados según tus necesidades</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="mr-2 h-5 w-5 flex-shrink-0 text-green-500" />
                            <span>Extrae información específica como números, fechas o compromisos</span>
                          </li>
                        </ul>
                      </div>
                      <div className="md:w-1/2">
                        <div className="rounded-lg overflow-hidden shadow-lg">
                          <SafeImage
                            src="/fireflies-askfred.jpeg"
                            alt="Fred, el asistente de IA de Fireflies"
                            width={500}
                            height={300}
                            className="object-cover w-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 text-center">
                    <Button asChild size="lg" className="bg-violet-600 hover:bg-violet-700">
                      <Link
                        href={toolData.affiliateUrl}
                        target="_blank"
                        rel="noopener sponsored"
                        className="flex items-center gap-2"
                      >
                        Probar Fireflies.ai Gratis
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="usecases" className="mt-6">
                <div className="rounded-lg border bg-white p-6 shadow-sm">
                  <h2 className="text-2xl font-bold text-secondary mb-6">Casos de uso</h2>

                  <div className="grid gap-8 md:grid-cols-3 mb-8">
                    {firefliesData.useCases.map((useCase, index) => (
                      <div key={index} className="rounded-lg border p-6 hover:shadow-md transition">
                        <h3 className="text-xl font-semibold text-secondary mb-3">{useCase.title}</h3>
                        <p className="text-gray-600 mb-4">{useCase.description}</p>
                        <h4 className="font-medium text-secondary mb-2">Cómo implementarlo:</h4>
                        <ol className="space-y-2 list-decimal list-inside text-gray-600">
                          {useCase.steps.map((step, stepIndex) => (
                            <li key={stepIndex}>{step}</li>
                          ))}
                        </ol>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-lg bg-gray-50 p-6 mb-8">
                    <h3 className="text-xl font-semibold text-secondary mb-4">Beneficios para equipos remotos</h3>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="flex items-start">
                        <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center mr-3 flex-shrink-0">
                          <Clock className="h-5 w-5 text-violet-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-secondary mb-1">Ahorro de tiempo</h4>
                          <p className="text-gray-600">
                            Elimina la necesidad de tomar notas manualmente, permitiendo a los participantes
                            concentrarse en la conversación.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center mr-3 flex-shrink-0">
                          <Users className="h-5 w-5 text-violet-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-secondary mb-1">Inclusión y accesibilidad</h4>
                          <p className="text-gray-600">
                            Permite que miembros del equipo que no pudieron asistir a la reunión se pongan al día
                            rápidamente.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center mr-3 flex-shrink-0">
                          <Search className="h-5 w-5 text-violet-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-secondary mb-1">Conocimiento accesible</h4>
                          <p className="text-gray-600">
                            Crea una base de conocimiento buscable con todas las conversaciones importantes del equipo.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center mr-3 flex-shrink-0">
                          <BarChart2 className="h-5 w-5 text-violet-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-secondary mb-1">Mejora continua</h4>
                          <p className="text-gray-600">
                            Analiza la efectividad de las reuniones y mejora la comunicación del equipo con datos
                            objetivos.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 text-center">
                    <Button asChild size="lg" className="bg-violet-600 hover:bg-violet-700">
                      <Link
                        href={toolData.affiliateUrl}
                        target="_blank"
                        rel="noopener sponsored"
                        className="flex items-center gap-2"
                      >
                        Probar Fireflies.ai Gratis
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="pricing" className="mt-6">
                <div className="rounded-lg border bg-white p-6 shadow-sm">
                  <h2 className="text-2xl font-bold text-secondary mb-6">Planes y precios</h2>

                  <div className="grid gap-8 md:grid-cols-3 mb-8">
                    {firefliesData.pricingPlans.map((plan, index) => (
                      <div
                        key={index}
                        className={`rounded-lg border p-6 flex flex-col ${
                          plan.recommended ? "border-violet-500 shadow-md relative" : ""
                        }`}
                      >
                        {plan.recommended && (
                          <div className="absolute top-0 right-0 bg-violet-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                            Recomendado
                          </div>
                        )}
                        <h3 className="text-xl font-semibold text-secondary mb-2">{plan.name}</h3>
                        <p className="text-2xl font-bold text-violet-600 mb-4">{plan.price}</p>
                        <ul className="space-y-2 mb-6 flex-grow">
                          {plan.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start">
                              <Check className="mr-2 h-5 w-5 flex-shrink-0 text-green-500" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button
                          asChild
                          className={
                            plan.recommended
                              ? "bg-violet-600 hover:bg-violet-700"
                              : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                          }
                        >
                          <Link
                            href={toolData.affiliateUrl}
                            target="_blank"
                            rel="noopener sponsored"
                            className="flex items-center justify-center gap-2"
                          >
                            {plan.name === "Free" ? "Comenzar gratis" : "Probar ahora"}
                            <ExternalLink className="h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-lg bg-gray-50 p-6 mb-8">
                    <h3 className="text-xl font-semibold text-secondary mb-4">Preguntas frecuentes sobre precios</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-secondary mb-1">¿Qué incluye la prueba gratuita?</h4>
                        <p className="text-gray-600">
                          La prueba gratuita incluye todas las funciones del plan Pro durante 14 días, sin limitaciones.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium text-secondary mb-1">
                          ¿Puedo cambiar de plan en cualquier momento?
                        </h4>
                        <p className="text-gray-600">
                          Sí, puedes actualizar o degradar tu plan en cualquier momento. Los cambios se aplicarán en tu
                          próximo ciclo de facturación.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium text-secondary mb-1">¿Hay descuentos para equipos grandes?</h4>
                        <p className="text-gray-600">
                          Sí, Fireflies.ai ofrece descuentos por volumen para equipos de más de 10 usuarios. Contacta
                          con su equipo de ventas para obtener un presupuesto personalizado.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium text-secondary mb-1">¿Hay algún compromiso de permanencia?</h4>
                        <p className="text-gray-600">
                          No, puedes cancelar tu suscripción en cualquier momento. Fireflies.ai ofrece planes mensuales
                          y anuales, con descuentos para los planes anuales.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border border-violet-100 bg-violet-50 p-6">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                      <div className="md:w-2/3">
                        <h3 className="text-xl font-semibold text-secondary mb-2">¿Necesitas un plan personalizado?</h3>
                        <p className="text-gray-600 mb-4">
                          Si tienes necesidades específicas o un equipo grande, el plan Business de Fireflies.ai ofrece
                          características avanzadas y soporte personalizado.
                        </p>
                        <Button asChild className="bg-violet-600 hover:bg-violet-700">
                          <Link
                            href={toolData.affiliateUrl}
                            target="_blank"
                            rel="noopener sponsored"
                            className="flex items-center gap-2"
                          >
                            Contactar con ventas
                            <ExternalLink className="h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                      <div className="md:w-1/3 flex justify-center">
                        <div className="w-24 h-24 rounded-full bg-violet-100 flex items-center justify-center">
                          <DollarSign className="h-12 w-12 text-violet-600" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-violet-600 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Optimiza tus reuniones con Fireflies.ai</h2>
            <p className="text-xl text-white/90 mb-8">
              Deja que la IA se encargue de tomar notas y analizar tus reuniones mientras tú te concentras en lo que
              realmente importa.
            </p>
            <Button asChild size="lg" className="bg-white text-violet-600 hover:bg-white/90">
              <Link
                href={toolData.affiliateUrl}
                target="_blank"
                rel="noopener sponsored"
                className="flex items-center gap-2"
              >
                Probar Fireflies.ai Gratis
                <ExternalLink className="h-4 w-4" />
              </Link>
            </Button>
            <p className="mt-4 text-sm text-white/70">No se requiere tarjeta de crédito. Prueba gratuita disponible.</p>
          </div>
        </div>
      </section>
    </>
  )
}
