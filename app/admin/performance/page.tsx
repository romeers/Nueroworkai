import PerformanceTestRunner from "@/components/performance/performance-test-runner"
import PerformanceChart from "@/components/performance/performance-chart"

export const metadata = {
  title: "Pruebas de Rendimiento | NeuroWorkAI Admin",
  description: "Ejecuta y analiza pruebas de rendimiento para NeuroWorkAI",
}

async function getPerformanceData() {
  // En un entorno real, esto obtendría datos de la API
  // Por ahora, devolvemos datos de ejemplo
  return []
}

export default async function PerformancePage() {
  const performanceData = await getPerformanceData()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Pruebas de Rendimiento</h1>

      <div className="mb-8">
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Ejecuta pruebas de rendimiento para medir las métricas de Core Web Vitals y otros indicadores importantes. Los
          resultados te ayudarán a identificar áreas de mejora y verificar el impacto de las optimizaciones.
        </p>
      </div>

      <PerformanceTestRunner />

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Historial de rendimiento</h2>

        {performanceData.length > 0 ? (
          <>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">Core Web Vitals</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <PerformanceChart data={performanceData} metric="lcp" title="Largest Contentful Paint (LCP)" />
                <PerformanceChart data={performanceData} metric="fid" title="First Input Delay (FID)" />
                <PerformanceChart data={performanceData} metric="cls" title="Cumulative Layout Shift (CLS)" />
                <PerformanceChart data={performanceData} metric="ttfb" title="Time to First Byte (TTFB)" />
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-500 dark:text-gray-400">
              No hay datos históricos disponibles. Ejecuta algunas pruebas para empezar a recopilar datos.
            </p>
          </div>
        )}
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-4">Recomendaciones de optimización</h2>

        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 pl-4 py-2">
            <h3 className="font-medium">Optimiza las imágenes</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Utiliza formatos modernos como WebP o AVIF y asegúrate de que las imágenes tengan el tamaño adecuado.
            </p>
          </div>

          <div className="border-l-4 border-blue-500 pl-4 py-2">
            <h3 className="font-medium">Minimiza JavaScript</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Reduce el tamaño de los archivos JavaScript y considera la carga diferida para scripts no críticos.
            </p>
          </div>

          <div className="border-l-4 border-blue-500 pl-4 py-2">
            <h3 className="font-medium">Optimiza la carga de fuentes</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Utiliza font-display: swap y preconecta con los orígenes de las fuentes.
            </p>
          </div>

          <div className="border-l-4 border-blue-500 pl-4 py-2">
            <h3 className="font-medium">Implementa caché efectiva</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Configura correctamente las cabeceras de caché para recursos estáticos.
            </p>
          </div>

          <div className="border-l-4 border-blue-500 pl-4 py-2">
            <h3 className="font-medium">Reduce el tiempo de respuesta del servidor</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Optimiza las consultas a la base de datos y considera la implementación de caché a nivel de servidor.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
