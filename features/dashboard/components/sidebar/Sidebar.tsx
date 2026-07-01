import SidebarHeader from "./SidebarHeader";
import SidebarNav from "./SidebarNav";

export default function Sidebar() {
    return (
        <aside className="sticky top-0 flex h-screen w-72 flex-col border-r border-(--muted) px-3">
            <SidebarHeader />
            <SidebarNav />
        </aside>
    );
}