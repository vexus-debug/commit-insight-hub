import TopBar from "@/components/TopBar";
import { PageTransition } from "@/components/motion/Motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import JourneySection from "@/components/JourneySection";
import ImpactSection from "@/components/ImpactSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <PageTransition><div className="min-h-screen overflow-x-clip">
      <div className="sticky top-0 z-50">
        <TopBar />
        <Navbar />
      </div>
      <HeroSection />
      <MissionSection />
      <JourneySection />
      <ImpactSection />
      <GallerySection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  </PageTransition>);
};

export default Index;
