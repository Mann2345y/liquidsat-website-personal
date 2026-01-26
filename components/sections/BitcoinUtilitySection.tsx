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
      className="relative flex flex-col items-center justify-center w-full overflow-hidden isolate gap-0 shrink-0"
    >
      {/* ─── Part 1: Heading ─── */}
      <div
        className="BitcoinUtilitySection-heading w-full flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat shrink-0"
        style={{ height: 180, backgroundImage: "url(/heading-bg.png)" }}
      >
        <div className="flex items-center justify-center w-full max-w-[560px]">
          <h2
            className="flex items-center justify-center text-center w-full max-w-[472px]"
            style={{
              fontFamily: "'SF Pro', -apple-system, BlinkMacSystemFont, sans-serif",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: 44,
              lineHeight: "48px",
              letterSpacing: "-1.76px",
              color: "#121111",
            }}
          >
            From Bitcoin Collateral to
            <br />
            Real-World Utility
          </h2>
        </div>
      </div>

      {/* ─── Part 2: Content (tagline + 4-panel grid) ─── */}
      <div
        className="BitcoinUtilitySection-content w-full flex flex-col items-center gap-8 sm:gap-10 md:gap-12 lg:gap-[70px] bg-cover bg-center bg-no-repeat flex-1 min-h-0 py-8"
        style={{ backgroundImage: "url(/section-bg.png)" }}
      >
        {/* Mobile: tagline with black overlay + orange glow */}
        <div className="relative flex lg:hidden justify-center items-center w-full max-w-[534px] mx-auto">
          {/* Light translucent black overlay+blur (Sigma) */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(100%,340px)] h-[85px] sm:h-[100px] z-[1]"
            style={{
              background: "rgba(0, 0, 0, 0.12)",
              filter: "blur(12px)",
              borderRadius: 888,
            }}
          />
          <p
            className="relative z-10 text-center max-w-[410px]"
            style={{
              fontFamily: "'SF Pro', -apple-system, BlinkMacSystemFont, sans-serif",
              fontWeight: 400,
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
        <div className="relative flex flex-col justify-center items-center w-full max-w-[1374px] mx-auto z-[2]">
          {/* 2x2 grid: row 1 = text then image, row 2 = image then text */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-x-12 md:gap-x-16 lg:gap-x-24 gap-y-4 sm:gap-y-6 md:gap-y-8 w-full max-w-[1100px]"
          >
            {PANELS.map(({ text, image, alt }, i) => {
              const textFirst = i < 2; // top row: text first; bottom row: image first
              const imageEl = (
                <div
                  className="w-full max-w-[360px] h-[200px] md:h-[238px] mx-auto bg-center bg-no-repeat bg-contain flex-shrink-0"
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
                    fontFamily: "'SF Pro', -apple-system, BlinkMacSystemFont, sans-serif",
                    fontWeight: 400,
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
                  className="flex flex-col items-center justify-center text-center gap-2"
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
            className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[480px] justify-center items-center z-10 pointer-events-none"
            aria-hidden
          >
            {/* Light translucent black overlay+blur (Sigma: 534×147, blur 12px, radius 888px) */}
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[120px] z-[1]"
              style={{
                background: "rgba(0, 0, 0, 0.12)",
                filter: "blur(12px)",
                borderRadius: 888,
              }}
            />
            <p
              className="relative z-[3] w-full max-w-[410px] text-center"
              style={{
                fontFamily: "'SF Pro', -apple-system, BlinkMacSystemFont, sans-serif",
                fontWeight: 400,
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
      </div>
    </section>
  );
};
