"use client"

import { useState, useEffect, useRef } from "react"
import Image, { type ImageProps } from "next/image"
import { cn } from "@/lib/utils"

interface ProgressiveImageProps extends Omit<ImageProps, "src" | "onLoad"> {
  src: string | null | undefined
  lowResSrc?: string
  placeholderColor?: string
  onLoad?: () => void
  transitionDuration?: number
  containerClassName?: string
}

export default function ProgressiveImage({
  src,
  lowResSrc,
  alt,
  width,
  height,
  className,
  placeholderColor = "#f3f4f6", // gray-100
  onLoad,
  transitionDuration = 500,
  containerClassName,
  priority = false,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  ...props
}: ProgressiveImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentSrc, setCurrentSrc] = useState(lowResSrc || null)
  const [error, setError] = useState(false)
  const imageRef = useRef<HTMLImageElement>(null)
  const observer = useRef<IntersectionObserver | null>(null)

  // Handle image loading
  const handleImageLoaded = () => {
    setIsLoaded(true)
    onLoad?.()
  }

  // Handle image error
  const handleImageError = () => {
    setError(true)
    console.warn(`Failed to load image: ${src}`)
  }

  // Set up intersection observer for lazy loading
  useEffect(() => {
    if (!src || priority) return

    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setCurrentSrc(src)
          observer.current?.disconnect()
        }
      },
      {
        rootMargin: "200px", // Start loading when image is 200px from viewport
        threshold: 0.01,
      },
    )

    if (imageRef.current) {
      observer.current.observe(imageRef.current)
    }

    return () => {
      observer.current?.disconnect()
    }
  }, [src, priority])

  // Set src immediately if priority is true
  useEffect(() => {
    if (priority && src) {
      setCurrentSrc(src)
    }
  }, [priority, src])

  // Generate placeholder styles
  const placeholderStyle = {
    backgroundColor: placeholderColor,
    transition: `opacity ${transitionDuration}ms ease-in-out`,
  }

  return (
    <div
      ref={imageRef}
      className={cn("relative overflow-hidden", containerClassName)}
      style={{
        width: typeof width === "number" ? `${width}px` : width,
        height: typeof height === "number" ? `${height}px` : height,
      }}
    >
      {/* Placeholder */}
      <div
        className={cn("absolute inset-0", isLoaded ? "opacity-0" : "opacity-100")}
        style={placeholderStyle}
        aria-hidden="true"
      />

      {/* Low resolution image */}
      {lowResSrc && !isLoaded && !error && (
        <Image
          src={lowResSrc || "/placeholder.svg"}
          alt=""
          fill={!(width && height)}
          width={width}
          height={height}
          className="object-cover blur-sm scale-105"
          sizes={sizes}
          quality={20}
          priority={false}
          aria-hidden="true"
        />
      )}

      {/* Main image */}
      {currentSrc && !error && (
        <Image
          src={currentSrc || "/placeholder.svg"}
          alt={alt}
          fill={!(width && height)}
          width={width}
          height={height}
          className={cn(className, "transition-opacity duration-500", isLoaded ? "opacity-100" : "opacity-0")}
          sizes={sizes}
          quality={90}
          priority={priority}
          onLoad={handleImageLoaded}
          onError={handleImageError}
          {...props}
        />
      )}

      {/* Error fallback */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-500 text-sm">
          <span>{alt || "Image not available"}</span>
        </div>
      )}
    </div>
  )
}
