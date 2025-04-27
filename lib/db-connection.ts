import { neon, neonConfig } from "@neondatabase/serverless"
import { Pool } from "@neondatabase/serverless"
import { captureError } from "./error-handling"

// Configuración global de neon
neonConfig.fetchConnectionCache = true

// Variable para almacenar la conexión en caché
let cachedConnection: ReturnType<typeof neon> | null = null
let cachedPool: Pool | null = null

/**
 * Obtiene una conexión a la base de datos usando neon
 */
export function getDbConnection() {
  if (!process.env.DATABASE_URL) {
    console.warn("DATABASE_URL no está definida. Usando modo sin base de datos.")
    return mockDbConnection()
  }

  // Limpiar la cadena de conexión para eliminar cualquier carácter no deseado
  const connectionString = process.env.DATABASE_URL.trim().replace(/^=/, "")

  if (cachedConnection) {
    return cachedConnection
  }

  try {
    cachedConnection = neon(connectionString)
    return cachedConnection
  } catch (error) {
    console.error("Error al conectar con la base de datos:", error)
    captureError(error, { context: "getDbConnection" })
    return mockDbConnection()
  }
}

/**
 * Obtiene un pool de conexiones para operaciones más complejas
 */
export function getDbPool() {
  if (!process.env.DATABASE_URL) {
    console.warn("DATABASE_URL no está definida. Usando modo sin base de datos.")
    return null
  }

  // Limpiar la cadena de conexión para eliminar cualquier carácter no deseado
  const connectionString = process.env.DATABASE_URL.trim().replace(/^=/, "")

  if (cachedPool) {
    return cachedPool
  }

  try {
    cachedPool = new Pool({ connectionString })
    return cachedPool
  } catch (error) {
    console.error("Error al crear pool de conexiones:", error)
    captureError(error, { context: "getDbPool" })
    return null
  }
}

/**
 * Cierra las conexiones a la base de datos
 */
export async function closeDbConnections() {
  if (cachedPool) {
    await cachedPool.end()
    cachedPool = null
  }

  cachedConnection = null
}

/**
 * Conexión simulada para cuando no hay base de datos
 */
function mockDbConnection() {
  return async (query: string, ...params: any[]) => {
    console.warn(`Consulta simulada: ${query}`)
    console.warn("Parámetros:", params)
    return []
  }
}

/**
 * Ejecuta una consulta con manejo de errores
 */
export async function executeQuery(query: string, params: any[] = []) {
  const sql = getDbConnection()

  try {
    return await sql(query, ...params)
  } catch (error) {
    captureError(error, { query, params, context: "executeQuery" })
    throw error
  }
}

/**
 * Ejecuta una transacción con múltiples consultas
 */
export async function executeTransaction(queries: { query: string; params?: any[] }[]) {
  const pool = getDbPool()

  if (!pool) {
    throw new Error("No se pudo obtener el pool de conexiones")
  }

  const client = await pool.connect()

  try {
    await client.query("BEGIN")

    const results = []
    for (const { query, params = [] } of queries) {
      const result = await client.query(query, params)
      results.push(result)
    }

    await client.query("COMMIT")
    return results
  } catch (error) {
    await client.query("ROLLBACK")
    captureError(error, { queries, context: "executeTransaction" })
    throw error
  } finally {
    client.release()
  }
}
