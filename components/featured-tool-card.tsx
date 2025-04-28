import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Star, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import SafeImage from "@/components/safe-image"

interface FeaturedToolCardProps {
  name: string
  description: string
  imageUrl: string
  category: string
  url: string
  score?: number
  slug: string
  affiliateUrl?: string
  verified?: boolean
}

export default function FeaturedToolCard({
  name,
  description,
  imageUrl,
  category,
  url,
  score = 0,
  slug,
  affiliateUrl,
  verified = false,
}: FeaturedToolCardProps) {
  // Function to get the correct logo URL
  const getLogoUrl = (imageUrl: string) => {
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
          <Star key={`full-${i}`} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
        ))}
        {halfStar && (
          <span className="relative">
            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" style={{ clipPath: "inset(0 50% 0 0)" }} />
            <Star className="absolute top-0 left-0 h-4 w-4 text-gray-300" style={{ clipPath: "inset(0 0 0 50%)" }} />
          </span>
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <Star key={`empty-${i}`} className="h-4 w-4 text-gray-300" />
        ))}
      </div>
    )
  }

  return (
    <div className="rounded-xl border bg-white p-6 shadow-md">
      <div className="flex flex-col md:flex-row md:items-center gap-6">
        {/* Logo container with proper spacing */}
        <div className="relative h-24 w-24 mx-auto md:mx-0 flex-shrink-0 overflow-hidden rounded-lg bg-gray-50">
          <SafeImage src={getLogoUrl(imageUrl)} alt={name} fill className="object-contain p-2" sizes="96px" />
        </div>

        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <h3 className="text-xl font-bold text-secondary">{name}</h3>
            {/* Featured badge positioned properly */}
            <Badge className="bg-primary text-white" variant="default">
              Destacada
            </Badge>
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
              <Link href={url} data-umami-event={`featured-tool-click-${slug}`}>
                Ver análisis
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
