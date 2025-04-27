/**
 * Configuración SEO del sitio
 */

import { siteConfig } from "./site"

// Tipos
export interface SeoProps {
  title?: string
  description?: string
  canonical?: string
  openGraph?: {
    title?: string
    description?: string
    url?: string
    siteName?: string
    images?: Array<{
      url: string
      width?: number
      height?: number
      alt?: string
    }>
    locale?: string
    type?: string
  }
  twitter?: {
    card?: "summary" | "summary_large_image" | "app" | "player"
    site?: string
    creator?: string
    title?: string
    description?: string
    image?: string
  }
  additionalMetaTags?: Array<{
    name?: string
    property?: string
    content: string
  }>
  additionalLinkTags?: Array<{
    rel: string
    href: string
    sizes?: string
    type?: string
    color?: string
    as?: string
    crossOrigin?: string
  }>
}

// Configuración SEO por defecto
export const defaultSeo: SeoProps = {
  title: siteConfig.name,
  description: siteConfig.description,
  canonical: siteConfig.url,
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: `${siteConfig.url}${siteConfig.ogImage}`,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@neuroworkai",
    creator: "@neuroworkai",
    title: siteConfig.name,
    description: siteConfig.description,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
  },
  additionalMetaTags: [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
    {
      name: "apple-mobile-web-app-capable",
      content: "yes",
    },
    {
      name: "theme-color",
      content: "#ffffff",
    },
  ],
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      href: "/apple-touch-icon.png",
      sizes: "180x180",
    },
    {
      rel: "manifest",
      href: "/manifest.webmanifest",
    },
  ],
}

// Función para generar SEO para páginas específicas
export function generateSeo(props: SeoProps): SeoProps {
  return {
    ...defaultSeo,
    ...props,
    openGraph: {
      ...defaultSeo.openGraph,
      ...props.openGraph,
    },
    twitter: {
      ...defaultSeo.twitter,
      ...props.twitter,
    },
  }
}

// Configuraciones SEO predefinidas para tipos de páginas comunes
export const pageSeoConfigs = {
  home: generateSeo({
    title: `${siteConfig.name} - Herramientas de IA para optimizar tu trabajo`,
  }),

  tools: generateSeo({
    title: "Herramientas IA | NeuroWorkAI",
    description: "Descubre las mejores herramientas de IA para optimizar tu trabajo y productividad",
    openGraph: {
      title: "Herramientas IA | NeuroWorkAI",
    },
  }),

  toolDetail: (toolName: string) =>
    generateSeo({
      title: `${toolName} | Reseña y Análisis | NeuroWorkAI`,
      description: `Análisis completo de ${toolName}. Descubre sus características, ventajas, desventajas y alternativas.`,
      openGraph: {
        title: `${toolName} | Reseña y Análisis | NeuroWorkAI`,
      },
    }),

  category: (categoryName: string) =>
    generateSeo({
      title: `Herramientas de IA para ${categoryName} | NeuroWorkAI`,
      description: `Las mejores herramientas de IA para ${categoryName}. Compara funcionalidades, precios y ventajas.`,
      openGraph: {
        title: `Herramientas de IA para ${categoryName} | NeuroWorkAI`,
      },
    }),

  comparison: (tool1: string, tool2: string) =>
    generateSeo({
      title: `${tool1} vs ${tool2} | Comparativa | NeuroWorkAI`,
      description: `Comparativa detallada entre ${tool1} y ${tool2}. Analiza características, precios y ventajas de cada herramienta.`,
      openGraph: {
        title: `${tool1} vs ${tool2} | Comparativa | NeuroWorkAI`,
      },
    }),

  resources: generateSeo({
    title: "Recursos y Guías de IA | NeuroWorkAI",
    description: "Recursos, guías y tutoriales para aprovechar al máximo las herramientas de IA en tu trabajo diario.",
    openGraph: {
      title: "Recursos y Guías de IA | NeuroWorkAI",
    },
  }),

  resourceDetail: (resourceTitle: string) =>
    generateSeo({
      title: `${resourceTitle} | NeuroWorkAI`,
      description: `Guía completa sobre ${resourceTitle}. Aprende a optimizar tu trabajo con herramientas de IA.`,
      openGraph: {
        title: `${resourceTitle} | NeuroWorkAI`,
      },
    }),

  about: generateSeo({
    title: "Sobre Nosotros | NeuroWorkAI",
    description: "Conoce al equipo detrás de NeuroWorkAI y nuestra misión de ayudarte a optimizar tu trabajo con IA.",
    openGraph: {
      title: "Sobre Nosotros | NeuroWorkAI",
    },
  }),

  contact: generateSeo({
    title: "Contacto | NeuroWorkAI",
    description: "¿Tienes preguntas o sugerencias? Contacta con el equipo de NeuroWorkAI.",
    openGraph: {
      title: "Contacto | NeuroWorkAI",
    },
  }),
}
