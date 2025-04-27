"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { validateEmail } from "@/utils/security"

interface EmailSubscriptionFormProps {
  className?: string
  buttonText?: string
  showNameField?: boolean
  source?: string
}

export default function EmailSubscriptionForm({
  className = "",
  buttonText = "Descargar Kit Gratuito",
  showNameField = false,
  source = "general",
}: EmailSubscriptionFormProps) {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")
  const [successMessage, setSuccessMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    // Client-side validation
    if (!validateEmail(email)) {
      setError("Por favor, introduce un email válido")
      setIsSubmitting(false)
      return
    }

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          name: showNameField ? name : undefined,
          source,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setIsSuccess(true)
        setSuccessMessage(
          data.message || "¡Gracias! Te enviaremos el kit a tu correo electrónico en las próximas 24 horas.",
        )
        setEmail("")
        setName("")
      } else {
        setError(data.message || "Error al procesar la suscripción")
      }
    } catch (error) {
      setError("Error al conectar con el servidor. Por favor, inténtalo de nuevo más tarde.")
      console.error("Error al enviar formulario:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={className}>
      {isSuccess ? (
        <div className="bg-green-50 border border-green-200 rounded-md p-4 text-green-800">
          <p className="font-medium">¡Gracias por suscribirte!</p>
          <p className="text-sm mt-1">{successMessage}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          {showNameField && (
            <div>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Tu nombre"
                aria-label="Tu nombre"
              />
            </div>
          )}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-grow">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu correo electrónico"
                aria-label="Tu correo electrónico"
                required
              />
            </div>
            <Button type="submit" disabled={isSubmitting} className="bg-primary hover:bg-primary/90 whitespace-nowrap">
              {isSubmitting ? "Enviando..." : buttonText}
            </Button>
          </div>
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </form>
      )}
    </div>
  )
}
