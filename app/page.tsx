// Server-rendered components (no "use client")
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { BitcoinUtilitySection } from "@/components/sections/BitcoinUtilitySection";
import { SecurityFeaturesSection } from "@/components/sections/SecurityFeaturesSection";
import { FooterSection } from "@/components/sections/FooterSection";

// Client components (interactive)
import { HeroSection } from "@/components/sections/HeroSection";
import { BorrowLendSection } from "@/components/sections/BorrowLendSection";
import { FAQSection } from "@/components/sections/FAQSection";

export default function Home() {
  return (
    <div className="bg-transparent flex flex-col items-center w-full min-h-screen overflow-x-hidden">
      <div className="w-full">
        {/* Hero section with integrated navbar */}
        <HeroSection />

        {/* Main content sections stacked vertically */}
        <div className="w-full">
          <FeaturesSection />
          <BorrowLendSection />
          <BitcoinUtilitySection />
          <SecurityFeaturesSection />
          <FAQSection />
          <FooterSection />
        </div>
      </div>
    </div>
  );
}
