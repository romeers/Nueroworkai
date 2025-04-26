"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import SafeImage from "./safe-image"
import { useToast } from "@/hooks/use-toast"
import EmailSubscriptionForm from "./email-subscription-form"

// Define the content in a single place for reuse across the site
export const kitPromoContent = {
  title: "Kit de Productividad IA NeuroWorkAI (Actualizado 2025)",
  subtitle: "Descarga gratis nuestro kit definitivo y comienza a trabajar mejor con IA desde hoy:",
  bulletPoints: [
    "Las 6 Herramientas IA Esenciales para Productividad Remota",
    "10 Prompts Prácticos para Optimizar tu Productividad",
    "3 Flujos de Automatización Inteligentes (Zapier, Make)",
    "Plantilla de Productividad Diaria con IA (Notion)",
  ],
  formLabel: "Suscríbete para descargar:",
  buttonText: "Descargar Kit gratuito",
  microcopy: "Sin spam · Descarga inmediata tras confirmar",
  imageUrl: "/ai-productivity-ebook.png",
  imageAlt: "Mockup del Kit de Productividad con IA para trabajo remoto de NeuroWorkAI (2025)",
  fallbackImageUrl: "/ai-productivity-kit-ebook.png",
}

interface KitPromoBlockProps {
  variant?: "default" | "compact" | "sidebar"
  className?: string
  showImage?: boolean
}

export default function KitPromoBlock({ variant = "default", className = "", showImage = true }: KitPromoBlockProps) {
  const [success, setSuccess] = useState(false)
  const { toast } = useToast()

  // Determine layout based on variant
  const isCompact = variant === "compact"
  const isSidebar = variant === "sidebar"

  const handleSuccess = async (data) => {
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: data.email }),
      })

      const result = await response.json()

      if (result.success) {
        setSuccess(true)
        toast({
          title: "¡Kit enviado!",
          description: "Hemos enviado el Kit de Productividad a tu correo electrónico.",
        })
      } else {
        toast({
          title: "Error",
          description: result.message || "Ha ocurrido un error. Por favor, inténtalo de nuevo.",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Error:", error)
      toast({
        title: "Error",
        description: "Ha ocurrido un error. Por favor, inténtalo de nuevo.",
        variant: "destructive",
      })
    }
  }

  return (
    <div
      className={`bg-gradient-to-br from-white to-violet-50 rounded-xl p-6 sm:p-8 ${className}`}
      style={{ borderTop: "1px solid rgba(124, 58, 237, 0.1)" }}
    >
      <div className={`grid ${showImage ? "gap-10 md:grid-cols-2" : ""}`}>
        <div className="flex flex-col justify-center">
          <h2 className={`font-heading font-bold text-secondary ${isCompact ? "text-xl" : "text-2xl sm:text-3xl"}`}>
            {kitPromoContent.title}
          </h2>
          <p className={`mt-4 ${isCompact ? "text-base" : "text-lg"} text-gray-600`}>{kitPromoContent.subtitle}</p>

          <ul className="mt-4 space-y-2">
            {kitPromoContent.bulletPoints.map((point, index) => (
              <li key={index} className="flex items-start">
                <Check className="mr-2 h-5 w-5 flex-shrink-0 text-primary" />
                <span className={`${isCompact ? "text-sm" : "text-base"} text-gray-600`}>{point}</span>
              </li>
            ))}
          </ul>

          {success ? (
            <div className="mt-6 rounded-lg bg-green-50 p-4 border border-green-200">
              <h4 className="font-medium text-green-800">¡Gracias por suscribirte!</h4>
              <p className="mt-1 text-sm text-green-700">
                Hemos enviado el Kit a tu correo electrónico. Si no lo encuentras, revisa tu carpeta de spam.
              </p>
            </div>
          ) : (
            <div className="mt-6" aria-label="Formulario de descarga de kit">
              <h3 className="text-lg font-semibold text-secondary mb-3">{kitPromoContent.formLabel}</h3>
              <EmailSubscriptionForm
                buttonText={kitPromoContent.buttonText}
                microcopy={kitPromoContent.microcopy}
                onSuccess={handleSuccess}
                downloadIcon={true}
                downloadPdf={true}
                pdfPath="/kit-productividad-ia-2025.pdf"
              />
            </div>
          )}
        </div>

        {showImage && (
          <div className="flex items-center justify-center">
            <div className="relative h-64 w-full max-w-md overflow-hidden sm:h-80">
              <SafeImage
                src={kitPromoContent.imageUrl}
                fallbackSrc={kitPromoContent.fallbackImageUrl}
                alt={kitPromoContent.imageAlt}
                fill
                className="object-cover shadow-xl rounded-xl"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
