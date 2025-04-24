import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import SafeImage from "@/components/safe-image"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#E6F0FF] to-[#F5F8FE] py-16 md:py-24">
      {/* Patrón de fondo sutil */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0">
          <pattern
            id="neural-pattern"
            x="0"
            y="0"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(10)"
          >
            <circle cx="50" cy="50" r="1" fill="#3B82F6" />
            <circle cx="30" cy="40" r="1" fill="#7C3AED" />
            <circle cx="70" cy="30" r="1" fill="#3B82F6" />
            <circle cx="20" cy="70" r="1" fill="#7C3AED" />
            <circle cx="80" cy="60" r="1" fill="#3B82F6" />
            <path d="M50 50 L30 40 L20 70 Z" stroke="#3B82F6" strokeWidth="0.2" fill="none" />
            <path d="M50 50 L70 30 L80 60 Z" stroke="#7C3AED" strokeWidth="0.2" fill="none" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#neural-pattern)" />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
          {/* Columna izquierda: Texto y CTAs */}
          <div className="flex flex-col items-start justify-center">
            <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-[#1E293B] sm:text-5xl md:text-[56px]">
              Descubre las mejores herramientas de productividad con IA
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-gray-700">
              Potencia tu trabajo remoto con las apps más inteligentes del mercado. Compara, elige y empieza hoy mismo.
            </p>

            <div className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button asChild size="lg" className="bg-[#3B82F6] px-6 text-base font-medium hover:bg-[#3B82F6]/90">
                <Link href="/comparativas">Explora herramientas IA</Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-[#7C3AED] px-6 text-base font-medium text-[#7C3AED] hover:bg-[#7C3AED]/10"
              >
                <Link href="/recursos">
                  <Download className="mr-2 h-5 w-5" />
                  Descargar Kit gratuito
                </Link>
              </Button>
            </div>

            <p className="mt-6 text-sm text-gray-500">+50 herramientas analizadas · Actualizado 2025</p>
          </div>

          {/* Columna derecha: Imagen ilustrativa */}
          <div className="flex justify-center md:justify-end">
            <div className="relative h-[400px] w-full max-w-md overflow-hidden rounded-lg md:h-[480px]">
              <SafeImage
                src="/ai-brain-illustration.png"
                fallbackSrc="/neural-network-head.png"
                alt="Inteligencia Artificial para productividad"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
