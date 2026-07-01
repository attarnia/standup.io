import Image from "next/image";
import Badge from "@/components/ui/Badge";

interface ReportCardProps {
    name: string;
    avatar?: string | null;
    submittedAt: string;

    badge: {
        label: string;
        variant: "default" | "success" | "warning" | "primary";
    };

    content: string;
}

export default function ReportCard({
    name,
    avatar,
    submittedAt,
    badge,
    content,
}: ReportCardProps) {


    return (
        <article className="rounded-2xl bg-background-secondary p-5 border border-zinc-800">
            <header className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    {avatar ? (
                        <Image
                            src={avatar}
                            alt={`${name} avatar`}
                            width={44}
                            height={44}
                            className="rounded-full object-cover"
                        />
                    ) : (
                        <div className="flex h-11 w-11 items-center justify-center rounded-full font-semibold bg-(--muted)">
                            {name.charAt(0).toUpperCase()}
                        </div>
                    )}

                    <div>
                        <h3 className="font-semibold">
                            {name}
                        </h3>

                        <time className="text-sm text-muted">
                            {submittedAt}
                        </time>
                    </div>
                </div>

                <Badge variant={badge.variant}>
                    {badge.label}
                </Badge>
            </header>

            <p className="mt-4 line-clamp-2 text-sm leading-6 text-muted">
                {content}
            </p>
        </article>
    );
}