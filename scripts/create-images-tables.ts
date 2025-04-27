import { neon } from "@neondatabase/serverless"
import dotenv from "dotenv"

// Cargar variables de entorno
dotenv.config()

async function createImagesTables() {
  const DATABASE_URL = process.env.DATABASE_URL

  if (!DATABASE_URL) {
    console.error("Error: DATABASE_URL no está definida en las variables de entorno")
    process.exit(1)
  }

  console.log("Conectando a la base de datos...")
  const sql = neon(DATABASE_URL)

  try {
    console.log("Verificando tablas existentes...")

    // Verificar si las tablas necesarias existen
    const tablesExist = await sql`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_name = 'users'
      ) as users_exist,
      EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_name = 'tools'
      ) as tools_exist,
      EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_name = 'resources'
      ) as resources_exist
    `

    const { users_exist, tools_exist, resources_exist } = tablesExist[0]

    console.log("Estado de tablas existentes:")
    console.log(`- users: ${users_exist ? "Existe" : "No existe"}`)
    console.log(`- tools: ${tools_exist ? "Existe" : "No existe"}`)
    console.log(`- resources: ${resources_exist ? "Existe" : "No existe"}`)

    // Crear tabla de imágenes
    console.log("Creando tabla de imágenes...")
    await sql`
      CREATE TABLE IF NOT EXISTS images (
        id SERIAL PRIMARY KEY,
        url VARCHAR(255) NOT NULL,
        blob_url VARCHAR(255) NOT NULL,
        filename VARCHAR(255) NOT NULL,
        alt_text TEXT,
        width INTEGER,
        height INTEGER,
        size_kb INTEGER,
        mime_type VARCHAR(50),
        category VARCHAR(100),
        tags TEXT[],
        uploaded_by INTEGER ${users_exist ? "REFERENCES users(id) ON DELETE SET NULL" : ""},
        is_optimized BOOLEAN DEFAULT FALSE,
        optimized_url VARCHAR(255),
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `

    // Crear índices para la tabla de imágenes
    console.log("Creando índices para la tabla de imágenes...")
    await sql`CREATE INDEX IF NOT EXISTS idx_images_category ON images(category)`
    if (users_exist) {
      await sql`CREATE INDEX IF NOT EXISTS idx_images_uploaded_by ON images(uploaded_by)`
    }
    await sql`CREATE INDEX IF NOT EXISTS idx_images_created_at ON images(created_at)`

    // Crear tabla de relación entre imágenes y herramientas
    if (tools_exist) {
      console.log("Creando tabla de relación entre imágenes y herramientas...")
      await sql`
        CREATE TABLE IF NOT EXISTS tool_images (
          id SERIAL PRIMARY KEY,
          tool_id INTEGER NOT NULL REFERENCES tools(id) ON DELETE CASCADE,
          image_id INTEGER NOT NULL REFERENCES images(id) ON DELETE CASCADE,
          is_primary BOOLEAN DEFAULT FALSE,
          display_order INTEGER DEFAULT 0,
          created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
          UNIQUE(tool_id, image_id)
        )
      `

      await sql`CREATE INDEX IF NOT EXISTS idx_tool_images_tool_id ON tool_images(tool_id)`
      await sql`CREATE INDEX IF NOT EXISTS idx_tool_images_image_id ON tool_images(image_id)`
    } else {
      console.log("La tabla tools no existe. No se creará la tabla tool_images.")
    }

    // Crear tabla de relación entre imágenes y recursos
    if (resources_exist) {
      console.log("Creando tabla de relación entre imágenes y recursos...")
      await sql`
        CREATE TABLE IF NOT EXISTS resource_images (
          id SERIAL PRIMARY KEY,
          resource_id INTEGER NOT NULL REFERENCES resources(id) ON DELETE CASCADE,
          image_id INTEGER NOT NULL REFERENCES images(id) ON DELETE CASCADE,
          is_primary BOOLEAN DEFAULT FALSE,
          display_order INTEGER DEFAULT 0,
          created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
          UNIQUE(resource_id, image_id)
        )
      `

      await sql`CREATE INDEX IF NOT EXISTS idx_resource_images_resource_id ON resource_images(resource_id)`
      await sql`CREATE INDEX IF NOT EXISTS idx_resource_images_image_id ON resource_images(image_id)`
    } else {
      console.log("La tabla resources no existe. No se creará la tabla resource_images.")
    }

    console.log("Tablas de imágenes creadas correctamente.")
  } catch (error) {
    console.error("Error al crear las tablas de imágenes:", error)
    process.exit(1)
  }
}

// Ejecutar la función principal
createImagesTables()
  .then(() => {
    console.log("Proceso completado.")
    process.exit(0)
  })
  .catch((error) => {
    console.error("Error en el proceso principal:", error)
    process.exit(1)
  })
