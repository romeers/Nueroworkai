"use client"

import { useEffect } from "react"

export default function FontOptimization() {
  useEffect(() => {
    // Only run font optimization code on client
    const optimizeFonts = () => {
      // Check if fonts are already loaded
      if (document.fonts && document.fonts.check("1em Inter") && document.fonts.check("1em Poppins")) {
        document.documentElement.classList.add("fonts-loaded")
        return
      }

      // Font loading observer
      if ("fonts" in document) {
        Promise.all([document.fonts.load("1em Inter"), document.fonts.load("1em Poppins")]).then(() => {
          document.documentElement.classList.add("fonts-loaded")
        })
      }
    }

    optimizeFonts()
  }, [])

  return null // No DOM output needed
}
