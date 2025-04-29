import UnifiedToolCard from "@/components/unified-tool-card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface Tool {
  id?: string
  slug: string
  name: string
  description: string
  imageUrl?: string
  category: string
  score?: number
  affiliateUrl?: string
  featured?: boolean
  isNew?: boolean
}

interface FeaturedToolsSectionProps {
  title: string
  subtitle: string
  tools: Tool[]
  viewAllLink: string
  viewAllText: string
  emptyStateTitle?: string
  emptyStateDescription?: string
  emptyStateAction?: {
    text: string
    href: string
  }
}

export default function FeaturedToolsSection({
  title,
  subtitle,
  tools,
  viewAllLink,
  viewAllText,
  emptyStateTitle = "Próximamente nuevas herramientas",
  emptyStateDescription = "Estamos seleccionando cuidadosamente las mejores herramientas de IA para trabajo remoto.",
  emptyStateAction = {
    text: "Sugerir una herramienta",
    href: "/contacto",
  },
}: FeaturedToolsSectionProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-10">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-secondary sm:text-4xl">{title}</h2>
          <p className="mt-4 text-lg text-gray-600">{tools.length > 0 ? subtitle : emptyStateDescription}</p>
        </div>

        {tools.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <UnifiedToolCard
                key={tool.id || tool.slug}
                name={tool.name}
                description={tool.description}
                imageUrl={tool.imageUrl}
                category={tool.category}
                slug={tool.slug}
                score={tool.score}
                affiliateUrl={tool.affiliateUrl}
                featured={tool.featured}
                isNew={tool.isNew}
                variant="grid"
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm p-10 text-center">
            <div className="mb-6">
              <div className="mx-auto w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-violet-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">{emptyStateTitle}</h3>
            <p className="text-gray-500 mb-6">
              {emptyStateDescription}
              <br />
              Vuelve pronto para descubrir nuestras recomendaciones.
            </p>
            <Button asChild className="bg-violet-600 hover:bg-violet-700">
              <Link href={emptyStateAction.href}>{emptyStateAction.text}</Link>
            </Button>
          </div>
        )}

        <div className="mt-12 text-center">
          <Button asChild className="bg-violet-600 hover:bg-violet-700 px-6 py-2.5">
            <Link href={viewAllLink} className="inline-flex items-center gap-2">
              {viewAllText}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
