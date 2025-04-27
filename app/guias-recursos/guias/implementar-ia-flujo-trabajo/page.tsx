import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Lightbulb, ArrowRight, CheckCircle } from "lucide-react"
import RelatedTools from "@/components/related-tools"
import { getResourceBySlug } from "@/lib/static-data"

export const metadata = {
  title: "Cómo implementar IA en tu flujo de trabajo diario (Guía 2025) | NeuroWorkAI",
  description:
    "Descubre cómo integrar herramientas de IA en tus procesos diarios sin necesidad de ser un experto técnico. Guía práctica para empresas de cualquier tamaño.",
  openGraph: {
    title: "Cómo implementar IA en tu flujo de trabajo diario (Guía 2025)",
    description:
      "Descubre cómo integrar herramientas de IA en tus procesos diarios sin necesidad de ser un experto técnico.",
    images: [{ url: "/ai-productivity-kit-ebook.png", width: 1200, height: 630 }],
  },
}

export default function ImplementarIAPage() {
  const resource = getResourceBySlug("implementar-ia-flujo-trabajo")

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-light to-sky py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">Guía 2025</Badge>
            <h1 className="font-heading text-3xl font-bold tracking-tight text-secondary sm:text-4xl md:text-5xl mb-6">
              🧠 Cómo implementar IA en tu flujo de trabajo diario
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              La inteligencia artificial (IA) ya no es un concepto del futuro: hoy es una herramienta práctica que
              cualquier empresa, sin importar su tamaño, puede integrar en sus procesos diarios.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="prose prose-lg max-w-none">
              <div className="bg-primary/5 p-6 rounded-lg mb-8">
                <p className="text-lg font-medium mb-4">
                  ¿Tienes un pequeño negocio? ¿Un e-commerce? ¿Un proyecto en crecimiento? Entonces esta guía es para
                  ti.
                </p>
                <p>
                  En este artículo descubrirás cómo implementar IA de forma sencilla, sin necesidad de ser un experto
                  técnico.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-secondary mt-12 mb-6">
                ¿Qué significa realmente implementar IA en tu negocio?
              </h2>
              <p>
                Muchas personas creen que integrar IA implica crear sistemas complejos como ChatGPT, Gemini o modelos de
                imagen como Stable Diffusion. La realidad es que ya usas inteligencia artificial todos los días — aunque
                no lo notes.
              </p>

              <p className="font-medium mt-6 mb-4">Por ejemplo:</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Cuando Gmail clasifica tus correos como "Principal" o "Spam" ➔ estás usando IA.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Cuando Netflix te recomienda una serie ➔ estás usando IA.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Cuando tu banco detecta movimientos sospechosos ➔ estás usando IA.</span>
                </li>
              </ul>

              <p className="mt-6">
                Implementar IA no siempre implica construir modelos avanzados, sino aprovechar herramientas ya
                existentes para optimizar tareas.
              </p>

              <h2 className="text-2xl font-bold text-secondary mt-12 mb-6">
                ¿Por dónde empezar a usar IA en tu flujo de trabajo diario?
              </h2>
              <p>Antes de instalar la última app de moda, detente y piensa en tus necesidades reales. Pregúntate:</p>

              <ul className="space-y-2 mt-4">
                <li className="flex items-start">
                  <ArrowRight className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>¿Qué tareas me quitan más tiempo?</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>¿Qué procesos son repetitivos?</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>¿Dónde pierdo eficiencia en mi empresa o proyecto?</span>
                </li>
              </ul>

              <p className="font-medium mt-6">La IA debe solucionar un problema, no ser una moda.</p>
              <p>Aquí te dejamos algunos ejemplos sencillos:</p>

              <div className="overflow-x-auto mt-6">
                <table className="min-w-full divide-y divide-gray-200 border rounded-lg">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Caso de Uso
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
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
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Filtros inteligentes en Gmail
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Servicio al cliente
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Chatbots IA como Ada o Intercom
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Predicción de ventas
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Modelos de regresión (incluso en Excel avanzado)
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Marketing de contenidos
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Generadores de copywriting como Jasper o Writesonic
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Análisis de datos
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Automatización con herramientas como Notion AI o ChatGPT para Excel
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold text-secondary mt-12 mb-6">¿Qué tipo de IA es mejor para ti?</h2>
              <p>
                No todas las soluciones requieren grandes modelos de lenguaje (LLMs) como GPT-4. A veces, una simple
                regresión, clasificación o clusterización es suficiente.
              </p>

              <p className="font-medium mt-6 mb-4">Te recomendamos:</p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Si ya usas Google Workspace: explora Vertex AI y Gemini para integraciones simples.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Si usas Azure: puedes aprovechar OpenAI Service para añadir GPT-4 fácilmente.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>
                    Si tienes e-commerce: usa IA para predicción de ventas, automatizar atención al cliente y
                    personalizar la experiencia de compra.
                  </span>
                </li>
              </ul>

              <div className="bg-primary/10 p-6 rounded-lg my-8 flex">
                <Lightbulb className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-primary">Consejo:</p>
                  <p>
                    Revisa si tu proveedor actual (Google, Azure, AWS) ya ofrece módulos de IA integrables antes de
                    buscar soluciones externas.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-secondary mt-12 mb-6">
                Herramientas prácticas para empezar hoy mismo
              </h2>
              <p>No necesitas construir desde cero. Aquí algunas herramientas accesibles:</p>

              <ul className="space-y-4 mt-6">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium">Canva AI:</span> crea diseños automáticos para marketing.
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium">Notion AI:</span> documenta procesos y genera contenido más rápido.
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium">ChatGPT:</span> genera copys, ideas, resúmenes y estrategias de
                    marketing.
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium">GitHub Copilot:</span> asiste en programación de software.
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium">HubSpot CRM + IA:</span> automatiza ventas y marketing.
                  </div>
                </li>
              </ul>

              <p className="mt-6">
                Incluso herramientas clásicas como Excel ya permiten automatizar análisis avanzados usando IA.
              </p>

              <h2 className="text-2xl font-bold text-secondary mt-12 mb-6">
                ¿Cómo saber qué IA implementar en tu caso?
              </h2>
              <p>El error más común es querer usar IA solo por moda. Antes de implementar, analiza:</p>

              <ol className="list-decimal pl-6 space-y-4 mt-6">
                <li>
                  <span className="font-medium">Define tu necesidad específica:</span> ¿ventas, marketing, servicio al
                  cliente, operaciones?
                </li>
                <li>
                  <span className="font-medium">Evalúa tu infraestructura actual:</span> ¿qué herramientas ya usas?
                </li>
                <li>
                  <span className="font-medium">Investiga soluciones IA que se integren fácil:</span> usa NeuroWorkAI
                  para descubrirlas 😉
                </li>
                <li>
                  <span className="font-medium">Comienza pequeño:</span> implementa una mejora específica antes de
                  expandirte.
                </li>
              </ol>

              <h2 className="text-2xl font-bold text-secondary mt-12 mb-6">Casos reales de implementación sencilla</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium">Duolingo:</span> usa IA para personalizar retos de estudio según tu
                    progreso.
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium">Stripe:</span> combate fraudes bancarios con sistemas de IA.
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium">Platzi (educación online):</span> creó a "Ada", un chatbot educativo
                    que responde preguntas y guía a los estudiantes.
                  </div>
                </li>
              </ul>

              <p className="mt-6 font-medium">¿Y tú? Incluso si vendes leche online, podrías:</p>
              <ul className="space-y-2 mt-4">
                <li className="flex items-start">
                  <ArrowRight className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Automatizar atención al cliente.</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Predecir picos de ventas.</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Segmentar mejor a tus compradores.</span>
                </li>
              </ul>

              <p className="mt-4">Todo sin necesidad de construir grandes modelos.</p>

              <h2 className="text-2xl font-bold text-secondary mt-12 mb-6">Conclusión: La IA ya está a tu alcance</h2>
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

              <Card className="bg-primary/10 p-6 rounded-lg my-8 border-primary/20">
                <h3 className="text-xl font-bold text-primary mb-4">
                  ¿Quieres descubrir las mejores herramientas de IA para empezar hoy mismo?
                </h3>
                <Button asChild size="lg" className="mt-2">
                  <Link href="/herramientas" className="flex items-center">
                    Explora nuestra selección en NeuroWorkAI
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Tools Section */}
      {resource && resource.relatedTools && resource.relatedTools.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-2xl font-bold text-secondary mb-8 text-center">Herramientas recomendadas</h2>
              <RelatedTools tools={resource.relatedTools} />
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
