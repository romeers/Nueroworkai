import { NextResponse } from "next/server"
import { getPopularComparisons } from "@/lib/static-data"

export async function GET() {
  try {
    const comparisons = getPopularComparisons(8) // Obtener las 8 comparaciones más populares

    // Transformar los datos para que sean más fáciles de usar en el frontend
    const formattedComparisons = comparisons.map((comparison) => ({
      id: comparison.id,
      slug: comparison.slug,
      title: comparison.title,
      description: comparison.description,
      viewCount: comparison.viewCount,
      tool1: {
        name: comparison.tool1_name,
        slug: comparison.tool1_slug,
      },
      tool2: {
        name: comparison.tool2_name,
        slug: comparison.tool2_slug,
      },
    }))

    return NextResponse.json({
      success: true,
      comparisons: formattedComparisons,
    })
  } catch (error) {
    console.error("Error al obtener comparaciones populares:", error)
    return NextResponse.json(
      { success: false, message: "Error al obtener comparaciones populares", error: String(error) },
      { status: 500 },
    )
  }
}
