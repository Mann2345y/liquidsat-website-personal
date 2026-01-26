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
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{
        width: '100%',
        height: '100vh',
        background: '#EEE8E2',
        borderRadius: '0',
        boxShadow: '0px 4px 8px 1px rgba(0, 0, 0, 0.15)',
      }}
    >
      {/* Timeline element for ScrollTrigger */}
      <div ref={timelineRef} className={styles.timeline} />

      {/* Desktop Background Image */}
      <div
        className="hidden md:block absolute inset-0"
        style={{
          zIndex: 0,
          pointerEvents: 'none',
        }}
      >
        <Image
          src="/frame_003.png"
          alt="abstract bitcoin financing layer showing non-custodial liquidity flow"
          fill
          className="object-cover object-center"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
          priority
          sizes="100vw"
        />
      </div>

      {/* Mobile Background Image */}
      <div
        className="block md:hidden absolute inset-0"
        style={{
          zIndex: 0,
          pointerEvents: 'none',
        }}
      >
        <Image
          src="/mobile-bg.png"
          alt="abstract bitcoin financing layer showing non-custodial liquidity flow"
          fill
          className="object-cover object-center"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
          priority
          sizes="100vw"
        />
      </div>

      {/* Bitcoin Image - Centered */}

      {/* Top Navigation Bar - Absolute positioned at top, responsive */}
      <nav
        className="absolute z-20 left-1/2 -translate-x-1/2 w-[calc(100%-24px)] sm:w-[calc(100%-48px)] md:max-w-[55vw] top-3 sm:top-[23px]"
      >
        <div
          className="relative flex justify-center items-center w-full min-h-[44px] sm:min-h-[50px] h-auto rounded-[72px] backdrop-blur-[6px] py-1.5 sm:py-0"
          style={{
            background: "#27272A",
            border: "1px solid #404040",
            padding: "6px 8px 6px 12px",
          }}
        >
          <div className="flex justify-between items-center w-full px-2 sm:px-5 gap-2">
            {/* Logo */}
            <div className="flex items-center gap-2 sm:gap-2.5 flex-shrink-0">
              <Image
                src="/logo.png"
                alt="LiquidSat logo"
                width={36}
                height={36}
                className="object-contain w-8 h-8 sm:w-9 sm:h-9"
              />
              <span
                className="text-white whitespace-nowrap"
                style={{
                  fontFamily: "SF Pro",
                  fontWeight: 500,
                  fontSize: "16px",
                  lineHeight: "20px",
                  letterSpacing: "-0.15px",
                }}
              >
                Liquidsat
              </span>
            </div>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center justify-center gap-3 lg:gap-5 flex-1">
              <a
                href="https://liquidsat.gitbook.io/liquidsat/documentation"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-colors text-sm lg:text-base whitespace-nowrap hover:opacity-80"
                style={{
                  fontFamily: "SF Pro",
                  fontWeight: 600,
                  lineHeight: "16px",
                  letterSpacing: "-0.15px",
                }}
              >
                Docs
              </a>
              <a
                href="https://drive.google.com/file/d/18FjOfj7A4YcN7VZ1w5aexxAN3JbXFO20/view"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-colors text-sm lg:text-base whitespace-nowrap hover:opacity-80"
                style={{
                  fontFamily: "SF Pro",
                  fontWeight: 400,
                  lineHeight: "16px",
                  letterSpacing: "-0.15px",
                }}
              >
                Whitepaper
              </a>
            </div>

            {/* Desktop CTA Button */}
            <button
              onClick={() =>
                window.open("https://app.liquidsat.com/", "_blank")
              }
              className="hidden md:flex justify-center items-center rounded-[30px] px-3 py-2 sm:px-4 sm:py-2.5 text-white whitespace-nowrap flex-shrink-0 text-sm sm:text-base"
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

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 text-white"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
              />
              <span
                className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""
                  }`}
              />
              <span
                className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
              />
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMenuOpen && (
            <div
              className="md:hidden absolute top-full left-0 right-0 mt-2 rounded-[16px] overflow-hidden transition-all duration-300 z-50"
              style={{
                background: "#27272A",
                border: "1px solid #404040",
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
              }}
            >
              <div className="flex flex-col py-2">
                <a
                  href="https://liquidsat.gitbook.io/liquidsat/documentation"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-3 text-white transition-colors text-sm"
                  style={{
                    fontFamily: "SF Pro",
                    fontWeight: 600,
                    lineHeight: "20px",
                    letterSpacing: "-0.15px",
                  }}
                >
                  Docs
                </a>
                <a
                  href="https://drive.google.com/file/d/18FjOfj7A4YcN7VZ1w5aexxAN3JbXFO20/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-3 text-white transition-colors text-sm"
                  style={{
                    fontFamily: "SF Pro",
                    fontWeight: 400,
                    lineHeight: "20px",
                    letterSpacing: "-0.15px",
                  }}
                >
                  Whitepaper
                </a>
                <button
                  onClick={() => {
                    window.open("https://app.liquidsat.com/", "_blank");
                    setIsMenuOpen(false);
                  }}
                  className="mx-4 my-2 flex justify-center items-center rounded-[30px] px-4 py-3 text-white text-sm"
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
          )}
        </div>
      </nav>

      {/* Main Content - Positioned just below navigation header, responsive */}
      <div
        className={`absolute z-10 flex flex-col items-center left-1/2 -translate-x-1/2 w-[90%] max-w-[1027px] px-0 py-4 sm:py-6 gap-6 sm:gap-8 md:gap-[42px] transition-all duration-300 ${
          isMenuOpen ? "top-32 sm:top-36" : "top-14 sm:top-16 md:top-[75px]"
        }`}
      >
        <div className="flex flex-col items-center gap-3 sm:gap-4 w-full">
          <h1
            className="text-center w-full tracking-[-0.4px] text-[#27272A] m-0 text-[28px] min-[601px]:text-[calc(100vh*56/1080)] hidden md:block"
            style={{
              fontFamily: "SF Pro Display",
              lineHeight: "1.2",
              fontWeight: 500,
              marginTop: "calc(100vh * 48 / 1080)",
            }}
          >
            Native Bitcoin Financing, Reimagined
            <br />
            Non-Custodial, and Bridge-Free
          </h1>
            <h1
            className="text-center w-full tracking-[-0.4px] text-[#27272A] m-0 text-[28px] min-[601px]:text-[calc(100vh*56/1080)] mb-4 block md:hidden"
            style={{
              fontFamily: "SF Pro Display",
              lineHeight: "1.2",
              fontWeight: 500,
              marginTop: "calc(100vh * 48 / 1080)",
            }}
          >
            Native Bitcoin Financing, Reimagined
          
          </h1>
          <p
            className="text-center w-full text-xl"
            style={{
              fontFamily: "SF Pro",
              fontWeight: 500,
              lineHeight: "1.4",
              letterSpacing: "-0.4px",
              color: "#71717A",
              margin: 0,
            }}
          >
Borrow stablecoins or earn yield on your Bitcoin - No Custodian, No Wrapping
          </p>
      
        </div>
            <div className="md:hidden mt-6">
          <Image
            src="/B Front.png"
            alt="Bitcoin financing illustration"
            width={100}
            height={100}
            className="object-contain"
            style={{
              width: '175px',
              height: '175px',
            }}
          />
        </div>
        <div className="flex flex-row flex-wrap items-center justify-center gap-4 sm:gap-7 mt-6 md:mt-0">
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
      {/* 
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
*/}
      {/* Sequence animation controller - DISABLED FOR TESTING
          When re-enabling: add canvasRef, sequenceConfig, and <canvas ref={canvasRef} /> */}
    </section>
  );
};
