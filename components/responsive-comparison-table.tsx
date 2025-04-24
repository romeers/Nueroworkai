"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, X, ChevronDown, ChevronUp } from "lucide-react"
import SafeImage from "@/components/safe-image"

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

interface ResponsiveComparisonTableProps {
  category: string
  tools: Tool[]
  features: string[]
}

export default function ResponsiveComparisonTable({ category, tools, features }: ResponsiveComparisonTableProps) {
  const [expandedTool, setExpandedTool] = useState<string | null>(null)

  const toggleExpand = (toolName: string) => {
    if (expandedTool === toolName) {
      setExpandedTool(null)
    } else {
      setExpandedTool(toolName)
    }
  }

  return (
    <div>
      {/* Desktop version - visible on md screens and up */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full min-w-full divide-y divide-gray-200 rounded-lg border">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
              >
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
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
              >
                Precio
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
              >
                Valoración
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
              >
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
                      <SafeImage
                        src={tool.logo}
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
                      <Link href={`/herramientas/${tool.name.toLowerCase().replace(/\s+/g, "-")}`}>Ver análisis</Link>
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

      {/* Mobile version - visible on small screens */}
      <div className="md:hidden space-y-6">
        {tools.map((tool) => (
          <div key={tool.name} className="rounded-lg border bg-white shadow-sm overflow-hidden">
            <div
              className="flex items-center justify-between p-4 cursor-pointer"
              onClick={() => toggleExpand(tool.name)}
            >
              <div className="flex items-center">
                <div className="h-10 w-10 flex-shrink-0 mr-3">
                  <SafeImage
                    src={tool.logo}
                    alt={tool.name}
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full object-contain"
                  />
                </div>
                <div>
                  <div className="font-medium text-secondary">{tool.name}</div>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`h-4 w-4 ${i < tool.rating ? "text-yellow-400" : "text-gray-300"}`}
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
                    <span className="ml-1 text-xs text-gray-600">{tool.rating}/5</span>
                  </div>
                </div>
              </div>
              {expandedTool === tool.name ? (
                <ChevronUp className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500" />
              )}
            </div>

            {expandedTool === tool.name && (
              <div className="border-t px-4 py-3">
                <div className="mb-3">
                  <div className="text-sm font-medium text-gray-500">Precio:</div>
                  <div className="text-sm">{tool.price}</div>
                </div>

                <div className="mb-3">
                  <div className="text-sm font-medium text-gray-500 mb-2">Características:</div>
                  <ul className="space-y-2">
                    {features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm">
                        {tool.features[feature] ? (
                          <Check className="h-4 w-4 text-green-500 mr-2" />
                        ) : (
                          <X className="h-4 w-4 text-red-500 mr-2" />
                        )}
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col space-y-2 pt-2">
                  <Button asChild variant="outline" size="sm">
                    <Link href={`/herramientas/${tool.name.toLowerCase().replace(/\s+/g, "-")}`}>Ver análisis</Link>
                  </Button>
                  <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
                    <Link href={tool.url} target="_blank" rel="noopener noreferrer">
                      Probar gratis
                    </Link>
                  </Button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
