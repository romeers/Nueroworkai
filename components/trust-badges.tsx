"use client"

import { useLanguage } from "@/contexts/language-context"

interface TrustBadge {
  name: string
  logoUrl: string
  width?: number
  height?: number
}

interface TrustBadgesProps {
  title?: string
  badges: TrustBadge[]
}

export default function TrustBadges({ title, badges }: TrustBadgesProps) {
  const { t } = useLanguage()

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {title && <h2 className="text-center text-lg text-gray-600 mb-8">{title || t("trustBadgesTitle")}</h2>}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {badges.map((badge) => (
            <div key={badge.name} className="flex items-center justify-center">
              <img
                src={badge.logoUrl || "/placeholder.svg"}
                alt={`Logo de ${badge.name}`}
                width={badge.width || 120}
                height={badge.height || 40}
                className="h-8 md:h-10 w-auto grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
