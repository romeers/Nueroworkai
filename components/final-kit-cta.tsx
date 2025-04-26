"use client"
import SafeImage from "./safe-image"
import SubscriptionForm from "./subscription-form"

interface FinalKitCTAProps {
  title?: string
  subtitle?: string
  buttonText?: string
  emailPlaceholder?: string
  microcopy?: string
  imageUrl?: string
}

export default function FinalKitCTA({
  title = "Potencia tu productividad con IA",
  subtitle = "Descarga nuestro Kit de Productividad IA NeuroWorkAI (Actualizado 2025) y comienza a trabajar mejor con IA desde hoy.",
  buttonText = "Descargar Kit gratuito",
  emailPlaceholder = "Tu correo electrónico",
  microcopy = "Sin spam · Descarga inmediata tras confirmar",
  imageUrl = "/ai-productivity-kit-ebook.png",
}: FinalKitCTAProps) {
  return (
    <section
      className="py-20 px-6 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%)",
      }}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
        aria-hidden="true"
      />

      {/* Optional decorative image */}
      {imageUrl && (
        <div className="absolute right-0 bottom-0 w-32 h-32 opacity-10 md:opacity-20 transform translate-x-1/4 translate-y-1/4">
          <SafeImage
            src={imageUrl}
            alt="Kit de Productividad con IA"
            width={128}
            height={128}
            className="w-full h-full object-contain"
          />
        </div>
      )}

      <div className="container mx-auto relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
          <p className="text-white/90 text-lg mb-8">{subtitle}</p>

          <div className="max-w-xl mx-auto">
            <SubscriptionForm
              showName={false}
              buttonText={buttonText}
              successMessage="¡Gracias por suscribirte! Recibirás el kit de productividad pronto."
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg"
              lightMode={true}
            />
            <p className="text-sm text-white/80 mt-4">{microcopy}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
