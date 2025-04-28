interface ResourcesCollectionSchemaProps {
  title: string
  description: string
  resources: Array<{
    title: string
    description: string
    slug: string
    category?: string
    imageUrl?: string
    readTime?: string
    featured?: boolean
  }>
  categories: Array<{
    id: string
    label: string
  }>
}

export default function ResourcesCollectionSchema({
  title,
  description,
  resources,
  categories,
}: ResourcesCollectionSchemaProps) {
  const baseUrl = "https://neuroworkai.com"

  // Si no hay recursos, simplemente devolvemos un esquema básico de CollectionPage
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    description: description,
    url: `${baseUrl}/recursos`,
    // Si hay recursos, incluimos mainEntity, de lo contrario omitimos esta propiedad
    ...(resources.length > 0 && {
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
            ...(resource.category && { articleSection: resource.category }),
            ...(resource.readTime && {
              timeRequired: resource.readTime.replace(/\s+min/, "M").replace(/\s+/, ""),
            }),
          },
        })),
      },
    }),
    // Add breadcrumbs
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "WebPage",
            "@id": baseUrl,
            name: "Inicio",
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "WebPage",
            "@id": `${baseUrl}/recursos`,
            name: "Recursos",
          },
        },
      ],
    },
    // Add information about categories as offers
    offers: {
      "@type": "AggregateOffer",
      offerCount: categories.length,
      offers: categories.map((category) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: category.label,
          url: `${baseUrl}/recursos?categoria=${category.id}`,
        },
      })),
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
}
