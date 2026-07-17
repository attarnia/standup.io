import UserProfile from "@/components/ui/UserProfile";

export default function Hero({name}: {name: string}) {
    return (
        <header className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <section>
                <p className="mt-2 text-text font-bold">
                    Hi, {name} 👋 Welcome back!
                </p>
            </section>

            <aside>
                <UserProfile
                    name={name}
                />
            </aside>
        </header>
    );
}