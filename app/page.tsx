import { FAQSection } from "@/components/sections/FAQSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { BorrowLendSection } from "@/components/sections/BorrowLendSection";
import { SecurityFeaturesSection } from "@/components/sections/SecurityFeaturesSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { HeroSection } from "@/components/sections/HeroSection";

export default function Home() {
  return (
    <div className="bg-transparent flex flex-col items-center w-full min-h-screen">
      <div className="w-full">
        {/* Hero section with integrated navbar */}
        <HeroSection />

        {/* Main content sections stacked vertically */}
        <div className="w-full">
          <FeaturesSection />
          <BorrowLendSection />
          <SecurityFeaturesSection />
          <FAQSection />
          <FooterSection />
        </div>
      </div>
    </div>
  );
}
