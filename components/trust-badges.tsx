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

export default function TrustBadges({ title, badges }: TrustBadgesProps) {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-lg font-medium text-gray-600">{title}</p>
          </div>
        )}

        <div className="mt-8 flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {badges.map((badge, index) => (
            <div key={index} className="relative h-12 w-auto">
              <SafeImage
                src={badge.logoUrl}
                alt={badge.name}
                width={badge.width}
                height={badge.height}
                className="h-full w-auto max-w-[120px] grayscale transition-all duration-300 hover:grayscale-0 md:max-w-[150px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
