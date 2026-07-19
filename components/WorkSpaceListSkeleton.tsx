import Skeleton from "./ui/Skeleton";

export default function WorkspaceListSkeleton() {
  return (
    <section
      aria-label="Loading workspaces"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
    >
      {Array.from({ length: 6 }).map((_, index) => (
        <article
          key={index}
          className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
        >
          {/* Header */}
          <div className="flex items-start justify-between">
            <div className="space-y-3">
              <Skeleton className="h-6 w-44 rounded-md" />
              <Skeleton className="h-4 w-52 rounded-md" />
            </div>

            {/* Owner Badge */}
            <Skeleton className="h-7 w-16 rounded-full" />
          </div>

          {/* Divider */}
          <div className="my-5 h-px bg-white/10" />

          {/* Footer */}
          <div className="flex items-center justify-between">
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
