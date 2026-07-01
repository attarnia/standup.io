import UserProfile from "@/components/ui/UserProfile";

export default function Hero() {
    return (
        <header className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <section>
                <h1 className="text-3xl font-bold text-foreground">
                    Dashboard
                </h1>

                <p className="mt-2 text-zinc-400">
                    Hi, Ali 👋 Welcome back.
                </p>
            </section>

            <aside>
                <UserProfile
                    name="Ali Rezaei"
                    avatar=""
                />
            </aside>
        </header>
    );
}