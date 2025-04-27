import { neon } from "@neondatabase/serverless"
import { NextResponse } from "next/server"

// Conexión a la base de datos
const sql = neon(process.env.DATABASE_URL!)

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Validar que los datos tengan el formato correcto
    if (!data || !data.url || !data.timestamp || !data.metrics) {
      return NextResponse.json({ error: "Datos de rendimiento inválidos" }, { status: 400 })
    }

    // Insertar los datos en la base de datos
    await sql`
      INSERT INTO performance_tests (
        url, 
        timestamp, 
        user_agent, 
        device_type, 
        connection,
        lcp, 
        fid, 
        cls, 
        fcp, 
        tti, 
        tbt,
        ttfb,
        inp,
        resources_total,
        resources_js,
        resources_css,
        resources_img,
        resources_other,
        resources_size,
        score_performance,
        score_accessibility,
        score_best_practices,
        score_seo
      ) VALUES (
        ${data.url},
        to_timestamp(${data.timestamp / 1000}),
        ${data.userAgent},
        ${data.deviceType},
        ${data.connection},
        ${data.metrics.LCP},
        ${data.metrics.FID},
        ${data.metrics.CLS},
        ${data.metrics.FCP},
        ${data.metrics.TTI},
        ${data.metrics.TBT},
        ${data.metrics.TTFB},
        ${data.metrics.INP},
        ${data.resources.total},
        ${data.resources.js},
        ${data.resources.css},
        ${data.resources.img},
        ${data.resources.other},
        ${data.resources.totalSize},
        ${data.scores.performance},
        ${data.scores.accessibility},
        ${data.scores.bestPractices},
        ${data.scores.seo}
      )
    `

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error al guardar los datos de rendimiento:", error)
    return NextResponse.json({ error: "Error al guardar los datos de rendimiento" }, { status: 500 })
  }
}
