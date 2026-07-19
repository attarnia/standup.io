import { ReactNode } from "react";

type cardType = {
  icon: ReactNode;
  title: string;
  caption: string;
  stepNumber?: number;
};
function Card({ icon, title, caption, stepNumber }: cardType) {
  return (
    <div className="card">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-900 text-neutral">
        {icon}
      </div>
      {stepNumber && (
        <span className="mb-3 inline-block text-sm font-medium text-muted">
          Step {stepNumber}
        </span>
      )}
      <h4 className="mb-2 text-xl font-semibold text-neutral ">{title}</h4>

      <p className="text-sm leading-6 text-nowrap  text-muted">{caption}</p>
    </div>
  );
}

export default Card;
