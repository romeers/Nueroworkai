import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Check,
  X,
  ExternalLink,
  Award,
  Clock,
  DollarSign,
  Users,
  Mic,
  Search,
  FileText,
  BarChart2,
  Shield,
  Zap,
  Globe,
  MessageSquare,
} from "lucide-react"
import SafeImage from "@/components/safe-image"
import { getToolBySlug } from "@/lib/static-data"
import { notFound } from "next/navigation"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata = {
  title: "Fireflies.ai | Automatiza transcripciones de reuniones con IA - NeuroWorkAI",
  description:
    "Descubre cómo Fireflies.ai puede transformar tus reuniones: transcribe, resume y analiza conversaciones automáticamente con IA. Potencia tu productividad.",
  openGraph: {
    title: "Fireflies.ai | Automatiza transcripciones de reuniones con IA - NeuroWorkAI",
    description:
      "Descubre cómo Fireflies.ai puede transformar tus reuniones: transcribe, resume y analiza conversaciones automáticamente con IA. Potencia tu productividad.",
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
        tagline: "For individuals starting out",
        price: "$0",
        discountedPrice: "$0",
        billing: "Free forever",
        features: [
          "Unlimited transcription*",
          "Limited AI summaries",
          "800 mins of storage/seat",
          "Zoom, GMeet, Teams, +more",
          "Transcription in 100+ languages",
          "Meeting search",
          "AskFred: AI assistant",
          "Upload audio/video file",
          "Mobile app (Android, iOS)",
          "Chrome extension",
        ],
        recommended: false,
        buttonText: "Get Started",
      },
      {
        name: "Pro",
        tagline: "For professional individuals and small teams",
        price: "$18",
        discountedPrice: "$10",
        billing: "per seat / month, billed annually",
        features: [
          "Unlimited transcription",
          "Unlimited AI summaries",
          "8,000 mins of storage/seat",
          "Everything in Free, plus..",
          "Download transcripts, summaries, recordings",
          "Talk-time analytics",
          "AI Apps",
          "Action Items & Task Manager",
          "Unlimited integrations",
          "Rate Limits",
        ],
        recommended: true,
        buttonText: "Get Started",
        mostPopular: true,
      },
      {
        name: "Business",
        tagline: "For fast growing businesses",
        price: "$29",
        discountedPrice: "$19",
        billing: "per seat / month, billed annually",
        features: [
          "Unlimited transcription",
          "Unlimited AI summaries",
          "Unlimited storage",
          "Everything in Pro, plus..",
          "Video recording",
          "Conversation intelligence",
          "Team analytics (for admins)",
          "User groups",
          "API access",
          "Rate Limits",
        ],
        recommended: false,
        buttonText: "Get Started",
      },
      {
        name: "Enterprise",
        tagline: "For large scale enterprises",
        price: "$39",
        discountedPrice: "$39",
        billing: "per seat / month, billed annually",
        features: [
          "Unlimited transcription",
          "Unlimited AI summaries",
          "Unlimited storage",
          "Everything in Business, plus..",
          "Rules engine",
          "SSO",
          "HIPAA compliance",
          "Private storage",
          "Custom data retention (NEW)",
          "Transcript only mode",
          "Super admin role",
          "Dedicated account manager",
        ],
        recommended: false,
        buttonText: "Contact Us",
      },
    ],
    useCases: [
      {
        title: "Freelancers y autónomos",
        description:
          "Optimiza tus reuniones con clientes grabando y transcribiendo automáticamente cada conversación. Accede a resúmenes inteligentes que facilitan la entrega de propuestas, contratos y seguimientos.",
        icon: "Users",
        steps: [
          "Graba reuniones con clientes sin distracciones",
          "Accede a transcripciones completas después",
          "Genera resúmenes para propuestas y seguimientos",
          "Mantén un registro organizado de todos los acuerdos",
        ],
      },
      {
        title: "Equipos de ventas",
        description:
          "Captura todos los detalles importantes de llamadas con prospectos. Identifica oportunidades, acuerdos pendientes y preguntas frecuentes analizando las conversaciones sin tener que tomar notas manualmente.",
        icon: "DollarSign",
        steps: [
          "Registra automáticamente cada llamada de ventas",
          "Analiza patrones en objeciones y preguntas",
          "Comparte insights con todo el equipo",
          "Mejora el seguimiento con datos precisos",
        ],
      },
      {
        title: "Equipos de recursos humanos",
        description:
          "Registra entrevistas de selección, analiza las respuestas de candidatos y genera informes automáticos. Ahorra tiempo en evaluaciones y mejora el proceso de contratación.",
        icon: "Users",
        steps: [
          "Documenta entrevistas de trabajo completas",
          "Compara respuestas entre diferentes candidatos",
          "Genera informes de evaluación automáticos",
          "Comparte información relevante con el equipo",
        ],
      },
      {
        title: "Equipos de soporte y atención al cliente",
        description:
          "Documenta automáticamente las interacciones con clientes, detecta patrones de preguntas recurrentes y mejora la formación de nuevos agentes basándote en conversaciones reales.",
        icon: "MessageSquare",
        steps: [
          "Registra llamadas de soporte para análisis",
          "Identifica problemas recurrentes",
          "Crea materiales de formación basados en casos reales",
          "Mejora protocolos de atención con datos objetivos",
        ],
      },
      {
        title: "Formadores y coaches",
        description:
          "Graba sesiones de formación, genera transcripciones completas y resúmenes de los aprendizajes clave. Facilita la entrega de materiales de seguimiento a tus clientes o alumnos.",
        icon: "BookOpen",
        steps: [
          "Graba sesiones de formación sin distracciones",
          "Genera materiales de estudio automáticamente",
          "Comparte transcripciones con participantes",
          "Analiza la efectividad de tus sesiones",
        ],
      },
    ],
    features: [
      {
        name: "Transcripción automática",
        description: "Transcripción automática precisa en más de 30 idiomas.",
        icon: "Mic",
      },
      {
        name: "Resúmenes inteligentes",
        description: "Resúmenes inteligentes de reuniones con puntos clave.",
        icon: "FileText",
      },
      {
        name: "Búsqueda avanzada",
        description: "Búsqueda avanzada en registros de conversaciones.",
        icon: "Search",
      },
      {
        name: "Análisis de sentimiento",
        description: "Análisis de sentimiento y detección de temas relevantes.",
        icon: "BarChart2",
      },
      {
        name: "Integraciones",
        description: "Integración con Zoom, Google Meet, Microsoft Teams, Webex, y más.",
        icon: "Link",
      },
      {
        name: "Seguridad",
        description: "Seguridad con cifrado de extremo a extremo y cumplimiento GDPR/SOC 2.",
        icon: "Shield",
      },
      {
        name: "Automatización",
        description: "Creación de flujos de trabajo automáticos con herramientas como Zapier y CRM.",
        icon: "Zap",
      },
      {
        name: "Soporte multilingüe",
        description: "Soporte para más de 30 idiomas con alta precisión.",
        icon: "Globe",
      },
    ],
    faqs: [
      {
        question: "¿Fireflies.ai es gratis?",
        answer:
          "Fireflies.ai ofrece un plan gratuito con funciones básicas. Para acceder a funciones avanzadas como resúmenes inteligentes o integraciones, se requiere un plan de pago.",
      },
      {
        question: "¿En qué idiomas puede transcribir Fireflies.ai?",
        answer:
          "Fireflies.ai puede transcribir conversaciones en más de 30 idiomas, incluyendo inglés, español, francés, alemán, portugués y más.",
      },
      {
        question: "¿Se integra Fireflies.ai con mi plataforma de videollamadas?",
        answer:
          "Sí. Fireflies.ai se integra con Zoom, Google Meet, Microsoft Teams, Webex, Slack y otras herramientas de comunicación y productividad.",
      },
      {
        question: "¿Cómo protege Fireflies.ai la privacidad de mis datos?",
        answer:
          "Fireflies.ai utiliza cifrado de extremo a extremo y cumple con las normativas GDPR y SOC 2 Tipo II para garantizar la seguridad de los datos.",
      },
      {
        question: "¿Puede Fireflies.ai resumir automáticamente una reunión?",
        answer:
          "Sí. Fireflies.ai genera automáticamente resúmenes de reuniones destacando los puntos más relevantes, ahorrando tiempo y mejorando la organización.",
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
              <TabsList className="mb-8 grid w-full grid-cols-2 md:grid-cols-5 gap-2">
                <TabsTrigger value="overview">Resumen</TabsTrigger>
                <TabsTrigger value="features" id="caracteristicas">
                  Características
                </TabsTrigger>
                <TabsTrigger value="usecases">Casos de Uso</TabsTrigger>
                <TabsTrigger value="pricing">Precios</TabsTrigger>
                <TabsTrigger value="faq">FAQ</TabsTrigger>
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
                      Fireflies.ai es utilizado por más de 500,000 organizaciones en todo el mundo, desde startups hasta
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
                  <h2 className="text-2xl font-bold text-secondary mb-6">Características destacadas de Fireflies.ai</h2>

                  <div className="grid gap-6 md:grid-cols-2 mb-8">
                    {firefliesData.features.map((feature, index) => (
                      <div key={index} className="rounded-lg border p-6 hover:shadow-md transition">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center mr-4">
                            {feature.icon === "Mic" && <Mic className="h-6 w-6 text-violet-600" />}
                            {feature.icon === "FileText" && <FileText className="h-6 w-6 text-violet-600" />}
                            {feature.icon === "Search" && <Search className="h-6 w-6 text-violet-600" />}
                            {feature.icon === "BarChart2" && <BarChart2 className="h-6 w-6 text-violet-600" />}
                            {feature.icon === "Link" && <ExternalLink className="h-6 w-6 text-violet-600" />}
                            {feature.icon === "Shield" && <Shield className="h-6 w-6 text-violet-600" />}
                            {feature.icon === "Zap" && <Zap className="h-6 w-6 text-violet-600" />}
                            {feature.icon === "Globe" && <Globe className="h-6 w-6 text-violet-600" />}
                          </div>
                          <h3 className="text-xl font-semibold text-secondary">{feature.name}</h3>
                        </div>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    ))}
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
                  <h2 className="text-2xl font-bold text-secondary mb-6">Casos de Uso de Fireflies.ai</h2>

                  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-8">
                    {firefliesData.useCases.map((useCase, index) => (
                      <div key={index} className="rounded-lg border p-6 hover:shadow-md transition">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center mr-4">
                            {useCase.icon === "Users" && <Users className="h-6 w-6 text-violet-600" />}
                            {useCase.icon === "DollarSign" && <DollarSign className="h-6 w-6 text-violet-600" />}
                            {useCase.icon === "MessageSquare" && <MessageSquare className="h-6 w-6 text-violet-600" />}
                            {useCase.icon === "BookOpen" && <FileText className="h-6 w-6 text-violet-600" />}
                          </div>
                          <h3 className="text-xl font-semibold text-secondary">{useCase.title}</h3>
                        </div>
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

                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
                    {firefliesData.pricingPlans.map((plan, index) => (
                      <div
                        key={index}
                        className={`rounded-lg border p-6 flex flex-col ${
                          plan.recommended ? "border-violet-500 shadow-md relative" : ""
                        }`}
                      >
                        {plan.mostPopular && (
                          <div className="absolute top-0 right-0 bg-violet-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                            MÁS POPULAR
                          </div>
                        )}
                        <h3 className="text-xl font-semibold text-secondary mb-1">{plan.name}</h3>
                        <p className="text-sm text-gray-500 mb-3">{plan.tagline}</p>
                        <div className="flex items-baseline mb-1">
                          <span className="text-3xl font-bold text-violet-600">{plan.discountedPrice}</span>
                          {plan.price !== plan.discountedPrice && (
                            <span className="ml-2 text-lg text-gray-400 line-through">{plan.price}</span>
                          )}
                        </div>
                        <p className="text-sm text-gray-500 mb-4">{plan.billing}</p>
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
                            plan.recommended || plan.mostPopular
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
                            {plan.buttonText}
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

              <TabsContent value="faq" className="mt-6">
                <div className="rounded-lg border bg-white p-6 shadow-sm">
                  <h2 className="text-2xl font-bold text-secondary mb-6">Preguntas Frecuentes sobre Fireflies.ai</h2>

                  <Accordion type="single" collapsible className="mb-8">
                    {firefliesData.faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-lg font-medium text-secondary">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 pt-2">{faq.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>

                  <div className="bg-violet-50 rounded-lg p-6 mb-8">
                    <h3 className="text-xl font-semibold text-secondary mb-4">¿Tienes más preguntas?</h3>
                    <p className="text-gray-600 mb-4">
                      Si tienes alguna pregunta adicional sobre Fireflies.ai, puedes consultar su centro de ayuda o
                      contactar directamente con su equipo de soporte.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button asChild className="bg-violet-600 hover:bg-violet-700">
                        <Link
                          href={toolData.affiliateUrl}
                          target="_blank"
                          rel="noopener sponsored"
                          className="flex items-center gap-2"
                        >
                          Visitar centro de ayuda
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="border-violet-200 text-violet-700 hover:bg-violet-50"
                      >
                        <Link
                          href={toolData.affiliateUrl}
                          target="_blank"
                          rel="noopener sponsored"
                          className="flex items-center gap-2"
                        >
                          Contactar soporte
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      </Button>
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
