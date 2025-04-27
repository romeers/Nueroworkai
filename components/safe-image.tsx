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
    // Pequeño retraso para mostrar el logo brevemente
    setTimeout(() => {
      setIsLoading(false)
      if (onLoad) onLoad()
    }, 300)
  }

  const generatePlaceholderAlt = () => {
    return `Imagen no disponible: ${alt}`
  }

  const isPlaceholder = hasError || !src || imgSrc === fallbackSrc

  return (
    <div className={cn("relative overflow-hidden", containerClassName)}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm">
          <div className="relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center">
            <Image
              src="/neuroworkai-logo.png"
              alt="NeuroworkAI Logo"
              width={120}
              height={120}
              className="object-contain animate-pulse"
              priority
            />
            <div className="absolute inset-0 border-4 border-gray-200 border-t-primary rounded-full animate-spin opacity-30"></div>
          </div>
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
