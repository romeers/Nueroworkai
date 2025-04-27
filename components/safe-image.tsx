"use client"

import { useState, useEffect } from "react"
import Image, { type ImageProps } from "next/image"
import { cn } from "@/lib/optimization-utils"

interface SafeImageProps extends Omit<ImageProps, "src" | "onError"> {
  src: string | null | undefined
  fallbackSrc?: string
  containerClassName?: string
  onLoad?: () => void
}

export default function SafeImage({
  src,
  alt,
  fallbackSrc = "/placeholder.svg",
  width,
  height,
  className,
  containerClassName,
  onLoad,
  ...props
}: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState<string | null>(src || null)
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setImgSrc(src || null)
    setHasError(false)
    setIsLoading(true)
  }, [src])

  const handleError = () => {
    if (imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc)
    }
    setHasError(true)
    console.warn(`Image load error for: ${src}`)
  }

  const handleLoad = () => {
    setIsLoading(false)
  }

  const generatePlaceholderAlt = () => {
    return `Imagen no disponible: ${alt}`
  }

  const isPlaceholder = hasError || !src || imgSrc === fallbackSrc

  return (
    <div className={cn("relative overflow-hidden", containerClassName)}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <Image
        src={imgSrc || "/placeholder.svg"}
        alt={isPlaceholder ? generatePlaceholderAlt() : alt}
        width={width}
        height={height}
        className={cn("transition-opacity duration-300", props.className, isLoading ? "opacity-0" : "opacity-100")}
        onError={handleError}
        onLoad={handleLoad}
        {...props}
      />
    </div>
  )
}
