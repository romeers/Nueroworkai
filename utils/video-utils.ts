/**
 * Utility functions for video handling
 */

/**
 * Checks if the current environment supports video autoplay
 * This is useful for determining if we should show video or fallback
 */
export function supportsAutoplay(): boolean {
  // Only run on client
  if (typeof window === "undefined") return false

  // Check for known mobile devices that might have autoplay restrictions
  const userAgent = navigator.userAgent.toLowerCase()
  const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent)

  // Check for battery saving mode or data saver (if available)
  const hasBatterySaving =
    "connection" in navigator &&
    // @ts-ignore - navigator.connection is not in the TypeScript types
    (navigator.connection.saveData || navigator.connection.effectiveType === "slow-2g")

  // Return false if any conditions suggest we shouldn't autoplay
  return !(isMobileDevice || hasBatterySaving)
}

/**
 * Preloads a video to improve playback performance
 */
export function preloadVideo(src: string): void {
  if (typeof window === "undefined") return

  const link = document.createElement("link")
  link.rel = "preload"
  link.href = src
  link.as = "video"
  link.type = "video/mp4"

  document.head.appendChild(link)
}
