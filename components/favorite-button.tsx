"use client"

import { useState, useEffect } from "react"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation"

interface FavoriteButtonProps {
  toolId: number
  className?: string
}

export default function FavoriteButton({ toolId, className }: FavoriteButtonProps) {
  const [isFavorite, setIsFavorite] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const { toast } = useToast()
  const router = useRouter()

  // Verificar si el usuario está autenticado y si la herramienta es favorita
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch("/api/auth/me")
        const data = await response.json()
        setIsAuthenticated(data.success)

        if (data.success) {
          const favResponse = await fetch(`/api/favorites/${toolId}`)
          const favData = await favResponse.json()
          setIsFavorite(favData.isFavorite)
        }
      } catch (error) {
        console.error("Error al verificar autenticación:", error)
      }
    }

    checkAuth()
  }, [toolId])

  const handleToggleFavorite = async () => {
    if (!isAuthenticated) {
      // Redirigir al login si no está autenticado
      toast({
        title: "Inicia sesión",
        description: "Debes iniciar sesión para guardar herramientas favoritas",
        variant: "default",
      })
      router.push("/login")
      return
    }

    setIsLoading(true)

    try {
      const method = isFavorite ? "DELETE" : "POST"
      const response = await fetch(`/api/favorites/${toolId}`, { method })
      const data = await response.json()

      if (data.success) {
        setIsFavorite(!isFavorite)
        toast({
          title: isFavorite ? "Eliminado de favoritos" : "Añadido a favoritos",
          description: data.message,
          variant: "default",
        })
      } else {
        throw new Error(data.message)
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Error al actualizar favoritos",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Button
      variant="outline"
      size="icon"
      className={className}
      onClick={handleToggleFavorite}
      disabled={isLoading}
      aria-label={isFavorite ? "Eliminar de favoritos" : "Añadir a favoritos"}
    >
      <Heart className={`h-5 w-5 ${isFavorite ? "fill-red-500 text-red-500" : ""}`} />
    </Button>
  )
}
