import UserProfile from "@/components/ui/UserProfile";

type HeroProps = {
  name: string;
};

export default function Hero({ name }: HeroProps) {
  return (
    <header className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
      <section className="max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight text-text">
          Dashboard
        </h1>

        <p className="mt-2 text-muted">
          Manage standups, collaborate with your team, and keep every update in one place.
        </p>
      </section>

      <UserProfile name={name} />
    </header>
  );
}