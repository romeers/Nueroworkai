"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import SafeImage from "./safe-image"

interface ProgressiveImageLoaderProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  containerClassName?: string
  lowQualitySrc?: string
  priority?: boolean
}

export default function ProgressiveImageLoader({
  src,
  alt,
  width,
  height,
  className,
  containerClassName,
  lowQualitySrc,
  priority = false,
}: ProgressiveImageLoaderProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isError, setIsError] = useState(false)

  // Generar una versión de baja calidad si no se proporciona
  const defaultLowQualitySrc =
    lowQualitySrc || `/placeholder.svg?height=${height || 100}&width=${width || 100}&query=${encodeURIComponent(alt)}`

  // Determinar si estamos en un dispositivo móvil para optimizar la carga
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Optimizar la URL de la imagen para móviles si es posible
  const optimizedSrc =
    isMobile && src.includes(".png") && !src.includes("?")
      ? `${src}?quality=80&width=${Math.min(width || 800, 500)}`
      : src

  return (
    <div className={cn("relative overflow-hidden", containerClassName)}>
      {/* Imagen de baja calidad (blur-up) */}
      {!isLoaded && !isError && (
        <SafeImage
          src={defaultLowQualitySrc}
          alt={alt}
          width={width}
          height={height}
          className={cn("transition-opacity duration-300", className)}
          style={{ filter: "blur(10px)" }}
        />
      )}

      {/* Imagen principal */}
      <SafeImage
        src={isError ? defaultLowQualitySrc : optimizedSrc}
        alt={alt}
        width={width}
        height={height}
        className={cn("transition-opacity duration-500", isLoaded ? "opacity-100" : "opacity-0", className)}
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          console.error(`Error loading image: ${src}`)
          setIsError(true)
          setIsLoaded(true) // Mostrar la imagen de baja calidad
        }}
        priority={priority}
        loading={priority ? "eager" : "lazy"}
      />
    </div>
  )
}
