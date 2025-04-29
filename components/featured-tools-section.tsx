"use client"

import { useState, useEffect } from "react"
import FeaturedToolCard from "@/components/featured-tool-card"

interface Tool {
  name: string
  description: string
  imageUrl: string
  category: string
  slug: string
  score?: number
}

interface FeaturedToolsSectionProps {
  tools: Tool[]
}

export default function FeaturedToolsSection({ tools }: FeaturedToolsSectionProps) {
  const [isClient, setIsClient] = useState(false)

  // Set client-side rendering flag
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Function to get the official URL if no affiliate URL
  const getOfficialUrl = (toolName: string) => {
    const toolUrls: Record<string, string> = {
      "Notion AI": "https://www.notion.so/product/ai",
      Zapier: "https://zapier.com",
      ClickUp: "https://clickup.com",
    }
    return toolUrls[toolName] || "#"
  }

  if (!isClient) {
    // Server-side or during initial render, show a placeholder
    return (
      <div className="grid gap-8 md:grid-cols-3">
        {tools.map((tool, index) => (
          <div key={index} className="rounded-xl border bg-white p-6 shadow-md h-64 animate-pulse">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="h-24 w-24 bg-gray-200 rounded-lg"></div>
              <div className="flex-1 space-y-4">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="space-y-2">
                  <div className="h-3 bg-gray-200 rounded"></div>
                  <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                </div>
                <div className="flex space-x-3">
                  <div className="h-8 bg-gray-200 rounded w-1/2"></div>
                  <div className="h-8 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="grid gap-8 md:grid-cols-3">
      {tools.map((tool) => (
        <FeaturedToolCard
          key={tool.slug}
          name={tool.name}
          description={tool.description}
          imageUrl={tool.imageUrl}
          category={tool.category}
          url={`/herramientas/${tool.slug}`}
          score={tool.score}
          slug={tool.slug}
          affiliateUrl={getOfficialUrl(tool.name)}
        />
      ))}
    </div>
  )
}
