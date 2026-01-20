import dynamic from "next/dynamic";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";

// Lazy load below-the-fold components
const BorrowLendSection = dynamic(
  () =>
    import("@/components/sections/BorrowLendSection").then(
      (mod) => mod.BorrowLendSection
    ),
  { ssr: true }
);

const SecurityFeaturesSection = dynamic(
  () =>
    import("@/components/sections/SecurityFeaturesSection").then(
      (mod) => mod.SecurityFeaturesSection
    ),
  { ssr: true }
);

const FAQSection = dynamic(
  () =>
    import("@/components/sections/FAQSection").then((mod) => mod.FAQSection),
  { ssr: true }
);

const FooterSection = dynamic(
  () =>
    import("@/components/sections/FooterSection").then(
      (mod) => mod.FooterSection
    ),
  { ssr: true }
);

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
