"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ReviewError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Opcional: Log del error a un servicio de análisis
    console.error("Review page error:", error)
  }, [error])

  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-3xl font-bold text-secondary mb-4">Reseña no encontrada</h1>
      <p className="text-gray-600 mb-8">
        Lo sentimos, no pudimos encontrar la reseña que estás buscando o ha ocurrido un error.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button onClick={reset} variant="outline">
          Intentar de nuevo
        </Button>
        <Button asChild className="bg-primary hover:bg-primary/90">
          <Link href="/resenas">Ver todas las reseñas</Link>
        </Button>
      </div>
    </div>
  )
}
