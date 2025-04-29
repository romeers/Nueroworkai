"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { validateEmail } from "@/utils/security"
import { CheckCircle, AlertCircle } from "lucide-react"

interface EmailSubscriptionFormProps {
  className?: string
  buttonText?: string
  showNameField?: boolean
  source?: string
  successMessage?: string
  placeholder?: string
}

export default function EmailSubscriptionForm({
  className = "",
  buttonText = "Descargar Kit Gratuito",
  showNameField = false,
  source = "general",
  successMessage = "¡Gracias! Te enviaremos el kit a tu correo electrónico en las próximas 24 horas.",
  placeholder = "Tu correo electrónico",
}: EmailSubscriptionFormProps) {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")

  // Get UTM parameters from URL if available
  const [utmParams, setUtmParams] = useState({
    utm_source: null as string | null,
    utm_medium: null as string | null,
    utm_campaign: null as string | null,
  })

  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search)
      setUtmParams({
        utm_source: urlParams.get("utm_source"),
        utm_medium: urlParams.get("utm_medium"),
        utm_campaign: urlParams.get("utm_campaign"),
      })
    }
  }, [])

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
          name: showNameField ? name : "",
          source,
          ...utmParams,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setIsSuccess(true)
        setMessage(data.message || successMessage)
        setEmail("")
        setName("")

        // Track conversion in Google Analytics if available
        if (typeof window !== "undefined" && "gtag" in window) {
          // @ts-ignore
          window.gtag("event", "conversion", {
            event_category: "subscription",
            event_label: source,
            value: 1,
          })
        }
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
        <div className="bg-green-50 border border-green-200 rounded-md p-4 text-green-800 animate-fadeIn">
          <div className="flex items-center mb-2">
            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
            <p className="font-medium">¡Suscripción exitosa!</p>
          </div>
          <p className="text-sm">{message}</p>
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
                className="w-full"
              />
            </div>
          )}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-grow">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={placeholder}
                aria-label="Tu correo electrónico"
                required
                className="w-full"
              />
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-primary hover:bg-primary/90 whitespace-nowrap transition-all"
            >
              {isSubmitting ? "Enviando..." : buttonText}
            </Button>
          </div>
          {error && (
            <div className="flex items-center text-red-500 text-sm mt-1">
              <AlertCircle className="h-4 w-4 mr-1" />
              <span>{error}</span>
            </div>
          )}
          <p className="text-xs text-gray-500 mt-1">No compartiremos tu correo con terceros.</p>
        </form>
      )}
    </div>
  )
}
