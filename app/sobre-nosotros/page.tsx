"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  CheckCircle,
  BarChart,
  Users,
  Lightbulb,
  Shield,
  Award,
  ArrowRight,
} from "lucide-react"
import Stats from "@/components/stats"
import TrustBadges from "@/components/trust-badges"
import SafeImage from "@/components/safe-image"

// Datos para estadísticas
const stats = [
  {
    value: "2021",
    label: "Fundación",
    description: "Ayudando a profesionales desde entonces",
    icon: <Award className="h-6 w-6" />,
  },
  {
    value: "15.000+",
    label: "Usuarios mensuales",
    description: "Profesionales que confían en nosotros",
    icon: <Users className="h-6 w-6" />,
  },
  {
    value: "200+",
    label: "Guías y recursos",
    description: "Contenido exclusivo y gratuito",
    icon: <Lightbulb className="h-6 w-6" />,
  },
  {
    value: "50+",
    label: "Herramientas analizadas",
    description: "Reseñas detalladas y actualizadas",
    icon: <BarChart className="h-6 w-6" />,
  },
]

// Datos para badges de confianza
const trustBadges = [
  {
    name: "Notion",
    logoUrl: "/notion-logo.png",
    width: 120,
    height: 40,
  },
  {
    name: "Zapier",
    logoUrl: "/zapier-logo.png",
    width: 120,
    height: 40,
  },
  {
    name: "ClickUp",
    logoUrl: "/clickup-logo.png",
    width: 120,
    height: 40,
  },
  {
    name: "Jasper",
    logoUrl: "/jasper-logo.png",
    width: 120,
    height: 40,
  },
  {
    name: "Grammarly",
    logoUrl: "/grammarly-logo.png",
    width: 120,
    height: 40,
  },
]

// Datos del equipo
const teamMembers = [
  {
    name: "Ana Gómez",
    role: "Especialista en Productividad IA",
    bio: "Experta en herramientas de IA para escritura y gestión de proyectos con más de 8 años de experiencia en trabajo remoto.",
    avatarUrl: "/testimonial-avatar-1.png",
  },
  {
    name: "Carlos Martínez",
    role: "Analista de Herramientas IA",
    bio: "Especialista en automatización y flujos de trabajo con IA. Ha evaluado más de 100 herramientas para equipos remotos.",
    avatarUrl: "/testimonial-avatar-2.png",
  },
  {
    name: "Laura Rodríguez",
    role: "Directora de Contenido",
    bio: "Experta en comunicación digital y creación de contenido educativo sobre productividad y herramientas IA.",
    avatarUrl: "/testimonial-avatar-3.png",
  },
]

// Valores de la empresa
const companyValues = [
  {
    title: "Transparencia",
    description: "Divulgamos claramente nuestras relaciones de afiliados y metodología de evaluación.",
    icon: <Shield className="h-6 w-6 text-primary" />,
  },
  {
    title: "Objetividad",
    description:
      "Evaluamos cada herramienta con nuestro sistema propietario NeuroScore™ basado en criterios objetivos.",
    icon: <BarChart className="h-6 w-6 text-primary" />,
  },
  {
    title: "Utilidad",
    description:
      "Creamos contenido práctico y accionable que realmente ayuda al profesional remoto a ser más productivo.",
    icon: <Lightbulb className="h-6 w-6 text-primary" />,
  },
  {
    title: "Comunidad",
    description: "Escuchamos activamente a nuestra comunidad para mejorar constantemente nuestras recomendaciones.",
    icon: <Users className="h-6 w-6 text-primary" />,
  },
]

