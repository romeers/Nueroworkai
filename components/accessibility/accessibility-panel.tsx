"use client"

import { useState } from "react"
import { useAccessibility } from "./accessibility-provider"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Settings, ZoomIn, Zap, Eye } from "lucide-react"

export function AccessibilityPanel() {
  const [isOpen, setIsOpen] = useState(false)
  const { preferences, updatePreference, resetPreferences } = useAccessibility()

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button
        variant="outline"
        size="icon"
        className="rounded-full h-12 w-12 bg-white shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Opciones de accesibilidad"
        aria-expanded={isOpen}
        aria-controls="accessibility-panel"
      >
        <Settings className="h-6 w-6" />
      </Button>

      {isOpen && (
        <div
          id="accessibility-panel"
          className="absolute bottom-16 right-0 w-72 bg-white rounded-lg shadow-xl p-4 border border-gray-200"
          role="dialog"
          aria-label="Panel de accesibilidad"
        >
          <h2 className="text-lg font-semibold mb-4">Opciones de accesibilidad</h2>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ZoomIn className="h-5 w-5 text-gray-600" />
                <label htmlFor="large-text" className="text-sm font-medium">
                  Texto grande
                </label>
              </div>
              <Switch
                id="large-text"
                checked={preferences.largeText}
                onCheckedChange={(checked) => updatePreference("largeText", checked)}
                aria-describedby="large-text-description"
              />
            </div>
            <p id="large-text-description" className="text-xs text-gray-500 mt-1">
              Aumenta el tamaño del texto para mejorar la legibilidad
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-gray-600" />
                <label htmlFor="high-contrast" className="text-sm font-medium">
                  Alto contraste
                </label>
              </div>
              <Switch
                id="high-contrast"
                checked={preferences.highContrast}
                onCheckedChange={(checked) => updatePreference("highContrast", checked)}
                aria-describedby="high-contrast-description"
              />
            </div>
            <p id="high-contrast-description" className="text-xs text-gray-500 mt-1">
              Mejora el contraste de colores para facilitar la lectura
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Eye className="h-5 w-5 text-gray-600" />
                <label htmlFor="reduced-motion" className="text-sm font-medium">
                  Reducir movimiento
                </label>
              </div>
              <Switch
                id="reduced-motion"
                checked={preferences.reducedMotion}
                onCheckedChange={(checked) => updatePreference("reducedMotion", checked)}
                aria-describedby="reduced-motion-description"
              />
            </div>
            <p id="reduced-motion-description" className="text-xs text-gray-500 mt-1">
              Minimiza animaciones y efectos visuales
            </p>

            <Button variant="outline" size="sm" className="w-full mt-2" onClick={resetPreferences}>
              Restablecer ajustes
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
