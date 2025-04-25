"use client"

import Image, { type ImageProps } from "next/image"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface SafeImageProps extends Omit<ImageProps, "src" | "onError" | "onLoad"> {
  src: string | null | undefined
  fallbackSrc?: string
  lowQualitySrc?: string
  placeholderColor?: string
  onLoad?: () => void
  onError?: () => void
  aspectRatio?: "square" | "video" | "wide" | "auto"
}

export default function SafeImage({
  src,
  fallbackSrc = "/placeholder.svg",
  lowQualitySrc,
  placeholderColor = "#f3f4f6", // gray-100
  alt,
  className,
  width,
  height,
  style,
  onLoad,
  onError,
  aspectRatio = "auto",
  ...props
}: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState<string>(lowQualitySrc || placeholderColor)
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  // Set aspect ratio classes
  const aspectRatioClasses = {
    square: "aspect-square",
    video: "aspect-video",
    wide: "aspect-[21/9]",
    auto: "",
  }

  // Handle src changes
  useEffect(() => {
    if (src) {
      setImgSrc(src)
      setHasError(false)
    } else if (fallbackSrc) {
      setImgSrc(fallbackSrc)
      setHasError(false)
    } else {
      setHasError(true)
    }
  }, [src, fallbackSrc])

  // Handle image load
  const handleLoad = () => {
    setIsLoaded(true)
    if (onLoad) onLoad()
  }

  // Handle image error
  const handleError = () => {
    setHasError(true)
    if (fallbackSrc && imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc)
    }
    if (onError) onError()
  }

  // If no valid src, render placeholder
  if (hasError && !fallbackSrc) {
    return (
      <div
        className={cn(
          "flex items-center justify-center bg-gray-100",
          aspectRatio !== "auto" && aspectRatioClasses[aspectRatio],
          className,
        )}
        style={{
          width: typeof width === "number" ? `${width}px` : width,
          height: typeof height === "number" ? `${height}px` : height,
          ...style,
        }}
        aria-label={`Placeholder para: ${alt}`}
        role="img"
      >
        <span className="text-xs text-gray-400">{alt || "Image"}</span>
      </div>
    )
  }

  return (
    <div
      className={cn("overflow-hidden relative", aspectRatio !== "auto" && aspectRatioClasses[aspectRatio], className)}
      style={style}
    >
      <Image
        src={imgSrc || "/placeholder.svg"}
        alt={alt || ""}
        width={width}
        height={height}
        onLoad={handleLoad}
        onError={handleError}
        className={cn("transition-opacity duration-300", isLoaded ? "opacity-100" : "opacity-0")}
        {...props}
      />

      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100" aria-hidden="true">
          <span className="text-xs text-gray-400">{alt || "Loading..."}</span>
        </div>
      )}
    </div>
  )
}
