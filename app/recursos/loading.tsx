import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="animate-pulse">
      {/* Hero Section Skeleton */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Skeleton className="h-12 w-3/4 mx-auto mb-4" />
            <Skeleton className="h-6 w-full mx-auto" />
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Skeleton className="h-10 w-40 mx-auto sm:mx-0" />
              <Skeleton className="h-10 w-40 mx-auto sm:mx-0" />
            </div>
          </div>
        </div>
      </section>

      {/* Search + Filter Bar Skeleton */}
      <section className="bg-white border-b py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <Skeleton className="h-10 w-full md:w-80" />
            <div className="flex overflow-x-auto pb-2 gap-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <Skeleton key={i} className="h-10 w-24 rounded-full" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resources Skeleton */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Skeleton className="h-8 w-64 mb-8" />
          <div className="grid gap-6 md:grid-cols-2">
            {[1, 2].map((i) => (
              <div key={i} className="rounded-xl overflow-hidden border bg-white">
                <div className="flex flex-col md:flex-row h-full">
                  <Skeleton className="w-full md:w-2/5 h-48" />
                  <div className="flex flex-col justify-between p-6 flex-1">
                    <div>
                      <Skeleton className="h-6 w-3/4 mb-2" />
                      <Skeleton className="h-4 w-full mb-2" />
                      <Skeleton className="h-4 w-full mb-2" />
                      <Skeleton className="h-4 w-3/4" />
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 mt-6">
                      <Skeleton className="h-10 w-full" />
                      <Skeleton className="h-10 w-full" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-3/4 mb-6" />

                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex items-start mb-2">
                      <Skeleton className="h-5 w-5 mr-2 rounded-full" />
                      <Skeleton className="h-4 w-full" />
                    </div>
                  ))}

                  <div className="mt-6">
                    <Skeleton className="h-10 w-full mb-2" />
                    <Skeleton className="h-10 w-full" />
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <Skeleton className="h-64 w-full max-w-md rounded-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Grid Skeleton */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <Skeleton className="h-8 w-64" />
            <Skeleton className="h-4 w-40" />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
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
      </section>
    </div>
  )
}
