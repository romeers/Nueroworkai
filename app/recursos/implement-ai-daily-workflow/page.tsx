import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Clock, ExternalLink, CheckCircle, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import SafeImage from "@/components/safe-image"

export const metadata: Metadata = {
  title: "Cómo implementar IA en tu flujo de trabajo diario (Guía 2025) | NeuroWorkAI",
  description:
    "Descubre cómo integrar herramientas de IA en tus procesos diarios sin necesidad de ser un experto técnico. Guía práctica para empresas de cualquier tamaño.",
  openGraph: {
    title: "Cómo implementar IA en tu flujo de trabajo diario (Guía 2025) | NeuroWorkAI",
    description:
      "Descubre cómo integrar herramientas de IA en tus procesos diarios sin necesidad de ser un experto técnico.",
    images: [
      {
        url: "/implementar-ia-flujo-trabajo-2025.png",
        width: 1200,
        height: 630,
        alt: "Cómo implementar IA en tu flujo de trabajo diario",
      },
    ],
  },
}

export default function ImplementAIWorkflowPage() {
  // Obtener la fecha actual en formato español
  const fechaActual = new Date().toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-12 md:py-16 bg-gradient-to-r from-gray-50 to-violet-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Link href="/recursos" className="text-sm text-gray-500 hover:text-primary">
                Recursos
              </Link>
              <span className="text-gray-400">/</span>
              <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                Guía práctica
              </span>
              <span className="text-xs text-gray-500 flex items-center ml-auto">
                <Clock className="h-3 w-3 mr-1" />8 min de lectura
              </span>
            </div>

            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-6">
              🧠 Cómo implementar IA en tu flujo de trabajo diario (Guía 2025)
            </h1>

            <p className="text-lg text-gray-600 mb-4">
              La inteligencia artificial (IA) ya no es un concepto del futuro: hoy es una herramienta práctica que
              cualquier empresa, sin importar su tamaño, puede integrar en sus procesos diarios.
            </p>

            <p className="text-lg text-gray-600 mb-8">
              En este artículo descubrirás cómo implementar IA de forma sencilla, sin necesidad de ser un experto
              técnico.
            </p>

            <div className="flex items-center text-sm text-gray-500">
              <span>Publicado: {fechaActual}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-xl overflow-hidden shadow-md">
              <SafeImage
                src="/implementar-ia-flujo-trabajo-2025.png"
                alt="Cómo implementar IA en tu flujo de trabajo diario (Guía 2025)"
                width={1200}
                height={630}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg max-w-4xl mx-auto">
            <div className="bg-primary/5 p-6 rounded-lg mb-8">
              <p className="text-lg font-medium mb-4">
                ¿Tienes un pequeño negocio? ¿Un e-commerce? ¿Un proyecto en crecimiento? Entonces esta guía es para ti.
              </p>
              <p>
                En este artículo descubrirás cómo implementar IA de forma sencilla, sin necesidad de ser un experto
                técnico.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">
              ¿Qué significa realmente implementar IA en tu negocio?
            </h2>

            <p>
              Muchas personas creen que integrar IA implica crear sistemas complejos como ChatGPT, Gemini o modelos de
              imagen como Stable Diffusion. La realidad es que ya usas inteligencia artificial todos los días — aunque
              no lo notes.
            </p>

            <p className="font-medium mt-6 mb-4">Por ejemplo:</p>

            <ul className="space-y-2 list-none pl-0">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Cuando Gmail clasifica tus correos como "Principal" o "Spam" ➔ estás usando IA.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Cuando Netflix te recomienda una serie ➔ estás usando IA.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Cuando tu banco detecta movimientos sospechosos ➔ estás usando IA.</span>
              </li>
            </ul>

            <p className="mt-6">
              Implementar IA no siempre implica construir modelos avanzados, sino aprovechar herramientas ya existentes
              para optimizar tareas.
            </p>

            <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">
              ¿Por dónde empezar a usar IA en tu flujo de trabajo diario?
            </h2>

            <p>Antes de instalar la última app de moda, detente y piensa en tus necesidades reales. Pregúntate:</p>

            <ul className="space-y-2 list-none pl-0">
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>¿Qué tareas me quitan más tiempo?</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>¿Qué procesos son repetitivos?</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>¿Dónde pierdo eficiencia en mi empresa o proyecto?</span>
              </li>
            </ul>

            <p className="font-medium mt-6">La IA debe solucionar un problema, no ser una moda.</p>
            <p>Aquí te dejamos algunos ejemplos sencillos:</p>

            <div className="overflow-x-auto my-8">
              <table className="min-w-full divide-y divide-gray-200 border rounded-lg shadow-sm">
                <thead className="bg-primary/5">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
                    >
                      Caso de Uso
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
                    >
                      Solución con IA
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Clasificación de correos
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Filtros inteligentes en Gmail</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Servicio al cliente
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      Chatbots IA como Ada o Intercom
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Predicción de ventas
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      Modelos de regresión (incluso en Excel avanzado)
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Marketing de contenidos
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      Generadores de copywriting como Jasper o Writesonic
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Análisis de datos</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      Automatización con herramientas como Notion AI o ChatGPT para Excel
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* First CTA - after approximately 35% of content */}
            <div className="my-12 p-8 bg-primary/5 rounded-xl border border-primary/20 shadow-sm">
              <p className="font-medium text-lg text-secondary mb-4">
                🔥 ¿Buscas las herramientas de IA adecuadas para tu negocio?
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/herramientas-ia" className="flex items-center">
                  Explora nuestras herramientas de IA para productividad
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">¿Qué tipo de IA es mejor para ti?</h2>

            <p>
              No todas las soluciones requieren grandes modelos de lenguaje (LLMs) como GPT-4. A veces, una simple
              regresión, clasificación o clusterización es suficiente.
            </p>

            <p className="font-medium mt-6 mb-4">Te recomendamos:</p>

            <ul className="space-y-3 list-none pl-0">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <span>Si ya usas Google Workspace: explora Vertex AI y Gemini para integraciones simples.</span>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <span>Si usas Azure: puedes aprovechar OpenAI Service para añadir GPT-4 fácilmente.</span>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <span>
                    Si tienes e-commerce: usa IA para predicción de ventas, automatizar atención al cliente y
                    personalizar la experiencia de compra.
                  </span>
                </div>
              </li>
            </ul>

            <div className="my-8 p-6 bg-amber-50 border-l-4 border-amber-500 rounded-r-lg shadow-sm">
              <p className="font-medium flex items-start">
                <Lightbulb className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>
                  Consejo: Revisa si tu proveedor actual (Google, Azure, AWS) ya ofrece módulos de IA integrables antes
                  de buscar soluciones externas.
                </span>
              </p>
            </div>

            <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">
              Herramientas prácticas para empezar hoy mismo
            </h2>

            <p>No necesitas construir desde cero. Aquí algunas herramientas accesibles:</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="bg-white rounded-lg border p-4 shadow-sm">
                <h3 className="font-bold text-primary mb-2">Canva AI</h3>
                <p className="text-sm text-gray-700">Crea diseños automáticos para marketing.</p>
              </div>
              <div className="bg-white rounded-lg border p-4 shadow-sm">
                <h3 className="font-bold text-primary mb-2">Notion AI</h3>
                <p className="text-sm text-gray-700">Documenta procesos y genera contenido más rápido.</p>
              </div>
              <div className="bg-white rounded-lg border p-4 shadow-sm">
                <h3 className="font-bold text-primary mb-2">ChatGPT</h3>
                <p className="text-sm text-gray-700">Genera copys, ideas, resúmenes y estrategias de marketing.</p>
              </div>
              <div className="bg-white rounded-lg border p-4 shadow-sm">
                <h3 className="font-bold text-primary mb-2">GitHub Copilot</h3>
                <p className="text-sm text-gray-700">Asiste en programación de software.</p>
              </div>
              <div className="bg-white rounded-lg border p-4 shadow-sm md:col-span-2">
                <h3 className="font-bold text-primary mb-2">HubSpot CRM + IA</h3>
                <p className="text-sm text-gray-700">Automatiza ventas y marketing.</p>
              </div>
            </div>

            <p className="mt-6">
              Incluso herramientas clásicas como Excel ya permiten automatizar análisis avanzados usando IA.
            </p>

            <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">¿Cómo saber qué IA implementar en tu caso?</h2>

            <p>El error más común es querer usar IA solo por moda. Antes de implementar, analiza:</p>

            <ol className="space-y-2 pl-0 mt-4 counter-reset-step">
              <li className="flex items-center pl-8 relative counter-increment-step">
                <div className="absolute left-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-sm font-bold">
                  1
                </div>
                <span>
                  <strong>Define tu necesidad específica:</strong> ¿ventas, marketing, servicio al cliente, operaciones?
                </span>
              </li>
              <li className="flex items-center pl-8 relative counter-increment-step">
                <div className="absolute left-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-sm font-bold">
                  2
                </div>
                <span>
                  <strong>Evalúa tu infraestructura actual:</strong> ¿qué herramientas ya usas?
                </span>
              </li>
              <li className="flex items-center pl-8 relative counter-increment-step">
                <div className="absolute left-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-sm font-bold">
                  3
                </div>
                <span>
                  <strong>Investiga soluciones IA que se integren fácil:</strong> usa NeuroWorkAI para descubrirlas 😉
                </span>
              </li>
              <li className="flex items-center pl-8 relative counter-increment-step">
                <div className="absolute left-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-sm font-bold">
                  4
                </div>
                <span>
                  <strong>Comienza pequeño:</strong> implementa una mejora específica antes de expandirte.
                </span>
              </li>
            </ol>

            <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">Casos reales de implementación sencilla</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
              <div className="bg-white rounded-xl border shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="font-bold text-lg text-primary mb-2">Duolingo</h3>
                <p className="text-gray-700">Usa IA para personalizar retos de estudio según tu progreso.</p>
              </div>
              <div className="bg-white rounded-xl border shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="font-bold text-lg text-primary mb-2">Stripe</h3>
                <p className="text-gray-700">Combate fraudes bancarios con sistemas de IA.</p>
              </div>
              <div className="bg-white rounded-xl border shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="font-bold text-lg text-primary mb-2">Platzi</h3>
                <p className="text-gray-700">
                  Creó a "Ada", un chatbot educativo que responde preguntas y guía a los estudiantes.
                </p>
              </div>
            </div>

            <p className="font-medium mt-6">¿Y tú? Incluso si vendes leche online, podrías:</p>

            <ul className="space-y-2 list-none pl-0">
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Automatizar atención al cliente.</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Predecir picos de ventas.</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Segmentar mejor a tus compradores.</span>
              </li>
            </ul>

            <p className="mt-4">Todo sin necesidad de construir grandes modelos.</p>

            <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">Conclusión: La IA ya está a tu alcance</h2>

            <p>
              Implementar inteligencia artificial no es exclusivo de las grandes empresas. Hoy, con las herramientas
              adecuadas, cualquier negocio o emprendedor puede integrar IA en su flujo de trabajo diario para ahorrar
              tiempo, mejorar la eficiencia y tomar decisiones más inteligentes.
            </p>

            <p className="font-medium mt-6">Recuerda:</p>
            <p>
              No se trata de implementar la última tecnología, sino de resolver problemas reales con soluciones
              prácticas.
            </p>

            {/* Final CTA */}
            <div className="my-12 p-8 bg-gradient-to-r from-primary/20 to-primary/5 rounded-xl border border-primary/20 shadow-md">
              <p className="font-medium text-xl text-secondary mb-4">
                🚀 ¿Quieres descubrir las mejores herramientas de IA para empezar hoy mismo?
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/herramientas-ia" className="flex items-center">
                  Explora nuestra selección en NeuroWorkAI
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </article>
        </div>
      </section>

      {/* Related Tools Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-secondary mb-8">Herramientas recomendadas</h2>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white rounded-xl border shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 relative mr-4">
                    <SafeImage src="/notion-ai-blue.png" alt="Notion AI" fill className="object-contain" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Notion AI</h3>
                    <p className="text-sm text-gray-600">Escritura IA</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">Asistente de escritura y organización con IA integrada en Notion.</p>
                <Button asChild className="w-full">
                  <Link
                    href="https://notion.so/product/ai?ref=neuroworkai"
                    target="_blank"
                    rel="noopener sponsored"
                    className="flex items-center justify-center"
                  >
                    Ver Notion AI
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="bg-white rounded-xl border shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 relative mr-4">
                    <SafeImage src="/abstract-ai-icon.png" alt="ChatGPT" fill className="object-contain" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">ChatGPT</h3>
                    <p className="text-sm text-gray-600">Escritura IA</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Modelo de lenguaje avanzado para generar texto y responder preguntas.
                </p>
                <Button asChild className="w-full">
                  <Link href="/herramientas-ia" className="flex items-center justify-center">
                    Ver más herramientas
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
