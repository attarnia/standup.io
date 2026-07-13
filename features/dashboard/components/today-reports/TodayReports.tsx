import Link from "next/link";
import ReportCard from "./ReportCard";

type Report = {
  id: string;
  title: string;
  description: string | null;
  createdAt: Date;
  creator: {
    name: string | null;
    email: string;
  };
};

export default function TodayReports({ reports }: { reports: Report[] }) {
  return (
    <section
      aria-labelledby="today-reports-heading"
      className="bg-surface rounded-3xl p-6"
    >
      <header className="mb-6 flex items-center justify-between">
        <div>
          <h2
            id="today-reports-heading"
            className="text-xl font-semibold text-text"
          >
            {"Today's"} Standup Reports
          </h2>

          <p className="mt-1 text-sm text-muted">
            Latest reports submitted today.
          </p>
        </div>

        <Link
          href="/dashboard/reports"
          className="text-sm font-medium text-text hover:underline"
        >
          View all
        </Link>
      </header>

      <div className="space-y-4">
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
              badge={{
                label: "DONE",
                variant: "success",
              }}
              content={report.description ?? report.title}
            />
          ))
        )}
      </div>
    </section>
  );
}
