"use client"

import SafeImage from "./safe-image"
import { useState, useEffect } from "react"

interface TrustBadge {
  name: string
  logoUrl: string
  width?: number
  height?: number
}

interface TrustBadgesProps {
  title?: string
  badges?: TrustBadge[]
  showDefaultLogos?: boolean
}

export default function TrustBadges({ title, badges = [], showDefaultLogos = true }: TrustBadgesProps) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Logos predefinidos de las herramientas
  const defaultLogos: TrustBadge[] = [
    { name: "Notion", logoUrl: "/notion-logo.png", width: 120, height: 40 },
    { name: "Zapier", logoUrl: "/zapier-logo.png", width: 120, height: 40 },
    { name: "ClickUp", logoUrl: "/clickup-logo.png", width: 120, height: 40 },
    { name: "Grammarly", logoUrl: "/grammarly-logo.png", width: 120, height: 40 },
    { name: "Jasper", logoUrl: "/jasper-logo.png", width: 120, height: 40 },
    { name: "Fireflies", logoUrl: "/fireflies-logo-full.png", width: 120, height: 40 },
    { name: "Otter AI", logoUrl: "/otter-ai-logo-full.png", width: 120, height: 40 },
  ]

  // Combinar logos predefinidos con los proporcionados como props
  const logosToShow = showDefaultLogos
    ? [...defaultLogos, ...badges.filter((b) => !defaultLogos.some((dl) => dl.name === b.name))]
    : badges

  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <div className="mx-auto max-w-3xl text-center mb-10">
            <p className="text-lg font-medium text-gray-700">
              {title || "Estas plataformas líderes ya utilizan nuestras guías y análisis"}
            </p>
          </div>
        )}

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {isClient &&
            logosToShow.map((badge, index) => (
              <div
                key={index}
                className="group relative transition-all duration-300 hover:transform hover:scale-105"
                title={badge.name}
              >
                <SafeImage
                  src={badge.logoUrl}
                  alt={`Logo de ${badge.name}`}
                  width={badge.width || 120}
                  height={badge.height || 40}
                  className="h-8 md:h-10 w-auto grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition duration-300"
                />
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}
