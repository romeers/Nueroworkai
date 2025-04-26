"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image, { type ImageProps } from "next/image"
import { cn } from "@/lib/utils"

interface SafeImageProps extends Omit<ImageProps, "src" | "alt"> {
  src: string | null | undefined
  alt: string
  fallbackSrc?: string
  fallback?: React.ReactNode
  onLoad?: () => void
  onError?: () => void
}

export default function SafeImage({
  src,
  alt,
  fallbackSrc = "/placeholder.svg",
  fallback,
  className,
  onLoad,
  onError,
  ...props
}: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState<string | null | undefined>(src)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  // Reset states when src changes
  useEffect(() => {
    setImgSrc(src)
    setIsLoading(true)
    setHasError(false)
  }, [src])

  // Handle image load
  const handleLoad = () => {
    setIsLoading(false)
    onLoad?.()
  }

  // Handle image error
  const handleError = () => {
    setHasError(true)
    setImgSrc(fallbackSrc)
    onError?.()
  }

  // If custom fallback is provided and there's an error, render it
  if (hasError && fallback) {
    return <>{fallback}</>
  }

  return (
    <div className={cn("relative", className)}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 animate-pulse">
          <span className="sr-only">Cargando imagen...</span>
        </div>
      )}

      {imgSrc ? (
        <Image
          src={imgSrc || "/placeholder.svg"}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          className={cn("transition-opacity duration-300", isLoading ? "opacity-0" : "opacity-100", className)}
          {...props}
        />
      ) : (
        <Image src={fallbackSrc || "/placeholder.svg"} alt={alt} className={className} {...props} />
      )}
    </div>
  )
}
