import React from "react"
/**
 * Utilidades para optimización de rendimiento
 */

// Función para optimizar imágenes
export function getOptimizedImageUrl(url: string | null | undefined, width = 800): string {
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
    return `${url}?w=${width}&q=75&auto=format`
  }

  // Para otros casos, devolver la URL original
  return url
}

// Función para determinar si una imagen debe cargarse con prioridad
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

// Función para implementar lazy loading de componentes
export function shouldLazyLoadComponent(pathname: string, componentName: string): boolean {
  // Componentes que siempre deben cargarse de forma inmediata
  const criticalComponents = ["Header", "Footer", "HeroSection"]
  if (criticalComponents.includes(componentName)) {
    return false
  }

  // Componentes críticos para la página de inicio
  if (pathname === "/" && ["TrustBadges", "FeaturedTools"].includes(componentName)) {
    return false
  }

  // Por defecto, lazy load para componentes no críticos
  return true
}

// Preload critical resources
export function preloadCriticalResources(): void {
  if (typeof window === "undefined") return

  // Preload critical images
  const criticalImages = ["/logo.png", "/neural-network-head.png", "/abstract-brain-network.png"]

  criticalImages.forEach((imageSrc) => {
    const link = document.createElement("link")
    link.rel = "preload"
    link.as = "image"
    link.href = imageSrc
    document.head.appendChild(link)
  })
}

// Optimize font loading
export function optimizeFontLoading(): void {
  if (typeof window === "undefined") return

  // Add font display swap
  const style = document.createElement("style")
  style.textContent = `
    @font-face {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2) format('woff2');
    }
    @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLCz7Z1xlFQ.woff2) format('woff2');
    }
  `
  document.head.appendChild(style)
}

// Función para medir el rendimiento de una función
export function measurePerformance<T extends (...args: any[]) => any>(
  fn: T,
  name: string,
): (...args: Parameters<T>) => ReturnType<T> {
  return (...args: Parameters<T>): ReturnType<T> => {
    const start = performance.now()
    const result = fn(...args)
    const end = performance.now()

    console.log(`[Performance] ${name}: ${(end - start).toFixed(2)}ms`)

    return result
  }
}

// Función para optimizar el renderizado de listas largas
export function optimizeListRendering<T>(
  items: T[],
  renderItem: (item: T, index: number) => React.ReactNode,
  keyExtractor: (item: T, index: number) => string,
  windowSize = 10,
): React.ReactNode[] {
  // Si la lista es pequeña, renderizar todo
  if (items.length <= windowSize) {
    return items.map((item, index) => (
      <React.Fragment key={keyExtractor(item, index)}>{renderItem(item, index)}</React.Fragment>
    ))
  }

  // Si la lista es grande, implementar virtualización
  // Nota: Esta es una implementación básica, para listas muy grandes
  // se recomienda usar una biblioteca como react-window o react-virtualized

  // Implementación pendiente
  return items.map((item, index) => (
    <React.Fragment key={keyExtractor(item, index)}>{renderItem(item, index)}</React.Fragment>
  ))
}
