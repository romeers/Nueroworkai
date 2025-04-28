import { Skeleton } from "@/components/ui/skeleton"

export default function MediaKitLoading() {
  return (
    <main className="flex-1">
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="mb-12">
            <Skeleton className="h-4 w-24 mb-4" />
            <Skeleton className="h-12 w-1/2 mb-6" />
            <Skeleton className="h-6 w-3/4" />
          </div>

          {/* Sobre Nosotros */}
          <section className="mb-16">
            <Skeleton className="h-8 w-1/3 mb-6" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-4/5" />
              </div>
              <Skeleton className="h-64 w-full rounded-lg" />
            </div>
          </section>

          {/* Nuestra Audiencia */}
          <section className="mb-16">
            <Skeleton className="h-8 w-1/3 mb-6" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Array.from({ length: 3 }).map((_, i) => (
                <Skeleton key={i} className="h-48 w-full rounded-lg" />
              ))}
            </div>
          </section>

          {/* Recursos de Marca */}
          <section className="mb-16">
            <Skeleton className="h-8 w-1/3 mb-6" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <Skeleton className="h-6 w-1/4 mb-2" />
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <Skeleton className="h-32 w-full rounded-lg" />
                  <Skeleton className="h-32 w-full rounded-lg" />
                </div>
                <Skeleton className="h-10 w-full rounded-md" />
              </div>
              <div className="space-y-4">
                <Skeleton className="h-6 w-1/4 mb-2" />
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <Skeleton className="h-32 w-full rounded-lg" />
                  <Skeleton className="h-32 w-full rounded-lg" />
                </div>
                <Skeleton className="h-6 w-1/4 mb-2" />
                <Skeleton className="h-20 w-full rounded-lg" />
              </div>
            </div>
          </section>

          {/* CTA Final */}
          <Skeleton className="h-48 w-full rounded-lg" />
        </div>
      </section>
    </main>
  )
}
