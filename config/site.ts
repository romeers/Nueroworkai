/**
 * Configuración centralizada del sitio
 */

export const siteConfig = {
  name: "NeuroWorkAI",
  description: "Herramientas de IA para Profesionales Remotos",
  url: "https://neuroworkai.com",
  ogImage: "/neural-network-head.png",
  links: {
    twitter: "https://twitter.com/neuroworkai",
    github: "https://github.com/neuroworkai",
    linkedin: "https://linkedin.com/company/neuroworkai",
  },
  author: {
    name: "NeuroWorkAI Team",
    email: "contacto@neuroworkai.com",
  },
  analytics: {
    vercelAnalytics: true,
    googleAnalyticsId: "", // Añadir ID si se utiliza Google Analytics
  },
  features: {
    darkMode: true,
    newsletter: true,
    authentication: true,
    favorites: true,
    comments: false,
    ratings: true,
  },
  navigation: {
    main: [
      { name: "Inicio", href: "/" },
      { name: "Herramientas IA", href: "/herramientas-ia" },
      { name: "Recursos", href: "/recursos" },
      { name: "Sobre Nosotros", href: "/sobre-nosotros" },
    ],
    footer: [
      { name: "Política de Privacidad", href: "/politica-privacidad" },
      { name: "Política de Cookies", href: "/politica-cookies" },
      { name: "Aviso de Afiliados", href: "/aviso-afiliados" },
      { name: "Contacto", href: "/sobre-nosotros#contacto" },
    ],
  },
}

export type SiteConfig = typeof siteConfig
