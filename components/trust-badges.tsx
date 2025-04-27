"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import Image from "next/image"

// Actualizar la interfaz Badge para incluir alt text explícito
interface Badge {
  name: string
  logoUrl: string
  width?: number
  height?: number
  url?: string
  alt?: string
}

interface TrustBadgesProps {
  title?: string
  subtitle?: string
  badges?: Badge[]
  showDefaultLogos?: boolean
  grayscale?: boolean
  className?: string
}

export default function TrustBadges({
  title = "Herramientas de IA líderes confían en nuestros análisis",
  subtitle,
  badges = [],
  showDefaultLogos = true,
  grayscale = true,
  className,
}: TrustBadgesProps) {
  const [isMounted, setIsMounted] = useState(false)
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({})

  // Evitar problemas de hidratación
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Logos predefinidos de herramientas populares con URLs actualizadas y fallbacks
  const defaultBadges: Badge[] = [
    {
      name: "Notion AI",
      logoUrl: "/public/notion-logo.png",
      width: 120,
      height: 40,
      url: "https://www.notion.so/product/ai",
      alt: "Notion AI Logo",
    },
    {
      name: "ChatGPT",
      logoUrl: "/public/chatgpt-logo.png",
      width: 120,
      height: 40,
      url: "https://chat.openai.com/",
      alt: "ChatGPT Logo",
    },
    {
      name: "Jasper AI",
      logoUrl: "/public/jasper-logo.png",
      width: 120,
      height: 40,
      url: "https://www.jasper.ai/",
      alt: "Jasper AI Logo",
    },
    {
      name: "Grammarly",
      logoUrl: "/public/grammarly-logo.png",
      width: 120,
      height: 40,
      url: "https://www.grammarly.com/",
      alt: "Grammarly Logo",
    },
    {
      name: "Otter.ai",
      logoUrl: "/public/otter-ai-logo.png",
      width: 120,
      height: 40,
      url: "https://otter.ai/",
      alt: "Otter.ai Logo",
    },
    {
      name: "Fireflies.ai",
      logoUrl: "/public/fireflies-logo.png",
      width: 120,
      height: 40,
      url: "https://fireflies.ai/",
      alt: "Fireflies.ai Logo",
    },
  ]

  // Combinar badges personalizados con los predefinidos, evitando duplicados
  const allBadges = showDefaultLogos
    ? [...badges, ...defaultBadges.filter((defaultBadge) => !badges.some((badge) => badge.name === defaultBadge.name))]
    : badges

  // Manejar el evento de carga de imagen exitosa
  const handleImageLoad = (name: string) => {
    setLoadedImages((prev) => ({ ...prev, [name]: true }))
  }

  // Manejar el evento de error de carga de imagen
  const handleImageError = (name: string) => {
    setLoadedImages((prev) => ({ ...prev, [name]: false }))
  }

  if (!isMounted) {
    return null
  }

  return (
    <section className={cn("py-12 bg-white border-t border-b border-gray-100", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          {title && <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>}
          {subtitle && <p className="text-gray-600">{subtitle}</p>}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {allBadges.map((badge, index) => (
            <div
              key={`${badge.name}-${index}`}
              className="group relative transition-all duration-300"
              title={badge.name}
            >
              {badge.url ? (
                <a
                  href={badge.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                  aria-label={`Visitar ${badge.name}`}
                >
                  <div className="relative h-10 w-[120px] flex items-center justify-center">
                    {/* Imagen principal con manejo de errores */}
                    <Image
                      src={badge.logoUrl || "/placeholder.svg"}
                      alt={badge.alt || `Logo de ${badge.name}`}
                      width={badge.width || 120}
                      height={badge.height || 40}
                      className={cn(
                        "h-auto max-h-10 w-auto max-w-[120px] object-contain transition-all duration-300",
                        grayscale && "filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100",
                        "group-hover:scale-105",
                      )}
                      onLoad={() => handleImageLoad(badge.name)}
                      onError={() => handleImageError(badge.name)}
                      style={{ display: loadedImages[badge.name] === false ? "none" : "block" }}
                    />

                    {/* Fallback para imágenes que no se pueden cargar */}
                    {loadedImages[badge.name] === false && (
                      <div className="h-10 w-[120px] flex items-center justify-center bg-gray-100 rounded px-3 py-2">
                        <span className="text-sm font-medium text-gray-600">{badge.name}</span>
                      </div>
                    )}
                  </div>
                </a>
              ) : (
                <div className="relative h-10 w-[120px] flex items-center justify-center">
                  {/* Imagen principal con manejo de errores */}
                  <Image
                    src={badge.logoUrl || "/placeholder.svg"}
                    alt={badge.alt || `Logo de ${badge.name}`}
                    width={badge.width || 120}
                    height={badge.height || 40}
                    className={cn(
                      "h-auto max-h-10 w-auto max-w-[120px] object-contain transition-all duration-300",
                      grayscale && "filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100",
                      "group-hover:scale-105",
                    )}
                    onLoad={() => handleImageLoad(badge.name)}
                    onError={() => handleImageError(badge.name)}
                    style={{ display: loadedImages[badge.name] === false ? "none" : "block" }}
                  />

                  {/* Fallback para imágenes que no se pueden cargar */}
                  {loadedImages[badge.name] === false && (
                    <div className="h-10 w-[120px] flex items-center justify-center bg-gray-100 rounded px-3 py-2">
                      <span className="text-sm font-medium text-gray-600">{badge.name}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
