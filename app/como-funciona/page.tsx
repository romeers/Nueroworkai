import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search, ThumbsUp, AlertCircle, DollarSign } from "lucide-react"

export default function ComoFuncionaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-light to-sky py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-3xl font-bold tracking-tight text-secondary sm:text-4xl md:text-5xl">
              Cómo Funciona
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Descubre cómo NeuroWorkAI te ayuda a encontrar las mejores herramientas de productividad con IA para tu
              trabajo remoto.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-2xl font-bold text-secondary sm:text-3xl">Nuestro Proceso</h2>
            <p className="mt-4 text-center text-lg text-gray-600">
              En NeuroWorkAI seguimos un riguroso proceso para evaluar y recomendar herramientas de IA que realmente
              mejoren tu productividad.
            </p>

            <div className="mt-12 space-y-12">
              <div className="relative">
                <div className="absolute left-9 top-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></div>
                <div className="relative flex items-start space-x-4">
                  <div>
                    <div className="flex h-18 w-18 items-center justify-center rounded-full bg-primary text-white">
                      <Search className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-xl font-semibold text-secondary">Investigación</h3>
                    <p className="mt-2 text-gray-600">
                      Investigamos exhaustivamente el mercado de herramientas de IA para productividad, identificando
                      las soluciones más prometedoras y relevantes para profesionales remotos.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute left-9 top-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></div>
                <div className="relative flex items-start space-x-4">
                  <div>
                    <div className="flex h-18 w-18 items-center justify-center rounded-full bg-primary text-white">
                      <ThumbsUp className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-xl font-semibold text-secondary">Prueba y Evaluación</h3>
                    <p className="mt-2 text-gray-600">
                      Probamos personalmente cada herramienta, evaluando su facilidad de uso, funcionalidades,
                      integración con otras aplicaciones y valor general para el trabajo remoto.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute left-9 top-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></div>
                <div className="relative flex items-start space-x-4">
                  <div>
                    <div className="flex h-18 w-18 items-center justify-center rounded-full bg-primary text-white">
                      <AlertCircle className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-xl font-semibold text-secondary">Análisis Imparcial</h3>
                    <p className="mt-2 text-gray-600">
                      Creamos reseñas detalladas y comparativas objetivas, destacando tanto los puntos fuertes como las
                      limitaciones de cada herramienta para ayudarte a tomar decisiones informadas.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative flex items-start space-x-4">
                  <div>
                    <div className="flex h-18 w-18 items-center justify-center rounded-full bg-primary text-white">
                      <DollarSign className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-xl font-semibold text-secondary">Recomendaciones y Enlaces de Afiliados</h3>
                    <p className="mt-2 text-gray-600">
                      Compartimos nuestras recomendaciones a través de enlaces de afiliados. Si decides probar una
                      herramienta a través de nuestros enlaces, podemos recibir una comisión sin costo adicional para
                      ti.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Affiliate Disclosure Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-2xl font-bold text-secondary sm:text-3xl">Divulgación de Afiliados</h2>
            <p className="mt-4 text-center text-lg text-gray-600">
              En NeuroWorkAI somos transparentes sobre cómo monetizamos nuestro contenido.
            </p>

            <div className="mt-8 rounded-lg bg-white p-6 shadow-md">
              <h3 className="text-xl font-semibold text-secondary">¿Cómo funcionan nuestros enlaces de afiliados?</h3>
              <p className="mt-2 text-gray-600">
                Cuando haces clic en un enlace de afiliado en nuestro sitio y realizas una compra o te registras en un
                servicio, podemos recibir una comisión. Esto nos ayuda a mantener el sitio y seguir creando contenido
                valioso.
              </p>

              <h3 className="mt-6 text-xl font-semibold text-secondary">Nuestro compromiso contigo</h3>
              <ul className="mt-2 space-y-2 text-gray-600">
                <li className="flex items-start">
                  <svg className="mr-2 h-5 w-5 flex-shrink-0 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    Siempre proporcionamos reseñas honestas e imparciales, independientemente de si tenemos una relación
                    de afiliado con la herramienta.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="mr-2 h-5 w-5 flex-shrink-0 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Nunca recomendamos una herramienta solo porque ofrezca comisiones de afiliados.</span>
                </li>
                <li className="flex items-start">
                  <svg className="mr-2 h-5 w-5 flex-shrink-0 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Probamos personalmente todas las herramientas que recomendamos para asegurar su calidad.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-2xl font-bold text-secondary sm:text-3xl">Preguntas Frecuentes</h2>

            <div className="mt-8 space-y-6">
              <div className="rounded-lg bg-white p-6 shadow-md">
                <h3 className="text-lg font-semibold text-secondary">
                  ¿Cómo seleccionan las herramientas que recomiendan?
                </h3>
                <p className="mt-2 text-gray-600">
                  Evaluamos cada herramienta basándonos en su facilidad de uso, funcionalidades, precio, soporte al
                  cliente y, lo más importante, su capacidad para mejorar la productividad en entornos de trabajo
                  remoto.
                </p>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-md">
                <h3 className="text-lg font-semibold text-secondary">
                  ¿Tengo que pagar para acceder a vuestro contenido?
                </h3>
                <p className="mt-2 text-gray-600">
                  No, todo nuestro contenido es completamente gratuito. Nos financiamos a través de comisiones de
                  afiliados cuando los usuarios se registran en servicios a través de nuestros enlaces.
                </p>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-md">
                <h3 className="text-lg font-semibold text-secondary">
                  ¿Puedo sugerir una herramienta para que la reseñéis?
                </h3>
                <p className="mt-2 text-gray-600">
                  ¡Por supuesto! Nos encanta descubrir nuevas herramientas. Puedes enviarnos tu sugerencia a través de
                  nuestro formulario de contacto y la evaluaremos para una posible reseña.
                </p>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-md">
                <h3 className="text-lg font-semibold text-secondary">
                  ¿Ofrecéis descuentos exclusivos para las herramientas?
                </h3>
                <p className="mt-2 text-gray-600">
                  En algunos casos, negociamos descuentos exclusivos con los proveedores de herramientas para nuestros
                  lectores. Cuando están disponibles, los mencionamos claramente en nuestras reseñas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              ¿Listo para potenciar tu productividad?
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Explora nuestras reseñas y comparativas para encontrar las herramientas de IA perfectas para tu trabajo
              remoto.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link href="/comparativas">Ver comparativas</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link href="/resenas">Explorar reseñas</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
