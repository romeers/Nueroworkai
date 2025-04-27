import { query } from "../lib/db"
import { hashPassword } from "../lib/auth"

async function createAdminUser() {
  try {
    console.log("Creando usuario administrador...")

    // Datos del administrador
    const email = "admin@neuroworkai.com"
    const password = "admin123" // En producción, usar una contraseña más segura
    const name = "Administrador"
    const role = "admin"

    // Verificar si ya existe
    const existingUsers = await query("SELECT id FROM users WHERE email = $1", [email])
    if (existingUsers.length > 0) {
      console.log("El usuario administrador ya existe")
      return
    }

    // Hashear la contraseña
    const hashedPassword = await hashPassword(password)

    // Crear el usuario
    await query("INSERT INTO users (email, password_hash, name, role) VALUES ($1, $2, $3, $4)", [
      email,
      hashedPassword,
      name,
      role,
    ])

    console.log("✅ Usuario administrador creado correctamente")
    console.log("Email:", email)
    console.log("Contraseña:", password)
  } catch (error) {
    console.error("Error al crear usuario administrador:", error)
    throw error
  }
}

// Ejecutar la función si este archivo se ejecuta directamente
if (require.main === module) {
  createAdminUser()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error("Error al ejecutar el script:", error)
      process.exit(1)
    })
}

export { createAdminUser }
