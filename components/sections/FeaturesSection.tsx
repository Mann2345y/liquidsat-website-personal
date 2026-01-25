"use client";

import React, { useState, useEffect } from "react";

export const FeaturesSection = (): JSX.Element => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      title: "Non-Custodial by Design",
      icon: (
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="18"
            y="28"
            width="28"
            height="24"
            rx="2"
            stroke="#F59E0B"
            strokeWidth="2.5"
            fill="none"
          />
          <path
            d="M22 28V20C22 14.477 26.477 10 32 10C37.523 10 42 14.477 42 20V28"
            stroke="#F59E0B"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="32" cy="38" r="3" fill="#F59E0B" />
          <path
            d="M32 41V46"
            stroke="#F59E0B"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      ),
      description:
        "Your BTC stays on Bitcoin, secured by native scripts. Stablecoins flow directly between lender and borrower, enabling true non-custodial Bitcoin financing.",
    },
    {
      title: "Bridge-Free Architecture",
      icon: (
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="16"
            cy="32"
            r="8"
            stroke="#F59E0B"
            strokeWidth="2.5"
            fill="none"
          />
          <circle
            cx="48"
            cy="32"
            r="8"
            stroke="#F59E0B"
            strokeWidth="2.5"
            fill="none"
          />
          <path
            d="M24 32H40"
            stroke="#F59E0B"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M34 26L40 32L34 38"
            stroke="#F59E0B"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M28 18L32 14L36 18"
            stroke="#F59E0B"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <text
            x="32"
            y="52"
            textAnchor="middle"
            fill="#F59E0B"
            fontSize="12"
            fontWeight="bold"
          >
            NO BRIDGE
          </text>
        </svg>
      ),
      description:
        "No wrapped BTC. No synthetic assets. No bridge risks. All collateral handling is verifiable with native Bitcoin proofs.",
    },
    {
      title: "Dual Financing Models",
      icon: (
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M32 12V52"
            stroke="#F59E0B"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M18 20L26 28L18 36"
            stroke="#F59E0B"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M46 28L38 36L46 44"
            stroke="#F59E0B"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="18" cy="28" r="4" fill="#F59E0B" />
          <circle cx="46" cy="36" r="4" fill="#F59E0B" />
          <text x="12" y="48" fill="#F59E0B" fontSize="9" fontWeight="bold">
            USD
          </text>
          <text x="44" y="52" fill="#F59E0B" fontSize="9" fontWeight="bold">
            BTC
          </text>
        </svg>
      ),
      description:
        "Access instant fixed-rate liquidity through BTC financing pools, or create personalized peer-to-peer loan terms.",
    },
    {
      title: "Wallet-to-Wallet Execution",
      icon: (
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="32"
            cy="32"
            r="18"
            stroke="#F59E0B"
            strokeWidth="2.5"
            fill="none"
          />
          <path
            d="M32 20V32L40 40"
            stroke="#F59E0B"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="32" cy="32" r="2" fill="#F59E0B" />
          <path
            d="M22 14L18 10M42 14L46 10M50 22L54 18M50 42L54 46M42 50L46 54M22 50L18 54M14 42L10 46M14 22L10 18"
            stroke="#F59E0B"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
      description:
        "LiquidSat never holds user funds. All capital moves directly between wallets the moment a loan is matched.",
    },
  ];

  // Auto-cycle through features every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <section
      className="flex flex-col items-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-[84px] py-0 w-full relative"
      style={{
        minHeight: "auto",
        backgroundColor: "#FFFFFF",
      }}
    >
      {/* Container */}
      <div
        className="w-full flex flex-col items-start pt-8 sm:pt-12 md:pt-[60px] pb-0"
        style={{ maxWidth: "1320px" }}
      >
        {/* Header */}
        <div className="flex flex-col items-start gap-4 sm:gap-6 w-full max-w-[917px] mb-8 sm:mb-10 md:mb-[50px]">
          <h2
            className="text-[#27272A] text-2xl sm:text-3xl md:text-[32px]"
            style={{
              fontFamily: "SF Pro Display",
              fontWeight: 500,
              lineHeight: "1.25",
              letterSpacing: "-0.4px",
            }}
          >
            The Bitcoin Financing Layer — Unlock Liquidity Without Selling Your
            BTC
          </h2>
          <p
            className="text-[#71717A] text-base sm:text-lg md:text-[18px]"
            style={{
              fontFamily: "SF Pro",
              fontWeight: 500,
              lineHeight: "1.44",
              letterSpacing: "-0.4px",
            }}
          >
            LiquidSat transforms your Bitcoin into usable liquidity across
            chains — safely, instantly, and without ever compromising custody.
          </p>
        </div>

        {/* Key Features - Two Column Layout */}
        <div
          className="flex flex-col lg:flex-row justify-between items-start w-full gap-6 sm:gap-10 lg:gap-14"
          style={{ minHeight: "auto" }}
        >
          {/* Left Column - Feature List */}
          <div className="flex flex-col items-start gap-1.5 w-full lg:max-w-[636px]">
            {features.map((feature, index) => (
              <button
                key={index}
                onClick={() => setActiveFeature(index)}
                className={`
                  flex flex-row items-center w-full h-[60px] sm:h-[72px] rounded-[12px] sm:rounded-[20px] px-4 sm:px-8 md:px-[42px] py-4 sm:py-6 
                  transition-all duration-500 ease-in-out relative overflow-hidden
                  ${
                    activeFeature === index
                      ? "bg-[#FAECCF] shadow-[inset_0px_4px_4px_rgba(0,0,0,0.1)]"
                      : "bg-transparent hover:bg-[#F6F2EA]"
                  }
                `}
                style={{
                  fontFamily: "SF Pro",
                  fontWeight: 400,
                  lineHeight: "28px",
                  letterSpacing: "-0.4px",
                  color: activeFeature === index ? "#030303" : "#6C6E74",
                }}
              >
                {/* Background mask effect for active item */}
                {activeFeature === index && (
                  <>
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          "radial-gradient(50% 50% at 50% 50%, #000000 25.47%, rgba(0, 0, 0, 0) 100%)",
                        opacity: 0.03,
                        mixBlendMode: "multiply",
                      }}
                    />
                    <svg
                      className="absolute left-0 top-0 h-full opacity-20"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      style={{ transform: "scale(1.5)" }}
                    >
                      <circle cx="10" cy="10" r="10" fill="#FFFFFF" />
                    </svg>
                  </>
                )}
                <span className="relative z-10 text-sm sm:text-base">
                  {feature.title}
                </span>
              </button>
            ))}
          </div>

          {/* Right Column - Feature Display Card */}
          <div
            className="relative flex flex-col justify-center items-center rounded-[12px] sm:rounded-[20px] overflow-hidden flex-1 w-full"
            style={{
              padding: "24px",
              isolation: "isolate",
              minHeight: "300px",
              maxWidth: "100%",
              background:
                "linear-gradient(225.7deg, #57432F 0%, #27272A 74.69%)",
              boxShadow: "0px 0px 0px 6px rgba(18, 18, 20, 0.07)",
            }}
          >
            {/* Animated Blur Gradients */}
            <div
              className="absolute"
              style={{
                width: "88px",
                height: "606px",
                left: "41.93px",
                top: "-22.47px",
                background:
                  "linear-gradient(180deg, #FDBA74 0%, rgba(253, 186, 116, 0) 100%)",
                transform: "rotate(31deg)",
                filter: "blur(9px)",
              }}
            />
            <div
              className="absolute"
              style={{
                width: "88.01px",
                height: "568px",
                left: "171.44px",
                top: "66.63px",
                background:
                  "linear-gradient(180deg, #FDBA74 0%, rgba(253, 186, 116, 0) 100%)",
                opacity: 0.51,
                transform: "rotate(23deg)",
                filter: "blur(9px)",
              }}
            />
            <div
              className="absolute"
              style={{
                width: "88px",
                height: "659px",
                left: "339.23px",
                bottom: "-134.28px",
                background:
                  "linear-gradient(180deg, #FDBA74 0%, rgba(253, 186, 116, 0) 100%)",
                opacity: 0.6,
                transform: "rotate(18deg)",
                filter: "blur(9px)",
              }}
            />
            <div
              className="absolute"
              style={{
                width: "88px",
                height: "530.99px",
                left: "-97.41px",
                top: "60.55px",
                background:
                  "linear-gradient(180deg, #FDBA74 0%, rgba(253, 186, 116, 0) 100%)",
                opacity: 0.55,
                transform: "rotate(43deg)",
                filter: "blur(9px)",
              }}
            />

            {/* Content Container */}
            <div
              className="relative z-10 flex flex-col justify-center items-center w-full h-full"
              style={{ padding: "0px" }}
            >
              {/* White Card with Feature Details */}
              <div
                className="bg-white rounded-[12px] sm:rounded-[16px] p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center text-center transition-all duration-500 ease-in-out w-full max-w-[340px]"
                style={{
                  minHeight: "240px",
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.15)",
                }}
              >
                {/* Icon */}
                <div
                  className="mb-4 sm:mb-6 transition-transform duration-500 ease-in-out scale-75 sm:scale-100"
                  style={{
                    lineHeight: "1",
                  }}
                >
                  {features[activeFeature].icon}
                </div>

                {/* Title */}
                <h3
                  className="mb-3 sm:mb-4 text-[#27272A] text-lg sm:text-xl md:text-2xl"
                  style={{
                    fontFamily: "SF Pro Display",
                    fontWeight: 600,
                    lineHeight: "1.33",
                    letterSpacing: "-0.4px",
                  }}
                >
                  {features[activeFeature].title}
                </h3>

                {/* Description */}
                <p
                  className="text-[#71717A] text-sm sm:text-base"
                  style={{
                    fontFamily: "SF Pro",
                    fontWeight: 400,
                    lineHeight: "1.5",
                    letterSpacing: "-0.2px",
                  }}
                >
                  {features[activeFeature].description}
                </p>
              </div>
            </div>

            {/* Border Overlay */}
            <div
              className="absolute inset-0 pointer-events-none rounded-[20px]"
              style={{
                border: "1px solid #FFFFFF",
              }}
            />

            {/* Bottom Mask Gradient */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(50% 246% at 47.2% 91.4%, rgba(0, 0, 0, 0) 51.77%, #000000 100%)",
              }}
            />

            {/* Decorative Pattern Overlay */}
            <div
              className="absolute inset-0 pointer-events-none opacity-10"
              style={{
                mixBlendMode: "lighten",
              }}
            >
              <svg
                className="absolute top-0 left-0"
                width="63"
                height="63"
                viewBox="0 0 63 63"
              >
                <circle
                  cx="31.5"
                  cy="31.5"
                  r="31.5"
                  fill="#000000"
                  stroke="#FFFFFF"
                  strokeWidth="1"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
