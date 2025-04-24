import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon } from "lucide-react"
import ProgressiveImage from "./progressive-image"
import { validateImageSrc, generatePlaceholderUrl } from "@/utils/image-utils"

interface BlogCardProps {
  title: string
  excerpt: string
  imageUrl?: string | null
  category: string
  date: string
  slug: string
}

export default function BlogCard({ title, excerpt, imageUrl, category, date, slug }: BlogCardProps) {
  const fallbackImage = generatePlaceholderUrl(`Blog post about ${title}`, 240, 480)

  // Generar una versión de baja calidad para la carga progresiva
  const lowQualityUrl =
    imageUrl && imageUrl !== "" ? `/api/blur-image?url=${encodeURIComponent(imageUrl)}&w=20&q=10` : undefined

  return (
    <Card className="overflow-hidden transition-all duration-200 hover:shadow-lg">
      <div className="relative h-48 w-full overflow-hidden">
        <ProgressiveImage
          src={validateImageSrc(imageUrl, fallbackImage)}
          fallbackSrc={fallbackImage}
          lowQualitySrc={lowQualityUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
        <Badge className="absolute right-2 top-2 bg-primary hover:bg-primary/90">{category}</Badge>
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="line-clamp-2 text-xl font-bold text-secondary">
          <Link href={`/blog/${slug}`} className="hover:text-primary">
            {title}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="line-clamp-3">{excerpt}</CardDescription>
      </CardContent>
      <CardFooter className="flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center gap-1">
          <CalendarIcon className="h-4 w-4" />
          <span>{date}</span>
        </div>
        <Link href={`/blog/${slug}`} className="font-medium text-primary hover:underline">
          Leer más
        </Link>
      </CardFooter>
    </Card>
  )
}
