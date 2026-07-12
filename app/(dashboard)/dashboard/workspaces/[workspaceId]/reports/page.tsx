import { getReports } from "@/features/dashboard/reports/actions/get-reports";
import { CreateReportButton } from "@/features/dashboard/reports/components/create-report-button";

type Props = {
    params: Promise<{ workspaceId: string }>;
};

export default async function ReportsPage({ params }: Props) {
    const { workspaceId } = await params;
    const reports = await getReports(workspaceId);

    return (
        <main className="max-w-4xl mx-auto px-4 py-8 sm:px-6">

            <header className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-xl font-semibold text-text">Reports</h1>
                    <p className="text-sm text-muted mt-0.5">
                        {reports.length} report{reports.length !== 1 ? "s" : ""}
                    </p>
                </div>
                <CreateReportButton workspaceId={workspaceId} />
            </header>

            {reports.length === 0 && (
                <div className="text-center py-20 border border-dashed border-border rounded-xl">
                    <p className="text-muted text-sm">No reports yet</p>
                    <p className="text-muted/50 text-xs mt-1">Create the first one</p>
                </div>
            )}

            {reports.length > 0 && (
                <ul className="space-y-3" role="list">
                    {reports.map((report) => (
                        <li key={report.id}>
                            <article className="bg-surface border border-border rounded-xl p-5 hover:border-neutral/20 transition-colors duration-150">

                                <div className="min-w-0">
                                    <h2 className="font-medium text-text text-sm truncate">
                                        {report.title}
                                    </h2>

                                    {report.description && (
                                        <p className="text-sm text-muted mt-1 line-clamp-2">
                                            {report.description}
                                        </p>
                                    )}
                                </div>

                                <footer className="flex items-center mt-4 pt-4 border-t border-border">
                                    <span className="text-xs text-muted">
                                        Created by {report.creator.name ?? report.creator.email}
                                    </span>
                                </footer>

                            </article>
                        </li>
                    ))}
                </ul>
            )}

        </main>
    );
}
