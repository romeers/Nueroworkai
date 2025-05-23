"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import Image from "next/image"
import { useToast } from "@/hooks/use-toast"
import EmailSubscriptionForm from "./email-subscription-form"

// Define the content in a single place for reuse across the site
export const kitPromoContent = {
  title: "Kit de Productividad con IA para Trabajo Remoto (2025)",
  subtitle: "Descarga gratis nuestro kit definitivo y comienza a trabajar mejor con IA desde hoy:",
  bulletPoints: [
    "Lista de 6 herramientas IA esenciales para productividad remota",
    "10 prompts prácticos para ChatGPT, Notion AI, Jasper y más",
    "3 flujos de automatización listos para usar (Zapier, Make)",
    "Plantilla editable de productividad diaria con IA en Notion",
  ],
  formLabel: "Suscríbete para descargar:",
  buttonText: "Descargar Kit gratuito",
  microcopy: "Sin spam · Descarga inmediata tras confirmar",
  imageUrl: "/kit-productividad-laptop.png",
  imageAlt: "Kit de Productividad con IA para trabajo remoto mostrado en un portátil moderno",
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

  const handleSuccess = () => {
    setSuccess(true)
    toast({
      title: "¡Kit enviado!",
      description: "Hemos enviado el Kit de Productividad a tu correo electrónico.",
    })
  }

  return (
    <div
      className={`bg-gradient-to-br from-white to-violet-50 rounded-xl p-6 sm:p-8 shadow-lg border border-violet-100 ${className}`}
    >
      {/* Desktop layout - side by side */}
      <div className={`grid ${showImage ? "gap-8 lg:grid-cols-2" : ""}`}>
        {/* Content section */}
        <div className="flex flex-col justify-center">
          <h2 className={`font-heading font-bold text-secondary ${isCompact ? "text-xl" : "text-2xl sm:text-3xl"}`}>
            {kitPromoContent.title}
          </h2>

          <p className={`mt-4 ${isCompact ? "text-base" : "text-lg"} text-gray-600`}>{kitPromoContent.subtitle}</p>

          <ul className="mt-5 space-y-3">
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
                Recibirás el Kit en tu correo en menos de 24 horas. Si no lo encuentras, revisa tu carpeta de spam.
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
              />
            </div>
          )}
        </div>

        {/* Image section - only shown if showImage is true */}
        {showImage && (
          <div className="flex items-center justify-center mt-6 lg:mt-0">
            <div className="relative w-full h-[280px] sm:h-[320px] lg:h-[360px] overflow-hidden rounded-xl shadow-xl">
              {/* Using Next.js Image directly instead of SafeImage for better reliability */}
              <Image
                src={kitPromoContent.imageUrl || "/placeholder.svg"}
                alt={kitPromoContent.imageAlt}
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
