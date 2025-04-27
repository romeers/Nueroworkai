import type { Tool, Resource, Category, Comparison } from "@/types"

interface SchemaGeneratorProps {
  type: "tool" | "resource" | "category" | "comparison" | "home" | "about"
  data?: Tool | Resource | Category | Comparison
  url: string
}

export default function SchemaGenerator({ type, data, url }: SchemaGeneratorProps) {
  let schemaData: any = {}

  switch (type) {
    case "tool":
      if (!data) break
      const tool = data as Tool

      schemaData = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: tool.name,
        description: tool.description,
        applicationCategory: "ProductivityApplication",
        operatingSystem: "Web",
        offers: {
          "@type": "Offer",
          price: tool.pricing && tool.pricing[0] ? tool.pricing[0].price.replace(/[^\d.]/g, "") : "0",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: tool.neuroScore?.overall || "0",
          bestRating: "10",
          worstRating: "1",
          ratingCount: tool.reviews?.length || "5",
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
        url: url,
      }
      break

    case "resource":
      if (!data) break
      const resource = data as Resource

      schemaData = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: resource.title,
        description: resource.description,
        image: `https://neuroworkai.com${resource.imageUrl || "/placeholder.svg"}`,
        datePublished: resource.publishDate,
        dateModified: resource.updateDate || resource.publishDate,
        author: {
          "@type": "Person",
          name: resource.author?.name || "NeuroWorkAI",
        },
        publisher: {
          "@type": "Organization",
          name: "NeuroWorkAI",
          logo: {
            "@type": "ImageObject",
            url: "https://neuroworkai.com/logo.png",
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": url,
        },
      }
      break

    case "category":
      if (!data) break
      const category = data as Category

      schemaData = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: category.name,
        description: category.description,
        url: url,
        mainEntity: {
          "@type": "ItemList",
          itemListElement: category.tools?.map((tool, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": "SoftwareApplication",
              name: tool.name,
              description: tool.description,
              url: `https://neuroworkai.com/herramientas/${tool.slug}`,
            },
          })),
        },
      }
      break

    case "comparison":
      if (!data) break
      const comparison = data as Comparison

      schemaData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: comparison.title,
        description: comparison.description,
        url: url,
        mainEntity: {
          "@type": "ItemList",
          itemListElement: comparison.tools?.map((tool, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": "SoftwareApplication",
              name: tool.name,
              description: tool.description,
              url: `https://neuroworkai.com/herramientas/${tool.slug}`,
            },
          })),
        },
      }
      break

    case "home":
      schemaData = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "NeuroWorkAI",
        description: "Herramientas de IA para Profesionales Remotos",
        url: "https://neuroworkai.com",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://neuroworkai.com/buscar?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      }
      break

    case "about":
      schemaData = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        name: "Sobre NeuroWorkAI",
        description: "Plataforma líder en análisis y comparativas de herramientas de IA para profesionales remotos",
        url: url,
        mainEntity: {
          "@type": "Organization",
          name: "NeuroWorkAI",
          logo: {
            "@type": "ImageObject",
            url: "https://neuroworkai.com/logo.png",
          },
          url: "https://neuroworkai.com",
          sameAs: ["https://twitter.com/neuroworkai", "https://www.linkedin.com/company/neuroworkai"],
        },
      }
      break
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
}
