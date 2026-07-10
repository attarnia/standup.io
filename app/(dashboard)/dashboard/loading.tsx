export default function Loading() {
  return (
    <div className="mx-auto w-full max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
      {/* Header skeleton */}
      <div className="flex items-center justify-between border-b border-border pb-6">
        <div className="space-y-3">
          <div className="h-7 w-40 animate-pulse rounded-lg bg-surface" />
          <div className="h-4 w-64 animate-pulse rounded-lg bg-surface" />
        </div>
        <div className="h-10 w-36 animate-pulse rounded-2xl bg-surface" />
      </div>

      {/* Card grid skeleton */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 2xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="flex h-40 flex-col justify-between rounded-3xl border border-border bg-surface p-6"
          >
            <div className="space-y-3">
              <div className="h-5 w-1/2 animate-pulse rounded-md bg-base" />
              <div className="h-4 w-full animate-pulse rounded-md bg-base" />
              <div className="h-4 w-2/3 animate-pulse rounded-md bg-base" />
            </div>
            <div className="flex justify-between border-t border-border pt-4">
              <div className="h-4 w-20 animate-pulse rounded-md bg-base" />
              <div className="h-4 w-16 animate-pulse rounded-md bg-base" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
