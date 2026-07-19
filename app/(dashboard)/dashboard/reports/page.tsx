import { formatDistanceToNow } from "date-fns";
import { ReportStatus } from "@prisma/client";

import { getAllReports, ReportWithWorkspace } from "@/action/get-all-reports";
import { STATUS_META } from "@/features/dashboard/reports/config/status";

const STATUS_ORDER: ReportStatus[] = ["IN_PROGRESS", "BUG", "DONE"];

export default async function ReportsPage() {
  const reports = await getAllReports();

  const grouped = STATUS_ORDER.reduce(
    (acc, status) => {
      acc[status] = reports.filter((r) => r.status === status);
      return acc;
    },
    {} as Record<ReportStatus, ReportWithWorkspace[]>,
  );

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">

      <header className="mb-8">
        <h1 className="text-xl font-semibold text-text">Reports</h1>
        <p className="mt-0.5 text-sm text-muted">
          {reports.length} report{reports.length !== 1 ? "s" : ""} across all workspaces
        </p>
      </header>

      {reports.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 border border-dashed border-border rounded-xl text-center">
          <p className="text-sm font-medium text-muted">No reports yet</p>
          <p className="mt-1 text-sm text-muted/60">
            Reports from your workspaces will appear here
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {STATUS_ORDER.map((status) => {
            const { label, icon: Icon, badgeClass } = STATUS_META[status];
            const items = grouped[status];

            return (
              <section key={status} aria-label={label}>

                <div className="flex items-center gap-2 mb-3 px-0.5">
                  <span
                    className={`inline-flex items-center gap-1.5 px-2 py-1 text-sm font-medium rounded-full border ${badgeClass}`}
                  >
                    <Icon size={16} aria-hidden />
                    {label}
                  </span>
                  <span className="text-sm text-muted">{items.length}</span>
                </div>

                <ul role="list" className="space-y-3">
                  {items.length === 0 ? (
                    <li className="flex items-center justify-center py-10 border border-dashed border-border rounded-xl">
                      <p className="text-sm text-muted">No reports</p>
                    </li>
                  ) : (
                    items.map((report) => (
                      <li key={report.id}>
                        <article className="flex flex-col gap-2.5 bg-surface border border-border rounded-xl p-4 hover:border-neutral/20 transition-colors duration-150">

                          <span className="self-start text-[11px] font-medium text-muted bg-border/50 border border-border/80 rounded-md px-1.5 py-0.5">
                            {report.workspace.name}
                          </span>

                          <h2 className="text-sm font-medium text-text leading-snug">
                            {report.title}
                          </h2>

                          {report.description && (
                            <p className="text-sm text-muted line-clamp-2 leading-relaxed">
                              {report.description}
                            </p>
                          )}

                          <footer className="flex items-center justify-between pt-2.5 border-t border-border mt-auto">
                            <span className="text-sm text-muted truncate">
                              {report.creator.name ?? report.creator.email}
                            </span>
                            <time
                              dateTime={report.createdAt.toISOString()}
                              title={report.createdAt.toLocaleString()}
                              className="text-sm text-muted/60 shrink-0 ml-2"
                            >
                              {formatDistanceToNow(report.createdAt, {
                                addSuffix: true,
                              })}
                            </time>
                          </footer>

                        </article>
                      </li>
                    ))
                  )}
                </ul>
              </section>
            );
          })}
        </div>
      )}

    </main>
  );
}
