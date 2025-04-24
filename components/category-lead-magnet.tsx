import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Download } from "lucide-react"
import SafeImage from "@/components/safe-image"

interface CategoryLeadMagnetProps {
  category: string
  title: string
  description: string
  bulletPoints: string[]
  imageUrl: string
  formId?: string
}

export default function CategoryLeadMagnet({
  category,
  title,
  description,
  bulletPoints,
  imageUrl,
  formId = "default",
}: CategoryLeadMagnetProps) {
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
                <svg className="mr-2 h-5 w-5 flex-shrink-0 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm text-gray-600 sm:text-base">{point}</span>
              </li>
            ))}
          </ul>

          <form className="mt-6 space-y-4">
            <Input
              type="email"
              placeholder="Tu correo electrónico"
              required
              className="bg-white"
              aria-label="Email para recibir el recurso gratuito"
            />
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
              <Download className="mr-2 h-4 w-4" />
              Descargar Gratis
            </Button>
          </form>
          <p className="mt-2 text-xs text-gray-500">
            Al suscribirte, aceptas recibir emails con recursos y actualizaciones. Puedes darte de baja en cualquier
            momento.
          </p>
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
