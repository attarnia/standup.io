import { ReactNode } from "react";

type cardType = {
  icon: ReactNode;
  head: string;
  caption: string;
};
function Card({ icon, head, caption }:cardType) {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6 transition-all hover:border-zinc-700 hover:bg-zinc-900">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-900 text-zinc-100">
        {icon}
      </div>

      <h4 className="mb-2 text-xl font-semibold text-white">{head}</h4>

      <p className="text-sm leading-6 text-zinc-400">{caption}</p>
    </div>
  );
}

export default Card;
