import { cn } from "@/lib/utils"
import SafeImage from "@/components/safe-image"
import type { ToolImageProps } from "./tool-card-types"

export function ToolImage({ src, alt, size = "md", className }: ToolImageProps) {
  // Determinar dimensiones basadas en el tamaño
  const getDimensions = () => {
    switch (size) {
      case "sm":
        return { width: 40, height: 40 }
      case "lg":
        return { width: 80, height: 80 }
      default:
        return { width: 60, height: 60 }
    }
  }

  const { width, height } = getDimensions()

  return (
    <div
      className={cn(
        "overflow-hidden rounded-md bg-white p-1 border border-gray-100",
        {
          "w-10 h-10": size === "sm",
          "w-15 h-15": size === "md",
          "w-20 h-20": size === "lg",
        },
        className,
      )}
    >
      <SafeImage src={src} alt={alt} width={width} height={height} className="w-full h-full object-contain" />
    </div>
  )
}
