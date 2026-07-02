import Image from "next/image";

interface UserProfileProps {
  name: string;
  avatar?: string | null;
}

export default function UserProfile({ name, avatar }: UserProfileProps) {
  return (
    <button type="button" className="flex items-center gap-3">
      <div className="relative h-8 w-8 overflow-hidden rounded-full ">
        {avatar ? (
          <Image
            src={avatar}
            alt={`${name} avatar`}
            fill
            className="object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-muted/60 text-zinc-400 text-sm font-semibold ">
            {name.charAt(0).toUpperCase()}
          </div>
        )}
      </div>

      <div className="hidden text-left sm:block">
        <p className="text-sm font-semibold text-text">{name}</p>
      </div>
    </button>
  );
}
