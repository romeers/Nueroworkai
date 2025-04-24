"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import Stats from "@/components/stats"
import TrustBadges from "@/components/trust-badges"

// Datos para estadísticas
const stats = [
  {
    value: "2021",
    label: "Fundación",
    description: "Ayudando a profesionales desde entonces",
  },
  {
    value: "15.000+",
    label: "Usuarios mensuales",
    description: "Profesionales que confían en nosotros",
  },
  {
    value: "200+",
    label: "Guías y recursos",
    description: "Contenido exclusivo y gratuito",
  },
  {
    value: "50+",
    label: "Herramientas analizadas",
    description: "Reseñas detalladas y actualizadas",
  },
]

// Datos para badges de confianza
const trustBadges = [
  {
    name: "Notion",
    logoUrl: "/notion-logo-gray.png",
    width: 120,
    height: 40,
  },
  {
    name: "Zapier",
    logoUrl: "/zapier-logo-gray.png",
    width: 120,
    height: 40,
  },
  {
    name: "ClickUp",
    logoUrl: "/clickup-logo-gray.png",
    width: 120,
    height: 40,
  },
  {
    name: "Jasper",
    logoUrl: "/jasper-logo-gray.png",
    width: 120,
    height: 40,
  },
  {
    name: "Grammarly",
    logoUrl: "/grammarly-logo-gray.png",
    width: 120,
    height: 40,
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
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulación de envío
    setTimeout(() => {
      toast({
        title: "Mensaje enviado",
        description: "Gracias por contactarnos. Te responderemos lo antes posible.",
      })
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
      setLoading(false)
    }, 1000)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-light to-sky py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-3xl font-bold tracking-tight text-secondary sm:text-4xl md:text-5xl">
              Sobre Nosotros
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Conoce más sobre NeuroWorkAI y nuestra misión de ayudar a los profesionales remotos a ser más productivos
              con IA.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <Image src="/logo.png" alt="NeuroWorkAI Logo" width={200} height={60} className="mx-auto h-auto w-48" />
            </div>

            <div className="prose prose-lg mx-auto max-w-none">
              <h2 className="text-center text-2xl font-bold text-secondary sm:text-3xl">Nuestra Historia</h2>
              <p>
                NeuroWorkAI nació de una simple observación: el trabajo remoto está aquí para quedarse, y la
                inteligencia artificial está transformando rápidamente cómo trabajamos. Sin embargo, con tantas
                herramientas de IA disponibles, encontrar las soluciones adecuadas puede ser abrumador.
              </p>
              <p>
                Fundamos NeuroWorkAI con la misión de ayudar a los profesionales remotos a navegar por este nuevo
                panorama, proporcionando reseñas imparciales, comparativas detalladas y recursos prácticos sobre las
                mejores herramientas de productividad con IA.
              </p>

              <h2 className="text-center text-2xl font-bold text-secondary sm:text-3xl">Nuestra Misión</h2>
              <p>En NeuroWorkAI, nos dedicamos a:</p>
              <ul>
                <li>Simplificar la búsqueda de herramientas de IA para profesionales remotos</li>
                <li>Proporcionar información objetiva y basada en pruebas reales</li>
                <li>Ayudar a los trabajadores remotos a aumentar su productividad y reducir el estrés</li>
                <li>Mantenernos al día con las últimas innovaciones en IA para el trabajo remoto</li>
                <li>Crear una comunidad de profesionales remotos que comparten conocimientos y mejores prácticas</li>
              </ul>

              <h2 className="text-center text-2xl font-bold text-secondary sm:text-3xl">Nuestros Valores</h2>
              <p>Nuestro trabajo se guía por estos principios fundamentales:</p>
              <ul>
                <li>
                  <strong>Transparencia:</strong> Siempre divulgamos nuestras relaciones de afiliados y cómo monetizamos
                  nuestro contenido.
                </li>
                <li>
                  <strong>Objetividad:</strong> Evaluamos cada herramienta de forma imparcial, destacando tanto sus
                  fortalezas como sus debilidades.
                </li>
                <li>
                  <strong>Utilidad:</strong> Nos centramos en proporcionar información práctica y accionable que
                  realmente ayude a nuestros lectores.
                </li>
                <li>
                  <strong>Comunidad:</strong> Valoramos la retroalimentación de nuestra comunidad y la incorporamos en
                  nuestro contenido.
                </li>
              </ul>

              <h2 className="text-center text-2xl font-bold text-secondary sm:text-3xl">Nuestro Equipo</h2>
              <p>
                Somos un equipo de profesionales remotos apasionados por la tecnología y la productividad. Combinamos
                experiencia en diversas áreas, desde desarrollo de software hasta marketing digital y gestión de
                proyectos, para ofrecer una perspectiva completa sobre las herramientas de IA para el trabajo remoto.
              </p>
              <p>
                Todos los miembros de nuestro equipo utilizan activamente las herramientas que reseñamos en su trabajo
                diario, lo que nos permite proporcionar información basada en experiencia real.
              </p>
            </div>
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

      {/* Contact Form Section */}
      <section className="py-16" id="contacto">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <h2 className="text-2xl font-bold text-secondary sm:text-3xl">Contacta con nosotros</h2>
              <p className="mt-4 text-lg text-gray-600">¿Tienes preguntas o sugerencias? Estamos aquí para ayudarte.</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-bold text-secondary mb-4">Envíanos un mensaje</h3>
                <p className="mt-4 text-gray-600">
                  Completa el formulario y te responderemos lo antes posible. Estamos aquí para ayudarte con cualquier
                  consulta sobre herramientas de IA para trabajo remoto.
                </p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Nombre
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Correo electrónico
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                      Asunto
                    </label>
                    <Input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Mensaje
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>

                  <Button type="submit" disabled={loading} className="w-full bg-primary hover:bg-primary/90">
                    {loading ? "Enviando..." : "Enviar mensaje"}
                  </Button>
                </form>
              </div>

              <div>
                <h3 className="text-xl font-bold text-secondary mb-4">Información de contacto</h3>
                <p className="mt-4 text-gray-600">
                  También puedes contactarnos directamente a través de los siguientes medios:
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">Email</p>
                      <p className="mt-1 text-sm text-gray-600">contacto@neuroworkai.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">Teléfono</p>
                      <p className="mt-1 text-sm text-gray-600">+34 123 456 789</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">Ubicación</p>
                      <p className="mt-1 text-sm text-gray-600">Madrid, España</p>
                    </div>
                  </div>
                </div>

                <h3 className="mt-12 text-lg font-semibold text-secondary">Síguenos en redes sociales</h3>
                <div className="mt-4 flex space-x-4">
                  <Link href="#" className="text-gray-600 hover:text-primary">
                    <span className="sr-only">Facebook</span>
                    <Facebook className="h-6 w-6" />
                  </Link>
                  <Link href="#" className="text-gray-600 hover:text-primary">
                    <span className="sr-only">Twitter</span>
                    <Twitter className="h-6 w-6" />
                  </Link>
                  <Link href="#" className="text-gray-600 hover:text-primary">
                    <span className="sr-only">Instagram</span>
                    <Instagram className="h-6 w-6" />
                  </Link>
                  <Link href="#" className="text-gray-600 hover:text-primary">
                    <span className="sr-only">LinkedIn</span>
                    <Linkedin className="h-6 w-6" />
                  </Link>
                </div>

                <div className="mt-12 overflow-hidden rounded-lg">
                  <Image
                    src="/modern-office-workspace.png"
                    alt="Oficina de NeuroWorkAI"
                    width={500}
                    height={300}
                    className="h-auto w-full object-cover"
                  />
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
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">Únete a nuestra comunidad</h2>
            <p className="mt-4 text-lg text-white/90">
              Suscríbete a nuestro newsletter para recibir las últimas noticias, reseñas y recursos sobre herramientas
              de IA para trabajo remoto.
            </p>
            <form className="mx-auto mt-6 flex max-w-md flex-col gap-2 sm:flex-row">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                required
              />
              <Button className="bg-secondary hover:bg-secondary/90">Suscribirse</Button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
