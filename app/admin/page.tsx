import Link from "next/link"

export default function AdminPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Panel de Administración</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link
          href="/admin/suscriptores"
          className="block p-6 bg-white rounded-lg border border-gray-200 hover:bg-gray-50"
        >
          <h2 className="text-xl font-semibold mb-2">Suscriptores</h2>
          <p className="text-gray-600">Gestiona los suscriptores del newsletter</p>
        </Link>

        <Link
          href="/admin/descargas-kit"
          className="block p-6 bg-white rounded-lg border border-gray-200 hover:bg-gray-50"
        >
          <h2 className="text-xl font-semibold mb-2">Descargas Kit</h2>
          <p className="text-gray-600">Ver las descargas del kit digital</p>
        </Link>

        <Link href="/admin/mensajes" className="block p-6 bg-white rounded-lg border border-gray-200 hover:bg-gray-50">
          <h2 className="text-xl font-semibold mb-2">Mensajes de Contacto</h2>
          <p className="text-gray-600">Ver los mensajes recibidos a través del formulario de contacto</p>
        </Link>

        <Link
          href="/admin/database-restore"
          className="block p-6 bg-white rounded-lg border border-gray-200 hover:bg-gray-50"
        >
          <h2 className="text-xl font-semibold mb-2">Restaurar Base de Datos</h2>
          <p className="text-gray-600">Inicializar el esquema y datos de la base de datos</p>
        </Link>

        <Link
          href="/admin/diagnostics"
          className="block p-6 bg-white rounded-lg border border-gray-200 hover:bg-gray-50"
        >
          <h2 className="text-xl font-semibold mb-2">Diagnósticos</h2>
          <p className="text-gray-600">Ejecutar diagnósticos del sitio</p>
        </Link>
      </div>
    </div>
  )
}
