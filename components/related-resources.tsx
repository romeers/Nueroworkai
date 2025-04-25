import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

interface RelatedResource {
  title: string
  slug: string
  category: string
}

interface RelatedResourcesProps {
  resources: RelatedResource[]
}

export default function RelatedResources({ resources }: RelatedResourcesProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {resources.map((resource) => (
        <Link
          key={resource.slug}
          href={`/recursos/${resource.slug}`}
          className="group rounded-lg border p-6 hover:border-primary/20 hover:bg-primary/5 transition-colors"
        >
          <Badge className="mb-3 bg-primary/10 text-primary hover:bg-primary/20">{resource.category}</Badge>
          <h3 className="font-semibold text-secondary group-hover:text-primary transition-colors mb-4">
            {resource.title}
          </h3>
          <span className="text-primary text-sm font-medium flex items-center">
            Leer más
            <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
          </span>
        </Link>
      ))}
    </div>
  )
}
