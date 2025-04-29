// Mapeo de rutas entre idiomas
export const routeTranslations = {
  es: {
    "/": "/",
    "/herramientas-ia": "/herramientas-ia",
    "/recursos": "/recursos",
    "/sobre-nosotros": "/sobre-nosotros",
    "/contacto": "/contacto",
    "/politica-privacidad": "/politica-privacidad",
    "/politica-cookies": "/politica-cookies",
    "/aviso-afiliados": "/aviso-afiliados",
    "/condiciones-servicio": "/condiciones-servicio",
    "/kit-medios": "/kit-medios",
    "/herramientas": "/herramientas",
    "/herramientas/categoria": "/herramientas/categoria",
    "/herramientas/comparar": "/herramientas/comparar",
    "/top-herramientas-ia": "/top-herramientas-ia",
  },
  en: {
    "/": "/",
    "/herramientas-ia": "/ai-tools",
    "/recursos": "/resources",
    "/sobre-nosotros": "/about-us",
    "/contacto": "/contact",
    "/politica-privacidad": "/privacy-policy",
    "/politica-cookies": "/cookie-policy",
    "/aviso-afiliados": "/affiliate-disclosure",
    "/condiciones-servicio": "/terms-of-service",
    "/kit-medios": "/media-kit",
    "/herramientas": "/tools",
    "/herramientas/categoria": "/tools/category",
    "/herramientas/comparar": "/tools/compare",
    "/top-herramientas-ia": "/top-ai-tools",
  },
}

// Función para traducir una ruta al idioma especificado
export function translateRoute(path: string, language: string): string {
  if (language === "es") {
    return path // No es necesario traducir si ya está en español
  }

  // Buscar la ruta en el mapeo de español a inglés
  const esRoutes = Object.keys(routeTranslations.es)
  const enRoutes = Object.values(routeTranslations.en)

  // Comprobar si la ruta exacta existe en el mapeo
  const exactRouteIndex = esRoutes.findIndex((route) => route === path)
  if (exactRouteIndex !== -1) {
    return enRoutes[exactRouteIndex]
  }

  // Si no hay una coincidencia exacta, buscar rutas dinámicas
  // Por ejemplo, /herramientas/[slug] debería traducirse a /tools/[slug]
  for (let i = 0; i < esRoutes.length; i++) {
    const esRoute = esRoutes[i]
    if (path.startsWith(esRoute + "/")) {
      const suffix = path.substring(esRoute.length)
      return enRoutes[i] + suffix
    }
  }

  // Si no se encuentra una traducción, devolver la ruta original
  return path
}

// Función para obtener la ruta equivalente en el otro idioma
export function getAlternateRoute(path: string, currentLanguage: string): string {
  const targetLanguage = currentLanguage === "es" ? "en" : "es"
  return translateRoute(path, targetLanguage)
}
