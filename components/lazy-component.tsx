"use client"

import { Suspense, lazy, type ComponentType, useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import type React from "react"

interface LazyComponentProps<P = any> {
  component: () => Promise<{ default: ComponentType<P> }>
  props?: P
  fallback?: React.ReactNode
  threshold?: number
  triggerOnce?: boolean
  rootMargin?: string
  loadingDelay?: number
  errorComponent?: React.ReactNode
}

export function LazyComponent<P = any>({
  component,
  props,
  fallback = <div className="min-h-[100px] animate-pulse bg-gray-100 rounded-md" />,
  threshold = 0.1,
  triggerOnce = true,
  rootMargin = "200px",
  loadingDelay = 0,
  errorComponent = <div className="p-4 text-red-500">Error al cargar el componente</div>,
}: LazyComponentProps<P>) {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
    rootMargin,
  })

  // Cargar el componente cuando esté en el viewport
  useEffect(() => {
    if (inView && !loaded) {
      const timer = setTimeout(() => {
        setLoaded(true)
      }, loadingDelay)

      return () => clearTimeout(timer)
    }
  }, [inView, loaded, loadingDelay])

  // Componente cargado de forma diferida
  const Component = lazy(() =>
    component().catch((err) => {
      setError(err)
      return { default: () => errorComponent as JSX.Element }
    }),
  )

  return (
    <div ref={ref}>
      {loaded ? (
        <Suspense fallback={fallback}>{error ? errorComponent : <Component {...(props as P)} />}</Suspense>
      ) : (
        fallback
      )}
    </div>
  )
}
