"use client"

import { useEffect, useState } from "react"
import Script from "next/script"

interface ScriptOptimizerProps {
  src: string
  strategy?: "beforeInteractive" | "afterInteractive" | "lazyOnload"
  onLoad?: () => void
  onError?: () => void
  id?: string
  defer?: boolean
  async?: boolean
  nonce?: string
  crossOrigin?: "anonymous" | "use-credentials"
  noModule?: boolean
  priority?: boolean
  condition?: boolean | (() => boolean)
  timeout?: number
}

export function ScriptOptimizer({
  src,
  strategy = "afterInteractive",
  onLoad,
  onError,
  id,
  defer,
  async,
  nonce,
  crossOrigin,
  noModule,
  priority = false,
  condition = true,
  timeout = 5000,
}: ScriptOptimizerProps) {
  const [shouldLoad, setShouldLoad] = useState(false)
  let idleCallbackId: any

  useEffect(() => {
    // Evaluar la condición
    const conditionResult = typeof condition === "function" ? condition() : condition

    if (!conditionResult) {
      return
    }

    // Para scripts no prioritarios, cargar después de que la página esté inactiva
    if (!priority && strategy === "lazyOnload") {
      if ("requestIdleCallback" in window) {
        idleCallbackId = window.requestIdleCallback(() => setShouldLoad(true))
      } else {
        setTimeout(() => setShouldLoad(true), timeout)
      }
    } else {
      setShouldLoad(true)
    }

    // Limpiar si el componente se desmonta
    return () => {
      if ("cancelIdleCallback" in window && !shouldLoad && idleCallbackId) {
        window.cancelIdleCallback(idleCallbackId)
      }
    }
  }, [condition, priority, strategy, timeout])

  // Si no se debe cargar, no renderizar nada
  if (!shouldLoad) {
    return null
  }

  return (
    <Script
      src={src}
      strategy={strategy}
      onLoad={onLoad}
      onError={onError}
      id={id}
      defer={defer}
      async={async}
      nonce={nonce}
      crossOrigin={crossOrigin}
      noModule={noModule}
    />
  )
}
