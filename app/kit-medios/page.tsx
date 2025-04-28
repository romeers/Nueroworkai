import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Download, Mail, ExternalLink } from "lucide-react"
import CTAButton from "@/components/cta-button"

export const metadata: Metadata = {
  title: "Kit de Medios | NeuroWorkAI",
  description:
    "Recursos de marca, información corporativa y datos para prensa y colaboradores de NeuroWorkAI. Descubre nuestra misión, audiencia y oportunidades de colaboración.",
  openGraph: {
    title: "Kit de Medios | NeuroWorkAI",
    description: "Recursos de marca, información corporativa y datos para prensa y colaboradores de NeuroWorkAI.",
    url: "https://neuroworkai.com/kit-medios",
    type: "website",
  },
}

export default function MediaKitPage() {
  return (
    <main className="flex-1">
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="mb-12">
            <Link
              href="/"
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-4"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al inicio
            </Link>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Kit de Medios</h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Recursos e información para prensa, colaboradores y partners interesados en NeuroWorkAI.
            </p>
          </div>

          {/* Sobre Nosotros */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 border-b pb-2">Sobre NeuroWorkAI</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg mb-4">
                  NeuroWorkAI es la plataforma líder en español dedicada a analizar, comparar y recomendar herramientas
                  de inteligencia artificial para profesionales remotos y equipos de trabajo distribuidos.
                </p>
                <p className="text-lg mb-4">
                  Fundada en 2023, nuestra misión es ayudar a profesionales y empresas a navegar el complejo ecosistema
                  de herramientas de IA para mejorar su productividad, optimizar flujos de trabajo y mantenerse
                  competitivos en la era digital.
                </p>
                <p className="text-lg">
                  A través de análisis detallados, comparativas imparciales y recursos educativos, empoderamos a nuestra
                  audiencia para tomar decisiones informadas sobre las herramientas que mejor se adaptan a sus
                  necesidades específicas.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Datos Clave</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-primary/10 text-primary rounded-full p-1 mr-3 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span>Lanzamiento: 2023</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/10 text-primary rounded-full p-1 mr-3 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span>+50 herramientas de IA analizadas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/10 text-primary rounded-full p-1 mr-3 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span>+20 guías y recursos educativos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/10 text-primary rounded-full p-1 mr-3 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span>Audiencia en crecimiento en España y Latinoamérica</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/10 text-primary rounded-full p-1 mr-3 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span>Metodología propia de evaluación: NeuroScore</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Nuestra Audiencia */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 border-b pb-2">Nuestra Audiencia</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100">
                <div className="bg-primary/10 text-primary rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Profesionales Remotos</h3>
                <p className="text-gray-600">
                  Freelancers, emprendedores y trabajadores remotos que buscan optimizar su productividad y flujos de
                  trabajo con herramientas de IA.
                </p>
              </div>
              <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100">
                <div className="bg-primary/10 text-primary rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Equipos Distribuidos</h3>
                <p className="text-gray-600">
                  Empresas con equipos remotos o híbridos que necesitan soluciones de IA para mejorar la colaboración y
                  eficiencia.
                </p>
              </div>
              <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100">
                <div className="bg-primary/10 text-primary rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Innovadores Tecnológicos</h3>
                <p className="text-gray-600">
                  Profesionales interesados en las últimas tendencias de IA y cómo aplicarlas para obtener ventajas
                  competitivas.
                </p>
              </div>
            </div>
          </section>

          {/* Recursos de Marca */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 border-b pb-2">Recursos de Marca</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Logotipos</h3>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white p-4 rounded-lg border border-gray-200 flex items-center justify-center">
                    <Image
                      src="/neuroworkai-logo.png"
                      alt="NeuroWorkAI Logo"
                      width={200}
                      height={80}
                      className="h-auto"
                    />
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg border border-gray-200 flex items-center justify-center">
                    <Image
                      src="/neuroworkai-logo-white.png"
                      alt="NeuroWorkAI Logo White"
                      width={200}
                      height={80}
                      className="h-auto"
                    />
                  </div>
                </div>
                <CTAButton
                  href="/assets/neuroworkai-logos.zip"
                  variant="outline"
                  size="md"
                  className="w-full justify-center"
                  icon={<Download className="h-4 w-4" />}
                >
                  Descargar Pack de Logos
                </CTAButton>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Paleta de Colores</h3>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="rounded-lg overflow-hidden">
                    <div className="h-20 bg-primary"></div>
                    <div className="p-3 bg-white border border-gray-200 border-t-0">
                      <p className="font-medium">Primario</p>
                      <p className="text-sm text-gray-500">#6d28d9</p>
                    </div>
                  </div>
                  <div className="rounded-lg overflow-hidden">
                    <div className="h-20 bg-secondary"></div>
                    <div className="p-3 bg-white border border-gray-200 border-t-0">
                      <p className="font-medium">Secundario</p>
                      <p className="text-sm text-gray-500">#4f46e5</p>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4">Tipografía</h3>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <p className="font-heading text-2xl mb-2">Poppins (Títulos)</p>
                  <p className="font-sans text-lg">Inter (Cuerpo de texto)</p>
                </div>
              </div>
            </div>
          </section>

          {/* Colaboraciones */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 border-b pb-2">Colaboraciones</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Oportunidades de Colaboración</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-primary/10 text-primary rounded-full p-1 mr-3 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span>Contenido patrocinado y reseñas de herramientas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/10 text-primary rounded-full p-1 mr-3 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span>Webinars y eventos conjuntos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/10 text-primary rounded-full p-1 mr-3 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span>Programas de afiliación</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/10 text-primary rounded-full p-1 mr-3 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span>Creación de guías y recursos conjuntos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/10 text-primary rounded-full p-1 mr-3 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span>Entrevistas y apariciones en medios</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold mb-4">Contacto para Medios</h3>
                <p className="mb-4">
                  Para consultas de prensa, solicitudes de entrevistas o colaboraciones, contáctanos en:
                </p>
                <div className="flex items-center mb-4">
                  <Mail className="h-5 w-5 text-primary mr-2" />
                  <a href="mailto:prensa@neuroworkai.com" className="text-primary hover:underline">
                    prensa@neuroworkai.com
                  </a>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <CTAButton href="/contacto" variant="primary" size="md" className="flex-1 justify-center">
                    Contactar
                  </CTAButton>
                  <CTAButton
                    href="/assets/neuroworkai-press-kit.pdf"
                    variant="outline"
                    size="md"
                    className="flex-1 justify-center"
                    icon={<Download className="h-4 w-4" />}
                  >
                    Descargar Press Kit
                  </CTAButton>
                </div>
              </div>
            </div>
          </section>

          {/* Apariciones en Medios */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 border-b pb-2">Apariciones en Medios</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white shadow-sm rounded-lg p-6 border border-gray-100">
                <h3 className="text-lg font-semibold mb-2">Revista Emprendedores</h3>
                <p className="text-gray-600 mb-4">
                  "Las 10 herramientas de IA que están revolucionando el trabajo remoto"
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Leer artículo <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </div>
              <div className="bg-white shadow-sm rounded-lg p-6 border border-gray-100">
                <h3 className="text-lg font-semibold mb-2">Podcast TechTalks</h3>
                <p className="text-gray-600 mb-4">
                  "El futuro del trabajo: IA y productividad en equipos distribuidos"
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Escuchar episodio <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </div>
              <div className="bg-white shadow-sm rounded-lg p-6 border border-gray-100">
                <h3 className="text-lg font-semibold mb-2">Blog Tecnología Actual</h3>
                <p className="text-gray-600 mb-4">
                  "Entrevista: Cómo NeuroWorkAI está democratizando el acceso a herramientas de IA"
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Leer entrevista <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </section>

          {/* CTA Final */}
          <section className="bg-primary/5 p-8 rounded-lg text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">¿Interesado en colaborar con nosotros?</h2>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Estamos abiertos a diferentes tipos de colaboraciones con medios, creadores de contenido y empresas del
              sector tecnológico.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <CTAButton href="/contacto" variant="primary" size="lg">
                Contactar
              </CTAButton>
              <CTAButton href="mailto:colaboraciones@neuroworkai.com" variant="outline" size="lg">
                Enviar Email
              </CTAButton>
            </div>
          </section>
        </div>
      </section>
    </main>
  )
}
