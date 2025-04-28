import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Condiciones de Servicio | NeuroWorkAI",
  description:
    "Términos y condiciones de uso de NeuroWorkAI. Información sobre derechos, obligaciones y responsabilidades al utilizar nuestra plataforma de herramientas de IA para productividad.",
  openGraph: {
    title: "Condiciones de Servicio | NeuroWorkAI",
    description:
      "Términos y condiciones de uso de NeuroWorkAI. Información sobre derechos, obligaciones y responsabilidades al utilizar nuestra plataforma.",
    url: "https://neuroworkai.com/condiciones-servicio",
    type: "website",
  },
}

export default function TermsOfServicePage() {
  return (
    <main className="flex-1">
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-4"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al inicio
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Condiciones de Servicio</h1>
            <p className="text-gray-600">
              Última actualización:{" "}
              {new Date().toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Introducción</h2>
              <p>
                Bienvenido a NeuroWorkAI. Estas Condiciones de Servicio ("Condiciones") rigen su acceso y uso de nuestro
                sitio web, servicios, aplicaciones y herramientas (colectivamente, los "Servicios").
              </p>
              <p>
                Al acceder o utilizar nuestros Servicios, usted acepta estar sujeto a estas Condiciones. Si no está de
                acuerdo con estas Condiciones, no debe acceder ni utilizar nuestros Servicios.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Descripción del Servicio</h2>
              <p>
                NeuroWorkAI es una plataforma que proporciona información, reseñas, comparativas y recursos sobre
                herramientas de productividad basadas en inteligencia artificial para profesionales remotos y empresas.
              </p>
              <p>
                Nos esforzamos por ofrecer información precisa y actualizada, pero no garantizamos la exhaustividad,
                fiabilidad, precisión o idoneidad de la información y los materiales encontrados u ofrecidos en nuestros
                Servicios para ningún propósito.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Programas de Afiliados</h2>
              <p>
                NeuroWorkAI participa en programas de afiliados con las herramientas y servicios que recomendamos. Esto
                significa que podemos recibir comisiones cuando usted hace clic en ciertos enlaces o realiza compras a
                través de nuestro sitio.
              </p>
              <p>
                Nuestras recomendaciones se basan en investigaciones exhaustivas y evaluaciones objetivas. Las
                relaciones de afiliación no influyen en nuestras opiniones o calificaciones, pero nos ayudan a mantener
                el funcionamiento de nuestra plataforma.
              </p>
              <p>
                Para más información, consulte nuestro{" "}
                <Link href="/aviso-afiliados" className="text-primary hover:underline">
                  Aviso de Afiliados
                </Link>
                .
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Precisión de la Información</h2>
              <p>
                Nos esforzamos por proporcionar información precisa y actualizada sobre las herramientas de IA y
                productividad que reseñamos. Sin embargo, las características, precios y políticas de estas herramientas
                pueden cambiar con el tiempo.
              </p>
              <p>
                Aunque actualizamos regularmente nuestro contenido, no podemos garantizar que toda la información sea
                completamente actual en todo momento. Recomendamos verificar siempre la información directamente con el
                proveedor de la herramienta antes de tomar decisiones de compra.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Propiedad Intelectual</h2>
              <p>
                Todo el contenido, diseño, gráficos, compilación, información y otros materiales en nuestros Servicios
                están protegidos por derechos de autor, marcas comerciales y otras leyes de propiedad intelectual.
              </p>
              <p>
                El contenido no puede ser reproducido, distribuido, transmitido, exhibido, publicado o difundido sin
                nuestro consentimiento previo por escrito, excepto para su uso personal y no comercial.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Cuentas de Usuario</h2>
              <p>
                Algunas funciones de nuestros Servicios pueden requerir registro. Usted es responsable de mantener la
                confidencialidad de su cuenta y contraseña, y acepta la responsabilidad de todas las actividades que
                ocurran bajo su cuenta.
              </p>
              <p>
                Nos reservamos el derecho de cerrar cuentas y eliminar o editar contenido a nuestra sola discreción si
                determinamos que se han violado estas Condiciones o si el comportamiento es perjudicial para otros
                usuarios o para nuestros Servicios.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Limitación de Responsabilidad</h2>
              <p>
                En la medida permitida por la ley, NeuroWorkAI no será responsable por daños directos, indirectos,
                incidentales, consecuentes o punitivos, incluidos, entre otros, pérdida de beneficios, datos, uso o
                cualquier otra pérdida intangible, resultante de:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>El uso o la imposibilidad de usar nuestros Servicios</li>
                <li>Cualquier cambio en los Servicios o cese temporal o permanente de los mismos</li>
                <li>El acceso no autorizado o la alteración de sus transmisiones o datos</li>
                <li>Declaraciones o conductas de terceros respecto a nuestros Servicios</li>
                <li>Cualquier otro asunto relacionado con nuestros Servicios</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Enlaces a Terceros</h2>
              <p>
                Nuestros Servicios pueden contener enlaces a sitios web o servicios de terceros que no son propiedad ni
                están controlados por NeuroWorkAI. No tenemos control sobre, y no asumimos responsabilidad por, el
                contenido, políticas de privacidad o prácticas de sitios web o servicios de terceros.
              </p>
              <p>
                Usted reconoce y acepta que NeuroWorkAI no será responsable, directa o indirectamente, por cualquier
                daño o pérdida causada o supuestamente causada por o en conexión con el uso o la confianza en cualquier
                contenido, bienes o servicios disponibles en o a través de dichos sitios web o servicios.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. Modificaciones</h2>
              <p>
                Nos reservamos el derecho, a nuestra sola discreción, de modificar o reemplazar estas Condiciones en
                cualquier momento. Si una revisión es material, intentaremos proporcionar un aviso con al menos 30 días
                de anticipación antes de que entren en vigor las nuevas condiciones.
              </p>
              <p>
                Al continuar accediendo o utilizando nuestros Servicios después de que esas revisiones entren en vigor,
                usted acepta estar sujeto a las condiciones revisadas.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">10. Ley Aplicable</h2>
              <p>
                Estas Condiciones se regirán e interpretarán de acuerdo con las leyes de España, sin tener en cuenta sus
                disposiciones sobre conflictos de leyes.
              </p>
              <p>
                Nuestra falta de hacer cumplir cualquier derecho o disposición de estas Condiciones no se considerará
                una renuncia a esos derechos. Si alguna disposición de estas Condiciones es considerada inválida o
                inaplicable por un tribunal, las disposiciones restantes de estas Condiciones permanecerán en vigor.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">11. Contacto</h2>
              <p>Si tiene alguna pregunta sobre estas Condiciones, por favor contáctenos en:</p>
              <p>
                <a href="mailto:bussines@neuroworkai.com" className="text-primary hover:underline">
                  bussines@neuroworkai.com
                </a>
              </p>
              <p>
                O visite nuestra{" "}
                <Link href="/contacto" className="text-primary hover:underline">
                  página de contacto
                </Link>
                .
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  )
}
