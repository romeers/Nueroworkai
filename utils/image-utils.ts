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
