"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import SafeImage from "./safe-image"

interface FinalKitCTAProps {
  title?: string
  subtitle?: string
  buttonText?: string
  emailPlaceholder?: string
  microcopy?: string
  imageUrl?: string
  onSubmit?: (email: string) => void
}

export default function FinalKitCTA({
  title = "Potencia tu productividad con IA",
  subtitle = "Descarga nuestro Kit de Productividad IA NeuroWorkAI (Actualizado 2025) y comienza a trabajar mejor con IA desde hoy.",
  buttonText = "Descargar Kit gratuito",
  emailPlaceholder = "Tu correo electrónico",
  microcopy = "Sin spam · Descarga inmediata tras confirmar",
  imageUrl = "/ai-productivity-kit-ebook.png",
  onSubmit,
}: FinalKitCTAProps) {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      if (onSubmit) {
        await onSubmit(email)
      } else {
        // Default behavior - simulate submission
        await new Promise((resolve) => setTimeout(resolve, 1000))
        console.log("Kit download requested for:", email)
      }

      // Success handling - trigger PDF download
      setEmail("")
      // Trigger download
      const link = document.createElement("a")
      link.href = "/kit-productividad-ia-2025.pdf"
      link.setAttribute("download", "Kit-Productividad-IA-NeuroWorkAI-2025.pdf")
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      // Error handling could go here
      console.error("Error submitting form:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      className="py-20 px-6 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%)",
      }}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
        aria-hidden="true"
      />

      {/* Optional decorative image */}
      {imageUrl && (
        <div className="absolute right-0 bottom-0 w-32 h-32 opacity-10 md:opacity-20 transform translate-x-1/4 translate-y-1/4">
          <SafeImage
            src={imageUrl}
            alt="Kit de Productividad con IA"
            width={128}
            height={128}
            className="w-full h-full object-contain"
          />
        </div>
      )}

      <div className="container mx-auto relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
          <p className="text-white/90 text-lg mb-8">{subtitle}</p>

          <div className="max-w-xl mx-auto">
            <form className="flex flex-col md:flex-row gap-4 justify-center items-center" onSubmit={handleSubmit}>
              <Input
                type="email"
                placeholder={emailPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full md:w-[320px] px-4 py-3 rounded-md text-sm text-gray-900 bg-white border-0 shadow-sm"
              />
              <Button
                type="submit"
                disabled={loading}
                className="bg-white text-violet-700 font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition w-full md:w-auto"
              >
                {loading ? "Enviando..." : buttonText}
              </Button>
            </form>
            <p className="text-sm text-white/80 mt-4">{microcopy}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
