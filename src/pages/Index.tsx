import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Technology } from "@/components/Technology";
import { Impact } from "@/components/Impact";
import { Partners } from "@/components/Partners";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Technology />
        <Impact />
        <Partners />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
