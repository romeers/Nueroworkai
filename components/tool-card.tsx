import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import SafeImage from "./safe-image"

interface ToolCardProps {
  name: string
  description: string
  imageUrl?: string | null
  category: string
  url: string
  featured?: boolean
}

export default function ToolCard({ name, description, imageUrl, category, url, featured = false }: ToolCardProps) {
  const fallbackImage = `/placeholder.svg?height=160&width=320&query=${encodeURIComponent(name + " icon")}`

  return (
    <Card
      className={`overflow-hidden transition-all duration-200 hover:shadow-lg ${featured ? "border-primary/20" : ""}`}
    >
      <div className="relative h-40 w-full overflow-hidden">
        <SafeImage
          src={imageUrl}
          fallbackSrc={fallbackImage}
          alt={`${name} - ${category}`}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
        <Badge className="absolute right-2 top-2 bg-primary hover:bg-primary/90">{category}</Badge>
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold text-secondary">{name}</CardTitle>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="flex flex-wrap gap-2">
          {featured && (
            <Badge variant="outline" className="border-primary/30 text-primary">
              Destacado
            </Badge>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button asChild variant="outline">
          <Link href={`/resenas/${name.toLowerCase().replace(/\s+/g, "-")}`}>Ver reseña</Link>
        </Button>
        <Button asChild className="bg-primary hover:bg-primary/90">
          <Link href={url} target="_blank" rel="noopener noreferrer">
            Probar gratis
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
