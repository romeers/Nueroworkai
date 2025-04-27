"use client"

import type React from "react"

import { useEffect, useRef } from "react"

type KeyboardNavigationProps = {
  selector: string
  children: React.ReactNode
  loop?: boolean
  orientation?: "horizontal" | "vertical" | "both"
}

export function KeyboardNavigation({ selector, children, loop = true, orientation = "both" }: KeyboardNavigationProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleKeyDown = (e: KeyboardEvent) => {
      // Solo procesar si el evento ocurre dentro del contenedor
      if (!container.contains(document.activeElement)) return

      const elements = Array.from(container.querySelectorAll<HTMLElement>(selector)).filter(
        (el) => !el.disabled && el.tabIndex !== -1,
      )

      if (elements.length === 0) return

      const currentIndex = elements.findIndex((el) => el === document.activeElement)
      let nextIndex = -1

      // Determinar el siguiente índice basado en la tecla presionada
      switch (e.key) {
        case "ArrowRight":
          if (orientation === "horizontal" || orientation === "both") {
            nextIndex = currentIndex + 1
            if (nextIndex >= elements.length) {
              nextIndex = loop ? 0 : elements.length - 1
            }
            e.preventDefault()
          }
          break
        case "ArrowLeft":
          if (orientation === "horizontal" || orientation === "both") {
            nextIndex = currentIndex - 1
            if (nextIndex < 0) {
              nextIndex = loop ? elements.length - 1 : 0
            }
            e.preventDefault()
          }
          break
        case "ArrowDown":
          if (orientation === "vertical" || orientation === "both") {
            nextIndex = currentIndex + 1
            if (nextIndex >= elements.length) {
              nextIndex = loop ? 0 : elements.length - 1
            }
            e.preventDefault()
          }
          break
        case "ArrowUp":
          if (orientation === "vertical" || orientation === "both") {
            nextIndex = currentIndex - 1
            if (nextIndex < 0) {
              nextIndex = loop ? elements.length - 1 : 0
            }
            e.preventDefault()
          }
          break
        case "Home":
          nextIndex = 0
          e.preventDefault()
          break
        case "End":
          nextIndex = elements.length - 1
          e.preventDefault()
          break
      }

      // Enfocar el siguiente elemento si se encontró uno
      if (nextIndex !== -1) {
        elements[nextIndex].focus()
      }
    }

    container.addEventListener("keydown", handleKeyDown)
    return () => {
      container.removeEventListener("keydown", handleKeyDown)
    }
  }, [selector, loop, orientation])

  return (
    <div ref={containerRef} role="region">
      {children}
    </div>
  )
}
