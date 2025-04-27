import { CheckCircle } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function ToolVerifiedBadge() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <span className="inline-flex">
            <CheckCircle className="h-4 w-4 text-blue-500" />
          </span>
        </TooltipTrigger>
        <TooltipContent>
          <p className="text-xs">Herramienta verificada por NeuroWorkAI</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
