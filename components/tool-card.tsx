import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Clock, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"
import { BaseCard, CardImage, CardContent, CardFooter } from "@/components/ui/card"

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
  const toolSlug = name.toLowerCase().replace(/\s+/g, "-")
  const internalUrl = `/herramientas/${toolSlug}`
  const isExternalUrl = url.startsWith("http")

  return (
    <BaseCard className={cn(featured ? "border-primary/20" : "")}>
      <CardImage
        src={imageUrl}
        alt={name}
        aspectRatio="square"
        className="h-40"
        badges={[
          {
            text: category,
            position: "top-left",
            variant: "default",
          },
          ...(verified
            ? [
                {
                  text: "Verificado",
                  position: "top-right",
                  variant: "outline",
                  className: "bg-white/80 border-green-500 text-green-700",
                },
              ]
            : []),
          ...(score
            ? [
                {
                  text: score.toString(),
                  position: "bottom-right",
                  className: "bg-black/60 text-white",
                },
              ]
            : []),
        ]}
      />
      <CardContent padding="medium">
        <h3 className="text-xl font-bold text-secondary line-clamp-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{description}</p>
        {specialOffer && (
          <div className="mb-3 rounded-md bg-green-50 p-2 text-xs text-green-700 border border-green-200 flex items-center">
            <Clock className="h-3 w-3 mr-1 flex-shrink-0" />
            <span>{specialOffer}</span>
          </div>
        )}
      </CardContent>
      <CardFooter padding="small">
        <Button asChild variant="outline" size="sm">
          <Link href={internalUrl}>Ver análisis</Link>
        </Button>
        <Button asChild className="bg-primary hover:bg-primary/90" size="sm">
          <Link
            href={isExternalUrl ? url : `${internalUrl}#probar`}
            target={isExternalUrl ? "_blank" : undefined}
            rel={isExternalUrl ? "noopener sponsored" : undefined}
            className="flex items-center gap-1"
          >
            Probar
            {isExternalUrl && <ExternalLink className="h-3 w-3 ml-1" />}
          </Link>
        </Button>
      </CardFooter>
    </BaseCard>
  )
}
