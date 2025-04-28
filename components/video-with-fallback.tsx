"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

interface VideoWithFallbackProps {
  videoSrc: string
  fallbackImageSrc: string
  alt: string
  width: number
  height: number
  className?: string
}

export default function VideoWithFallback({
  videoSrc,
  fallbackImageSrc,
  alt,
  width,
  height,
  className = "",
}: VideoWithFallbackProps) {
  const [isMobile, setIsMobile] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      const userAgent = navigator.userAgent.toLowerCase()
      const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent)
      const isNarrowScreen = window.innerWidth < 768
      setIsMobile(isMobileDevice || isNarrowScreen)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  // Handle video load event
  const handleVideoLoad = () => {
    setIsLoaded(true)
  }

  return (
    <div className={`relative ${className}`}>
      {!isMobile ? (
        <>
          {/* Loading placeholder */}
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-slate-100/50 rounded-2xl">
              <div className="h-12 w-12 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
            </div>
          )}

          {/* Video for desktop */}
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            onLoadedData={handleVideoLoad}
            className={`w-full h-auto rounded-2xl object-cover shadow-lg ${isLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
            width={width}
            height={height}
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </>
      ) : (
        /* Static image for mobile */
        <Image
          src={fallbackImageSrc || "/placeholder.svg"}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-auto rounded-2xl object-cover shadow-lg"
          priority
        />
      )}

      {/* Decorative elements */}
      <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-primary/10 blur-xl"></div>
      <div className="absolute -right-4 top-1/4 h-16 w-16 rounded-full bg-blue-300/20 blur-lg"></div>
    </div>
  )
}
