import SafeImage from "./safe-image"

interface TrustBadge {
  name: string
  logoUrl: string
  width?: number
  height?: number
}

interface TrustBadgesProps {
  title: string
  badges: TrustBadge[]
}

export default function TrustBadges({ title, badges }: TrustBadgesProps) {
  return (
    <section className="py-8 bg-white border-t border-b border-gray-100">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-lg font-medium text-secondary mb-8">{title}</h3>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {badges.map((badge, index) => (
            <div key={index} className="flex items-center justify-center">
              <SafeImage
                src={badge.logoUrl}
                alt={`Logo de ${badge.name}`}
                width={badge.width || 120}
                height={badge.height || 40}
                className="h-8 md:h-10 w-auto grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                fallbackSrc="/abstract-geometric-logo.png"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
