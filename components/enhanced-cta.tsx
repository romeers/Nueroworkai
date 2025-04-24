import Link from "next/link"
import { Button } from "@/components/ui/button"

interface EnhancedCTAProps {
  title: string
  subtitle: string
  primaryButtonText: string
  primaryButtonUrl: string
  secondaryButtonText?: string
  secondaryButtonUrl?: string
  bgColor?: "primary" | "secondary" | "white"
}

export default function EnhancedCTA({
  title,
  subtitle,
  primaryButtonText,
  primaryButtonUrl,
  secondaryButtonText,
  secondaryButtonUrl,
  bgColor = "primary",
}: EnhancedCTAProps) {
  const getBgColor = () => {
    switch (bgColor) {
      case "primary":
        return "bg-primary text-white"
      case "secondary":
        return "bg-secondary text-white"
      case "white":
        return "bg-white text-secondary"
      default:
        return "bg-primary text-white"
    }
  }

  const getButtonStyles = () => {
    switch (bgColor) {
      case "primary":
        return {
          primary: "bg-white text-primary hover:bg-white/90",
          secondary: "border-white text-white hover:bg-white/10",
        }
      case "secondary":
        return {
          primary: "bg-white text-secondary hover:bg-white/90",
          secondary: "border-white text-white hover:bg-white/10",
        }
      case "white":
        return {
          primary: "bg-primary text-white hover:bg-primary/90",
          secondary: "border-primary text-primary hover:bg-primary/10",
        }
      default:
        return {
          primary: "bg-white text-primary hover:bg-white/90",
          secondary: "border-white text-white hover:bg-white/10",
        }
    }
  }

  const buttonStyles = getButtonStyles()

  return (
    <section className={`py-16 ${getBgColor()}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
          <p className={`mt-4 text-lg ${bgColor === "white" ? "text-gray-600" : "text-white/90"}`}>{subtitle}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className={buttonStyles.primary}>
              <Link href={primaryButtonUrl}>{primaryButtonText}</Link>
            </Button>
            {secondaryButtonText && secondaryButtonUrl && (
              <Button asChild variant="outline" size="lg" className={buttonStyles.secondary}>
                <Link href={secondaryButtonUrl}>{secondaryButtonText}</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
