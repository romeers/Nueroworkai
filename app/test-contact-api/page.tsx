"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function TestContactApi() {
  const [result, setResult] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [testData] = useState({
    name: "Usuario de Prueba",
    email: "test@example.com",
    subject: "Mensaje de prueba",
    message: "Este es un mensaje de prueba para verificar que el API funciona correctamente.",
  })

  const testPostRequest = async () => {
    setLoading(true)
    try {
      const response = await fetch("/api/contact-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(testData),
      })

      const data = await response.json()
      setResult({
        status: response.status,
        statusText: response.statusText,
        data,
      })
    } catch (error) {
      setResult({
        error: true,
        message: error instanceof Error ? error.message : "Error desconocido",
      })
    } finally {
      setLoading(false)
    }
  }

  const testGetRequest = async () => {
    setLoading(true)
    try {
      const response = await fetch("/api/contact-message")
      const data = await response.json()
      setResult({
        status: response.status,
        statusText: response.statusText,
        data,
      })
    } catch (error) {
      setResult({
        error: true,
        message: error instanceof Error ? error.message : "Error desconocido",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Prueba de API de Contacto</h1>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="p-6 border rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Datos de prueba</h2>
          <pre className="bg-gray-100 p-4 rounded overflow-auto">{JSON.stringify(testData, null, 2)}</pre>

          <div className="mt-6 space-y-4">
            <Button onClick={testPostRequest} disabled={loading} className="w-full">
              {loading ? "Enviando..." : "Probar POST /api/contact-message"}
            </Button>

            <Button onClick={testGetRequest} disabled={loading} variant="outline" className="w-full">
              {loading ? "Cargando..." : "Probar GET /api/contact-message"}
            </Button>
          </div>
        </div>

        <div className="p-6 border rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Resultado</h2>
          {result ? (
            <pre className="bg-gray-100 p-4 rounded overflow-auto h-[300px]">{JSON.stringify(result, null, 2)}</pre>
          ) : (
            <div className="bg-gray-100 p-4 rounded text-center h-[300px] flex items-center justify-center">
              <p className="text-gray-500">Haz clic en uno de los botones para ver el resultado</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
