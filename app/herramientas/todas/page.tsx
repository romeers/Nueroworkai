import { Suspense } from "react"
import { Skeleton } from "@/components/ui/skeleton"
import TodasLasHerramientasClient from "./client"

export const metadata = {
  title: "Todas las Herramientas IA | NeuroWorkAI",
  description:
    "Explora nuestra colección completa de herramientas de IA para profesionales remotos. Encuentra la herramienta perfecta para mejorar tu productividad.",
}

export default function TodasLasHerramientasPage() {
  return (
    <Suspense
      fallback={
        <div className="container mx-auto px-4 py-12">
          <h1 className="mb-8 text-3xl font-bold text-center">Todas las Herramientas IA</h1>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array(9)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="rounded-lg border p-4">
                  <Skeleton className="h-12 w-12 rounded-full mb-4" />
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full mb-4" />
                  <Skeleton className="h-4 w-2/3 mb-2" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              ))}
          </div>
        </div>
      }
    >
      <TodasLasHerramientasClient />
    </Suspense>
  )
}
