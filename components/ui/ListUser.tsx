import { Circle } from "lucide-react";
import Button from "./Button";
type UserCard = {
  initials: string;
  name: string;
  online: boolean;
  role: string;
};
function ListUser({ initials, name, online, role }: UserCard) {
  return (
    <div>
      <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4 transition hover:bg-white/[0.04]">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-black/20 text-xl font-bold">
            {initials}
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-medium">{name}</h3>

              <Circle
                size={10}
                className={
                  online
                    ? "fill-emerald-500 text-emerald-500"
                    : "fill-zinc-500 text-zinc-500"
                }
              />
            </div>

            <p className="text-sm text-zinc-500">{role}</p>
          </div>
        </div>

        <Button type="button" color="primary">
          View
        </Button>
      </div>
    </div>
  );
}

export default ListUser;
