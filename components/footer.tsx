"use client"

import type React from "react"

import Link from "next/link"
import SafeImage from "./safe-image"
import { useLanguage } from "@/contexts/language-context"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

export default function Footer() {
  const { t, formatDate } = useLanguage()
  const currentYear = new Date().getFullYear()
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "footer" }),
      })

      if (!response.ok) throw new Error("Error al suscribirse")

      toast({
        title: t("thankYou"),
        description: t("emailSent"),
      })
      setEmail("")
    } catch (error) {
      toast({
        title: t("errorOccurred"),
        description: String(error),
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center">
              <SafeImage
                src="/neuroworkai-logo-white.png"
                alt="NeuroWorkAI Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <span className="ml-2 text-xl font-bold">NeuroWorkAI</span>
            </Link>
            <p className="mt-4 text-sm text-gray-400">
              Análisis y comparativas de herramientas de IA para profesionales remotos.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">{t("home")}</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link href="/herramientas-ia" className="text-gray-300 hover:text-white transition-colors">
                  {t("tools")}
                </Link>
              </li>
              <li>
                <Link href="/recursos" className="text-gray-300 hover:text-white transition-colors">
                  {t("resources")}
                </Link>
              </li>
              <li>
                <Link href="/sobre-nosotros" className="text-gray-300 hover:text-white transition-colors">
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-300 hover:text-white transition-colors">
                  {t("contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/politica-privacidad" className="text-gray-300 hover:text-white transition-colors">
                  {t("privacyPolicy")}
                </Link>
              </li>
              <li>
                <Link href="/politica-cookies" className="text-gray-300 hover:text-white transition-colors">
                  {t("cookiePolicy")}
                </Link>
              </li>
              <li>
                <Link href="/aviso-afiliados" className="text-gray-300 hover:text-white transition-colors">
                  {t("affiliateDisclosure")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">{t("newsletterTitle")}</h3>
            <p className="mt-4 text-sm text-gray-400">{t("newsletterSubtitle")}</p>
            <form onSubmit={handleSubmit} className="mt-4">
              <div className="flex">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t("emailPlaceholder")}
                  className="bg-gray-800 border-gray-700 text-white rounded-l-md focus:ring-primary focus:border-primary"
                  required
                />
                <Button type="submit" disabled={isSubmitting} className="bg-primary hover:bg-primary/90 rounded-l-none">
                  {isSubmitting ? (
                    <span className="animate-pulse">{t("sending")}</span>
                  ) : (
                    <ArrowRight className="h-4 w-4" />
                  )}
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-2">{t("ctaMicrocopy")}</p>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-center text-sm text-gray-400">
              &copy; {currentYear} NeuroWorkAI. {t("allRightsReserved")}
            </p>
            <p className="mt-4 md:mt-0 text-gray-500 text-xs">{t("designedWith")}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
