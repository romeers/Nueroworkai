"use client"

import { useState, useEffect, useRef } from "react"
import Image, { type ImageProps } from "next/image"
import { cn } from "@/lib/utils"

interface OptimizedImageProps extends Omit<ImageProps, "onLoad"> {
  aspectRatio?: "16:9" | "4:3" | "1:1" | string
  previewSrc?: string
  previewQuality?: number
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  aspectRatio,
  previewSrc,
  previewQuality = 10,
  priority = false,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const imgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!imgRef.current) return

    // Use Intersection Observer API for better performance
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { rootMargin: "200px", threshold: 0.01 }, // Start loading 200px before it comes into view
    )

    observer.observe(imgRef.current)

    return () => {
      observer.disconnect()
    }
  }, [])

  // Calculate aspect ratio styles
  const getAspectRatioStyles = () => {
    if (!aspectRatio) return {}

    let paddingTop = "56.25%" // Default 16:9

    if (aspectRatio === "4:3") {
      paddingTop = "75%"
    } else if (aspectRatio === "1:1") {
      paddingTop = "100%"
    } else if (aspectRatio.includes(":")) {
      const [width, height] = aspectRatio.split(":").map(Number)
      paddingTop = `${(height / width) * 100}%`
    }

    return {
      position: "relative",
      paddingTop,
      overflow: "hidden",
    }
  }

  return (
    <div ref={imgRef} className={cn("overflow-hidden bg-gray-100", className)} style={getAspectRatioStyles()}>
      {/* Preview image */}
      {previewSrc && !isLoaded && (
        <Image
          src={previewSrc || "/placeholder.svg"}
          alt=""
          fill
          sizes={sizes}
          className="object-cover blur-sm scale-105"
          quality={previewQuality}
          aria-hidden="true"
          priority={false}
        />
      )}

      {/* Main image */}
      {(isInView || priority) && (
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          fill={!width || !height}
          width={width}
          height={height}
          sizes={sizes}
          className={cn("object-cover transition-opacity duration-300", isLoaded ? "opacity-100" : "opacity-0")}
          onLoad={() => setIsLoaded(true)}
          priority={priority}
          {...props}
        />
      )}

      {/* Loading indicator */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <span className="sr-only">Cargando imagen...</span>
        </div>
      )}
    </div>
  )
}
