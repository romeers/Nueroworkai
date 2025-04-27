/**
 * Utilidades para manipulación de imágenes
 */

/**
 * Obtiene dimensiones de imagen para carga responsiva
 */
export function getImageDimensions(containerWidth: number, aspectRatio = 16 / 9): { width: number; height: number } {
  const height = Math.round(containerWidth / aspectRatio)
  return { width: containerWidth, height }
}

/**
 * Genera una URL de imagen optimizada
 */
export function getOptimizedImageUrl(url: string | null | undefined, width = 800, quality = 80): string {
  // Si la URL es undefined o null, devolver una URL de placeholder
  if (!url) {
    return "/placeholder.svg"
  }

  // Si es una URL externa, devolver la URL original
  if (url.startsWith("http") && !url.includes("vercel-storage.com")) {
    return url
  }

  // Si es un placeholder, devolver la URL original
  if (url.startsWith("/placeholder.svg")) {
    return url
  }

  // Si es una imagen local, añadir parámetros de optimización
  if (url.startsWith("/")) {
    // Añadir parámetros para Next.js Image Optimization
    return `${url}?w=${width}&q=${quality}`
  }

  // Para otros casos, devolver la URL original
  return url
}

/**
 * Determina si una imagen debe cargarse con prioridad
 */
export function shouldPrioritizeImage(url: string | null | undefined, pathname: string): boolean {
  // Si la URL es undefined o null, no priorizar
  if (!url) {
    return false
  }

  // Imágenes críticas para la página de inicio
  if (pathname === "/" && (url.includes("logo") || url.includes("hero") || url.includes("brain-network"))) {
    return true
  }

  // Imágenes críticas para páginas de herramientas
  if (pathname.startsWith("/herramientas/") && url.includes(pathname.split("/").pop() || "")) {
    return true
  }

  // Por defecto, no priorizar
  return false
}

/**
 * Genera un placeholder de color sólido para imágenes
 */
export function generateColorPlaceholder(width: number, height: number, color = "EEEEEE"): string {
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}' viewBox='0 0 ${width} ${height}'%3E%3Crect width='${width}' height='${height}' fill='%23${color}'/%3E%3C/svg%3E`
}

/**
 * Calcula el tamaño de imagen óptimo basado en el viewport
 */
export function getResponsiveImageSize(
  baseWidth: number,
  baseHeight: number,
  maxWidth = 1200,
): { width: number; height: number } {
  // Si no estamos en el navegador, devolver tamaños base
  if (typeof window === "undefined") {
    return { width: baseWidth, height: baseHeight }
  }

  // Obtener ancho de ventana
  const windowWidth = window.innerWidth

  // Si la ventana es más pequeña que el ancho base, escalar proporcionalmente
  if (windowWidth < baseWidth) {
    const scale = windowWidth / baseWidth
    return {
      width: Math.round(baseWidth * scale),
      height: Math.round(baseHeight * scale),
    }
  }

  // Si el ancho base es mayor que el máximo, escalar proporcionalmente
  if (baseWidth > maxWidth) {
    const scale = maxWidth / baseWidth
    return {
      width: maxWidth,
      height: Math.round(baseHeight * scale),
    }
  }

  // En otros casos, devolver tamaños base
  return { width: baseWidth, height: baseHeight }
}
