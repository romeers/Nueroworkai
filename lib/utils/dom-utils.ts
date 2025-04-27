/**
 * Utilidades para manipulación del DOM
 * Estas funciones solo deben usarse en el cliente
 */

/**
 * Verifica si el código se está ejecutando en el navegador
 */
export const isBrowser = typeof window !== "undefined"

/**
 * Obtiene el ancho de la ventana
 */
export function getWindowWidth(): number {
  if (!isBrowser) return 0
  return window.innerWidth
}

/**
 * Obtiene la altura de la ventana
 */
export function getWindowHeight(): number {
  if (!isBrowser) return 0
  return window.innerHeight
}

/**
 * Verifica si el dispositivo es móvil
 */
export function isMobileDevice(): boolean {
  if (!isBrowser) return false
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}

/**
 * Verifica si el dispositivo es una tablet
 */
export function isTabletDevice(): boolean {
  if (!isBrowser) return false
  const userAgent = navigator.userAgent
  return /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(userAgent)
}

/**
 * Función debounce para optimización de rendimiento
 */
export function debounce<T extends (...args: any[]) => any>(func: T, wait = 300): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null

  return (...args: Parameters<T>) => {
    if (timeout !== null) {
      clearTimeout(timeout)
    }

    timeout = setTimeout(() => {
      timeout = null
      func(...args)
    }, wait)
  }
}

/**
 * Función throttle para optimización de rendimiento
 */
export function throttle<T extends (...args: any[]) => any>(func: T, limit = 300): (...args: Parameters<T>) => void {
  let inThrottle = false

  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => {
        inThrottle = false
      }, limit)
    }
  }
}

/**
 * Bloquea el scroll del body
 */
export function lockBodyScroll(): void {
  if (!isBrowser) return

  // Guardar la posición actual de scroll
  const scrollY = window.scrollY

  // Añadir estilos para bloquear el scroll
  document.body.style.position = "fixed"
  document.body.style.top = `-${scrollY}px`
  document.body.style.width = "100%"
  document.body.style.overflowY = "scroll"

  // Guardar la posición para restaurarla después
  document.body.dataset.scrollY = scrollY.toString()
}

/**
 * Desbloquea el scroll del body
 */
export function unlockBodyScroll(): void {
  if (!isBrowser) return

  // Restaurar la posición de scroll
  const scrollY = document.body.dataset.scrollY || "0"

  // Eliminar estilos de bloqueo
  document.body.style.position = ""
  document.body.style.top = ""
  document.body.style.width = ""
  document.body.style.overflowY = ""

  // Restaurar la posición de scroll
  window.scrollTo(0, Number.parseInt(scrollY))
}
