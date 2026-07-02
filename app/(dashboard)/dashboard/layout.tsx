import Sidebar from "@/features/dashboard/components/sidebar/Sidebar";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen bg-base">
            <Sidebar />

            <main className="flex-1 overflow-y-auto p-8">
                {children}
            </main>
        </div>
    );
}