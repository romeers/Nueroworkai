import { Star, StarHalf } from "lucide-react"
import { cn } from "@/lib/utils"
import type { ToolRatingProps } from "./tool-card-types"

export function ToolRating({ score, showLabel = true, size = "md", className }: ToolRatingProps) {
  // Redondear a 1 decimal
  const roundedScore = Math.round(score * 10) / 10

  // Determinar el color basado en la puntuación
  const getScoreColor = () => {
    if (roundedScore >= 9) return "text-green-600"
    if (roundedScore >= 7) return "text-green-500"
    if (roundedScore >= 5) return "text-yellow-500"
    return "text-red-500"
  }

  // Determinar el tamaño de los iconos
  const getIconSize = () => {
    switch (size) {
      case "sm":
        return "h-3 w-3"
      case "lg":
        return "h-5 w-5"
      default:
        return "h-4 w-4"
    }
  }

  // Determinar el tamaño del texto
  const getTextSize = () => {
    switch (size) {
      case "sm":
        return "text-xs"
      case "lg":
        return "text-lg font-bold"
      default:
        return "text-sm font-medium"
    }
  }

  // Generar estrellas basadas en la puntuación
  const renderStars = () => {
    const stars = []
    const fullStars = Math.floor(roundedScore / 2)
    const hasHalfStar = roundedScore % 2 >= 0.5

    // Estrellas completas
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className={`${getIconSize()} fill-current`} />)
    }

    // Media estrella si es necesario
    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" className={`${getIconSize()} fill-current`} />)
    }

    // Estrellas vacías
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-star-${i}`} className={`${getIconSize()} text-gray-300`} />)
    }

    return stars
  }

  return (
    <div className={cn("flex items-center gap-1", getScoreColor(), className)}>
      {renderStars()}

      {showLabel && <span className={cn("ml-1", getTextSize())}>{roundedScore.toFixed(1)}</span>}
    </div>
  )
}
