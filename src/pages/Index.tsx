import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import Showcase from "@/components/Showcase";
import ExamplesShowcase from "@/components/ExamplesShowcase";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import StickyReveal from "@/components/StickyReveal";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Parallax block — Hero sticks, HowItWorks scrolls over it */}
      <div className="relative">
        <div className="sticky top-0 h-screen overflow-hidden">
          <Hero />
        </div>
        <div className="relative z-10 -mt-32">
          <HowItWorks />
        </div>
      </div>

      <Stats />
      <Features />
      <Showcase />
      <StickyReveal />
      <ExamplesShowcase />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
