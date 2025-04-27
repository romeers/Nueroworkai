import { Check } from "lucide-react"
import { cn } from "@/lib/utils"
import type { ToolFeaturesProps } from "./tool-card-types"

export function ToolFeatures({ features, maxItems = 3, className }: ToolFeaturesProps) {
  // Limitar el número de características mostradas
  const displayedFeatures = features.slice(0, maxItems)

  // Indicar si hay más características no mostradas
  const hasMoreFeatures = features.length > maxItems

  return (
    <div className={cn("space-y-2", className)}>
      <h4 className="text-sm font-medium">Características destacadas:</h4>

      <ul className="space-y-1">
        {displayedFeatures.map((feature, index) => (
          <li key={`feature-${index}`} className="flex items-start gap-2 text-sm">
            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
            <span>{feature.name}</span>
          </li>
        ))}

        {hasMoreFeatures && (
          <li className="text-sm text-gray-500 italic pl-6">Y {features.length - maxItems} características más...</li>
        )}
      </ul>
    </div>
  )
}
