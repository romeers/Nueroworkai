"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Download, CheckCircle, AlertCircle } from "lucide-react"
import { validateEmail } from "@/utils/security"

export default function KitDownloadForm() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")
  const [successMessage, setSuccessMessage] = useState("")

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
    setLoading(true)
    setError("")

    // Client-side validation
    if (!validateEmail(email)) {
      setError("Por favor, introduce un email válido")
      setLoading(false)
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
          source: "kit-download-page",
          ...utmParams,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setSuccess(true)
        setSuccessMessage(data.message || "¡Gracias! Recibirás el Kit en tu correo en menos de 24 horas.")
        setEmail("")

        // Track conversion in Google Analytics if available
        if (typeof window !== "undefined" && "gtag" in window) {
          // @ts-ignore
          window.gtag("event", "kit_download", {
            event_category: "conversion",
            event_label: "kit-digital",
            value: 1,
          })
        }
      } else {
        setError(data.message || "Error al registrar el correo")
      }
    } catch (error) {
      setError("Error al conectar con el servidor. Por favor, inténtalo de nuevo más tarde.")
      console.error("Error al enviar formulario:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full max-w-md mx-auto">
      {success ? (
        <div className="bg-green-50 border border-green-200 rounded-md p-4 text-green-800 animate-fadeIn">
          <div className="flex items-center mb-2">
            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
            <p className="font-medium">¡Gracias por tu interés!</p>
          </div>
          <p className="text-sm">{successMessage}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <h3 className="text-lg font-medium mb-2">Descarga nuestro Kit Digital Gratuito</h3>
            <p className="text-sm text-gray-600 mb-4">
              Introduce tu correo electrónico para recibir el kit digital con recursos exclusivos.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-grow">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu correo electrónico"
                aria-label="Tu correo electrónico"
                required
                className="w-full"
              />
            </div>
            <Button
              type="submit"
              disabled={loading}
              className="bg-primary hover:bg-primary/90 whitespace-nowrap transition-all"
            >
              {loading ? (
                "Enviando..."
              ) : (
                <>
                  <Download className="mr-2 h-4 w-4" />
                  Descargar Kit
                </>
              )}
            </Button>
          </div>

          {error && (
            <div className="flex items-center text-red-500 text-sm">
              <AlertCircle className="h-4 w-4 mr-1" />
              <span>{error}</span>
            </div>
          )}
          <p className="text-xs text-gray-500 mt-2">No compartiremos tu correo con terceros.</p>
        </form>
      )}
    </div>
  )
}
