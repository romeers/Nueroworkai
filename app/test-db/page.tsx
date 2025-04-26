"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function TestDbPage() {
  const [result, setResult] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const testConnection = async () => {
    setLoading(true)
    setResult(null)
    setError(null)

    try {
      console.log("Probando conexión a la base de datos...")

      const response = await fetch("/api/test-db-connection")
      const data = await response.json()

      console.log("Respuesta recibida:", data)
      setResult(data)
    } catch (err) {
      console.error("Error al probar la conexión:", err)
      setError(err instanceof Error ? err.message : String(err))
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    testConnection()
  }, [])

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Diagnóstico de Conexión a la Base de Datos</h1>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
        <p className="text-yellow-700">
          Esta es una página de diagnóstico para probar la conexión a la base de datos. No es parte del sitio público.
        </p>
      </div>

      <div className="space-y-6">
        <Button onClick={testConnection} disabled={loading} className="mb-4">
          {loading ? "Probando..." : "Probar conexión a la base de datos"}
        </Button>

        {error && (
          <div className="bg-red-50 border-l-4 border-red-400 p-4">
            <p className="text-red-700">Error: {error}</p>
          </div>
        )}

        {result && (
          <div
            className={`border-l-4 p-4 ${result.success ? "bg-green-50 border-green-400" : "bg-red-50 border-red-400"}`}
          >
            <p className={result.success ? "text-green-700" : "text-red-700"}>
              {result.success ? "✅ Conexión exitosa" : "❌ Error de conexión"}: {result.message}
            </p>

            {result.time && (
              <p className="mt-2 text-gray-600">Hora del servidor: {new Date(result.time).toLocaleString()}</p>
            )}

            {result.connectionString && (
              <p className="mt-2 text-gray-600">Cadena de conexión (parcial): {result.connectionString}</p>
            )}

            {result.error && <p className="mt-2 text-red-600">Detalles del error: {result.error}</p>}
          </div>
        )}

        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-4">Pasos para solucionar problemas</h2>

          <ol className="list-decimal pl-6 space-y-2">
            <li>
              Verifica que la variable de entorno <code>DATABASE_URL</code> esté configurada correctamente.
            </li>
            <li>Asegúrate de que la base de datos Neon esté activa y accesible.</li>
            <li>
              Comprueba que la función <code>getDbConnection()</code> esté funcionando correctamente.
            </li>
            <li>Verifica que no haya restricciones de firewall o red que bloqueen la conexión.</li>
            <li>Asegúrate de que las credenciales de la base de datos sean correctas.</li>
          </ol>
        </div>
      </div>
    </div>
  )
}
