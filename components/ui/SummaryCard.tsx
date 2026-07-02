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
      <article className="rounded-3xl border border-zinc-800 p-6 transition-all duration-200">
        <div className="flex items-start gap-6">
          <div
            className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${iconBgClass}`}
          >
            <Icon aria-hidden="true" className={`h-7 w-7 ${iconClass}`} />
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-300">{title}</p>

            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {value}
            </h2>

            {description && (
              <p className="text-sm text-gray-400">{description}</p>
            )}
          </div>
        </div>
      </article>
    );
}