import HeroSection from "@/components/home/HeroSection";
import TrustedBySection from "@/components/home/TrustedBySection";
import ServicesSection from "@/components/home/ServicesSection";
import TrustBar from "@/components/home/TrustBar";
import WhyUsSection from "@/components/home/WhyUsSection";
import PortfolioSection from "@/components/home/PortfolioSection";
import ProcessSection from "@/components/home/ProcessSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FreeAuditSection from "@/components/home/FreeAuditSection";
import FinalCTA from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustedBySection />
      <ServicesSection />
      <TrustBar />
      <WhyUsSection />
      <PortfolioSection />
      <ProcessSection />
      <TestimonialsSection />
      <FreeAuditSection />
      <FinalCTA />
    </>
  );
}
