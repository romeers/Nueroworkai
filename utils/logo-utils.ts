/**
 * Preloads the logo images to improve performance
 */
export function preloadLogoImages() {
  const logoUrls = [
    "/logo-texto-transparente.png",
    // Add other logo variants here if needed
  ]

  if (typeof window !== "undefined") {
    logoUrls.forEach((url) => {
      const img = new Image()
      img.src = url
    })
  }
}
