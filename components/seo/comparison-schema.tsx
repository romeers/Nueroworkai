interface ComparisonSchemaProps {
  title: string
  description: string
  slug: string
  tools: Array<{
    name: string
    slug: string
  }>
}

export default function ComparisonSchema({ title, description, slug, tools }: ComparisonSchemaProps) {
  const baseUrl = "https://neuroworkai.com"

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    image: `${baseUrl}/neural-network-head.png`,
    datePublished: new Date().toISOString(),
    dateModified: new Date().toISOString(),
    author: {
      "@type": "Organization",
      name: "NeuroWorkAI",
      url: baseUrl,
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
      "@id": `${baseUrl}/herramientas/comparar/${slug}`,
    },
    about: tools.map((tool) => ({
      "@type": "SoftwareApplication",
      name: tool.name,
      url: `${baseUrl}/herramientas/${tool.slug}`,
    })),
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
}
