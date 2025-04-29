"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ExternalLink } from "lucide-react"
import SafeImage from "@/components/safe-image"
import { cn } from "@/lib/utils"

export type ToolCardVariant = "compact" | "featured" | "grid" | "list"

export interface UnifiedToolCardProps {
  name: string
  description: string
  imageUrl?: string | null
  category: string
  slug: string
  score?: number
  specialOffer?: string
  verified?: boolean
  affiliateUrl?: string
  featured?: boolean
  isNew?: boolean
  variant?: ToolCardVariant
  className?: string
  pros?: string[]
  cons?: string[]
}

export default function UnifiedToolCard({
  name,
  description,
  imageUrl,
  category,
  slug,
  score = 0,
  affiliateUrl,
  verified = false,
  specialOffer,
  featured = false,
  isNew = false,
  variant = "grid",
  className,
  pros,
  cons,
}: UnifiedToolCardProps) {
  // Function to get the correct logo URL
  const getLogoUrl = (imageUrl: string | null | undefined) => {
    if (!imageUrl) {
      return `/placeholder.svg?height=120&width=120&query=${encodeURIComponent(name + " logo")}`
    }
    return imageUrl
  }

  // Function to render stars based on score
  const renderStars = (score: number) => {
    const fullStars = Math.floor(score / 2)
    const halfStar = score % 2 >= 1
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0)

    return (
      <div className="flex">
        {[...Array(fullStars)].map((_, i) => (
          <Star
            key={`full-${i}`}
            className={`${variant === "compact" ? "h-3.5 w-3.5" : "h-4 w-4"} text-yellow-500 fill-yellow-500`}
          />
        ))}
        {halfStar && (
          <span className="relative">
            <Star
              className={`${variant === "compact" ? "h-3.5 w-3.5" : "h-4 w-4"} text-yellow-500 fill-yellow-500`}
              style={{ clipPath: "inset(0 50% 0 0)" }}
            />
            <Star
              className={`absolute top-0 left-0 ${variant === "compact" ? "h-3.5 w-3.5" : "h-4 w-4"} text-gray-300`}
              style={{ clipPath: "inset(0 0 0 50%)" }}
            />
          </span>
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <Star key={`empty-${i}`} className={`${variant === "compact" ? "h-3.5 w-3.5" : "h-4 w-4"} text-gray-300`} />
        ))}
      </div>
    )
  }

  // Tracking event ID for analytics
  const trackingId = `tool-${variant}-${slug}`

  // Different layouts based on variant
  if (variant === "compact") {
    return (
      <Link
        href={`/herramientas/${slug}`}
        className={cn("block rounded-lg border bg-white p-4 shadow-sm transition-shadow hover:shadow-md", className)}
        data-umami-event={`tool-card-click-${slug}`}
      >
        <div className="flex items-start gap-3">
          <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-md bg-gray-50">
            <SafeImage src={getLogoUrl(imageUrl)} alt={name} fill className="object-contain p-1" sizes="48px" />
          </div>

          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-secondary text-sm">{name}</h3>
              {featured && (
                <Badge className="bg-primary text-white text-xs" variant="default">
                  Top
                </Badge>
              )}
            </div>
            <p className="mt-1 text-xs text-gray-600 line-clamp-2">{description}</p>
            <div className="mt-2 flex items-center justify-between">
              <span className="inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-800">
                {category}
              </span>
              {score > 0 && (
                <div className="flex items-center gap-1">
                  <span className="text-xs font-medium text-primary">{score}/10</span>
                  {renderStars(score)}
                </div>
              )}
            </div>
          </div>
        </div>
      </Link>
    )
  }

  if (variant === "featured") {
    return (
      <div className={cn("rounded-xl border bg-white p-6 shadow-md", className)}>
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          <div className="relative h-24 w-24 mx-auto md:mx-0 flex-shrink-0 overflow-hidden rounded-lg bg-gray-50">
            <SafeImage src={getLogoUrl(imageUrl)} alt={name} fill className="object-contain p-2" sizes="96px" />
          </div>

          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <h3 className="text-xl font-bold text-secondary">{name}</h3>
              {featured && (
                <Badge className="bg-primary text-white" variant="default">
                  Destacada
                </Badge>
              )}
              {isNew && <Badge className="bg-green-500 text-white">Nueva</Badge>}
              <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                {category}
              </span>
            </div>

            <p className="text-gray-600 mb-4">{description}</p>

            {score > 0 && (
              <div className="flex items-center gap-2 mb-4">
                <span className="font-medium text-primary">{score}/10</span>
                {renderStars(score)}
              </div>
            )}

            <div className="flex flex-wrap gap-3">
              {affiliateUrl && (
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <Link
                    href={affiliateUrl}
                    target="_blank"
                    rel="noopener sponsored"
                    className="flex items-center gap-1"
                    data-umami-event={`affiliate-click-${slug}`}
                  >
                    Probar Gratis
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </Button>
              )}
              <Button asChild variant="outline">
                <Link href={`/herramientas/${slug}`} data-umami-event={`featured-tool-click-${slug}`}>
                  Ver análisis
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Default grid variant
  return (
    <div
      className={cn(
        "rounded-xl shadow-sm hover:shadow-md transition bg-white p-5 flex flex-col items-center text-center h-full",
        className,
      )}
    >
      <div className="relative mb-4">
        <div className="relative w-16 h-16 flex items-center justify-center">
          <SafeImage
            src={getLogoUrl(imageUrl)}
            alt={`Logo de ${name}`}
            width={64}
            height={64}
            className="object-contain"
            loading="lazy"
          />
        </div>

        {/* Badges */}
        <div className="absolute -top-2 -right-2 flex flex-col gap-1">
          {featured && <Badge className="bg-primary text-white">Top Valorada</Badge>}
          {isNew && <Badge className="bg-green-500 text-white">Nueva</Badge>}
        </div>
      </div>

      <h3 className="font-semibold text-gray-800 text-lg mb-1">{name}</h3>

      {/* NeuroScore Badge */}
      <div className="flex flex-col items-center mb-3">
        <span className="text-sm font-medium text-gray-600 mb-1">
          NeuroScore: <span className="text-violet-700 font-semibold">{score} / 10</span>
        </span>
        <div className="flex items-center">{renderStars(score)}</div>
      </div>

      <p className="text-sm text-gray-600 mb-4 flex-grow">{description}</p>

      {/* Category badge */}
      <div className="mb-3">
        <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
          {category}
        </span>
      </div>

      {/* Action buttons */}
      <div className="flex flex-col sm:flex-row gap-2 w-full mt-auto">
        {affiliateUrl && (
          <Button asChild className="bg-primary hover:bg-primary/90 flex-1">
            <Link
              href={affiliateUrl}
              target="_blank"
              rel="noopener sponsored"
              className="flex items-center justify-center gap-1"
              data-umami-event={`affiliate-click-${slug}`}
            >
              Probar Gratis
              <ExternalLink className="h-3.5 w-3.5" />
            </Link>
          </Button>
        )}
        <Button asChild variant="outline" className="flex-1">
          <Link href={`/herramientas/${slug}`} data-umami-event={`tool-click-${slug}`}>
            Ver análisis
          </Link>
        </Button>
      </div>
    </div>
  )
}
