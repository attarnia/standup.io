import Skeleton from "./ui/Skeleton";

export default function WorkspaceListSkeleton() {
  return (
    <section
      aria-label="Workspace list loading"
      className="grid grid-cols-1 gap-5 sm:grid-cols-2 2xl:grid-cols-3"
    >
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="rounded-3xl border border-white/10 bg-white/5 p-5"
        >
          {/* Header */}
          <div className="flex items-start justify-between">
            <div className="space-y-3">
              <Skeleton className="h-6 w-40" />
              <Skeleton className="h-4 w-56" />
            </div>

            <Skeleton className="h-10 w-10 rounded-xl" />
          </div>

          {/* Workspace stats */}
          <div className="mt-8 grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-white/10 p-3">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="mt-3 h-7 w-12" />
            </div>

            <div className="rounded-xl border border-white/10 p-3">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="mt-3 h-7 w-12" />
            </div>
          </div>

          {/* Footer */}
          <div className="mt-6 flex items-center justify-between">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-9 w-24 rounded-xl" />
          </div>
        </div>
      ))}
    </section>
  );
}
