"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { formatDistanceToNow } from "date-fns"
import { es } from "date-fns/locale"
import { getDbConnection } from "@/lib/db-connection"

interface Subscriber {
  id: number
  email: string
  name: string | null
  subscribed_at: string
  status: string
  source: string | null
}

export default function SubscribersPage() {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { toast } = useToast()

  const fetchSubscribers = async () => {
    setLoading(true)
    setError(null)

    try {
      const sql = getDbConnection()
      const response = await fetch("/api/subscriptions")
      const data = await response.json()

      if (!data.success) {
        throw new Error(data.message || "Error al obtener suscriptores")
      }

      setSubscribers(data.subscribers || [])
    } catch (error) {
      console.error("Error al obtener suscriptores:", error)
      setError(error instanceof Error ? error.message : "Error al obtener suscriptores")
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Error al obtener suscriptores",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchSubscribers()
  }, [])

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString)
      return `${date.toLocaleDateString()} (${formatDistanceToNow(date, { addSuffix: true, locale: es })})`
    } catch (e) {
      return dateString
    }
  }

  return (
    <div className="container mx-auto py-8">
      <Card>
        <CardHeader>
          <CardTitle>Suscriptores</CardTitle>
          <CardDescription>Gestiona los suscriptores de tu newsletter y descargas</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Button onClick={fetchSubscribers} disabled={loading}>
              {loading ? "Cargando..." : "Actualizar"}
            </Button>
          </div>

          {error && <div className="bg-red-50 text-red-800 p-4 rounded-md mb-4">{error}</div>}

          {subscribers.length === 0 && !loading ? (
            <div className="text-center py-8 text-gray-500">No hay suscriptores registrados</div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Nombre</TableHead>
                    <TableHead>Fecha</TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead>Origen</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {subscribers.map((subscriber) => (
                    <TableRow key={subscriber.id}>
                      <TableCell>{subscriber.id}</TableCell>
                      <TableCell>{subscriber.email}</TableCell>
                      <TableCell>{subscriber.name || "-"}</TableCell>
                      <TableCell>{formatDate(subscriber.subscribed_at)}</TableCell>
                      <TableCell>
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            subscriber.status === "active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {subscriber.status || "active"}
                        </span>
                      </TableCell>
                      <TableCell>{subscriber.source || "-"}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
