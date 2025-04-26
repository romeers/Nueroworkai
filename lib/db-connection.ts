import { neon } from "@neondatabase/serverless"

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

  return neon(cleanDatabaseUrl)
}
