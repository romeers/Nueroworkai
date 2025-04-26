"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function TestContactPage() {
  const [name, setName] = useState("Usuario de prueba")
  const [email, setEmail] = useState("test@example.com")
  const [message, setMessage] = useState("Este es un mensaje de prueba")
  const [response, setResponse] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setResponse(null)
    setError(null)

    try {
      console.log("Enviando datos de prueba:", { name, email, message })

      const response = await fetch("/api/test-contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      })

      const data = await response.json()
      console.log("Respuesta recibida:", data)

      setResponse(data)
    } catch (err) {
      console.error("Error al enviar datos de prueba:", err)
      setError(err instanceof Error ? err.message : String(err))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Página de Prueba de Contacto</h1>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
        <p className="text-yellow-700">
          Esta es una página de diagnóstico para probar el envío de formularios. No es parte del sitio público.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Formulario de Prueba</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Nombre</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Mensaje</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-2 border rounded"
                rows={4}
              />
            </div>

            <Button type="submit" disabled={loading}>
              {loading ? "Enviando..." : "Enviar datos de prueba"}
            </Button>
          </form>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Resultados</h2>

          {error && (
            <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
              <p className="text-red-700">Error: {error}</p>
            </div>
          )}

          {response && (
            <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
              <p className="text-green-700">
                {response.success ? "✅ Éxito" : "❌ Error"}: {response.message}
              </p>
            </div>
          )}

          {response && (
            <div className="mt-4">
              <h3 className="text-lg font-medium mb-2">Respuesta completa:</h3>
              <pre className="bg-gray-100 p-4 rounded overflow-auto max-h-60">{JSON.stringify(response, null, 2)}</pre>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
