"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"

interface EnhancedCTAProps {
  title: string
  subtitle: string
  primaryButtonText: string
  primaryButtonUrl: string
  secondaryButtonText?: string
  secondaryButtonUrl?: string
  bgColor?: "primary" | "secondary" | "white"
  microcopy?: string
  // New props for form functionality
  withEmailForm?: boolean
  emailPlaceholder?: string
  onSubmit?: (email: string) => void
  formButtonText?: string
}

export default function EnhancedCTA({
  title,
  subtitle,
  primaryButtonText,
  primaryButtonUrl,
  secondaryButtonText,
  secondaryButtonUrl,
  bgColor = "primary",
  microcopy,
  withEmailForm = false,
  emailPlaceholder,
  onSubmit,
  formButtonText,
}: EnhancedCTAProps) {
  const getBgColor = () => {
    switch (bgColor) {
      case "primary":
        return "bg-primary text-white"
      case "secondary":
        return "bg-secondary text-white"
      case "white":
        return "bg-white text-secondary"
      default:
        return "bg-primary text-white"
    }
  }

  const getButtonStyles = () => {
    switch (bgColor) {
      case "primary":
        return {
          primary: "bg-white text-primary hover:bg-white/90",
          secondary: "border-white text-white hover:bg-white/10",
        }
      case "secondary":
        return {
          primary: "bg-white text-secondary hover:bg-white/90",
          secondary: "border-white text-white hover:bg-white/10",
        }
      case "white":
        return {
          primary: "bg-primary text-white hover:bg-primary/90",
          secondary: "border-primary text-primary hover:bg-primary/10",
        }
      default:
        return {
          primary: "bg-white text-primary hover:bg-white/90",
          secondary: "border-white text-white hover:bg-white/10",
        }
    }
  }

  const buttonStyles = getButtonStyles()
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Enviar directamente al endpoint que sabemos que funciona
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          name: "",
          source: "enhanced-cta",
        }),
      })

      if (!response.ok) {
        throw new Error("Error al enviar el formulario")
      }

      // Si llegamos aquí, la solicitud fue exitosa
      toast({
        title: "¡Gracias por suscribirte!",
        description: "Hemos enviado el recurso a tu correo electrónico.",
      })

      setEmail("")
      setSubmitted(true)
    } catch (error) {
      console.error("Error al enviar el formulario:", error)
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
    <section
      className={`py-16 md:py-20 px-4 md:px-6 ${getBgColor()}`}
      style={
        bgColor === "primary"
          ? {
              background: "linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%)",
              position: "relative",
              overflow: "hidden",
            }
          : {}
      }
    >
      {/* Optional background pattern */}
      {bgColor === "primary" && (
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
          aria-hidden="true"
        />
      )}

      <div className="container mx-auto relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight mb-4">{title}</h2>
          <p className={`text-lg mb-8 ${bgColor === "white" ? "text-gray-600" : "text-white/90"}`}>{subtitle}</p>

          {withEmailForm ? (
            <div className="max-w-xl mx-auto">
              {submitted ? (
                <div
                  className={`p-4 rounded-md ${bgColor === "white" ? "bg-green-50 text-green-800" : "bg-white/10 text-white"}`}
                  role="alert"
                >
                  <p className="font-medium">¡Gracias por suscribirte!</p>
                  <p className="text-sm mt-1">Hemos enviado el recurso a tu correo electrónico.</p>
                </div>
              ) : (
                <form
                  className="flex flex-col md:flex-row gap-4 justify-center w-full max-w-xl mx-auto"
                  onSubmit={handleSubmit}
                  aria-label="Formulario de suscripción"
                >
                  <Input
                    type="email"
                    placeholder={emailPlaceholder || "Tu correo electrónico"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full md:w-[320px] px-4 py-3 h-12 rounded-md text-sm text-gray-900 bg-white border-0 shadow-sm"
                    aria-label="Email para suscripción"
                  />
                  <Button
                    type="submit"
                    disabled={loading}
                    className="bg-white text-violet-700 font-semibold px-6 py-3 h-12 rounded-md hover:bg-gray-100 transition w-full md:w-auto"
                    aria-label={loading ? "Enviando..." : formButtonText || "Descargar Kit gratuito"}
                  >
                    {loading ? "Enviando..." : formButtonText || "Descargar Kit gratuito"}
                  </Button>
                </form>
              )}
              {microcopy && !submitted && (
                <p className={`text-sm mt-4 ${bgColor === "white" ? "text-gray-500" : "text-white/80"}`}>{microcopy}</p>
              )}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className={buttonStyles.primary}>
                <Link href={primaryButtonUrl} aria-label={primaryButtonText}>
                  {primaryButtonText}
                </Link>
              </Button>
              {secondaryButtonText && secondaryButtonUrl && (
                <Button asChild variant="outline" size="lg" className={buttonStyles.secondary}>
                  <Link href={secondaryButtonUrl} aria-label={secondaryButtonText}>
                    {secondaryButtonText}
                  </Link>
                </Button>
              )}
              {microcopy && (
                <p className={`mt-4 text-xs ${bgColor === "white" ? "text-gray-500" : "text-white/70"}`}>{microcopy}</p>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
