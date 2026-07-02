import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface SidebarItemProps {
    href: string;
    icon: LucideIcon;
    children: React.ReactNode;
}

export default function SidebarItem({
    href,
    icon: Icon,
    children,
}: SidebarItemProps) {
    return (
        <Link
            href={href}
            className="flex items-center gap-3 rounded-xl transition-colors p-2 hover:bg-muted/20"
        >
            <Icon
                aria-hidden
                size={17}
            />

            <span className="text-text font-medium">{children}</span>
        </Link>
    );
}