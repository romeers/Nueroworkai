"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle, AlertTriangle, XCircle, RefreshCw } from "lucide-react"
import { runDiagnostics, generateDiagnosticReport } from "@/utils/site-diagnostics"

export default function DiagnosticsPage() {
  const [isRunning, setIsRunning] = useState(false)
  const [results, setResults] = useState<any[]>([])
  const [report, setReport] = useState<string>("")

  const runDiagnosticsCheck = async () => {
    setIsRunning(true)
    try {
      const diagnosticResults = await runDiagnostics()
      setResults(diagnosticResults)
      setReport(generateDiagnosticReport(diagnosticResults))
    } catch (error) {
      console.error("Error al ejecutar diagnósticos:", error)
    } finally {
      setIsRunning(false)
    }
  }

  useEffect(() => {
    // Ejecutar diagnósticos automáticamente al cargar la página
    runDiagnosticsCheck()
  }, [])

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "success":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "warning":
        return <AlertTriangle className="h-5 w-5 text-amber-500" />
      case "error":
        return <XCircle className="h-5 w-5 text-red-500" />
      default:
        return null
    }
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Diagnóstico del Sitio</h1>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Ejecutar Diagnóstico</CardTitle>
          <CardDescription>
            Analiza la configuración y el código del sitio para detectar posibles problemas
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500 mb-4">
            El diagnóstico verificará la integridad de los datos, rutas, imágenes, SEO, rendimiento y accesibilidad.
          </p>
        </CardContent>
        <CardFooter>
          <Button onClick={runDiagnosticsCheck} disabled={isRunning} className="w-full">
            {isRunning ? (
              <>
                <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                Ejecutando diagnóstico...
              </>
            ) : (
              <>Ejecutar Diagnóstico</>
            )}
          </Button>
        </CardFooter>
      </Card>

      {results.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Resultados del Diagnóstico</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Card className="bg-green-50 border-green-200">
              <CardContent className="pt-6">
                <div className="text-center">
                  <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
                  <h3 className="text-xl font-bold text-green-700">
                    {results.filter((r) => r.status === "success").length}
                  </h3>
                  <p className="text-green-600">Comprobaciones exitosas</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-amber-50 border-amber-200">
              <CardContent className="pt-6">
                <div className="text-center">
                  <AlertTriangle className="h-8 w-8 text-amber-500 mx-auto mb-2" />
                  <h3 className="text-xl font-bold text-amber-700">
                    {results.filter((r) => r.status === "warning").length}
                  </h3>
                  <p className="text-amber-600">Advertencias</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-red-50 border-red-200">
              <CardContent className="pt-6">
                <div className="text-center">
                  <XCircle className="h-8 w-8 text-red-500 mx-auto mb-2" />
                  <h3 className="text-xl font-bold text-red-700">
                    {results.filter((r) => r.status === "error").length}
                  </h3>
                  <p className="text-red-600">Errores</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {results
            .filter((r) => r.status === "error")
            .map((result, index) => (
              <Alert key={`error-${index}`} className="bg-red-50 border-red-200">
                <div className="flex items-center gap-2">
                  {getStatusIcon(result.status)}
                  <AlertTitle className="text-red-800">{result.message}</AlertTitle>
                </div>
                {result.details && <AlertDescription className="text-red-700 mt-2">{result.details}</AlertDescription>}
                {result.fix && (
                  <AlertDescription className="text-red-700 mt-2 font-medium">
                    Solución recomendada: {result.fix}
                  </AlertDescription>
                )}
              </Alert>
            ))}

          {results
            .filter((r) => r.status === "warning")
            .map((result, index) => (
              <Alert key={`warning-${index}`} className="bg-amber-50 border-amber-200">
                <div className="flex items-center gap-2">
                  {getStatusIcon(result.status)}
                  <AlertTitle className="text-amber-800">{result.message}</AlertTitle>
                </div>
                {result.details && (
                  <AlertDescription className="text-amber-700 mt-2">{result.details}</AlertDescription>
                )}
                {result.fix && (
                  <AlertDescription className="text-amber-700 mt-2 font-medium">
                    Solución recomendada: {result.fix}
                  </AlertDescription>
                )}
              </Alert>
            ))}

          {results
            .filter((r) => r.status === "success")
            .map((result, index) => (
              <Alert key={`success-${index}`} className="bg-green-50 border-green-200">
                <div className="flex items-center gap-2">
                  {getStatusIcon(result.status)}
                  <AlertTitle className="text-green-800">{result.message}</AlertTitle>
                </div>
                {result.details && (
                  <AlertDescription className="text-green-700 mt-2">{result.details}</AlertDescription>
                )}
              </Alert>
            ))}
        </div>
      )}

      {report && (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Informe Completo</CardTitle>
            <CardDescription>Informe detallado en formato Markdown</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-50 p-4 rounded-md">
              <pre className="whitespace-pre-wrap text-sm">{report}</pre>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              onClick={() => {
                navigator.clipboard.writeText(report)
              }}
              variant="outline"
              className="w-full"
            >
              Copiar Informe
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  )
}
