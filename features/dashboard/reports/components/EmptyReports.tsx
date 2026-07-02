import { ClipboardList } from "lucide-react";

export default function EmptyReports() {
    return (
        <section className="flex flex-col items-center justify-center rounded-2xl bg-background-secondary px-8 py-20 text-center">
            <ClipboardList
                aria-hidden
                size={48}
                className="text-muted"
            />

            <h2 className="mt-5 text-xl font-semibold text-foreground">
                No reports yet
            </h2>

            <p className="mt-2 max-w-md text-muted">
                Standup reports submitted by your team will appear here.
            </p>
        </section>
    );
}