import type React from "react"
interface Stat {
  value: string
  label: string
  description?: string
  icon?: React.ReactNode
}

interface StatsProps {
  title: string
  subtitle?: string
  stats: Stat[]
}

export default function Stats({ title, subtitle, stats }: StatsProps) {
  return (
    <section className="bg-gradient-to-r from-sky-light/50 to-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold text-secondary sm:text-4xl">{title}</h2>
          {subtitle && <p className="mt-4 text-lg leading-relaxed text-gray-600">{subtitle}</p>}
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl border border-gray-100 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-md"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-primary/80 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></div>
              {stat.icon && (
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-3xl text-primary">
                    {stat.icon}
                  </div>
                </div>
              )}
              <p className="text-4xl font-bold text-primary">{stat.value}</p>
              <p className="mt-2 text-lg font-semibold text-secondary">{stat.label}</p>
              {stat.description && <p className="mt-2 text-sm leading-relaxed text-gray-600">{stat.description}</p>}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xs font-medium text-gray-500">
            Datos actualizados 2025 • Basado en análisis de NeuroWorkAI
          </p>
        </div>
      </div>
    </section>
  )
}
