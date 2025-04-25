"use client"

import Image, { type ImageProps } from "next/image"
import { useState, useEffect } from "react"
import { validateImageSrc, generatePlaceholderUrl } from "@/utils/image-utils"

interface SafeImageProps extends Omit<ImageProps, "src" | "alt"> {
  src: string | null | undefined
  alt: string
  fallbackSrc?: string
  className?: string
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down"
}

export default function SafeImage({
  src,
  alt,
  fallbackSrc = "/abstract-brain-network.png",
  width,
  height,
  className = "",
  objectFit = "cover",
  ...props
}: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    // Validate and normalize the image source
    const validatedSrc = validateImageSrc(src, fallbackSrc)
    setImgSrc(validatedSrc)
    setIsLoading(true)
    setError(false)
  }, [src, fallbackSrc])

  // Generate a descriptive placeholder if no image is available
  const placeholderSrc = generatePlaceholderUrl(
    alt,
    typeof width === "number" ? width : 300,
    typeof height === "number" ? height : 200,
  )

  // Handle image load error
  const handleError = () => {
    setError(true)
    setImgSrc(fallbackSrc || placeholderSrc)
  }

  // Handle image load success
  const handleLoad = () => {
    setIsLoading(false)
  }

  return (
    <div className={`relative ${className}`} style={{ overflow: "hidden" }}>
      {imgSrc ? (
        <Image
          src={imgSrc || "/placeholder.svg"}
          alt={alt}
          width={width}
          height={height}
          onError={handleError}
          onLoad={handleLoad}
          className={`transition-opacity duration-300 ${isLoading ? "opacity-0" : "opacity-100"} ${
            objectFit === "cover"
              ? "object-cover"
              : objectFit === "contain"
                ? "object-contain"
                : objectFit === "fill"
                  ? "object-fill"
                  : objectFit === "none"
                    ? "object-none"
                    : "object-scale-down"
          }`}
          {...props}
        />
      ) : (
        <Image
          src={placeholderSrc || "/placeholder.svg"}
          alt={alt}
          width={width}
          height={height}
          className={`${
            objectFit === "cover"
              ? "object-cover"
              : objectFit === "contain"
                ? "object-contain"
                : objectFit === "fill"
                  ? "object-fill"
                  : objectFit === "none"
                    ? "object-none"
                    : "object-scale-down"
          }`}
          {...props}
        />
      )}

      {/* Loading indicator */}
      {isLoading && !error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-50">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
        </div>
      )}

      {/* Structured data for the image */}
      {!isLoading && !error && imgSrc && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ImageObject",
              contentUrl: imgSrc.startsWith("http") ? imgSrc : `https://neuroworkai.com${imgSrc}`,
              description: alt,
              name: alt,
            }),
          }}
        />
      )}
    </div>
  )
}
