"use client"

import { useState, useEffect } from "react"
import SafeImage from "./safe-image"
import { cn } from "@/lib/utils"

interface OptimizedToolImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  toolName?: string
  priority?: boolean
}

export default function OptimizedToolImage({
  src,
  alt,
  width = 64,
  height = 64,
  className = "",
  toolName = "",
  priority = false,
}: OptimizedToolImageProps) {
  const [error, setError] = useState(false)
  const [imageSrc, setImageSrc] = useState(src)

  // Mapa de fallbacks para herramientas específicas
  const fallbackMap: Record<string, string> = {
    "Notion AI": "/notion-logo.png",
    Zapier: "/zapier-logo.png",
    ClickUp: "/clickup-logo.png",
    Fireflies: "/fireflies-logo-icon.png",
    "Fireflies.ai": "/fireflies-logo-icon.png",
    "Otter.ai": "/otter-ai-logo.png",
    Grammarly: "/grammarly-logo.png",
    Jasper: "/jasper-logo-gray.png",
    "Jasper AI": "/jasper-logo-gray.png",
    ChatGPT: "/chatgpt-logo.png",
  }

  useEffect(() => {
    // Resetear el estado de error cuando cambia la fuente
    if (src !== imageSrc) {
      setError(false)
      setImageSrc(src)
    }
  }, [src, imageSrc])

  // Procesar la URL de la imagen o usar fallback
  const processedSrc = !error
    ? imageSrc
    : fallbackMap[toolName] ||
      `/placeholder.svg?height=${height}&width=${width}&query=logo for ${encodeURIComponent(toolName || alt)}`

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <SafeImage
        src={processedSrc}
        alt={alt}
        width={width}
        height={height}
        className="object-contain w-full h-full"
        loading={priority ? "eager" : "lazy"}
        onError={() => {
          console.log(`Error loading image for ${toolName || alt}`)
          setError(true)
        }}
      />
    </div>
  )
}
