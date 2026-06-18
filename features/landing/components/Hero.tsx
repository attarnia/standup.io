import HeroButton from "@/components/ui/HeroButton"

const Hero = () => {
    return (
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
                <h1 className="h1">
                    Manage team tasks and stand-ups effortlessly
                </h1>
                <p className="hero-desc">
                    Project Standup helps you and your team to make project development more transparent.
                </p>
                <div className="hero-actions">
                    <HeroButton
                        href="/signup"
                        ariaLabel="Sign up for Standup and start managing team tasks"
                        title="Get Started with Standup"
                    >
                        Get Started
                    </HeroButton>
                    <HeroButton
                        href="/learn-more"
                        ariaLabel="Learn more about how Standup works"
                        title="Learn more about Standup"
                    >
                        Learn More
                    </HeroButton>
                </div>
                <div className="hero-preview">
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