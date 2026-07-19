import LogoutButton from "@/components/ui/LogoutButton";

interface UserProfileProps {
  name: string;
}

export default function UserProfile({ name }: UserProfileProps) {
  return (
    <div className="w-fit flex items-center gap-1 rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur-md">
      <p className="text-sm font-semibold text-text px-2">{name}</p>
      <LogoutButton />
    </div>
  );
}