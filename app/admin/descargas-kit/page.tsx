import { getDbConnection } from "@/lib/db-connection"

export const dynamic = "force-dynamic"

async function getKitDownloads() {
  try {
    const sql = getDbConnection()
    // Verificar si la tabla existe
    const tableExists = await sql`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_name = 'kit_downloads'
      );
    `

    if (!tableExists[0].exists) {
      return { success: false, message: "La tabla 'kit_downloads' no existe" }
    }

    // Obtener correos
    const downloads = await sql`
      SELECT id, email, download_date
      FROM kit_downloads
      ORDER BY download_date DESC
    `

    return { success: true, downloads }
  } catch (error) {
    console.error("Error al obtener descargas:", error)
    return { success: false, message: String(error) }
  }
}

export default async function KitDownloadsPage() {
  const result = await getKitDownloads()

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Descargas del Kit Digital</h1>

      {!result.success ? (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <p>{result.message || "Error al cargar descargas"}</p>
        </div>
      ) : result.downloads.length === 0 ? (
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded">
          <p>No hay descargas registradas todavía.</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b">ID</th>
                <th className="px-4 py-2 border-b">Email</th>
                <th className="px-4 py-2 border-b">Fecha de descarga</th>
              </tr>
            </thead>
            <tbody>
              {result.downloads.map((download) => (
                <tr key={download.id}>
                  <td className="px-4 py-2 border-b">{download.id}</td>
                  <td className="px-4 py-2 border-b">{download.email}</td>
                  <td className="px-4 py-2 border-b">{new Date(download.download_date).toLocaleString("es-ES")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
