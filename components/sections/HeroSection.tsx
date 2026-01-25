"use client";

import React from "react";
import { useRef } from "react";
import Image from "next/image";
import { useBreakpoint } from "../../hooks/use-breakpoint";
import styles from "../hero/hero.module.css";

export const HeroSection = (): JSX.Element => {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const { isMobile } = useBreakpoint();

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{
        width: '100%',
        height: '100vh',
        background: '#EEE8E2',
        borderRadius: '0px 0px 32px 32px',
        boxShadow: '0px 4px 8px 1px rgba(0, 0, 0, 0.15)',
      }}
    >
      {/* Timeline element for ScrollTrigger */}
      <div ref={timelineRef} className={styles.timeline} />

      {/* Static frame image - pushed 100px down, 95% width, centered */}
      {!isMobile && (
        <div
          className="absolute"
          style={{
            top: '0',
            left: '50%',
            width: '100vw',
            height: '100vh',
            zIndex: 0,
            transform: 'translateX(-50%)',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image
            src="/desktop-30/frame_002.png"
            alt="abstract bitcoin financing layer showing non-custodial liquidity flow"
            fill
            className="object-cover w-screen h-screen"
            priority
          />
        </div>
      )}

      {/* Bitcoin Image - Centered */}

      {/* Top Navigation Bar - Absolute positioned at top, responsive */}
      <nav
        className="absolute z-10 left-1/2 -translate-x-1/2 w-[calc(100%-24px)] sm:w-[calc(100%-48px)] max-w-[440px] top-3 sm:top-[23px]"
      >
        <div
          className="flex justify-center items-center w-full min-h-[44px] sm:min-h-[50px] h-auto rounded-[72px] backdrop-blur-[6px] py-1.5 sm:py-0"
          style={{
            background: "#27272A",
            border: "1px solid #404040",
            padding: "6px 8px 6px 12px",
          }}
        >
          <div className="flex justify-between items-center w-full px-2 sm:px-5 gap-2">
            {/* Logo & Nav Links */}
            <div className="flex items-center gap-4 sm:gap-5 md:gap-9 min-w-0">
              <Image
                src="/logo.png"
                alt="logo-image"
                width={36}
                height={36}
                className="object-contain flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9"
              />
              {/* Nav Links - hidden on very small, shown from sm */}
              <div className="hidden sm:flex items-center gap-3 md:gap-5">
                <a
                  href="#docs"
                  className="text-white transition-colors text-sm md:text-base whitespace-nowrap"
                  style={{
                    fontFamily: "SF Pro",
                    fontWeight: 500,
                    lineHeight: "18px",
                    letterSpacing: "-0.15px",
                  }}
                >
                  Docs
                </a>
                <a
                  href="#whitepaper"
                  className="text-white transition-colors text-sm md:text-base whitespace-nowrap"
                  style={{
                    fontFamily: "SF Pro",
                    fontWeight: 500,
                    lineHeight: "18px",
                    letterSpacing: "-0.15px",
                  }}
                >
                  Whitepaper
                </a>
              </div>
            </div>
            <button
              onClick={() =>
                window.open("https://app.liquidsat.com/", "_blank")
              }
              className="flex justify-center items-center rounded-[30px] px-3 py-2 sm:px-4 sm:py-2.5 text-white whitespace-nowrap flex-shrink-0 text-sm sm:text-base"
              style={{
                background: "linear-gradient(100.23deg, rgba(254, 215, 170, 0.2) 22.17%, rgba(253, 186, 116, 0.2) 74.43%, rgba(251, 146, 60, 0.2) 100%)",
                border: "1px solid #C5C5C5",
                fontFamily: "SF Pro",
                fontWeight: 590,
                lineHeight: "20px",
                letterSpacing: "-0.15px",
              }}
            >
              Join Waitlist
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content - Positioned just below navigation header, responsive */}
      <div
        className="absolute z-10 flex flex-col items-center left-1/2 -translate-x-1/2 w-[90%] max-w-[1027px] top-14 sm:top-16 md:top-[75px] px-0 py-4 sm:py-6 gap-6 sm:gap-8 md:gap-[42px]"
      >
        <div className="flex flex-col items-center gap-3 sm:gap-4 w-full">
          <h1
            className="text-center w-full font-[500] tracking-[-0.4px] text-[#27272A] m-0"
            style={{
              fontFamily: "SF Pro Display",
              fontSize: "clamp(1.5rem, 5vw, 48px)",
              lineHeight: "1.2",
            }}
          >
            Native Bitcoin Financing, Reimagined
            <br />
            Non-Custodial, Instant, and Bridge-Free
          </h1>
          <p
            className="text-center w-full text-sm sm:text-base md:text-lg"
            style={{
              fontFamily: "SF Pro",
              fontWeight: 400,
              lineHeight: "1.4",
              letterSpacing: "-0.4px",
              color: "#71717A",
              margin: 0,
            }}
          >
            Borrow stablecoins or earn yield with your Bitcoin — without wrapping, giving up custody, or relying on intermediaries.
          </p>
        </div>
        <div className="flex flex-row flex-wrap items-center justify-center gap-4 sm:gap-7">
          <button
            onClick={() => window.open("https://app.liquidsat.com/", "_blank")}
            className="flex justify-center items-center rounded-[30px] min-w-[120px] sm:w-[129px] h-11 sm:h-12"
            style={{
              background: "#F5F5ED",
              border: "1px solid #C5C5C5",
              fontFamily: "SF Pro",
              fontWeight: 590,
              fontSize: "14px",
              lineHeight: "20px",
              color: "#27272A",
            }}
          >
            Join Waitlist
          </button>
          <button
            onClick={() => window.open("https://app.liquidsat.com/", "_blank")}
            className="flex justify-center items-center rounded-[30px] min-w-[120px] sm:w-[126px] h-11 sm:h-12 text-white text-sm sm:text-base"
            style={{
              background: "linear-gradient(104.37deg, #FB923C -6.75%, #F96A27 89.65%)",
              boxShadow: "inset 0px 2px 2px rgba(0, 0, 0, 0.25)",
              fontFamily: "SF Pro",
              fontWeight: 590,
              lineHeight: "20px",
            }}
          >
            Launch App
          </button>
        </div>
      </div>

      {/* Bottom Description Text - Absolute positioned at bottom, responsive */}
      <p
        className="absolute z-10 text-center left-1/2 -translate-x-1/2 w-[90%] max-w-[862px] bottom-4 sm:bottom-5 text-xs sm:text-sm md:text-base px-2"
        style={{
          fontFamily: "SF Pro",
          fontWeight: 400,
          lineHeight: "1.5",
          letterSpacing: "-0.4px",
          color: "#71717A",
          margin: 0,
        }}
      >
        19.9 Million BTC Lie Idle — Let&apos;s Change That by bringing liquidity to native Bitcoin — bridging ecosystems without bridges.
      </p>

      {/* Sequence animation controller - DISABLED FOR TESTING
          When re-enabling: add canvasRef, sequenceConfig, and <canvas ref={canvasRef} /> */}
    </section>
  );
};
