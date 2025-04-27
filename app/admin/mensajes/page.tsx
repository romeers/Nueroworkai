"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertCircle, CheckCircle, Trash2, RefreshCw } from "lucide-react"

interface ContactMessage {
  id: number
  name: string | null
  email: string
  subject: string | null
  message: string
  status: string
  created_at: string
}

export default function MensajesPage() {
  const [messages, setMessages] = useState<ContactMessage[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState("all")

  const fetchMessages = async () => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/contact")

      if (!response.ok) {
        throw new Error("Error al cargar los mensajes")
      }

      const data = await response.json()

      if (data.success === false) {
        throw new Error(data.message || "Error al cargar los mensajes")
      }

      setMessages(data.messages || [])
    } catch (error) {
      console.error("Error al cargar mensajes:", error)
      setError(error instanceof Error ? error.message : "Error al cargar los mensajes")
    } finally {
      setLoading(false)
    }
  }

  const updateMessageStatus = async (id: number, status: string) => {
    try {
      const response = await fetch(`/api/contact/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      })

      if (!response.ok) {
        throw new Error("Error al actualizar el estado del mensaje")
      }

      // Actualizar el estado local
      setMessages((prev) => prev.map((msg) => (msg.id === id ? { ...msg, status } : msg)))
    } catch (error) {
      console.error("Error al actualizar estado:", error)
      alert("Error al actualizar el estado del mensaje")
    }
  }

  const deleteMessage = async (id: number) => {
    if (!confirm("¿Estás seguro de que quieres eliminar este mensaje?")) {
      return
    }

    try {
      const response = await fetch(`/api/contact/${id}`, {
        method: "DELETE",
      })

      if (!response.ok) {
        throw new Error("Error al eliminar el mensaje")
      }

      // Eliminar el mensaje del estado local
      setMessages((prev) => prev.filter((msg) => msg.id !== id))
    } catch (error) {
      console.error("Error al eliminar mensaje:", error)
      alert("Error al eliminar el mensaje")
    }
  }

  useEffect(() => {
    fetchMessages()
  }, [])

  const filteredMessages = activeTab === "all" ? messages : messages.filter((msg) => msg.status === activeTab)

  return (
    <div className="container py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Mensajes de contacto</h1>
        <Button onClick={fetchMessages} variant="outline" className="flex items-center gap-2">
          <RefreshCw className="h-4 w-4" />
          Actualizar
        </Button>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
        </div>
      ) : error ? (
        <div className="flex items-center gap-2 text-red-500 bg-red-50 p-4 rounded-md">
          <AlertCircle className="h-5 w-5" />
          <p>{error}</p>
        </div>
      ) : (
        <>
          <Tabs defaultValue="all" className="mb-6" onValueChange={setActiveTab}>
            <TabsList>
              <TabsTrigger value="all">
                Todos <Badge className="ml-2">{messages.length}</Badge>
              </TabsTrigger>
              <TabsTrigger value="unread">
                No leídos <Badge className="ml-2">{messages.filter((m) => m.status === "unread").length}</Badge>
              </TabsTrigger>
              <TabsTrigger value="read">
                Leídos <Badge className="ml-2">{messages.filter((m) => m.status === "read").length}</Badge>
              </TabsTrigger>
            </TabsList>

            <TabsContent value={activeTab}>
              {filteredMessages.length === 0 ? (
                <div className="text-center py-12 text-gray-500">
                  No hay mensajes {activeTab !== "all" ? `con estado "${activeTab}"` : ""}
                </div>
              ) : (
                <div className="grid gap-4">
                  {filteredMessages.map((message) => (
                    <Card key={message.id} className={message.status === "unread" ? "border-blue-300" : ""}>
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle>{message.subject || "Sin asunto"}</CardTitle>
                            <CardDescription>
                              De: {message.name || "Anónimo"} ({message.email})
                            </CardDescription>
                          </div>
                          <Badge variant={message.status === "unread" ? "default" : "outline"}>
                            {message.status === "unread" ? "No leído" : "Leído"}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="mb-4">
                          <p className="whitespace-pre-wrap">{message.message}</p>
                          <p className="text-sm text-gray-500 mt-2">{new Date(message.created_at).toLocaleString()}</p>
                        </div>
                        <div className="flex justify-end gap-2">
                          {message.status === "unread" ? (
                            <Button
                              size="sm"
                              variant="outline"
                              className="flex items-center gap-1"
                              onClick={() => updateMessageStatus(message.id, "read")}
                            >
                              <CheckCircle className="h-4 w-4" />
                              Marcar como leído
                            </Button>
                          ) : (
                            <Button
                              size="sm"
                              variant="outline"
                              className="flex items-center gap-1"
                              onClick={() => updateMessageStatus(message.id, "unread")}
                            >
                              Marcar como no leído
                            </Button>
                          )}
                          <Button
                            size="sm"
                            variant="destructive"
                            className="flex items-center gap-1"
                            onClick={() => deleteMessage(message.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                            Eliminar
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </>
      )}
    </div>
  )
}
