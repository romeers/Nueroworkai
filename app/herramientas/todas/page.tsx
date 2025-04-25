import dynamic from 'next/dynamic'
import { Suspense } from 'react'

// Dynamically import the client component with no SSR
const TodasLasHerramientasDynamic = dynamic(
  () => import('./todas-client'),
  { ssr: false }
)

export default function TodasLasHerramientasPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center">Cargando herramientas...</div>}>
      <TodasLasHerramientasDynamic />
    </Suspense>
  )
}
