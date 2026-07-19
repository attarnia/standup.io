import Image from "next/image";
import Badge from "@/components/ui/Badge";

// ─── Types ────────────────────────────────────────────────────────────────────

interface ReportCardProps {
  title: string;
  name: string;
  avatar?: string | null;
  submittedAt: string;
  badge: {
    label: string;
    badgeClass: string;
  };
  content?: string | null;
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function ReportCard({
  title,
  name,
  avatar,
  submittedAt,
  badge,
  content,
}: ReportCardProps) {
  return (
    <article className="p-5 bg-surface border-b border-dashed border-muted/30 first:border-t first:border-dashed">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {avatar ? (
            <Image
              src={avatar}
              alt={`${name} avatar`}
              width={44}
              height={44}
              className="rounded-full object-cover"
            />
          ) : (
            <div className="flex h-11 w-11 items-center justify-center rounded-full font-semibold bg-muted/60 text-zinc-400">
              {name.charAt(0).toUpperCase()}
            </div>
          )}

          <div>
            <h3 className="font-semibold">{name}</h3>
            <time className="text-sm text-muted">{submittedAt}</time>
          </div>
        </div>

        <span
          className={`inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded-full border ${badge.badgeClass}`}
        >
          {badge.label}
        </span>
      </header>

      <div className="mt-4 space-y-1">
        <p className="text-sm font-medium text-text">{title}</p>
        {content && (
          <p className="line-clamp-2 text-sm leading-6 text-muted">{content}</p>
        )}
      </div>
    </article>
  );
}
