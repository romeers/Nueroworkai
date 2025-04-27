import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="animate-pulse">
      {/* Hero Section Skeleton */}
      <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Skeleton className="h-4 w-32 mb-6" />

            <div className="flex flex-wrap gap-2 mb-4">
              <Skeleton className="h-6 w-24 rounded-full" />
              <Skeleton className="h-6 w-32" />
            </div>

            <Skeleton className="h-12 w-full mb-6" />
            <Skeleton className="h-6 w-full mb-8" />

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
            <Skeleton className="h-8 w-3/4 mb-4" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-3/4 mb-6" />

            <Skeleton className="h-8 w-1/2 mb-4" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-3/4 mb-6" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-3/4 mb-6" />

            {/* CTA Box Skeleton */}
            <div className="mt-12 rounded-xl bg-gray-100 p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-1">
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full" />
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
            <div className="bg-white rounded-xl p-6 sm:p-8">
              <div className="grid gap-10 md:grid-cols-2">
                <div className="flex flex-col justify-center">
                  <Skeleton className="h-8 w-3/4 mb-4" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-full mb-6" />

                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex items-start mb-2">
                      <Skeleton className="h-5 w-5 mr-2 rounded-full" />
                      <Skeleton className="h-4 w-full" />
                    </div>
                  ))}

                  <div className="mt-6">
                    <Skeleton className="h-10 w-full" />
                  </div>
                </div>
                <div className="hidden md:flex items-center justify-center">
                  <Skeleton className="h-64 w-full rounded-xl" />
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
    </div>
  )
}
