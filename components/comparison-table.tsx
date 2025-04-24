import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check, X } from "lucide-react"

interface Tool {
  name: string
  logo: string
  price: string
  features: {
    [key: string]: boolean
  }
  rating: number
  url: string
}

interface ComparisonTableProps {
  category: string
  tools: Tool[]
  features: string[]
}

export default function ComparisonTable({ category, tools, features }: ComparisonTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-full divide-y divide-gray-200 rounded-lg border">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
              Herramienta
            </th>
            {features.map((feature) => (
              <th
                key={feature}
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
              >
                {feature}
              </th>
            ))}
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
              Precio
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
              Valoración
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {tools.map((tool) => (
            <tr key={tool.name} className="hover:bg-gray-50">
              <td className="whitespace-nowrap px-6 py-4">
                <div className="flex items-center">
                  <div className="h-10 w-10 flex-shrink-0">
                    <Image
                      src={tool.logo || "/placeholder.svg"}
                      alt={tool.name}
                      width={40}
                      height={40}
                      className="h-10 w-10 rounded-full object-contain"
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-secondary">{tool.name}</div>
                  </div>
                </div>
              </td>
              {features.map((feature) => (
                <td key={`${tool.name}-${feature}`} className="whitespace-nowrap px-6 py-4">
                  {tool.features[feature] ? (
                    <Check className="h-5 w-5 text-green-500" />
                  ) : (
                    <X className="h-5 w-5 text-red-500" />
                  )}
                </td>
              ))}
              <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{tool.price}</td>
              <td className="whitespace-nowrap px-6 py-4">
                <div className="flex items-center">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`h-5 w-5 ${i < tool.rating ? "text-yellow-400" : "text-gray-300"}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 15.585l-7.07 3.707 1.35-7.87-5.72-5.573 7.91-1.149L10 0l3.53 7.7 7.91 1.149-5.72 5.573 1.35 7.87L10 15.585z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">{tool.rating}/5</span>
                </div>
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">
                <div className="flex space-x-2">
                  <Button asChild variant="outline" size="sm">
                    <Link href={`/resenas/${tool.name.toLowerCase().replace(/\s+/g, "-")}`}>Ver análisis</Link>
                  </Button>
                  <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
                    <Link href={tool.url} target="_blank" rel="noopener noreferrer">
                      Probar
                    </Link>
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
