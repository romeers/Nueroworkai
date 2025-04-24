import { Card, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import SafeImage from "./safe-image"

interface FeaturedToolCardProps {
  name: string
  description: string
  imageUrl?: string | null
  category: string
  slug: string
  score: number
  specialOffer?: string
  verified?: boolean
}

export default function FeaturedToolCard({
  name,
  description,
  imageUrl,
  category,
  slug,
  score,
  specialOffer,
  verified = false,
}: FeaturedToolCardProps) {
  const fallbackImage = `/placeholder.svg?height=80&width=80&query=${encodeURIComponent(name + " icon")}`
  const toolUrl = `/herramientas/${slug}`

  return (
    <Card className="overflow-hidden transition-all duration-200 hover:shadow-lg flex flex-col h-full">
      <div className="p-6 flex-1">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md mr-4">
              <SafeImage
                src={imageUrl}
                fallbackSrc={fallbackImage}
                alt={`${name} logo`}
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-secondary">{name}</h3>
              <Badge className="mt-1 bg-primary/10 text-primary hover:bg-primary/20">{category}</Badge>
            </div>
          </div>
          <div className="bg-primary text-white rounded-full h-12 w-12 flex items-center justify-center font-bold">
            {score}
          </div>
        </div>
        <p className="text-gray-600">{description}</p>

        {specialOffer && (
          <div className="mt-4 rounded-md bg-green-50 p-2 text-xs text-green-700 border border-green-200">
            <span className="font-semibold">Oferta:</span> {specialOffer}
          </div>
        )}
      </div>
      <CardFooter className="bg-gray-50 p-4 flex justify-between gap-2 border-t">
        <Button asChild variant="outline" size="sm">
          <Link href={`${toolUrl}`}>Ver análisis</Link>
        </Button>
        <Button asChild className="bg-primary hover:bg-primary/90" size="sm">
          <Link href={`${toolUrl}#probar`}>Probar gratis</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
