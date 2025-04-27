import { neon } from "@neondatabase/serverless"
import { NextResponse } from "next/server"

// Conexión a la base de datos
const sql = neon(process.env.DATABASE_URL!)

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const limit = Number.parseInt(searchParams.get("limit") || "10", 10)
    const page = Number.parseInt(searchParams.get("page") || "1", 10)
    const url = searchParams.get("url")
    const deviceType = searchParams.get("deviceType")

    const offset = (page - 1) * limit

    // Construir la consulta base
    let query = `
      SELECT * FROM performance_tests
      WHERE 1=1
    `

    const params: any[] = []

    // Añadir filtros si se proporcionan
    if (url) {
      query += ` AND url = $${params.length + 1}`
      params.push(url)
    }

    if (deviceType) {
      query += ` AND device_type = $${params.length + 1}`
      params.push(deviceType)
    }

    // Añadir ordenación y paginación
    query += ` ORDER BY timestamp DESC LIMIT $${params.length + 1} OFFSET $${params.length + 2}`
    params.push(limit, offset)

    // Ejecutar la consulta
    const results = await sql.query(query, params)

    // Contar el total de registros para la paginación
    let countQuery = `
      SELECT COUNT(*) as total FROM performance_tests
      WHERE 1=1
    `

    const countParams: any[] = []

    if (url) {
      countQuery += ` AND url = ${countParams.length + 1}`
      countParams.push(url)
    }

    if (deviceType) {
      countQuery += ` AND device_type = ${countParams.length + 1}`
      countParams.push(deviceType)
    }

    const countResult = await sql.query(countQuery, countParams)
    const total = Number.parseInt(countResult.rows[0].total, 10)

    return NextResponse.json({
      results: results.rows,
      pagination: {
        total,
        page,
        limit,
        pages: Math.ceil(total / limit),
      },
    })
  } catch (error) {
    console.error("Error al obtener los datos de rendimiento:", error)
    return NextResponse.json({ error: "Error al obtener los datos de rendimiento" }, { status: 500 })
  }
}
