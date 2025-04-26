"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { z } from "zod"
import { Form, FormField, FormLabel, FormMessage } from "@/components/ui/form"
import { Download } from "lucide-react"

const subscriptionSchema = z.object({
  email: z.string().email({ message: "Por favor, introduce un email válido" }),
  name: z.string().optional(),
})

type SubscriptionFormValues = z.infer<typeof subscriptionSchema>

interface EmailSubscriptionFormProps {
  title?: string
  description?: string
  buttonText?: string
  successMessage?: string
  showName?: boolean
  className?: string
  downloadIcon?: boolean
  onSuccess?: () => void
}

export function EmailSubscriptionForm({
  title = "Suscríbete a nuestra newsletter",
  description = "Recibe las últimas actualizaciones sobre herramientas de IA y productividad.",
  buttonText = "Suscribirme",
  successMessage = "¡Gracias por suscribirte! Recibirás nuestras actualizaciones pronto.",
  showName = false,
  className = "",
  downloadIcon = false,
  onSuccess,
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
        description: successMessage,
      })

      if (onSuccess) {
        onSuccess()
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
    <Form schema={subscriptionSchema} onSubmit={handleSubmit}>
      {(form) => (
        <div className={className}>
          {title && <h3 className="text-xl font-bold mb-2">{title}</h3>}
          {description && <p className="text-gray-600 mb-4">{description}</p>}
          <div className={`${showName ? "space-y-3" : ""}`}>
            {showName && (
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
        </div>
      )}
    </Form>
  )
}

export default EmailSubscriptionForm
