"use client";

import React from "react";
import Image from "next/image";

export const HeroSection = (): JSX.Element => {
  return (
    <section
      className="relative flex flex-col justify-between items-center min-h-screen overflow-hidden"
      style={{
        backgroundColor: "#F6F2EA",
        backgroundImage: "url(/bgHero.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Top Navigation Bar */}
      <nav
        className="flex justify-center items-center w-full pt-4 sm:pt-6 px-3 sm:px-4"
        style={{ maxWidth: "440px", margin: "0 auto" }}
      >
        <div
          className="flex justify-center items-center w-full rounded-full backdrop-blur-md"
          style={{
            background: "#27272A",
            border: "1px solid #404040",
            padding: "5px 12px 5px 12px",
          }}
        >
          <div className="flex justify-between items-center w-full">
            {/* Logo & Nav Links */}
            <div className="flex items-center gap-3 sm:gap-6 md:gap-9">
              {/* Logo */}
              <Image
                src="/logo.png"
                alt="logo-image"
                width={100}
                height={32}
                className="h-6 sm:h-8 w-auto object-contain"
              />

              {/* Nav Links - hidden on smallest screens */}
              <div className="hidden xs:flex items-center gap-3 sm:gap-5">
                <a
                  href="#docs"
                  className="text-white/65 hover:text-white transition-colors text-sm sm:text-base"
                  style={{
                    fontFamily: "SF Pro",
                    fontWeight: 500,
                    letterSpacing: "-0.15px",
                  }}
                >
                  Docs
                </a>
              </div>
            </div>

            {/* Join Waitlist Button */}
            <button
              onClick={() =>
                window.open("https://app.liquidsat.com/", "_blank")
              }
              className="flex justify-center items-center rounded-full px-2 sm:px-3 py-2 sm:py-2.5 text-white text-xs sm:text-base whitespace-nowrap"
              style={{
                background: "rgba(113, 113, 122, 0.35)",
                boxShadow:
                  "inset 0px -0.48175px 0.48175px -1.25px rgba(0, 0, 0, 0.68), inset 0px -1.83083px 1.83083px -2.5px rgba(0, 0, 0, 0.596), inset 0px -8px 8px -3.75px rgba(0, 0, 0, 0.235)",
                border: "1px solid #292B2B",
                fontFamily: "SF Pro",
                fontWeight: 590,
                letterSpacing: "-0.15px",
              }}
            >
              Join Waitlist
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="flex flex-col items-center gap-5 sm:gap-7 max-w-[1027px] mx-auto px-4">
        {/* Main Heading */}
        <h1
          className="text-center text-3xl sm:text-4xl md:text-5xl"
          style={{
            fontFamily: "SF Pro Display",
            fontWeight: 500,
            lineHeight: "1.2",
            letterSpacing: "-0.4px",
            color: "#27272A",
          }}
        >
          Native Bitcoin Financing, Reimagined
          <br />
          Self-Custodial, Instant, and Bridge-Free
        </h1>

        {/* Subtitle */}
        <div className="flex flex-col items-center gap-3 sm:gap-5">
          <p
            className="text-center text-base sm:text-lg md:text-xl"
            style={{
              fontFamily: "SF Pro",
              fontWeight: 500,
              lineHeight: "1.2",
              letterSpacing: "-0.4px",
              color: "#71717A",
            }}
          >
            Borrow stablecoins or earn yield with your Bitcoin — without
            wrapping, giving up custody, or relying on intermediaries.
          </p>
          <p
            className="text-center text-base sm:text-lg md:text-xl max-w-4xl"
            style={{
              fontFamily: "SF Pro",
              fontWeight: 500,
              lineHeight: "1.2",
              letterSpacing: "-0.4px",
              color: "#71717A",
            }}
          >
            19.9 million BTC lie idle. LiquidSat turns native Bitcoin into a
            productive financial asset — enabling secure, bridge-free liquidity
            for the entire crypto ecosystem.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-7 mt-8 sm:mt-14 w-full sm:w-auto">
          {/* Join Waitlist Button */}
          <button
            onClick={() => window.open("https://app.liquidsat.com/", "_blank")}
            className="flex justify-center items-center rounded-[30px] px-4 py-3.5 text-sm sm:text-base w-full sm:w-auto"
            style={{
              background: "#F5F5ED",
              border: "1px solid #C5C5C5",
              fontFamily: "SF Pro",
              fontWeight: 590,
              color: "#27272A",
            }}
          >
            Join Waitlist →
          </button>

          {/* Launch App Button */}
          <button
            onClick={() => window.open("https://app.liquidsat.com/", "_blank")}
            className="flex justify-center items-center rounded-[30px] px-4 py-3.5 text-sm sm:text-base text-white w-full sm:w-auto"
            style={{
              background:
                "linear-gradient(104.37deg, #FB923C -6.75%, #F96A27 89.65%)",
              boxShadow: "inset 0px 2px 2px rgba(0, 0, 0, 0.25)",
              fontFamily: "SF Pro",
              fontWeight: 590,
            }}
          >
            Launch App
          </button>
        </div>
      </div>

      {/* Bottom Text - Hidden, content moved to subtitle */}
      <div className="pb-8 sm:pb-12" />
    </section>
  );
};
