import { query } from "../lib/db"
import * as fs from "fs"
import * as path from "path"

async function extendSchema() {
  try {
    console.log("Ampliando el esquema de la base de datos...")

    // Leer el archivo SQL
    const schemaPath = path.join(process.cwd(), "scripts", "schema-extension.sql")
    const schemaSql = fs.readFileSync(schemaPath, "utf8")

    // Ejecutar el SQL
    await query(schemaSql)

    console.log("✅ Esquema ampliado correctamente")
  } catch (error) {
    console.error("Error al ampliar el esquema:", error)
    throw error
  }
}

// Ejecutar la función si este archivo se ejecuta directamente
if (require.main === module) {
  extendSchema()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error("Error al ejecutar el script de extensión de esquema:", error)
      process.exit(1)
    })
}

export { extendSchema }
