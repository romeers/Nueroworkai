"use client"

import Image, { type ImageProps } from "next/image"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface SafeImageProps extends Omit<ImageProps, "src" | "onLoad"> {
  src: string | null | undefined
  fallbackSrc?: string
  onLoad?: () => void
  showPlaceholder?: boolean
  placeholderClassName?: string
}

export default function SafeImage({
  src,
  fallbackSrc = "/chromatic-whirl.png",
  alt,
  onLoad,
  width,
  height,
  className,
  showPlaceholder = true,
  placeholderClassName,
  priority = false,
  ...props
}: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    // Actualizar el estado cuando cambia la prop src
    if (src && src !== "") {
      setImgSrc(src)
      setError(false)
      setIsLoading(true)
    } else if (fallbackSrc) {
      setImgSrc(fallbackSrc)
      setError(false)
      setIsLoading(true)
    } else {
      setImgSrc(null)
      setError(true)
      setIsLoading(false)
    }
  }, [src, fallbackSrc])

  const handleLoad = () => {
    setIsLoading(false)
    if (onLoad) onLoad()
  }

  const handleError = () => {
    setError(true)
    setIsLoading(false)
    if (fallbackSrc && imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc)
    } else {
      setImgSrc(null)
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
      <Image
        src={imgSrc || "/placeholder.svg"}
        alt={alt || ""}
        width={width}
        height={height}
        className={cn(className, isLoading ? "animate-pulse bg-gray-200" : "")}
        onLoad={handleLoad}
        onError={handleError}
        loading={priority ? undefined : "lazy"}
        priority={priority}
        {...props}
      />
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
