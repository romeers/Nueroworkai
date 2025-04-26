"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle, Database, RefreshCw, AlertTriangle, ArrowRight } from "lucide-react"

export default function DatabaseRestorePage() {
  const [initStatus, setInitStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [seedStatus, setSeedStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [initMessage, setInitMessage] = useState<string>("")
  const [seedMessage, setSeedMessage] = useState<string>("")

  const initializeSchema = async () => {
    setInitStatus("loading")
    setInitMessage("")

    try {
      const response = await fetch("/api/admin/init-schema", {
        method: "POST",
      })

      const data = await response.json()

      if (data.success) {
        setInitStatus("success")
        setInitMessage(data.message)
      } else {
        setInitStatus("error")
        setInitMessage(data.message || "Error al inicializar el esquema")
      }
    } catch (error) {
      setInitStatus("error")
      setInitMessage("Error de conexión al intentar inicializar el esquema")
      console.error(error)
    }
  }

  const seedDatabase = async () => {
    setSeedStatus("loading")
    setSeedMessage("")

    try {
      const response = await fetch("/api/admin/seed-database", {
        method: "POST",
      })

      const data = await response.json()

      if (data.success) {
        setSeedStatus("success")
        setSeedMessage(data.message)
      } else {
        setSeedStatus("error")
        setSeedMessage(data.message || "Error al poblar la base de datos")
      }
    } catch (error) {
      setSeedStatus("error")
      setSeedMessage("Error de conexión al intentar poblar la base de datos")
      console.error(error)
    }
  }

  const verifyDatabase = async () => {
    window.location.href = "/admin/check-database"
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Restauración de la Base de Datos</h1>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5" /> Paso 1: Inicializar Esquema
            </CardTitle>
            <CardDescription>Crea las tablas necesarias en la base de datos</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500 mb-4">
              Este proceso creará todas las tablas, índices y relaciones necesarias para el funcionamiento del sitio. No
              afectará a los datos existentes si las tablas ya existen.
            </p>

            {initStatus === "success" && (
              <Alert className="mb-4 bg-green-50 border-green-200">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <AlertTitle className="text-green-800">Esquema inicializado correctamente</AlertTitle>
                <AlertDescription className="text-green-700">{initMessage}</AlertDescription>
              </Alert>
            )}

            {initStatus === "error" && (
              <Alert className="mb-4 bg-red-50 border-red-200">
                <AlertTriangle className="h-4 w-4 text-red-600" />
                <AlertTitle className="text-red-800">Error al inicializar el esquema</AlertTitle>
                <AlertDescription className="text-red-700">{initMessage}</AlertDescription>
              </Alert>
            )}
          </CardContent>
          <CardFooter>
            <Button onClick={initializeSchema} disabled={initStatus === "loading"} className="w-full">
              {initStatus === "loading" ? (
                <>
                  <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                  Inicializando...
                </>
              ) : (
                <>Inicializar Esquema</>
              )}
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5" /> Paso 2: Poblar Base de Datos
            </CardTitle>
            <CardDescription>Inserta los datos iniciales en las tablas</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500 mb-4">
              Este proceso insertará categorías, herramientas y otros datos necesarios para el funcionamiento del sitio.
              Actualiza los datos existentes si ya existen registros con los mismos identificadores.
            </p>

            {seedStatus === "success" && (
              <Alert className="mb-4 bg-green-50 border-green-200">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <AlertTitle className="text-green-800">Base de datos poblada correctamente</AlertTitle>
                <AlertDescription className="text-green-700">{seedMessage}</AlertDescription>
              </Alert>
            )}

            {seedStatus === "error" && (
              <Alert className="mb-4 bg-red-50 border-red-200">
                <AlertTriangle className="h-4 w-4 text-red-600" />
                <AlertTitle className="text-red-800">Error al poblar la base de datos</AlertTitle>
                <AlertDescription className="text-red-700">{seedMessage}</AlertDescription>
              </Alert>
            )}
          </CardContent>
          <CardFooter>
            <Button
              onClick={seedDatabase}
              disabled={seedStatus === "loading" || initStatus !== "success"}
              className="w-full"
            >
              {seedStatus === "loading" ? (
                <>
                  <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                  Poblando...
                </>
              ) : (
                <>Poblar Base de Datos</>
              )}
            </Button>
          </CardFooter>
        </Card>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5" /> Paso 3: Verificar Base de Datos
          </CardTitle>
          <CardDescription>Comprueba que la base de datos se ha restaurado correctamente</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500">
            Una vez completados los pasos anteriores, puedes verificar que la base de datos se ha restaurado
            correctamente. Esto mostrará información sobre las tablas y los datos insertados.
          </p>
        </CardContent>
        <CardFooter>
          <Button onClick={verifyDatabase} disabled={seedStatus !== "success"} className="w-full" variant="outline">
            Verificar Base de Datos <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
