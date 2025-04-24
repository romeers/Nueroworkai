import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface VerifiedBadgeProps {
  verified: boolean
}

export default function VerifiedBadge({ verified }: VerifiedBadgeProps) {
  if (!verified) return null

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Badge className="bg-green-100 text-green-800 hover:bg-green-200 border-green-300 flex items-center gap-1">
            <CheckCircle className="h-3.5 w-3.5" />
            <span>Verificado</span>
          </Badge>
        </TooltipTrigger>
        <TooltipContent>
          <p className="text-xs">Esta herramienta ha sido probada y verificada por nuestro equipo de expertos</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
