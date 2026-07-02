import { reports } from "../data/reports";
import ReportCard from "@/features/dashboard/components/today-reports/ReportCard";
import EmptyReports from "./EmptyReports";

export default function ReportsList() {
    if (reports.length === 0) {
        return <EmptyReports />;
    }

    return (
        <section
            aria-label="Reports list"
            className="space-y-4"
        >
            {reports.map((report) => (
                <ReportCard
                    key={report.id}
                    name={report.author.name}
                    avatar={report.author.avatar}
                    submittedAt={report.submittedAt}
                    badge={report.badge}
                    content={report.content}
                />
            ))}
        </section>
    );
}