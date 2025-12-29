"use client";

import React, { useState } from "react";
import Image from "next/image";

export const BorrowLendSection = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<"borrowers" | "lenders">(
    "borrowers"
  );

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
              Borrow or Lend - Two Simple Ways to Use LiquidSat
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
                From advanced tools to seamless navigation, we&apos;ve designed
                everything to elevate your Bitcoin experience.
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

          {/* Two Cards - Peer-to-Pool and Peer-to-Peer */}
          <div className="flex flex-col md:flex-row flex-wrap md:flex-nowrap items-center w-full gap-4 sm:gap-5 min-h-[300px] lg:h-[424px]">
            <Image
              src={"/left-image.png"}
              alt="Peer-to-Pool"
              width={500}
              height={424}
              className="h-full w-full grow object-cover rounded-lg"
            />

            <Image
              src={"/right-image.png"}
              alt="Peer-to-Peer"
              width={500}
              height={424}
              className="h-full w-full grow object-cover rounded-lg"
            />
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
                className={`flex flex-row justify-center items-center rounded-[30px] transition-all duration-300 flex-1 ${
                  activeTab === "borrowers" ? "border border-[#C5C5C5]" : ""
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
                className={`flex flex-row justify-center items-center rounded-[8px] transition-all duration-300 flex-1 ${
                  activeTab === "lenders" ? "border border-[#C5C5C5]" : ""
                }`}
                style={{
                  height: "40px",
                  padding: "10px 16px",
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
              <h2
                className="text-white text-center text-2xl sm:text-3xl md:text-[36px]"
                style={{
                  fontFamily: "SF Pro Display",
                  fontWeight: 500,
                  lineHeight: "1.17",
                }}
              >
                Access Liquidity Without Selling Your Bitcoin
              </h2>
              <p
                className="text-white text-center text-base sm:text-lg md:text-xl"
                style={{
                  fontFamily: "SF Pro",
                  fontWeight: 400,
                  lineHeight: "1.3",
                  letterSpacing: "-0.4px",
                }}
              >
                Lock BTC on Bitcoin, get stablecoins instantly, and stay in
                control from start to finish.
              </p>
            </div>
          </div>

          {/* Three Tilted Cards */}
          <div className="flex flex-col md:flex-row items-center w-full gap-4 md:gap-0 min-h-auto md:h-[247px]">
            {/* Card 1 */}
            <div
              className="relative flex flex-col justify-end items-start rounded-[24px] w-full grow card-tilted-1"
              style={{
                height: "202.01px",
                padding: "28px",
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
                  height: "44px",
                  left: "33.16px",
                  right: "11.4px",
                  bottom: "23.54px",
                }}
              >
                <p
                  className="text-white flex items-center"
                  style={{
                    width: "208px",
                    height: "44px",
                    fontFamily: "SF Pro",
                    fontWeight: 500,
                    fontSize: "16px",
                    lineHeight: "22px",
                    letterSpacing: "-0.302404px",
                  }}
                >
                  Get stablecoins instantly or
                  <br />
                  via custom terms
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="relative flex flex-col justify-end items-start rounded-[24px] w-full grow card-tilted-2"
              style={{
                height: "200.26px",
                padding: "8.77928px 28px 20.5053px",
                gap: "7.94px",
                background: "rgba(0, 0, 0, 0.2)",
                boxShadow: "-100px 1px 72px rgba(250, 230, 188, 0.1)",
                border: "1px solid #27272A",
              }}
            >
              {/* Visual:mask-group */}
              <div
                style={{
                  width: "359.46px",
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
                className="flex flex-col items-start"
                style={{
                  width: "359.46px",
                  height: "47.32px",
                }}
              >
                <p
                  className="text-white flex items-center"
                  style={{
                    width: "195px",
                    height: "44px",
                    fontFamily: "SF Pro",
                    fontWeight: 500,
                    fontSize: "16px",
                    lineHeight: "22px",
                    letterSpacing: "-0.302404px",
                  }}
                >
                  Retain full BTC ownership
                  <br />
                  and control
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div
              className="relative flex flex-col justify-end items-start rounded-[24px] w-full grow card-tilted-3"
              style={{
                height: "196.25px",
                padding: "8.65871px 28px 19.6622px",
                gap: "11.01px",
                background: "rgba(0, 0, 0, 0.2)",
                boxShadow: "-100px 1px 72px rgba(250, 230, 188, 0.1)",
                border: "1px solid #27272A",
              }}
            >
              {/* Visual:mask-group */}
              <div
                style={{
                  width: "308.32px",
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
                className="flex flex-col items-start"
                style={{
                  width: "308.32px",
                  height: "42.92px",
                }}
              >
                <p
                  className="text-white flex items-center"
                  style={{
                    width: "156px",
                    height: "22px",
                    fontFamily: "SF Pro",
                    fontWeight: 500,
                    fontSize: "16px",
                    lineHeight: "22px",
                    letterSpacing: "-0.302404px",
                    margin: "-1.07673px 0px",
                  }}
                >
                  Loans Upto 70% LTV
                </p>
                <p
                  className="text-white flex items-center"
                  style={{
                    width: "93px",
                    height: "22px",
                    fontFamily: "SF Pro",
                    fontWeight: 500,
                    fontSize: "16px",
                    lineHeight: "22px",
                    letterSpacing: "-0.302404px",
                  }}
                >
                  and 8% APR
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
