import { getDbConnection } from "@/lib/db-connection"
import { hashPassword } from "@/utils/security"

export async function createAdminUser() {
  const sql = getDbConnection()

  // Verificar si ya existe un usuario administrador
  const existingAdmin = await sql`
    SELECT * FROM users WHERE role = 'admin' LIMIT 1
  `

  if (existingAdmin && existingAdmin.length > 0) {
    console.log("Ya existe un usuario administrador")
    return { success: true, message: "Ya existe un usuario administrador" }
  }

  // Crear usuario administrador
  const adminEmail = "admin@neuroworkai.com"
  const adminPassword = "Admin123!" // Esto debería ser generado o proporcionado de forma segura
  const hashedPassword = await hashPassword(adminPassword)

  try {
    await sql`
      INSERT INTO users (email, password, name, role, created_at, updated_at)
      VALUES (${adminEmail}, ${hashedPassword}, 'Administrador', 'admin', NOW(), NOW())
    `

    console.log("Usuario administrador creado correctamente")
    return { success: true, message: "Usuario administrador creado correctamente" }
  } catch (error) {
    console.error("Error al crear usuario administrador:", error)
    throw new Error(`Error al crear usuario administrador: ${error.message}`)
  }
}
