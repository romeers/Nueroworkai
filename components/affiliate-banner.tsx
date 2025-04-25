"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Clock, ExternalLink } from "lucide-react"
import SafeImage from "./safe-image"
import { createAffiliateLink } from "@/utils/affiliate-utils"
import AffiliateDisclosure from "./affiliate-disclosure"

interface AffiliateBannerProps {
  toolName: string
  offer: string
  affiliateUrl: string
  imageUrl?: string
  buttonText?: string
  expiryDate?: string
  className?: string
}

export default function AffiliateBanner({
  toolName,
  offer,
  affiliateUrl,
  imageUrl,
  buttonText = "Aprovechar oferta",
  expiryDate,
  className = "",
}: AffiliateBannerProps) {
  // Crear enlace de afiliado con parámetros de seguimiento
  const trackingUrl = createAffiliateLink(affiliateUrl, toolName, "banner")

  // Calcular si la oferta está a punto de expirar (menos de 7 días)
  const isExpiringSoon = expiryDate ? new Date(expiryDate).getTime() - Date.now() < 7 * 24 * 60 * 60 * 1000 : false

  return (
    <div className={`rounded-lg border border-green-200 bg-green-50 p-4 sm:p-6 ${className}`}>
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg bg-white p-2">
          <SafeImage src={imageUrl} alt={`Logo de ${toolName}`} fill className="object-contain" />
        </div>
        <div className="flex-1 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
            <Clock className="h-4 w-4 text-green-600" />
            <span className="text-sm font-medium text-green-800">
              {isExpiringSoon ? "¡Última oportunidad!" : "Oferta por tiempo limitado"}
              {expiryDate && (
                <span className="ml-1">
                  (hasta el {new Date(expiryDate).toLocaleDateString("es-ES", { day: "numeric", month: "long" })})
                </span>
              )}
            </span>
          </div>
          <h3 className="text-lg font-bold text-green-900">{offer}</h3>
          <p className="mt-1 text-sm text-green-700">Oferta exclusiva para lectores de NeuroWorkAI</p>
        </div>
        <Button asChild className="bg-green-600 hover:bg-green-700 whitespace-nowrap">
          <Link
            href={trackingUrl}
            target="_blank"
            rel="noopener sponsored"
            className="inline-flex items-center gap-2"
            onClick={() => {
              // Evento de analytics para seguimiento de clics
              if (typeof window !== "undefined" && window.gtag) {
                window.gtag("event", "affiliate_click", {
                  event_category: "affiliate",
                  event_label: toolName,
                  value: 1,
                })
              }
            }}
          >
            {buttonText}
            <ExternalLink className="h-4 w-4" />
          </Link>
        </Button>
      </div>
      <div className="mt-3">
        <AffiliateDisclosure variant="compact" className="text-center sm:text-left" />
      </div>
    </div>
  )
}
