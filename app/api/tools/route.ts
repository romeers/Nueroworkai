import { NextResponse } from "next/server"
import { getAllTools } from "@/lib/static-data"

export async function GET() {
  try {
    const tools = getAllTools()

    // Transformar los datos para que sean más fáciles de usar en el frontend
    const formattedTools = tools.map((tool) => ({
      id: tool.id,
      name: tool.name,
      slug: tool.slug,
      description: tool.description,
      imageUrl: tool.imageUrl,
      category: tool.category,
      score: tool.score,
      featured: tool.featured,
      isNew: tool.isNew,
      affiliateUrl: tool.affiliateUrl,
    }))

    return NextResponse.json({
      success: true,
      tools: formattedTools,
    })
  } catch (error) {
    console.error("Error al obtener herramientas:", error)
    return NextResponse.json(
      { success: false, message: "Error al obtener herramientas", error: String(error) },
      { status: 500 },
    )
  }
}
