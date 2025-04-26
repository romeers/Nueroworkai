import { NextResponse } from "next/server"
import { sendEmailWithAttachment } from "@/lib/email-service"

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ success: false, message: "Email inválido" }, { status: 400 })
    }

    // Aquí podrías guardar el email en tu base de datos o servicio de newsletter

    // Enviar el kit por email
    const kitUrl = `${process.env.NEXT_PUBLIC_SITE_URL || "https://neuroworkai.com"}/kit-productividad-ia-2025.pdf`
    const result = await sendEmailWithAttachment(
      email,
      "🚀 Tu Kit de Productividad IA NeuroWorkAI (2025)",
      `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #6D28D9;">¡Gracias por suscribirte a NeuroWorkAI!</h1>
        
        <p>Aquí tienes tu <strong>Kit de Productividad IA NeuroWorkAI (2025)</strong> que te ayudará a multiplicar tu productividad con inteligencia artificial.</p>
        
        <p>En este kit encontrarás:</p>
        <ul>
          <li>Las 6 Herramientas IA Esenciales para Productividad Remota</li>
          <li>10 Prompts Prácticos para Optimizar tu Productividad</li>
          <li>3 Flujos de Automatización Inteligentes (Zapier, Make)</li>
          <li>Plantilla de Productividad Diaria con IA (Notion)</li>
        </ul>
        
        <p>El PDF está adjunto a este email. Si tienes problemas para visualizarlo, también puedes <a href="${kitUrl}" style="color: #6D28D9;">descargarlo directamente aquí</a>.</p>
        
        <p>¡Esperamos que te sea de gran utilidad!</p>
        
        <p>El equipo de NeuroWorkAI</p>
      </div>
      `,
      kitUrl,
      "Kit-Productividad-IA-NeuroWorkAI-2025.pdf",
    )

    if (!result.success) {
      return NextResponse.json({ success: false, message: "Error al enviar el email" }, { status: 500 })
    }

    return NextResponse.json({ success: true, message: "Kit enviado correctamente" })
  } catch (error) {
    console.error("Error en suscripción:", error)
    return NextResponse.json({ success: false, message: "Error en el servidor" }, { status: 500 })
  }
}
