/**
 * Utilidades para optimizar el rendimiento del sitio
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

// Throttle function to limit function calls
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number,
): (...args: Parameters<T>) => ReturnType<T> | undefined {
  let inThrottle = false
  let lastResult: ReturnType<T> | undefined

  return function (this: any, ...args: Parameters<T>): ReturnType<T> | undefined {
    if (!inThrottle) {
      lastResult = func.apply(this, args)
      inThrottle = true
      setTimeout(() => {
        inThrottle = false
      }, limit)
    }
    return lastResult
  }
}

// Debounce function to delay function execution
export function debounce<T extends (...args: any[]) => any>(func: T, wait: number): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null

  return function (this: any, ...args: Parameters<T>): void {
    const later = () => {
      timeout = null
      func.apply(this, args)
    }

    if (timeout !== null) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(later, wait)
  }
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
