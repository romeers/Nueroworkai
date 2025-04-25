"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { Download } from "lucide-react"
import { z } from "zod"
import { Form, FormField, FormLabel, FormMessage } from "@/components/ui/form"

const subscriptionSchema = z.object({
  email: z.string().email({ message: "Por favor, introduce un email válido" }),
  name: z.string().optional(),
})

type SubscriptionFormValues = z.infer<typeof subscriptionSchema>

interface EmailSubscriptionFormProps {
  onSuccess?: (data: SubscriptionFormValues) => void
  buttonText?: string
  includeName?: boolean
  microcopy?: string
  className?: string
  downloadIcon?: boolean
}

export default function EmailSubscriptionForm({
  onSuccess,
  buttonText = "Suscribirse",
  includeName = false,
  microcopy = "Sin spam · Descarga inmediata tras confirmar",
  className = "",
  downloadIcon = false,
}: EmailSubscriptionFormProps) {
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (data: SubscriptionFormValues) => {
    setLoading(true)

    try {
      // Simulación de envío - en producción, esto sería una llamada a la API
      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast({
        title: "¡Suscripción exitosa!",
        description: "Gracias por suscribirte.",
      })

      if (onSuccess) {
        onSuccess(data)
      }
    } catch (error) {
      toast({
        title: "Error al suscribirse",
        description: "Ha ocurrido un error. Por favor, inténtalo de nuevo.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Form schema={subscriptionSchema} onSubmit={handleSubmit} className={className}>
      {(form) => (
        <>
          <div className={`${includeName ? "space-y-3" : ""}`}>
            {includeName && (
              <FormField>
                <FormLabel htmlFor="name" className="sr-only">
                  Nombre
                </FormLabel>
                <Input
                  {...form.register("name")}
                  id="name"
                  placeholder="Tu nombre"
                  className="w-full"
                  aria-label="Tu nombre"
                />
                <FormMessage>{form.formState.errors.name?.message}</FormMessage>
              </FormField>
            )}

            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-grow">
                <FormField>
                  <FormLabel htmlFor="email" className="sr-only">
                    Correo electrónico
                  </FormLabel>
                  <Input
                    {...form.register("email")}
                    id="email"
                    type="email"
                    placeholder="Tu correo electrónico"
                    className="w-full"
                    aria-label="Tu correo electrónico"
                    required
                  />
                  <FormMessage>{form.formState.errors.email?.message}</FormMessage>
                </FormField>
              </div>

              <Button type="submit" disabled={loading} className="bg-primary hover:bg-primary/90 whitespace-nowrap">
                {loading ? (
                  "Enviando..."
                ) : (
                  <>
                    {downloadIcon && <Download className="mr-2 h-4 w-4" />}
                    {buttonText}
                  </>
                )}
              </Button>
            </div>
          </div>

          {microcopy && <p className="text-xs text-gray-500 mt-2">{microcopy}</p>}
        </>
      )}
    </Form>
  )
}
