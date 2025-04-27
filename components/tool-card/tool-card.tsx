import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ToolRating } from "./tool-rating"
import { ToolFeatures } from "./tool-features"
import { ToolTags } from "./tool-tags"
import { ToolImage } from "./tool-image"
import { ToolVerifiedBadge } from "./tool-verified-badge"
import { ToolSpecialOffer } from "./tool-special-offer"
import { FavoriteButton } from "../favorite-button"
import type { ToolCardProps } from "./tool-card-types"

export default function ToolCard({
  tool,
  variant = "default",
  showRating = true,
  showFeatures = true,
  showTags = true,
  showActions = true,
  className,
  ...props
}: ToolCardProps) {
  const {
    name,
    slug,
    description,
    category_name,
    image_url,
    affiliate_url,
    score,
    pros,
    features,
    tags,
    verified,
    special_offer,
  } = tool

  // Determinar si mostrar la versión compacta o completa
  const isCompact = variant === "compact"

  return (
    <Card className={`overflow-hidden transition-all duration-300 hover:shadow-md ${className}`} {...props}>
      <CardHeader className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ToolImage src={image_url} alt={name} size={isCompact ? "sm" : "md"} />

            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-lg">
                  <Link href={`/herramientas/${slug}`} className="hover:text-primary transition-colors">
                    {name}
                  </Link>
                </h3>

                {verified && <ToolVerifiedBadge />}
              </div>

              <Badge variant="outline" className="mt-1">
                {category_name}
              </Badge>
            </div>
          </div>

          {showRating && score && <ToolRating score={score} />}
        </div>
      </CardHeader>

      <CardContent className="p-4 pt-0">
        <p className="text-gray-600 text-sm">
          {isCompact ? (description.length > 100 ? `${description.substring(0, 100)}...` : description) : description}
        </p>

        {showFeatures && features && features.length > 0 && !isCompact && (
          <ToolFeatures features={features} className="mt-4" />
        )}

        {special_offer && !isCompact && <ToolSpecialOffer offer={special_offer} className="mt-4" />}

        {showTags && tags && tags.length > 0 && !isCompact && <ToolTags tags={tags} className="mt-4" />}
      </CardContent>

      {showActions && (
        <CardFooter className="p-4 pt-0 flex justify-between">
          <div className="flex gap-2">
            <Button asChild size={isCompact ? "sm" : "default"}>
              <Link href={`/herramientas/${slug}`}>Ver detalles</Link>
            </Button>

            {affiliate_url && (
              <Button variant="outline" size={isCompact ? "sm" : "default"} asChild>
                <a href={affiliate_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                  Visitar <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            )}
          </div>

          <FavoriteButton toolId={tool.id} />
        </CardFooter>
      )}
    </Card>
  )
}
