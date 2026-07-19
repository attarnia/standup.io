import Link from "next/link";
import { formatDistanceToNow } from "date-fns";
import { ReportStatus } from "@prisma/client";

import { STATUS_META } from "@/features/dashboard/reports/config/status";
import ReportCard from "./ReportCard";


type Report = {
  id: string;
  title: string;
  description: string | null;
  createdAt: Date;
  status: ReportStatus;
  creator: {
    name: string | null;
    email: string;
  };
};


export default function TodayReports({ reports }: { reports: Report[] }) {
  return (
    <section
      aria-labelledby="today-reports-heading"
      className="rounded-2xl lg:rounded-3xl border pb-5 border-border bg-surface"
    >
      <header className="flex items-center justify-between gap-4 px-4 py-4 sm:px-5 sm:py-5 border-b border-border">
        <div className="min-w-0">
          <h2
            id="today-reports-heading"
            className="font-semibold text-text sm:text-lg truncate"
          >
            {"Today's"} Standup Reports
          </h2>
          <p className="mt-0.5 text-xs sm:text-sm text-muted">
            {reports.length === 0
              ? "No reports submitted today"
              : `${reports.length} report${reports.length !== 1 ? "s" : ""} submitted today`}
          </p>
        </div>

        <Link
          href="/dashboard/reports"
          className="shrink-0 text-xs sm:text-sm font-medium text-muted hover:text-text transition-colors duration-150"
        >
          View all
        </Link>
      </header>

      {reports.length === 0 ? (
        <div className="flex items-center justify-center py-12 px-4">
          <p className="text-sm text-muted text-center">
            No reports have been submitted today.
          </p>
        </div>
      ) : (
        <ul role="list">
          {reports.map((report) => {
            const { label, badgeClass } = STATUS_META[report.status];

            return (
              <li key={report.id}>
                <ReportCard
                  title={report.title}
                  content={report.description}
                  name={report.creator.name ?? report.creator.email}
                  submittedAt={formatDistanceToNow(new Date(report.createdAt), {
                    addSuffix: true,
                  })}
                  badge={{ label, badgeClass }}
                />
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
