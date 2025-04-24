import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PoliticaPrivacidadPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-light to-sky py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-3xl font-bold tracking-tight text-secondary sm:text-4xl md:text-5xl">
              Política de Privacidad
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
              En NeuroWorkAI, accesible desde neuroworkai.com, una de nuestras principales prioridades es la privacidad
              de nuestros visitantes. Este documento de Política de Privacidad contiene los tipos de información que se
              recopilan y registran por NeuroWorkAI y cómo la utilizamos.
            </p>

            <p>
              Si tienes preguntas adicionales o requieres más información sobre nuestra Política de Privacidad, no dudes
              en contactarnos.
            </p>

            <h2>Información que recopilamos</h2>

            <p>
              Cuando te registras en nuestro sitio, como parte del proceso, recopilamos la información personal que nos
              proporcionas, como tu nombre y dirección de correo electrónico.
            </p>

            <p>
              Tu información personal será utilizada solo para los motivos específicos indicados anteriormente, a menos
              que obtengamos tu permiso para utilizarla por otros motivos.
            </p>

            <h2>Archivos de registro</h2>

            <p>
              NeuroWorkAI sigue un procedimiento estándar de uso de archivos de registro. Estos archivos registran a los
              visitantes cuando visitan sitios web. Todas las empresas de alojamiento hacen esto como parte de los
              servicios de análisis de alojamiento. La información recopilada por los archivos de registro incluye
              direcciones de protocolo de Internet (IP), tipo de navegador, proveedor de servicios de Internet (ISP),
              marca de fecha y hora, páginas de referencia/salida y posiblemente el número de clics. Estos datos no
              están vinculados a ninguna información que sea personalmente identificable. El propósito de la información
              es analizar tendencias, administrar el sitio, rastrear el movimiento de los usuarios en el sitio web y
              recopilar información demográfica.
            </p>

            <h2>Cookies y web beacons</h2>

            <p>
              Como cualquier otro sitio web, NeuroWorkAI utiliza 'cookies'. Estas cookies se utilizan para almacenar
              información, incluidas las preferencias de los visitantes y las páginas del sitio web que el visitante
              accedió o visitó. La información se utiliza para optimizar la experiencia de los usuarios al personalizar
              el contenido de nuestra página web según el tipo de navegador de los visitantes y/u otra información.
            </p>

            <h2>Políticas de privacidad de socios publicitarios</h2>

            <p>
              Puedes consultar esta lista para encontrar la Política de Privacidad de cada uno de los socios
              publicitarios de NeuroWorkAI.
            </p>

            <p>
              Los servidores de anuncios o redes de anuncios de terceros utilizan tecnologías como cookies, JavaScript o
              Web Beacons que se utilizan en sus respectivos anuncios y enlaces que aparecen en NeuroWorkAI. Reciben
              automáticamente tu dirección IP cuando esto ocurre. Estas tecnologías se utilizan para medir la
              efectividad de sus campañas publicitarias y/o para personalizar el contenido publicitario que ves en los
              sitios web que visitas.
            </p>

            <p>
              Ten en cuenta que NeuroWorkAI no tiene acceso ni control sobre estas cookies que utilizan los anunciantes
              de terceros.
            </p>

            <h2>Políticas de privacidad de terceros</h2>

            <p>
              La Política de Privacidad de NeuroWorkAI no se aplica a otros anunciantes o sitios web. Por lo tanto, te
              aconsejamos que consultes las respectivas Políticas de Privacidad de estos servidores de anuncios de
              terceros para obtener información más detallada.
            </p>

            <h2>Información de menores</h2>

            <p>
              Otra parte de nuestra prioridad es agregar protección para los niños mientras usan Internet. Alentamos a
              los padres y tutores a observar, participar y/o monitorear y guiar su actividad en línea.
            </p>

            <p>
              NeuroWorkAI no recopila a sabiendas ninguna información de identificación personal de niños menores de 13
              años. Si crees que tu hijo proporcionó este tipo de información en nuestro sitio web, te recomendamos
              encarecidamente que nos contactes de inmediato y haremos todo lo posible para eliminar rápidamente dicha
              información de nuestros registros.
            </p>

            <h2>Consentimiento</h2>

            <p>
              Al utilizar nuestro sitio web, aceptas nuestra Política de Privacidad y estás de acuerdo con sus términos.
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
