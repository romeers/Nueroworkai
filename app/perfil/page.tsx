import { getCurrentUser, getUserFavorites } from "@/lib/auth"
import { redirect } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ToolCard from "@/components/tool-card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LogOut, Settings, Star } from "lucide-react"

export default async function ProfilePage() {
  const user = await getCurrentUser()

  // Redirigir al login si no está autenticado
  if (!user) {
    redirect("/login")
  }

  // Obtener herramientas favoritas
  const favorites = await getUserFavorites(user.id)

  return (
    <div className="container mx-auto py-10">
      <div className="grid gap-8 md:grid-cols-[250px_1fr]">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Perfil</CardTitle>
              <CardDescription>{user.email}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground">Nombre</div>
                <div>{user.name || "No especificado"}</div>
              </div>
            </CardContent>
          </Card>
          <div className="space-y-2">
            <Button variant="outline" className="w-full justify-start" asChild>
              <Link href="/perfil/configuracion">
                <Settings className="mr-2 h-4 w-4" />
                Configuración
              </Link>
            </Button>
            <form action="/api/auth/logout" method="POST">
              <Button variant="outline" className="w-full justify-start text-red-500 hover:text-red-600">
                <LogOut className="mr-2 h-4 w-4" />
                Cerrar sesión
              </Button>
            </form>
          </div>
        </div>
        <div className="space-y-6">
          <Tabs defaultValue="favorites">
            <TabsList>
              <TabsTrigger value="favorites">
                <Star className="mr-2 h-4 w-4" />
                Favoritos
              </TabsTrigger>
            </TabsList>
            <TabsContent value="favorites" className="mt-6">
              {favorites.length > 0 ? (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {favorites.map((tool: any) => (
                    <ToolCard key={tool.id} tool={tool} />
                  ))}
                </div>
              ) : (
                <div className="rounded-lg border border-dashed p-10 text-center">
                  <h3 className="mb-2 text-lg font-medium">No tienes herramientas favoritas</h3>
                  <p className="mb-6 text-sm text-muted-foreground">
                    Explora nuestro catálogo y guarda tus herramientas favoritas para acceder rápidamente a ellas.
                  </p>
                  <Button asChild>
                    <Link href="/herramientas-ia">Explorar herramientas</Link>
                  </Button>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
