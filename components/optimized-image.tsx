"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  containerClassName?: string
  priority?: boolean
  quality?: number
  sizes?: string
  fill?: boolean
  loading?: "eager" | "lazy"
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down"
  objectPosition?: string
  placeholder?: "blur" | "empty" | "data:image/..."
  blurDataURL?: string
  onLoad?: () => void
  onError?: () => void
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  containerClassName,
  priority = false,
  quality = 80,
  sizes,
  fill = false,
  loading,
  objectFit = "cover",
  objectPosition = "center",
  placeholder,
  blurDataURL,
  onLoad,
  onError,
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(!priority)
  const [imgSrc, setImgSrc] = useState<string>(src)
  const [error, setError] = useState<boolean>(false)

  // Generar un placeholder blur si no se proporciona
  const defaultBlurDataURL =
    !blurDataURL && placeholder === "blur"
      ? `data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${width || 100} ${height || 100}'%3E%3Cfilter id='b' colorInterpolationFilters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' fill='%23f3f4f6'/%3E%3C/svg%3E`
      : blurDataURL

  // Manejar cambios en src
  useEffect(() => {
    if (src !== imgSrc && !error) {
      setImgSrc(src)
      if (!priority) setIsLoading(true)
    }
  }, [src, imgSrc, error, priority])

  // Manejar la carga de la imagen
  const handleLoad = () => {
    setIsLoading(false)
    if (onLoad) onLoad()
  }

  // Manejar errores de carga
  const handleError = () => {
    setError(true)
    setIsLoading(false)

    // Si la imagen no es un placeholder, intentar cargar un placeholder
    if (!imgSrc.includes("placeholder") && !imgSrc.includes("data:image")) {
      setImgSrc("/placeholder.svg")
    }

    if (onError) onError()
  }

  // Generar tamaños responsivos si no se proporcionan
  const defaultSizes = !sizes && !fill ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" : sizes

  return (
    <div
      className={cn("relative overflow-hidden", isLoading && "bg-gray-100 animate-pulse", containerClassName)}
      style={{
        width: fill ? "100%" : "auto",
        height: fill ? "100%" : "auto",
      }}
    >
      <Image
        src={imgSrc || "/placeholder.svg"}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        className={cn(
          "transition-opacity duration-300",
          isLoading ? "opacity-0" : "opacity-100",
          objectFit === "contain" && "object-contain",
          objectFit === "cover" && "object-cover",
          objectFit === "fill" && "object-fill",
          objectFit === "none" && "object-none",
          objectFit === "scale-down" && "object-scale-down",
          className,
        )}
        style={{ objectPosition }}
        quality={quality}
        priority={priority}
        loading={loading || (priority ? "eager" : "lazy")}
        onLoad={handleLoad}
        onError={handleError}
        sizes={defaultSizes}
        fill={fill}
        placeholder={placeholder}
        blurDataURL={defaultBlurDataURL}
      />
    </div>
  )
}
