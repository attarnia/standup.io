interface BadgeProps {
    children: React.ReactNode;
    variant?: "default" | "success" | "warning" | "primary";
}

export default function Badge({
    children,
    variant = "default",
}: BadgeProps) {
    const variants = {
        default: "bg-neutral-800 text-muted",
        success: "bg-emerald-800/30 text-emerald-500",
        warning: "bg-amber-800/30 text-amber-500",
        primary: "bg-sky-800/30 text-sky-500",
    };

    return (
        <span
            className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${variants[variant]}`}
        >
            {children}
        </span>
    );
}