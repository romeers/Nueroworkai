import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "AI Implementation Guides | NeuroWorkAI",
  description:
    "Discover our practical guides on how to implement and leverage artificial intelligence in your work and business.",
}

export default function GuidesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-light to-sky py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-3xl font-bold tracking-tight text-secondary sm:text-4xl md:text-5xl">
              AI Implementation Guides
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Learn how to implement and leverage artificial intelligence in your work and business with our detailed
              guides.
            </p>
          </div>
        </div>
      </section>

      {/* Guides Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1">
              <Link
                href="/guides/implement-ai-daily-workflow"
                className="block rounded-lg border bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Productivity</Badge>
                  <span className="text-sm text-gray-500">10 min read</span>
                </div>
                <h3 className="text-xl font-bold text-secondary">How to Implement AI in Your Daily Workflow</h3>
                <p className="mt-2 text-gray-600">
                  Step-by-step guide to integrating AI tools into your daily processes and increasing your productivity
                  without needing technical expertise.
                </p>
                <div className="mt-4 flex items-center text-primary font-medium">
                  Read guide <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-secondary mb-4">Looking for AI tools to implement?</h2>
            <p className="text-gray-600 mb-8">
              Explore our selection of the best AI tools for different use cases and needs.
            </p>
            <Button asChild size="lg">
              <Link href="/herramientas">View AI Tools</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
