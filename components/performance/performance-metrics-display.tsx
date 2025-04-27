"use client"

import type React from "react"
import type { WebVitalsMetrics } from "@/utils/performance-metrics"

interface PerformanceMetricsDisplayProps {
  metrics: Partial<WebVitalsMetrics>
  loading?: boolean
}

const MetricCard: React.FC<{
  label: string
  value: number | null
  unit?: string
  threshold?: { good: number; needsImprovement: number }
  lowerIsBetter?: boolean
  description: string
}> = ({ label, value, unit = "ms", threshold, lowerIsBetter = true, description }) => {
  let statusColor = "bg-gray-200"
  let textColor = "text-gray-700"

  if (value !== null && threshold) {
    if (lowerIsBetter) {
      if (value <= threshold.good) {
        statusColor = "bg-green-100"
        textColor = "text-green-700"
      } else if (value <= threshold.needsImprovement) {
        statusColor = "bg-yellow-100"
        textColor = "text-yellow-700"
      } else {
        statusColor = "bg-red-100"
        textColor = "text-red-700"
      }
    } else {
      if (value >= threshold.good) {
        statusColor = "bg-green-100"
        textColor = "text-green-700"
      } else if (value >= threshold.needsImprovement) {
        statusColor = "bg-yellow-100"
        textColor = "text-yellow-700"
      } else {
        statusColor = "bg-red-100"
        textColor = "text-red-700"
      }
    }
  }

  return (
    <div className={`rounded-lg p-4 ${statusColor}`}>
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-medium">{label}</h3>
        <span className={`text-lg font-bold ${textColor}`}>
          {value !== null ? `${value.toFixed(2)} ${unit}` : "N/A"}
        </span>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  )
}

const PerformanceMetricsDisplay: React.FC<PerformanceMetricsDisplayProps> = ({ metrics, loading = false }) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-gray-100 animate-pulse h-24 rounded-lg"></div>
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
      <MetricCard
        label="LCP (Largest Contentful Paint)"
        value={metrics.LCP}
        threshold={{ good: 2500, needsImprovement: 4000 }}
        description="Mide cuándo se renderiza el contenido principal visible."
      />

      <MetricCard
        label="FID (First Input Delay)"
        value={metrics.FID}
        threshold={{ good: 100, needsImprovement: 300 }}
        description="Mide el tiempo hasta que el usuario puede interactuar con la página."
      />

      <MetricCard
        label="CLS (Cumulative Layout Shift)"
        value={metrics.CLS}
        unit=""
        threshold={{ good: 0.1, needsImprovement: 0.25 }}
        description="Mide la estabilidad visual durante la carga."
      />

      <MetricCard
        label="FCP (First Contentful Paint)"
        value={metrics.FCP}
        threshold={{ good: 1800, needsImprovement: 3000 }}
        description="Mide cuándo se renderiza el primer contenido visible."
      />

      <MetricCard
        label="TTFB (Time to First Byte)"
        value={metrics.TTFB}
        threshold={{ good: 800, needsImprovement: 1800 }}
        description="Mide el tiempo hasta recibir el primer byte de respuesta."
      />

      <MetricCard
        label="TTI (Time to Interactive)"
        value={metrics.TTI}
        threshold={{ good: 3800, needsImprovement: 7300 }}
        description="Mide cuándo la página está completamente interactiva."
      />
    </div>
  )
}

export default PerformanceMetricsDisplay
