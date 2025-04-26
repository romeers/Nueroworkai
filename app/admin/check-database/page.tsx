"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { CheckCircle, AlertCircle, RefreshCw } from "lucide-react"

export default function CheckDatabasePage() {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchData = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch("/api/check-database")
      const result = await response.json()
      if (result.success) {
        setData(result.results)
      } else {
        setError(result.message || "Error desconocido")
      }
    } catch (err) {
      setError("Error al conectar con la API")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Verificación de la Base de Datos</h1>
        <Button onClick={fetchData} disabled={loading}>
          {loading ? <RefreshCw className="mr-2 h-4 w-4 animate-spin" /> : <RefreshCw className="mr-2 h-4 w-4" />}
          Actualizar
        </Button>
      </div>

      {error && (
        <Card className="mb-6 border-red-300 bg-red-50">
          <CardContent className="pt-6">
            <div className="flex items-center">
              <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
              <p className="text-red-700">{error}</p>
            </div>
          </CardContent>
        </Card>
      )}

      {data ? (
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Resumen de Tablas</CardTitle>
              <CardDescription>Número de registros en cada tabla principal</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Tabla</TableHead>
                    <TableHead>Registros</TableHead>
                    <TableHead>Estado</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Categorías</TableCell>
                    <TableCell>{data.categories.count}</TableCell>
                    <TableCell>
                      {Number(data.categories.count) > 0 ? (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      ) : (
                        <AlertCircle className="h-5 w-5 text-amber-500" />
                      )}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Herramientas</TableCell>
                    <TableCell>{data.tools.count}</TableCell>
                    <TableCell>
                      {Number(data.tools.count) > 0 ? (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      ) : (
                        <AlertCircle className="h-5 w-5 text-amber-500" />
                      )}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Recursos</TableCell>
                    <TableCell>{data.resources.count}</TableCell>
                    <TableCell>
                      {Number(data.resources.count) > 0 ? (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      ) : (
                        <AlertCircle className="h-5 w-5 text-amber-500" />
                      )}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Comparaciones</TableCell>
                    <TableCell>{data.comparisons.count}</TableCell>
                    <TableCell>
                      {Number(data.comparisons.count) > 0 ? (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      ) : (
                        <AlertCircle className="h-5 w-5 text-amber-500" />
                      )}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Usuarios</TableCell>
                    <TableCell>{data.users.count}</TableCell>
                    <TableCell>
                      {Number(data.users.count) > 0 ? (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      ) : (
                        <AlertCircle className="h-5 w-5 text-amber-500" />
                      )}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Pros y Contras</TableCell>
                    <TableCell>{data.prosCons.count}</TableCell>
                    <TableCell>
                      {Number(data.prosCons.count) > 0 ? (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      ) : (
                        <AlertCircle className="h-5 w-5 text-amber-500" />
                      )}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Planes de Precios</TableCell>
                    <TableCell>{data.pricingPlans.count}</TableCell>
                    <TableCell>
                      {Number(data.pricingPlans.count) > 0 ? (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      ) : (
                        <AlertCircle className="h-5 w-5 text-amber-500" />
                      )}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Integridad de Datos</CardTitle>
              <CardDescription>Verificación de relaciones entre tablas</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="mr-2">Herramientas sin categoría:</span>
                  {Number(data.integrity.orphanTools) === 0 ? (
                    <>
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-green-700">Ninguna</span>
                    </>
                  ) : (
                    <>
                      <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                      <span className="text-red-700">{data.integrity.orphanTools} encontradas</span>
                    </>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {data.categories.sample.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Muestra de Categorías</CardTitle>
                <CardDescription>Primeras 5 categorías en la base de datos</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Nombre</TableHead>
                      <TableHead>Slug</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {data.categories.sample.map((cat: any) => (
                      <TableRow key={cat.id}>
                        <TableCell>{cat.id}</TableCell>
                        <TableCell>{cat.name}</TableCell>
                        <TableCell>{cat.slug}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          )}

          {data.tools.sample.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Muestra de Herramientas</CardTitle>
                <CardDescription>Primeras 5 herramientas en la base de datos</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Nombre</TableHead>
                      <TableHead>Slug</TableHead>
                      <TableHead>Categoría</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {data.tools.sample.map((tool: any) => (
                      <TableRow key={tool.id}>
                        <TableCell>{tool.id}</TableCell>
                        <TableCell>{tool.name}</TableCell>
                        <TableCell>{tool.slug}</TableCell>
                        <TableCell>{tool.category}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          )}
        </div>
      ) : loading ? (
        <div className="flex justify-center items-center h-64">
          <RefreshCw className="h-8 w-8 animate-spin text-gray-400" />
        </div>
      ) : null}
    </div>
  )
}
