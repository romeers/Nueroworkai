-- Tabla para almacenar metadatos de imágenes
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
  uploaded_by INTEGER,
  is_optimized BOOLEAN DEFAULT FALSE,
  optimized_url VARCHAR(255),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Índices para mejorar el rendimiento
CREATE INDEX IF NOT EXISTS idx_images_category ON images(category);
CREATE INDEX IF NOT EXISTS idx_images_created_at ON images(created_at);

-- Tabla para relaciones entre imágenes y herramientas (si existe la tabla tools)
DO $$
BEGIN
  IF EXISTS (SELECT FROM information_schema.tables WHERE table_name = 'tools') THEN
    CREATE TABLE IF NOT EXISTS tool_images (
      id SERIAL PRIMARY KEY,
      tool_id INTEGER NOT NULL REFERENCES tools(id) ON DELETE CASCADE,
      image_id INTEGER NOT NULL REFERENCES images(id) ON DELETE CASCADE,
      is_primary BOOLEAN DEFAULT FALSE,
      display_order INTEGER DEFAULT 0,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
      UNIQUE(tool_id, image_id)
    );
    
    CREATE INDEX IF NOT EXISTS idx_tool_images_tool_id ON tool_images(tool_id);
    CREATE INDEX IF NOT EXISTS idx_tool_images_image_id ON tool_images(image_id);
  END IF;
END
$$;

-- Tabla para relaciones entre imágenes y recursos (si existe la tabla resources)
DO $$
BEGIN
  IF EXISTS (SELECT FROM information_schema.tables WHERE table_name = 'resources') THEN
    CREATE TABLE IF NOT EXISTS resource_images (
      id SERIAL PRIMARY KEY,
      resource_id INTEGER NOT NULL REFERENCES resources(id) ON DELETE CASCADE,
      image_id INTEGER NOT NULL REFERENCES images(id) ON DELETE CASCADE,
      is_primary BOOLEAN DEFAULT FALSE,
      display_order INTEGER DEFAULT 0,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
      UNIQUE(resource_id, image_id)
    );
    
    CREATE INDEX IF NOT EXISTS idx_resource_images_resource_id ON resource_images(resource_id);
    CREATE INDEX IF NOT EXISTS idx_resource_images_image_id ON resource_images(image_id);
  END IF;
END
$$;

-- Actualizar la referencia a users si existe la tabla
DO $$
BEGIN
  IF EXISTS (SELECT FROM information_schema.tables WHERE table_name = 'users') THEN
    -- Añadir la restricción de clave foránea si no existe
    IF NOT EXISTS (
      SELECT 1 FROM information_schema.table_constraints 
      WHERE constraint_name = 'images_uploaded_by_fkey'
    ) THEN
      ALTER TABLE images 
      ADD CONSTRAINT images_uploaded_by_fkey 
      FOREIGN KEY (uploaded_by) REFERENCES users(id) ON DELETE SET NULL;
      
      CREATE INDEX IF NOT EXISTS idx_images_uploaded_by ON images(uploaded_by);
    END IF;
  END IF;
END
$$;
