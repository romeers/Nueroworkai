interface ToolsCollectionSchemaProps {
  title: string
  description: string
  tools: Array<{
    name: string
    slug?: string
    description?: string
    imageUrl?: string
    category?: string
  }>
}

export default function ToolsCollectionSchema({ title, description, tools }: ToolsCollectionSchemaProps) {
  const baseUrl = "https://neuroworkai.com"

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    description: description,
    url: `${baseUrl}/herramientas-ia`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: tools.map((tool, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "SoftwareApplication",
          name: tool.name,
          description: tool.description || `Herramienta de IA: ${tool.name}`,
          applicationCategory: "ProductivityApplication",
          operatingSystem: "Web",
          url: tool.slug ? `${baseUrl}/herramientas/${tool.slug}` : undefined,
          ...(tool.imageUrl && {
            image: tool.imageUrl.startsWith("http") ? tool.imageUrl : `${baseUrl}${tool.imageUrl}`,
          }),
        },
      })),
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
}
