"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { createReport } from "@/features/dashboard/reports/actions/create-report";

type Props = {
  workspaceId: string;
};

export function CreateReportButton({ workspaceId }: Props) {
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const form = e.currentTarget;
    const data = {
      title: (form.elements.namedItem("title") as HTMLInputElement).value,
      description: (form.elements.namedItem("description") as HTMLTextAreaElement).value,
    };

    startTransition(async () => {
      try {
        await createReport(workspaceId, data);
        setOpen(false);
        router.refresh();
      } catch {
        setError("Something went wrong. Try again.");
      }
    });
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="text-sm font-medium bg-primary text-primary-foreground hover:bg-primary-hover px-4 py-2 rounded-lg transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-base"
      >
        New Report
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />

          <div className="relative bg-surface border border-border rounded-xl shadow-2xl w-full max-w-md p-6">
            <h2
              id="modal-title"
              className="text-base font-semibold text-text mb-5"
            >
              New Report
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">

              <div>
                <label
                  htmlFor="title"
                  className="block text-xs font-medium text-neutral mb-1.5"
                >
                  Title
                </label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  required
                  autoFocus
                  placeholder="e.g. Sprint 3 Summary"
                  className="w-full text-sm bg-base border border-border rounded-lg px-3 py-2 text-text placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition"
                />
              </div>

              <div>
                <label
                  htmlFor="description"
                  className="block text-xs font-medium text-neutral mb-1.5"
                >
                  Description
                  <span className="text-muted font-normal ml-1">(optional)</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={3}
                  placeholder="What's this report about?"
                  className="w-full text-sm bg-base border border-border rounded-lg px-3 py-2 text-text placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition resize-none"
                />
              </div>

              {error && (
                <p role="alert" className="text-xs text-red-400">
                  {error}
                </p>
              )}

              <div className="flex gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="flex-1 text-sm font-medium text-muted bg-border hover:text-neutral hover:bg-border/60 px-4 py-2 rounded-lg transition-colors duration-150"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isPending}
                  className="flex-1 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary-hover disabled:opacity-40 px-4 py-2 rounded-lg transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
                >
                  {isPending ? "Creating..." : "Create"}
                </button>
              </div>

            </form>
          </div>
        </div>
      )}
    </>
  );
}
