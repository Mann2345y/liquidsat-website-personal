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
            src="/desktop-30/frame_001.png"
            alt="abstract bitcoin financing layer showing non-custodial liquidity flow"
            fill
            className="object-cover w-screen h-screen"
            priority
          />
        </div>
      )}

      {/* Bitcoin Image - Centered */}

      {/* Top Navigation Bar - Absolute positioned at top */}
      <nav
        className="absolute z-10"
        style={{
          width: '440px',
          height: '50px',
          left: 'calc(50% - 440px/2)',
          top: '23px',
        }}
      >
        <div
          className="flex justify-center items-center w-full h-full rounded-[72px] backdrop-blur-[6px]"
          style={{
            background: "#27272A",
            border: "1px solid #404040",
            padding: "5px 5px 5px 16px",
          }}
        >
          <div className="flex justify-between items-center w-full px-5">
            {/* Logo & Nav Links */}
            <div className="flex items-center gap-9">
              {/* Logo */}
              <Image
                src="/logo.png"
                alt="logo-image"
                width={36}
                height={36}
                className="object-contain"
              />

              {/* Nav Links */}
              <div className="flex items-center gap-5">
                <a
                  href="#docs"
                  className="text-white transition-colors"
                  style={{
                    fontFamily: "SF Pro",
                    fontWeight: 500,
                    fontSize: "16px",
                    lineHeight: "18px",
                    letterSpacing: "-0.15px",
                  }}
                >
                  Docs
                </a>
                <a
                  href="#whitepaper"
                  className="text-white transition-colors"
                  style={{
                    fontFamily: "SF Pro",
                    fontWeight: 500,
                    fontSize: "16px",
                    lineHeight: "18px",
                    letterSpacing: "-0.15px",
                  }}
                >
                  Whitepaper
                </a>
              </div>
            </div>

            {/* Join Waitlist Button */}
            <button
              onClick={() =>
                window.open("https://app.liquidsat.com/", "_blank")
              }
              className="flex justify-center items-center rounded-[30px] px-4 py-2.5 text-white whitespace-nowrap"
              style={{
                background: "linear-gradient(100.23deg, rgba(254, 215, 170, 0.2) 22.17%, rgba(253, 186, 116, 0.2) 74.43%, rgba(251, 146, 60, 0.2) 100%)",
                border: "1px solid #C5C5C5",
                fontFamily: "SF Pro",
                fontWeight: 590,
                fontSize: "16px",
                lineHeight: "20px",
                letterSpacing: "-0.15px",
              }}
            >
              Join Waitlist
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content - Positioned just below navigation header */}
      <div
        className="absolute z-10 flex flex-col items-center gap-2"
        style={{
          width: '1027px',
          maxWidth: '90%',
          left: '50%',
          transform: 'translateX(-50%)',
          top: '75px',
          padding: '24px 0px',
          gap: '42px',
        }}
      >
        {/* Heading and Description Container */}
        <div className="flex flex-col items-center gap-4 w-full">
          {/* Main Heading */}
          <h1
            className="text-center w-full"
            style={{
              fontFamily: "SF Pro Display",
              fontWeight: 500,
              fontSize: "48px",
              lineHeight: "72px",
              letterSpacing: "-0.4px",
              color: "#27272A",
              margin: 0,
            }}
          >
            Native Bitcoin Financing, Reimagined
            <br />
            Non-Custodial, Instant, and Bridge-Free
          </h1>

          {/* Description */}
          <p
            className="text-center w-full"
            style={{
              fontFamily: "SF Pro",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "1.4",
              letterSpacing: "-0.4px",
              color: "#71717A",
              margin: 0,
            }}
          >
            Borrow stablecoins or earn yield with your Bitcoin — without wrapping, giving up custody, or relying on intermediaries.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-row items-center gap-7">
          {/* Join Waitlist Button */}
          <button
            onClick={() => window.open("https://app.liquidsat.com/", "_blank")}
            className="flex justify-center items-center rounded-[30px]"
            style={{
              width: '129px',
              height: '48px',
              background: "#F5F5ED",
              border: "1px solid #C5C5C5",
              fontFamily: "SF Pro",
              fontWeight: 590,
              fontSize: "16px",
              lineHeight: "20px",
              color: "#27272A",
            }}
          >
            Join Waitlist
          </button>

          {/* Launch App Button */}
          <button
            onClick={() => window.open("https://app.liquidsat.com/", "_blank")}
            className="flex justify-center items-center rounded-[30px] text-white"
            style={{
              width: '126px',
              height: '48px',
              background: "linear-gradient(104.37deg, #FB923C -6.75%, #F96A27 89.65%)",
              boxShadow: "inset 0px 2px 2px rgba(0, 0, 0, 0.25)",
              fontFamily: "SF Pro",
              fontWeight: 590,
              fontSize: "16px",
              lineHeight: "20px",
            }}
          >
            Launch App
          </button>
        </div>
      </div>

      {/* Bottom Description Text - Absolute positioned at bottom */}
      <p
        className="absolute z-10 text-center"
        style={{
          width: '862px',
          maxWidth: '90%',
          left: '50%',
          transform: 'translateX(-50%)',
          bottom: '20px',
          fontFamily: "SF Pro",
          fontWeight: 400,
          fontSize: "16px",
          lineHeight: "29px",
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
