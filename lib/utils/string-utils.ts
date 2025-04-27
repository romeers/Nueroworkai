/**
 * Utilidades para manipulación de strings
 */

/**
 * Trunca un texto a una longitud específica y añade puntos suspensivos
 */
export function truncateText(text: string | null | undefined, maxLength: number): string {
  if (!text) return ""
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + "..."
}

/**
 * Convierte un string a formato slug (para URLs)
 */
export function slugify(text: string | null | undefined): string {
  if (!text) return ""

  return text
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
}

/**
 * Capitaliza la primera letra de un string
 */
export function capitalize(text: string | null | undefined): string {
  if (!text) return ""
  return text.charAt(0).toUpperCase() + text.slice(1)
}

/**
 * Genera un ID único
 */
export function generateUniqueId(prefix = "id"): string {
  return `${prefix}-${Math.random().toString(36).substring(2, 9)}`
}

/**
 * Elimina HTML de un string
 */
export function stripHtml(html: string | null | undefined): string {
  if (!html) return ""
  return html.replace(/<[^>]*>?/gm, "")
}

/**
 * Calcula el tiempo de lectura para un texto
 */
export function calculateReadingTime(text: string | null | undefined, wordsPerMinute = 200): number {
  if (!text) return 0
  const words = stripHtml(text).trim().split(/\s+/).length
  return Math.max(1, Math.ceil(words / wordsPerMinute))
}
