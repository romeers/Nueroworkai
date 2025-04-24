"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import SafeImage from "./safe-image"

interface ContextualPopupProps {
  title: string
  description: string
  imageUrl?: string
  formId?: string
  delay?: number // Tiempo en ms antes de mostrar el popup
  scrollThreshold?: number // Porcentaje de scroll para mostrar el popup
  ctaText?: string
}

export default function ContextualPopup({
  title,
  description,
  imageUrl,
  formId = "popup",
  delay = 5000, // 5 segundos por defecto
  scrollThreshold = 50, // 50% de scroll por defecto
  ctaText = "Descargar Gratis",
}: ContextualPopupProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    // Verificar si el popup ya fue cerrado en esta sesión
    const popupDismissed = sessionStorage.getItem("popupDismissed")
    if (popupDismissed) {
      return
    }

    // Mostrar después de un tiempo determinado
    const timeoutId = setTimeout(() => {
      setIsVisible(true)
    }, delay)

    // Mostrar después de scroll
    const handleScroll = () => {
      const scrolled = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
      if (scrolled > scrollThreshold && !dismissed) {
        setIsVisible(true)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      clearTimeout(timeoutId)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [delay, scrollThreshold, dismissed])

  const handleDismiss = () => {
    setIsVisible(false)
    setDismissed(true)
    sessionStorage.setItem("popupDismissed", "true")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulación de envío
    setTimeout(() => {
      setLoading(false)
      setIsVisible(false)
      toast({
        title: "¡Gracias por suscribirte!",
        description: "Hemos enviado el recurso a tu correo electrónico.",
      })
      sessionStorage.setItem("popupDismissed", "true")
    }, 1500)
  }

  if (!isVisible) {
    return null
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="relative max-h-[90vh] w-full max-w-md overflow-auto rounded-lg bg-white p-6 shadow-xl">
        <button
          onClick={handleDismiss}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
          aria-label="Cerrar"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="mb-4 text-center">
          {imageUrl && (
            <div className="mx-auto mb-4 h-32 w-32 overflow-hidden rounded-lg">
              <SafeImage src={imageUrl} alt={title} width={128} height={128} className="h-full w-full object-cover" />
            </div>
          )}
          <h3 className="text-xl font-bold text-secondary">{title}</h3>
          <p className="mt-2 text-gray-600">{description}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="email"
              placeholder="Tu correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full"
            />
          </div>
          <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={loading}>
            {loading ? "Enviando..." : ctaText}
          </Button>
          <p className="text-center text-xs text-gray-500">
            Al suscribirte, aceptas recibir emails con recursos y actualizaciones. Puedes darte de baja en cualquier
            momento.
          </p>
        </form>
      </div>
    </div>
  )
}
