"use client"

import { useState } from "react"
import SafeImage from "./safe-image"

interface OptimizedToolImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  toolName?: string
}

export default function OptimizedToolImage({
  src,
  alt,
  width = 64,
  height = 64,
  className = "object-contain",
  toolName = "",
}: OptimizedToolImageProps) {
  const [error, setError] = useState(false)

  // Mapa de fallbacks para herramientas específicas
  const fallbackMap: Record<string, string> = {
    "Notion AI": "/notion-logo.png",
    Zapier: "/zapier-logo.png",
    ClickUp: "/clickup-logo.png",
    Fireflies: "/fireflies-logo-full.png",
    "Otter.ai": "/otter-ai-logo-full.png",
    Grammarly: "/grammarly-logo.png",
    Jasper: "/jasper-logo-gray.png",
    ChatGPT: "/chatgpt-logo.png",
  }

  // Procesar la URL de la imagen
  const processedSrc =
    !error && src
      ? src
          .replace("/notion-ai-blue.png", "/notion-logo.png")
          .replace("/zapier-blue-background.png", "/zapier-logo.png")
          .replace("/clickup-blue-background.png", "/clickup-logo.png")
          .replace("/fireflies-ai-logo-blue.png", "/fireflies-logo-full.png")
          .replace("/otter-ai-logo-inspired-design.png", "/otter-ai-logo-full.png")
          .replace("/grammarly-blue.png", "/grammarly-logo.png")
          .replace("/ai-logo-blue.png", "/jasper-logo-gray.png")
      : fallbackMap[toolName] || `/placeholder.svg?height=${height}&width=${width}&query=logo for ${toolName || alt}`

  return (
    <SafeImage
      src={processedSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading="lazy"
      onError={() => setError(true)}
    />
  )
}
