import { type NextRequest, NextResponse } from "next/server"
import { associateImageWithResource, getResourceImages } from "@/lib/image-service"
import { isAuthenticated, isAdmin } from "@/lib/auth"

export async function POST(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    // Verificar autenticación y permisos de administrador
    const isAuth = await isAuthenticated(request)
    if (!isAuth) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 })
    }

    const isAdminUser = await isAdmin(request)
    if (!isAdminUser) {
      return NextResponse.json({ error: "Se requieren permisos de administrador" }, { status: 403 })
    }

    const resourceId = Number.parseInt(params.id)

    if (isNaN(resourceId)) {
      return NextResponse.json({ error: "ID de recurso inválido" }, { status: 400 })
    }

    const body = await request.json()
    const { imageId, isPrimary, displayOrder } = body

    if (!imageId) {
      return NextResponse.json({ error: "Se requiere el ID de la imagen" }, { status: 400 })
    }

    await associateImageWithResource(imageId, resourceId, isPrimary || false, displayOrder || 0)

    return NextResponse.json({ success: true, message: "Imagen asociada correctamente" }, { status: 200 })
  } catch (error) {
    console.error("Error al asociar la imagen con el recurso:", error)
    return NextResponse.json({ error: "Error al asociar la imagen", details: error }, { status: 500 })
  }
}

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const resourceId = Number.parseInt(params.id)

    if (isNaN(resourceId)) {
      return NextResponse.json({ error: "ID de recurso inválido" }, { status: 400 })
    }

    const images = await getResourceImages(resourceId)

    return NextResponse.json(images, { status: 200 })
  } catch (error) {
    console.error("Error al obtener imágenes del recurso:", error)
    return NextResponse.json({ error: "Error al obtener imágenes", details: error }, { status: 500 })
  }
}
