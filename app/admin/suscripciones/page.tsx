import { getDbConnection } from "@/lib/db-connection"

export const dynamic = "force-dynamic"
export const revalidate = 0

export default async function SubscriptionsPage() {
  const sql = getDbConnection()

  // Obtener las últimas 100 suscripciones
  const subscriptions = await sql`
    SELECT email, name, source, subscription_date, updated_at, utm_source, utm_medium, utm_campaign
    FROM subscriptions
    ORDER BY subscription_date DESC
    LIMIT 100
  `

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6">Suscripciones Recientes</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b text-left">Email</th>
              <th className="py-2 px-4 border-b text-left">Nombre</th>
              <th className="py-2 px-4 border-b text-left">Origen</th>
              <th className="py-2 px-4 border-b text-left">Fecha</th>
              <th className="py-2 px-4 border-b text-left">UTM Source</th>
              <th className="py-2 px-4 border-b text-left">UTM Medium</th>
              <th className="py-2 px-4 border-b text-left">UTM Campaign</th>
            </tr>
          </thead>
          <tbody>
            {subscriptions.map((sub, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                <td className="py-2 px-4 border-b">{sub.email}</td>
                <td className="py-2 px-4 border-b">{sub.name || "-"}</td>
                <td className="py-2 px-4 border-b">{sub.source}</td>
                <td className="py-2 px-4 border-b">{new Date(sub.subscription_date).toLocaleString("es-ES")}</td>
                <td className="py-2 px-4 border-b">{sub.utm_source || "-"}</td>
                <td className="py-2 px-4 border-b">{sub.utm_medium || "-"}</td>
                <td className="py-2 px-4 border-b">{sub.utm_campaign || "-"}</td>
              </tr>
            ))}
            {subscriptions.length === 0 && (
              <tr>
                <td colSpan={7} className="py-4 text-center text-gray-500">
                  No hay suscripciones registradas todavía.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="mt-6">
        <p className="text-sm text-gray-600">
          Mostrando las últimas {subscriptions.length} suscripciones de un total de {subscriptions.length}.
        </p>
      </div>
    </div>
  )
}
