import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"
import SafeImage from "./safe-image"
import FavoriteButton from "@/components/favorite-button"

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
  slug: string // Ensure slug is a required prop
  id: string
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
  slug, // Make slug required
  id,
}: ToolCardProps) {
  // Actualizar las referencias a las imágenes en el componente de tarjeta de herramienta
  // Buscar y reemplazar las URLs de las imágenes en este archivo

  // Reemplazar:
  // "/notion-ai-blue.png" por "/notion-logo.png"
  // "/zapier-blue-background.png" por "/zapier-logo.png"
  // "/clickup-blue-background.png" por "/clickup-logo.png"
  // "/fireflies-ai-logo-blue.png" por "/fireflies-logo-full.png"
  // "/otter-ai-logo-inspired-design.png" por "/otter-ai-logo-full.png"
  // "/grammarly-blue.png" por "/grammarly-logo.png"
  // "/ai-logo-blue.png" por "/jasper-logo.png"

  const updatedImageUrl = imageUrl
    ?.replace("/notion-ai-blue.png", "/notion-logo.png")
    .replace("/zapier-blue-background.png", "/zapier-logo.png")
    .replace("/clickup-blue-background.png", "/clickup-logo.png")
    .replace("/fireflies-ai-logo-blue.png", "/fireflies-logo-full.png")
    .replace("/otter-ai-logo-inspired-design.png", "/otter-ai-logo-full.png")
    .replace("/grammarly-blue.png", "/grammarly-logo.png")
    .replace("/ai-logo-blue.png", "/jasper-logo.png")

  const fallbackImage = `/placeholder.svg?height=160&width=320&query=${encodeURIComponent(name + " icon")}`

  // Determinar si la URL es interna o externa (afiliado)
  const isExternalUrl = url.startsWith("http")
  const internalUrl = `/herramientas/${slug}`

  // Añadir una función para obtener la URL oficial si no hay URL de afiliado
  const getOfficialUrl = (toolName: string) => {
    const toolUrls: Record<string, string> = {
      "Notion AI": "https://www.notion.so/product/ai",
      Zapier: "https://zapier.com/",
      ClickUp: "https://clickup.com/",
      Fireflies: "https://fireflies.ai/",
      "Otter.ai": "https://otter.ai/",
      Grammarly: "https://www.grammarly.com/",
      Jasper: "https://www.jasper.ai/",
      ChatGPT: "https://chat.openai.com/",
    }

    return toolUrls[toolName] || "https://www.notion.so/product/ai" // Notion AI como fallback
  }

  return (
    <Card
      className={cn(
        "overflow-hidden transition-all duration-200 hover:shadow-lg flex flex-col h-full",
        featured ? "border-primary/20" : "",
      )}
    >
      <div className="relative h-40 w-full overflow-hidden bg-gray-100 flex items-center justify-center">
        <SafeImage
          src={updatedImageUrl || imageUrl}
          fallbackSrc={fallbackImage}
          alt={`Logo de ${name}`}
          width={160}
          height={160}
          className="h-auto w-auto max-h-32 max-w-[80%] object-contain"
          priority={featured}
        />
        <div className="absolute right-2 top-2">
          <FavoriteButton toolId={id} className="bg-white/90 hover:bg-white" />
        </div>
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
        <Button asChild variant="outline" size="sm">
          <Link href={internalUrl} aria-label={`Ver análisis de ${name}`}>
            Ver análisis
          </Link>
        </Button>
        <Button asChild className="bg-primary hover:bg-primary/90" size="sm">
          <Link
            href={isExternalUrl ? url : getOfficialUrl(name)}
            target="_blank"
            rel="noopener sponsored"
            className="flex items-center gap-1"
            aria-label={`Probar ${name} (se abre en una nueva ventana)`}
          >
            Probar
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-3 w-3 ml-1"
              aria-hidden="true"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
