import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Search, BookOpen, PenToolIcon as Tool } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 py-16 text-center">
      <h1 className="text-6xl font-bold text-primary">404</h1>
      <h2 className="mt-4 text-2xl font-bold text-secondary">Página no encontrada</h2>
      <p className="mt-4 max-w-md text-gray-600">
        Lo sentimos, la página que estás buscando no existe o ha sido movida a otra ubicación.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
        <Link
          href="/"
          className="flex flex-col items-center rounded-lg border border-gray-200 p-4 transition-colors hover:bg-gray-50"
        >
          <Home className="mb-2 h-6 w-6 text-primary" />
          <span className="text-sm font-medium">Inicio</span>
        </Link>

        <Link
          href="/herramientas"
          className="flex flex-col items-center rounded-lg border border-gray-200 p-4 transition-colors hover:bg-gray-50"
        >
          <Tool className="mb-2 h-6 w-6 text-primary" />
          <span className="text-sm font-medium">Herramientas</span>
        </Link>

        <Link
          href="/guias-recursos"
          className="flex flex-col items-center rounded-lg border border-gray-200 p-4 transition-colors hover:bg-gray-50"
        >
          <BookOpen className="mb-2 h-6 w-6 text-primary" />
          <span className="text-sm font-medium">Recursos</span>
        </Link>

        <Link
          href="/herramientas/buscar"
          className="flex flex-col items-center rounded-lg border border-gray-200 p-4 transition-colors hover:bg-gray-50"
        >
          <Search className="mb-2 h-6 w-6 text-primary" />
          <span className="text-sm font-medium">Buscar</span>
        </Link>
      </div>

      <Button asChild className="mt-8 bg-primary hover:bg-primary/90">
        <Link href="/">Volver al inicio</Link>
      </Button>
    </div>
  )
}
