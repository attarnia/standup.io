import Navbar from "@/components/Navbar";
import Container from "@/components/ui/Container";

function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header>
        <Container>
          <Navbar />
        </Container>
      </header>
      <main>{children}</main>
    </>
  );
}

export default LandingLayout;
