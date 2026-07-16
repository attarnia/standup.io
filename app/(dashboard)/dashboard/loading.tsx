import Skeleton from "@/components/ui/Skeleton";

export default function DashboardLoading() {
  return (
    <div className="animate-pulse">
      {/* Hero */}
      <div className="h-40 w-full rounded-2xl bg-neutral-900" />

      {/* Summary Cards */}
      <section className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="rounded-2xl border border-border bg-surface p-6"
          >
            <div className="flex items-start justify-between">
              <div className="space-y-3 flex-1">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-8 w-20" />
                <Skeleton className="h-3 w-40" />
              </div>

              <Skeleton className="h-12 w-12 rounded-xl" />
            </div>
          </div>
        ))}
      </section>

      {/* Content */}
      <section className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3 items-start">
        {/* Reports */}
        <div className="lg:col-span-2 rounded-2xl border border-border bg-surface p-6">
          <Skeleton className="mb-6 h-6 w-48" />

          <div className="space-y-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="flex items-start justify-between rounded-xl border border-border p-4"
              >
                <div className="flex-1 space-y-3">
                  <Skeleton className="h-5 w-52" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-2/3" />
                </div>

                <Skeleton className="ml-4 h-8 w-20 rounded-full" />
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="rounded-2xl border border-border bg-surface p-6">
          <Skeleton className="mb-6 h-6 w-40" />

          <div className="space-y-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-12 w-full rounded-xl" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}