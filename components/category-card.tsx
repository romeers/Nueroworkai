import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

interface CategoryCardProps {
  name: string
  description: string
  slug: string
  icon: string
  toolCount: number
}

export default function CategoryCard({ name, description, slug, icon, toolCount }: CategoryCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-200 hover:shadow-lg h-full">
      <CardContent className="p-5 md:p-6">
        <div className="mb-4 flex items-center">
          <span className="mr-3 text-3xl md:text-4xl">{icon}</span>
          <h3 className="text-lg md:text-xl font-bold text-secondary">{name}</h3>
        </div>
        <p className="text-gray-600 text-sm md:text-base">{description}</p>
      </CardContent>
      <CardFooter className="bg-gray-50 p-4 flex justify-between items-center">
        <span className="text-sm text-gray-500">{toolCount} herramientas</span>
        <Link
          href={`/herramientas/categoria/${slug}`}
          className="text-primary hover:text-primary/80 font-medium text-sm inline-flex items-center"
          aria-label={`Ver herramientas de ${name}`}
        >
          Ver herramientas <ArrowRight className="ml-1 h-3 w-3" />
        </Link>
      </CardFooter>
    </Card>
  )
}
