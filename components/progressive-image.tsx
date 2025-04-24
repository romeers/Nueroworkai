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
  const [imgSrc, setImgSrc] = useState(lowQualitySrc || placeholderColor)
  const [isLoaded, setIsLoaded] = useState(false)

  // Si src es null, undefined o cadena vacía, usar la imagen de respaldo
  const finalSrc = !src || src === "" ? fallbackSrc : src

  useEffect(() => {
    // Reset state if src changes
    setIsLoaded(false)
    setImgSrc(lowQualitySrc || placeholderColor)
  }, [finalSrc, lowQualitySrc, placeholderColor])

  return (
    <div className="relative overflow-hidden" style={{ backgroundColor: placeholderColor }}>
      {/* Placeholder or low quality image */}
      {!isLoaded && lowQualitySrc && (
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
