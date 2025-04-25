import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, ArrowRight, ExternalLink } from "lucide-react"
import SafeImage from "./safe-image"
import { cn } from "@/lib/utils"

interface FeaturedResourceCardProps {
  title: string
  description: string
  imageUrl: string
  category: string
  slug: string
  ctaText: string
  isDownloadable?: boolean
  toolAffiliateUrl?: string
  toolName?: string
  className?: string
}

export default function FeaturedResourceCard({
  title,
  description,
  imageUrl,
  category,
  slug,
  ctaText,
  isDownloadable = false,
  toolAffiliateUrl,
  toolName,
  className,
}: FeaturedResourceCardProps) {
  return (
    <div
      className={cn(
        "group rounded-xl overflow-hidden border bg-white shadow-sm hover:shadow-md transition-all duration-200",
        className,
      )}
    >
      <div className="flex flex-col md:flex-row h-full">
        <div className="relative w-full md:w-2/5 h-48 md:h-auto overflow-hidden">
          <SafeImage
            src={imageUrl}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-0 left-0 m-3">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20">{category}</Badge>
          </div>
        </div>

        <div className="flex flex-col justify-between p-6 flex-1">
          <div>
            <h3 className="text-xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-gray-600 mb-4">{description}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-auto">
            <Button asChild variant={isDownloadable ? "default" : "outline"} className="flex-1">
              <Link
                href={`/recursos/${slug}`}
                className="flex items-center justify-center"
                data-umami-event={`resource-${isDownloadable ? "download" : "read"}-${slug}`}
              >
                {isDownloadable ? (
                  <>
                    <Download className="mr-2 h-4 w-4" />
                    {ctaText}
                  </>
                ) : (
                  <>
                    {ctaText}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Link>
            </Button>

            {toolName && toolAffiliateUrl && (
              <Button asChild className="bg-primary hover:bg-primary/90 flex-1">
                <Link
                  href={toolAffiliateUrl}
                  target="_blank"
                  rel="noopener sponsored"
                  className="flex items-center justify-center"
                  data-umami-event={`affiliate-${toolName.toLowerCase().replace(/\s+/g, "-")}-${slug}`}
                >
                  Probar {toolName}
                  <ExternalLink className="ml-2 h-3.5 w-3.5" />
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
