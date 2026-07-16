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
  iconBgClass = "bg-violet-700/40",
  iconClass = "text-violet-600",
  loading = false,
}: SummaryCardProps) {
  return (
    <article className="rounded-3xl bg-surface p-4 sm:p-5 lg:p-6 transition-all duration-200">
      <div className="flex items-start gap-4 sm:gap-5 lg:gap-6">
        <div
          className={`flex h-11 w-11 sm:h-12 sm:w-12 lg:h-14 lg:w-14 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl ${iconBgClass}`}
        >
          <Icon
            aria-hidden="true"
            className={`h-5 w-5 sm:h-6 sm:w-6 ${iconClass}`}
          />
        </div>

        <div className="min-w-0 flex-1 space-y-1.5 sm:space-y-2">
          <p className="truncate text-xs sm:text-sm font-medium text-primary">
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
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-text wrap-break-words">
                  {value}
                </h2>
              )}

              {description && (
                <p
                  className={
                    value !== undefined
                      ? "text-xs sm:text-sm font-medium text-white"
                      : "text-sm sm:text-base leading-relaxed text-text"
                  }
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
