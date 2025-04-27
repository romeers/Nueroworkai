import { neon } from "@neondatabase/serverless"
import fs from "fs"
import path from "path"

// Función principal
async function initPerformanceTables() {
  try {
    // Obtener la cadena de conexión de la base de datos
    const databaseUrl = process.env.DATABASE_URL

    if (!databaseUrl) {
      console.error("Error: La variable de entorno DATABASE_URL no está definida")
      process.exit(1)
    }

    // Crear la conexión a la base de datos
    const sql = neon(databaseUrl)

    // Leer el archivo SQL
    const sqlFilePath = path.join(process.cwd(), "scripts", "create_performance_tables.sql")
    const sqlContent = fs.readFileSync(sqlFilePath, "utf8")

    // Ejecutar las consultas SQL
    console.log("Inicializando tablas de rendimiento...")
    await sql.query(sqlContent)

    console.log("Tablas de rendimiento inicializadas correctamente")
    process.exit(0)
  } catch (error) {
    console.error("Error al inicializar las tablas de rendimiento:", error)
    process.exit(1)
  }
}

// Ejecutar la función principal
initPerformanceTables()
