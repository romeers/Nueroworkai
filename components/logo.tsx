import Image from "next/image"
import { cn } from "@/lib/utils"

interface LogoProps {
  variant?: "default" | "white"
  width?: number
  height?: number
  className?: string
  priority?: boolean
}

export function Logo({ variant = "default", width = 120, height = 40, className, priority = false }: LogoProps) {
  const src =
    variant === "white"
      ? "/logo-texto-transparente.png" // We're using the same logo for now, but you could create a white version
      : "/logo-texto-transparente.png"

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
