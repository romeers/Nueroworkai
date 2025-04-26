"use client"

import { useState, useEffect, useRef } from "react"
import Image, { type ImageProps } from "next/image"
import { cn } from "@/lib/utils"

interface LQIPImageProps extends Omit<ImageProps, "onLoad" | "placeholder"> {
  lqip: string
  aspectRatio?: string
}

export default function LQIPImage({ src, alt, lqip, width, height, className, aspectRatio, ...props }: LQIPImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const imgRef = useRef<HTMLDivElement>(null)

  // Calculate aspect ratio styles
  const getAspectRatioStyles = () => {
    if (!aspectRatio) return {}

    let paddingTop = "56.25%" // Default 16:9

    if (aspectRatio === "4:3") {
      paddingTop = "75%"
    } else if (aspectRatio === "1:1") {
      paddingTop = "100%"
    } else if (aspectRatio.includes(":")) {
      const [w, h] = aspectRatio.split(":").map(Number)
      paddingTop = `${(h / w) * 100}%`
    }

    return {
      position: "relative" as const,
      paddingTop,
      overflow: "hidden" as const,
    }
  }

  useEffect(() => {
    if (!imgRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { rootMargin: "200px", threshold: 0.01 },
    )

    observer.observe(imgRef.current)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div ref={imgRef} className={cn("overflow-hidden", className)} style={getAspectRatioStyles()}>
      {/* LQIP */}
      <Image
        src={lqip || "/placeholder.svg"}
        alt=""
        fill={!width || !height}
        width={width}
        height={height}
        className={cn(
          "object-cover transition-opacity duration-500",
          isLoaded ? "opacity-0" : "opacity-100 blur-sm scale-105",
        )}
        aria-hidden="true"
        priority={false}
        quality={10}
      />

      {/* Main image */}
      {isInView && (
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          fill={!width || !height}
          width={width}
          height={height}
          className={cn("object-cover transition-opacity duration-500", isLoaded ? "opacity-100" : "opacity-0")}
          onLoad={() => setIsLoaded(true)}
          {...props}
        />
      )}
    </div>
  )
}
