// Idiomas soportados
export const locales = ["es", "en"] as const

// Idioma por defecto
export const defaultLocale = "es" as const

// Tipo para los idiomas
export type Locale = (typeof locales)[number]

// Mapeo de rutas entre idiomas
export const pathnames = {
  "/": "/",
  "/herramientas-ia": {
    en: "/ai-tools",
    es: "/herramientas-ia",
  },
  "/recursos": {
    en: "/resources",
    es: "/recursos",
  },
  "/sobre-nosotros": {
    en: "/about-us",
    es: "/sobre-nosotros",
  },
  "/contacto": {
    en: "/contact",
    es: "/contacto",
  },
  "/top-herramientas-ia": {
    en: "/top-ai-tools",
    es: "/top-herramientas-ia",
  },
} as const
