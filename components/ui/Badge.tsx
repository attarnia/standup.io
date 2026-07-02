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
        success: "bg-emerald-700/10 text-emerald-500",
        warning: "bg-amber-700/10 text-amber-500",
        primary: "bg-sky-700/10 text-sky-500",
    };

    return (
        <span
            className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${variants[variant]}`}
        >
            {children}
        </span>
    );
}