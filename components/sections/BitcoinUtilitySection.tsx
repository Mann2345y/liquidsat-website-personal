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
      className="relative flex flex-col items-center justify-center w-full overflow-hidden isolate px-4 pt-8 pb-12 sm:px-6 sm:pt-10 sm:pb-16 md:px-10 md:pt-12 md:pb-20 lg:px-12 lg:pt-[50px] lg:pb-[51px] gap-8 sm:gap-10 md:gap-12 lg:gap-[70px] min-h-[600px] sm:min-h-[750px] lg:min-h-[900px] xl:min-h-[1113px]"
      style={{
        background:
          "radial-gradient(ellipse 30% 40% at center, rgba(251, 204, 155, 1) 36%, rgba(251, 204, 155, 0) 100%), #F0F0E6",
      }}
    >
      {/* BG Image: mask-group — sits at top, z-index 0, behind heading */}
      <div
        className="absolute left-0 right-0 top-[1px] z-0 pointer-events-none"
        style={{ height: 250 }}
      >
        {/* gradient image (or CSS fallback when asset missing) */}
        <div
          className="absolute left-0 right-0 top-0"
          style={{
            bottom: 36,
            background:
              "linear-gradient(180deg, rgba(251,204,155,0.5) 0%, transparent 100%)",
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

      {/* Mobile: tagline with black overlay + orange glow */}
      <div className="relative flex lg:hidden justify-center items-center w-full max-w-[534px] mx-auto px-4 py-8">
        {/* Light translucent black overlay+blur (Sigma) */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(100%,380px)] h-[100px] sm:h-[120px] z-[1]"
          style={{
            background: "rgba(0, 0, 0, 0.12)",
            filter: "blur(12px)",
            borderRadius: 888,
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
        {/* 2x2 grid: row 1 = text then image, row 2 = image then text */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-12 lg:gap-x-20 gap-y-10 sm:gap-y-12 md:gap-y-16 lg:gap-y-20 w-full max-w-[1100px]"
        >
          {PANELS.map(({ text, image, alt }, i) => {
            const textFirst = i < 2; // top row: text first; bottom row: image first
            const imageEl = (
              <div
                className="w-full max-w-[380px] h-[220px] md:h-[258px] mx-auto bg-center bg-no-repeat bg-contain flex-shrink-0"
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
            );
            const textEl = (
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
            );
            return (
              <div
                key={i}
                className="flex flex-col items-center justify-center text-center gap-6"
              >
                {textFirst ? (
                  <>
                    {textEl}
                    {imageEl}
                  </>
                ) : (
                  <>
                    {imageEl}
                    {textEl}
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* Desktop: center tagline with black overlay+blur, orange glow */}
        <div
          className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[480px] justify-center items-center z-10 px-4 pointer-events-none"
          aria-hidden
        >
          {/* Light translucent black overlay+blur (Sigma: 534×147, blur 12px, radius 888px) */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[534px] h-[147px] z-[1]"
            style={{
              background: "rgba(0, 0, 0, 0.12)",
              filter: "blur(12px)",
              borderRadius: 888,
            }}
          />
          <p
            className="relative z-[3] w-full max-w-[410px] text-center"
            style={{
              fontFamily: "'Geist Mono', 'SF Mono', ui-monospace, monospace",
              fontWeight: 600,
              fontSize: "24px",
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
