import Container from "@/components/ui/Container";
import Features from "@/features/landing/components/Features";
import Hero from "@/features/landing/components/Hero";

function Home() {
  return (
    <div>
      <Hero />
      <Container>
        <Features />
      </Container>
    </div>
  );
}

export default Home;
