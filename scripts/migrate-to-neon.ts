import { initSchema } from "./init-schema"
import { seedData } from "./seed-data"

async function migrateToNeon() {
  try {
    console.log("Iniciando migración a Neon...")

    // Inicializar esquema
    await initSchema()

    // Migrar datos
    await seedData()

    console.log("✅ Migración a Neon completada con éxito")
  } catch (error) {
    console.error("Error durante la migración a Neon:", error)
    process.exit(1)
  }
}

// Ejecutar si se llama directamente
if (require.main === module) {
  migrateToNeon()
    .then(() => {
      console.log("Migración completada")
      process.exit(0)
    })
    .catch((error) => {
      console.error("Error:", error)
      process.exit(1)
    })
}
