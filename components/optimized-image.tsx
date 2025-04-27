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
  const [isLoading, setIsLoading] = useState(true)
  const [imgSrc, setImgSrc] = useState<string>(src)
  const [imgType, setImgType] = useState<string | null>(null)

  // Detectar el tipo de imagen y convertir a WebP si es posible
  useEffect(() => {
    if (!src) return

    // Detectar el tipo de imagen original
    const extension = src.split(".").pop()?.toLowerCase()
    if (extension) {
      setImgType(extension)
    }

    // Si la imagen ya es WebP o AVIF, usarla directamente
    if (extension === "webp" || extension === "avif") {
      setImgSrc(src)
      return
    }

    // Si la imagen es JPG, PNG o GIF, intentar usar WebP
    if (["jpg", "jpeg", "png", "gif"].includes(extension || "")) {
      // Verificar si el navegador soporta WebP
      const webpSupported =
        typeof window !== "undefined" &&
        document.createElement("canvas").toDataURL("image/webp").indexOf("data:image/webp") === 0

      if (webpSupported) {
        // Si la URL es de Vercel Blob o similar, intentar usar parámetros de transformación
        if (src.includes("vercel-storage.com") || src.includes("v0.blob.com")) {
          setImgSrc(`${src}?format=webp&quality=${quality}`)
        } else if (src.startsWith("/")) {
          // Para imágenes locales, usar la optimización de Next.js
          setImgSrc(src)
        }
      }
    }
  }, [src, quality])

  // Manejar la carga de la imagen
  const handleLoad = () => {
    setIsLoading(false)
    if (onLoad) onLoad()
  }

  // Manejar errores de carga
  const handleError = () => {
    // Si falla la carga de WebP, volver a la imagen original
    if (imgSrc !== src) {
      setImgSrc(src)
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
        blurDataURL={blurDataURL}
      />

      {/* Mostrar formato de imagen en modo desarrollo */}
      {process.env.NODE_ENV === "development" && imgType && (
        <div className="absolute bottom-0 right-0 bg-black bg-opacity-50 text-white text-xs px-1 py-0.5">
          {imgType.toUpperCase()}
        </div>
      )}
    </div>
  )
}
