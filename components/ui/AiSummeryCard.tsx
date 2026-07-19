// features/dashboard/components/AiSummaryCard.tsx
"use client";

import { useState, useTransition } from "react";
import { ClipboardList, Sparkles } from "lucide-react";
import SummaryCard from "@/components/ui/SummaryCard";
import { generateTodaySummary } from "@/features/dashboard/reports/actions/generateReports";

export default function AiSummaryCard({
  workspaceIds,
}: {
  workspaceIds: string[];
}) {
  const [summary, setSummary] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleGenerate = () => {
    setError(null);
    startTransition(async () => {
      const result = await generateTodaySummary(workspaceIds);
      setSummary(result.summary);
      setError(result.error);
    });
  };

  if (!summary && !isPending) {
    return (
      <article className="rounded-3xl bg-surface border border-border p-4 sm:p-5 lg:p-6 flex flex-col items-start gap-3">
        <div className="flex items-center gap-2 text-sm font-medium text-primary">
          AI Summary
        </div>
        <p className="text-xs text-muted">
          {error ?? "Generate a quick summary of today's reports."}
        </p>
        <button
          type="button"
          onClick={handleGenerate}
          className="
    group relative cursor-pointer inline-flex items-center justify-center
    overflow-hidden rounded-lg
    bg-[radial-gradient(65.28%_65.28%_at_50%_100%,rgba(223,113,255,.8)_0%,rgba(223,113,255,0)_80%),linear-gradient(0deg,#7a5af8,#7a5af8)]
    px-3 py-1.5
    text-xs font-medium text-white
    transition-all duration-150
    active:scale-95
  "
        >
          <span
            className="
      absolute inset-0.5
      rounded-[7px]
      bg-linear-to-b
      from-white/20
      to-transparent
    "
          />

          <span className="absolute inset-0 overflow-hidden pointer-events-none">
            {Array.from({ length: 10 }).map((_, i) => (
              <i
                key={i}
                className="
          absolute -bottom-2.5
          h-0.5 w-0.5
          rounded-full
          bg-white
          animate-floating
        "
                style={{
                  left: `${10 + i * 9}%`,
                  animationDelay: `${i * 0.15}s`,
                  animationDuration: `${2 + i * 0.05}s`,
                }}
              />
            ))}
          </span>

          <span className="relative z-10 flex items-center gap-1.5">
            <Sparkles size={16} aria-hidden />
            Generate summary
          </span>
        </button>
      </article>
    );
  }

  return (
    <SummaryCard
      title="AI Summary"
      description={summary ?? undefined}
      icon={ClipboardList}
      loading={isPending}
    />
  );
}
