import Image from "next/image";
import HeroButton from "@/components/ui/HeroButton";

const Hero = () => {
  return (
    <section className="overflow-hidden px-4 pt-32 pb-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Hero Content */}
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="h1">Manage team tasks and stand-ups effortlessly</h1>

          <p className="hero-desc mt-6">
            Project Standup helps you and your team make project development
            more transparent with asynchronous stand-ups, AI summaries, and
            real-time insights.
          </p>

          <div className="hero-actions mt-10 flex flex-wrap items-center justify-center gap-4">
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
        </div>

        {/* Hero Image */}
        <div className="relative mt-20">
          {/* Background Glow */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/20 blur-[120px]"
          />

          {/* Perspective */}
          <div className="relative mx-auto max-w-6xl perspective-[1800px]">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#111111]   shadow-box ring-1 ring-white/5 transition-transform duration-500 md:[transform:rotateX(8deg)] md:hover:scale-[1.02]">
              {/* Browser Header */}
              <div className="flex items-center gap-2 border-b border-white/10 bg-[#18181b] px-5 py-4">
                <span className="h-3 w-3 rounded-full bg-red-500" />
                <span className="h-3 w-3 rounded-full bg-yellow-500" />
                <span className="h-3 w-3 rounded-full bg-green-500" />
              </div>

              {/* Dashboard Image */}
              <div className="relative aspect-video w-full">
                <Image
                  src="/image/hero-img.png" // <-- Replace with your image path
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

                {/* Bottom Gradient */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
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
