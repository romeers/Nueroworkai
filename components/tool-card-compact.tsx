import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import SafeImage from "./safe-image"

interface ToolCardCompactProps {
  name: string
  description: string
  imageUrl?: string | null
  category: string
  slug: string
}

export default function ToolCardCompact({ name, description, imageUrl, category, slug }: ToolCardCompactProps) {
  const fallbackImage = `/placeholder.svg?height=80&width=80&query=${encodeURIComponent(name + " icon")}`

  return (
    <Card className="flex h-full flex-col overflow-hidden transition-all duration-200 hover:shadow-md">
      <CardContent className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex items-center gap-4">
          <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
            <SafeImage
              src={imageUrl}
              fallbackSrc={fallbackImage}
              alt={`${name} logo`}
              fill
              className="object-contain"
            />
          </div>
          <div>
            <h3 className="text-lg font-bold text-secondary">{name}</h3>
            <Badge className="mt-1 bg-primary/10 text-primary hover:bg-primary/20">{category}</Badge>
          </div>
        </div>
        <p className="line-clamp-2 flex-1 text-sm text-gray-600">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-between gap-2 border-t bg-gray-50 p-4">
        <Button asChild variant="outline" size="sm">
          <Link href={`/herramientas/${slug}`}>Ver más</Link>
        </Button>
        <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
          <Link href={`/comparativas?tool=${slug}`}>Comparar</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
