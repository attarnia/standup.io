import { LucideIcon } from "lucide-react";


interface SummaryCardProps {
  title: string;
  value?: string | number;
  description?: string;
  icon: LucideIcon;
  iconBgClass?: string;
  iconClass?: string;
  loading?: boolean;
}


export default function SummaryCard({
  title,
  value,
  description,
  icon: Icon,
  iconBgClass = "bg-violet-500/10 ring-violet-500/20",
  iconClass = "text-violet-400",
  loading = false,
}: SummaryCardProps) {
  return (
    <article className="h-full rounded-2xl sm:rounded-3xl bg-surface border border-border p-4 sm:p-5 lg:p-6 transition-all duration-200">
      <div className="flex items-start gap-3 sm:gap-4 lg:gap-6">
        <div
          className={`
            flex h-10 w-10 sm:h-11 sm:w-11 lg:h-12 lg:w-12
            shrink-0 items-center justify-center
            rounded-xl ring-1
            ${iconBgClass}
          `}
        >
          <Icon
            aria-hidden="true"
            strokeWidth={1.75}
            className={`h-4 w-4 sm:h-5 sm:w-5 drop-shadow-sm ${iconClass}`}
          />
        </div>

        <div className="min-w-0 flex-1 space-y-1 sm:space-y-2">
          <p className="truncate text-xs sm:text-sm font-medium text-muted">
            {title}
          </p>

          {loading ? (
            <div className="space-y-2 pt-1">
              <div className="h-3 w-full animate-pulse rounded bg-muted/20" />
              <div className="h-3 w-4/5 animate-pulse rounded bg-muted/20" />
            </div>
          ) : (
            <>
              {value !== undefined && (
                <h2 className="wrap-break-word text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-text">
                  {value}
                </h2>
              )}

              {description && (
                <p
                  className={`wrap-break-word text-xs sm:text-sm font-medium ${value !== undefined
                      ? "text-muted"
                      : "text-text leading-relaxed"
                    }`}
                >
                  {description}
                </p>
              )}
            </>
          )}
        </div>
      </div>
    </article>
  );
}
