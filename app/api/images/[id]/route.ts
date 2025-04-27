import { type NextRequest, NextResponse } from "next/server"
import { deleteImage, getImageById } from "@/lib/image-service"
import { isAuthenticated, isAdmin } from "@/lib/auth"

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const imageId = Number.parseInt(params.id)

    if (isNaN(imageId)) {
      return NextResponse.json({ error: "ID de imagen inválido" }, { status: 400 })
    }

    const image = await getImageById(imageId)

    if (!image) {
      return NextResponse.json({ error: "Imagen no encontrada" }, { status: 404 })
    }

    return NextResponse.json(image, { status: 200 })
  } catch (error) {
    console.error("Error al obtener la imagen:", error)
    return NextResponse.json({ error: "Error al obtener la imagen", details: error }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
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

    const imageId = Number.parseInt(params.id)

    if (isNaN(imageId)) {
      return NextResponse.json({ error: "ID de imagen inválido" }, { status: 400 })
    }

    await deleteImage(imageId)

    return NextResponse.json({ success: true, message: "Imagen eliminada correctamente" }, { status: 200 })
  } catch (error) {
    console.error("Error al eliminar la imagen:", error)
    return NextResponse.json({ error: "Error al eliminar la imagen", details: error }, { status: 500 })
  }
}
