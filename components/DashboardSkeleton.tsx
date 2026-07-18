import Skeleton from "./ui/Skeleton";

export default function DashboardSkeleton() {
  return (
    <div>
      {/* Hero */}
      <div className="space-y-3">
        <Skeleton className="h-10 w-72" />
        <Skeleton className="h-5 w-96" />
      </div>

      {/* Summary Cards */}
      <section className="mt-8 grid grid-cols-1 gap-4 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="rounded-3xl border border-white/10 bg-white/5 p-5"
          >
            <div className="flex items-center justify-between">
              <Skeleton className="h-5 w-32" />
              <Skeleton className="h-10 w-10 rounded-xl" />
            </div>

            <Skeleton className="mt-6 h-10 w-20" />
            <Skeleton className="mt-3 h-4 w-40" />
          </div>
        ))}

        {/* AI Summary Card */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-5 md:col-span-2 lg:col-span-3">
          <Skeleton className="h-6 w-40" />
          <Skeleton className="mt-5 h-24 w-full rounded-xl" />
        </div>
      </section>

      {/* Reports + Quick Actions */}
      <section className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3 items-start">
        {/* Today Reports */}
        <div className="lg:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-5">
          <Skeleton className="h-7 w-44" />

          <div className="mt-6 space-y-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="rounded-2xl border border-white/10 p-4">
                <Skeleton className="h-5 w-48" />
                <Skeleton className="mt-3 h-4 w-full" />
                <Skeleton className="mt-2 h-4 w-2/3" />
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
          <Skeleton className="h-7 w-40" />

          <div className="mt-6 space-y-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-12 w-full rounded-xl" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
