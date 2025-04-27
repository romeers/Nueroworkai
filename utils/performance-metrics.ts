/**
 * Utilidades para medir y reportar métricas de rendimiento
 */

// Tipos para las métricas de Core Web Vitals
export interface WebVitalsMetrics {
  LCP: number | null // Largest Contentful Paint
  FID: number | null // First Input Delay
  CLS: number | null // Cumulative Layout Shift
  FCP: number | null // First Contentful Paint
  TTI: number | null // Time to Interactive
  TBT: number | null // Total Blocking Time
  TTFB: number | null // Time to First Byte
  INP: number | null // Interaction to Next Paint
}

// Interfaz para el resultado de la prueba de rendimiento
export interface PerformanceTestResult {
  url: string
  timestamp: number
  userAgent: string
  deviceType: "mobile" | "tablet" | "desktop"
  connection: string
  metrics: WebVitalsMetrics
  resources: {
    total: number
    js: number
    css: number
    img: number
    other: number
    totalSize: number
  }
  scores: {
    performance: number | null
    accessibility: number | null
    bestPractices: number | null
    seo: number | null
  }
}

// Función para detectar el tipo de dispositivo
export function detectDeviceType(): "mobile" | "tablet" | "desktop" {
  if (typeof window === "undefined") return "desktop"

  const userAgent = navigator.userAgent

  // Detectar móvil
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
    // Detectar tablet
    if (/iPad|tablet|Tablet/i.test(userAgent) || (window.innerWidth > 768 && window.innerWidth <= 1024)) {
      return "tablet"
    }
    return "mobile"
  }

  return "desktop"
}

// Función para detectar el tipo de conexión
export function detectConnectionType(): string {
  if (typeof navigator === "undefined" || !("connection" in navigator)) {
    return "unknown"
  }

  // @ts-ignore - La API de Network Information no está en todos los navegadores
  const connection = navigator.connection

  if (!connection) return "unknown"

  if (connection.effectiveType) {
    return connection.effectiveType // 4g, 3g, 2g, slow-2g
  }

  return "unknown"
}

// Función para medir el rendimiento de carga de la página
export async function measurePagePerformance(): Promise<Partial<WebVitalsMetrics>> {
  if (typeof window === "undefined") return {}

  return new Promise((resolve) => {
    // Esperar a que la página termine de cargar
    if (document.readyState === "complete") {
      collectMetrics()
    } else {
      window.addEventListener("load", () => {
        // Dar tiempo para que se estabilicen las métricas
        setTimeout(collectMetrics, 1000)
      })
    }

    function collectMetrics() {
      const metrics: Partial<WebVitalsMetrics> = {}

      // Obtener métricas de Performance API
      const perfEntries = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming
      if (perfEntries) {
        metrics.TTFB = perfEntries.responseStart
      }

      // Intentar obtener LCP
      const lcpEntries = performance
        .getEntriesByType("paint")
        .filter((entry) => entry.name === "largest-contentful-paint")
      if (lcpEntries.length > 0) {
        metrics.LCP = lcpEntries[0].startTime
      }

      // Intentar obtener FCP
      const fcpEntries = performance
        .getEntriesByType("paint")
        .filter((entry) => entry.name === "first-contentful-paint")
      if (fcpEntries.length > 0) {
        metrics.FCP = fcpEntries[0].startTime
      }

      // Nota: FID, CLS, TTI, TBT e INP requieren bibliotecas específicas como web-vitals
      // para ser medidos correctamente

      resolve(metrics)
    }
  })
}

// Función para analizar los recursos cargados
export function analyzePageResources() {
  if (typeof window === "undefined") return null

  const resources = performance.getEntriesByType("resource")

  const result = {
    total: resources.length,
    js: 0,
    css: 0,
    img: 0,
    other: 0,
    totalSize: 0,
  }

  resources.forEach((resource) => {
    const url = resource.name
    const size = (resource as PerformanceResourceTiming).transferSize || 0

    result.totalSize += size

    if (url.endsWith(".js")) {
      result.js++
    } else if (url.endsWith(".css")) {
      result.css++
    } else if (/\.(png|jpg|jpeg|gif|svg|webp|avif)/.test(url)) {
      result.img++
    } else {
      result.other++
    }
  })

  return result
}

// Función para guardar los resultados de la prueba
export async function savePerformanceTestResult(result: PerformanceTestResult): Promise<boolean> {
  try {
    const response = await fetch("/api/performance/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(result),
    })

    return response.ok
  } catch (error) {
    console.error("Error al guardar los resultados de rendimiento:", error)
    return false
  }
}

// Función para ejecutar una prueba de rendimiento completa
export async function runPerformanceTest(url: string = window.location.href): Promise<PerformanceTestResult> {
  // Recopilar información básica
  const deviceType = detectDeviceType()
  const connection = detectConnectionType()
  const userAgent = navigator.userAgent

  // Medir métricas de rendimiento
  const metrics = await measurePagePerformance()

  // Analizar recursos
  const resources = analyzePageResources() || {
    total: 0,
    js: 0,
    css: 0,
    img: 0,
    other: 0,
    totalSize: 0,
  }

  // Crear resultado
  const result: PerformanceTestResult = {
    url,
    timestamp: Date.now(),
    userAgent,
    deviceType,
    connection,
    metrics: {
      LCP: metrics.LCP || null,
      FID: metrics.FID || null,
      CLS: metrics.CLS || null,
      FCP: metrics.FCP || null,
      TTI: metrics.TTI || null,
      TBT: metrics.TBT || null,
      TTFB: metrics.TTFB || null,
      INP: metrics.INP || null,
    },
    resources,
    scores: {
      performance: null,
      accessibility: null,
      bestPractices: null,
      seo: null,
    },
  }

  return result
}
