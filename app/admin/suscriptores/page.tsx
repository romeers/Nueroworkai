import { sql } from "@/lib/db-config"

export const dynamic = "force-dynamic"

async function getSubscribers() {
  try {
    // Verificar si la tabla existe
    const tableExists = await sql`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_name = 'subscribers'
      );
    `

    if (!tableExists[0].exists) {
      return { success: false, message: "La tabla 'subscribers' no existe" }
    }

    // Obtener suscriptores
    const subscribers = await sql`
      SELECT id, email, name, created_at
      FROM subscribers
      ORDER BY created_at DESC
    `

    return { success: true, subscribers }
  } catch (error) {
    console.error("Error al obtener suscriptores:", error)
    return { success: false, message: String(error) }
  }
}

export default async function SubscribersPage() {
  const result = await getSubscribers()

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Lista de Suscriptores</h1>

      {!result.success ? (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <p>{result.message || "Error al cargar suscriptores"}</p>
        </div>
      ) : result.subscribers.length === 0 ? (
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded">
          <p>No hay suscriptores registrados todavía.</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b">ID</th>
                <th className="px-4 py-2 border-b">Email</th>
                <th className="px-4 py-2 border-b">Nombre</th>
                <th className="px-4 py-2 border-b">Fecha de registro</th>
              </tr>
            </thead>
            <tbody>
              {result.subscribers.map((subscriber) => (
                <tr key={subscriber.id}>
                  <td className="px-4 py-2 border-b">{subscriber.id}</td>
                  <td className="px-4 py-2 border-b">{subscriber.email}</td>
                  <td className="px-4 py-2 border-b">{subscriber.name || "-"}</td>
                  <td className="px-4 py-2 border-b">{new Date(subscriber.created_at).toLocaleString("es-ES")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
