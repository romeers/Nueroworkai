import { Download } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import VideoWithFallback from "./video-with-fallback"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Modern abstract background with gradient and blurry shapes */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-slate-50 to-blue-50"></div>
        <div className="absolute top-20 left-1/4 h-72 w-72 rounded-full bg-purple-200 opacity-20 blur-3xl"></div>
        <div className="absolute bottom-10 right-1/4 h-96 w-96 rounded-full bg-blue-200 opacity-20 blur-3xl"></div>
        <div className="absolute top-1/3 right-1/3 h-64 w-64 rounded-full bg-indigo-200 opacity-10 blur-3xl"></div>
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-16">
          {/* Left column: Text and CTAs */}
          <div className="flex flex-col items-start justify-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
              Plataforma líder en productividad IA
            </p>
            <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl md:text-[56px]">
              Descubre las mejores herramientas de productividad con IA
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Potencia tu trabajo remoto con las apps más inteligentes del mercado. Compara, elige y empieza hoy mismo.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary px-8 text-base font-medium shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl hover:translate-y-[-2px]"
              >
                <Link href="/herramientas-ia" aria-label="Explorar herramientas de IA para productividad">
                  Explora herramientas IA
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-primary/80 bg-white/80 px-8 text-base font-medium text-primary backdrop-blur-sm transition-all hover:bg-primary/10 hover:translate-y-[-2px]"
              >
                <Link
                  href="/kit-digital"
                  className="flex items-center"
                  aria-label="Descargar kit gratuito de productividad con IA"
                >
                  <Download className="mr-2 h-5 w-5" aria-hidden="true" />
                  Descargar Kit gratuito
                </Link>
              </Button>
            </div>

            <p className="mt-6 text-sm text-slate-500">+50 herramientas analizadas · Actualizado 2025</p>
          </div>

          {/* Right column: Animated robot video with fallback */}
          <div className="flex justify-center md:justify-end">
            <div className="relative h-auto w-full max-w-[90%] overflow-hidden md:max-w-[85%]">
              <div className="relative overflow-hidden rounded-2xl">
                {/* Subtle gradient overlay to blend with background */}
                <div
                  className="absolute inset-0 z-10 rounded-2xl bg-gradient-to-tr from-white/10 via-transparent to-primary/5 opacity-80 pointer-events-none"
                  aria-hidden="true"
                ></div>

                <VideoWithFallback
                  videoSrc="/neurowork-robot-optimized.mp4"
                  fallbackImageSrc="/robot-fallback.png"
                  alt="NeuroWorkAI robot mascot animado"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
