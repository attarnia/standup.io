import Link from "next/link";
import ReportCard from "./ReportCard";

type Report = {
  id: string;
  title: string;
  description: string | null;
  createdAt: Date;
  status: "BUG" | "DONE" | "IN_PROGRESS";
  creator: {
    name: string | null;
    email: string;
  };
};
const statusMap: Record<
  Report["status"],
  {
    label: string;
    variant: "default" | "success" | "warning" | "primary" | "failed";
  }
> = {
  BUG: {
    label: "Bug",
    variant: "failed",
  },
  DONE: {
    label: "Done",
    variant: "success",
  },
  IN_PROGRESS: {
    label: "In Progress",
    variant: "warning",
  },
};
export default function TodayReports({ reports }: { reports: Report[] }) {
  return (
    <section
      aria-labelledby="today-reports-heading"
      className="rounded-2xl lg:rounded-3xl border border-border bg-surface p-4 sm:p-5 lg:p-6"
    >
      <header className="mb-5">
        <div className="flex items-center justify-between gap-4">
          <h2
            id="today-reports-heading"
            className="text-lg font-semibold text-text sm:text-xl"
          >
            {"Today's"} Standup Reports
          </h2>

          <Link
            href="/dashboard/reports"
            className="shrink-0 text-sm font-medium text-text transition-opacity hover:opacity-70"
          >
            View all
          </Link>
        </div>

        <p className="mt-2 text-sm text-muted">
          Latest reports submitted today.
        </p>
      </header>

      <div className="space-y-3 sm:space-y-4">
        {reports.length === 0 ? (
          <p className="text-sm text-muted">
            No reports have been submitted today.
          </p>
        ) : (
          reports.map((report) => (
            <ReportCard
              key={report.id}
              name={report.creator.name ?? report.creator.email}
              submittedAt={new Intl.DateTimeFormat("en-US", {
                hour: "numeric",
                minute: "2-digit",
                hour12: true,
              }).format(new Date(report.createdAt))}
              badge={statusMap[report.status]}
              content={report.description ?? report.title}
            />
          ))
        )}
      </div>
    </section>
  );
}
