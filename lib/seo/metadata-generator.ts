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
  category?: string
  tags?: string[]
  locale?: string
  alternateLocales?: string[]
  twitterCard?: "summary" | "summary_large_image"
  twitterCreator?: string
  twitterSite?: string
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
  category,
  tags = [],
  locale = "es_ES",
  alternateLocales = [],
  twitterCard = "summary_large_image",
  twitterCreator = "@neuroworkai",
  twitterSite = "@neuroworkai",
}: GenerateMetadataParams): Metadata {
  // Asegurarse de que el título incluya el nombre del sitio
  const siteName = "NeuroWorkAI"
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`

  // Base URL para URLs absolutas
  const baseUrl = "https://neuroworkai.com"

  // URL canónica
  const canonicalUrl = canonical ? `${baseUrl}${canonical}` : undefined

  // Imagen OG completa
  const ogImageUrl = ogImage.startsWith("http") ? ogImage : `${baseUrl}${ogImage}`

  // Palabras clave predeterminadas
  const defaultKeywords = [
    "IA",
    "inteligencia artificial",
    "productividad",
    "trabajo remoto",
    "herramientas IA",
    "automatización",
  ]

  // Combinar palabras clave predeterminadas con las proporcionadas
  const allKeywords = [...new Set([...defaultKeywords, ...keywords])]

  // Generar metadatos
  return {
    title: fullTitle,
    description,
    keywords: allKeywords.join(", "),
    metadataBase: new URL(baseUrl),

    // Open Graph
    openGraph: {
      type: ogType,
      locale,
      alternateLocales,
      url: canonicalUrl || baseUrl,
      title: fullTitle,
      description,
      siteName,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(author && { authors: [author] }),
      ...(category && { section: category }),
      ...(tags.length > 0 && { tags }),
    },

    // Twitter Card
    twitter: {
      card: twitterCard,
      title: fullTitle,
      description,
      images: [ogImageUrl],
      creator: twitterCreator,
      site: twitterSite,
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
      },
    },

    // Canonical URL
    ...(canonicalUrl && { alternates: { canonical: canonicalUrl } }),

    // Otros metadatos
    authors: [{ name: author }],
    creator: author,
    publisher: siteName,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
  }
}
