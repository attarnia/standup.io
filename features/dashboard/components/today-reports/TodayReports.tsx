import Link from "next/link";
import ReportCard from "./ReportCard";

export default function TodayReports() {
    return (
        <section
            aria-labelledby="today-reports-heading"
            className="mt-10 border p-6 rounded-3xl border-zinc-800"
        >
            <header className="mb-6 flex items-center justify-between">
                <div>
                    <h2
                        id="today-reports-heading"
                        className="text-xl font-semibold text-foreground"
                    >
                        Today's Standup Reports
                    </h2>

                    <p className="mt-1 text-sm text-muted">
                        Latest reports submitted today.
                    </p>
                </div>

                <Link
                    href="/reports"
                    className="text-sm font-medium text-foreground hover:underline"
                >
                    View all
                </Link>
            </header>

            <div className="space-y-4">
                <ReportCard
                    name="Ali"
                    submittedAt="09:15 AM"
                    badge={{
                        label: "DONE",
                        variant: "success",
                    }}
                    content="Implemented authentication with Supabase and started working on the invite flow."
                />

                <ReportCard
                    name="Sara"
                    submittedAt="10:02 AM"
                    badge={{
                        label: "PROGRESS",
                        variant: "warning",
                    }}
                    content="Finished dashboard UI and fixed responsive issues."
                />

                <ReportCard
                    name="John"
                    submittedAt="11:18 AM"
                    badge={{
                        label: "DONE",
                        variant: "success",
                    }}
                    content="Created Prisma models and connected project members."
                />
            </div>
        </section>
    );
}