export default function SobreNosotrosPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [formStatus, setFormStatus] = useState<{
    type: "success" | "error" | "info" | null
    message: string | null
  }>({
    type: null,
    message: null,
  })
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setFormStatus({ type: "info", message: "Enviando mensaje..." })

    try {
      const response = await fetch("/api/contact-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setFormStatus({
          type: "success",
          message: "¡Gracias por tu mensaje! Te responderemos lo antes posible.",
        })
        toast({
          title: "Mensaje enviado",
          description: "Hemos recibido tu mensaje correctamente.",
          variant: "default",
        })
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        const errorData = await response.json()
        throw new Error(errorData.message || "Error al enviar el mensaje")
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error)
      setFormStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Error al enviar el mensaje. Por favor, inténtalo de nuevo.",
      })
      toast({
        title: "Error",
        description: "No se pudo enviar el mensaje. Por favor, inténtalo de nuevo.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  // Efecto para limpiar el estado del formulario después de un tiempo
  useEffect(() => {
    if (formStatus.type === "success" || formStatus.type === "error") {
      const timer = setTimeout(() => {
        setFormStatus({ type: null, message: null })
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [formStatus])

  return (
    <>
      {/* Hero Section - SEO Optimized */}
      <section className="bg-gradient-to-r from-sky-50 to-indigo-50 py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-4xl font-bold tracking-tight text-secondary sm:text-5xl md:text-6xl">
              Conoce a NeuroWorkAI
            </h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
              Somos una plataforma experta en herramientas IA para trabajo remoto. Nuestra misión es ayudarte a ser más
              productivo con inteligencia artificial.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-primary hover:bg-primary/90 px-8 py-6 text-lg">
                <Link href="/herramientas-ia">Explorar herramientas IA</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 px-8 py-6 text-lg"
              >
                <a href="#contacto">Contactar</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Historia de la Marca */}
      <section className="py-16 bg-white" id="historia">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="text-center mb-12">
              <div className="mx-auto h-auto w-48 mb-8">
                <SafeImage
                  src="/logo.png"
                  alt="NeuroWorkAI Logo"
                  width={200}
                  height={60}
                  className="mx-auto h-auto w-48"
                />
              </div>
              <h2 className="text-3xl font-bold text-secondary mb-6">Nuestra Historia</h2>
              <div className="prose prose-lg mx-auto">
                <p className="text-gray-600 leading-relaxed">
                  NeuroWorkAI nació en 2021 cuando un equipo de profesionales remotos se enfrentó a un problema común:
                  la abrumadora cantidad de herramientas de IA disponibles y la dificultad para encontrar las más
                  adecuadas para cada necesidad específica.
                </p>
                <p className="text-gray-600 leading-relaxed mt-4">
                  Fundamos esta plataforma con la visión de crear un recurso definitivo que ayude a los profesionales
                  remotos a navegar por el ecosistema de herramientas de IA, proporcionando análisis imparciales,
                  comparativas detalladas y recursos prácticos que realmente mejoren la productividad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestra Misión */}
      <section className="py-16 bg-gray-50" id="mision">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary mb-6">Nuestra Misión</h2>
            <p className="text-lg text-gray-600 mb-8">
              En NeuroWorkAI, nos dedicamos a transformar la forma en que los profesionales remotos utilizan la IA para
              mejorar su productividad.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start hover:shadow-md transition-all duration-300">
              <div className="bg-primary/10 p-3 rounded-full mr-4">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-secondary mb-2">Simplificar la búsqueda</h3>
                <p className="text-gray-600">
                  Facilitamos el descubrimiento de las herramientas de IA más adecuadas para cada profesional.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start hover:shadow-md transition-all duration-300">
              <div className="bg-primary/10 p-3 rounded-full mr-4">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-secondary mb-2">Información objetiva</h3>
                <p className="text-gray-600">
                  Proporcionamos análisis basados en pruebas reales y criterios objetivos.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start hover:shadow-md transition-all duration-300">
              <div className="bg-primary/10 p-3 rounded-full mr-4">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-secondary mb-2">Aumentar la productividad</h3>
                <p className="text-gray-600">
                  Ayudamos a los trabajadores remotos a ser más eficientes y reducir el estrés digital.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start hover:shadow-md transition-all duration-300">
              <div className="bg-primary/10 p-3 rounded-full mr-4">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-secondary mb-2">Innovación constante</h3>
                <p className="text-gray-600">
                  Nos mantenemos al día con las últimas innovaciones en IA para trabajo remoto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestros Valores */}
      <section className="py-16 bg-white" id="valores">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary mb-6">Nuestros Valores</h2>
            <p className="text-lg text-gray-600 mb-8">
              Estos principios fundamentales guían todo lo que hacemos en NeuroWorkAI.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {companyValues.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all duration-300"
              >
                <div className="bg-primary/10 p-4 rounded-full inline-flex mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-secondary mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nuestro Equipo */}
      <section className="py-16 bg-gray-50" id="equipo">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary mb-6">¿Quién está detrás de NeuroWorkAI?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Somos un equipo de profesionales remotos apasionados por la tecnología y la productividad. Todos
              utilizamos activamente las herramientas que reseñamos en nuestro trabajo diario.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
              >
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-4 bg-gray-100">
                    <SafeImage
                      src={member.avatarUrl}
                      alt={`Foto de ${member.name}`}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-center">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <Stats
        title="NeuroWorkAI en números"
        subtitle="Datos que respaldan nuestra experiencia y compromiso con la calidad"
        stats={stats}
      />

      {/* Trust Badges Section */}
      <TrustBadges title="Colaboramos con las principales herramientas de IA" badges={trustBadges} />

      {/* SEO & Trust Microcopy */}
      <section className="py-8 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm text-gray-500">
              NeuroWorkAI participa en programas de afiliación. Recomendamos solo herramientas que hemos probado y
              validado.
              <Link href="/aviso-afiliados" className="text-primary hover:underline ml-1">
                Leer nuestro aviso de afiliados
              </Link>
              {" y "}
              <Link href="/politica-privacidad" className="text-primary hover:underline">
                política de transparencia
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white" id="contacto">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <h2 className="text-3xl font-bold text-secondary mb-4">Contacta con nosotros</h2>
              <p className="text-lg text-gray-600">
                ¿Tienes preguntas, sugerencias o quieres colaborar con nosotros? Estamos aquí para ayudarte.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-secondary mb-6">Envíanos un mensaje</h3>

                <form id="contact-form" className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Correo electrónico *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                      Asunto
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                      placeholder="Asunto de tu mensaje"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Mensaje *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                      placeholder="¿En qué podemos ayudarte?"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex justify-center items-center gap-2 bg-primary text-white py-3 px-4 rounded-md hover:bg-primary/90 transition-colors disabled:opacity-70"
                  >
                    {loading ? (
                      <>
                        <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></span>
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <span>Enviar mensaje</span>
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </button>

                  {formStatus.type && (
                    <div
                      className={`mt-4 p-3 rounded text-sm ${
                        formStatus.type === "success"
                          ? "bg-green-50 text-green-700"
                          : formStatus.type === "error"
                            ? "bg-red-50 text-red-700"
                            : "bg-blue-50 text-blue-700"
                      }`}
                    >
                      {formStatus.message}
                    </div>
                  )}
                </form>
              </div>

              <div>
                <div>
                  <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 mb-8 hover:shadow-md transition-all duration-300">
                    <h3 className="text-xl font-bold text-secondary mb-6">Información de contacto</h3>
                    <div className="space-y-6">
                      <div className="flex items-start group">
                        <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 transition-colors">
                          <Mail className="h-6 w-6 text-primary" />
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-900">Email de negocios</p>
                          <a
                            href="mailto:bussines@neuroworkai.com"
                            className="mt-1 text-sm text-gray-600 hover:text-primary transition-colors font-medium"
                          >
                            bussines@neuroworkai.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start group">
                        <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 transition-colors">
                          <Phone className="h-6 w-6 text-primary" />
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-900">Teléfono directo</p>
                          <a
                            href="tel:+34675980055"
                            className="mt-1 text-sm text-gray-600 hover:text-primary transition-colors font-medium"
                          >
                            +34 675 980 055
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start group">
                        <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 transition-colors">
                          <MapPin className="h-6 w-6 text-primary" />
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-900">Ubicación</p>
                          <p className="mt-1 text-sm text-gray-600 font-medium">Madrid - España</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-100">
                      <h3 className="text-lg font-semibold text-secondary mb-4">Conéctate con nosotros</h3>
                      <p className="text-sm text-gray-600 mb-4">
                        Síguenos en redes sociales para estar al día de las últimas novedades en herramientas IA
                      </p>
                      <div className="flex space-x-4">
                        <a
                          href="https://www.facebook.com/profile.php?id=61575664503316"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gray-100 p-3 rounded-full text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300"
                          aria-label="Facebook"
                        >
                          <span className="sr-only">Facebook</span>
                          <Facebook className="h-6 w-6" />
                        </a>
                        <a
                          href="https://www.instagram.com/neuroworkai"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gray-100 p-3 rounded-full text-gray-600 hover:text-pink-600 hover:bg-pink-50 transition-all duration-300"
                          aria-label="Instagram"
                        >
                          <span className="sr-only">Instagram</span>
                          <Instagram className="h-6 w-6" />
                        </a>
                        <a
                          href="https://www.linkedin.com/company/neuroworksai/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gray-100 p-3 rounded-full text-gray-600 hover:text-blue-700 hover:bg-blue-50 transition-all duration-300"
                          aria-label="LinkedIn"
                        >
                          <span className="sr-only">LinkedIn</span>
                          <Linkedin className="h-6 w-6" />
                        </a>
                      </div>
                      <div className="mt-6 bg-primary/5 p-4 rounded-lg">
                        <p className="text-sm text-gray-700 font-medium">
                          ¿Buscas asesoramiento personalizado sobre herramientas IA?
                        </p>
                        <a
                          href="#contact-form"
                          className="mt-2 inline-flex items-center text-primary hover:text-primary/80 font-medium text-sm"
                        >
                          Contáctanos ahora <ArrowRight className="ml-1 h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="overflow-hidden rounded-xl shadow-sm border border-gray-100">
                  <div className="relative w-full h-[300px]">
                    <SafeImage
                      src="/team-fallback.png"
                      alt="Equipo de NeuroWorkAI trabajando en un espacio moderno"
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                      fallback={
                        <div className="w-full h-full flex items-center justify-center bg-gray-100 p-6 text-center">
                          <div>
                            <Users className="h-12 w-12 text-primary/60 mx-auto mb-4" />
                            <p className="text-gray-600 font-medium">
                              Equipo de NeuroWorkAI trabajando en un espacio moderno
                            </p>
                          </div>
                        </div>
                      }
                    />
                  </div>
                </div>
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
              Descubre las mejores herramientas IA
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Explora nuestra selección de herramientas de IA cuidadosamente analizadas para potenciar tu productividad
              en el trabajo remoto.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 px-8">
                <Link href="/top-herramientas-ia">Top Herramientas IA</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8">
                <Link href="/recursos">Recursos Gratuitos</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
