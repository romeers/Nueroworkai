import { Tag } from "lucide-react"
import { cn } from "@/lib/utils"
import type { ToolSpecialOfferProps } from "./tool-card-types"

export function ToolSpecialOffer({ offer, className }: ToolSpecialOfferProps) {
  return (
    <div className={cn("flex items-center gap-2 p-2 bg-blue-50 text-blue-700 rounded-md text-sm", className)}>
      <Tag className="h-4 w-4" />
      <span>{offer}</span>
    </div>
  )
}
