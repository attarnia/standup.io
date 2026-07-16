"use client";

import {
  useEffect,
  useOptimistic,
  useRef,
  useState,
  useTransition,
} from "react";
import { useRouter } from "next/navigation";
import { ReportStatus } from "@prisma/client";

import { updateReportStatus } from "@/features/dashboard/reports/actions/update-report-status";
import { STATUS_META, STATUS_OPTIONS } from "../config/status";

// ─── Types ────────────────────────────────────────────────────────────────────

type Props = {
  reportId: string;
  status: ReportStatus;
  isOwner: boolean;
};


export function ReportStatusSelect({ reportId, status, isOwner }: Props) {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const [optimisticStatus, setOptimistic] = useOptimistic(
    status,
    (_current: ReportStatus, next: ReportStatus) => next,
  );

  useEffect(() => {
    if (!open) return;

    const onMouseDown = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", onMouseDown);
    return () => document.removeEventListener("mousedown", onMouseDown);
  }, [open]);

  function handleSelect(next: ReportStatus) {
    if (next === optimisticStatus) {
      setOpen(false);
      return;
    }

    setOpen(false);

    startTransition(async () => {
      setOptimistic(next);
      try {
        await updateReportStatus(reportId, next);
        router.refresh();
      } catch (err) {
        console.error(err);
      }
    });
  }

  const { label, badgeClass } = STATUS_META[optimisticStatus];


  const badge = (
    <span
      className={`
        inline-flex items-center px-2 py-0.5 text-xs font-medium rounded-full border
        ${badgeClass}
        ${isPending ? "opacity-50" : "opacity-100"}
        transition-opacity duration-150
      `}
    >
      {label}
    </span>
  );

  if (!isOwner) return badge;


  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
      >
        {badge}
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label="Change status"
          className="
            absolute bottom-full left-0 mb-2 z-50
            min-w-[148px] bg-surface border border-border rounded-xl py-1.5
            shadow-[0_8px_32px_rgba(0,0,0,0.5)]
          "
        >
          {STATUS_OPTIONS.map((option) => {
            const { label: optLabel, badgeClass: optClass } = STATUS_META[option];
            const isSelected = option === optimisticStatus;

            return (
              <li
                key={option}
                role="option"
                aria-selected={isSelected}
                onClick={() => handleSelect(option)}
                className={`
                  flex items-center justify-between gap-3 px-3 py-2 cursor-pointer
                  transition-colors duration-100
                  ${isSelected ? "bg-border/50" : "hover:bg-border/30"}
                `}
              >
                <span
                  className={`
                    inline-flex items-center px-2 py-0.5
                    text-xs font-medium rounded-full border
                    ${optClass}
                  `}
                >
                  {optLabel}
                </span>

                {isSelected && (
                  <svg
                    aria-hidden="true"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    className="text-neutral shrink-0"
                  >
                    <path
                      d="M2 6l3 3 5-5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
