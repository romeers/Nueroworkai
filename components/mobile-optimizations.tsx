"use client"

import { useEffect } from "react"

export default function MobileOptimizations() {
  useEffect(() => {
    // Detectar dispositivo móvil
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

    if (isMobile) {
      // Ajustar viewport para evitar problemas de zoom
      const viewportMeta = document.querySelector('meta[name="viewport"]')
      if (viewportMeta) {
        viewportMeta.setAttribute(
          "content",
          "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0",
        )
      }

      // Mejorar rendimiento de scroll
      document.documentElement.style.scrollBehavior = "auto"

      // Prevenir doble tap para zoom
      document.addEventListener(
        "touchend",
        (e) => {
          const now = Date.now()
          const lastTouch = (window as any).lastTouch || now - 1000
          const delta = now - lastTouch

          if (delta < 500 && delta > 0) {
            e.preventDefault()
          }
          ;(window as any).lastTouch = now
        },
        { passive: false },
      )

      // Mejorar rendimiento de animaciones
      document.body.classList.add("reduce-motion")
    }

    // Cleanup
    return () => {
      if (isMobile) {
        document.removeEventListener("touchend", () => {})
      }
    }
  }, [])

  return null
}
