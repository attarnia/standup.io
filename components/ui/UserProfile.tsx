import Image from "next/image";

interface UserProfileProps {
    name: string;
    avatar?: string | null;
}

export default function UserProfile({
    name,
    avatar,
}: UserProfileProps) {
    return (
        <button
            type="button"
            className="flex items-center gap-3"
        >
            <div className="relative h-8 w-8 overflow-hidden rounded-full border border-zinc-100">
                {avatar ? (
                    <Image
                        src={avatar}
                        alt={`${name} avatar`}
                        fill
                        className="object-cover"
                    />
                ) : (
                    <div className="flex h-full w-full items-center justify-center bg-zinc-100 text-sm font-semibold text(--muted)">
                        {name.charAt(0).toUpperCase()}
                    </div>
                )}
            </div>

            <div className="hidden text-left sm:block">
                <p className="text-sm font-semibold text-foreground">
                    {name}
                </p>
            </div>
        </button>
    );
}