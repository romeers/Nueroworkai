interface Stat {
  value: string
  label: string
  description?: string
}

interface StatsProps {
  title: string
  subtitle?: string
  stats: Stat[]
}

export default function Stats({ title, subtitle, stats }: StatsProps) {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-secondary sm:text-3xl">{title}</h2>
          {subtitle && <p className="mt-4 text-lg text-gray-600">{subtitle}</p>}
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <p className="text-3xl font-bold text-primary">{stat.value}</p>
              <p className="mt-2 text-lg font-medium text-secondary">{stat.label}</p>
              {stat.description && <p className="mt-1 text-sm text-gray-600">{stat.description}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
