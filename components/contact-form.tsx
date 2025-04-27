"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { AlertCircle, CheckCircle2 } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validación básica en el cliente
    if (!formData.email || !formData.email.includes("@")) {
      setStatus({
        loading: false,
        success: false,
        error: true,
        message: "Por favor, introduce un correo electrónico válido",
      })
      return
    }

    if (!formData.message || formData.message.trim().length < 5) {
      setStatus({
        loading: false,
        success: false,
        error: true,
        message: "Por favor, introduce un mensaje válido (mínimo 5 caracteres)",
      })
      return
    }

    setStatus({
      loading: true,
      success: false,
      error: false,
      message: "Enviando mensaje...",
    })

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setStatus({
          loading: false,
          success: true,
          error: false,
          message: data.message || "Mensaje enviado correctamente",
        })

        // Limpiar el formulario en caso de éxito
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      } else {
        throw new Error(data.message || "Error al enviar el mensaje")
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error)
      setStatus({
        loading: false,
        success: false,
        error: true,
        message: error instanceof Error ? error.message : "Error al enviar el mensaje. Por favor, inténtalo de nuevo.",
      })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Nombre
          </label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Tu nombre"
            className="w-full"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="tu@email.com"
            required
            className="w-full"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium mb-1">
            Asunto
          </label>
          <Input
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Asunto del mensaje"
            className="w-full"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Mensaje <span className="text-red-500">*</span>
          </label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tu mensaje..."
            required
            className="w-full min-h-[150px]"
          />
        </div>
      </div>

      {status.error && (
        <div className="flex items-center gap-2 text-red-500 bg-red-50 p-3 rounded-md">
          <AlertCircle className="h-5 w-5" />
          <p>{status.message}</p>
        </div>
      )}

      {status.success && (
        <div className="flex items-center gap-2 text-green-500 bg-green-50 p-3 rounded-md">
          <CheckCircle2 className="h-5 w-5" />
          <p>{status.message}</p>
        </div>
      )}

      <Button type="submit" className="w-full" disabled={status.loading}>
        {status.loading ? "Enviando..." : "Enviar mensaje"}
      </Button>
    </form>
  )
}
