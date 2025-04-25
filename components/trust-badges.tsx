import SafeImage from "./safe-image"

interface TrustBadge {
  name: string
  logoUrl: string
  width: number
  height: number
}

interface TrustBadgesProps {
  title?: string
  badges: TrustBadge[]
}

// Update the TrustBadges component to make it more premium and credible

// Change the section styling to add a subtle border and better background
export default function TrustBadges({ title, badges }: TrustBadgesProps) {
  return (
    <section className="bg-white py-16 border-y border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <div className="mx-auto max-w-3xl text-center mb-10">
            <p className="text-lg font-semibold text-gray-800">
              {title || "Estas plataformas líderes ya utilizan nuestras guías y análisis"}
            </p>
          </div>
        )}

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {badges.map((badge, index) => (
            <div key={index} className="group relative transition-all duration-300">
              <SafeImage
                src={badge.logoUrl}
                alt={badge.name}
                width={badge.width}
                height={badge.height}
                className="w-20 h-auto grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
