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

export default function ContactoPage() {
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
              Contacto
            </h1>
            <p className="mt-4 text-lg text-gray-600">¿Tienes preguntas o sugerencias? Estamos aquí para ayudarte.</p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-2xl font-bold text-secondary">Envíanos un mensaje</h2>
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
                <h2 className="text-2xl font-bold text-secondary">Información de contacto</h2>
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

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-2xl font-bold text-secondary sm:text-3xl">Preguntas Frecuentes</h2>

            <div className="mt-8 space-y-6">
              <div className="rounded-lg bg-white p-6 shadow-md">
                <h3 className="text-lg font-semibold text-secondary">¿Cuánto tardan en responder a las consultas?</h3>
                <p className="mt-2 text-gray-600">
                  Nos esforzamos por responder a todas las consultas en un plazo de 24-48 horas laborables.
                </p>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-md">
                <h3 className="text-lg font-semibold text-secondary">
                  ¿Puedo sugerir una herramienta para que la reseñéis?
                </h3>
                <p className="mt-2 text-gray-600">
                  ¡Por supuesto! Nos encanta descubrir nuevas herramientas. Puedes enviarnos tu sugerencia a través del
                  formulario de contacto.
                </p>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-md">
                <h3 className="text-lg font-semibold text-secondary">
                  ¿Ofrecéis servicios de consultoría sobre herramientas de IA?
                </h3>
                <p className="mt-2 text-gray-600">
                  Actualmente no ofrecemos servicios de consultoría formales, pero estamos encantados de responder
                  preguntas específicas sobre herramientas de IA para trabajo remoto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
