"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
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
  loading = "lazy",
  quality = 80,
  sizes,
  ...props
}: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState<string | null | undefined>(src)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const imageRef = useRef<HTMLImageElement>(null)

  // Default sizes if not provided
  const defaultSizes = sizes || "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"

  // Reset states when src changes
  useEffect(() => {
    setImgSrc(src)
    setIsLoading(true)
    setHasError(false)
  }, [src])

  // Handle image load with performance tracking
  const handleLoad = () => {
    setIsLoading(false)
    // Report successful load to performance metrics if available
    if (window.performance && window.performance.mark) {
      window.performance.mark(`image-loaded-${alt.replace(/\s+/g, "-")}`)
    }
    onLoad?.()
  }

  // Handle image error with improved fallback strategy
  const handleError = () => {
    setHasError(true)
    setImgSrc(fallbackSrc)
    console.warn(`Image failed to load: ${src}. Using fallback.`)
    // Try to preload the fallback to ensure it's available
    if (fallbackSrc && typeof window !== "undefined") {
      const preloadLink = document.createElement("link")
      preloadLink.rel = "preload"
      preloadLink.as = "image"
      preloadLink.href = fallbackSrc
      document.head.appendChild(preloadLink)
    }
    onError?.()
  }

  // Use Intersection Observer for lazy loading
  useEffect(() => {
    if (!imageRef.current || loading !== "lazy") return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsLoading(false)
            observer.disconnect()
          }
        })
      },
      { rootMargin: "200px" },
    )

    observer.observe(imageRef.current)

    return () => {
      observer.disconnect()
    }
  }, [loading])

  // If custom fallback is provided and there's an error, render it
  if (hasError && fallback) {
    return <>{fallback}</>
  }

  return (
    <div className={cn("relative", className)} ref={imageRef}>
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
          loading={loading}
          quality={quality}
          sizes={defaultSizes}
          className={cn("transition-opacity duration-300", isLoading ? "opacity-0" : "opacity-100", className)}
          {...props}
        />
      ) : (
        <Image
          src={fallbackSrc || "/placeholder.svg"}
          alt={alt}
          className={className}
          loading={loading}
          quality={quality}
          sizes={defaultSizes}
          {...props}
        />
      )}
    </div>
  )
}
