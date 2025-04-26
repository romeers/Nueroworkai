"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Loader2, RefreshCw } from "lucide-react"
import { formatDistanceToNow } from "date-fns"
import { es } from "date-fns/locale"

interface ContactMessage {
  id: number
  name: string
  email: string
  subject: string
  message: string
  created_at: string
}

export default function MensajesPage() {
  const [messages, setMessages] = useState<ContactMessage[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchMessages = async () => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/contact-message")

      if (!response.ok) {
        throw new Error("Error al cargar los mensajes")
      }

      const data = await response.json()
      setMessages(data.messages || [])
    } catch (error) {
      console.error("Error al cargar los mensajes:", error)
      setError("No se pudieron cargar los mensajes. Por favor, inténtalo de nuevo.")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchMessages()
  }, [])

  return (
    <div className="container mx-auto py-10">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Mensajes de Contacto</h1>
        <Button onClick={fetchMessages} variant="outline" className="flex items-center gap-2">
          <RefreshCw className="h-4 w-4" />
          Actualizar
        </Button>
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-20">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <span className="ml-2">Cargando mensajes...</span>
        </div>
      ) : error ? (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">{error}</div>
      ) : messages.length === 0 ? (
        <div className="text-center py-20">
          <h2 className="mt-4 text-xl font-semibold">No hay mensajes</h2>
          <p className="mt-2 text-gray-500">Aún no has recibido ningún mensaje de contacto.</p>
        </div>
      ) : (
        <div className="grid gap-6">
          {messages.map((message) => (
            <Card key={message.id}>
              <CardHeader className="pb-2">
                <div className="flex justify-between">
                  <CardTitle className="text-xl">{message.subject || "Sin asunto"}</CardTitle>
                  <div className="text-sm text-gray-500">
                    {formatDistanceToNow(new Date(message.created_at), {
                      addSuffix: true,
                      locale: es,
                    })}
                  </div>
                </div>
                <div className="text-sm text-gray-500">
                  De: {message.name || "Anónimo"} ({message.email})
                </div>
              </CardHeader>
              <CardContent>
                <p className="whitespace-pre-line">{message.message}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
