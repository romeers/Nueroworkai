"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Download } from "lucide-react"
import { validateEmail } from "@/utils/security"

export default function KitDownloadForm() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")
  const [successMessage, setSuccessMessage] = useState("")

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
      const response = await fetch("/api/kit-download", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setSuccess(true)
        setSuccessMessage(
          data.message || "¡Gracias! Te enviaremos el kit a tu correo electrónico en las próximas 24 horas.",
        )
        setEmail("")
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
        <div className="bg-green-50 border border-green-200 rounded-md p-4 text-green-800">
          <p className="font-medium">¡Gracias por tu interés!</p>
          <p className="text-sm mt-1">{successMessage}</p>
          <Button
            className="mt-3 bg-primary hover:bg-primary/90"
            onClick={() => window.open("/ruta-al-kit-digital.pdf", "_blank")}
          >
            <Download className="mr-2 h-4 w-4" />
            Descargar Kit Digital
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <h3 className="text-lg font-medium mb-2">Descarga nuestro Kit Digital Gratuito</h3>
            <p className="text-sm text-gray-600 mb-4">
              Introduce tu correo electrónico para descargar el kit digital con recursos exclusivos.
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
            <Button type="submit" disabled={loading} className="bg-primary hover:bg-primary/90 whitespace-nowrap">
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

          {error && <p className="text-red-500 text-sm">{error}</p>}
          <p className="text-xs text-gray-500 mt-2">No compartiremos tu correo con terceros.</p>
        </form>
      )}
    </div>
  )
}
