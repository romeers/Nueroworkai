"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"

export default function SimpleSubscriptionForm() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (data.success) {
        setSuccess(true)
        setEmail("")
        toast({
          title: "¡Suscripción exitosa!",
          description: "Hemos enviado el Kit de Productividad IA a tu correo electrónico.",
        })
      } else {
        toast({
          title: "Error",
          description: data.message || "Ha ocurrido un error. Por favor, inténtalo de nuevo.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Ha ocurrido un error. Por favor, inténtalo de nuevo.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full max-w-md mx-auto">
      {success ? (
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
          <h3 className="text-lg font-semibold text-green-800 mb-2">¡Gracias por suscribirte!</h3>
          <p className="text-green-700">
            Hemos enviado el Kit de Productividad IA a tu correo electrónico. Si no lo encuentras, revisa tu carpeta de
            spam.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Recibe el Kit de Productividad IA NeuroWorkAI (2025)
            </label>
            <Input
              id="email"
              type="email"
              placeholder="Tu correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full"
            />
          </div>
          <Button type="submit" disabled={loading} className="w-full bg-primary hover:bg-primary/90">
            {loading ? "Enviando..." : "Recibir Kit Gratuito"}
          </Button>
          <p className="text-xs text-gray-500 text-center">Sin spam · Recibirás el kit inmediatamente en tu correo</p>
        </form>
      )}
    </div>
  )
}
