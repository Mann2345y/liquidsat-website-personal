import React from "react";
import Image from "next/image";
import { WhitepaperButton } from "@/components/ui/whitepaper-button";

export const SecurityFeaturesSection = (): JSX.Element => {
  return (
    <section
      className="relative flex flex-col justify-center items-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-[84px] py-8 sm:py-12 md:py-[60px] pb-12 sm:pb-16 md:pb-[100px] w-full"
      style={{
        minHeight: "auto",
        background:
          "radial-gradient(59.83% 45.47% at 53.54% 52.04%, #FBCC9B 36.45%, rgba(255, 255, 255, 0) 100%)",
      }}
    >
      {/* Container */}
      <div className="flex flex-col justify-center items-center gap-8 sm:gap-10 md:gap-[50px] w-full max-w-[1302px]">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-6 sm:gap-8 lg:gap-10 w-full">
          {/* Left Title */}
          <h2
            className="text-[#71717A] flex-1 text-2xl sm:text-3xl md:text-[36px]"
            style={{
              fontFamily: "SF Pro Display",
              fontWeight: 500,
              lineHeight: "1.17",
              letterSpacing: "-0.4px",
              maxWidth: "509px",
            }}
          >
            Non-Custodial by Default.
            <br />
            <span className="!text-[#27272a]">

            Bitcoin Security by Design.
            </span>
            <br />
          </h2>

          {/* Right Description + Button */}
          <div className="flex flex-col items-start gap-4 sm:gap-6 max-w-[500px] flex-1">
            <p
              className="text-[#71717A] text-base sm:text-lg md:text-xl"
              style={{
                fontFamily: "SF Pro",
                fontWeight: 400,
                lineHeight: "1.3",
                letterSpacing: "-0.4px",
              }}
            >
              Every BTC lock, proof, and settlement is executed through native Bitcoin scripts — not wrapped assets or bridge custodians. Infrastructure for BTC-Backed Finance.
            </p>
            <WhitepaperButton />
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 w-full lg:grid-rows-1">
          {/* Card 1 - Native Script Locks */}
          <div
            className="relative flex flex-col justify-start items-start p-6 sm:p-9 gap-6 sm:gap-8 rounded-[16px] sm:rounded-[20px] w-full h-full"
            style={{
              minHeight: "300px",
              background: "#FFFFFF",
              boxShadow: "0px 0px 0px 4px rgba(218, 221, 227, 0.3)",
              border: "1px solid #DADDE3",
            }}
          >
            <div className="relative w-full flex-1 flex items-center gap-3">
              {/* Gradient Mask Overlay */}
              <div className="absolute inset-0 pointer-events-none" />

              {/* Card Image */}
              <Image
                src="/sfv1.png"
                alt="native bitcoin script lock securing bitcoin-backed financing"
                width={400}
                height={300}
                className="w-full h-full object-contain min-h-[180px]"
              />
            </div>
            {/* Text Content */}
            <div className="relative z-10 flex flex-col gap-2 w-full min-h-[100px] mt-[12px] items-start">
              <h3
                className="text-[#27272A] text-lg sm:text-xl"
                style={{
                  fontFamily: "SF Pro",
                  fontWeight: 500,
                  lineHeight: "1.1",
                  letterSpacing: "-0.4px",
                }}
              >
                Native Script Escrow
              </h3>
              <p
                className="text-[#71717A] text-sm"
                style={{
                  fontFamily: "SF Pro",
                  fontWeight: 500,
                  lineHeight: "1.29",
                  letterSpacing: "-0.136082px",
                }}
              >
                Your BTC (SegWit / Taproot compatible) stays secured on Bitcoin through script-level controls, the foundation of non-custodial Bitcoin financing.
              </p>
            </div>

            {/* Visual Container with Gradient Mask */}
          </div>

          {/* Cards 2 & 3 Container */}
          <div
            className="relative flex flex-col justify-start items-start p-6 sm:p-9 gap-4 sm:gap-6 w-full h-full rounded-[16px] sm:rounded-[20px]"
            style={{
              minHeight: "300px",
              background: "#FFFFFF",
              boxShadow: "0px 0px 0px 4px rgba(218, 221, 227, 0.3)",
              border: "1px solid #DADDE3",
            }}
          >
            <div className="relative w-full flex-1 flex flex-col justify-center items-center gap-2.5">
              {/* Gradient Mask Overlay */}
              <div className="absolute inset-0 pointer-events-none" />

              {/* Card Image */}
              <Image
                src="/sfv2.png"
                alt="bridge-free bitcoin financing secured by native scripts"
                width={400}
                height={300}
                className="w-full h-full object-contain min-h-[180px]"
              />
            </div>
            {/* Text Content */}
            <div className="relative z-10 flex flex-col gap-2 w-full min-h-[100px] mt-[12px] items-start">
              <h3
                className="text-[#27272A] text-lg sm:text-xl"
                style={{
                  fontFamily: "SF Pro",
                  fontWeight: 500,
                  lineHeight: "1.1",
                  letterSpacing: "-0.4px",
                }}
              >
                On-Chain Risk & Automation
              </h3>
              <p
                className="text-[#71717A] text-sm"
                style={{
                  fontFamily: "SF Pro",
                  fontWeight: 500,
                  lineHeight: "1.29",
                  letterSpacing: "-0.136082px",
                }}
              >
                Real-time collateral checks, automatic cancellation, and deterministic expiry logic.
              </p>
            </div>

            {/* Visual Container */}
          </div>

          {/* Card 3 - Pre-Signed Settlements */}
          <div
            className="relative flex flex-col justify-start items-start p-6 sm:p-9 gap-6 sm:gap-8 w-full h-full rounded-[16px] sm:rounded-[20px] overflow-hidden"
            style={{
              minHeight: "300px",
              background: "#FFFFFF",
              boxShadow: "0px 0px 0px 4px rgba(218, 221, 227, 0.3)",
              border: "1px solid #DADDE3",
            }}
          >
            {/* Background Pattern */}
            <div className="relative w-full flex-1 flex flex-col justify-center items-center">
              {/* Gradient Mask Overlay */}
              <div className="absolute inset-0 pointer-events-none" />

              {/* Card Image */}
              <Image
                src="/sfv3.png"
                alt="Pre-Signed Settlements"
                width={400}
                height={300}
                className="w-full h-full object-contain min-h-[180px]"
              />
            </div>
            {/* Text Content */}
            <div className="relative z-10 flex flex-col gap-2 w-full min-h-[100px] mt-[12px] items-start">
              <h3
                className="text-[#27272A] text-lg sm:text-xl"
                style={{
                  fontFamily: "SF Pro",
                  fontWeight: 500,
                  lineHeight: "1.1",
                  letterSpacing: "-0.4px",
                }}
              >
                Pre-Signed Settlement
              </h3>
              <p
                className="text-[#71717A] text-sm"
                style={{
                  fontFamily: "SF Pro",
                  fontWeight: 500,
                  lineHeight: "1.29",
                  letterSpacing: "-0.136082px",
                }}
              >
                Guaranteed outcomes for every financing agreement, verified by cross-chain proofs.
              </p>
            </div>

            {/* Visual Container */}
          </div>
        </div>
      </div>
    </section>
  );
};
