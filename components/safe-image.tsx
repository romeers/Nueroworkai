"use client"

import type React from "react"

import Image from "next/image"
import { getOptimizedImageUrl, shouldPrioritizeImage } from "@/utils/performance-optimizations"
import type { ImageProps } from "next/image"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

interface SafeImageProps extends Omit<ImageProps, "src" | "onLoad" | "alt"> {
  src: string | null | undefined
  fallbackSrc?: string
  onLoad?: () => void
  showPlaceholder?: boolean
  placeholderClassName?: string
  priority?: boolean
  alt: string
  fallback?: React.ReactNode
}

export default function SafeImage({
  src,
  fallbackSrc = "/chromatic-whirl.png", // Proporcionar un valor por defecto
  alt,
  width,
  height,
  className,
  showPlaceholder = true,
  placeholderClassName,
  priority = false,
  fallback,
  ...props
}: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)
  const pathname = usePathname()

  // Determinar si la imagen debe cargarse con prioridad
  const shouldPrioritize = priority || (src && shouldPrioritizeImage(src, pathname))

  useEffect(() => {
    // Actualizar el estado cuando cambia la prop src
    if (src && src !== "") {
      setImgSrc(getOptimizedImageUrl(src, typeof width === "number" ? width : 800))
      setError(false)
      setIsLoading(true)
    } else if (fallbackSrc) {
      setImgSrc(getOptimizedImageUrl(fallbackSrc, typeof width === "number" ? width : 800))
      setError(false)
      setIsLoading(true)
    } else {
      setImgSrc(getOptimizedImageUrl("/placeholder.svg", typeof width === "number" ? width : 800))
      setError(true)
      setIsLoading(false)
    }
  }, [src, fallbackSrc, width])

  const handleLoad = () => {
    setIsLoading(false)
    if (props.onLoad) props.onLoad()
  }

  const handleError = () => {
    setError(true)
    setIsLoading(false)
    if (fallbackSrc && imgSrc !== getOptimizedImageUrl(fallbackSrc, typeof width === "number" ? width : 800)) {
      setImgSrc(getOptimizedImageUrl(fallbackSrc, typeof width === "number" ? width : 800))
    } else {
      setImgSrc(getOptimizedImageUrl("/placeholder.svg", typeof width === "number" ? width : 800))
    }
  }

  // Si no hay una fuente válida (ni src ni fallback)
  if (!imgSrc) {
    return showPlaceholder ? (
      <div
        className={cn("flex items-center justify-center bg-gray-100 text-gray-400", className, placeholderClassName)}
        style={{
          width: typeof width === "number" ? `${width}px` : width,
          height: typeof height === "number" ? `${height}px` : height,
          ...props.style,
        }}
        role="img"
        aria-label={`Placeholder para: ${alt || "imagen"}`}
      >
        <span className="text-xs">{alt || "Imagen"}</span>
      </div>
    ) : null
  }

  // Asegurarse de que nunca se pase una cadena vacía a Image
  return (
    <>
      {error ? (
        fallback ? (
          fallback
        ) : (
          <div
            className={cn(
              "flex items-center justify-center bg-gray-100 text-gray-400",
              className,
              placeholderClassName,
            )}
            style={{
              width: typeof width === "number" ? `${width}px` : width,
              height: typeof height === "number" ? `${height}px` : height,
              ...props.style,
            }}
            role="img"
            aria-label={`Placeholder para: ${alt || "imagen"}`}
          >
            <span className="text-xs">{alt || "Imagen no disponible"}</span>
          </div>
        )
      ) : (
        <Image
          src={imgSrc || "/placeholder.svg"}
          alt={alt || ""}
          width={width}
          height={height}
          className={cn(className, isLoading ? "animate-pulse bg-gray-200" : "")}
          onLoad={handleLoad}
          onError={handleError}
          loading={shouldPrioritize ? undefined : "lazy"}
          priority={shouldPrioritize}
          {...props}
        />
      )}
      {isLoading && showPlaceholder && (
        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400",
            placeholderClassName,
          )}
          aria-hidden="true"
        >
          <span className="text-xs">{alt || "Cargando..."}</span>
        </div>
      )}
    </>
  )
}
