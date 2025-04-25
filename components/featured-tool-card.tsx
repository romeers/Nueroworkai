import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BaseCard, CardImage, CardContent, CardFooter } from "@/components/ui/card"

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
  const toolUrl = `/herramientas/${slug}`

  return (
    <BaseCard>
      <CardImage src={imageUrl} alt={name} aspectRatio="square" className="h-48" />
      <CardContent padding="medium">
        <h3 className="text-xl font-bold text-secondary">{name}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
      <CardFooter padding="small">
        <Button asChild variant="outline" size="sm">
          <Link href={`${toolUrl}`}>Ver análisis</Link>
        </Button>
        <Button asChild className="bg-primary hover:bg-primary/90" size="sm">
          <Link href={`${toolUrl}#probar`}>Probar gratis</Link>
        </Button>
      </CardFooter>
    </BaseCard>
  )
}
