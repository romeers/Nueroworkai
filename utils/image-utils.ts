/**
 * Valida y normaliza una URL de imagen
 * @param src URL de la imagen o null/undefined
 * @param fallback URL de respaldo a usar si src es inválido
 * @returns URL normalizada o null si no hay URL válida
 */
export function validateImageSrc(src: string | null | undefined, fallback: string): string | null {
  // Si src es null, undefined o string vacío, devolver fallback
  if (!src || src === "") {
    return fallback || null
  }

  // Si es una URL relativa o absoluta válida, devolverla
  if (src.startsWith("/") || src.startsWith("http")) {
    return src
  }

  // Si no es una URL válida, devolver fallback
  return fallback || null
}

/**
 * Genera una URL de placeholder para cuando no hay imagen
 * @param text Texto descriptivo para el placeholder
 * @param width Ancho de la imagen
 * @param height Alto de la imagen
 * @returns URL del placeholder
 */
export function generatePlaceholderUrl(text: string, width = 300, height = 200): string {
  const encodedText = encodeURIComponent(text)
  return `/placeholder.svg?height=${height}&width=${width}&query=${encodedText}`
}

/**
 * Optimiza el texto alternativo para imágenes
 * @param alt Texto alternativo original
 * @param fallback Texto de respaldo si alt está vacío
 * @param maxLength Longitud máxima del texto alternativo
 * @returns Texto alternativo optimizado
 */
export function optimizeAltText(alt: string | undefined, fallback: string, maxLength = 125): string {
  if (!alt || alt.trim() === "") {
    return fallback
  }

  // Limitar longitud y asegurar que termina con punto
  let optimizedAlt = alt.trim()
  if (optimizedAlt.length > maxLength) {
    optimizedAlt = optimizedAlt.substring(0, maxLength).trim()
    if (optimizedAlt.endsWith(".")) {
      return optimizedAlt
    }
    return optimizedAlt + "."
  }

  if (!optimizedAlt.endsWith(".")) {
    return optimizedAlt + "."
  }

  return optimizedAlt
}

/**
 * Genera dimensiones de imagen optimizadas basadas en el tipo de contenido
 * @param type Tipo de contenido (hero, card, thumbnail, etc.)
 * @returns Objeto con ancho y alto recomendados
 */
export function getOptimizedImageDimensions(type: "hero" | "card" | "thumbnail" | "logo" | "banner" | "avatar"): {
  width: number
  height: number
} {
  switch (type) {
    case "hero":
      return { width: 1200, height: 600 }
    case "card":
      return { width: 600, height: 400 }
    case "thumbnail":
      return { width: 300, height: 200 }
    case "logo":
      return { width: 200, height: 60 }
    case "banner":
      return { width: 1200, height: 300 }
    case "avatar":
      return { width: 80, height: 80 }
    default:
      return { width: 600, height: 400 }
  }
}
