import type { Metadata } from "next"

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  ogImage?: string
  ogType?: string
  twitterCard?: string
  canonicalUrl?: string
  noIndex?: boolean
  alternateLanguages?: Record<string, string>
}

/**
 * Genera metadatos optimizados para SEO
 */
export function generateSEOMetadata({
  title,
  description,
  keywords,
  ogImage = "/neural-network-head.png",
  ogType = "website",
  twitterCard = "summary_large_image",
  canonicalUrl,
  noIndex = false,
  alternateLanguages,
}: SEOProps): Metadata {
  // Valores por defecto
  const defaultTitle = "NeuroWorkAI - Herramientas de IA para Profesionales Remotos"
  const defaultDescription =
    "Descubre y compara las mejores herramientas de productividad con IA para profesionales remotos. Reseñas, comparativas y recursos gratuitos."
  const defaultKeywords =
    "IA, inteligencia artificial, productividad, trabajo remoto, herramientas IA, Notion AI, Zapier, ClickUp, ChatGPT"

  // Valores finales
  const finalTitle = title ? `${title} | NeuroWorkAI` : defaultTitle
  const finalDescription = description || defaultDescription
  const finalKeywords = keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords

  // Base URL
  const baseUrl = "https://neuroworkai.com"

  // Construir metadatos
  const metadata: Metadata = {
    title: finalTitle,
    description: finalDescription,
    keywords: finalKeywords,

    // Open Graph
    openGraph: {
      title: finalTitle,
      description: finalDescription,
      type: ogType,
      url: canonicalUrl || baseUrl,
      images: [
        {
          url: ogImage.startsWith("http") ? ogImage : `${baseUrl}${ogImage}`,
          width: 1200,
          height: 630,
          alt: finalTitle,
        },
      ],
      siteName: "NeuroWorkAI",
    },

    // Twitter
    twitter: {
      card: twitterCard as "summary" | "summary_large_image" | "app" | "player",
      title: finalTitle,
      description: finalDescription,
      images: [ogImage.startsWith("http") ? ogImage : `${baseUrl}${ogImage}`],
      creator: "@neuroworkai",
    },
  }

  // Canonical URL
  if (canonicalUrl) {
    metadata.alternates = {
      canonical: canonicalUrl,
    }
  }

  // Idiomas alternativos
  if (alternateLanguages) {
    if (!metadata.alternates) {
      metadata.alternates = {}
    }

    metadata.alternates.languages = {}

    Object.entries(alternateLanguages).forEach(([lang, url]) => {
      if (metadata.alternates?.languages) {
        metadata.alternates.languages[lang] = url
      }
    })
  }

  // No indexar si es necesario
  if (noIndex) {
    metadata.robots = {
      index: false,
      follow: false,
    }
  }

  return metadata
}

/**
 * Genera un schema.org estructurado para SEO
 */
export function generateStructuredData(type: string, data: Record<string, any>): string {
  const baseData = {
    "@context": "https://schema.org",
    "@type": type,
  }

  const structuredData = {
    ...baseData,
    ...data,
  }

  return JSON.stringify(structuredData)
}

/**
 * Genera un breadcrumb estructurado para SEO
 */
export function generateBreadcrumbSchema(items: { name: string; url: string }[]): string {
  const itemListElement = items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  }))

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: itemListElement,
  }

  return JSON.stringify(breadcrumbSchema)
}

/**
 * Genera un schema para una herramienta/producto
 */
export function generateProductSchema(product: {
  name: string
  description: string
  image: string
  url: string
  brand: string
  offers?: {
    price: number
    priceCurrency: string
    url: string
  }[]
  review?: {
    reviewRating: number
    reviewCount: number
  }
}): string {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.image,
    url: product.url,
    brand: {
      "@type": "Brand",
      name: product.brand,
    },
  }

  // Añadir ofertas si existen
  if (product.offers && product.offers.length > 0) {
    productSchema["offers"] = product.offers.map((offer) => ({
      "@type": "Offer",
      price: offer.price,
      priceCurrency: offer.priceCurrency,
      url: offer.url,
      availability: "https://schema.org/InStock",
    }))
  }

  // Añadir reseñas si existen
  if (product.review) {
    productSchema["aggregateRating"] = {
      "@type": "AggregateRating",
      ratingValue: product.review.reviewRating,
      reviewCount: product.review.reviewCount,
    }
  }

  return JSON.stringify(productSchema)
}
