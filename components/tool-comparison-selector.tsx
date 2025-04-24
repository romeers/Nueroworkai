"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useRouter } from "next/navigation"

// Lista de herramientas disponibles para comparar
const availableTools = [
  { id: "notion-ai", name: "Notion AI", category: "Escritura IA" },
  { id: "jasper", name: "Jasper", category: "Escritura IA" },
  { id: "grammarly", name: "Grammarly", category: "Escritura IA" },
  { id: "zapier", name: "Zapier", category: "Automatización" },
  { id: "make", name: "Make", category: "Automatización" },
  { id: "ifttt", name: "IFTTT", category: "Automatización" },
  { id: "clickup", name: "ClickUp", category: "Gestión de tareas" },
  { id: "asana", name: "Asana", category: "Gestión de tareas" },
  { id: "notion", name: "Notion", category: "Gestión de tareas" },
  { id: "fireflies", name: "Fireflies", category: "Reuniones" },
  { id: "otter-ai", name: "Otter.ai", category: "Reuniones" },
  { id: "fathom", name: "Fathom", category: "Reuniones" },
]

export default function ToolComparisonSelector() {
  const [selectedTools, setSelectedTools] = useState<string[]>(["", ""])
  const router = useRouter()

  const handleToolChange = (value: string, index: number) => {
    const newSelectedTools = [...selectedTools]
    newSelectedTools[index] = value
    setSelectedTools(newSelectedTools)
  }

  const addTool = () => {
    if (selectedTools.length < 4) {
      setSelectedTools([...selectedTools, ""])
    }
  }

  const removeTool = (index: number) => {
    if (selectedTools.length > 2) {
      const newSelectedTools = [...selectedTools]
      newSelectedTools.splice(index, 1)
      setSelectedTools(newSelectedTools)
    }
  }

  const compareTools = () => {
    // Filtrar herramientas seleccionadas y válidas
    const validTools = selectedTools.filter((tool) => tool !== "")

    if (validTools.length >= 2) {
      // Crear URL para la comparación
      const compareUrl = `/comparativas/${validTools.join("-vs-")}`
      router.push(compareUrl)
    }
  }

  const isCompareDisabled = selectedTools.filter((tool) => tool !== "").length < 2

  return (
    <div className="rounded-lg border bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold text-secondary">Selecciona las herramientas a comparar</h3>

      <div className="space-y-4">
        {selectedTools.map((selectedTool, index) => (
          <div key={index} className="flex items-center gap-2">
            <Select value={selectedTool} onValueChange={(value) => handleToolChange(value, index)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecciona una herramienta" />
              </SelectTrigger>
              <SelectContent>
                {availableTools.map((tool) => (
                  <SelectItem key={tool.id} value={tool.id}>
                    {tool.name} ({tool.category})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {index >= 2 && (
              <Button variant="outline" size="icon" onClick={() => removeTool(index)} className="flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
                <span className="sr-only">Eliminar</span>
              </Button>
            )}
          </div>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {selectedTools.length < 4 && (
          <Button variant="outline" onClick={addTool} className="text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-1 h-4 w-4"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5v14"></path>
            </svg>
            Añadir otra herramienta
          </Button>
        )}

        <Button onClick={compareTools} disabled={isCompareDisabled} className="ml-auto bg-primary hover:bg-primary/90">
          Comparar herramientas
        </Button>
      </div>

      <p className="mt-4 text-xs text-gray-500">Puedes comparar entre 2 y 4 herramientas simultáneamente.</p>
    </div>
  )
}
