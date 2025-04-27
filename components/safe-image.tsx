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
  const [imgSrc, setImgSrc] = useState<string>(src || fallbackSrc || "/placeholder.svg")
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  // Actualizar la fuente de la imagen cuando cambia la prop src
  useEffect(() => {
    if (src) {
      setImgSrc(src)
      setHasError(false)
    }
  }, [src])

  // Manejar error de carga de imagen
  const handleError = () => {
    if (imgSrc !== fallbackSrc) {
      console.warn(`Error al cargar la imagen: ${imgSrc}, usando fallback`)
      setImgSrc(fallbackSrc)
      setHasError(true)
    }
  }

  // Manejar carga exitosa de imagen
  const handleLoad = () => {
    setIsLoaded(true)
    onLoad?.()
  }

  // Generar texto alternativo para placeholder
  const generatePlaceholderAlt = () => {
    if (alt && alt !== "undefined" && alt !== "null") {
      return `Imagen de ${alt}`
    }
    return "Imagen no disponible"
  }

  // Determinar si es un placeholder
  const isPlaceholder = hasError || !src || imgSrc === fallbackSrc

  return (
    <div className={cn("relative overflow-hidden", containerClassName)}>
      <Image
        src={imgSrc || "/placeholder.svg"}
        alt={isPlaceholder ? generatePlaceholderAlt() : alt}
        width={width}
        height={height}
        className={cn("transition-opacity duration-300", isLoaded ? "opacity-100" : "opacity-0", className)}
        onError={handleError}
        onLoad={handleLoad}
        {...props}
      />

      {!isLoaded && (
        <div
          className="absolute inset-0 bg-gray-100 animate-pulse"
          aria-hidden="true"
          style={{
            backgroundImage: "url(/placeholder.svg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      )}
    </div>
  )
}
