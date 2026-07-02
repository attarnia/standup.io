import { LucideIcon } from "lucide-react";

interface SummaryCardProps {
    title: string;
    value: string | number;
    description?: string;
    icon: LucideIcon;
    iconBgClass?: string;
    iconClass?: string;
}

export default function SummaryCard({
    title,
    value,
    description,
    icon: Icon,
    iconBgClass = "bg-violet-700/40",
    iconClass = "text-violet-600",
}: SummaryCardProps) {
    return (
      <article className="rounded-3xl bg-surface p-6 transition-all duration-200">
        <div className="flex items-start gap-6">
          <div
            className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${iconBgClass}`}
          >
            <Icon aria-hidden="true" className={`h-6.5 w-6.5 ${iconClass}`} />
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium text-muted">{title}</p>

            <h2 className="text-3xl font-bold tracking-tight text-text md:text-4xl">
              {value}
            </h2>

            {description && (
              <p className="font-medium text-sm text-muted">{description}</p>
            )}
          </div>
        </div>
      </article>
    );
}