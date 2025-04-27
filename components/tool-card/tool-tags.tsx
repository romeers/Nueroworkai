import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import type { ToolTagsProps } from "./tool-card-types"

export function ToolTags({ tags, maxItems = 5, className }: ToolTagsProps) {
  // Limitar el número de etiquetas mostradas
  const displayedTags = tags.slice(0, maxItems)

  // Indicar si hay más etiquetas no mostradas
  const hasMoreTags = tags.length > maxItems

  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {displayedTags.map((tag) => (
        <Badge key={tag} variant="secondary" className="text-xs">
          {tag}
        </Badge>
      ))}

      {hasMoreTags && (
        <Badge variant="outline" className="text-xs">
          +{tags.length - maxItems} más
        </Badge>
      )}
    </div>
  )
}
