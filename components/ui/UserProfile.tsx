interface UserProfileProps {
  name: string;
}

export default function UserProfile({ name }: UserProfileProps) {
  return (
    <div className="hidden sm:block rounded-2xl bg-white/5 border border-white/10 px-3 py-2 backdrop-blur-md">
      <p className="text-sm font-semibold text-text">{name}</p>
    </div>
  );
}