import { createSupabaseServerClient } from "@/lib/server-client";
import Navbar from "@/components/Navbar";
import Container from "@/components/ui/Container";

async function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();

  const fullName = user?.user_metadata?.full_name
    ?? user?.user_metadata?.name
    ?? null;
  const firstName = fullName?.split(" ")[0] ?? user?.email?.split("@")[0] ?? null;


  return (
    <>
      <header>
        <Container>
          <Navbar firstName={firstName} />
        </Container>
      </header>
      <main>{children}</main>
    </>
  );
}

export default LandingLayout;