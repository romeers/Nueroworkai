import Image from "next/image"
import { cn } from "@/lib/utils"

interface LogoProps {
  variant?: "default" | "white" | "icon"
  width?: number
  height?: number
  className?: string
  priority?: boolean
}

export function Logo({ variant = "default", width = 120, height = 40, className, priority = false }: LogoProps) {
  let src = "/neuroworkai-logo-text.png"

  if (variant === "white") {
    src = "/neuroworkai-logo-text.png" // Using the same logo for now since it's already white/light colored
  } else if (variant === "icon") {
    src = "/neuroworkai-logo-icon.png"
  }

  return (
    <Image
      src={src || "/placeholder.svg"}
      alt="NeuroWorkAI Logo"
      width={width}
      height={height}
      className={cn("h-auto", className)}
      priority={priority}
    />
  )
}
