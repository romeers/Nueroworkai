"use client"

import { useState, useEffect, useCallback } from "react"

interface FetchState<T> {
  data: T | null
  loading: boolean
  error: Error | null
}

interface FetchOptions extends RequestInit {
  autoFetch?: boolean
}

/**
 * Hook para realizar peticiones fetch
 * @param url URL a la que hacer fetch
 * @param options Opciones de fetch
 * @returns Objeto con data, loading, error y función refetch
 */
export function useFetch<T = any>(
  url: string,
  options: FetchOptions = { autoFetch: true },
): FetchState<T> & { refetch: () => Promise<void> } {
  // Extraer autoFetch de las opciones
  const { autoFetch = true, ...fetchOptions } = options

  // Estado para almacenar el estado del fetch
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: false,
    error: null,
  })

  // Función para realizar el fetch
  const fetchData = useCallback(async () => {
    setState((prev) => ({ ...prev, loading: true }))

    try {
      const response = await fetch(url, fetchOptions)

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`)
      }

      const data = await response.json()
      setState({ data, loading: false, error: null })
    } catch (error) {
      setState({ data: null, loading: false, error: error as Error })
    }
  }, [url])

  // Función para refetch
  const refetch = useCallback(async () => {
    await fetchData()
  }, [fetchData])

  // Efecto para realizar el fetch inicial
  useEffect(() => {
    if (autoFetch) {
      fetchData()
    }
  }, [autoFetch, fetchData])

  return { ...state, refetch }
}
