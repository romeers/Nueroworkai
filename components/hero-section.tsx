import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section
      className="relative py-12 md:py-16 lg:py-24"
      style={{
        backgroundImage:
          'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a-seamless-ultra-light-abstract-tech-bac_77llVxuuSQq0MWmz2lHJpg_zlt8wHfaRXuVq1ca-Gj4mw-oJ6ierCcUf3EDUgvjgVyUNaoHdLVLN.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
          {/* Left column: Text and CTAs */}
          <div className="flex flex-col items-start justify-center">
            <p className="text-sm font-medium text-primary mb-2 tracking-wide uppercase">
              Plataforma líder en productividad IA
            </p>
            <h1 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-secondary md:text-5xl lg:text-6xl">
              Herramientas de IA para <span className="text-primary">Trabajo Remoto</span>
            </h1>

            <p className="mt-4 md:mt-6 text-base sm:text-lg text-gray-600 md:text-xl max-w-3xl mx-auto">
              Descubre y compara las mejores herramientas de productividad con IA para profesionales remotos.
              <br className="hidden md:inline" /> Reseñas, comparativas y recursos gratuitos actualizados 2025.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 h-12">
                <Link href="/herramientas-ia">Descubrir Herramientas IA</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12">
                <Link href="/recursos">Guías y Recursos</Link>
              </Button>
            </div>

            <p className="mt-6 text-sm text-gray-500">+50 herramientas analizadas · Actualizado 2025</p>
          </div>

          {/* Right column: Professional using AI tools image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-[65%] h-auto overflow-hidden">
              <div className="relative rounded-xl overflow-hidden backdrop-blur-sm backdrop-filter backdrop-blur-[2px]">
                {/* Gradient overlay to blend with background */}
                <div
                  className="absolute inset-0 bg-gradient-to-tr from-white/30 via-white/20 to-transparent opacity-70 z-10 rounded-xl"
                  aria-hidden="true"
                ></div>

                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a-young-professional-working-remotely-on_NBKycgd-RlC5B3Knh0lstw_fsV1ydBFSi-8xmveHcX-zQ-k4AJDC2tcixvYgSMsRWjmgmqUpht2I.png"
                  alt="Profesional remoto utilizando herramientas de IA para productividad"
                  width={600}
                  height={600}
                  className="w-full h-auto rounded-xl object-cover opacity-90"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
