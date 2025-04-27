"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle, XCircle, Loader2 } from "lucide-react"

export default function InitImagesTablesPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<{
    success?: boolean
    message?: string
    error?: string
    details?: any
  } | null>(null)

  const initTables = async () => {
    setIsLoading(true)
    setResult(null)

    try {
      const response = await fetch("/api/admin/init-images-tables")
      const data = await response.json()

      if (response.ok) {
        setResult({
          success: true,
          message: data.message,
          details: data.details,
        })
      } else {
        setResult({
          success: false,
          error: data.error || "Error desconocido",
          details: data.details,
        })
      }
    } catch (error) {
      setResult({
        success: false,
        error: "Error al conectar con el servidor",
        details: error,
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container mx-auto py-10">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Inicializar Tablas de Imágenes</CardTitle>
          <CardDescription>
            Este proceso creará las tablas necesarias para el sistema de gestión de imágenes.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Al hacer clic en el botón a continuación, se crearán las siguientes tablas en la base de datos:
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              <code>images</code> - Para almacenar metadatos de imágenes
            </li>
            <li>
              <code>tool_images</code> - Para relacionar imágenes con herramientas
            </li>
            <li>
              <code>resource_images</code> - Para relacionar imágenes con recursos
            </li>
          </ul>

          {result && (
            <Alert className={`mt-4 ${result.success ? "bg-green-50" : "bg-red-50"}`}>
              {result.success ? (
                <CheckCircle className="h-4 w-4 text-green-600" />
              ) : (
                <XCircle className="h-4 w-4 text-red-600" />
              )}
              <AlertTitle>{result.success ? "Operación exitosa" : "Error"}</AlertTitle>
              <AlertDescription>
                {result.success ? result.message : result.error}

                {result.details && (
                  <pre className="mt-2 p-2 bg-gray-100 rounded text-xs overflow-auto">
                    {JSON.stringify(result.details, null, 2)}
                  </pre>
                )}
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
        <CardFooter>
          <Button onClick={initTables} disabled={isLoading} className="w-full">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Inicializando...
              </>
            ) : (
              "Inicializar Tablas de Imágenes"
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
