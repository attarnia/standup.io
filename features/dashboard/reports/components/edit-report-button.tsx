"use client";

import { useRef, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Pencil } from "lucide-react";

import { editReport } from "@/features/dashboard/reports/actions/edit-report";


type Props = {
    reportId: string;
    title: string;
    description: string | null;
};


export function EditReportButton({ reportId, title, description }: Props) {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const formRef = useRef<HTMLFormElement>(null);
    const [isPending, startTransition] = useTransition();
    const router = useRouter();

    const openDialog = () => dialogRef.current?.showModal();
    const closeDialog = () => {
        dialogRef.current?.close();
        formRef.current?.reset();
    };

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const form = e.currentTarget;
        const data = {
            title: (form.elements.namedItem("title") as HTMLInputElement).value.trim(),
            description: (form.elements.namedItem("description") as HTMLTextAreaElement).value.trim(),
        };

        startTransition(async () => {
            try {
                await editReport(reportId, data);
                closeDialog();
                router.refresh();
            } catch (err) {
                console.error(err);
            }
        });
    }

    return (
        <>
            <button
                type="button"
                onClick={openDialog}
                aria-label="Edit report"
                className="rounded-lg p-1.5 text-muted hover:text-neutral hover:bg-neutral/10 transition-colors duration-150"
            >
                <Pencil size={14} aria-hidden />
            </button>

            <dialog
                ref={dialogRef}
                aria-labelledby="edit-dialog-title"
                onClick={(e) => e.target === e.currentTarget && closeDialog()}
                className="  fixed
    top-1/2
    left-1/2
    -translate-x-1/2
    -translate-y-1/2
    w-[calc(100%-2rem)]
    max-w-md
    bg-surface
    border
    border-border
    rounded-xl
    p-6
    shadow-2xl
    backdrop:bg-black/50"
            >
                <div className="flex flex-col gap-5">

                    <h2 id="edit-dialog-title" className="text-base font-semibold text-text">
                        Edit Report
                    </h2>

                    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">

                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="edit-title" className="text-xs font-medium text-neutral">
                                Title
                            </label>
                            <input
                                id="edit-title"
                                name="title"
                                type="text"
                                required
                                autoFocus
                                defaultValue={title}
                                className="text-sm bg-base border border-border rounded-lg px-3 py-2 text-text placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition"
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="edit-description" className="text-xs font-medium text-neutral">
                                Description
                                <span className="text-muted font-normal ml-1">(optional)</span>
                            </label>
                            <textarea
                                id="edit-description"
                                name="description"
                                rows={3}
                                defaultValue={description ?? ""}
                                className="text-sm bg-base border border-border rounded-lg px-3 py-2 text-text placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition resize-none"
                            />
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
                                {isPending ? "Saving…" : "Save"}
                            </button>
                        </div>

                    </form>
                </div>
            </dialog>
        </>
    );
}