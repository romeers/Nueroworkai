import { sql } from "../lib/db-config"

async function initSchema() {
  console.log("Inicializando esquema de base de datos...")

  try {
    // Crear tabla de categorías
    await sql`
      CREATE TABLE IF NOT EXISTS categories (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        slug VARCHAR(255) UNIQUE NOT NULL,
        description TEXT,
        image_url VARCHAR(255),
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `
    console.log("✅ Tabla categories creada")

    // Crear tabla de herramientas
    await sql`
      CREATE TABLE IF NOT EXISTS tools (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        slug VARCHAR(255) UNIQUE NOT NULL,
        description TEXT NOT NULL,
        long_description TEXT,
        image_url VARCHAR(255),
        category_id INTEGER REFERENCES categories(id),
        score DECIMAL(3,1),
        featured BOOLEAN DEFAULT FALSE,
        is_new BOOLEAN DEFAULT FALSE,
        affiliate_url VARCHAR(255),
        verified BOOLEAN DEFAULT FALSE,
        special_offer TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `
    console.log("✅ Tabla tools creada")

    // Crear tabla de pros y contras
    await sql`
      CREATE TABLE IF NOT EXISTS tool_pros_cons (
        id SERIAL PRIMARY KEY,
        tool_id INTEGER NOT NULL REFERENCES tools(id) ON DELETE CASCADE,
        type VARCHAR(10) NOT NULL CHECK (type IN ('pro', 'con')),
        description TEXT NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `
    console.log("✅ Tabla tool_pros_cons creada")

    // Crear tabla de características de herramientas
    await sql`
      CREATE TABLE IF NOT EXISTS tool_features (
        id SERIAL PRIMARY KEY,
        tool_id INTEGER NOT NULL REFERENCES tools(id) ON DELETE CASCADE,
        name VARCHAR(255) NOT NULL,
        description TEXT,
        image_url VARCHAR(255),
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `
    console.log("✅ Tabla tool_features creada")

    // Crear tabla de planes de precios
    await sql`
      CREATE TABLE IF NOT EXISTS pricing_plans (
        id SERIAL PRIMARY KEY,
        tool_id INTEGER NOT NULL REFERENCES tools(id) ON DELETE CASCADE,
        plan_name VARCHAR(255) NOT NULL,
        price VARCHAR(255) NOT NULL,
        recommended BOOLEAN DEFAULT FALSE,
        affiliate_url VARCHAR(255),
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `
    console.log("✅ Tabla pricing_plans creada")

    // Crear tabla de características de planes de precios
    await sql`
      CREATE TABLE IF NOT EXISTS pricing_plan_features (
        id SERIAL PRIMARY KEY,
        pricing_plan_id INTEGER NOT NULL REFERENCES pricing_plans(id) ON DELETE CASCADE,
        description TEXT NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `
    console.log("✅ Tabla pricing_plan_features creada")

    // Crear tabla de etiquetas
    await sql`
      CREATE TABLE IF NOT EXISTS tags (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        slug VARCHAR(255) UNIQUE NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `
    console.log("✅ Tabla tags creada")

    // Crear tabla de relación entre herramientas y etiquetas
    await sql`
      CREATE TABLE IF NOT EXISTS tool_tags (
        id SERIAL PRIMARY KEY,
        tool_id INTEGER NOT NULL REFERENCES tools(id) ON DELETE CASCADE,
        tag_id INTEGER NOT NULL REFERENCES tags(id) ON DELETE CASCADE,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        UNIQUE(tool_id, tag_id)
      )
    `
    console.log("✅ Tabla tool_tags creada")

    // Crear tabla de comparaciones
    await sql`
      CREATE TABLE IF NOT EXISTS comparisons (
        id SERIAL PRIMARY KEY,
        tool_id_1 INTEGER NOT NULL REFERENCES tools(id) ON DELETE CASCADE,
        tool_id_2 INTEGER NOT NULL REFERENCES tools(id) ON DELETE CASCADE,
        slug VARCHAR(255) UNIQUE NOT NULL,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        content TEXT,
        view_count INTEGER DEFAULT 0,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        UNIQUE(tool_id_1, tool_id_2)
      )
    `
    console.log("✅ Tabla comparisons creada")

    // Crear tabla de recursos
    await sql`
      CREATE TABLE IF NOT EXISTS resources (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        slug VARCHAR(255) UNIQUE NOT NULL,
        description TEXT,
        content TEXT,
        image_url VARCHAR(255),
        category_id INTEGER REFERENCES categories(id) ON DELETE SET NULL,
        view_count INTEGER DEFAULT 0,
        published BOOLEAN DEFAULT TRUE,
        published_at TIMESTAMP WITH TIME ZONE,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `
    console.log("✅ Tabla resources creada")

    // Crear tabla de herramientas relacionadas con recursos
    await sql`
      CREATE TABLE IF NOT EXISTS resource_tools (
        id SERIAL PRIMARY KEY,
        resource_id INTEGER NOT NULL REFERENCES resources(id) ON DELETE CASCADE,
        tool_id INTEGER NOT NULL REFERENCES tools(id) ON DELETE CASCADE,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        UNIQUE(resource_id, tool_id)
      )
    `
    console.log("✅ Tabla resource_tools creada")

    // Crear tabla de usuarios
    await sql`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password_hash VARCHAR(255) NOT NULL,
        name VARCHAR(255),
        role VARCHAR(50) NOT NULL DEFAULT 'user',
        avatar_url VARCHAR(255),
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `
    console.log("✅ Tabla users creada")

    // Crear tabla de sesiones
    await sql`
      CREATE TABLE IF NOT EXISTS sessions (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        token TEXT NOT NULL,
        expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `
    console.log("✅ Tabla sessions creada")

    // Crear tabla de favoritos de usuario
    await sql`
      CREATE TABLE IF NOT EXISTS user_favorites (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        tool_id INTEGER NOT NULL REFERENCES tools(id) ON DELETE CASCADE,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        UNIQUE(user_id, tool_id)
      )
    `
    console.log("✅ Tabla user_favorites creada")

    // Crear índices para mejorar el rendimiento
    await sql`CREATE INDEX IF NOT EXISTS idx_tools_category_id ON tools(category_id)`
    await sql`CREATE INDEX IF NOT EXISTS idx_tools_featured ON tools(featured)`
    await sql`CREATE INDEX IF NOT EXISTS idx_tool_pros_cons_tool_id ON tool_pros_cons(tool_id)`
    await sql`CREATE INDEX IF NOT EXISTS idx_tool_features_tool_id ON tool_features(tool_id)`
    await sql`CREATE INDEX IF NOT EXISTS idx_pricing_plans_tool_id ON pricing_plans(tool_id)`
    await sql`CREATE INDEX IF NOT EXISTS idx_tool_tags_tool_id ON tool_tags(tool_id)`
    await sql`CREATE INDEX IF NOT EXISTS idx_tool_tags_tag_id ON tool_tags(tag_id)`
    await sql`CREATE INDEX IF NOT EXISTS idx_comparisons_tool_ids ON comparisons(tool_id_1, tool_id_2)`
    await sql`CREATE INDEX IF NOT EXISTS idx_resources_category_id ON resources(category_id)`
    await sql`CREATE INDEX IF NOT EXISTS idx_resource_tools_resource_id ON resource_tools(resource_id)`
    await sql`CREATE INDEX IF NOT EXISTS idx_resource_tools_tool_id ON resource_tools(tool_id)`
    await sql`CREATE INDEX IF NOT EXISTS idx_users_email ON users(email)`
    await sql`CREATE INDEX IF NOT EXISTS idx_sessions_user_id ON sessions(user_id)`
    await sql`CREATE INDEX IF NOT EXISTS idx_sessions_token ON sessions(token)`
    await sql`CREATE INDEX IF NOT EXISTS idx_user_favorites_user_id ON user_favorites(user_id)`
    await sql`CREATE INDEX IF NOT EXISTS idx_user_favorites_tool_id ON user_favorites(tool_id)`

    console.log("✅ Índices creados")
    console.log("✅ Esquema inicializado correctamente")
  } catch (error) {
    console.error("Error al inicializar esquema:", error)
    throw error
  }
}

// Ejecutar si se llama directamente
if (require.main === module) {
  initSchema()
    .then(() => {
      console.log("Esquema inicializado correctamente")
      process.exit(0)
    })
    .catch((error) => {
      console.error("Error:", error)
      process.exit(1)
    })
}

export { initSchema }
