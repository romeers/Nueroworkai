import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, Star, Users, DollarSign, Clock, Zap, Shield } from "lucide-react"

export default function MetodologiaNeuroScorePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-light to-sky py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-3xl font-bold tracking-tight text-secondary sm:text-4xl md:text-5xl">
              Metodología NeuroScore™
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Cómo evaluamos y calificamos las herramientas de IA para garantizar recomendaciones objetivas y precisas.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="prose prose-lg mx-auto">
              <h2>¿Qué es el NeuroScore?</h2>
              <p>
                El NeuroScore™ es nuestro sistema propietario de evaluación que asigna una puntuación objetiva a cada
                herramienta de IA que analizamos. Esta metodología ha sido desarrollada por nuestro equipo de expertos
                en productividad, IA y trabajo remoto, y se basa en criterios cuantitativos y cualitativos para ofrecer
                una evaluación completa y equilibrada.
              </p>
              <p>
                Cada herramienta recibe una puntuación general de 1 a 10, siendo 10 la máxima calificación. Esta
                puntuación se calcula a partir de seis criterios clave que consideramos fundamentales para determinar el
                valor real de una herramienta de IA para profesionales remotos.
              </p>

              <h2>Nuestros Criterios de Evaluación</h2>
              <p>Cada herramienta es evaluada en función de los siguientes criterios:</p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start rounded-lg border p-4 hover:bg-gray-50">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary">Facilidad de uso</h3>
                    <p className="text-gray-600">
                      Evaluamos la curva de aprendizaje, la intuitividad de la interfaz y la accesibilidad para usuarios
                      con diferentes niveles de experiencia técnica.
                    </p>
                  </div>
                </div>

                <div className="flex items-start rounded-lg border p-4 hover:bg-gray-50">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Star className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary">Funciones IA</h3>
                    <p className="text-gray-600">
                      Analizamos la calidad, precisión y utilidad de las funciones de IA, así como su capacidad para
                      resolver problemas reales en entornos de trabajo remoto.
                    </p>
                  </div>
                </div>

                <div className="flex items-start rounded-lg border p-4 hover:bg-gray-50">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <DollarSign className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary">Relación calidad-precio</h3>
                    <p className="text-gray-600">
                      Evaluamos si el precio de la herramienta se justifica por el valor que aporta, comparándola con
                      alternativas similares en el mercado.
                    </p>
                  </div>
                </div>

                <div className="flex items-start rounded-lg border p-4 hover:bg-gray-50">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Shield className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary">Soporte</h3>
                    <p className="text-gray-600">
                      Analizamos la calidad del soporte técnico, la documentación disponible y los recursos de
                      aprendizaje que ofrece la herramienta.
                    </p>
                  </div>
                </div>

                <div className="flex items-start rounded-lg border p-4 hover:bg-gray-50">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Zap className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary">Integración</h3>
                    <p className="text-gray-600">
                      Evaluamos la capacidad de la herramienta para integrarse con otras aplicaciones y plataformas
                      comúnmente utilizadas en entornos de trabajo remoto.
                    </p>
                  </div>
                </div>

                <div className="flex items-start rounded-lg border p-4 hover:bg-gray-50">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary">Tiempo de implementación</h3>
                    <p className="text-gray-600">
                      Medimos el tiempo necesario para implementar la herramienta y comenzar a obtener resultados
                      tangibles, un factor crucial para profesionales y equipos remotos.
                    </p>
                  </div>
                </div>
              </div>

              <h2>Nuestro Proceso de Evaluación</h2>
              <p>Cada herramienta que analizamos pasa por un riguroso proceso de evaluación que incluye:</p>

              <ol className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-medium">
                    1
                  </div>
                  <div>
                    <h4 className="font-medium text-secondary">Prueba práctica</h4>
                    <p className="text-gray-600">
                      Nuestros expertos utilizan la herramienta en situaciones reales de trabajo remoto durante al menos
                      2 semanas.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-medium">
                    2
                  </div>
                  <div>
                    <h4 className="font-medium text-secondary">Análisis comparativo</h4>
                    <p className="text-gray-600">
                      Comparamos la herramienta con alternativas similares para identificar sus fortalezas y debilidades
                      relativas.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-medium">
                    3
                  </div>
                  <div>
                    <h4 className="font-medium text-secondary">Recopilación de opiniones</h4>
                    <p className="text-gray-600">
                      Analizamos opiniones de usuarios reales y expertos del sector para complementar nuestra
                      evaluación.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-medium">
                    4
                  </div>
                  <div>
                    <h4 className="font-medium text-secondary">Evaluación técnica</h4>
                    <p className="text-gray-600">
                      Analizamos aspectos técnicos como rendimiento, seguridad, privacidad y cumplimiento normativo.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-medium">
                    5
                  </div>
                  <div>
                    <h4 className="font-medium text-secondary">Cálculo del NeuroScore</h4>
                    <p className="text-gray-600">
                      Aplicamos nuestra fórmula propietaria para calcular la puntuación final basada en los seis
                      criterios clave.
                    </p>
                  </div>
                </li>
              </ol>

              <h2>Interpretación del NeuroScore</h2>
              <p>Para ayudarte a interpretar nuestras puntuaciones, hemos establecido la siguiente escala:</p>

              <div className="mt-4 space-y-2">
                <div className="flex items-center">
                  <div className="mr-2 h-4 w-4 rounded-full bg-green-500"></div>
                  <span className="font-medium">9.0 - 10.0:</span>
                  <span className="ml-2">Excepcional. Altamente recomendado para todos los usuarios.</span>
                </div>
                <div className="flex items-center">
                  <div className="mr-2 h-4 w-4 rounded-full bg-green-400"></div>
                  <span className="font-medium">8.0 - 8.9:</span>
                  <span className="ml-2">Excelente. Una opción sólida con mínimas limitaciones.</span>
                </div>
                <div className="flex items-center">
                  <div className="mr-2 h-4 w-4 rounded-full bg-yellow-500"></div>
                  <span className="font-medium">7.0 - 7.9:</span>
                  <span className="ml-2">Muy bueno. Recomendado para la mayoría de los usuarios.</span>
                </div>
                <div className="flex items-center">
                  <div className="mr-2 h-4 w-4 rounded-full bg-yellow-400"></div>
                  <span className="font-medium">6.0 - 6.9:</span>
                  <span className="ml-2">Bueno. Adecuado para casos de uso específicos.</span>
                </div>
                <div className="flex items-center">
                  <div className="mr-2 h-4 w-4 rounded-full bg-red-400"></div>
                  <span className="font-medium">5.0 - 5.9:</span>
                  <span className="ml-2">Aceptable. Tiene limitaciones significativas.</span>
                </div>
                <div className="flex items-center">
                  <div className="mr-2 h-4 w-4 rounded-full bg-red-500"></div>
                  <span className="font-medium">Menos de 5.0:</span>
                  <span className="ml-2">No recomendado. Existen mejores alternativas disponibles.</span>
                </div>
              </div>

              <h2>Nuestro Compromiso con la Objetividad</h2>
              <p>
                En NeuroWorkAI nos comprometemos a proporcionar evaluaciones objetivas e imparciales. Para garantizar
                esto:
              </p>

              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span>Probamos personalmente todas las herramientas que reseñamos.</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span>Divulgamos claramente nuestras relaciones de afiliados.</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span>Nunca aceptamos pagos por reseñas positivas o puntuaciones infladas.</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span>Actualizamos regularmente nuestras reseñas para reflejar cambios en las herramientas.</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span>
                    Valoramos la retroalimentación de nuestra comunidad para mejorar continuamente nuestra metodología.
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-12 rounded-lg bg-primary/5 p-6 border border-primary/10">
              <h3 className="text-xl font-semibold text-secondary">
                ¿Tienes alguna pregunta sobre nuestra metodología?
              </h3>
              <p className="mt-2 text-gray-600">
                Si tienes alguna pregunta sobre cómo evaluamos las herramientas o sugerencias para mejorar nuestra
                metodología, no dudes en contactarnos.
              </p>
              <div className="mt-4">
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <Link href="/sobre-nosotros#contacto">Contactar</Link>
                </Button>
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
              Descubre las mejores herramientas de IA
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Explora nuestras reseñas y comparativas basadas en la metodología NeuroScore™ para encontrar las
              herramientas perfectas para tu trabajo remoto.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link href="/herramientas">Explorar herramientas</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
