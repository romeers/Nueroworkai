"use client"

import { useState, useEffect } from "react"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { useAuth } from "@/contexts/auth-context"

interface FavoriteButtonProps {
  toolId: number
  className?: string
}

export function FavoriteButton({ toolId, className }: FavoriteButtonProps) {
  const [isFavorite, setIsFavorite] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { isAuthenticated, user } = useAuth()
  const { toast } = useToast()

  useEffect(() => {
    const checkFavorite = async () => {
      if (!isAuthenticated || !user) {
        setIsFavorite(false)
        return
      }

      setIsLoading(true)
      try {
        // Mock API call
        await new Promise((resolve) => setTimeout(resolve, 500))
        setIsFavorite(Math.random() > 0.5) // Simulate a random favorite state
      } catch (error) {
        console.error("Error al verificar favorito:", error)
      } finally {
        setIsLoading(false)
      }
    }

    checkFavorite()
  }, [toolId, isAuthenticated, user])

  const handleToggleFavorite = async () => {
    if (!isAuthenticated) {
      toast({
        title: "Inicia sesión",
        description: "Debes iniciar sesión para guardar herramientas favoritas",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)
    try {
      // Mock API call
      await new Promise((resolve) => setTimeout(resolve, 500))
      setIsFavorite(!isFavorite)
      toast({
        title: isFavorite ? "Eliminado de favoritos" : "Añadido a favoritos",
        description: "Herramienta actualizada en tus favoritos",
      })
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
      variant="ghost"
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

export default FavoriteButton
