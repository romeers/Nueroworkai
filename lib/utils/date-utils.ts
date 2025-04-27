/**
 * Utilidades para manipulación de fechas
 */

/**
 * Formatea una fecha en formato legible
 */
export function formatDate(
  date: Date | string | number | null | undefined,
  locale = "es-ES",
  options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  },
): string {
  if (!date) return ""

  const dateObj = typeof date === "object" ? date : new Date(date)

  if (isNaN(dateObj.getTime())) {
    console.warn(`Fecha inválida: ${date}`)
    return ""
  }

  return new Intl.DateTimeFormat(locale, options).format(dateObj)
}

/**
 * Calcula la diferencia entre dos fechas en días
 */
export function daysBetween(date1: Date | string, date2: Date | string = new Date()): number {
  const d1 = new Date(date1)
  const d2 = new Date(date2)

  const diffTime = Math.abs(d2.getTime() - d1.getTime())
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
}

/**
 * Formatea una fecha relativa (ej: "hace 2 días")
 */
export function formatRelativeTime(date: Date | string | number): string {
  const now = new Date()
  const dateObj = typeof date === "object" ? date : new Date(date)

  const diffMs = now.getTime() - dateObj.getTime()
  const diffSec = Math.round(diffMs / 1000)
  const diffMin = Math.round(diffSec / 60)
  const diffHour = Math.round(diffMin / 60)
  const diffDay = Math.round(diffHour / 24)
  const diffMonth = Math.round(diffDay / 30)
  const diffYear = Math.round(diffMonth / 12)

  if (diffSec < 60) return "hace unos segundos"
  if (diffMin < 60) return `hace ${diffMin} ${diffMin === 1 ? "minuto" : "minutos"}`
  if (diffHour < 24) return `hace ${diffHour} ${diffHour === 1 ? "hora" : "horas"}`
  if (diffDay < 30) return `hace ${diffDay} ${diffDay === 1 ? "día" : "días"}`
  if (diffMonth < 12) return `hace ${diffMonth} ${diffMonth === 1 ? "mes" : "meses"}`
  return `hace ${diffYear} ${diffYear === 1 ? "año" : "años"}`
}

/**
 * Verifica si una fecha es hoy
 */
export function isToday(date: Date | string): boolean {
  const today = new Date()
  const dateObj = typeof date === "object" ? date : new Date(date)

  return (
    dateObj.getDate() === today.getDate() &&
    dateObj.getMonth() === today.getMonth() &&
    dateObj.getFullYear() === today.getFullYear()
  )
}
