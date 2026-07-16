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
      <article className="rounded-3xl bg-surface p-4 sm:p-5 lg:p-6 flex flex-col items-start gap-3">
        <div className="flex items-center gap-2 text-sm font-medium text-primary">
          <Sparkles size={16} aria-hidden />
          AI Summary
        </div>
        <p className="text-xs text-muted">
          {error ?? "Generate a quick summary of today's reports."}
        </p>
        <button
          type="button"
          onClick={handleGenerate}
          className="rounded-lg bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary hover:bg-primary/20 transition-colors duration-150"
        >
          Generate summary
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
