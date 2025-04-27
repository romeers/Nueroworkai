"use client"

import { useEffect, useState } from "react"

type KeyboardKey = string
type KeyboardEventType = "keydown" | "keyup" | "keypress"

/**
 * Hook para detectar pulsaciones de teclas
 * @param targetKey Tecla o array de teclas a detectar
 * @param eventType Tipo de evento de teclado (default: "keydown")
 * @returns Boolean indicando si la tecla está pulsada
 */
export function useKeyboard(targetKey: KeyboardKey | KeyboardKey[], eventType: KeyboardEventType = "keydown"): boolean {
  // Estado para almacenar si la tecla está pulsada
  const [keyPressed, setKeyPressed] = useState<boolean>(false)

  // Convertir targetKey a array si no lo es
  const keys = Array.isArray(targetKey) ? targetKey : [targetKey]

  useEffect(() => {
    // Verificar si estamos en el cliente
    if (typeof window === "undefined") return

    // Función para manejar eventos de teclado
    const handleKey = (event: KeyboardEvent) => {
      if (keys.includes(event.key)) {
        setKeyPressed(eventType === "keyup" ? false : true)
      }
    }

    // Función para manejar keyup si eventType es keydown
    const handleKeyUp = (event: KeyboardEvent) => {
      if (keys.includes(event.key)) {
        setKeyPressed(false)
      }
    }

    // Añadir listeners
    window.addEventListener(eventType, handleKey)

    // Si eventType es keydown, también escuchar keyup para resetear el estado
    if (eventType === "keydown") {
      window.addEventListener("keyup", handleKeyUp)
    }

    // Limpiar listeners al desmontar
    return () => {
      window.removeEventListener(eventType, handleKey)
      if (eventType === "keydown") {
        window.removeEventListener("keyup", handleKeyUp)
      }
    }
  }, [eventType, keys])

  return keyPressed
}
