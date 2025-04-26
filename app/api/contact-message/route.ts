import { sql } from "@vercel/postgres"
import { type NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json()

    if (!email || !message) {
      return NextResponse.json({ error: "Email and message are required." }, { status: 400 })
    }

    await sql`
      CREATE TABLE IF NOT EXISTS contact_messages (
        id SERIAL PRIMARY KEY,
        name TEXT,
        email TEXT NOT NULL,
        subject TEXT,
        message TEXT NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `

    await sql`
      INSERT INTO contact_messages (name, email, subject, message)
      VALUES (${name || null}, ${email}, ${subject || null}, ${message})
    `

    return NextResponse.json({ message: "Message saved successfully." }, { status: 201 })
  } catch (error) {
    console.error("Error saving contact message:", error)
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 })
  }
}

export async function GET() {
  try {
    // Verificar si la tabla existe
    const tableCheck = await sql`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_name = 'contact_messages'
      );
    `

    const tableExists = tableCheck.rows[0].exists

    if (!tableExists) {
      return NextResponse.json({ messages: [] })
    }

    const result = await sql`
      SELECT * FROM contact_messages 
      ORDER BY created_at DESC
    `

    return NextResponse.json({ messages: result.rows })
  } catch (error) {
    console.error("Error fetching contact messages:", error)
    return NextResponse.json({ error: "Failed to fetch messages" }, { status: 500 })
  }
}
