export interface ResourceCollectionSchemaProps {
  title: string
  description: string
  url: string
  resources: Array<{
    title: string
    description: string
    slug: string
    category?: string
    imageUrl?: string
  }>
}

export default function ResourceCollectionSchema({
  title,
  description,
  url,
  resources,
}: ResourceCollectionSchemaProps) {
  const baseUrl = "https://neuroworkai.com"

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    headline: title,
    description: description,
    url: `${baseUrl}${url}`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: resources.map((resource, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Article",
          headline: resource.title,
          description: resource.description,
          url: `${baseUrl}/recursos/${resource.slug}`,
          ...(resource.imageUrl && {
            image: resource.imageUrl.startsWith("http") ? resource.imageUrl : `${baseUrl}${resource.imageUrl}`,
          }),
          ...(resource.category && {
            articleSection: resource.category,
          }),
        },
      })),
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
}
