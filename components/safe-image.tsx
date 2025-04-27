"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface SafeImageProps {
  src: string | null | undefined
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  fallbackSrc?: string
  onLoad?: () => void
  onError?: () => void
  sizes?: string
  loading?: "eager" | "lazy"
  fill?: boolean
  quality?: number
  placeholder?: "blur" | "empty" | "data:image/..."
  blurDataURL?: string
}

export default function SafeImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  fallbackSrc = "/placeholder.svg",
  onLoad,
  onError,
  sizes,
  loading,
  fill = false,
  quality = 80,
  placeholder,
  blurDataURL,
  ...props
}: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState<string>(src || fallbackSrc)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  // Actualizar la fuente de la imagen cuando cambia la prop src
  useEffect(() => {
    if (src) {
      setImgSrc(src)
      setHasError(false)
    }
  }, [src])

  // Determinar si la imagen es decorativa
  const isDecorative = alt === "" || alt === " "

  // Manejar errores de carga de imagen
  const handleError = () => {
    if (imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc)
      setHasError(true)
      if (onError) onError()
    }
  }

  // Manejar carga exitosa de imagen
  const handleLoad = () => {
    setIsLoading(false)
    if (onLoad) onLoad()
  }

  // Generar un ID único para el aria-describedby
  const imageDescriptionId = `img-desc-${Math.random().toString(36).substring(2, 9)}`

  return (
    <>
      <div
        className={cn("relative overflow-hidden", isLoading && "animate-pulse bg-gray-200", className)}
        aria-busy={isLoading}
      >
        <Image
          src={imgSrc || "/placeholder.svg"}
          alt={alt}
          width={fill ? undefined : width || 800}
          height={fill ? undefined : height || 600}
          onError={handleError}
          onLoad={handleLoad}
          priority={priority}
          sizes={sizes}
          loading={loading || (priority ? "eager" : "lazy")}
          fill={fill}
          quality={quality}
          placeholder={placeholder}
          blurDataURL={blurDataURL}
          className={cn(
            "transition-opacity duration-300",
            isLoading ? "opacity-0" : "opacity-100",
            hasError && "grayscale",
          )}
          aria-describedby={!isDecorative ? imageDescriptionId : undefined}
          role={isDecorative ? "presentation" : undefined}
          {...props}
        />
      </div>

      {/* Descripción detallada para lectores de pantalla si la imagen no es decorativa */}
      {!isDecorative && alt && alt.length > 0 && (
        <span id={imageDescriptionId} className="sr-only">
          {alt}
        </span>
      )}
    </>
  )
}
