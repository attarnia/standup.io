import SidebarHeader from "./SidebarHeader";
import SidebarNav from "./SidebarNav";

export default function Sidebar() {
  return (
    <aside className="side-bar bg-card">
      <SidebarHeader />
      <SidebarNav />
    </aside>
  );
}
