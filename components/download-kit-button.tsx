"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface DownloadKitButtonProps {
  variant?: "default" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  className?: string
  text?: string
  trackingId?: string
}

export default function DownloadKitButton({
  variant = "default",
  size = "default",
  className = "",
  text = "Descargar Kit Gratuito",
  trackingId,
}: DownloadKitButtonProps) {
  const { toast } = useToast()

  const handleDownload = () => {
    // Opcionalmente, puedes rastrear el evento de descarga
    if (trackingId && typeof window !== "undefined" && "gtag" in window) {
      // @ts-ignore
      window.gtag("event", "kit_download", {
        event_category: "downloads",
        event_label: trackingId,
      })
    }

    // Crear y hacer clic en el enlace de descarga
    const link = document.createElement("a")
    link.href = "/kit-productividad-ia-2025.pdf"
    link.setAttribute("download", "Kit-Productividad-IA-NeuroWorkAI-2025.pdf")
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    // Mostrar notificación
    toast({
      title: "¡Descarga iniciada!",
      description: "Tu Kit de Productividad con IA está siendo descargado.",
    })
  }

  return (
    <Button variant={variant} size={size} className={className} onClick={handleDownload}>
      <Download className="mr-2 h-4 w-4" />
      {text}
    </Button>
  )
}
