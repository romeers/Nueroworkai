"use client"
import dynamic from "next/dynamic"
import { Skeleton } from "@/components/ui/skeleton"

// Importación dinámica del componente que usa useAuth
const ClientToolsGrid = dynamic(() => import("@/components/client-tools-grid"), {
  ssr: false,
  loading: () => <ToolsGridSkeleton />,
})

export default function TodasLasHerramientasClient() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-8 text-3xl font-bold text-center">Todas las Herramientas IA</h1>
      <ClientToolsGrid />
    </div>
  )
}

function ToolsGridSkeleton() {
  return (
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
  )
}
