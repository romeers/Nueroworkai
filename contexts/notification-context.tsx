"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"

// Tipos
type NotificationType = "success" | "error" | "info" | "warning"

interface Notification {
  id: string
  type: NotificationType
  message: string
  title?: string
  duration?: number
}

interface NotificationContextType {
  notifications: Notification[]
  addNotification: (notification: Omit<Notification, "id">) => void
  removeNotification: (id: string) => void
  clearNotifications: () => void
}

// Crear contexto
const NotificationContext = createContext<NotificationContextType | undefined>(undefined)

// Props para el provider
interface NotificationProviderProps {
  children: ReactNode
}

// Provider
export function NotificationProvider({ children }: NotificationProviderProps) {
  const [notifications, setNotifications] = useState<Notification[]>([])

  // Función para añadir notificación
  const addNotification = useCallback((notification: Omit<Notification, "id">) => {
    const id = Math.random().toString(36).substring(2, 9)
    const newNotification = { ...notification, id }

    setNotifications((prev) => [...prev, newNotification])

    // Auto-eliminar después de la duración
    if (notification.duration !== 0) {
      const duration = notification.duration || 5000

      setTimeout(() => {
        removeNotification(id)
      }, duration)
    }
  }, [])

  // Función para eliminar notificación
  const removeNotification = useCallback((id: string) => {
    setNotifications((prev) => prev.filter((notification) => notification.id !== id))
  }, [])

  // Función para limpiar todas las notificaciones
  const clearNotifications = useCallback(() => {
    setNotifications([])
  }, [])

  // Valor del contexto
  const value = {
    notifications,
    addNotification,
    removeNotification,
    clearNotifications,
  }

  return <NotificationContext.Provider value={value}>{children}</NotificationContext.Provider>
}

// Hook personalizado para usar el contexto
export function useNotification(): NotificationContextType {
  const context = useContext(NotificationContext)

  if (context === undefined) {
    throw new Error("useNotification debe usarse dentro de un NotificationProvider")
  }

  return context
}

// Funciones de utilidad para tipos comunes de notificaciones
export function useNotificationHelpers() {
  const { addNotification } = useNotification()

  return {
    success: (message: string, options?: Partial<Omit<Notification, "id" | "type" | "message">>) => {
      addNotification({ type: "success", message, ...options })
    },

    error: (message: string, options?: Partial<Omit<Notification, "id" | "type" | "message">>) => {
      addNotification({ type: "error", message, ...options })
    },

    info: (message: string, options?: Partial<Omit<Notification, "id" | "type" | "message">>) => {
      addNotification({ type: "info", message, ...options })
    },

    warning: (message: string, options?: Partial<Omit<Notification, "id" | "type" | "message">>) => {
      addNotification({ type: "warning", message, ...options })
    },
  }
}
