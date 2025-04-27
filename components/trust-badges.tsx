"use client"

import { useState, useEffect } from "react"
import SafeImage from "@/components/safe-image"
import { cn } from "@/lib/utils"

interface Badge {
  name: string
  logoUrl: string
  width?: number
  height?: number
  url?: string
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
  title = "Herramientas de IA que analizamos",
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

  // Logos predefinidos de herramientas populares
  const defaultBadges: Badge[] = [
    {
      name: "Notion AI",
      logoUrl: "/notion-logo.png",
      width: 120,
      height: 40,
      url: "https://www.notion.so/product/ai",
    },
    {
      name: "Zapier",
      logoUrl: "/zapier-logo.png",
      width: 120,
      height: 40,
      url: "https://zapier.com/",
    },
    {
      name: "ClickUp",
      logoUrl: "/clickup-logo.png",
      width: 120,
      height: 40,
      url: "https://clickup.com/",
    },
    {
      name: "Grammarly",
      logoUrl: "/grammarly-logo.png",
      width: 120,
      height: 40,
      url: "https://www.grammarly.com/",
    },
    {
      name: "Jasper",
      logoUrl: "/jasper-logo.png",
      width: 120,
      height: 40,
      url: "https://www.jasper.ai/",
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
                    alt={`Logo de ${badge.name}`}
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
                  alt={`Logo de ${badge.name}`}
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
