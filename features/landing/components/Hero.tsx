import Link from "next/link"

const Hero = () => {
    return (
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                    Manage team tasks and stand-ups effortlessly
                </h1>
                <p className="w-full max-w-90 text-center mx-auto mt-2 text-white/65">
                    Project Standup helps you and your team to make project development more transparent.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                    <Link
                        href="/signup"
                        className="relative inline-block w-full sm:w-auto p-0.5 text-[1rem] rounded-2xl border-none bg-[radial-gradient(circle_80px_at_80%_-10%,#ffffff,#181b1b)] cursor-pointer after:content-[''] after:absolute after:w-[65%] after:h-[60%] after:rounded-[120px] after:top-0 after:right-0 after:shadow-[0_0_20px_#ffffff38] after:z-[-1]"
                        aria-label="Sign up for Standup and start managing team tasks"
                        title="Get Started with Standup"
                    >
                        <div className="absolute bottom-0 left-0 w-17.5 h-full rounded-2xl bg-[radial-gradient(circle_60px_at_0%_100%,#3fe9ff,#0000ff80,transparent)] shadow-[-10px_10px_30px_#0051ff2d]" aria-hidden="true"></div>
                        <div className="blob2" aria-hidden="true"></div>
                        <div className="relative z-3 px-6.25 py-3.5 rounded-[14px] text-white bg-[radial-gradient(circle_80px_at_80%_-50%,#777777,#0f1111)] before:content-[''] before:absolute before:inset-0 before:rounded-[14px] before:bg-[radial-gradient(circle_60px_at_0%_100%,#00e1ff1a,#0000ff11,transparent)]">
                            <span className="relative z-10 font-semibold">Get Started</span>
                        </div>
                    </Link>
                    <Link
                        href="/learn-more"
                        className="relative inline-block w-full sm:w-auto p-0.5 text-[1rem] rounded-2xl border-none bg-[radial-gradient(circle_80px_at_80%_-10%,#ffffff,#181b1b)] cursor-pointer after:content-[''] after:absolute after:w-[65%] after:h-[60%] after:rounded-[120px] after:top-0 after:right-0 after:shadow-[0_0_20px_#ffffff38] after:z-[-1]"
                        aria-label="Learn more about how Standup works"
                        title="Learn more about Standup"
                    >
                        <div className="absolute bottom-0 left-0 w-17.5 h-full rounded-2xl bg-[radial-gradient(circle_60px_at_0%_100%,#3fe9ff,#0000ff80,transparent)] shadow-[-10px_10px_30px_#0051ff2d]" aria-hidden="true"></div>
                        <div className="blob2" aria-hidden="true"></div>
                        <div className="relative z-3 px-6.25 py-3.5 rounded-[14px] text-white bg-[radial-gradient(circle_80px_at_80%_-50%,#777777,#0f1111)] before:content-[''] before:absolute before:inset-0 before:rounded-[14px] before:bg-[radial-gradient(circle_60px_at_0%_100%,#00e1ff1a,#0000ff11,transparent)]">
                            <span className="relative z-10 font-semibold">Learn More</span>
                        </div>
                    </Link>
                </div>
                <div className="relative mt-8 w-full sm:w-[80%] max-w-5xl rounded-2xl overflow-hidden aspect-video mx-auto">
                    {/* <Image
                        src={s}
                        alt="Standup Project Dashboard Preview"
                        fill
                        priority
                        sizes="(max-width: 1200px) 100vw, 1200px"
                        className="object-cover"
                    /> */}
                </div>
            </div>
        </section>
    )
}

export default Hero