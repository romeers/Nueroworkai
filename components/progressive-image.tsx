"use client"

import { useState, useEffect } from "react"
import Image, { type ImageProps } from "next/image"
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
  ...props
}: ProgressiveImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [finalSrc, setFinalSrc] = useState(src && src !== "" ? src : fallbackSrc)

  useEffect(() => {
    setFinalSrc(src && src !== "" ? src : fallbackSrc)
  }, [src, fallbackSrc])

  // No renderizar nada si no hay una fuente válida
  if (!finalSrc || finalSrc === "") {
    return null
  }

  useEffect(() => {
    // Reset state if src changes
    setIsLoaded(false)
  }, [finalSrc])

  return (
    <div className="relative overflow-hidden" style={{ backgroundColor: placeholderColor }}>
      {/* Placeholder or low quality image */}
      {!isLoaded && lowQualitySrc && lowQualitySrc !== "" && (
        <Image
          src={lowQualitySrc || "/placeholder.svg"}
          alt={alt}
          className={cn("transition-opacity duration-300", className)}
          style={{ filter: "blur(10px)" }}
          {...props}
        />
      )}

      {/* Main image */}
      <Image
        src={finalSrc || "/placeholder.svg"}
        alt={alt}
        className={cn("transition-opacity duration-500", isLoaded ? "opacity-100" : "opacity-0", className)}
        onLoad={() => setIsLoaded(true)}
        {...props}
      />
    </div>
  )
}
