import SafeImage from "./safe-image"

interface Testimonial {
  quote: string
  author: string
  role: string
  company: string
  avatarUrl: string
}

interface TestimonialsProps {
  title: string
  subtitle?: string
  testimonials: Testimonial[]
}

export default function Testimonials({ title, subtitle, testimonials }: TestimonialsProps) {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-secondary sm:text-3xl">{title}</h2>
          {subtitle && <p className="mt-4 text-lg text-gray-600">{subtitle}</p>}
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-8 w-8 text-primary" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                </div>
                <p className="ml-4 text-gray-600">{testimonial.quote}</p>
              </div>
              <div className="mt-6 flex items-center">
                <div className="relative h-10 w-10 flex-shrink-0">
                  <SafeImage
                    src={testimonial.avatarUrl}
                    alt={`${testimonial.author}, ${testimonial.role}`}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-secondary">{testimonial.author}</p>
                  <p className="text-xs text-gray-500">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
