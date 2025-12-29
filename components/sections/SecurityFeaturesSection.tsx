"use client";

import React from "react";

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
            Bitcoin Security by Design.
          </h2>

          {/* Right Description + Button */}
          <div className="flex flex-col items-start gap-4 sm:gap-6 max-w-[403px] flex-1">
            <p
              className="text-[#71717A] text-base sm:text-lg md:text-xl"
              style={{
                fontFamily: "SF Pro",
                fontWeight: 400,
                lineHeight: "1.3",
                letterSpacing: "-0.4px",
              }}
            >
              Every transaction is verifiable; powered by Bitcoin scripts, not
              bridges.
            </p>
            <button
              className="flex flex-row justify-center items-center px-4 py-3.5 rounded-[30px]"
              style={{
                background:
                  "linear-gradient(104.37deg, #FB923C -6.75%, #F96A27 89.65%)",
                boxShadow: "inset 0px 2px 2px rgba(0, 0, 0, 0.25)",
              }}
            >
              <span
                className="text-white text-sm"
                style={{
                  fontFamily: "SF Pro",
                  fontWeight: 590,
                  lineHeight: "18px",
                }}
              >
                Read WhitePaper
              </span>
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="flex flex-col lg:flex-row items-start gap-4 sm:gap-6 w-full">
          {/* Card 1 - Native Script Locks */}
          <div
            className="relative flex flex-col justify-end items-start p-6 sm:p-9 gap-6 sm:gap-8 rounded-[16px] sm:rounded-[20px] flex-1 w-full"
            style={{
              minHeight: "300px",
              background: "#FFFFFF",
              boxShadow: "0px 0px 0px 4px rgba(218, 221, 227, 0.3)",
              border: "1px solid #DADDE3",
            }}
          >
            {/* Visual Container with Gradient Mask */}
            <div className="relative w-full h-full flex-1 flex items-end gap-3">
              {/* Gradient Mask Overlay */}
              <div className="absolute inset-0 pointer-events-none" />

              {/* Card Image */}
              <img
                src="/sfv1.png"
                alt="Native Script Locks"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Text Content */}
            <div className="relative z-10 flex flex-col gap-2 w-full">
              <h3
                className="text-[#27272A] text-lg sm:text-xl"
                style={{
                  fontFamily: "SF Pro",
                  fontWeight: 500,
                  lineHeight: "1.1",
                  letterSpacing: "-0.4px",
                }}
              >
                Native Script Locks
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
                No wrapped assets or bridges. BTC locked natively using
                script-based escrow. Funds move only after approvals and BTC
                lock.
              </p>
            </div>
          </div>

          {/* Cards 2 & 3 Container */}
          <div
            className="relative flex flex-col justify-end items-start p-6 sm:p-9 gap-4 sm:gap-6 flex-1 w-full rounded-[16px] sm:rounded-[20px]"
            style={{
              minHeight: "300px",
              background: "#FFFFFF",
              boxShadow: "0px 0px 0px 4px rgba(218, 221, 227, 0.3)",
              border: "1px solid #DADDE3",
            }}
          >
            {/* Visual Container */}
            <div className="relative w-full h-full flex-1 flex flex-col justify-center items-center gap-2.5">
              {/* Gradient Mask Overlay */}
              <div className="absolute inset-0 pointer-events-none" />

              {/* Card Image */}
              <img
                src="/sfv2.png"
                alt="On-Chain Risk Engine"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Text Content */}
            <div className="relative z-10 flex flex-col gap-2 w-full">
              <h3
                className="text-[#27272A] text-lg sm:text-xl"
                style={{
                  fontFamily: "SF Pro",
                  fontWeight: 500,
                  lineHeight: "1.1",
                  letterSpacing: "-0.4px",
                }}
              >
                On-Chain Risk Engine
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
                Automated monitoring & liquidation. Cancel or reclaim funds if
                loan steps aren't completed.
              </p>
            </div>
          </div>

          {/* Card 3 - Pre-Signed Settlements */}
          <div
            className="relative flex flex-col justify-end items-start p-6 sm:p-9 gap-6 sm:gap-8 flex-1 w-full rounded-[16px] sm:rounded-[20px] overflow-hidden"
            style={{
              minHeight: "300px",
              background: "#FFFFFF",
              boxShadow: "0px 0px 0px 4px rgba(218, 221, 227, 0.3)",
              border: "1px solid #DADDE3",
            }}
          >
            {/* Background Pattern */}

            {/* Visual Container */}
            <div className="relative w-full h-full flex-1 flex flex-col justify-center items-center">
              {/* Gradient Mask Overlay */}
              <div className="absolute inset-0 pointer-events-none" />

              {/* Card Image */}
              <img
                src="/sfv3.png"
                alt="Pre-Signed Settlements"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Text Content */}
            <div className="relative z-10 flex flex-col gap-2 w-full">
              <h3
                className="text-[#27272A] text-lg sm:text-xl"
                style={{
                  fontFamily: "SF Pro",
                  fontWeight: 500,
                  lineHeight: "1.1",
                  letterSpacing: "-0.4px",
                }}
              >
                Pre-Signed Settlements
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
                Deterministic outcomes for every loan. Cross-chain proofs
                without wrapped assets
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
