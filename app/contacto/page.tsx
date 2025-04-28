import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import ContactForm from "@/components/contact-form"
import { Logo } from "@/components/logo"
import ContactPageSchema from "@/components/seo/contact-page-schema"

export const metadata: Metadata = {
  title: "Contacto | NeuroWorkAI",
  description:
    "¿Tienes preguntas sobre herramientas de IA o necesitas ayuda? Contáctanos y nuestro equipo te responderá lo antes posible.",
  openGraph: {
    title: "Contacto | NeuroWorkAI",
    description:
      "¿Tienes preguntas sobre herramientas de IA o necesitas ayuda? Contáctanos y nuestro equipo te responderá lo antes posible.",
    url: "https://neuroworkai.com/contacto",
    type: "website",
  },
}

export default function ContactPage() {
  return (
    <main className="flex-1">
      <ContactPageSchema />
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Contact form */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-6">Contacto</h1>
              <p className="text-gray-600 mb-8">
                ¿Tienes preguntas sobre herramientas de IA o necesitas ayuda? Contáctanos y nuestro equipo te responderá
                lo antes posible.
              </p>
              <ContactForm />
            </div>

            {/* Contact information */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="mb-8">
                <Logo className="w-32 h-auto mb-4" />
                <p className="text-gray-600">
                  Somos expertos en herramientas de IA para productividad y trabajo remoto. Nuestro objetivo es ayudarte
                  a encontrar las mejores soluciones para tu flujo de trabajo.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Correo electrónico</h3>
                  <a href="mailto:bussines@neuroworkai.com" className="text-primary hover:underline flex items-center">
                    bussines@neuroworkai.com
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">Síguenos</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.instagram.com/neuroworkai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-primary transition-colors"
                      aria-label="Instagram de NeuroWorkAI"
                    >
                      Instagram
                    </a>
                    <a
                      href="https://www.linkedin.com/company/neuroworksai/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-primary transition-colors"
                      aria-label="LinkedIn de NeuroWorkAI"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">Recursos populares</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/recursos?categoria=guias"
                        className="text-gray-600 hover:text-primary transition-colors flex items-center"
                      >
                        Guías de herramientas IA
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/kit-digital"
                        className="text-gray-600 hover:text-primary transition-colors flex items-center"
                      >
                        Kit Digital de Productividad
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/herramientas/comparar"
                        className="text-gray-600 hover:text-primary transition-colors flex items-center"
                      >
                        Comparativas de herramientas
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
