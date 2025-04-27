"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Loader } from "lucide-react"

interface OptimizedImageDisplayProps {
  src: string
  alt: string
  width?: number
  height?: number
  priority?: boolean
  className?: string
  fallbackSrc?: string
  blurDataUrl?: string
}

export function OptimizedImageDisplay({
  src,
  alt,
  width,
  height,
  priority = false,
  className = "",
  fallbackSrc = "/placeholder.svg",
  blurDataUrl,
}: OptimizedImageDisplayProps) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [imageSrc, setImageSrc] = useState(src)

  useEffect(() => {
    setImageSrc(src)
    setLoading(true)
    setError(false)
  }, [src])

  const handleLoad = () => {
    setLoading(false)
  }

  const handleError = () => {
    setError(true)
    setLoading(false)
    if (fallbackSrc) {
      setImageSrc(fallbackSrc)
    }
  }

  return (
    <div className={`relative ${className}`}>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <Loader className="h-8 w-8 animate-spin text-gray-400" />
        </div>
      )}

      <Image
        src={imageSrc || "/placeholder.svg"}
        alt={alt}
        width={width || 1200}
        height={height || 800}
        priority={priority}
        className={`${loading ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}
        onLoad={handleLoad}
        onError={handleError}
        placeholder={blurDataUrl ? "blur" : "empty"}
        blurDataURL={blurDataUrl}
      />
    </div>
  )
}
