import Sidebar from "@/features/dashboard/components/sidebar/Sidebar";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-base">
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-8 pt-22 md:pt-8 md:pl-28">
        {children}
      </main>
    </div>
  );
}
