"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { ArrowRight, ArrowLeft, Check, Mail } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import ToolCard from "@/components/tool-card"

// Definición de tipos
interface Question {
  id: string
  text: string
  options: {
    id: string
    text: string
    value: string
  }[]
}

interface Tool {
  name: string
  description: string
  imageUrl: string
  category: string
  url: string
  score: number
  tags: string[]
}

// Preguntas del quiz
const questions: Question[] = [
  {
    id: "category",
    text: "¿Qué tipo de herramienta de IA estás buscando principalmente?",
    options: [
      { id: "writing", text: "Escritura y generación de contenido", value: "escritura" },
      { id: "automation", text: "Automatización de tareas", value: "automatizacion" },
      { id: "tasks", text: "Gestión de proyectos y tareas", value: "tareas" },
      { id: "meetings", text: "Transcripción y análisis de reuniones", value: "reuniones" },
      { id: "communication", text: "Comunicación y colaboración", value: "comunicacion" },
    ],
  },
  {
    id: "experience",
    text: "¿Cuál es tu nivel de experiencia con herramientas de IA?",
    options: [
      { id: "beginner", text: "Principiante - Nunca he usado herramientas de IA", value: "principiante" },
      { id: "intermediate", text: "Intermedio - He usado algunas herramientas básicas", value: "intermedio" },
      { id: "advanced", text: "Avanzado - Uso herramientas de IA regularmente", value: "avanzado" },
    ],
  },
  {
    id: "team",
    text: "¿Usarás la herramienta individualmente o en equipo?",
    options: [
      { id: "individual", text: "Uso individual", value: "individual" },
      { id: "small-team", text: "Equipo pequeño (2-10 personas)", value: "equipo-pequeno" },
      { id: "large-team", text: "Equipo grande (más de 10 personas)", value: "equipo-grande" },
    ],
  },
  {
    id: "budget",
    text: "¿Cuál es tu presupuesto mensual aproximado?",
    options: [
      { id: "free", text: "Solo herramientas gratuitas", value: "gratis" },
      { id: "low", text: "Hasta $20/mes", value: "bajo" },
      { id: "medium", text: "Entre $20 y $50/mes", value: "medio" },
      { id: "high", text: "Más de $50/mes", value: "alto" },
    ],
  },
  {
    id: "integration",
    text: "¿Con qué otras herramientas necesitas que se integre?",
    options: [
      { id: "google", text: "Google Workspace (Gmail, Drive, etc.)", value: "google" },
      { id: "microsoft", text: "Microsoft 365 (Outlook, Teams, etc.)", value: "microsoft" },
      { id: "slack", text: "Slack y herramientas de comunicación", value: "slack" },
      { id: "other", text: "Otras o no es importante", value: "otras" },
    ],
  },
]

// Herramientas recomendadas de ejemplo
const recommendedTools: Tool[] = [
  {
    name: "Notion AI",
    description: "Asistente de escritura y organización con IA integrada en Notion.",
    imageUrl: "/notion-ai-blue.png",
    category: "Escritura IA",
    url: "/herramientas/notion-ai",
    score: 9.2,
    tags: ["escritura", "intermedio", "equipo-pequeno", "medio", "otras"],
  },
  {
    name: "Zapier",
    description: "Automatiza tareas entre aplicaciones sin necesidad de código.",
    imageUrl: "/zapier-blue-background.png",
    category: "Automatización",
    url: "/herramientas/zapier",
    score: 9.0,
    tags: ["automatizacion", "principiante", "individual", "bajo", "google"],
  },
  {
    name: "ClickUp",
    description: "Plataforma todo en uno para gestión de proyectos con funciones de IA.",
    imageUrl: "/clickup-blue-background.png",
    category: "Gestión de tareas",
    url: "/herramientas/clickup",
    score: 8.8,
    tags: ["tareas", "intermedio", "equipo-grande", "medio", "slack"],
  },
]

