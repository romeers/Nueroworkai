import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AvisoAfiliadosPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-light to-sky py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-3xl font-bold tracking-tight text-secondary sm:text-4xl md:text-5xl">
              Divulgación de Afiliados
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
              NeuroWorkAI mantiene relaciones de afiliados con varias empresas. Queremos ser completamente transparentes
              sobre estas relaciones y cómo afectan a nuestro contenido y recomendaciones.
            </p>

            <h2>¿Qué son los enlaces de afiliados?</h2>

            <p>
              Los enlaces de afiliados son URL especiales que contienen el ID o nombre de usuario del afiliado. Cuando
              haces clic en uno de estos enlaces y realizas una compra o te registras en un servicio, el sitio web
              reconoce que fuiste referido por nosotros y nos paga una comisión.
            </p>

            <h2>Nuestro compromiso con la transparencia</h2>

            <p>En NeuroWorkAI, nos comprometemos a:</p>

            <ul>
              <li>Divulgar claramente nuestras relaciones de afiliados</li>
              <li>
                Proporcionar reseñas honestas e imparciales, independientemente de si tenemos una relación de afiliado
                con la herramienta
              </li>
              <li>Nunca recomendar una herramienta solo porque ofrezca comisiones de afiliados</li>
              <li>Probar personalmente todas las herramientas que recomendamos para asegurar su calidad</li>
            </ul>

            <h2>Cómo identificar los enlaces de afiliados</h2>

            <p>En nuestro sitio web, los enlaces de afiliados generalmente aparecen como:</p>

            <ul>
              <li>Botones "Probar gratis" o "Probar herramienta"</li>
              <li>Enlaces directos a sitios web de herramientas mencionadas en reseñas o comparativas</li>
              <li>Banners promocionales para herramientas específicas</li>
            </ul>

            <p>
              Además, incluimos una nota al pie en todas las páginas que contienen enlaces de afiliados para recordarte
              esta relación.
            </p>

            <h2>Impacto en el costo para ti</h2>

            <p>
              Es importante destacar que utilizar nuestros enlaces de afiliados no supone ningún costo adicional para
              ti. El precio que pagas por el producto o servicio es el mismo que pagarías si accedieras directamente al
              sitio web del proveedor. La comisión sale del bolsillo del proveedor, no del tuyo.
            </p>

            <h2>Programas de afiliados actuales</h2>

            <p>Actualmente participamos en los siguientes programas de afiliados:</p>

            <ul>
              <li>Notion</li>
              <li>Zapier</li>
              <li>ClickUp</li>
              <li>Jasper</li>
              <li>Grammarly</li>
              <li>Fireflies</li>
              <li>Y otros proveedores de herramientas de productividad con IA</li>
            </ul>

            <h2>Contacto</h2>

            <p>
              Si tienes alguna pregunta sobre nuestras relaciones de afiliados o cómo afectan a nuestro contenido, no
              dudes en contactarnos a través de nuestro formulario de contacto.
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
