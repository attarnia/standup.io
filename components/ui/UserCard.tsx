import { Circle } from "lucide-react";
type UserCard = {
  initials: string;
  name: string;
  online: boolean;
  role: string;
};
function UserCard({ initials, name, online, role }: UserCard) {
  return (
    <div className="group w-57.5 rounded-3xl border border-white/10 bg-white/2 backdrop-blur-xl p-4 transition duration-300 hover:border-white/20 hover:bg-white/4 hover:-translate-y-1">
      <div className="flex h-60 items-center justify-center rounded-2xl border border-dashed border-white/10 bg-black/20 transition group-hover:border-white/20">
        <span className="text-6xl font-bold tracking-wider text-zinc-200">
          {initials}
        </span>
      </div>

      <div className="mt-5">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold text-lg">{name}</h3>

          <Circle
            size={10}
            className={
              online
                ? "fill-emerald-500 text-emerald-500"
                : "fill-zinc-500 text-zinc-500"
            }
          />
        </div>

        <p className="mt-1 text-sm text-zinc-500">{role}</p>
      </div>
    </div>
  );
}

export default UserCard;
