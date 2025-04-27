"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { z } from "zod"

// Esquema de validación
const subscriptionSchema = z.object({
  email: z.string().email({ message: "Por favor, introduce un email válido" }),
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres" }).optional(),
  source: z.string().optional(),
})

type SubscriptionData = z.infer<typeof subscriptionSchema>

interface EnhancedSubscriptionFormProps {
  className?: string
  buttonText?: string
  showNameField?: boolean
  source?: string
  onSuccess?: () => void
}

export default function EnhancedSubscriptionForm({
  className = "",
  buttonText = "Suscribirse",
  showNameField = false,
  source = "general",
  onSuccess,
}: EnhancedSubscriptionFormProps) {
  const [formData, setFormData] = useState<SubscriptionData>({
    email: "",
    name: "",
    source,
  })
  const [errors, setErrors] = useState<Partial<Record<keyof SubscriptionData, string>>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const { toast } = useToast()

  const validateField = (field: keyof SubscriptionData, value: string) => {
    try {
      // Validar solo el campo específico
      if (field === "email" || field === "name") {
        subscriptionSchema.shape[field].parse(value)
        setErrors((prev) => ({ ...prev, [field]: undefined }))
        return true
      }
      return true
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldError = error.errors[0]?.message || `El campo ${field} no es válido`
        setErrors((prev) => ({ ...prev, [field]: fieldError }))
        return false
      }
      return false
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Validar el campo cuando el usuario escribe
    if (value.length > 0) {
      validateField(name as keyof SubscriptionData, value)
    } else {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Validar todos los campos antes de enviar
    try {
      const validatedData = subscriptionSchema.parse(formData)

      try {
        const response = await fetch("/api/subscribe", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(validatedData),
        })

        if (!response.ok) {
          const data = await response.json()
          throw new Error(data.message || "Error al procesar la suscripción")
        }

        toast({
          title: "¡Gracias por suscribirte!",
          description: "Te hemos enviado un correo de confirmación.",
        })

        setIsSuccess(true)

        // Resetear el formulario
        setFormData({
          email: "",
          name: "",
          source,
        })

        // Llamar al callback de éxito si existe
        if (onSuccess) {
          onSuccess()
        }
      } catch (error) {
        console.error("Error:", error)
        toast({
          title: "Error",
          description: error instanceof Error ? error.message : "Error al procesar la suscripción",
          variant: "destructive",
        })
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Convertir errores de Zod a nuestro formato
        const newErrors: Partial<Record<keyof SubscriptionData, string>> = {}
        error.errors.forEach((err) => {
          const field = err.path[0] as keyof SubscriptionData
          newErrors[field] = err.message
        })
        setErrors(newErrors)
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className={`${className} bg-green-50 border border-green-200 rounded-md p-4 text-green-800`}>
        <p className="font-medium">¡Gracias por suscribirte!</p>
        <p className="text-sm mt-1">Hemos registrado tu correo correctamente.</p>
      </div>
    )
  }

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className="space-y-3">
        {showNameField && (
          <div>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Tu nombre"
              aria-label="Tu nombre"
              className={errors.name ? "border-red-500" : ""}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <p id="name-error" className="mt-1 text-sm text-red-500">
                {errors.name}
              </p>
            )}
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-grow">
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Tu correo electrónico"
              aria-label="Tu correo electrónico"
              className={errors.email ? "border-red-500" : ""}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              required
            />
            {errors.email && (
              <p id="email-error" className="mt-1 text-sm text-red-500">
                {errors.email}
              </p>
            )}
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-primary hover:bg-primary/90 whitespace-nowrap"
            aria-label={isSubmitting ? "Enviando..." : buttonText}
          >
            {isSubmitting ? "Enviando..." : buttonText}
          </Button>
        </div>
      </form>
    </div>
  )
}
