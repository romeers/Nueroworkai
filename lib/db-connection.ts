import { neon, neonConfig } from "@neondatabase/serverless"

// Configure neon
neonConfig.fetchConnectionCache = true

/**
 * Obtiene una conexión limpia a la base de datos Neon
 * Maneja casos donde la cadena de conexión puede tener un formato incorrecto
 */
export function getDbConnection() {
  const databaseUrl = process.env.DATABASE_URL || ""

  // Eliminar el signo igual si existe al principio de la cadena
  const cleanDatabaseUrl = databaseUrl.startsWith("=") ? databaseUrl.substring(1) : databaseUrl

  if (!cleanDatabaseUrl) {
    console.error("No se ha proporcionado una cadena de conexión a la base de datos")
    throw new Error("DATABASE_URL no está configurado")
  }

  try {
    return neon(cleanDatabaseUrl)
  } catch (error) {
    console.error("Error al crear la conexión a la base de datos:", error)
    throw new Error(`Error al conectar con la base de datos: ${error.message}`)
  }
}
