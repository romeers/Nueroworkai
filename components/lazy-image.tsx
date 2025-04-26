"use client"

import { useState, useEffect, useRef } from "react"
import Image, { type ImageProps } from "next/image"
import { cn } from "@/lib/utils"

interface LazyImageProps extends Omit<ImageProps, "onLoad"> {
  lowQualitySrc?: string
  placeholderColor?: string
  transitionDuration?: number
  blurAmount?: number
}

export default function LazyImage({
  src,
  alt,
  lowQualitySrc,
  placeholderColor = "#f3f4f6",
  className,
  transitionDuration = 300, // Reduced from 500 for faster perception
  blurAmount = 10,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  quality = 80,
  ...props
}: LazyImageProps) {
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

  return (
    <div
      ref={imgRef}
      className={cn("relative overflow-hidden", className)}
      style={{
        backgroundColor: placeholderColor,
      }}
    >
      {/* Low quality placeholder */}
      {lowQualitySrc && !isLoaded && (
        <Image
          src={lowQualitySrc || "/placeholder.svg"}
          alt=""
          fill
          sizes={sizes}
          className="object-cover"
          style={{
            filter: `blur(${blurAmount}px)`,
            transform: "scale(1.1)",
          }}
          aria-hidden="true"
          priority={false}
          quality={20} // Lower quality for placeholder
        />
      )}

      {/* Main image */}
      {isInView && (
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          fill
          sizes={sizes}
          quality={quality}
          {...props}
          className={cn("object-cover transition-opacity", isLoaded ? "opacity-100" : "opacity-0", props.className)}
          style={{
            ...props.style,
            transitionDuration: `${transitionDuration}ms`,
          }}
          onLoad={() => setIsLoaded(true)}
          fetchPriority={props.priority ? "high" : "auto"}
        />
      )}

      {/* Fallback for no JavaScript or while loading */}
      {!isInView && !lowQualitySrc && (
        <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
          <span className="text-xs text-gray-400">{alt}</span>
        </div>
      )}
    </div>
  )
}
