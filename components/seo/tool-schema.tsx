export default function ToolSchema({ tool, slug }: { tool: any; slug: string }) {
  // Crear el objeto Schema.org para la herramienta
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: tool.name,
    description: tool.description,
    applicationCategory: "ProductivityApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: tool.pricing && tool.pricing[0] ? tool.pricing[0].price.replace(/[^\d.]/g, "") : "",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: tool.neuroScore.overall,
      bestRating: "10",
      worstRating: "1",
      ratingCount: tool.reviews ? tool.reviews.length : 5,
    },
    review: tool.reviews
      ? tool.reviews.map((review: any) => ({
          "@type": "Review",
          author: {
            "@type": "Person",
            name: review.author,
          },
          datePublished: review.date,
          reviewBody: review.comment,
          name: review.title,
          reviewRating: {
            "@type": "Rating",
            ratingValue: review.rating,
            bestRating: "5",
            worstRating: "1",
          },
        }))
      : [],
    image: `https://neuroworkai.com${tool.imageUrl || "/placeholder.svg"}`,
    url: `https://neuroworkai.com/herramientas/${slug}`,
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
}
