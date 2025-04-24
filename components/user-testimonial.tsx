import Image from "next/image"

interface Testimonial {
  quote: string
  author: string
  role: string
  company: string
  avatarUrl?: string | null
}

interface UserTestimonialProps {
  testimonial: Testimonial
}

export default function UserTestimonial({ testimonial }: UserTestimonialProps) {
  const fallbackAvatar = `/placeholder.svg?height=40&width=40&query=person avatar`

  return (
    <div className="rounded-lg bg-gray-50 p-4 border border-gray-100">
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <svg className="h-8 w-8 text-primary/30" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
        </div>
        <p className="ml-4 text-gray-600 text-sm">{testimonial.quote}</p>
      </div>
      <div className="mt-4 flex items-center">
        <div className="relative h-10 w-10 flex-shrink-0">
          {testimonial.avatarUrl && testimonial.avatarUrl !== "" ? (
            <Image
              className="rounded-full"
              src={testimonial.avatarUrl || "/placeholder.svg"}
              alt={testimonial.author}
              fill
              sizes="40px"
            />
          ) : (
            <Image
              className="rounded-full"
              src={fallbackAvatar || "/placeholder.svg"}
              alt={testimonial.author}
              fill
              sizes="40px"
            />
          )}
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-secondary">{testimonial.author}</p>
          <p className="text-xs text-gray-500">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  )
}
