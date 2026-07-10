import ReportBoard from "@/features/dashboard/workspaceDetail/ReportBoard";

export default function ReportsPage() {
    return (
        <main className="min-h-screen bg-base p-6 sm:p-8">
            <section aria-labelledby="reports-heading">
                <header className="mb-8">
                    <h1
                        id="reports-heading"
                        className="text-2xl font-semibold text-text"
                    >
                        Reports
                    </h1>

                    <p className="mt-2 text-sm text-muted">
                        Track workspace progress, completed tasks and reported bugs.
                    </p>
                </header>

                <ReportBoard />
            </section>
        </main>
    );
}