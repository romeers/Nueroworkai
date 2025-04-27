"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useAuth } from "./auth-context"

// Tipos
interface FavoritesContextType {
  favorites: number[]
  isLoading: boolean
  error: string | null
  addFavorite: (toolId: number) => Promise<void>
  removeFavorite: (toolId: number) => Promise<void>
  isFavorite: (toolId: number) => boolean
}

// Crear contexto
const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined)

// Props para el provider
interface FavoritesProviderProps {
  children: ReactNode
}

// Provider
export function FavoritesProvider({ children }: FavoritesProviderProps) {
  const [favorites, setFavorites] = useState<number[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const { isAuthenticated, user } = useAuth()

  // Cargar favoritos al autenticarse
  useEffect(() => {
    async function loadFavorites() {
      if (!isAuthenticated || !user) {
        setFavorites([])
        return
      }

      try {
        setIsLoading(true)
        setError(null)

        const response = await fetch("/api/favorites")

        if (!response.ok) {
          throw new Error("Error al cargar favoritos")
        }

        const data = await response.json()
        setFavorites(data.map((fav: any) => fav.tool_id))
      } catch (err) {
        console.error("Error al cargar favoritos:", err)
        setError((err as Error).message)
      } finally {
        setIsLoading(false)
      }
    }

    loadFavorites()
  }, [isAuthenticated, user])

  // Función para añadir favorito
  const addFavorite = async (toolId: number) => {
    if (!isAuthenticated) {
      throw new Error("Debes iniciar sesión para guardar favoritos")
    }

    try {
      setIsLoading(true)
      setError(null)

      const response = await fetch(`/api/favorites/${toolId}`, {
        method: "POST",
      })

      if (!response.ok) {
        throw new Error("Error al añadir favorito")
      }

      setFavorites((prev) => [...prev, toolId])
    } catch (err) {
      setError((err as Error).message)
      throw err
    } finally {
      setIsLoading(false)
    }
  }

  // Función para eliminar favorito
  const removeFavorite = async (toolId: number) => {
    if (!isAuthenticated) {
      throw new Error("Debes iniciar sesión para eliminar favoritos")
    }

    try {
      setIsLoading(true)
      setError(null)

      const response = await fetch(`/api/favorites/${toolId}`, {
        method: "DELETE",
      })

      if (!response.ok) {
        throw new Error("Error al eliminar favorito")
      }

      setFavorites((prev) => prev.filter((id) => id !== toolId))
    } catch (err) {
      setError((err as Error).message)
      throw err
    } finally {
      setIsLoading(false)
    }
  }

  // Función para verificar si es favorito
  const isFavorite = (toolId: number) => {
    return favorites.includes(toolId)
  }

  // Valor del contexto
  const value = {
    favorites,
    isLoading,
    error,
    addFavorite,
    removeFavorite,
    isFavorite,
  }

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}

// Hook personalizado para usar el contexto
export function useFavorites(): FavoritesContextType {
  const context = useContext(FavoritesContext)

  if (context === undefined) {
    throw new Error("useFavorites debe usarse dentro de un FavoritesProvider")
  }

  return context
}
