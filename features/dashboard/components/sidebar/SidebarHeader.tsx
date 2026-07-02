import { LucidePanelLeftClose } from "lucide-react";

export default function SidebarHeader() {
    return (
        <header className="flex items-center justify-between border-neutral p-6">
            <p className="text-2xl font-bold text-muted">
                StandUp
            </p>
            <LucidePanelLeftClose className="text-muted" />
        </header>
    );
}