interface ResourceSchemaProps {
  resource: {
    title: string
    description: string
    datePublished?: string
    dateModified?: string
    imageUrl?: string
    slug: string
    category?: string
    author?: {
      name: string
      url?: string
    }
  }
}

export default function ResourceSchema({ resource }: ResourceSchemaProps) {
  const baseUrl = "https://neuroworkai.com"

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: resource.title,
    description: resource.description,
    image: resource.imageUrl ? `${baseUrl}${resource.imageUrl}` : `${baseUrl}/neural-network-head.png`,
    datePublished: resource.datePublished || new Date().toISOString(),
    dateModified: resource.dateModified || new Date().toISOString(),
    author: {
      "@type": "Person",
      name: resource.author?.name || "NeuroWorkAI",
      url: resource.author?.url || baseUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "NeuroWorkAI",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/recursos/${resource.slug}`,
    },
    ...(resource.category && {
      articleSection: resource.category,
    }),
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
}
