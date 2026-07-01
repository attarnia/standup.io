interface BadgeProps {
    children: React.ReactNode;
    variant?: "default" | "success" | "warning" | "primary";
}

export default function Badge({
    children,
    variant = "default",
}: BadgeProps) {
    const variants = {
        default: "bg-neutral text-foreground",
        success: "bg-emerald-500/10 text-emerald-400",
        warning: "bg-amber-500/10 text-amber-400",
        primary: "bg-sky-500/10 text-sky-400",
    };

    return (
        <span
            className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${variants[variant]}`}
        >
            {children}
        </span>
    );
}