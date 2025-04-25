"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import SafeImage from "./safe-image"
import { useToast } from "@/hooks/use-toast"
import EmailSubscriptionForm from "./email-subscription-form"

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
  const [success, setSuccess] = useState(false)
  const { toast } = useToast()

  const handleSuccess = () => {
    setSuccess(true)
    toast({
      title: "¡Recurso enviado!",
      description: "Hemos enviado el recurso a tu correo electrónico.",
    })
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
            <div className="mt-6">
              <EmailSubscriptionForm
                buttonText={ctaText}
                includeName={true}
                onSuccess={handleSuccess}
                downloadIcon={true}
              />
            </div>
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
