import { Suspense } from "react"
import { ImageManagerClient } from "./client"

export const metadata = {
  title: "Gestión de Imágenes | NeuroWorkAI Admin",
  description: "Panel de administración para gestionar imágenes del sitio",
}

export default function ImageManagerPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Gestión de Imágenes</h1>

      <div className="bg-white rounded-lg shadow-md p-6">
        <Suspense fallback={<div>Cargando...</div>}>
          <ImageManagerClient />
        </Suspense>
      </div>
    </div>
  )
}
