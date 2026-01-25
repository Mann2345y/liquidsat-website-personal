"use client";

import React, { useState } from "react";
import Image from "next/image";

const TAB_CONTENT = {
  borrowers: {
    h3: "Access Bitcoin-backed liquidity without selling or wrapping",
    subheadline:
      "Get stablecoins instantly by locking BTC on Bitcoin — with full ownership, full control, and zero custody risk.",
    benefits: [
      "Get liquidity instantly or choose custom financing terms",
      "Keep full Bitcoin ownership and custody",
      "Up to 70% LTV with transparent rates",
    ],
    ctaText: "→ Start Borrowing",
  },
  lenders: {
    h3: "Earn Yield from Bitcoin-secured financing, without locking capital in contracts",
    subheadline:
      "Lend stablecoins directly from your wallet to borrowers or financing pools, and earn a predictable BTC-backed yield.",
    benefits: [
      "Earn yield secured by native Bitcoin collateral",
      "Lend without pooled custody or locked contracts",
      "Transparent, automated on-chain settlement",
    ],
    ctaText: "→ Start Lending",
  },
} as const;

export const BorrowLendSection = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<"borrowers" | "lenders">(
    "borrowers"
  );
  const content = TAB_CONTENT[activeTab];

  return (
    <section
      className="relative w-full flex flex-col items-center p-5 sm:py-12 md:py-16"
      style={{
        minHeight: "auto",
        backgroundColor: "#FFFFFF",
      }}
    >
      <style>{`
        /* Responsive card styling - no transforms on mobile */
        @media (min-width: 768px) {
          .card-tilted-1 {
            transform: matrix(1, 0.01, -0.02, 1, 0, 0);
            margin: 0 -52px;
          }
          .card-tilted-2 {
            transform: matrix(0.99, 0.12, -0.1, 0.99, 0, 0);
            margin: 0 -52px;
          }
          .card-tilted-3 {
            transform: matrix(1, 0.02, -0.04, 1, 0, 0);
          }
        }
      `}</style>
      {/* Background Blur Effect */}
      <div
        className="absolute hidden md:block"
        style={{
          width: "100vw",
          height: "790px",
          left: "-268.53px",
          top: "378px",
          background: "#FBCC9B",
          filter: "blur(200px)",
        }}
      />

      {/* Main Content Card */}
      <div
        className="relative rounded-[12px] sm:rounded-[16px] md:rounded-[20px] overflow-hidden w-full mx-4 sm:mx-6 md:mx-8 lg:mx-auto"
        style={{
          maxWidth: "1302px",
          minHeight: "auto",
          background: "#27272A",
          boxShadow: "0px 0px 0px 6px rgba(18, 18, 20, 0.07)",
        }}
      >
        {/* Top Section - Two Cards Side by Side */}
        <div
          className="flex flex-col items-start w-full px-4 sm:px-8 md:px-12 lg:px-[86px]"
          style={{
            paddingTop: "32px",
            gap: "24px",
          }}
        >
          {/* Header Section */}
          <div
            className="flex flex-col lg:flex-row items-start w-full justify-between"
            style={{
              gap: "24px",
            }}
          >
            {/* Left Title */}
            <h2
              className="text-white flex items-center flex-1 text-2xl sm:text-3xl md:text-[36px]"
              style={{
                maxWidth: "509px",
                fontFamily: "SF Pro Display",
                fontWeight: 500,
                lineHeight: "1.17",
                letterSpacing: "-0.4px",
              }}
            >
              One Bitcoin Financing Layer. Multiple Paths to Productivity.
            </h2>

            {/* Right Description + Button */}
            <div
              className="flex flex-col items-start flex-1"
              style={{
                maxWidth: "403px",
                gap: "16px",
              }}
            >
              <p
                className="text-white flex items-center text-base sm:text-lg md:text-xl"
                style={{
                  fontFamily: "SF Pro",
                  fontWeight: 400,
                  lineHeight: "1.3",
                  letterSpacing: "-0.4px",
                }}
              >
                Both modes use the same Bitcoin-native collateral and settlement engine — only execution differs.
              </p>
              <button
                className="flex flex-row justify-center items-center rounded-[30px]"
                style={{
                  width: "149px",
                  height: "48px",
                  padding: "14px 16px",
                  gap: "8px",
                  background:
                    "linear-gradient(100.23deg, rgba(254, 215, 170, 0.2) 22.17%, rgba(253, 186, 116, 0.2) 74.43%, rgba(251, 146, 60, 0.2) 100%)",
                  border: "1px solid #C5C5C5",
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
                  Download Now
                </span>
              </button>
            </div>
          </div>

          {/* Two Financing Mode Cards - stack on mobile/tablet, side-by-side on lg+ */}
          <div className="flex flex-col lg:flex-row items-stretch justify-center w-full gap-4 sm:gap-6">
            {[
              {
                title: "Instant Markets (Pool-Based)",
                subtitle: "Market Based Financing",
                image: "/food.svg",
                features: [
                  "Instant execution at pre-defined rates",
                  "Instant execution at pre-defined LTV",
                  "Instant execution at pre-defined duration",
                ],
                bestForLabel: "Passive Lenders",
                bestForIcon: "shield",
              },
              {
                title: "Custom Agreements",
                subtitle: "Personalized Loans. Direct Agreement Between Parties.",
                image: "/contract.svg",
                features: [
                  "Negotiate custom interest rates",
                  "Negotiate custom durations",
                  "Direct wallet-to-wallet settlement",
                ],
                bestForLabel: "Active Lenders or Borrowers",
                bestForIcon: "active",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="relative flex-1 min-w-0 overflow-hidden flex flex-col rounded-[16px] sm:rounded-[20px]"
                style={{
                  maxWidth: "556px",
                  minHeight: "280px",
                  background: "linear-gradient(225.7deg, #57432F 0%, #27272A 74.69%)",
                  boxShadow: "0px 0px 0px 6px rgba(255, 255, 255, 0.07)",
                  border: "1px solid #FFFFFF",
                  boxSizing: "border-box",
                }}
              >
                {/* Blur accents */}
                <div
                  className="absolute pointer-events-none opacity-60"
                  style={{
                    width: "200px",
                    height: "240px",
                    right: "-40px",
                    top: "-80px",
                    filter: "blur(9px)",
                    transform: "rotate(21deg)",
                    background: "linear-gradient(180deg, rgba(253, 186, 116, 0.2) 0%, rgba(253, 186, 116, 0) 100%)",
                  }}
                />
                {/* Top row: Image LEFT, Content RIGHT */}
                <div className="relative z-10 flex flex-col sm:flex-row flex-1 min-h-0">
                  {/* Left: Image — ~28–32% width */}
                  {card.image && (
                    <div
                      className="flex-shrink-0 flex items-center justify-center w-full sm:w-[30%] min-h-[140px] sm:min-h-0 p-4 sm:p-5 md:p-6"
                      style={{
                        filter: "drop-shadow(0 4px 24px rgba(253, 186, 116, 0.35)) drop-shadow(-2px -2px 12px rgba(255, 255, 255, 0.18))",
                      }}
                    >
                      <Image
                        src={card.image}
                        alt=""
                        width={140}
                        height={140}
                        className="object-contain w-28 h-28 sm:w-32 sm:h-32 md:w-[130px] md:h-[130px]"
                        style={{
                          filter: "invert(0.78) sepia(0.38) saturate(3.2) hue-rotate(-8deg) brightness(1.08) contrast(1.08)",
                          opacity: 0.96,
                        }}
                      />
                    </div>
                  )}
                  {/* Right: Title, subtitle, features */}
                  <div
                    className="flex flex-col flex-1 min-w-0 px-4 pb-3 sm:px-5 sm:pb-4 md:px-6 md:pb-5 pt-0 sm:pt-5 md:pt-6"
                    style={{ gap: "12px", justifyContent: "flex-start" }}
                  >
                    <div className="flex flex-col" style={{ gap: "2px" }}>
                      <span
                        style={{
                          fontFamily: "SF Pro, system-ui, sans-serif",
                          fontWeight: 600,
                          fontSize: "17px",
                          lineHeight: "1.3",
                          letterSpacing: "-0.4px",
                          color: "#FFFFFF",
                        }}
                      >
                        {card.title}
                      </span>
                      <span
                        style={{
                          fontFamily: "SF Pro, system-ui, sans-serif",
                          fontWeight: 500,
                          fontSize: "13px",
                          lineHeight: "1.35",
                          letterSpacing: "-0.136082px",
                          color: "rgba(255, 255, 255, 0.75)",
                        }}
                      >
                        {card.subtitle}
                      </span>
                    </div>
                    {/* Features with checkmarks */}
                    <ul className="flex flex-col" style={{ gap: "6px", listStyle: "none", padding: 0, margin: 0 }}>
                      {card.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-2"
                          style={{
                            fontFamily: "SF Pro, system-ui, sans-serif",
                            fontWeight: 500,
                            fontSize: "14px",
                            lineHeight: "1.5",
                            letterSpacing: "-0.4px",
                            color: "#FFFFFF",
                          }}
                        >
                          <span className="flex-shrink-0 mt-0.5 text-white" aria-hidden>✓</span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {/* BEST FOR — full-width, recessed, distinct styling */}
                <div
                  className="relative z-10 w-full flex flex-col gap-2 px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4"
                  style={{
                    background: "rgba(0, 0, 0, 0.25)",
                    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "SF Pro, system-ui, sans-serif",
                      fontWeight: 600,
                      fontSize: "11px",
                      lineHeight: "1.3",
                      letterSpacing: "0.08em",
                      color: "rgba(255, 255, 255, 0.85)",
                      textTransform: "uppercase",
                    }}
                  >
                    BEST FOR
                  </span>
                  <div className="flex items-center gap-2">
                    {card.bestForIcon === "shield" ? (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="flex-shrink-0" style={{ color: "#FDBA74" }} aria-hidden>
                        <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                        <text x="12" y="15" textAnchor="middle" fill="currentColor" fontSize="8" fontWeight="bold">₿</text>
                      </svg>
                    ) : (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="flex-shrink-0" style={{ color: "#FDBA74" }} aria-hidden>
                        <circle cx="9" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
                        <circle cx="15" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
                        <path d="M7 18v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    )}
                    <span
                      style={{
                        fontFamily: "SF Pro, system-ui, sans-serif",
                        fontWeight: 500,
                        fontSize: "13px",
                        lineHeight: "1.35",
                        letterSpacing: "-0.136082px",
                        color: "rgba(255, 255, 255, 0.9)",
                      }}
                    >
                      {card.bestForLabel}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section - Borrowers/Lenders Toggle and Cards */}
        <div
          className="flex flex-col items-center w-full px-4 sm:px-8 md:px-12 lg:px-[86px]"
          style={{
            marginTop: "60px",
            gap: "40px",
          }}
        >
          {/* Tab Toggle and Description */}
          <div
            className="flex flex-col items-center w-full"
            style={{
              maxWidth: "819px",
              gap: "40px",
            }}
          >
            {/* Tab Toggle */}
            <div
              className="flex flex-row items-center rounded-[30px] w-full sm:w-auto"
              style={{
                maxWidth: "359px",
                height: "56px",
                padding: "4px",
                gap: "4px",
                background: "rgba(245, 245, 237, 0.1)",
              }}
            >
              <button
                onClick={() => setActiveTab("borrowers")}
                className={`flex flex-row justify-center items-center rounded-[30px] transition-all duration-300 flex-1 ${activeTab === "borrowers" ? "border border-[#C5C5C5]" : ""
                  }`}
                style={{
                  height: "48px",
                  padding: "14px 16px",
                  background:
                    activeTab === "borrowers"
                      ? "linear-gradient(100.23deg, rgba(254, 215, 170, 0.2) 22.17%, rgba(253, 186, 116, 0.2) 74.43%, rgba(251, 146, 60, 0.2) 100%)"
                      : "transparent",
                }}
              >
                <span
                  className="text-white text-xs sm:text-sm whitespace-nowrap"
                  style={{
                    fontFamily: "SF Pro",
                    fontWeight: 590,
                    lineHeight: "18px",
                  }}
                >
                  For Borrowers
                </span>
              </button>
              <button
                onClick={() => setActiveTab("lenders")}
                className={`flex flex-row justify-center items-center rounded-[30px] transition-all duration-300 flex-1 ${activeTab === "lenders" ? "border border-[#C5C5C5]" : ""
                  }`}
                style={{
                  height: "48px",
                  padding: "14px 16px",
                  background:
                    activeTab === "lenders"
                      ? "linear-gradient(100.23deg, rgba(254, 215, 170, 0.2) 22.17%, rgba(253, 186, 116, 0.2) 74.43%, rgba(251, 146, 60, 0.2) 100%)"
                      : "transparent",
                }}
              >
                <span
                  className="text-white text-xs sm:text-sm whitespace-nowrap"
                  style={{
                    fontFamily: "SF Pro",
                    fontWeight: 500,
                    lineHeight: "18px",
                  }}
                >
                  For Lenders
                </span>
              </button>
            </div>

            {/* Title and Description */}
            <div
              className="flex flex-col items-center w-full"
              style={{
                gap: "16px",
              }}
            >
              <h3
                className="text-white text-center text-2xl sm:text-3xl md:text-[36px]"
                style={{
                  fontFamily: "SF Pro Display",
                  fontWeight: 500,
                  lineHeight: "1.17",
                }}
              >
                {content.h3}
              </h3>
              <p
                className="text-white text-center text-base sm:text-lg md:text-xl"
                style={{
                  fontFamily: "SF Pro",
                  fontWeight: 400,
                  lineHeight: "1.3",
                  letterSpacing: "-0.4px",
                }}
              >
                {content.subheadline}
              </p>
            </div>
          </div>

          {/* Three Tilted Cards */}
          <div className="flex flex-col md:flex-row items-center w-full gap-4 md:gap-0 min-h-auto md:h-[247px]">
            {/* Card 1 */}
            <div
              className="relative flex flex-col justify-end items-start rounded-[24px] w-full grow card-tilted-1 p-4 sm:p-5 md:p-7"
              style={{
                minHeight: "180px",
                background: "rgba(0, 0, 0, 0.2)",
                boxShadow: "-100px 1px 72px rgba(250, 230, 188, 0.1)",
                border: "1px solid #27272A",
              }}
            >
              {/* Visual:mask-group */}
              <div
                className="absolute"
                style={{
                  height: "117.33px",
                  left: "28.67px",
                  right: "12.4px",
                  bottom: "75.52px",
                }}
              >
                {/* Container 1 */}
                <div
                  className="absolute"
                  style={{
                    width: "59.4px",
                    height: "59.42px",
                    left: "-0.27px",
                    top: "calc(50% - 59.42px/2 - 0.51px)",
                    borderRadius: "16px",
                  }}
                >
                  <Image
                    src="/l1i1.png"
                    alt="Avatar 1"
                    width={100}
                    height={100}
                    style={{
                      position: "absolute",
                      left: "5.89px",
                      right: "-5.04px",
                      top: "-1.59px",
                      bottom: "2.41px",
                      borderRadius: "16px",
                    }}
                  />
                  {/* Border */}
                  <div
                    style={{
                      boxSizing: "border-box",
                      position: "absolute",
                      left: "0%",
                      right: "0.03%",
                      top: "0%",
                      bottom: "-0.02%",
                      border: "2px solid rgba(255, 255, 255, 0.3)",
                      borderRadius: "16px",
                      pointerEvents: "none",
                    }}
                  />
                </div>

                {/* Overlay+Shadow */}
                <div
                  className="absolute"
                  style={{
                    width: "58.61px",
                    height: "58.55px",
                    left: "65.05px",
                    top: "calc(50% - 58.55px/2 - 0.62px)",
                    background: "rgba(255, 255, 255, 0.002)",
                    boxShadow:
                      "-0.78363px 0px 0.78363px -0.535714px rgba(0, 0, 0, 0.333), -1.91965px 0px 1.91965px -1.07143px rgba(0, 0, 0, 0.325), -3.63745px 0px 3.63745px -1.60714px rgba(0, 0, 0, 0.318), -6.35004px 0px 6.35004px -2.14286px rgba(0, 0, 0, 0.3), -11.0519px 0px 11.0519px -2.67857px rgba(0, 0, 0, 0.275), -20.2428px 0px 20.2428px -3.21429px rgba(0, 0, 0, 0.224), -40px 0px 40px -3.75px rgba(0, 0, 0, 0.114)",
                    borderRadius: "16px",
                  }}
                >
                  <Image
                    src="/l1i2.png"
                    alt="Avatar 2"
                    width={100}
                    height={100}
                    style={{
                      position: "absolute",
                      left: "0px",
                      right: "-0.03px",
                      top: "0px",
                      bottom: "0.03px",
                      borderRadius: "16px",
                    }}
                  />
                  {/* Border */}
                  <div
                    style={{
                      boxSizing: "border-box",
                      position: "absolute",
                      left: "0%",
                      right: "-0.06%",
                      top: "0%",
                      bottom: "0.05%",
                      border: "2px solid rgba(255, 255, 255, 0.3)",
                      borderRadius: "16px",
                      pointerEvents: "none",
                    }}
                  />
                </div>
              </div>

              {/* Text */}
              <div
                className="absolute flex flex-col items-start"
                style={{
                  left: "33.16px",
                  right: "11.4px",
                  bottom: "23.54px",
                }}
              >
                <p
                  className="text-white flex items-center mr-36"
                  style={{
                    fontFamily: "SF Pro",
                    fontWeight: 500,
                    fontSize: "16px",
                    lineHeight: "22px",
                    letterSpacing: "-0.302404px",
                  }}
                >
                  {content.benefits[0]}
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="relative flex flex-col justify-end items-start rounded-[24px] w-full grow card-tilted-2 px-4 sm:px-5 md:px-7 py-3 sm:py-4 md:py-5 gap-2"
              style={{
                minHeight: "180px",
                background: "rgba(0, 0, 0, 0.2)",
                boxShadow: "-100px 1px 72px rgba(250, 230, 188, 0.1)",
                border: "1px solid #27272A",
              }}
            >
              {/* Visual:mask-group */}
              <div
                className="w-full max-w-[359px]"
                style={{
                  height: "115.71px",
                  position: "relative",
                }}
              >
                {/* Container 1 */}
                <div
                  className="absolute"
                  style={{
                    width: "58.59px",
                    height: "58.57px",
                    left: "2.97px",
                    top: "calc(50% - 58.57px/2 - 0.56px)",
                    borderRadius: "16px",
                  }}
                >
                  <Image
                    src="/l2i1.png"
                    alt="Avatar 1"
                    width={100}
                    height={100}
                    style={{
                      position: "absolute",
                      left: "0px",
                      right: "-0.01px",
                      top: "0px",
                      bottom: "0px",
                      borderRadius: "16px",
                    }}
                  />
                  {/* Border */}
                  <div
                    style={{
                      boxSizing: "border-box",
                      position: "absolute",
                      left: "0%",
                      right: "-0.02%",
                      top: "0%",
                      bottom: "0%",
                      border: "2px solid rgba(255, 255, 255, 0.3)",
                      borderRadius: "16px",
                      pointerEvents: "none",
                    }}
                  />
                </div>

                {/* Overlay+Shadow 2 */}
                <div
                  className="absolute"
                  style={{
                    width: "58.55px",
                    height: "58.61px",
                    left: "62.67px",
                    top: "calc(50% - 58.61px/2 + 6.58px)",
                    background: "rgba(255, 255, 255, 0.002)",
                    boxShadow:
                      "-0.78363px 0px 0.78363px -0.535714px rgba(0, 0, 0, 0.333), -1.91965px 0px 1.91965px -1.07143px rgba(0, 0, 0, 0.325), -3.63745px 0px 3.63745px -1.60714px rgba(0, 0, 0, 0.318), -6.35004px 0px 6.35004px -2.14286px rgba(0, 0, 0, 0.3), -11.0519px 0px 11.0519px -2.67857px rgba(0, 0, 0, 0.275), -20.2428px 0px 20.2428px -3.21429px rgba(0, 0, 0, 0.224), -40px 0px 40px -3.75px rgba(0, 0, 0, 0.114)",
                    borderRadius: "16px",
                  }}
                >
                  <Image
                    src="/l2i2.png"
                    alt="Avatar 2"
                    width={100}
                    height={100}
                    style={{
                      position: "absolute",
                      left: "0px",
                      right: "0.03px",
                      top: "0px",
                      bottom: "-0.04px",
                      borderRadius: "16px",
                    }}
                  />
                  {/* Border */}
                  <div
                    style={{
                      boxSizing: "border-box",
                      position: "absolute",
                      left: "0%",
                      right: "0.04%",
                      top: "0%",
                      bottom: "-0.06%",
                      border: "2px solid rgba(255, 255, 255, 0.3)",
                      borderRadius: "16px",
                      pointerEvents: "none",
                    }}
                  />
                </div>

                {/* Overlay+Shadow 3 */}
                <div
                  className="absolute"
                  style={{
                    width: "58.61px",
                    height: "58.55px",
                    left: "119.1px",
                    top: "calc(50% - 58.55px/2 + 10.45px)",
                    background: "rgba(255, 255, 255, 0.002)",
                    boxShadow:
                      "-0.78363px 0px 0.78363px -0.535714px rgba(0, 0, 0, 0.333), -1.91965px 0px 1.91965px -1.07143px rgba(0, 0, 0, 0.325), -3.63745px 0px 3.63745px -1.60714px rgba(0, 0, 0, 0.318), -6.35004px 0px 6.35004px -2.14286px rgba(0, 0, 0, 0.3), -11.0519px 0px 11.0519px -2.67857px rgba(0, 0, 0, 0.275), -20.2428px 0px 20.2428px -3.21429px rgba(0, 0, 0, 0.224), -40px 0px 40px -3.75px rgba(0, 0, 0, 0.114)",
                    borderRadius: "16px",
                  }}
                >
                  <Image
                    src="/l2i3.png"
                    alt="Avatar 3"
                    width={100}
                    height={100}
                    style={{
                      position: "absolute",
                      left: "0px",
                      right: "-0.03px",
                      top: "0px",
                      bottom: "0.02px",
                      borderRadius: "16px",
                    }}
                  />
                  {/* Border */}
                  <div
                    style={{
                      boxSizing: "border-box",
                      position: "absolute",
                      left: "0%",
                      right: "-0.06%",
                      top: "0%",
                      bottom: "0.03%",
                      border: "2px solid rgba(255, 255, 255, 0.3)",
                      borderRadius: "16px",
                      pointerEvents: "none",
                    }}
                  />
                </div>
              </div>

              {/* Text */}
              <div
                className="flex flex-col items-start w-full max-w-[359px]"
              >
                <p
                  className="text-white flex items-center"
                  style={{
                    fontFamily: "SF Pro",
                    fontWeight: 500,
                    fontSize: "16px",
                    lineHeight: "22px",
                    letterSpacing: "-0.302404px",
                  }}
                >
                  {content.benefits[1]}
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div
              className="relative flex flex-col justify-end items-start rounded-[24px] w-full grow card-tilted-3 px-4 sm:px-5 md:px-7 py-3 sm:py-4 md:py-5 gap-2"
              style={{
                minHeight: "180px",
                background: "rgba(0, 0, 0, 0.2)",
                boxShadow: "-100px 1px 72px rgba(250, 230, 188, 0.1)",
                border: "1px solid #27272A",
              }}
            >
              {/* Visual:mask-group */}
              <div
                className="w-full max-w-[308px]"
                style={{
                  height: "114px",
                  position: "relative",
                }}
              >
                {/* Container */}
                <div
                  style={{
                    width: "57.71px",
                    height: "57.73px",
                    borderRadius: "16px",
                    position: "relative",
                  }}
                >
                  <Image
                    src="/l3i1.png"
                    alt="Avatar"
                    width={100}
                    height={100}
                    style={{
                      position: "absolute",
                      left: "0px",
                      right: "0.02px",
                      top: "0px",
                      bottom: "-0.02px",
                      borderRadius: "16px",
                    }}
                  />
                  {/* Border */}
                  <div
                    style={{
                      boxSizing: "border-box",
                      position: "absolute",
                      left: "0%",
                      right: "0.03%",
                      top: "0%",
                      bottom: "-0.03%",
                      border: "2px solid rgba(255, 255, 255, 0.3)",
                      borderRadius: "16px",
                      pointerEvents: "none",
                    }}
                  />
                </div>
              </div>

              {/* Text */}
              <div
                className="flex flex-col items-start w-full max-w-[308px]"
              >
                <p
                  className="text-white flex items-center"
                  style={{
                    fontFamily: "SF Pro",
                    fontWeight: 500,
                    fontSize: "16px",
                    lineHeight: "22px",
                    letterSpacing: "-0.302404px",
                  }}
                >
                  {content.benefits[2]}
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <button
            onClick={() => window.open("https://app.liquidsat.com/", "_blank")}
            className="flex flex-row justify-center items-center rounded-[30px] px-6 py-3.5 gap-2 mb-12"
            style={{
              background:
                "linear-gradient(104.37deg, #FB923C -6.75%, #F96A27 89.65%)",
              boxShadow: "inset 0px 2px 2px rgba(0, 0, 0, 0.25)",
            }}
          >
            <span
              className="text-white"
              style={{
                fontFamily: "SF Pro",
                fontWeight: 590,
                fontSize: "16px",
                lineHeight: "20px",
              }}
            >
              {content.ctaText}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
