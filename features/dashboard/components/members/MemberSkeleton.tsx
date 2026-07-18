import Skeleton from "@/components/ui/Skeleton";

export default function MembersSkeleton() {
  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="space-y-3">
          <Skeleton className="h-9 w-40" />
          <Skeleton className="h-4 w-72" />
        </div>

        <div className="flex items-center gap-4">
          {/* Workspace Select */}
          <Skeleton className="h-10 w-48 rounded-xl" />

          {/* Search */}
          <Skeleton className="h-10 w-24 rounded-xl" />

          {/* View Toggle */}
          <div className="flex overflow-hidden rounded-xl border border-white/10">
            <Skeleton className="h-10 w-10 rounded-none" />
            <Skeleton className="h-10 w-10 rounded-none" />
          </div>
        </div>
      </div>

      {/* Workspace Info */}
      <div className="mb-6 space-y-3">
        <Skeleton className="h-7 w-56" />
        <Skeleton className="h-4 w-20" />
      </div>

      {/* Members Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl"
          >
            {/* Avatar area */}
            <Skeleton className="h-60 w-full rounded-2xl" />

            {/* Info */}
            <div className="mt-5 space-y-3">
              <div className="flex items-center gap-2">
                <Skeleton className="h-6 w-32" />
                <Skeleton className="h-2.5 w-2.5 rounded-full" />
              </div>

              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-3 w-40" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
