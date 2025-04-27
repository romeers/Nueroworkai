"use client"

import { useState } from "react"

export default function InitPerformanceTablesPage() {
  const [isInitializing, setIsInitializing] = useState(false)
  const [result, setResult] = useState<{ success?: boolean; message?: string; error?: string } | null>(null)
  const [adminKey, setAdminKey] = useState("")

  const initializeTables = async () => {
    if (!adminKey) {
      setResult({ error: "Por favor, introduce la clave de administrador" })
      return
    }

    setIsInitializing(true)
    setResult(null)

    try {
      const response = await fetch(`/api/admin/init-performance-tables?adminKey=${adminKey}`, {
        method: "POST",
      })

      const data = await response.json()

      if (response.ok) {
        setResult({ success: true, message: data.message || "Tablas inicializadas correctamente" })
      } else {
        setResult({ error: data.error || "Error al inicializar las tablas" })
      }
    } catch (error) {
      console.error("Error:", error)
      setResult({ error: "Error al conectar con el servidor" })
    } finally {
      setIsInitializing(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Inicializar Tablas de Rendimiento</h1>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-8">
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          Esta página te permite inicializar las tablas necesarias para almacenar los resultados de las pruebas de
          rendimiento. Solo necesitas ejecutar esto una vez.
        </p>

        <div className="mb-4">
          <label htmlFor="adminKey" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Clave de administrador
          </label>
          <input
            type="password"
            id="adminKey"
            value={adminKey}
            onChange={(e) => setAdminKey(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <button
          onClick={initializeTables}
          disabled={isInitializing}
          className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50"
        >
          {isInitializing ? "Inicializando..." : "Inicializar tablas"}
        </button>

        {result && (
          <div
            className={`mt-4 p-4 rounded-md ${result.success ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
          >
            {result.success ? result.message : result.error}
          </div>
        )}
      </div>
    </div>
  )
}
