import Skeleton from "./ui/Skeleton";

export default function WorkspaceListSkeleton() {
  return (
    <section
      aria-label="Loading workspaces"
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3 xl:gap-6"
    >
      {Array.from({ length: 6 }).map((_, index) => (
        <article
          key={index}
          className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/[0.04] p-4 sm:p-5 lg:p-6"
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0 flex-1 space-y-2 sm:space-y-3">
              <Skeleton className="h-5 w-3/4 rounded-md sm:h-6" />
              <Skeleton className="h-4 w-full max-w-[220px] rounded-md" />
            </div>

            {/* Owner Badge */}
            <Skeleton className="h-6 w-14 rounded-full sm:h-7 sm:w-16 shrink-0" />
          </div>

          {/* Divider */}
          <div className="my-4 h-px bg-white/10 sm:my-5" />

          {/* Footer */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
              <Skeleton className="size-4 rounded-full" />
              <Skeleton className="h-4 w-20 rounded-md" />
            </div>

            <div className="flex items-center gap-2">
              <Skeleton className="size-4 rounded-full" />
              <Skeleton className="h-4 w-20 rounded-md" />
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}