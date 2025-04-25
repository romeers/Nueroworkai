import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Clock, ExternalLink } from "lucide-react"
import SafeImage from "./safe-image"

interface AffiliateBannerProps {
  toolName: string
  offer: string
  affiliateUrl: string
  imageUrl?: string
}

export default function AffiliateBanner({ toolName, offer, affiliateUrl, imageUrl }: AffiliateBannerProps) {
  return (
    <div className="rounded-lg border border-green-200 bg-green-50 p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg bg-white p-2">
          <SafeImage src={imageUrl} alt={toolName} fill className="object-contain" />
        </div>
        <div className="flex-1 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
            <Clock className="h-4 w-4 text-green-600" />
            <span className="text-sm font-medium text-green-800">Oferta por tiempo limitado</span>
          </div>
          <h3 className="text-lg font-bold text-green-900">{offer}</h3>
          <p className="mt-1 text-sm text-green-700">Oferta exclusiva para lectores de NeuroWorkAI</p>
        </div>
        <Button asChild className="bg-green-600 hover:bg-green-700 whitespace-nowrap">
          <Link href={affiliateUrl} target="_blank" rel="noopener sponsored" className="inline-flex items-center gap-2">
            Aprovechar oferta
            <ExternalLink className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
