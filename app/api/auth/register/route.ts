import { NextResponse } from "next/server"
import { createUser, createSession, setAuthCookie } from "@/lib/auth"

export async function POST(request: Request) {
  try {
    const { email, password, name } = await request.json()

    // Validar datos
    if (!email || !password) {
      return NextResponse.json({ success: false, message: "Email y contraseña son obligatorios" }, { status: 400 })
    }

    // Crear usuario
    const user = await createUser(email, password, name)
    if (!user) {
      return NextResponse.json(
        { success: false, message: "No se pudo crear el usuario. El email podría estar en uso." },
        { status: 400 },
      )
    }

    // Crear sesión
    const token = await createSession(user.id)
    if (!token) {
      return NextResponse.json({ success: false, message: "Error al crear la sesión" }, { status: 500 })
    }

    // Establecer cookie
    setAuthCookie(token)

    return NextResponse.json({
      success: true,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
      },
    })
  } catch (error) {
    console.error("Error en registro:", error)
    return NextResponse.json({ success: false, message: "Error en el servidor" }, { status: 500 })
  }
}
