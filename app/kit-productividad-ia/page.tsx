import type { Metadata } from "next"
import Link from "next/link"
import { Check, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import SafeImage from "@/components/safe-image"
import DownloadKitButton from "@/components/download-kit-button"

export const metadata: Metadata = {
  title: "Kit de Productividad IA NeuroWorkAI (2025) | Descarga Gratuita",
  description:
    "Descarga gratis nuestro Kit de Productividad con IA para Trabajo Remoto (2025) con herramientas, prompts, flujos y plantillas para optimizar tu trabajo.",
}

export default function KitProductividadPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-violet-50 to-white py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Kit de Productividad IA NeuroWorkAI
                </h1>
                <p className="text-gray-500 md:text-xl dark:text-gray-400">Actualizado 2025 - Descarga gratuita</p>
              </div>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Multiplica tu productividad, libera tu tiempo y enfócate en lo que realmente importa con nuestro kit
                definitivo de herramientas, prompts y automatizaciones IA.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <DownloadKitButton
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white"
                  text="Descargar Kit Gratuito"
                  trackingId="landing_hero"
                />
                <Button variant="outline" size="lg" asChild>
                  <Link href="#contenido">Ver Contenido</Link>
                </Button>
              </div>
            </div>
            <div className="mx-auto lg:mx-0 relative">
              <SafeImage
                src="/ai-productivity-kit-ebook.png"
                alt="Kit de Productividad IA NeuroWorkAI"
                width={500}
                height={650}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contenido del Kit */}
      <section id="contenido" className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">¿Qué incluye el Kit?</h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-primary/20">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    <polyline points="3.29 7 12 12 20.71 7" />
                    <line x1="12" y1="22" x2="12" y2="12" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">6 Herramientas IA Esenciales</h3>
                <p className="text-gray-500 mb-4">
                  Las mejores herramientas IA para productividad remota con descripción y enlaces directos.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">10 Prompts Prácticos</h3>
                <p className="text-gray-500 mb-4">
                  Prompts optimizados para ChatGPT, Notion AI, Jasper y más herramientas populares.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">3 Flujos de Automatización</h3>
                <p className="text-gray-500 mb-4">
                  Flujos listos para implementar en Zapier y Make para automatizar tareas repetitivas.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <line x1="3" y1="9" x2="21" y2="9" />
                    <line x1="9" y1="21" x2="9" y2="9" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Plantilla Notion</h3>
                <p className="text-gray-500 mb-4">
                  Plantilla de productividad diaria con IA integrada lista para usar en Notion.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vista previa del contenido */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Vista previa del contenido</h2>

          <div className="space-y-12">
            {/* Herramientas IA */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-2xl font-bold mb-6">Las 6 Herramientas IA Esenciales</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Herramienta
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Descripción
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Enlace
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap font-medium">Notion AI</td>
                      <td className="px-6 py-4">
                        Gestiona proyectos, tareas y genera contenido con IA dentro de tu espacio de trabajo.
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-primary">
                        <a
                          href="https://www.notion.so/product/ai"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center"
                        >
                          NOTION AI <ExternalLink className="ml-1 h-4 w-4" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap font-medium">ChatGPT-4o</td>
                      <td className="px-6 py-4">
                        Tu asistente personal para brainstorming, redacción, análisis y planificación.
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-primary">
                        <a
                          href="https://chat.openai.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center"
                        >
                          ChatGPT <ExternalLink className="ml-1 h-4 w-4" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap font-medium">Jasper AI</td>
                      <td className="px-6 py-4">
                        Redacción profesional asistida por IA para emails, blogs, ventas y marketing.
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-primary">
                        <a
                          href="https://www.jasper.ai/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center"
                        >
                          Jasper AI <ExternalLink className="ml-1 h-4 w-4" />
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-500 mt-4 text-center">Y 3 herramientas más en el kit completo...</p>
            </div>

            {/* Prompts */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-2xl font-bold mb-6">10 Prompts Prácticos</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-medium text-gray-700 mb-2">ChatGPT:</p>
                  <p className="text-gray-600 italic">
                    "Organiza mi lista de tareas para hoy en orden de prioridad basándote en impacto y urgencia:
                    [tareas]."
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-medium text-gray-700 mb-2">Notion AI:</p>
                  <p className="text-gray-600 italic">
                    "Resume automáticamente las siguientes notas de reunión en 5 acciones clave: [notas]."
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-medium text-gray-700 mb-2">Jasper AI:</p>
                  <p className="text-gray-600 italic">
                    "Escribe un email profesional para solicitar una reunión de [tema]."
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-medium text-gray-700 mb-2">Zapier AI:</p>
                  <p className="text-gray-600 italic">
                    "Sugiere 3 automatizaciones simples para ahorrar tiempo en la gestión de clientes."
                  </p>
                </div>
              </div>
              <p className="text-gray-500 mt-4 text-center">Y 6 prompts más en el kit completo...</p>
            </div>

            {/* Flujos de Automatización */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-2xl font-bold mb-6">3 Flujos de Automatización Inteligentes</h3>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-bold text-lg mb-2">Flujo 1: Captura de Leads Automática</h4>
                  <p className="text-gray-600 mb-2">
                    <span className="font-medium">Disparador:</span> Formulario completado (Typeform / Google Forms).
                  </p>
                  <p className="text-gray-600 mb-1">
                    <span className="font-medium">Acciones:</span>
                  </p>
                  <ul className="list-disc pl-6 text-gray-600">
                    <li>Crear contacto en CRM (Notion / Hubspot)</li>
                    <li>Enviar email de bienvenida</li>
                    <li>Crear tarea de seguimiento en Trello</li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-500 mt-4 text-center">Y 2 flujos más en el kit completo...</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bonus */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Bonus: 5 Errores Comunes Usando IA</h2>
            <div className="bg-violet-50 rounded-xl p-6 border border-violet-100">
              <ul className="space-y-3 text-left">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                  <span>Usar demasiadas herramientas sin dominar ninguna.</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                  <span>Automatizar sin validar procesos manuales.</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                  <span>No revisar las sugerencias generadas por IA.</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                  <span>No integrar la IA al flujo diario.</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                  <span>No medir resultados de las automatizaciones.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-b from-white to-violet-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">¿Listo para multiplicar tu productividad?</h2>
            <p className="text-gray-600 text-lg mb-8">
              Descarga ahora el Kit de Productividad IA NeuroWorkAI y comienza a trabajar de forma más inteligente, no
              más dura.
            </p>
            <DownloadKitButton
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white"
              text="Descargar Kit Gratuito"
              trackingId="landing_bottom"
            />
          </div>
        </div>
      </section>
    </main>
  )
}
