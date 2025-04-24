import type React from "react"
import { cn } from "@/lib/utils"

interface ToolRatingProps {
  label: string
  score: number
  icon?: React.ReactNode
}

export default function ToolRating({ label, score, icon }: ToolRatingProps) {
  // Determinar el color basado en la puntuación
  const getScoreColor = () => {
    if (score >= 9) return "bg-green-500"
    if (score >= 7.5) return "bg-green-400"
    if (score >= 6) return "bg-yellow-500"
    return "bg-red-500"
  }

  return (
    <div className="rounded-lg bg-gray-50 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {icon && <div className="mr-2 text-primary">{icon}</div>}
          <span className="text-sm font-medium text-gray-600">{label}</span>
        </div>
        <span className={cn("rounded-full px-2 py-1 text-sm font-bold text-white", getScoreColor())}>{score}</span>
      </div>
      <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-gray-200">
        <div className={cn("h-full rounded-full", getScoreColor())} style={{ width: `${score * 10}%` }}></div>
      </div>
    </div>
  )
}
