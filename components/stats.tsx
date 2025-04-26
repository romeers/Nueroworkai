"use client"

import { useLanguage } from "@/contexts/language-context"

interface Stat {
  value: string
  label: string
  description?: string
}

interface StatsProps {
  title?: string
  subtitle?: string
  stats: Stat[]
}

export default function Stats({ title, subtitle, stats }: StatsProps) {
  const { t } = useLanguage()

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">{title || t("statsTitle")}</h2>
          {subtitle && <p className="mt-4 text-lg text-gray-600">{subtitle || t("statsSubtitle")}</p>}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-secondary mb-2">{stat.label}</div>
              {stat.description && <p className="text-sm text-gray-600">{stat.description}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
