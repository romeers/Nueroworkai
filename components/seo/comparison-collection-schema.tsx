export interface ComparisonCollectionSchemaProps {
  title: string
  description: string
  url: string
  comparisons: Array<{
    title: string
    description: string
    slug: string
    tools?: Array<{
      name: string
      slug: string
    }>
  }>
}

export default function ComparisonCollectionSchema({
  title,
  description,
  url,
  comparisons,
}: ComparisonCollectionSchemaProps) {
  const baseUrl = "https://neuroworkai.com"

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    headline: title,
    description: description,
    url: `${baseUrl}${url}`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: comparisons.map((comparison, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Article",
          headline: comparison.title,
          description: comparison.description,
          url: `${baseUrl}/herramientas/comparar/${comparison.slug}`,
          ...(comparison.tools && {
            about: comparison.tools.map((tool) => ({
              "@type": "SoftwareApplication",
              name: tool.name,
              url: `${baseUrl}/herramientas/${tool.slug}`,
            })),
          }),
        },
      })),
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
}
