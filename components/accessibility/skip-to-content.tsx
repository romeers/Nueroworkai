"use client"

import { useEffect, useState } from "react"

export default function SkipToContent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        setIsVisible(true)
      }
    }

    const handleMouseDown = () => {
      setIsVisible(false)
    }

    window.addEventListener("keydown", handleKeyDown)
    window.addEventListener("mousedown", handleMouseDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      window.removeEventListener("mousedown", handleMouseDown)
    }
  }, [])

  return (
    <a
      href="#main-content"
      className={`
        fixed top-4 left-1/2 transform -translate-x-1/2 z-50
        bg-primary text-white px-4 py-2 rounded-md shadow-lg
        focus:outline-none transition-opacity duration-200
        ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
    >
      Saltar al contenido principal
    </a>
  )
}
