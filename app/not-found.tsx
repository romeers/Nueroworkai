import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
      <h1 className="text-4xl font-bold mb-6">404 - Página no encontrada</h1>
      <p className="text-xl mb-8">Lo sentimos, la página que estás buscando no existe.</p>
      <Link href="/" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
        Volver al inicio
      </Link>
    </div>
  )
}
