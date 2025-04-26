"use client"

import { useEffect, useState } from "react"

interface ScriptLoaderProps {
  src: string
  id?: string
  strategy?: "beforeInteractive" | "afterInteractive" | "lazyOnload" | "onViewport"
  onLoad?: () => void
  onError?: () => void
  viewportMargin?: string
}

export default function ScriptLoader({
  src,
  id,
  strategy = "afterInteractive",
  onLoad,
  onError,
  viewportMargin = "200px",
}: ScriptLoaderProps) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    // Skip if already loaded
    if (loaded) return

    // Skip if beforeInteractive (handled by Next.js)
    if (strategy === "beforeInteractive") return

    // Function to load the script
    const loadScript = () => {
      const script = document.createElement("script")
      script.src = src
      if (id) script.id = id
      script.async = true

      script.onload = () => {
        setLoaded(true)
        if (onLoad) onLoad()
      }

      script.onerror = () => {
        if (onError) onError()
      }

      document.body.appendChild(script)
    }

    // Load based on strategy
    if (strategy === "afterInteractive") {
      loadScript()
    } else if (strategy === "lazyOnload") {
      window.addEventListener("load", loadScript)
      return () => window.removeEventListener("load", loadScript)
    } else if (strategy === "onViewport") {
      // Use Intersection Observer to load when in viewport
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && !loaded) {
            loadScript()
            observer.disconnect()
          }
        },
        { rootMargin: viewportMargin },
      )

      // Create a sentinel element
      const sentinel = document.createElement("div")
      sentinel.style.height = "1px"
      sentinel.style.width = "1px"
      sentinel.style.position = "absolute"
      sentinel.style.opacity = "0"
      document.body.appendChild(sentinel)

      observer.observe(sentinel)

      return () => {
        observer.disconnect()
        if (sentinel.parentNode) {
          sentinel.parentNode.removeChild(sentinel)
        }
      }
    }
  }, [src, id, strategy, loaded, onLoad, onError, viewportMargin])

  return null
}
