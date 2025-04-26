"use client"

import Link from "next/link"
import { useTranslations } from "next-intl"

export default function NotFound() {
  const t = useTranslations("common")

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-6">{t("notFound.title", { defaultValue: "Página no encontrada" })}</h2>
      <p className="text-gray-600 mb-8 max-w-md">
        {t("notFound.description", {
          defaultValue: "Lo sentimos, la página que estás buscando no existe o ha sido movida.",
        })}
      </p>
      <Link href="/" className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
        {t("notFound.backHome", { defaultValue: "Volver al inicio" })}
      </Link>
    </div>
  )
}
