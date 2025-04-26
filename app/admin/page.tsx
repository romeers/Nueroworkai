import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Database, Users, FileText, BarChart, Activity, Download, MessageSquare } from "lucide-react"

export default function AdminPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Panel de Administración</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5" /> Base de Datos
            </CardTitle>
            <CardDescription>Gestión de la base de datos</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500">
              Herramientas para administrar y verificar el estado de la base de datos.
            </p>
          </CardContent>
          <CardFooter className="flex flex-col gap-2">
            <Button asChild className="w-full">
              <Link href="/admin/database-restore">Restaurar Base de Datos</Link>
            </Button>
            <Button asChild variant="outline" className="w-full">
              <Link href="/admin/check-database">Verificar Base de Datos</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" /> Usuarios
            </CardTitle>
            <CardDescription>Gestión de usuarios</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500">Administra los usuarios de la plataforma.</p>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <Link href="/admin/users">Gestionar Usuarios</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" /> Contenido
            </CardTitle>
            <CardDescription>Gestión de contenido</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500">Administra herramientas, recursos y comparativas.</p>
          </CardContent>
          <CardFooter className="flex flex-col gap-2">
            <Button asChild className="w-full">
              <Link href="/admin/tools">Herramientas</Link>
            </Button>
            <Button asChild variant="outline" className="w-full">
              <Link href="/admin/resources">Recursos</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart className="h-5 w-5" /> Estadísticas
            </CardTitle>
            <CardDescription>Análisis y métricas</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500">Visualiza estadísticas de uso y rendimiento.</p>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <Link href="/admin/stats">Ver Estadísticas</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5" /> Diagnóstico
            </CardTitle>
            <CardDescription>Análisis del sitio</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500">Verifica la integridad y el rendimiento del sitio.</p>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <Link href="/admin/diagnostics">Ejecutar Diagnóstico</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Download className="h-5 w-5" /> Descargas Kit
            </CardTitle>
            <CardDescription>Descargas del Kit Digital</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500">Visualiza los correos de quienes han descargado el kit digital.</p>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <Link href="/admin/descargas-kit">Ver Descargas</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" /> Mensajes
            </CardTitle>
            <CardDescription>Mensajes de Contacto</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500">
              Gestiona los mensajes recibidos a través del formulario de contacto.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <Link href="/admin/mensajes">Ver Mensajes</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
