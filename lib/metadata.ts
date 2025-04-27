import type { Metadata } from "next"

interface GenerateMetadataParams {
  title: string
  description: string
  keywords?: string[]
  ogImage?: string
  ogType?: "website" | "article"
  canonical?: string
  noIndex?: boolean
  alternateLanguages?: Record<string, string>
  publishedTime?: string
  modifiedTime?: string
  authors?: Array<{ name: string; url?: string }>
  section?: string
}

export function generateMetadata({
  title,
  description,
  keywords = [],
  ogImage = "/neural-network-head.png",
  ogType = "website",
  canonical,
  noIndex = false,
  alternateLanguages,
  publishedTime,
  modifiedTime,
  authors,
  section,
}: GenerateMetadataParams): Metadata {
  // Asegurarse de que el título incluya el nombre del sitio
  const fullTitle = title.includes("NeuroWorkAI") ? title : `${title} | NeuroWorkAI`

  // Base URL para URLs absolutas
  const baseUrl = "https://neuroworkai.com"

  // URL canónica
  const canonicalUrl = canonical ? `${baseUrl}${canonical}` : undefined

  // Imagen OG completa
  const ogImageUrl = ogImage.startsWith("http") ? ogImage : `${baseUrl}${ogImage}`

  const metadata: Metadata = {
    title: fullTitle,
    description,
    keywords: ["IA", "inteligencia artificial", "productividad", "trabajo remoto", ...keywords].join(", "),
    metadataBase: new URL(baseUrl),

    // Open Graph
    openGraph: {
      type: ogType,
      locale: "es_ES",
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
      },
    },

    // Canonical URL
    ...(canonicalUrl && { alternates: { canonical: canonicalUrl } }),
  }

  // Add article-specific metadata if applicable
  if (ogType === "article") {
    if (metadata.openGraph) {
      metadata.openGraph.publishedTime = publishedTime
      metadata.openGraph.modifiedTime = modifiedTime
      metadata.openGraph.authors = authors?.map((author) => author.name)
      metadata.openGraph.section = section
    }
  }

  // Add alternate languages if provided
  if (alternateLanguages && Object.keys(alternateLanguages).length > 0) {
    metadata.alternates = {
      ...metadata.alternates,
      languages: alternateLanguages,
    }
  }

  return metadata
}
