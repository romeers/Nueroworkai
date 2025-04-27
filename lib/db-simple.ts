import { neon } from "@neondatabase/serverless"

// Función simple para obtener conexión a la base de datos
export function getDbConnection() {
  if (!process.env.DATABASE_URL) {
    console.warn("DATABASE_URL no está definida. Las operaciones de base de datos no funcionarán.")
    return null
  }

  return neon(process.env.DATABASE_URL)
}

// Función de utilidad para ejecutar consultas con manejo de errores
export async function executeQuery(query: string, params: any[] = []) {
  const sql = getDbConnection()
  if (!sql) return null

  try {
    return await sql(query, params)
  } catch (error) {
    console.error("Error al ejecutar consulta:", error)
    console.error("Query:", query)
    return null
  }
}
