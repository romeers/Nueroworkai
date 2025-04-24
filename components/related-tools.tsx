import ToolCard from "@/components/tool-card"

interface Tool {
  name: string
  description: string
  imageUrl?: string
  category: string
  slug: string
  score?: number
}

interface RelatedToolsProps {
  currentTool: string
  category: string
  tools: Tool[]
}

export default function RelatedTools({ currentTool, category, tools }: RelatedToolsProps) {
  // Filtrar para no mostrar la herramienta actual
  const filteredTools = tools.filter((tool) => tool.name !== currentTool).slice(0, 3)

  if (filteredTools.length === 0) {
    return null
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {filteredTools.map((tool) => (
        <ToolCard
          key={tool.slug}
          name={tool.name}
          description={tool.description}
          imageUrl={tool.imageUrl}
          category={tool.category}
          url={`/herramientas/${tool.slug}`}
          score={tool.score}
        />
      ))}
    </div>
  )
}
