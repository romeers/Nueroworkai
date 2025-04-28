import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"
import SafeImage from "@/components/safe-image"

interface ToolCardProps {
  name: string
  description: string
  imageUrl: string
  category: string
  url: string
  featured?: boolean
  score?: number
  slug: string
  verified?: boolean
}

export default function ToolCard({
  name,
  description,
  imageUrl,
  category,
  url,
  featured = false,
  score = 0,
  slug,
  verified = false,
}: ToolCardProps) {
  // Function to get the correct logo URL
  const getLogoUrl = (imageUrl: string) => {
    if (!imageUrl) {
      return `/placeholder.svg?height=80&width=80&query=${encodeURIComponent(name + " logo")}`
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
          <Star key={`full-${i}`} className="h-3.5 w-3.5 text-yellow-500 fill-yellow-500" />
        ))}
        {halfStar && (
          <span className="relative">
            <Star className="h-3.5 w-3.5 text-yellow-500 fill-yellow-500" style={{ clipPath: "inset(0 50% 0 0)" }} />
            <Star
              className="absolute top-0 left-0 h-3.5 w-3.5 text-gray-300"
              style={{ clipPath: "inset(0 0 0 50%)" }}
            />
          </span>
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <Star key={`empty-${i}`} className="h-3.5 w-3.5 text-gray-300" />
        ))}
      </div>
    )
  }

  return (
    <Link
      href={url}
      className="block rounded-lg border bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
      data-umami-event={`tool-card-click-${slug}`}
    >
      <div className="flex items-start gap-4">
        {/* Logo container - now with proper spacing and no overlapping */}
        <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md bg-gray-50">
          <SafeImage src={getLogoUrl(imageUrl)} alt={name} fill className="object-contain p-1" sizes="64px" />
        </div>

        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-secondary">{name}</h3>
            {/* Featured badge moved to be next to the name instead of overlapping the logo */}
            {featured && (
              <Badge className="bg-primary text-white" variant="default">
                Destacada
              </Badge>
            )}
          </div>
          <p className="mt-1 text-sm text-gray-600 line-clamp-2">{description}</p>
          <div className="mt-2 flex items-center justify-between">
            <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
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
