import ToolCard from "@/components/tool-card"

// Datos de ejemplo para las herramientas (puedes reemplazar esto con datos reales de la API)
const tools = [
  {
    id: 1,
    name: "Notion AI",
    description: "Asistente de escritura y organización con IA integrada en Notion.",
    imageUrl: "/notion-ai-blue.png",
    category: "Escritura IA",
    url: "#",
    featured: true,
  },
  {
    id: 2,
    name: "Zapier",
    description: "Automatiza tareas entre aplicaciones sin necesidad de código.",
    imageUrl: "/zapier-blue-background.png",
    category: "Automatización",
    url: "#",
    featured: true,
  },
  {
    id: 3,
    name: "ClickUp",
    description: "Plataforma todo en uno para gestión de proyectos con funciones de IA.",
    imageUrl: "/clickup-blue-background.png",
    category: "Gestión de tareas",
    url: "#",
    featured: true,
  },
  // Más herramientas...
]

export default function ToolsGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {tools.map((tool) => (
        <ToolCard
          key={tool.id}
          name={tool.name}
          description={tool.description}
          imageUrl={tool.imageUrl}
          category={tool.category}
          url={tool.url}
          featured={tool.featured}
          slug={tool.name.toLowerCase().replace(/\s+/g, "-")}
        />
      ))}
    </div>
  )
}
