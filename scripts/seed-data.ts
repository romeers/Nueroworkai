import { query } from "../lib/db"

// Función para insertar categorías
async function seedCategories() {
  const categories = [
    { name: "Escritura IA", slug: "escritura-ia", icon: "✍️" },
    { name: "Automatización", slug: "automatizacion", icon: "⚙️" },
    { name: "Gestión de Tareas", slug: "gestion-tareas", icon: "📋" },
    { name: "Reuniones", slug: "reuniones", icon: "🎯" },
    { name: "Comunicación", slug: "comunicacion", icon: "💬" },
    { name: "Otras Herramientas", slug: "otras", icon: "🧰" },
  ]

  for (const category of categories) {
    await query(`INSERT INTO categories (name, slug, icon) VALUES ($1, $2, $3) ON CONFLICT (slug) DO NOTHING`, [
      category.name,
      category.slug,
      category.icon,
    ])
  }

  console.log("✅ Categorías insertadas")
}

// Función para insertar una herramienta y sus datos relacionados
async function insertTool(tool: any) {
  // Obtener el ID de la categoría
  const categoryResult = await query(`SELECT id FROM categories WHERE name = $1`, [tool.category])

  if (categoryResult.length === 0) {
    throw new Error(`Categoría no encontrada: ${tool.category}`)
  }

  const categoryId = categoryResult[0].id

  // Insertar la herramienta
  const toolResult = await query(
    `INSERT INTO tools (
      name, slug, description, long_description, image_url, 
      category_id, score, featured, is_new, affiliate_url, 
      verified, special_offer
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
    ON CONFLICT (slug) DO UPDATE SET
      name = EXCLUDED.name,
      description = EXCLUDED.description,
      long_description = EXCLUDED.long_description,
      image_url = EXCLUDED.image_url,
      category_id = EXCLUDED.category_id,
      score = EXCLUDED.score,
      featured = EXCLUDED.featured,
      is_new = EXCLUDED.is_new,
      affiliate_url = EXCLUDED.affiliate_url,
      verified = EXCLUDED.verified,
      special_offer = EXCLUDED.special_offer,
      updated_at = CURRENT_TIMESTAMP
    RETURNING id`,
    [
      tool.name,
      tool.slug,
      tool.description,
      tool.longDescription || null,
      tool.imageUrl,
      categoryId,
      tool.score || null,
      tool.featured || false,
      tool.isNew || false,
      tool.affiliateUrl || null,
      tool.verified || false,
      tool.specialOffer || null,
    ],
  )

  const toolId = toolResult[0].id

  // Insertar pros
  if (tool.pros && tool.pros.length > 0) {
    // Primero eliminar los pros existentes
    await query(`DELETE FROM tool_pros_cons WHERE tool_id = $1 AND type = 'pro'`, [toolId])

    for (const pro of tool.pros) {
      await query(`INSERT INTO tool_pros_cons (tool_id, type, description) VALUES ($1, 'pro', $2)`, [toolId, pro])
    }
  }

  // Insertar contras
  if (tool.cons && tool.cons.length > 0) {
    // Primero eliminar los contras existentes
    await query(`DELETE FROM tool_pros_cons WHERE tool_id = $1 AND type = 'con'`, [toolId])

    for (const con of tool.cons) {
      await query(`INSERT INTO tool_pros_cons (tool_id, type, description) VALUES ($1, 'con', $2)`, [toolId, con])
    }
  }

  // Insertar características
  if (tool.features && tool.features.length > 0) {
    // Primero eliminar las características existentes
    await query(`DELETE FROM tool_features WHERE tool_id = $1`, [toolId])

    for (const feature of tool.features) {
      await query(
        `INSERT INTO tool_features (tool_id, name, description, image_url) 
         VALUES ($1, $2, $3, $4)`,
        [toolId, feature.name, feature.description, feature.imageUrl || null],
      )
    }
  }

  // Insertar planes de precios
  if (tool.pricing && tool.pricing.length > 0) {
    // Primero eliminar los planes existentes y sus características
    const existingPlans = await query(`SELECT id FROM pricing_plans WHERE tool_id = $1`, [toolId])

    for (const plan of existingPlans) {
      await query(`DELETE FROM pricing_plan_features WHERE pricing_plan_id = $1`, [plan.id])
    }

    await query(`DELETE FROM pricing_plans WHERE tool_id = $1`, [toolId])

    for (const plan of tool.pricing) {
      const planResult = await query(
        `INSERT INTO pricing_plans (tool_id, plan_name, price, recommended, affiliate_url)
         VALUES ($1, $2, $3, $4, $5)
         RETURNING id`,
        [toolId, plan.plan, plan.price, plan.recommended || false, plan.affiliateUrl || null],
      )

      const planId = planResult[0].id

      if (plan.features && plan.features.length > 0) {
        for (const feature of plan.features) {
          await query(
            `INSERT INTO pricing_plan_features (pricing_plan_id, description)
             VALUES ($1, $2)`,
            [planId, feature],
          )
        }
      }
    }
  }

  // Insertar reseñas
  if (tool.reviews && tool.reviews.length > 0) {
    // Primero eliminar las reseñas existentes
    await query(`DELETE FROM reviews WHERE tool_id = $1`, [toolId])

    for (const review of tool.reviews) {
      await query(
        `INSERT INTO reviews (
          tool_id, author, rating, title, comment, 
          review_date, helpful_count, unhelpful_count
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
        [
          toolId,
          review.author,
          review.rating,
          review.title,
          review.comment,
          review.date,
          review.helpful || 0,
          review.unhelpful || 0,
        ],
      )
    }
  }

  // Insertar tags
  if (tool.tags && tool.tags.length > 0) {
    // Primero eliminar las relaciones existentes
    await query(`DELETE FROM tool_tags WHERE tool_id = $1`, [toolId])

    for (const tagName of tool.tags) {
      // Verificar si el tag existe
      let tagResult = await query(`SELECT id FROM tags WHERE name = $1`, [tagName])

      let tagId
      if (tagResult.length === 0) {
        // Crear el tag si no existe
        tagResult = await query(`INSERT INTO tags (name) VALUES ($1) RETURNING id`, [tagName])
      }

      tagId = tagResult[0].id

      // Crear la relación
      await query(`INSERT INTO tool_tags (tool_id, tag_id) VALUES ($1, $2) ON CONFLICT DO NOTHING`, [toolId, tagId])
    }
  }

  return toolId
}

// Función para insertar herramientas de ejemplo
async function seedTools() {
  const tools = [
    {
      name: "Notion AI",
      slug: "notion-ai",
      description: "Asistente de escritura y organización con IA integrada en Notion.",
      longDescription:
        "Notion AI es una potente herramienta de inteligencia artificial integrada directamente en la plataforma de Notion. Permite a los usuarios generar texto, resumir contenido, traducir a múltiples idiomas, mejorar la escritura y mucho más, todo sin salir de su espacio de trabajo habitual.",
      imageUrl: "/notion-ai-blue.png",
      category: "Escritura IA",
      tags: ["Escritura IA", "Productividad", "Organización", "Colaboración"],
      score: 9.2,
      featured: true,
      isNew: false,
      affiliateUrl: "https://notion.so/product/ai?ref=neuroworkai",
      verified: true,
      specialOffer: "7 días de prueba gratuita + 20% de descuento en el primer año",
      pros: [
        "Integración perfecta con el ecosistema de Notion",
        "Interfaz intuitiva y fácil de usar",
        "Múltiples funcionalidades de IA en una sola herramienta",
        "Excelente para equipos que ya utilizan Notion",
        "Mejora continua con nuevas funcionalidades",
      ],
      cons: [
        "Requiere suscripción a Notion para acceder a todas las funciones",
        "Algunas funciones avanzadas tienen limitaciones",
        "Puede ser costoso para equipos grandes",
        "Curva de aprendizaje para nuevos usuarios de Notion",
      ],
      features: [
        {
          name: "Generación de texto",
          description: "Crea contenido de alta calidad a partir de prompts simples.",
          imageUrl: "/notion-ai-text-generation.png",
        },
        {
          name: "Resumen automático",
          description: "Resume documentos largos o reuniones en puntos clave.",
          imageUrl: "/notion-ai-summarization.png",
        },
        {
          name: "Traducción",
          description: "Traduce contenido a múltiples idiomas con un solo clic.",
          imageUrl: "/notion-ai-translation-workflow.png",
        },
      ],
      pricing: [
        {
          plan: "Personal",
          price: "$10/mes",
          features: ["20 créditos de IA al mes", "Todas las funciones básicas de IA", "Uso personal"],
          recommended: false,
          affiliateUrl: "https://notion.so/product/ai/personal?ref=neuroworkai",
        },
        {
          plan: "Plus",
          price: "$15/mes",
          features: ["50 créditos de IA al mes", "Todas las funciones de IA", "Uso personal o en equipos pequeños"],
          recommended: true,
          affiliateUrl: "https://notion.so/product/ai/plus?ref=neuroworkai",
        },
      ],
      reviews: [
        {
          author: "María G.",
          rating: 5,
          title: "Transformó mi forma de trabajar",
          comment:
            "Notion AI ha cambiado completamente mi flujo de trabajo. Ahorro horas cada semana en la creación de contenido y documentación.",
          date: "2023-03-15",
          helpful: 24,
          unhelpful: 2,
        },
        {
          author: "Carlos R.",
          rating: 4,
          title: "Excelente, pero con margen de mejora",
          comment:
            "Una herramienta fantástica que me ayuda diariamente. Le falta pulir algunas funciones, pero su integración con Notion es perfecta.",
          date: "2023-04-22",
          helpful: 18,
          unhelpful: 3,
        },
      ],
    },
    {
      name: "Zapier",
      slug: "zapier",
      description: "Automatiza tareas entre aplicaciones sin necesidad de código.",
      imageUrl: "/zapier-blue-background.png",
      category: "Automatización",
      tags: ["Automatización", "Integración", "Sin código", "Productividad"],
      score: 9.0,
      featured: true,
      affiliateUrl: "https://zapier.com/?utm_source=neuroworkai&utm_medium=affiliate",
      verified: true,
      pros: [
        "Conecta más de 5,000 aplicaciones",
        "No requiere conocimientos de programación",
        "Interfaz visual intuitiva",
        "Automatizaciones confiables y estables",
      ],
      cons: [
        "Los planes gratuitos tienen limitaciones significativas",
        "Puede volverse costoso para automatizaciones complejas",
        "Algunas integraciones avanzadas requieren conocimientos técnicos",
      ],
    },
    {
      name: "ClickUp",
      slug: "clickup",
      description: "Plataforma todo en uno para gestión de proyectos con funciones de IA.",
      imageUrl: "/clickup-blue-background.png",
      category: "Gestión de Tareas",
      score: 8.8,
      featured: true,
      affiliateUrl: "https://clickup.com/?af=123",
    },
  ]

  for (const tool of tools) {
    await insertTool(tool)
  }

  console.log("✅ Herramientas insertadas")
}

// Función para insertar comparaciones populares
async function seedComparisons() {
  // Primero, obtener los IDs de las herramientas
  const notionAi = await query(`SELECT id FROM tools WHERE slug = 'notion-ai'`)
  const zapier = await query(`SELECT id FROM tools WHERE slug = 'zapier'`)
  const clickup = await query(`SELECT id FROM tools WHERE slug = 'clickup'`)

  if (notionAi.length === 0 || zapier.length === 0 || clickup.length === 0) {
    console.error("No se encontraron todas las herramientas necesarias para las comparaciones")
    return
  }

  const comparisons = [
    {
      tool_id_1: notionAi[0].id,
      tool_id_2: zapier[0].id,
      slug: "notion-ai-vs-zapier",
      title: "Notion AI vs Zapier",
      description: "Comparativa entre herramientas de escritura IA y automatización",
      view_count: 120,
    },
    {
      tool_id_1: zapier[0].id,
      tool_id_2: clickup[0].id,
      slug: "zapier-vs-clickup",
      title: "Zapier vs ClickUp",
      description: "¿Cuál es la mejor herramienta para optimizar tu flujo de trabajo?",
      view_count: 85,
    },
  ]

  for (const comparison of comparisons) {
    await query(
      `INSERT INTO comparisons (tool_id_1, tool_id_2, slug, title, description, view_count)
       VALUES ($1, $2, $3, $4, $5, $6)
       ON CONFLICT (slug) DO UPDATE SET
         title = EXCLUDED.title,
         description = EXCLUDED.description,
         view_count = EXCLUDED.view_count,
         updated_at = CURRENT_TIMESTAMP`,
      [
        comparison.tool_id_1,
        comparison.tool_id_2,
        comparison.slug,
        comparison.title,
        comparison.description,
        comparison.view_count,
      ],
    )
  }

  console.log("✅ Comparaciones insertadas")
}

// Función principal para ejecutar todas las semillas
export async function seedDatabase() {
  try {
    await seedCategories()
    await seedTools()
    await seedComparisons()
    console.log("✅ Base de datos poblada correctamente")
  } catch (error) {
    console.error("Error al poblar la base de datos:", error)
    throw error
  }
}

// Ejecutar la función si este archivo se ejecuta directamente
if (require.main === module) {
  seedDatabase()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error("Error al ejecutar el script de semilla:", error)
      process.exit(1)
    })
}
