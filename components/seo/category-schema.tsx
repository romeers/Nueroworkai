interface CategorySchemaProps {
  category: {
    name: string
    description: string
    slug: string
  }
  tools?: Array<{
    name: string
    slug: string
  }>
}

export default function CategorySchema({ category, tools = [] }: CategorySchemaProps) {
  const baseUrl = "https://neuroworkai.com"

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `Herramientas de ${category.name}`,
    description: category.description,
    url: `${baseUrl}/herramientas/categoria/${category.slug}`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: tools.map((tool, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${baseUrl}/herramientas/${tool.slug}`,
        name: tool.name,
      })),
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
}
