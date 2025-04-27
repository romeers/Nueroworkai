interface ToolSchemaProps {
  tools: any[]
  baseUrl: string
}

export default function ToolsSchema({ tools, baseUrl = "https://neuroworkai.com" }: ToolSchemaProps) {
  // Schema.org structured data para la lista de herramientas
  const toolListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: tools.map((tool, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "SoftwareApplication",
        name: tool.name,
        description: tool.description,
        image: tool.image_url?.startsWith("http") ? tool.image_url : `${baseUrl}${tool.image_url}`,
        applicationCategory: "ProductivityApplication",
        url: `${baseUrl}/herramientas/${tool.slug}`,
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "EUR",
        },
        ...(tool.score && {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: tool.score,
            bestRating: "10",
            worstRating: "1",
            ratingCount: Math.floor(tool.score * 10), // Estimación de número de reseñas
          },
        }),
      },
    })),
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolListSchema) }} />
}
