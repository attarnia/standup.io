import Navbar from "@/components/Navbar";
import Container from "@/components/ui/Container";

function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div>
        <Container>
          <Navbar />
        </Container>
      </div>
      <section>{children}</section>
    </>
  );
}

export default LandingLayout;
