import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PoliticaCookiesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-light to-sky py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-3xl font-bold tracking-tight text-secondary sm:text-4xl md:text-5xl">
              Política de Cookies
            </h1>
            <p className="mt-4 text-lg text-gray-600">Última actualización: 1 de abril de 2023</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl prose prose-lg">
            <p>
              Esta Política de Cookies explica qué son las cookies y cómo las utilizamos en NeuroWorkAI. Debes leer esta
              política para entender qué son las cookies, cómo las usamos, los tipos de cookies que utilizamos, la
              información que recopilamos usando cookies y cómo se utiliza esa información, y cómo controlar las
              preferencias de cookies.
            </p>

            <h2>¿Qué son las cookies?</h2>

            <p>
              Las cookies son pequeños archivos de texto que se utilizan para almacenar pequeñas piezas de información.
              Se almacenan en tu dispositivo cuando el sitio web se carga en tu navegador. Estas cookies nos ayudan a
              hacer que el sitio web funcione correctamente, a hacerlo más seguro, a proporcionar una mejor experiencia
              de usuario, a entender cómo funciona el sitio web y a analizar qué funciona y dónde necesita mejorar.
            </p>

            <h2>¿Cómo utilizamos las cookies?</h2>

            <p>
              Como la mayoría de los servicios en línea, nuestro sitio web utiliza cookies propias y de terceros para
              varios propósitos. Las cookies propias son principalmente necesarias para que el sitio web funcione
              correctamente, y no recopilan ninguno de tus datos de identificación personal.
            </p>

            <p>
              Las cookies de terceros utilizadas en nuestro sitio web son principalmente para entender cómo funciona el
              sitio web, cómo interactúas con nuestro sitio web, mantener nuestros servicios seguros, proporcionar
              anuncios que sean relevantes para ti, y en general proporcionarte una mejor y mejorada experiencia de
              usuario y ayudar a acelerar tus futuras interacciones con nuestro sitio web.
            </p>

            <h2>Tipos de cookies que utilizamos</h2>

            <h3>Cookies esenciales</h3>
            <p>
              Estas cookies son necesarias para que el sitio web funcione y no pueden ser desactivadas en nuestros
              sistemas. Generalmente solo se establecen en respuesta a acciones realizadas por ti que equivalen a una
              solicitud de servicios, como establecer tus preferencias de privacidad, iniciar sesión o completar
              formularios.
            </p>

            <h3>Cookies de rendimiento</h3>
            <p>
              Estas cookies nos permiten contar las visitas y fuentes de tráfico para que podamos medir y mejorar el
              rendimiento de nuestro sitio. Nos ayudan a saber qué páginas son las más y menos populares y ver cómo los
              visitantes se mueven por el sitio.
            </p>

            <h3>Cookies de funcionalidad</h3>
            <p>
              Estas cookies permiten que el sitio proporcione funcionalidad y personalización mejoradas. Pueden ser
              establecidas por nosotros o por proveedores externos cuyos servicios hemos añadido a nuestras páginas.
            </p>

            <h3>Cookies de publicidad</h3>
            <p>
              Estas cookies pueden ser establecidas a través de nuestro sitio por nuestros socios publicitarios. Pueden
              ser utilizadas por esas empresas para construir un perfil de tus intereses y mostrarte anuncios relevantes
              en otros sitios.
            </p>

            <h2>Control de tus preferencias de cookies</h2>

            <p>
              La mayoría de los navegadores están configurados para aceptar cookies de forma predeterminada. Sin
              embargo, puedes eliminar o rechazar las cookies en la configuración de tu navegador. Ten en cuenta que
              dicha acción podría afectar al funcionamiento del sitio web.
            </p>

            <p>Para más información sobre cómo controlar las cookies, consulta la documentación de tu navegador:</p>

            <ul>
              <li>
                <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">
                  Chrome
                </a>
              </li>
              <li>
                <a
                  href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Firefox
                </a>
              </li>
              <li>
                <a
                  href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Safari
                </a>
              </li>
              <li>
                <a
                  href="https://support.microsoft.com/es-es/help/17442/windows-internet-explorer-delete-manage-cookies"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Internet Explorer
                </a>
              </li>
            </ul>

            <h2>Cambios en nuestra Política de Cookies</h2>

            <p>
              Podemos actualizar nuestra Política de Cookies de vez en cuando para reflejar, por ejemplo, cambios en las
              cookies que utilizamos o por otras razones operativas, legales o regulatorias. Por lo tanto, visita esta
              Política de Cookies regularmente para mantenerte informado sobre nuestro uso de cookies y tecnologías
              relacionadas.
            </p>

            <h2>Contacto</h2>

            <p>
              Si tienes alguna pregunta sobre nuestro uso de cookies, no dudes en contactarnos a través de nuestro
              formulario de contacto.
            </p>
          </div>

          <div className="mt-12 text-center">
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link href="/">Volver al inicio</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
