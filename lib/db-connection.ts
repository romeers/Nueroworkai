import { neon, neonConfig } from "@neondatabase/serverless"
import { Pool } from "@neondatabase/serverless"

// Configuración global de neon
neonConfig.fetchConnectionCache = true

// Patrón singleton para la conexión a la base de datos
export class DatabaseConnection {
  private static instance: DatabaseConnection
  private sql: ReturnType<typeof neon> | null = null
  private pool: Pool | null = null
  private isConnected = false

  private constructor() {
    // Constructor privado para implementar el patrón singleton
  }

  public static getInstance(): DatabaseConnection {
    if (!DatabaseConnection.instance) {
      DatabaseConnection.instance = new DatabaseConnection()
    }
    return DatabaseConnection.instance
  }

  public async connect(): Promise<void> {
    if (this.isConnected && this.sql) return

    if (!process.env.DATABASE_URL) {
      console.warn("DATABASE_URL no está definida. Usando modo sin base de datos.")
      this.sql = this.mockDbConnection()
      this.isConnected = true
      return
    }

    try {
      // Limpiar la cadena de conexión
      const connectionString = process.env.DATABASE_URL.trim().replace(/^=/, "")

      // Inicializar la conexión SQL
      this.sql = neon(connectionString)

      // Inicializar el pool de conexiones
      this.pool = new Pool({ connectionString })

      // Verificar que la conexión funciona
      await this.sql`SELECT 1`

      this.isConnected = true
      console.log("Conexión a la base de datos establecida correctamente")
    } catch (error) {
      console.error("Error al conectar con la base de datos:", error)
      // Usar conexión simulada como fallback
      console.warn("Usando conexión simulada como fallback después de error")
      this.sql = this.mockDbConnection()
      this.isConnected = true
    }
  }

  public getConnection(): ReturnType<typeof neon> {
    if (!this.sql) {
      // Intentar conectar automáticamente si no está inicializado
      console.log("Conexión no inicializada, intentando conectar automáticamente")
      this.connect().catch((error) => {
        console.error("Error al conectar automáticamente:", error)
      })

      // Si aún no hay conexión después del intento, usar una conexión simulada
      if (!this.sql) {
        console.warn("Usando conexión simulada como fallback")
        this.sql = this.mockDbConnection()
      }
    }
    return this.sql
  }

  public getPool(): Pool {
    if (!this.pool) {
      throw new Error("El pool de conexiones no está inicializado")
    }
    return this.pool
  }

  public async disconnect(): Promise<void> {
    if (this.pool) {
      await this.pool.end()
      this.pool = null
    }
    this.sql = null
    this.isConnected = false
    console.log("Conexión a la base de datos cerrada correctamente")
  }

  private mockDbConnection() {
    return async (query: string, ...params: any[]) => {
      console.warn(`Consulta simulada: ${query}`)
      console.warn("Parámetros:", params)
      return []
    }
  }

  // Método para ejecutar consultas con manejo de errores
  public async executeQuery<T = any>(query: string, params: any[] = []): Promise<T> {
    if (!this.sql) {
      await this.connect()
    }

    try {
      return (await this.sql!(query, ...params)) as T
    } catch (error) {
      console.error("Error al ejecutar la consulta:", error)
      console.error("Query:", query)
      console.error("Params:", params)
      throw error
    }
  }

  // Método para ejecutar transacciones
  public async executeTransaction<T = any>(queries: { query: string; params?: any[] }[]): Promise<T[]> {
    if (!this.pool) {
      await this.connect()
    }

    const client = await this.pool!.connect()
    const results: T[] = []

    try {
      await client.query("BEGIN")

      for (const { query, params = [] } of queries) {
        const result = await client.query(query, params)
        results.push(result.rows as T)
      }

      await client.query("COMMIT")
      return results
    } catch (error) {
      await client.query("ROLLBACK")
      console.error("Error al ejecutar la transacción:", error)
      throw error
    } finally {
      client.release()
    }
  }
}

// Exportar una instancia única para usar en toda la aplicación
export const db = DatabaseConnection.getInstance()

// Función de utilidad para obtener la conexión SQL
export function getDbConnection() {
  return db.getConnection()
}

// Función de utilidad para ejecutar consultas
export async function executeQuery<T = any>(query: string, params: any[] = []): Promise<T> {
  return db.executeQuery<T>(query, params)
}

// Función de utilidad para ejecutar transacciones
export async function executeTransaction<T = any>(queries: { query: string; params?: any[] }[]): Promise<T[]> {
  return db.executeTransaction<T>(queries)
}
