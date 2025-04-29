"use client"

import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { Link } from "next-intl/client"

export default function HeroSection() {
  const t = useTranslations("Home.hero")
  const tButtons = useTranslations("Buttons")

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Modern abstract background with gradient and blurry shapes */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-violet-800/80 to-indigo-900/90"></div>
        <div className="absolute top-20 left-1/4 h-72 w-72 rounded-full bg-purple-500 opacity-10 blur-3xl"></div>
        <div className="absolute bottom-10 right-1/4 h-96 w-96 rounded-full bg-blue-500 opacity-10 blur-3xl"></div>
        <div className="absolute top-1/3 right-1/3 h-64 w-64 rounded-full bg-indigo-500 opacity-5 blur-3xl"></div>
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-16">
          {/* Left column: Text and CTAs */}
          <div className="flex flex-col items-start justify-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground/90 bg-primary/20 px-3 py-1 rounded-full backdrop-blur-sm">
              Plataforma líder en productividad IA
            </p>
            <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-[56px]">
              {t("title")}
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-slate-200">{t("subtitle")}</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary px-8 text-base font-medium shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl hover:translate-y-[-2px]"
              >
                <Link href="/herramientas-ia" aria-label={tButtons("exploreTools")}>
                  {t("cta")}
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-white/30 bg-white/10 px-8 text-base font-medium text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:translate-y-[-2px]"
              >
                <Link href="/kit-digital" className="flex items-center" aria-label={tButtons("downloadKit")}>
                  <Download className="mr-2 h-5 w-5" aria-hidden="true" />
                  {tButtons("downloadKit")}
                </Link>
              </Button>
            </div>

            <p className="mt-6 text-sm text-slate-300">+50 herramientas analizadas · {t("updated")}</p>
          </div>

          {/* Right column: Robot mascota analizando herramientas */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-md md:max-w-lg lg:max-w-xl">
              {/* Contenedor para la imagen con efecto de integración con el fondo */}
              <div className="relative">
                {/* Efecto de resplandor detrás del robot para integración con el fondo */}
                <div className="absolute inset-0 -z-10 bg-blue-500/20 blur-2xl rounded-full" aria-hidden="true"></div>

                {/* Imagen principal del robot - Usando la URL directa para asegurar que funcione */}
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a-3d-futuristic-violet-ai-robot-mascot-w_5h5IBoKFSzWsuOpv5NBu1A_zoZYDhsHSpq1k44XcLq0RQ-3PcDPxCdahAAalKWRslvpqN2mKZL1l.png"
                  alt="Robot IA analizando herramientas de productividad"
                  width={600}
                  height={600}
                  priority={true}
                  className="w-full h-auto object-contain drop-shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
