import SafeImage from "./safe-image"

interface Testimonial {
  quote: string
  author: string
  role: string
  company?: string
  avatarUrl: string
  companyLogo?: string
  rating?: number
}

interface TestimonialsProps {
  title: string
  subtitle?: string
  testimonials: Testimonial[]
  variant?: "default" | "compact" | "sidebar"
}

export default function Testimonials({ title, subtitle, testimonials, variant = "default" }: TestimonialsProps) {
  const getContainerClasses = () => {
    switch (variant) {
      case "compact":
        return "mt-8 grid grid-cols-1 gap-6"
      case "sidebar":
        return "mt-6 space-y-4"
      default:
        return "mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
    }
  }

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16" aria-label="Testimonios de usuarios reales">
      <div className="container mx-auto px-4 md:px-12 lg:px-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-secondary sm:text-3xl">{title}</h2>
          {subtitle && <p className="mt-4 text-lg text-gray-600">{subtitle}</p>}
        </div>

        <div className={getContainerClasses()}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-xl bg-white p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
            >
              {testimonial.rating && (
                <div className="flex mb-2" aria-label={`Calificación: ${testimonial.rating} de 5 estrellas`}>
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`h-4 w-4 ${i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 15.585l-7.07 3.707 1.35-7.87-5.72-5.573 7.91-1.149L10 0l3.53 7.7 7.91 1.149-5.72 5.573 1.35 7.87L10 15.585z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
              )}
              <div className="mb-4">
                <svg className="h-10 w-10 text-violet-500" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>
              <p className="text-gray-700 flex-grow text-base leading-relaxed">{testimonial.quote}</p>
              <div className="mt-6 flex items-center border-t border-gray-100 pt-4">
                <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-full">
                  <SafeImage
                    src={testimonial.avatarUrl}
                    alt={`${testimonial.author}, ${testimonial.role}`}
                    width={40}
                    height={40}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-semibold text-gray-800">{testimonial.author}</p>
                  <div className="flex items-center">
                    <p className="text-xs text-gray-500">
                      {testimonial.role}
                      {testimonial.company && (
                        <>
                          <span className="mx-1">•</span>
                          <span>{testimonial.company}</span>
                        </>
                      )}
                    </p>
                    {testimonial.companyLogo && (
                      <img
                        src={testimonial.companyLogo || "/placeholder.svg"}
                        alt={`${testimonial.company} logo`}
                        className="ml-2 h-4 w-auto"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
