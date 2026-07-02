import ReportFilters from "@/features/dashboard/reports/components/ReportFilters";
import ReportsHeader from "@/features/dashboard/reports/components/ReportsHeader";
import ReportsList from "@/features/dashboard/reports/components/ReportsList";

export default function ReportsPage() {
    return (
        <>
            <ReportsHeader />

            <ReportFilters />

            <ReportsList />
        </>
    );
}