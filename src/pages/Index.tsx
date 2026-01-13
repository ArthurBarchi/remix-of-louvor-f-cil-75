import HeroSection from "@/components/landing/HeroSection";
import PreviewSection from "@/components/landing/PreviewSection";
import SpecialOfferSection from "@/components/landing/SpecialOfferSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import PricingSection from "@/components/landing/PricingSection";
import GuaranteeSection from "@/components/landing/GuaranteeSection";
import StorySection from "@/components/landing/StorySection";
import FAQSection from "@/components/landing/FAQSection";
import FooterSection from "@/components/landing/FooterSection";
import PurchaseNotification from "@/components/landing/PurchaseNotification";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <PreviewSection />
      <SpecialOfferSection />
      <TestimonialsSection />
      <PricingSection />
      <GuaranteeSection />
      <StorySection />
      <FAQSection />
      <FooterSection />
      <PurchaseNotification />
    </main>
  );
};

export default Index;
