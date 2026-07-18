"use client";

import { useRef, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { ReportStatus } from "@prisma/client";

import { createReport } from "@/features/dashboard/reports/actions/create-report";
import {
  STATUS_META,
  STATUS_OPTIONS,
} from "@/features/dashboard/reports/config/status";
import Link from "next/link";

type Props = {
  workspaceId: string;
};

export function CreateReportButton({ workspaceId }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();

  const [status, setStatus] = useState<ReportStatus>("IN_PROGRESS");
  const [isPending, startTransition] = useTransition();

  function openDialog() {
    setStatus("IN_PROGRESS");
    dialogRef.current?.showModal();
  }

  function closeDialog() {
    dialogRef.current?.close();
    formRef.current?.reset();
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const data = {
      title: (
        form.elements.namedItem("title") as HTMLInputElement
      ).value.trim(),
      description: (
        form.elements.namedItem("description") as HTMLTextAreaElement
      ).value.trim(),
      status,
    };

    startTransition(async () => {
      try {
        await createReport(workspaceId, data);
        closeDialog();
        router.refresh();
      } catch (err) {
        console.error(err);
      }
    });
  }

  return (
    <>
      <div className="flex items-center gap-2">
        <Link
          href={`/dashboard/workspaces/${workspaceId}/member`}
          className="shrink-0 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary-hover px-4 py-2 rounded-lg transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-base"
        >
          Members
        </Link>
        <button
          type="button"
          onClick={openDialog}
          className="shrink-0 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary-hover px-4 py-2 rounded-lg transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-base"
        >
          New Report
        </button>
      </div>

      <dialog
        ref={dialogRef}
        aria-labelledby="create-dialog-title"
        onClick={(e) => e.target === e.currentTarget && closeDialog()}
        className="
    fixed
    left-1/2
    top-1/2
    -translate-x-1/2
    -translate-y-1/2
    w-[calc(100%-2rem)]
    max-w-md
    rounded-xl
    border
    border-border
    bg-surface
    p-6
    shadow-2xl
    backdrop:bg-black/50
  "
      >
        <div className="flex flex-col gap-5">
          <h2 id="create-dialog-title" className="font-semibold text-text">
            New Report
          </h2>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="report-title"
                className="text-xs font-medium text-neutral"
              >
                Title
              </label>
              <input
                id="report-title"
                name="title"
                type="text"
                required
                autoFocus
                placeholder="e.g. Sprint 3 Summary"
                className="text-sm bg-base border border-border rounded-lg px-3 py-2 text-text placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="report-description"
                className="text-xs font-medium text-neutral"
              >
                Description
                <span className="text-muted font-normal ml-1">(optional)</span>
              </label>
              <textarea
                id="report-description"
                name="description"
                rows={3}
                placeholder="What's this report about?"
                className="text-sm bg-base border border-border rounded-lg px-3 py-2 text-text placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition resize-none"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-medium text-neutral">Status</span>
              <div className="flex gap-1 p-1 bg-base border border-border rounded-lg">
                {STATUS_OPTIONS.map((option) => {
                  const { label, activeClass } = STATUS_META[option];
                  const isSelected = status === option;

                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setStatus(option)}
                      aria-pressed={isSelected}
                      className={`flex-1 px-2 py-1.5 text-xs font-medium rounded-md border transition-all duration-150
                        ${
                          isSelected
                            ? activeClass
                            : "text-muted border-transparent hover:text-neutral"
                        }`}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex gap-2 pt-1">
              <button
                type="button"
                onClick={closeDialog}
                className="flex-1 text-sm font-medium text-muted bg-border hover:text-neutral px-4 py-2 rounded-lg transition-colors duration-150"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isPending}
                className="flex-1 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary-hover disabled:opacity-40 px-4 py-2 rounded-lg transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
              >
                {isPending ? "Creating…" : "Create"}
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
}
