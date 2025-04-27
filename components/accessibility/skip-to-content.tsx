import { cn } from "@/lib/optimization-utils"

interface SkipToContentProps {
  contentId?: string
  className?: string
}

export default function SkipToContent({ contentId = "main-content", className }: SkipToContentProps) {
  return (
    <a
      href={`#${contentId}`}
      className={cn(
        "sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:p-4 focus:bg-white focus:text-primary focus:outline-none focus:ring-2 focus:ring-primary",
        className,
      )}
    >
      Saltar al contenido principal
    </a>
  )
}
