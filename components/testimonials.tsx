"use client"

import { useLanguage } from "@/contexts/language-context"

interface Testimonial {
  quote: string
  author: string
  role?: string
  company?: string
  avatarUrl?: string
}

interface TestimonialsProps {
  title?: string
  subtitle?: string
  testimonials: Testimonial[]
}

export default function Testimonials({ title, subtitle, testimonials }: TestimonialsProps) {
  const { t } = useLanguage()

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
            {title || t("testimonialsTitle")}
          </h2>
          {subtitle && <p className="mt-4 text-lg text-gray-600">{subtitle || t("testimonialsSubtitle")}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 flex flex-col h-full"
            >
              <div className="flex-grow">
                <svg
                  className="h-8 w-8 text-primary/20 mb-4"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-gray-600 italic mb-4">{testimonial.quote}</p>
              </div>
              <div className="flex items-center mt-4">
                {testimonial.avatarUrl && (
                  <img
                    src={testimonial.avatarUrl || "/placeholder.svg"}
                    alt={`Avatar de ${testimonial.author}`}
                    className="h-10 w-10 rounded-full mr-3 object-cover"
                    loading="lazy"
                  />
                )}
                <div>
                  <h4 className="font-semibold text-secondary">{testimonial.author}</h4>
                  {(testimonial.role || testimonial.company) && (
                    <p className="text-sm text-gray-500">
                      {testimonial.role}
                      {testimonial.role && testimonial.company && ", "}
                      {testimonial.company}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
