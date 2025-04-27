"use client"

import { useState, useEffect, useRef } from "react"
import Image, { type ImageProps } from "next/image"
import { cn } from "@/lib/optimization-utils"

interface OptimizedImageProps extends Omit<ImageProps, "onLoad"> {
  aspectRatio?: "16:9" | "4:3" | "1:1" | string
  previewSrc?: string
  previewQuality?: number
  fallbackSrc?: string
  containerClassName?: string
  blurAmount?: number
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
  fallbackSrc = "/placeholder.svg",
  containerClassName,
  blurAmount = 10,
  priority = false,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const [hasError, setHasError] = useState(false)
  const imgRef = useRef<HTMLDivElement>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)

  // Manejar carga de imagen
  const handleImageLoad = () => {
    setIsLoaded(true)
  }

  // Manejar error de imagen
  const handleImageError = () => {
    setHasError(true)
    console.warn(`Failed to load image: ${src}`)
  }

  // Configurar observer para lazy loading
  useEffect(() => {
    if (!imgRef.current || priority) {
      setIsInView(true)
      return
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true)
          observerRef.current?.disconnect()
        }
      },
      { rootMargin: "200px", threshold: 0.01 },
    )

    observerRef.current.observe(imgRef.current)

    return () => {
      observerRef.current?.disconnect()
    }
  }, [priority])

  // Calcular estilos de aspect ratio
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
      position: "relative" as const,
      paddingTop,
      overflow: "hidden",
    }
  }

  // Determinar la fuente de imagen a mostrar
  const imageSrc = hasError ? fallbackSrc : src || fallbackSrc

  return (
    <div
      ref={imgRef}
      className={cn("overflow-hidden bg-gray-100", containerClassName)}
      style={getAspectRatioStyles()}
      data-testid="optimized-image-container"
    >
      {/* Imagen de baja resolución (placeholder) */}
      {previewSrc && !isLoaded && !hasError && (
        <Image
          src={previewSrc || "/placeholder.svg"}
          alt=""
          fill={!(width && height)}
          width={width}
          height={height}
          className="object-cover blur-sm scale-105"
          style={{ filter: `blur(${blurAmount}px)` }}
          sizes={sizes}
          quality={previewQuality}
          aria-hidden="true"
          priority={false}
        />
      )}

      {/* Imagen principal */}
      {(isInView || priority) && (
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={alt}
          fill={!(width && height)}
          width={width}
          height={height}
          sizes={sizes}
          className={cn(
            "object-cover transition-opacity duration-300",
            isLoaded ? "opacity-100" : "opacity-0",
            className,
          )}
          onLoad={handleImageLoad}
          onError={handleImageError}
          priority={priority}
          {...props}
        />
      )}

      {/* Indicador de carga */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <span className="sr-only">Cargando imagen...</span>
          <div className="h-8 w-8 rounded-full border-2 border-primary border-t-transparent animate-spin"></div>
        </div>
      )}

      {/* Fallback para error */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-500 text-sm">
          <span>{alt || "Imagen no disponible"}</span>
        </div>
      )}
    </div>
  )
}
