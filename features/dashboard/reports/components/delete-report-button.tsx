"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Trash2 } from "lucide-react";

import { deleteReport } from "@/features/dashboard/reports/actions/delete-report";


type Props = {
    reportId: string;
};


export function DeleteReportButton({ reportId }: Props) {
    const [confirming, setConfirming] = useState(false);
    const [isPending, startTransition] = useTransition();
    const router = useRouter();

    function handleDelete() {
        startTransition(async () => {
            try {
                await deleteReport(reportId);
                router.refresh();
            } catch {
                setConfirming(false);
            }
        });
    }

    if (confirming) {
        return (
            <div className="flex items-center gap-2">
                <button
                    type="button"
                    onClick={() => setConfirming(false)}
                    disabled={isPending}
                    className="text-xs text-muted hover:text-neutral transition-colors duration-150 disabled:opacity-50"
                >
                    Cancel
                </button>
                <button
                    type="button"
                    onClick={handleDelete}
                    disabled={isPending}
                    className="text-xs text-red-400 hover:text-red-300 transition-colors duration-150 disabled:opacity-50"
                >
                    {isPending ? "Deleting…" : "Delete"}
                </button>
            </div>
        );
    }

    return (
        <button
            type="button"
            onClick={() => setConfirming(true)}
            aria-label="Delete report"
            className="rounded-lg p-1.5 text-muted hover:text-red-400 hover:bg-red-400/10 transition-colors duration-150"
        >
            <Trash2 size={14} aria-hidden />
        </button>
    );
}