"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function TestTablesPage() {
  const [tables, setTables] = useState<string[]>([])
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const fetchTables = async () => {
    setLoading(true)
    setError(null)

    try {
      console.log("Obteniendo tablas...")

      const response = await fetch("/api/test-tables")
      const data = await response.json()

      console.log("Respuesta recibida:", data)

      if (data.success) {
        setTables(data.tables || [])
      } else {
        setError(data.message || "Error desconocido")
      }
    } catch (err) {
      console.error("Error al obtener tablas:", err)
      setError(err instanceof Error ? err.message : String(err))
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchTables()
  }, [])

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Tablas en la Base de Datos</h1>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
        <p className="text-yellow-700">
          Esta es una página de diagnóstico para verificar las tablas existentes en la base de datos. No es parte del
          sitio público.
        </p>
      </div>

      <Button onClick={fetchTables} disabled={loading} className="mb-6">
        {loading ? "Obteniendo tablas..." : "Actualizar lista de tablas"}
      </Button>

      {error && (
        <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
          <p className="text-red-700">Error: {error}</p>
        </div>
      )}

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="px-4 py-5 sm:px-6">
          <h2 className="text-lg font-medium text-gray-900">Tablas encontradas: {tables.length}</h2>
        </div>

        {tables.length > 0 ? (
          <ul className="divide-y divide-gray-200">
            {tables.map((table) => (
              <li key={table} className="px-4 py-4 sm:px-6">
                {table}
              </li>
            ))}
          </ul>
        ) : (
          <div className="px-4 py-5 sm:px-6 text-gray-500">
            {loading ? "Cargando tablas..." : "No se encontraron tablas en la base de datos"}
          </div>
        )}
      </div>
    </div>
  )
}
