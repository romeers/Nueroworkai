"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { z } from "zod"

// Esquema de validación
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres" }).optional(),
  email: z.string().email({ message: "Por favor, introduce un email válido" }),
  subject: z.string().min(3, { message: "El asunto debe tener al menos 3 caracteres" }).optional(),
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres" }),
})

type ContactFormData = z.infer<typeof contactFormSchema>

export default function EnhancedContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const validateField = (field: keyof ContactFormData, value: string) => {
    try {
      // Validar solo el campo específico
      contactFormSchema.shape[field].parse(value)
      setErrors((prev) => ({ ...prev, [field]: undefined }))
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Validar el campo cuando el usuario escribe
    if (value.length > 0) {
      validateField(name as keyof ContactFormData, value)
    } else {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Validar todos los campos antes de enviar
    try {
      const validatedData = contactFormSchema.parse(formData)

      try {
        const response = await fetch("/api/contact-message", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(validatedData),
        })

        if (!response.ok) {
          throw new Error("Error al enviar el mensaje")
        }

        toast({
          title: "Mensaje enviado",
          description: "Hemos recibido tu mensaje. Te responderemos lo antes posible.",
        })

        // Resetear el formulario
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      } catch (error) {
        console.error("Error:", error)
        toast({
          title: "Error",
          description: "No se pudo enviar el mensaje. Por favor, inténtalo de nuevo.",
          variant: "destructive",
        })
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Convertir errores de Zod a nuestro formato
        const newErrors: Partial<Record<keyof ContactFormData, string>> = {}
        error.errors.forEach((err) => {
          const field = err.path[0] as keyof ContactFormData
          newErrors[field] = err.message
        })
        setErrors(newErrors)
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Nombre
          </label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`mt-1 ${errors.name ? "border-red-500" : ""}`}
            placeholder="Tu nombre"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-sm text-red-500">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Correo electrónico *
          </label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={`mt-1 ${errors.email ? "border-red-500" : ""}`}
            placeholder="tu@email.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-sm text-red-500">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
            Asunto
          </label>
          <Input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={`mt-1 ${errors.subject ? "border-red-500" : ""}`}
            placeholder="Asunto de tu mensaje"
            aria-invalid={!!errors.subject}
            aria-describedby={errors.subject ? "subject-error" : undefined}
          />
          {errors.subject && (
            <p id="subject-error" className="mt-1 text-sm text-red-500">
              {errors.subject}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Mensaje *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            required
            className={`mt-1 block w-full px-3 py-2 border ${
              errors.message ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary`}
            placeholder="Escribe tu mensaje aquí..."
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message && (
            <p id="message-error" className="mt-1 text-sm text-red-500">
              {errors.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-primary/90"
          aria-label={isSubmitting ? "Enviando mensaje..." : "Enviar mensaje"}
        >
          {isSubmitting ? "Enviando..." : "Enviar mensaje"}
        </Button>
      </form>
    </div>
  )
}
