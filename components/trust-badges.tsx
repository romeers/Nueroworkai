"use client"

import { useState, useEffect } from "react"
import SafeImage from "@/components/safe-image"
import { cn } from "@/lib/utils"

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

  // Evitar problemas de hidratación
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Logos predefinidos de herramientas populares con URLs actualizadas
  const defaultBadges: Badge[] = [
    {
      name: "Notion AI",
      logoUrl: "/notion-logo.png",
      width: 120,
      height: 40,
      url: "https://www.notion.so/product/ai",
      alt: "Notion AI Logo",
    },
    {
      name: "ChatGPT",
      logoUrl:
        "https://tb4dwzggtieausz8.public.blob.vercel-storage.com/ChatGPT-Logo.svg-tEVS8llUmi8G8FbG0DKY0wCgYGCfLr.png",
      width: 120,
      height: 40,
      url: "https://chat.openai.com/",
      alt: "ChatGPT Logo",
    },
    {
      name: "Jasper",
      logoUrl: "https://tb4dwzggtieausz8.public.blob.vercel-storage.com/jasperai-2Kn0R5xCQWprwX6FtM9PIasM6JP40x.png",
      width: 120,
      height: 40,
      url: "https://www.jasper.ai/",
      alt: "Jasper AI Logo",
    },
    {
      name: "Grammarly",
      logoUrl:
        "https://tb4dwzggtieausz8.public.blob.vercel-storage.com/grammarly-logo-8qUO2GKBGxR5r9ZORVUXKrrRlSVGOa.webp",
      width: 120,
      height: 40,
      url: "https://www.grammarly.com/",
      alt: "Grammarly Logo",
    },
    {
      name: "Otter.ai",
      logoUrl:
        "https://tb4dwzggtieausz8.public.blob.vercel-storage.com/CA_Otter-ai-logo%20200x200_0-SiWvUPzm7dw8BeCVRhJpgwlsKkl58v.png",
      width: 120,
      height: 40,
      url: "https://otter.ai/",
      alt: "Otter.ai Logo",
    },
    {
      name: "Fireflies.ai",
      logoUrl:
        "https://tb4dwzggtieausz8.public.blob.vercel-storage.com/Fireflies_AI_logo-SQM4PmNcI5QHxwoY5pzypxtQPl1Srd.png",
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
                  <SafeImage
                    src={badge.logoUrl}
                    alt={badge.alt || `Logo de ${badge.name}`}
                    width={badge.width || 120}
                    height={badge.height || 40}
                    className={cn(
                      "h-auto max-h-12 w-auto max-w-[120px] object-contain transition-all duration-300",
                      grayscale && "filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100",
                      "group-hover:scale-105",
                    )}
                    fallbackSrc="/abstract-geometric-logo.png"
                  />
                </a>
              ) : (
                <SafeImage
                  src={badge.logoUrl}
                  alt={badge.alt || `Logo de ${badge.name}`}
                  width={badge.width || 120}
                  height={badge.height || 40}
                  className={cn(
                    "h-auto max-h-12 w-auto max-w-[120px] object-contain transition-all duration-300",
                    grayscale && "filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100",
                    "group-hover:scale-105",
                  )}
                  fallbackSrc="/abstract-geometric-logo.png"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
