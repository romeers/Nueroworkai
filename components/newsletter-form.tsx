"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"

export default function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Simulación de envío - en producción, esto sería una llamada a la API
      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast({
        title: "¡Suscripción exitosa!",
        description: "Gracias por suscribirte a nuestro newsletter.",
      })

      setEmail("")
    } catch (error) {
      toast({
        title: "Error al suscribirse",
        description: "Ha ocurrido un error. Por favor, inténtalo de nuevo.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 sm:flex sm:max-w-md">
      <label htmlFor="email-address" className="sr-only">
        Correo electrónico
      </label>
      <Input
        type="email"
        name="email"
        id="email-address"
        autoComplete="email"
        required
        placeholder="Tu correo electrónico"
        className="w-full min-w-0 appearance-none rounded-md border-0 bg-white px-3 py-1.5 text-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:w-64 sm:text-sm sm:leading-6"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        aria-label="Correo electrónico para suscripción"
      />
      <div className="mt-3 rounded-md sm:ml-3 sm:mt-0 sm:flex-shrink-0">
        <Button
          type="submit"
          disabled={loading}
          className="w-full bg-primary hover:bg-primary/90"
          aria-label="Suscribirse al newsletter"
        >
          {loading ? "Enviando..." : "Suscribirse"}
        </Button>
      </div>
    </form>
  )
}
