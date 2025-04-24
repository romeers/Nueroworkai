import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Clock, ExternalLink } from "lucide-react"
import ProgressiveImage from "./progressive-image"
import { validateImageSrc, generatePlaceholderUrl } from "@/utils/image-utils"
import { cn } from "@/lib/utils"

interface ToolCardProps {
  name: string
  description: string
  imageUrl?: string | null
  category: string
  url: string
  featured?: boolean
  score?: number
  specialOffer?: string
  verified?: boolean
}

export default function ToolCard({
  name,
  description,
  imageUrl,
  category,
  url,
  featured = false,
  score,
  specialOffer,
  verified = false,
}: ToolCardProps) {
  const fallbackImage = generatePlaceholderUrl(`${name} icon`, 160, 320)

  // Generar una versión de baja calidad para la carga progresiva
  const lowQualityUrl =
    imageUrl && imageUrl !== "" ? `/api/blur-image?url=${encodeURIComponent(imageUrl)}&w=20&q=10` : undefined

  // Determinar si la URL es interna o externa (afiliado)
  const isExternalUrl = url.startsWith("http")
  const toolSlug = name.toLowerCase().replace(/\s+/g, "-")
  const internalUrl = `/herramientas/${toolSlug}`

  return (
    <Card
      className={cn(
        "overflow-hidden transition-all duration-200 hover:shadow-lg flex flex-col h-full",
        featured ? "border-primary/20" : "",
      )}
    >
      <div className="relative h-40 w-full overflow-hidden">
        <ProgressiveImage
          src={validateImageSrc(imageUrl, fallbackImage)}
          fallbackSrc={fallbackImage}
          lowQualitySrc={lowQualityUrl}
          alt={`${name} - ${category}`}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute left-2 top-2">
          <Badge className="bg-primary hover:bg-primary/90">{category}</Badge>
        </div>
        {verified && (
          <div className="absolute right-2 top-2">
            <Badge variant="outline" className="bg-white/80 border-green-500 text-green-700">
              Verificado
            </Badge>
          </div>
        )}
        {score && (
          <div className="absolute bottom-2 right-2">
            <div className="flex items-center rounded-full bg-black/60 px-2 py-1 text-xs text-white">
              <Star className="mr-1 h-3 w-3 fill-yellow-400 text-yellow-400" />
              <span>{score}</span>
            </div>
          </div>
        )}
      </div>
      <CardHeader className="pb-2 flex-grow">
        <CardTitle className="text-xl font-bold text-secondary">{name}</CardTitle>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        {specialOffer && (
          <div className="mb-3 rounded-md bg-green-50 p-2 text-xs text-green-700 border border-green-200 flex items-center">
            <Clock className="h-3 w-3 mr-1 flex-shrink-0" />
            <span>{specialOffer}</span>
          </div>
        )}
        <div className="flex flex-wrap gap-2">
          {featured && (
            <Badge variant="outline" className="border-primary/30 text-primary">
              Destacado
            </Badge>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between mt-auto">
        <Button asChild variant="outline">
          <Link href={internalUrl}>Ver análisis</Link>
        </Button>
        <Button asChild className="bg-primary hover:bg-primary/90">
          <Link
            href={isExternalUrl ? url : `${internalUrl}#probar`}
            target={isExternalUrl ? "_blank" : undefined}
            rel={isExternalUrl ? "noopener sponsored" : undefined}
            className="flex items-center gap-1"
          >
            Probar {isExternalUrl && <ExternalLink className="h-3 w-3 ml-1" />}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
