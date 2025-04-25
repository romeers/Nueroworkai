import { cn } from "@/lib/utils"
import SafeImage from "@/components/safe-image"
import { Badge } from "@/components/ui/badge"

export interface CardImageProps {
  src: string
  alt: string
  className?: string
  aspectRatio?: "square" | "video" | "wide" | "auto"
  fill?: boolean
  badges?: {
    text: string
    variant?: "default" | "outline" | "secondary" | "primary"
    className?: string
    position?: "top-left" | "top-right" | "bottom-left" | "bottom-right"
  }[]
}

export function CardImage({ src, alt, className, aspectRatio = "video", fill = true, badges = [] }: CardImageProps) {
  const aspectRatioClasses = {
    square: "aspect-square",
    video: "aspect-video",
    wide: "aspect-[21/9]",
    auto: "",
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-gray-100",
        aspectRatio !== "auto" && aspectRatioClasses[aspectRatio],
        className,
      )}
    >
      <SafeImage
        src={src}
        alt={alt}
        fill={fill}
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />

      {badges.map((badge, index) => {
        const positionClasses = {
          "top-left": "top-2 left-2",
          "top-right": "top-2 right-2",
          "bottom-left": "bottom-2 left-2",
          "bottom-right": "bottom-2 right-2",
        }

        return (
          <div key={index} className={cn("absolute", positionClasses[badge.position || "top-left"])}>
            <Badge variant={badge.variant || "default"} className={badge.className}>
              {badge.text}
            </Badge>
          </div>
        )
      })}
    </div>
  )
}
