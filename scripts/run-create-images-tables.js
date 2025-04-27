// Este script es un wrapper simple para ejecutar el script TypeScript
const { execSync } = require("child_process")
const path = require("path")

console.log("Ejecutando script para crear tablas de imágenes...")

try {
  // Ejecutar el script TypeScript con ts-node
  execSync("npx ts-node scripts/create-images-tables.ts", {
    stdio: "inherit",
    cwd: process.cwd(),
  })

  console.log("Script ejecutado correctamente")
} catch (error) {
  console.error("Error al ejecutar el script:", error)
  process.exit(1)
}
