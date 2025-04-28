import { Skeleton } from "@/components/ui/skeleton"

export default function TermsOfServiceLoading() {
  return (
    <main className="flex-1">
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="mb-8">
            <Skeleton className="h-4 w-24 mb-4" />
            <Skeleton className="h-10 w-3/4 mb-6" />
            <Skeleton className="h-4 w-40" />
          </div>

          <div className="space-y-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="mb-8">
                <Skeleton className="h-8 w-1/3 mb-4" />
                <div className="space-y-3">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                  <Skeleton className="h-4 w-4/5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
