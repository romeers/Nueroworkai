/**
 * Utilidades para optimizar el uso de CDN
 */

// Función para generar URLs optimizadas para CDN
export function getCdnOptimizedUrl(url: string): string {
  // Si ya es una URL de CDN o un recurso local, devolverla tal cual
  if (!url || url.startsWith("/") || url.includes("vercel-storage.com")) {
    return url
  }

  // Para URLs externas, podríamos usar un proxy de imágenes si fuera necesario
  // Por ahora, devolvemos la URL original
  return url
}

// Función para precargar recursos críticos
export function preloadCriticalResources(): void {
  if (typeof window === "undefined") return

  // Lista de recursos críticos a precargar
  const criticalResources = [
    "/logo.png",
    "/neural-network-head.png",
    "/abstract-brain-network.png",
    "/neuroworkai-logo.png",
  ]

  // Precargar imágenes críticas
  criticalResources.forEach((resource) => {
    const link = document.createElement("link")
    link.rel = "preload"
    link.as = "image"
    link.href = resource
    document.head.appendChild(link)
  })
}

// Función para implementar lazy loading de recursos no críticos
export function lazyLoadResource(url: string, type: "image" | "script" | "style" = "image"): void {
  if (typeof window === "undefined") return

  // Crear el elemento adecuado según el tipo
  let element: HTMLElement

  switch (type) {
    case "script":
      element = document.createElement("script")
      ;(element as HTMLScriptElement).src = url
      ;(element as HTMLScriptElement).async = true
      break
    case "style":
      element = document.createElement("link")
      ;(element as HTMLLinkElement).rel = "stylesheet"
      ;(element as HTMLLinkElement).href = url
      break
    case "image":
    default:
      element = document.createElement("img")
      ;(element as HTMLImageElement).src = url
      element.style.display = "none"
      break
  }

  // Añadir el elemento al DOM
  document.body.appendChild(element)
}

// Función para optimizar el tiempo de carga de fuentes
export function optimizeFontLoading(): void {
  if (typeof window === "undefined") return

  // Añadir font-display: swap a todas las fuentes
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

// Función para implementar un sistema de caché local
export function setupLocalCache(): void {
  if (typeof window === "undefined") return

  // Implementar un sistema simple de caché en localStorage
  const cache: Record<string, { data: any; timestamp: number }> = {}
  const CACHE_DURATION = 1000 * 60 * 60 // 1 hora

  // Función para guardar en caché
  window.cacheData = (key: string, data: any) => {
    cache[key] = {
      data,
      timestamp: Date.now(),
    }
    try {
      localStorage.setItem("neurowork_cache", JSON.stringify(cache))
    } catch (e) {
      console.warn("Error al guardar en caché:", e)
    }
  }

  // Función para recuperar de caché
  window.getCachedData = (key: string) => {
    try {
      if (!cache[key]) {
        const storedCache = localStorage.getItem("neurowork_cache")
        if (storedCache) {
          const parsedCache = JSON.parse(storedCache)
          Object.assign(cache, parsedCache)
        }
      }

      const cachedItem = cache[key]
      if (cachedItem && Date.now() - cachedItem.timestamp < CACHE_DURATION) {
        return cachedItem.data
      }

      return null
    } catch (e) {
      console.warn("Error al recuperar de caché:", e)
      return null
    }
  }
}

// Extender el objeto Window para incluir nuestras funciones de caché
declare global {
  interface Window {
    cacheData: (key: string, data: any) => void
    getCachedData: (key: string) => any
  }
}
