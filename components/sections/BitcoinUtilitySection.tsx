"use client";

import React from "react";

const PANELS = [
  {
    text: "Deploy BTC-backed liquidity in DeFi — no bridges",
    image: "/Defi Yield_2 1.png",
    alt: "DeFi yield",
  },
  {
    text: "Rebalance portfolios or manage short-term exposure",
    image: "/Trading 1.png",
    alt: "Trading",
  },
  {
    text: "Fund operations, expenses, or settlements",
    image: "/Payments_2 1.png",
    alt: "Payments",
  },
  {
    text: "Access real-world assets using Bitcoin",
    image: "/RWA 1.png",
    alt: "Real-world assets",
  },
] as const;

const TAGLINE =
  "Turn Bitcoin into programmable liquidity, without selling it";

export const BitcoinUtilitySection = (): JSX.Element => {
  return (
    <section
      className="relative flex flex-col items-center justify-center w-full overflow-hidden isolate"
      style={{
        padding: "100px 48px 51px",
        gap: "100px",
        background:
          "radial-gradient(59.83% 45.47% at 53.54% 52.04%, #FBCC9B 36.45%, rgba(255, 255, 255, 0) 100%), linear-gradient(180deg, #F0F0E6 9%, rgba(240, 240, 230, 0) 85%)",
        minHeight: "1113px",
      }}
    >
      {/* BG Image: mask-group — sits at top, z-index 0, behind heading */}
      <div
        className="absolute left-0 right-0 top-[1px] z-0 pointer-events-none"
        style={{ height: 317 }}
      >
        {/* gradient image (or CSS fallback when asset missing) */}
        <div
          className="absolute left-0 right-0 top-0"
          style={{
            bottom: 36,
            background:
              "url('/gradient-1761602001736.png') center / cover no-repeat, linear-gradient(180deg, rgba(251,204,155,0.5) 0%, transparent 100%)",
          }}
        />
      </div>

      {/* Container / Heading 2 — z-index 1 so it sits above BG layers */}
      <div className="relative flex flex-col items-center w-full max-w-[560px] mx-auto z-[1]">
        <h2
          className="w-full text-center max-w-[473px] mx-auto"
          style={{
            fontFamily: "'Figtree', 'SF Pro Display', sans-serif",
            fontWeight: 500,
            fontSize: "clamp(28px, 4vw, 44px)",
            lineHeight: "48px",
            letterSpacing: "-1.76px",
            color: "#121111",
          }}
        >
          From Bitcoin Collateral to Real-World Utility
        </h2>
      </div>

      {/* Mobile: tagline as block (blur behind text) */}
      <div className="relative flex lg:hidden justify-center items-center w-full max-w-[534px] mx-auto px-4 py-8">
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(90%,410px)] h-[100px] rounded-[888px]"
          style={{
            background: "rgba(0, 0, 0, 0.12)",
            filter: "blur(12px)",
          }}
        />
        <p
          className="relative z-10 text-center max-w-[410px]"
          style={{
            fontFamily: "'Geist Mono', 'SF Mono', ui-monospace, monospace",
            fontWeight: 600,
            fontSize: "clamp(16px, 4vw, 20px)",
            lineHeight: "29px",
            letterSpacing: "-0.36px",
            color: "#121111",
          }}
        >
          {TAGLINE}
        </p>
      </div>

      {/* Desktop: 4-panel grid with centered tagline overlay */}
      <div
        className="relative flex flex-col justify-center items-center w-full max-w-[1374px] mx-auto z-[2]"
        style={{
          padding: "1.37px clamp(24px, 17vw, 235px) 0 clamp(24px, 15vw, 202px)",
          minHeight: "600px",
        }}
      >
        {/* 2x2 grid of panels */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-[160px] w-full max-w-[960px]"
          style={{ transform: "matrix(1, 0.02, 0, 1, 0, 0)" }}
        >
          {PANELS.map(({ text, image, alt }, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center text-center gap-6"
            >
              <div
                className="w-full max-w-[380px] h-[220px] md:h-[258px] mx-auto bg-center bg-no-repeat bg-contain"
                style={{
                  backgroundImage: `url('${encodeURI(image)}')`,
                  mixBlendMode: "multiply",
                  maskImage:
                    "radial-gradient(ellipse 90% 90% at 50% 50%, black 50%, transparent 95%)",
                  WebkitMaskImage:
                    "radial-gradient(ellipse 90% 90% at 50% 50%, black 50%, transparent 95%)",
                  maskSize: "100% 100%",
                  maskPosition: "center",
                }}
                role="img"
                aria-label={alt}
              />
              <p
                className="max-w-[420px] mx-auto"
                style={{
                  fontFamily: "'Geist Mono', 'SF Mono', ui-monospace, monospace",
                  fontWeight: 500,
                  fontSize: "18px",
                  lineHeight: "29px",
                  letterSpacing: "-0.36px",
                  color: "#121111",
                }}
              >
                {text}
              </p>
            </div>
          ))}
        </div>

        {/* Desktop: center tagline with blur overlay */}
        <div
          className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[534px] justify-center items-center z-10 px-4 pointer-events-none"
          aria-hidden
        >
          <div
            className="absolute inset-0 rounded-[888px]"
            style={{
              background: "rgba(0, 0, 0, 0.12)",
              filter: "blur(12px)",
            }}
          />
          <p
            className="relative z-10 w-full max-w-[410px] text-center"
            style={{
              fontFamily: "'Geist Mono', 'SF Mono', ui-monospace, monospace",
              fontWeight: 600,
              fontSize: "clamp(18px, 2.2vw, 24px)",
              lineHeight: "29px",
              letterSpacing: "-0.36px",
              color: "#121111",
            }}
          >
            {TAGLINE}
          </p>
        </div>
      </div>
    </section>
  );
};
