import { formatDistanceToNow } from "date-fns";

import { getCurrentUser } from "@/lib/auth";
import { CreateReportButton } from "@/features/dashboard/reports/components/create-report-button";
import { EditReportButton } from "@/features/dashboard/reports/components/edit-report-button";
import { DeleteReportButton } from "@/features/dashboard/reports/components/delete-report-button";
import { ReportStatusSelect } from "@/features/dashboard/reports/components/report-status-select";
import { getReports } from "@/features/dashboard/reports/queries/get-reports";


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
    <main className="mx-auto w-full">

      <header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <h1 className="text-2xl font-semibold text-text">
            Reports
          </h1>

          <p className="mt-1 text-sm text-muted">
            {reports.length} report{reports.length !== 1 ? "s" : ""}
          </p>
        </div>

        <div className="w-full sm:w-auto">
          <CreateReportButton workspaceId={workspaceId} />
        </div>
      </header>

      <section aria-label="Team reports">

        {reports.length === 0 ? (
          <div className="flex  flex-col items-center justify-center rounded-xl border border-dashed border-border px-6 text-center">

            <p className="text-lg font-medium text-muted">
              No reports yet
            </p>

            <p className="mt-2 text-sm text-muted/70">
              Create the first one to get started
            </p>

          </div>
        ) : (
          <ul
            role="list"
            className="
          grid
          grid-cols-1
          gap-4
          sm:grid-cols-2
          xl:grid-cols-3
        "
          >
            {reports.map((report) => {
              const isOwner = report.creatorId === user?.id;

              return (
                <li key={report.id} className="h-full">
                  <article
                    className="
      group
      flex
      h-full
      flex-col
      rounded-xl
      border
      border-border
      bg-surface
      p-3.5
      transition-all
      duration-200
      hover:border-neutral/30
      hover:shadow-sm
    "
                  >

                    <div className="mb-4">
                      <ReportStatusSelect
                        reportId={report.id}
                        status={report.status}
                        isOwner={isOwner}
                      />
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">

                      <div className="min-w-0 flex-1">

                        <div className="flex items-center justify-between mb-2">
                          <h2
                            className="
            wrap-break-word
            text-sm
            font-medium
            leading-6
            text-text
          "
                          >
                            {report.title}
                          </h2>
                          {isOwner && (
                            <div
                              className="
            flex
            shrink-0
            items-center
            gap-1
            self-start
          "
                            >
                              <EditReportButton
                                reportId={report.id}
                                title={report.title}
                                description={report.description}
                              />
                              <DeleteReportButton
                                reportId={report.id}
                              />
                            </div>
                          )}
                        </div>
                        {report.description && (
                          <p
                            className="
              my-2
              wrap-break-word
              text-sm
              leading-6
              font-medium
              text-muted
            "
                          >
                            {report.description}
                          </p>
                        )}
                      </div>

                    </div>

                    <footer
                      className="
        mt-auto
        flex
        flex-col
        gap-3
        border-t
        border-border
        pt-3
        sm:flex-row
        sm:items-center
        sm:justify-between
      "
                    >

                      <div
                        className="
          flex
          min-w-0
          flex-wrap
          items-center
          gap-1
          text-xs
          text-muted
        "
                      >

                        <span className="break-all font-medium">
                          {report.creator.name ?? report.creator.email}
                        </span>

                        <span
                          className="text-muted/40"
                          aria-hidden
                        >
                          •
                        </span>

                        <time
                          className="whitespace-nowrap text-muted/70"
                          dateTime={report.createdAt.toISOString()}
                          title={report.createdAt.toLocaleString()}
                        >
                          {formatDistanceToNow(report.createdAt, {
                            addSuffix: true,
                          })}
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
