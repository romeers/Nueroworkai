"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

interface PerformanceData {
  timestamp: string
  lcp: number
  fid: number
  cls: number
  fcp: number
  ttfb: number
}

interface PerformanceChartProps {
  data: PerformanceData[]
  metric?: "lcp" | "fid" | "cls" | "fcp" | "ttfb"
  title?: string
  height?: number
}

const metricColors = {
  lcp: "#8884d8",
  fid: "#82ca9d",
  cls: "#ffc658",
  fcp: "#ff8042",
  ttfb: "#0088fe",
}

const metricLabels = {
  lcp: "LCP (ms)",
  fid: "FID (ms)",
  cls: "CLS",
  fcp: "FCP (ms)",
  ttfb: "TTFB (ms)",
}

const PerformanceChart: React.FC<PerformanceChartProps> = ({
  data,
  metric = "lcp",
  title = "Rendimiento a lo largo del tiempo",
  height = 300,
}) => {
  const [chartData, setChartData] = useState<any[]>([])

  useEffect(() => {
    if (data && data.length > 0) {
      // Formatear los datos para el gráfico
      const formattedData = data.map((item) => ({
        timestamp: new Date(item.timestamp).toLocaleDateString(),
        [metric]: item[metric],
      }))

      setChartData(formattedData)
    }
  }, [data, metric])

  if (!data || data.length === 0) {
    return <div className="text-center p-4">No hay datos disponibles</div>
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 mb-6">
      <h3 className="text-lg font-medium mb-4">{title}</h3>
      <ResponsiveContainer width="100%" height={height}>
        <LineChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey={metric}
            stroke={metricColors[metric]}
            name={metricLabels[metric]}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default PerformanceChart
