"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Download, Check } from "lucide-react"
import SafeImage from "./safe-image"
import { useToast } from "@/hooks/use-toast"

interface CategoryLeadMagnetProps {
  category: string
  title: string
  description: string
  bulletPoints: string[]
  imageUrl: string
  formId?: string
  ctaText?: string
}

export default function CategoryLeadMagnet({
  category,
  title,
  description,
  bulletPoints,
  imageUrl,
  formId = "default",
  ctaText = "Descargar Gratis",
}: CategoryLeadMagnetProps) {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulación de envío
    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
      toast({
        title: "¡Recurso enviado!",
        description: "Hemos enviado el recurso a tu correo electrónico.",
      })
    }, 1500)
  }

  return (
    <div className="rounded-xl bg-primary/10 p-6 sm:p-8">
      <div className="grid gap-6 md:grid-cols-2 md:gap-10">
        <div className="flex flex-col justify-center">
          <div className="mb-2 inline-flex rounded-full bg-primary/20 px-3 py-1 text-sm font-medium text-primary">
            {category}
          </div>
          <h3 className="font-heading text-xl font-bold text-secondary sm:text-2xl">{title}</h3>
          <p className="mt-3 text-gray-600">{description}</p>

          <ul className="mt-4 space-y-2">
            {bulletPoints.map((point, index) => (
              <li key={index} className="flex items-start">
                <Check className="mr-2 h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-sm text-gray-600 sm:text-base">{point}</span>
              </li>
            ))}
          </ul>

          {success ? (
            <div className="mt-6 rounded-lg bg-green-50 p-4 border border-green-200">
              <h4 className="font-medium text-green-800">¡Gracias por suscribirte!</h4>
              <p className="mt-1 text-sm text-green-700">
                Hemos enviado el recurso a tu correo electrónico. Si no lo encuentras, revisa tu carpeta de spam.
              </p>
            </div>
          ) : (
            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              <div>
                <Input
                  type="text"
                  placeholder="Tu nombre"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="bg-white"
                  aria-label="Nombre para recibir el recurso gratuito"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Tu correo electrónico"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-white"
                  aria-label="Email para recibir el recurso gratuito"
                />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={loading}>
                {loading ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Enviando...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Download className="mr-2 h-4 w-4" />
                    Descargar Kit gratuito
                  </span>
                )}
              </Button>
              <p className="text-xs text-gray-500">Sin spam · Descarga inmediata tras confirmar</p>
            </form>
          )}
        </div>

        <div className="flex items-center justify-center">
          <div className="relative h-56 w-full max-w-sm overflow-hidden rounded-lg shadow-md sm:h-64">
            <SafeImage src={imageUrl} alt={title} fill className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  )
}
