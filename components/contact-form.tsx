"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { AlertCircle, CheckCircle2 } from "lucide-react"

interface ContactFormProps {
  className?: string
}

export default function ContactForm({ className = "" }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [formStatus, setFormStatus] = useState<{ type: "success" | "error" | null; message: string | null }>({
    type: null,
    message: null,
  })
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Limpiar el estado del formulario cuando el usuario comienza a escribir de nuevo
    if (formStatus.type) {
      setFormStatus({ type: null, message: null })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setFormStatus({ type: null, message: null })

    try {
      console.log("Enviando datos:", formData)
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      console.log("Respuesta recibida:", response.status)
      const data = await response.json()
      console.log("Datos de respuesta:", data)

      if (data.success) {
        setFormStatus({
          type: "success",
          message: data.message || "Mensaje enviado correctamente. Te responderemos lo antes posible.",
        })

        toast({
          title: "Mensaje enviado",
          description: data.message || "Mensaje enviado correctamente. Te responderemos lo antes posible.",
          variant: "default",
        })

        // Limpiar el formulario
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      } else {
        setFormStatus({
          type: "error",
          message: data.message || "Error al enviar el mensaje. Por favor, inténtalo de nuevo.",
        })

        toast({
          title: "Error",
          description: data.message || "Error al enviar el mensaje. Por favor, inténtalo de nuevo.",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error)
      setFormStatus({
        type: "error",
        message: "Ha ocurrido un error al enviar el mensaje. Por favor, inténtalo de nuevo.",
      })

      toast({
        title: "Error",
        description: "Ha ocurrido un error al enviar el mensaje. Por favor, inténtalo de nuevo.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={className}>
      {formStatus.type && (
        <div
          className={`mb-6 p-4 rounded-md flex items-start ${
            formStatus.type === "success" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
          }`}
        >
          {formStatus.type === "success" ? (
            <CheckCircle2 className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
          ) : (
            <AlertCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
          )}
          <span>{formStatus.message}</span>
        </div>
      )}

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
            className="mt-1"
            placeholder="Tu nombre"
          />
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
            className="mt-1"
            placeholder="tu@email.com"
          />
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
            className="mt-1"
            placeholder="Asunto de tu mensaje"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Mensaje *
          </label>
          <Textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-1"
            placeholder="Escribe tu mensaje aquí..."
          />
        </div>

        <Button type="submit" disabled={loading} className="w-full bg-primary hover:bg-primary/90">
          {loading ? "Enviando..." : "Enviar mensaje"}
        </Button>
      </form>
    </div>
  )
}
