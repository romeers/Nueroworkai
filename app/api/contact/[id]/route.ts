import { NextResponse } from "next/server"
import { getDbConnection } from "@/lib/db-simple"

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  try {
    const sql = getDbConnection()
    if (!sql) {
      return NextResponse.json({ success: false, message: "Error de conexión a la base de datos" }, { status: 500 })
    }

    const { id } = params
    const { status } = await request.json()

    // Validación básica
    if (!status || typeof status !== "string") {
      return NextResponse.json({ success: false, message: "Estado inválido" }, { status: 400 })
    }

    // Verificar si la tabla existe
    const tableExists = await sql`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_name = 'contact_messages'
      );
    `

    if (!tableExists[0].exists) {
      return NextResponse.json({ success: false, message: "La tabla de mensajes no existe" }, { status: 404 })
    }

    // Actualizar el estado del mensaje
    const result = await sql`
      UPDATE contact_messages
      SET status = ${status}
      WHERE id = ${id}
      RETURNING id, status
    `

    if (result.length === 0) {
      return NextResponse.json({ success: false, message: "Mensaje no encontrado" }, { status: 404 })
    }

    return NextResponse.json({
      success: true,
      message: "Estado actualizado correctamente",
      updatedMessage: result[0],
    })
  } catch (error) {
    console.error("Error al actualizar el estado del mensaje:", error)
    return NextResponse.json({ success: false, message: "Error al actualizar el estado del mensaje" }, { status: 500 })
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const sql = getDbConnection()
    if (!sql) {
      return NextResponse.json({ success: false, message: "Error de conexión a la base de datos" }, { status: 500 })
    }

    const { id } = params

    // Verificar si la tabla existe
    const tableExists = await sql`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_name = 'contact_messages'
      );
    `

    if (!tableExists[0].exists) {
      return NextResponse.json({ success: false, message: "La tabla de mensajes no existe" }, { status: 404 })
    }

    // Eliminar el mensaje
    const result = await sql`
      DELETE FROM contact_messages
      WHERE id = ${id}
      RETURNING id
    `

    if (result.length === 0) {
      return NextResponse.json({ success: false, message: "Mensaje no encontrado" }, { status: 404 })
    }

    return NextResponse.json({
      success: true,
      message: "Mensaje eliminado correctamente",
      deletedId: result[0].id,
    })
  } catch (error) {
    console.error("Error al eliminar el mensaje:", error)
    return NextResponse.json({ success: false, message: "Error al eliminar el mensaje" }, { status: 500 })
  }
}
