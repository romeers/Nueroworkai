import type React from "react"
import { Pencil, FileText, Brain, Zap, Users, BarChart } from "lucide-react"

interface UseCase {
  title: string
  description: string
  icon?: string
  steps?: string[]
}

interface UseCaseCardProps {
  useCase: UseCase
}

export default function UseCaseCard({ useCase }: UseCaseCardProps) {
  // Mapeo de nombres de iconos a componentes
  const iconMap: Record<string, React.ReactNode> = {
    Pencil: <Pencil className="h-5 w-5" />,
    FileText: <FileText className="h-5 w-5" />,
    Brain: <Brain className="h-5 w-5" />,
    Zap: <Zap className="h-5 w-5" />,
    Users: <Users className="h-5 w-5" />,
    BarChart: <BarChart className="h-5 w-5" />,
  }

  // Obtener el icono o usar un valor predeterminado
  const icon = useCase.icon && iconMap[useCase.icon] ? iconMap[useCase.icon] : <Zap className="h-5 w-5" />

  return (
    <div className="rounded-lg border bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md">
      <div className="mb-4 flex items-center">
        <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-secondary">{useCase.title}</h3>
      </div>
      <p className="text-gray-600">{useCase.description}</p>

      {useCase.steps && useCase.steps.length > 0 && (
        <div className="mt-4">
          <h4 className="text-sm font-medium text-secondary mb-2">Cómo implementarlo:</h4>
          <ol className="space-y-2">
            {useCase.steps.map((step, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary">
                  {index + 1}
                </span>
                <span className="text-sm text-gray-600">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  )
}
