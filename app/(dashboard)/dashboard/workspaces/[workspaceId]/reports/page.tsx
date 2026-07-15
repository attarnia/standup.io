import { formatDistanceToNow } from "date-fns";

import { getCurrentUser } from "@/lib/auth";
import { getReports } from "@/features/dashboard/reports/queries/get-reports";
import { CreateReportButton } from "@/features/dashboard/reports/components/create-report-button";
import { EditReportButton } from "@/features/dashboard/reports/components/edit-report-button";
import { DeleteReportButton } from "@/features/dashboard/reports/components/delete-report-button";



type Props = {
    params: Promise<{ workspaceId: string }>;
};


export default async function ReportsPage({ params }: Props) {
    const { workspaceId } = await params;

    const [reports, user] = await Promise.all([
        getReports(workspaceId),
        getCurrentUser(),
    ]);

    return (
        <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">

            <header className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-8">
                <div>
                    <h1 className="text-xl font-semibold text-text">Reports</h1>
                    <p className="mt-0.5 text-sm text-muted">
                        {reports.length} report{reports.length !== 1 ? "s" : ""}
                    </p>
                </div>
                <CreateReportButton workspaceId={workspaceId} />
            </header>

            <section aria-label="Team reports">
                {reports.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-24 text-center border border-dashed border-border rounded-xl">
                        <p className="text-sm font-medium text-muted">No reports yet</p>
                        <p className="mt-1 text-xs text-muted/60">Create the first one to get started</p>
                    </div>
                ) : (
                    <ul role="list" className="grid gap-3 sm:grid-cols-2">
                        {reports.map((report) => {
                            const isOwner = report.creatorId === user?.id;

                            return (
                                <li key={report.id}>
                                    <article className="group flex flex-col h-full gap-3 bg-surface border border-border rounded-xl p-5 hover:border-neutral/20 transition-colors duration-150">

                                        <div className="flex items-start justify-between gap-2">
                                            <div className="flex-1 min-w-0">
                                                <h2 className="text-sm font-medium text-text leading-snug">
                                                    {report.title}
                                                </h2>
                                                {report.description && (
                                                    <p className="mt-1.5 text-sm text-muted line-clamp-2 leading-relaxed">
                                                        {report.description}
                                                    </p>
                                                )}
                                            </div>

                                            {isOwner && (
                                                <div className="flex items-center gap-0.5 duration-150 shrink-0">
                                                    <EditReportButton
                                                        reportId={report.id}
                                                        title={report.title}
                                                        description={report.description}
                                                    />
                                                    <DeleteReportButton reportId={report.id} />
                                                </div>
                                            )}
                                        </div>

                                        <footer className="flex items-center justify-between mt-auto pt-3 border-t border-border gap-2">
                                            <div className="flex items-center gap-1.5 min-w-0">
                                                <span className="text-xs text-muted truncate">
                                                    {report.creator.name ?? report.creator.email}
                                                </span>
                                                <span className="text-muted/30 shrink-0" aria-hidden>·</span>
                                                <time
                                                    dateTime={report.createdAt.toISOString()}
                                                    title={report.createdAt.toLocaleString()}
                                                    className="text-xs text-muted/60 shrink-0"
                                                >
                                                    {formatDistanceToNow(report.createdAt, { addSuffix: true })}
                                                </time>
                                            </div>
                                        </footer>

                                    </article>
                                </li>
                            );
                        })}
                    </ul>
                )}
            </section>

        </main>
    );
}