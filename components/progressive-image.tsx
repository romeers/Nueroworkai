"use client"

import type { ImageProps } from "next/image"
import { cn } from "@/lib/utils"

interface ProgressiveImageProps extends Omit<ImageProps, "src" | "onLoad"> {
  src: string | null | undefined
  fallbackSrc?: string
  lowQualitySrc?: string
  placeholderColor?: string
}

export default function ProgressiveImage({
  src,
  fallbackSrc = "/chromatic-whirl.png",
  lowQualitySrc,
  placeholderColor = "#f3f4f6", // gray-100
  alt,
  className,
  width,
  height,
  style,
  ...props
}: ProgressiveImageProps) {
  // Renderizamos un div vacío con las mismas dimensiones
  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{
        backgroundColor: placeholderColor,
        width: typeof width === "number" ? `${width}px` : width,
        height: typeof height === "number" ? `${height}px` : height,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...style,
      }}
      aria-label={`Placeholder para: ${alt}`}
      {...props}
    >
      <span className="text-xs text-gray-400">{alt || "Imagen"}</span>
    </div>
  )
}
