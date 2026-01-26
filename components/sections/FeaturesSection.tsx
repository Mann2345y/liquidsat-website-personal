import React from "react";

const FEATURES = [
  {
    title: "Non-Custodial by Design",
    description:
      "Your BTC stays on Bitcoin, secured by native scripts. Stablecoins flow directly between lender and borrower, enabling true non-custodial Bitcoin financing.",
    icon: "/shield.svg",
  },
  {
    title: "Bridge-Free Architecture",
    description:
      "No wrapped BTC. No synthetic assets. No bridge risks. All collateral handling is verifiable with native Bitcoin proofs.",
    icon: "/lightning.svg",
    bgImage: "/bg-card-2.png",
  },
  {
    title: "Wallet-to-Wallet Execution",
    description:
      "LiquidSat never holds user funds. All capital moves directly between wallets the moment a loan is matched.",
    icon: "/wallet.svg",
    bgImage: "/bg-card-3.png",
  },
  {
    title: "Deterministic Settlement Infrastructure",
    description:
      "Every financing outcome is defined upfront and enforced through Bitcoin-native scripts, removing counterparty ambiguity.",
    icon: "/btc.svg",
    bgImage: "/bg-card-4.png",
  },
];

function FeatureCard({
  feature,
  className = "",
}: {
  feature: (typeof FEATURES)[0];
  className?: string;
}): JSX.Element {
  return (
    <div
      className={`relative flex flex-col rounded-[12px] p-8 min-h-[264px] h-full overflow-hidden ${className}`}
      style={{ background: "#FAECCF" }}
    >
      {feature.bgImage && (
        <div
          className="absolute bottom-0 left-0 right-0 h-[120px] sm:h-[140px] pointer-events-none"
          aria-hidden
        >
          <img
            src={feature.bgImage}
            alt=""
            className="w-full h-full object-cover object-bottom"
          />
        </div>
      )}
      <div className="relative z-10 flex flex-col gap-5 flex-1 min-h-0">
        <div className="rounded-[10px] flex-shrink-0 w-12 h-12">
          <img
            src={feature.icon}
            alt=""
            width={48}
            height={48}
            className="w-full h-full object-contain"
          />
        </div>
        <h3
          className="text-[#131416]"
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 400,
            fontSize: "clamp(1.1rem, 2vw, 22.7px)",
            lineHeight: "34px",
            letterSpacing: "-0.24px",
            margin: 0,
          }}
        >
          {feature.title}
        </h3>
        <p
          className="text-[#131416]"
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "21px",
            letterSpacing: "-0.16px",
            margin: 0,
          }}
        >
          {feature.description}
        </p>
      </div>
    </div>
  );
}

export const FeaturesSection = (): JSX.Element => {
  return (
    <section
      className="flex flex-col items-center w-full relative"
      style={{
        minHeight: "auto",
        backgroundColor: "#FFFFFF",
      }}
    >
      <div
        className="w-full flex flex-col items-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-[84px] py-12 sm:py-16 md:py-[60px]"
        style={{ maxWidth: "1320px" }}
      >
        {/* Header - centered */}
        <div className="flex flex-col items-center justify-center text-center w-full  mb-10 sm:mb-12 md:mb-[50px] ">
          <h2
            className="text-[#27272A] w-full text-left"
            style={{
              fontFamily: "SF Pro Display",
              fontWeight: 500,
              fontSize: "clamp(1.5rem, 4vw, 40px)",
              lineHeight: "46px",
              letterSpacing: "-0.4px",
              margin: 0,
            }}
          >
            The Simplest Way to Unlock Liquidity from Your Bitcoin
          </h2>
          <p
            className="text-[#71717A] w-full mt-4 text-left"
            style={{
              fontFamily: "SF Pro",
              fontWeight: 400,
              fontSize: "clamp(1rem, 2.2vw, 24px)",
              lineHeight: "29px",
              letterSpacing: "-0.4px",
            }}
          >
            LiquidSat makes your BTC productive, without selling, wrapping, or
            trusting intermediaries.
          </p>
        </div>

        {/* 2x2 Cards: flex rows — row1: narrow | wide, row2: wide | narrow */}
        <div className="flex flex-col gap-6 sm:gap-8 w-full">
          {/* Row 1: 1st card narrower, 2nd wider */}
          <div className="flex flex-col md:flex-row gap-6 sm:gap-8 w-full items-stretch">
            <FeatureCard feature={FEATURES[0]} className="w-full md:flex-[0_0_46%]" />
            <FeatureCard feature={FEATURES[1]} className="w-full md:flex-1" />
          </div>
          {/* Row 2: 1st wider, 2nd narrower (reversed) */}
          <div className="flex flex-col md:flex-row gap-6 sm:gap-8 w-full items-stretch">
            <FeatureCard feature={FEATURES[2]} className="w-full md:flex-1" />
            <FeatureCard feature={FEATURES[3]} className="w-full md:flex-[0_0_46%]" />
          </div>
        </div>
      </div>
    </section>
  );
};
