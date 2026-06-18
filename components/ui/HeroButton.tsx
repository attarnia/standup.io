import Link from "next/link";

interface HeroButtonProps {
    href: string;
    ariaLabel: string;
    title: string;
    children: React.ReactNode;
}

const HeroButton = ({ href, ariaLabel, title, children }: HeroButtonProps) => (
    <Link
        href={href}
        className="relative inline-block w-full sm:w-auto p-0.5 text-[1rem] rounded-2xl border-none bg-[radial-gradient(circle_80px_at_80%_-10%,#ffffff,#181b1b)] cursor-pointer after:content-[''] after:absolute after:w-[65%] after:h-[60%] after:rounded-[120px] after:top-0 after:right-0 after:z-[-1]"
        aria-label={ariaLabel}
        title={title}
    >
        <div className="absolute bottom-0 left-0 w-17.5 h-full rounded-2xl bg-[radial-gradient(circle_60px_at_0%_100%,#3fe9ff,#0000ff80,transparent)]" aria-hidden="true"></div>
        <div className="relative z-3 px-6.25 py-3.5 rounded-[14px] text-(--text-title) bg-[#111111] before:content-[''] before:absolute before:inset-0 before:rounded-[14px] ">
            <span className="relative z-10 font-semibold">{children}</span>
        </div>
    </Link>
);

export default HeroButton


