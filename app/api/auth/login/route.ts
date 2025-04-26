import { NextResponse } from "next/server"
import { getUserByCredentials, createSession, setAuthCookie } from "@/lib/auth"

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()

    // Validar datos
    if (!email || !password) {
      return NextResponse.json({ success: false, message: "Email y contraseña son obligatorios" }, { status: 400 })
    }

    // Verificar credenciales
    const user = await getUserByCredentials(email, password)
    if (!user) {
      return NextResponse.json({ success: false, message: "Credenciales incorrectas" }, { status: 401 })
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
    console.error("Error en login:", error)
    return NextResponse.json({ success: false, message: "Error en el servidor" }, { status: 500 })
  }
}
