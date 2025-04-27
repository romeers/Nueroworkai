"use client"

import type React from "react"
import { useState } from "react"
import { runPerformanceTest, savePerformanceTestResult, type PerformanceTestResult } from "@/utils/performance-metrics"
import PerformanceMetricsDisplay from "./performance-metrics-display"

interface PerformanceTestRunnerProps {
  onTestComplete?: (result: PerformanceTestResult) => void
}

const PerformanceTestRunner: React.FC<PerformanceTestRunnerProps> = ({ onTestComplete }) => {
  const [isRunning, setIsRunning] = useState(false)
  const [testResult, setTestResult] = useState<PerformanceTestResult | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [url, setUrl] = useState("")
  const [saveResult, setSaveResult] = useState(true)

  const runTest = async () => {
    setIsRunning(true)
    setError(null)

    try {
      const testUrl = url || window.location.href
      const result = await runPerformanceTest(testUrl)

      setTestResult(result)

      if (saveResult) {
        await savePerformanceTestResult(result)
      }

      if (onTestComplete) {
        onTestComplete(result)
      }
    } catch (err) {
      console.error("Error al ejecutar la prueba de rendimiento:", err)
      setError("Error al ejecutar la prueba de rendimiento. Por favor, inténtalo de nuevo.")
    } finally {
      setIsRunning(false)
    }
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-8">
      <h2 className="text-2xl font-bold mb-4">Ejecutar prueba de rendimiento</h2>

      <div className="mb-6">
        <label htmlFor="url" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          URL a probar (deja en blanco para la página actual)
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            id="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://neuroworkai.com"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            onClick={runTest}
            disabled={isRunning}
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50"
          >
            {isRunning ? "Ejecutando..." : "Ejecutar prueba"}
          </button>
        </div>

        <div className="mt-2">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={saveResult}
              onChange={(e) => setSaveResult(e.target.checked)}
              className="mr-2 h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
            />
            <span className="text-sm text-gray-600 dark:text-gray-400">Guardar resultados para análisis histórico</span>
          </label>
        </div>
      </div>

      {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">{error}</div>}

      {testResult && (
        <div>
          <h3 className="text-xl font-semibold mb-4">Resultados de la prueba</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Información general</h4>
              <p className="text-sm mb-1">URL: {testResult.url}</p>
              <p className="text-sm mb-1">Fecha: {new Date(testResult.timestamp).toLocaleString()}</p>
              <p className="text-sm mb-1">Dispositivo: {testResult.deviceType}</p>
              <p className="text-sm">Conexión: {testResult.connection}</p>
            </div>

            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Recursos cargados</h4>
              <p className="text-sm mb-1">Total: {testResult.resources.total}</p>
              <p className="text-sm mb-1">JavaScript: {testResult.resources.js}</p>
              <p className="text-sm mb-1">CSS: {testResult.resources.css}</p>
              <p className="text-sm mb-1">Imágenes: {testResult.resources.img}</p>
              <p className="text-sm mb-1">Otros: {testResult.resources.other}</p>
              <p className="text-sm">Tamaño total: {(testResult.resources.totalSize / 1024 / 1024).toFixed(2)} MB</p>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-4">Métricas de rendimiento</h3>
          <PerformanceMetricsDisplay metrics={testResult.metrics} />
        </div>
      )}
    </div>
  )
}

export default PerformanceTestRunner
