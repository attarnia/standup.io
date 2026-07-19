import Container from "@/components/ui/Container";
import Footer from "@/components/ui/Footer";
import Features from "@/features/landing/components/Features";
import Hero from "@/features/landing/components/Hero";
import HowItWorks from "@/features/landing/components/HowItWork";

function Home() {
  return (
    <div>
      <Hero />
      <Container>
        <Features />
        <HowItWorks />
      </Container>
      <Footer />
    </div>
  );
}

export default Home;
