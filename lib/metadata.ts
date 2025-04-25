import type { Metadata } from "next"

interface GenerateMetadataParams {
  title: string
  description: string
  keywords?: string[]
  ogImage?: string
  ogType?: "website" | "article"
  canonical?: string
  noIndex?: boolean
  author?: string
  publishedTime?: string
  modifiedTime?: string
  section?: string
  locale?: string
}

export function generateMetadata({
  title,
  description,
  keywords = [],
  ogImage = "/neural-network-head.png",
  ogType = "website",
  canonical,
  noIndex = false,
  author = "NeuroWorkAI",
  publishedTime,
  modifiedTime,
  section,
  locale = "es_ES",
}: GenerateMetadataParams): Metadata {
  // Asegurarse de que el título incluya el nombre del sitio
  const fullTitle = title.includes("NeuroWorkAI") ? title : `${title} | NeuroWorkAI`

  // Base URL para URLs absolutas
  const baseUrl = "https://neuroworkai.com"

  // URL canónica
  const canonicalUrl = canonical ? `${baseUrl}${canonical}` : undefined

  // Imagen OG completa
  const ogImageUrl = ogImage.startsWith("http") ? ogImage : `${baseUrl}${ogImage}`

  // Metadata básica
  const metadata: Metadata = {
    title: fullTitle,
    description,
    keywords: ["IA", "inteligencia artificial", "productividad", "trabajo remoto", ...keywords].join(", "),
    metadataBase: new URL(baseUrl),

    // Open Graph
    openGraph: {
      type: ogType,
      locale: locale,
      url: canonicalUrl || baseUrl,
      title: fullTitle,
      description,
      siteName: "NeuroWorkAI",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },

    // Twitter Card
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImageUrl],
      creator: "@neuroworkai",
      site: "@neuroworkai",
    },

    // Robots
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },

    // Canonical URL
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "es-ES": canonicalUrl || baseUrl,
      },
    },
  }

  // Añadir metadatos adicionales para artículos
  if (ogType === "article" && publishedTime) {
    metadata.openGraph = {
      ...metadata.openGraph,
      authors: [author],
      publishedTime,
      ...(modifiedTime && { modifiedTime }),
      ...(section && { section }),
    }
  }

  return metadata
}

// Función para generar metadatos de página de herramienta
export function generateToolMetadata(tool: any, slug: string): Metadata {
  return generateMetadata({
    title: `${tool.name} - Análisis y Opiniones ${new Date().getFullYear()}`,
    description:
      tool.description ||
      `Descubre todo sobre ${tool.name}, características, precios, ventajas y desventajas en nuestro análisis completo.`,
    keywords: [tool.name, "herramienta IA", "análisis", "opiniones", "review", ...(tool.categories || [])],
    ogImage: tool.imageUrl || "/neural-network-head.png",
    ogType: "article",
    canonical: `/herramientas/${slug}`,
    publishedTime: tool.publishedAt || new Date().toISOString(),
    modifiedTime: tool.updatedAt || new Date().toISOString(),
    section: "Herramientas IA",
  })
}

// Función para generar metadatos de página de recurso
export function generateResourceMetadata(resource: any, slug: string): Metadata {
  return generateMetadata({
    title: `${resource.title} - Recursos NeuroWorkAI`,
    description:
      resource.description || `Accede a nuestro recurso sobre ${resource.title} y mejora tu productividad con IA.`,
    keywords: [resource.title, "recurso IA", "guía", "plantilla", ...(resource.tags || [])],
    ogImage: resource.imageUrl || "/abstract-brain-network.png",
    ogType: "article",
    canonical: `/recursos/${slug}`,
    publishedTime: resource.publishedAt || new Date().toISOString(),
    modifiedTime: resource.updatedAt || new Date().toISOString(),
    section: "Recursos",
  })
}
