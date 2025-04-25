import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BaseCard, CardImage, CardContent, CardFooter } from "@/components/ui/card"

interface ToolCardCompactProps {
  name: string
  description: string
  imageUrl?: string | null
  category: string
  slug: string
}

export default function ToolCardCompact({ name, description, imageUrl, category, slug }: ToolCardCompactProps) {
  return (
    <BaseCard>
      <CardImage src={imageUrl} alt={name} aspectRatio="square" className="h-32" />
      <CardContent padding="small">
        <h3 className="text-lg font-bold text-secondary">{name}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
      <CardFooter padding="small">
        <Button asChild variant="outline" size="sm">
          <Link href={`/herramientas/${slug}`}>Ver más</Link>
        </Button>
        <Button asChild className="bg-primary hover:bg-primary/90" size="sm">
          <Link href={`/comparativas?tool=${slug}`}>Comparar</Link>
        </Button>
      </CardFooter>
    </BaseCard>
  )
}
