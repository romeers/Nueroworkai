import { neon } from "@neondatabase/serverless"

async function initTables() {
  if (!process.env.DATABASE_URL) {
    console.error("DATABASE_URL no está definida. No se pueden inicializar las tablas.")
    process.exit(1)
  }

  const sql = neon(process.env.DATABASE_URL)

  try {
    console.log("Inicializando tablas...")

    // Tabla de suscriptores
    await sql`
      CREATE TABLE IF NOT EXISTS subscribers (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        name VARCHAR(255),
        source VARCHAR(100),
        subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        
        -- Índices
        INDEX idx_subscribers_email (email),
        INDEX idx_subscribers_source (source)
      )
    `
    console.log("✅ Tabla 'subscribers' creada o verificada")

    // Tabla de descargas del kit digital
    await sql`
      CREATE TABLE IF NOT EXISTS kit_downloads (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        download_date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        
        -- Índices
        INDEX idx_kit_downloads_email (email)
      )
    `
    console.log("✅ Tabla 'kit_downloads' creada o verificada")

    // Tabla de mensajes de contacto
    await sql`
      CREATE TABLE IF NOT EXISTS contact_messages (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255),
        email VARCHAR(255) NOT NULL,
        subject VARCHAR(255),
        message TEXT NOT NULL,
        status VARCHAR(50) DEFAULT 'unread',
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        
        -- Índices
        INDEX idx_contact_messages_email (email),
        INDEX idx_contact_messages_status (status),
        INDEX idx_contact_messages_created_at (created_at)
      )
    `
    console.log("✅ Tabla 'contact_messages' creada o verificada")

    console.log("✅ Todas las tablas han sido inicializadas correctamente")
  } catch (error) {
    console.error("Error al inicializar las tablas:", error)
    process.exit(1)
  }
}

// Ejecutar el script
initTables()
