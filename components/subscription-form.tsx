"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

interface SubscriptionFormProps {
  showName?: boolean
  buttonText?: string
  successMessage?: string
  className?: string
  lightMode?: boolean
  onSuccess?: () => void
}

export default function SubscriptionForm({
  showName = false,
  buttonText = "Suscribirme",
  successMessage = "¡Gracias por suscribirte! Recibirás nuestras actualizaciones pronto.",
  className = "",
  lightMode = false,
  onSuccess,
}: SubscriptionFormProps) {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    // Validación básica
    if (!email) {
      setError("Por favor, introduce tu correo electrónico")
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
          name: name || undefined,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Ha ocurrido un error al suscribirte")
      }

      // Limpiar el formulario
      setEmail("")
      setName("")

      // Mostrar mensaje de éxito
      toast({
        title: "¡Suscripción exitosa!",
        description: successMessage,
      })

      // Llamar al callback de éxito si existe
      if (onSuccess) {
        onSuccess()
      }
    } catch (err) {
      console.error("Error al suscribirse:", err)
      setError(err instanceof Error ? err.message : "Ha ocurrido un error al suscribirte")

      toast({
        title: "Error al suscribirse",
        description: err instanceof Error ? err.message : "Ha ocurrido un error al suscribirte",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className={`${showName ? "space-y-3" : ""}`}>
        {showName && (
          <div>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Tu nombre"
              className={cn("w-full", lightMode && "bg-white/20 border-white/30 text-white placeholder:text-white/70")}
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
              className={cn("w-full", lightMode && "bg-white/20 border-white/30 text-white placeholder:text-white/70")}
              aria-label="Tu correo electrónico"
              required
            />
          </div>

          <Button
            type="submit"
            disabled={loading}
            className={cn(
              "whitespace-nowrap",
              lightMode ? "bg-white text-primary hover:bg-white/90" : "bg-primary hover:bg-primary/90 text-white",
            )}
          >
            {loading ? "Enviando..." : buttonText}
          </Button>
        </div>
      </div>

      {error && <p className="text-sm text-red-500 mt-2">{error}</p>}
    </form>
  )
}
