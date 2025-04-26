import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
      <h1 className="text-4xl font-bold mb-6">NeuroWorkAI</h1>
      <p className="text-xl mb-8 max-w-2xl">
        Herramientas de IA para aumentar tu productividad y optimizar tu flujo de trabajo.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
        <Link href="/herramientas-ia" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-2">Herramientas IA</h2>
          <p>Descubre las mejores herramientas de IA para tu trabajo.</p>
        </Link>
        <Link href="/recursos" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-2">Recursos</h2>
          <p>Guías, plantillas y recursos para maximizar tu productividad.</p>
        </Link>
        <Link href="/sobre-nosotros" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-2">Sobre Nosotros</h2>
          <p>Conoce más sobre NeuroWorkAI y nuestra misión.</p>
        </Link>
      </div>
    </div>
  )
}
