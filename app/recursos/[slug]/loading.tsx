import { Skeleton } from "@/components/ui/skeleton"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ResourceLoading() {
  return (
    <>
      {/* Hero Section Skeleton */}
      <section className="bg-gradient-to-r from-gray-50 to-violet-50 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Link
              href="/recursos"
              className="inline-flex items-center text-primary mb-6 hover:underline"
              aria-label="Volver a recursos"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver a recursos
            </Link>

            <div className="flex flex-wrap gap-2 mb-4">
              <Skeleton className="h-6 w-24 rounded-full" />
              <Skeleton className="h-6 w-32 rounded-full" />
            </div>

            <Skeleton className="h-12 w-full max-w-2xl mb-4" />
            <Skeleton className="h-8 w-full max-w-xl mb-8" />

            <div className="flex flex-col sm:flex-row gap-4">
              <Skeleton className="h-10 w-40" />
              <Skeleton className="h-10 w-40" />
              <Skeleton className="h-10 w-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image Skeleton */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Skeleton className="h-[300px] sm:h-[400px] w-full rounded-xl" />
          </div>
        </div>
      </section>

      {/* Content Section Skeleton */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="space-y-4">
              <Skeleton className="h-8 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-4/5" />
              <Skeleton className="h-8 w-2/3 mt-8" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>

            {/* CTA Box Skeleton */}
            <div className="mt-12 rounded-xl bg-primary/5 p-8 border border-primary/10">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-1">
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6 mt-1" />
                </div>
                <Skeleton className="h-10 w-32" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Magnet CTA Skeleton */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="text-center mb-6">
                <Skeleton className="h-8 w-64 mx-auto mb-2" />
                <Skeleton className="h-4 w-full max-w-md mx-auto" />
              </div>
              <div className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Skeleton className="h-10 flex-grow" />
                  <Skeleton className="h-10 w-40" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources Skeleton */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <Skeleton className="h-8 w-64 mb-8" />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="rounded-lg border bg-white overflow-hidden flex flex-col h-full">
                  <Skeleton className="h-48 w-full" />
                  <div className="p-6 flex-1">
                    <Skeleton className="h-6 w-3/4 mb-2" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-full mb-4" />
                    <div className="flex flex-col sm:flex-row gap-3 mt-4">
                      <Skeleton className="h-10 w-full" />
                      <Skeleton className="h-10 w-full" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
