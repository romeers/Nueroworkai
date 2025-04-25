import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, ArrowRight, ExternalLink } from "lucide-react"
import SafeImage from "./safe-image"
import { cn } from "@/lib/utils"

interface ResourceGridCardProps {
  title: string
  description: string
  imageUrl: string
  category: string
  slug: string
  readTime?: string
  toolName?: string
  toolAffiliateUrl?: string
  className?: string
}

export default function ResourceGridCard({
  title,
  description,
  imageUrl,
  category,
  slug,
  readTime,
  toolName,
  toolAffiliateUrl,
  className,
}: ResourceGridCardProps) {
  return (
    <div
      className={cn(
        "group rounded-lg border bg-white overflow-hidden transition-all duration-200 hover:shadow-md flex flex-col h-full",
        className,
      )}
    >
      <div className="relative h-48 w-full overflow-hidden bg-gray-100">
        <SafeImage
          src={imageUrl}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-0 right-0 m-2">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20">{category}</Badge>
        </div>
      </div>

      <div className="flex-1 p-6 flex flex-col">
        {readTime && (
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs text-gray-500 flex items-center">
              <Clock className="h-3 w-3 mr-1" />
              {readTime} de lectura
            </span>
          </div>
        )}

        <h3 className="text-xl font-bold text-secondary mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          <Link href={`/recursos/${slug}`}>{title}</Link>
        </h3>

        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>

        <div className="mt-auto flex flex-col sm:flex-row gap-3">
          <Button asChild variant="outline" size="sm" className="flex-1">
            <Link
              href={`/recursos/${slug}`}
              className="flex items-center justify-center"
              data-umami-event={`resource-read-${slug}`}
            >
              Leer más
              <ArrowRight className="ml-2 h-3 w-3" />
            </Link>
          </Button>

          {toolName && toolAffiliateUrl && (
            <Button asChild className="bg-primary hover:bg-primary/90 flex-1" size="sm">
              <Link
                href={toolAffiliateUrl}
                target="_blank"
                rel="noopener sponsored"
                className="flex items-center justify-center"
                data-umami-event={`affiliate-${toolName.toLowerCase().replace(/\s+/g, "-")}-${slug}`}
              >
                Probar {toolName}
                <ExternalLink className="ml-2 h-3 w-3" />
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