export default function ToolRecommendationQuiz() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const { toast } = useToast()

  const totalSteps = questions.length + 1 // +1 para el paso de email
  const progress = ((currentStep + 1) / totalSteps) * 100

  const handleAnswer = (questionId: string, value: string) => {
    setAnswers({ ...answers, [questionId]: value })
  }

  const nextStep = () => {
    if (currentStep < questions.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulación de envío
    setTimeout(() => {
      setLoading(false)
      setShowResults(true)
      toast({
        title: "¡Análisis completado!",
        description: "Hemos encontrado las herramientas perfectas para ti.",
      })
    }, 1500)
  }

  // Filtrar herramientas basadas en las respuestas
  const getRecommendedTools = () => {
    // Convertir respuestas a array de tags
    const userTags = Object.values(answers)

    // Ordenar herramientas por coincidencia de tags
    return recommendedTools
      .map((tool) => {
        const matchScore = userTags.filter((tag) => tool.tags.includes(tag)).length
        return { ...tool, matchScore }
      })
      .sort((a, b) => b.matchScore - a.matchScore)
      .slice(0, 3) // Mostrar solo las 3 mejores coincidencias
  }

  // Renderizar el paso actual
  const renderStep = () => {
    // Paso final para recopilar email
    if (currentStep === questions.length) {
      return (
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-secondary">¡Último paso!</h3>
          <p className="text-gray-600">
            Introduce tu email para recibir tus recomendaciones personalizadas y un análisis detallado.
          </p>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
      )
    }

    // Pasos de preguntas
    const question = questions[currentStep]
    return (
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-secondary">{question.text}</h3>
        <RadioGroup value={answers[question.id] || ""} onValueChange={(value) => handleAnswer(question.id, value)}>
          <div className="space-y-2">
            {question.options.map((option) => (
              <div
                key={option.id}
                className="flex items-center rounded-lg border p-3 hover:bg-gray-50 cursor-pointer"
                onClick={() => handleAnswer(question.id, option.value)}
              >
                <RadioGroupItem value={option.value} id={option.id} className="mr-3" />
                <Label htmlFor={option.id} className="flex-1 cursor-pointer">
                  {option.text}
                </Label>
              </div>
            ))}
          </div>
        </RadioGroup>
      </div>
    )
  }

  // Renderizar resultados
  const renderResults = () => {
    const recommendedTools = getRecommendedTools()

    return (
      <div className="space-y-6">
        <div className="rounded-lg bg-green-50 p-4 border border-green-200">
          <h3 className="flex items-center text-lg font-medium text-green-800">
            <Check className="mr-2 h-5 w-5" />
            ¡Análisis completado!
          </h3>
          <p className="mt-1 text-green-700">
            Basado en tus respuestas, hemos seleccionado estas herramientas que mejor se adaptan a tus necesidades.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold text-secondary">Herramientas recomendadas para ti</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {recommendedTools.map((tool) => (
              <ToolCard
                key={tool.name}
                name={tool.name}
                description={tool.description}
                imageUrl={tool.imageUrl}
                category={tool.category}
                url={tool.url}
                score={tool.score}
              />
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
          <h3 className="flex items-center text-lg font-medium text-primary">
            <Mail className="mr-2 h-5 w-5" />
            Análisis detallado enviado
          </h3>
          <p className="mt-1 text-gray-600">
            Hemos enviado un análisis más detallado a tu correo electrónico con comparativas y guías de implementación.
          </p>
        </div>
      </div>
    )
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Encuentra la herramienta de IA perfecta para ti</CardTitle>
        <CardDescription>
          Responde estas preguntas para recibir recomendaciones personalizadas basadas en tus necesidades.
        </CardDescription>
        <Progress value={progress} className="mt-2" />
      </CardHeader>
      <CardContent>{showResults ? renderResults() : renderStep()}</CardContent>
      {!showResults && (
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={prevStep} disabled={currentStep === 0}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Anterior
          </Button>
          {currentStep < questions.length ? (
            <Button
              onClick={nextStep}
              disabled={!answers[questions[currentStep]?.id]}
              className="bg-primary hover:bg-primary/90"
            >
              Siguiente
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button onClick={handleSubmit} disabled={!email || loading} className="bg-primary hover:bg-primary/90">
              {loading ? (
                <span className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Analizando...
                </span>
              ) : (
                <span className="flex items-center">
                  Ver resultados
                  <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              )}
            </Button>
          )}
        </CardFooter>
      )}
    </Card>
  )
}
