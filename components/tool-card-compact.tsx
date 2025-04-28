import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import SafeImage from "@/components/safe-image"

interface ToolCardCompactProps {
  name: string
  imageUrl: string
  category: string
  url: string
  featured?: boolean
  slug: string
}

export default function ToolCardCompact({
  name,
  imageUrl,
  category,
  url,
  featured = false,
  slug,
}: ToolCardCompactProps) {
  // Function to get the correct logo URL
  const getLogoUrl = (imageUrl: string) => {
    if (!imageUrl) {
      return `/placeholder.svg?height=40&width=40&query=${encodeURIComponent(name + " logo")}`
    }
    return imageUrl
  }

  return (
    <Link
      href={url}
      className="flex items-center gap-3 rounded-lg border bg-white p-3 shadow-sm transition-shadow hover:shadow-md"
      data-umami-event={`tool-card-compact-click-${slug}`}
    >
      <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-md bg-gray-50">
        <SafeImage src={getLogoUrl(imageUrl)} alt={name} fill className="object-contain p-1" sizes="40px" />
      </div>
      <div className="flex flex-1 items-center justify-between">
        <div>
          <h3 className="font-medium text-secondary">{name}</h3>
          <span className="text-xs text-gray-500">{category}</span>
        </div>
        {featured && (
          <Badge className="ml-2 bg-primary text-white" variant="default">
            Destacada
          </Badge>
        )}
      </div>
    </Link>
  )
}
