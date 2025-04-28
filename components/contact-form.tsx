"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { validateEmail } from "@/utils/security"
import { socialLinks } from "@/lib/social-links"

export default function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus("")

    // Client-side validation
    if (!validateEmail(email)) {
      setStatus("error")
      setSuccessMessage("Por favor, introduce un email válido")
      setIsSubmitting(false)
      return
    }

    if (!message || message.trim().length < 10) {
      setStatus("error")
      setSuccessMessage("Por favor, introduce un mensaje con al menos 10 caracteres")
      setIsSubmitting(false)
      return
    }

    try {
      const response = await fetch("/api/contact-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, subject, message }),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus("success")
        setSuccessMessage(data.message || "¡Gracias por tu mensaje! Te responderemos lo antes posible.")
        setName("")
        setEmail("")
        setSubject("")
        setMessage("")
      } else {
        setStatus("error")
        setSuccessMessage(data.message || "Error al enviar el mensaje")
        console.error("Error:", data.message)
      }
    } catch (error) {
      setStatus("error")
      setSuccessMessage("Error al conectar con el servidor. Por favor, inténtalo de nuevo más tarde.")
      console.error("Error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full">
      {status === "success" && <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-md">{successMessage}</div>}

      {status === "error" && <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-md">{successMessage}</div>}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
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
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
            placeholder="Escribe tu mensaje aquí..."
          />
        </div>

        <Button type="submit" disabled={isSubmitting} className="w-full bg-primary hover:bg-primary/90">
          {isSubmitting ? "Enviando..." : "Enviar mensaje"}
        </Button>
      </form>

      {/* Social media links */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <h3 className="text-sm font-medium text-gray-700 mb-4">Síguenos en redes sociales</h3>
        <div className="flex flex-wrap gap-3">
          {socialLinks.map((social) => {
            const Icon = social.icon
            return (
              <a
                key={social.platform}
                href={social.href}
                className={`text-gray-600 ${social.hoverColor} transition-all duration-200 bg-gray-100 p-2 rounded-full hover:bg-gray-200 hover:scale-110`}
                aria-label={social.ariaLabel}
                title={`Síguenos en ${social.platform}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="h-5 w-5" />
                <span className="sr-only">{social.platform}</span>
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}
