"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      // Usar el nuevo endpoint /api/subscribe
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          name: showNameField ? name : undefined,
          source, // Opcional: para saber de dónde viene la suscripción
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setIsSuccess(true)
        setEmail("")
        setName("")
      } else {
        setError(data.message || "Error al procesar la suscripción")
      }
    } catch (error) {
      setError("Error al conectar con el servidor")
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
          <p className="text-sm mt-1">Hemos registrado tu correo correctamente.</p>
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
