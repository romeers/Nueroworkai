import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">Página no encontrada</h2>
      <p className="text-gray-600 mb-8">Lo sentimos, la página que estás buscando no existe o ha sido movida.</p>
      <Link href="/" className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
        Volver al inicio
      </Link>
    </div>
  )
}
