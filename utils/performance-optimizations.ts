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
    return `${url}?w=${width}&q=75`
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

// Función para optimizar la carga de fuentes
export function optimizeFontLoading(): void {
  // Esta función podría implementar estrategias como:
  // - Precargar fuentes críticas
  // - Utilizar font-display: swap
  // - Implementar Font Loading API
  // Ejemplo de implementación (esto se haría en un componente real)
  /*
  const fontStyles = document.createElement('style')
  fontStyles.textContent = `
    @font-face {
      font-family: 'CustomFont';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url('/fonts/custom-font.woff2') format('woff2');
    }
  `
  document.head.appendChild(fontStyles)
  
  // Precargar fuente crítica
  const preloadLink = document.createElement('link')
  preloadLink.rel = 'preload'
  preloadLink.href = '/fonts/custom-font.woff2'
  preloadLink.as = 'font'
  preloadLink.type = 'font/woff2'
  preloadLink.crossOrigin = 'anonymous'
  document.head.appendChild(preloadLink)
  */
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
