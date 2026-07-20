import Image from "next/image";
import HeroButton from "@/components/ui/HeroButton";

type HeroProps = {
  firstName?: string | null;
};

const Hero = ({ firstName }: HeroProps) => {
  return (
    <section className="overflow-hidden px-4 pt-24 pb-16 sm:px-6 sm:pt-28 sm:pb-20 lg:px-8 lg:pt-32 lg:pb-24"  id="home">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="h1">
            Manage team tasks and stand-ups effortlessly
          </h1>

          <p className="hero-desc mt-5 sm:mt-6">
            Project Standup helps you and your team make project development
            more transparent with asynchronous stand-ups, AI summaries, and
            real-time insights.
          </p>

          <div className="mt-10 flex items-center justify-center gap-3">
            <HeroButton
              href={firstName ? "/dashboard" : "/auth"}
              ariaLabel={
                firstName
                  ? "Go to your dashboard"
                  : "Sign up for Standup and start managing team tasks"
              }
              title={
                firstName
                  ? "Go to Dashboard"
                  : "Get Started with Standup"
              }
            >
              {firstName ? "Go to Dashboard" : "Get Started"}
            </HeroButton>

            <HeroButton
              href="/#features"
              ariaLabel="Learn more about how Standup works"
              title="Learn more about Standup"
            >
              Learn More
            </HeroButton>
          </div>
        </div>

        <div className="relative mt-12 sm:mt-16 lg:mt-20">
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-8 h-48 w-48 -translate-x-1/2 rounded-full bg-blue-500/20 blur-[100px] sm:top-10 sm:h-72 sm:w-72 sm:blur-[120px]"
          />

          <div className="relative mx-auto max-w-6xl perspective-[1800px]">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#111111] shadow-box ring-1 ring-white/5 transition-transform duration-500 sm:rounded-3xl md:[transform:rotateX(8deg)] md:hover:scale-[1.02]">
              <div className="flex items-center gap-2 border-b border-white/10 bg-[#18181b] px-4 py-3 sm:px-5 sm:py-4">
                <span className="h-3 w-3 rounded-full bg-red-500" />
                <span className="h-3 w-3 rounded-full bg-yellow-500" />
                <span className="h-3 w-3 rounded-full bg-green-500" />
              </div>

              <div className="relative aspect-video w-full">
                <Image
                  src="/image/hero-img.png"
                  alt="Standup dashboard preview showing team reports and AI summaries"
                  fill
                  priority
                  sizes="
                    (max-width: 640px) 100vw,
                    (max-width: 1024px) 90vw,
                    1200px
                  "
                  className="object-cover"
                />

                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 via-black/20 to-transparent sm:h-32"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;