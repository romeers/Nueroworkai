import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import { cn } from "@/lib/utils"

export interface Breadcrumb {
  name: string
  href: string
  current?: boolean
}

interface BreadcrumbsProps {
  items: Breadcrumb[]
  className?: string
}

export default function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  // Ensure home is always the first item
  const breadcrumbs = items[0]?.href === "/" ? items : [{ name: "Inicio", href: "/" }, ...items]

  return (
    <>
      <nav className={cn("flex text-sm text-gray-500", className)} aria-label="Breadcrumb">
        <ol className="flex items-center flex-wrap">
          {breadcrumbs.map((breadcrumb, index) => (
            <li key={breadcrumb.href} className="flex items-center">
              {index > 0 && <ChevronRight className="mx-1 h-4 w-4 flex-shrink-0 text-gray-400" aria-hidden="true" />}
              {index === 0 && <Home className="mr-1 h-4 w-4 flex-shrink-0 text-gray-400" aria-hidden="true" />}
              <Link
                href={breadcrumb.href}
                className={cn("hover:text-gray-700", breadcrumb.current ? "font-medium text-primary" : "")}
                aria-current={breadcrumb.current ? "page" : undefined}
              >
                {breadcrumb.name}
              </Link>
            </li>
          ))}
        </ol>
      </nav>

      {/* Structured Data for Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: breadcrumbs.map((breadcrumb, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: breadcrumb.name,
              item: `https://neuroworkai.com${breadcrumb.href}`,
            })),
          }),
        }}
      />
    </>
  )
}
