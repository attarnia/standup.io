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
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900 text-neutral sm:mb-5 sm:h-12 sm:w-12">
        {icon}
      </div>

      {stepNumber && (
        <span className="mb-2 inline-block text-xs font-medium text-muted sm:mb-3 sm:text-sm">
          Step {stepNumber}
        </span>
      )}

      <h4 className="mb-2 text-lg font-semibold text-neutral sm:text-xl">
        {title}
      </h4>

      <p className="text-sm leading-6 text-muted wrap-break-word">
        {caption}
      </p>
    </div>
  );
}

export default Card;
