"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface SimpleSubscriptionFormProps {
  includeName?: boolean
  buttonText?: string
  className?: string
}

export default function SimpleSubscriptionForm({
  includeName = false,
  buttonText = "Suscribirse",
  className = "",
}: SimpleSubscriptionFormProps) {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<{ text: string; isError: boolean } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validación básica
    if (!email || !email.includes("@")) {
      setMessage({ text: "Por favor, introduce un email válido", isError: true })
      return
    }

    setLoading(true)
    setMessage(null)

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, name: includeName ? name : undefined }),
      })

      const data = await response.json()

      if (response.ok) {
        setMessage({ text: "¡Gracias por suscribirte!", isError: false })
        setEmail("")
        setName("")
      } else {
        setMessage({ text: data.message || "Error al procesar la suscripción", isError: true })
      }
    } catch (error) {
      setMessage({ text: "Error al conectar con el servidor", isError: true })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className="space-y-3">
        {includeName && (
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

          <Button type="submit" disabled={loading} className="bg-primary hover:bg-primary/90 whitespace-nowrap">
            {loading ? "Enviando..." : buttonText}
          </Button>
        </div>
      </form>

      {message && (
        <p className={`mt-2 text-sm ${message.isError ? "text-red-500" : "text-green-500"}`}>{message.text}</p>
      )}
    </div>
  )
}
