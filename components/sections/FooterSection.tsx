"use client";

import React from "react";

export const FooterSection = (): JSX.Element => {
  return (
    <footer
      className="relative w-full overflow-hidden min-h-[525px] md:min-h-[450px]"
      style={{
        background: "#0F0F0F",
        borderRadius: "24px 24px 0px 0px",
      }}
    >
      {/* BG Image:mask-group */}
      <div
        className="absolute"
        style={{
          height: "507px",
          left: "-8px",
          right: "-8px",
          bottom: "-1px",
        }}
      >
        {/* BG Image:mask - Gradient */}
        <div
          className="absolute"
          style={{
            height: "507px",
            left: "0px",
            right: "0px",
            bottom: "0px",
            background:
              "radial-gradient(60% 92% at 50% 105.3%, #000000 0%, rgba(0, 0, 0, 0) 95%)",
          }}
        />

        {/* BG Image */}
        <div
          className="absolute"
          style={{
            height: "507px",
            left: "0px",
            right: "0px",
            bottom: "0px",
            mixBlendMode: "lighten",
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url(/footerBg.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>
      </div>

      {/* Meteor - Frame */}
      <div
        className="absolute pointer-events-none"
        style={{
          height: "525px",
          left: "0px",
          right: "0px",
          top: "0px",
        }}
      >
        {/* Meteor 1 */}
        <div
          className="absolute flex flex-col items-start"
          style={{
            width: "110px",
            height: "1px",
            left: "390.05px",
            top: "225.58px",
            opacity: 0.36,
            transform: "rotate(22.6deg)",
          }}
        >
          <div
            style={{
              width: "110px",
              height: "1px",
              background:
                "linear-gradient(270deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 100%)",
              borderRadius: "2px",
            }}
          />
          <div
            className="absolute"
            style={{
              width: "2px",
              right: "8.29px",
              top: "41.5px",
              bottom: "-41.51px",
              background: "rgba(255, 255, 255, 0.2)",
              boxShadow: "0px 0px 6px 1px rgba(255, 255, 255, 0.6)",
              borderRadius: "1px",
            }}
          />
        </div>

        {/* Meteor 2 */}
        <div
          className="absolute flex flex-col items-start"
          style={{
            width: "77.87px",
            height: "0.78px",
            left: "345.5px",
            top: "235.01px",
            opacity: 0.45,
            transform: "rotate(22.6deg)",
          }}
        >
          <div
            style={{
              width: "77.87px",
              height: "0.78px",
              background:
                "linear-gradient(270deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 100%)",
              borderRadius: "2px",
            }}
          />
          <div
            className="absolute"
            style={{
              width: "1.56px",
              right: "5.86px",
              top: "29.33px",
              bottom: "-29.33px",
              background: "rgba(255, 255, 255, 0.2)",
              boxShadow: "0px 0px 6px 1px rgba(255, 255, 255, 0.6)",
              borderRadius: "1px",
            }}
          />
        </div>

        {/* Meteor 3 */}
        <div
          className="absolute flex flex-col items-start"
          style={{
            width: "107.63px",
            height: "1.08px",
            left: "177.78px",
            top: "263.35px",
            opacity: 0.62,
            transform: "rotate(22.6deg)",
          }}
        >
          <div
            style={{
              width: "107.63px",
              height: "1.08px",
              background:
                "linear-gradient(270deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 100%)",
              borderRadius: "2px",
            }}
          />
          <div
            className="absolute"
            style={{
              width: "2.14px",
              right: "8.1px",
              top: "40.54px",
              bottom: "-40.53px",
              background: "rgba(255, 255, 255, 0.2)",
              boxShadow: "0px 0px 6px 1px rgba(255, 255, 255, 0.6)",
              borderRadius: "1px",
            }}
          />
        </div>

        {/* Meteor 4 */}
        <div
          className="absolute flex flex-col items-start"
          style={{
            width: "99.11px",
            height: "0.99px",
            left: "-46.13px",
            top: "285.9px",
            opacity: 0.91,
            transform: "rotate(22.6deg)",
          }}
        >
          <div
            style={{
              width: "99.11px",
              height: "1px",
              background:
                "linear-gradient(270deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 100%)",
              borderRadius: "2px",
            }}
          />
          <div
            className="absolute"
            style={{
              width: "1.98px",
              right: "7.45px",
              top: "37.33px",
              bottom: "-37.32px",
              background: "rgba(255, 255, 255, 0.2)",
              boxShadow: "0px 0px 6px 1px rgba(255, 255, 255, 0.6)",
              borderRadius: "1px",
            }}
          />
        </div>

        {/* Meteor 5 */}
        <div
          className="absolute flex flex-col items-start"
          style={{
            width: "78.13px",
            height: "0.78px",
            left: "482.27px",
            top: "192px",
            opacity: 0.27,
            transform: "rotate(22.6deg)",
          }}
        >
          <div
            style={{
              width: "78.13px",
              height: "0.78px",
              background:
                "linear-gradient(270deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 100%)",
              borderRadius: "2px",
            }}
          />
          <div
            className="absolute"
            style={{
              width: "1.56px",
              right: "5.87px",
              top: "29.43px",
              bottom: "-29.43px",
              background: "rgba(255, 255, 255, 0.2)",
              boxShadow: "0px 0px 6px 1px rgba(255, 255, 255, 0.6)",
              borderRadius: "1px",
            }}
          />
        </div>

        {/* Meteor 6 */}
        <div
          className="absolute flex flex-col items-start"
          style={{
            width: "95.06px",
            height: "0.95px",
            left: "248.49px",
            top: "22.03px",
            opacity: 0.75,
            transform: "rotate(22.6deg)",
          }}
        >
          <div
            style={{
              width: "95.06px",
              height: "0.95px",
              background:
                "linear-gradient(270deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 100%)",
              borderRadius: "2px",
            }}
          />
          <div
            className="absolute"
            style={{
              width: "1.9px",
              right: "7.15px",
              top: "35.8px",
              bottom: "-35.8px",
              background: "rgba(255, 255, 255, 0.2)",
              boxShadow: "0px 0px 6px 1px rgba(255, 255, 255, 0.6)",
              borderRadius: "1px",
            }}
          />
        </div>

        {/* Meteor 7 */}
        <div
          className="absolute flex flex-col items-start"
          style={{
            width: "115.56px",
            height: "1.16px",
            left: "513.1px",
            top: "190.54px",
            opacity: 0.22,
            transform: "rotate(22.6deg)",
          }}
        >
          <div
            style={{
              width: "115.56px",
              height: "1.16px",
              background:
                "linear-gradient(270deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 100%)",
              borderRadius: "2px",
            }}
          />
          <div
            className="absolute"
            style={{
              width: "2.31px",
              right: "8.7px",
              top: "43.52px",
              bottom: "-43.52px",
              background: "rgba(255, 255, 255, 0.2)",
              boxShadow: "0px 0px 6px 1px rgba(255, 255, 255, 0.6)",
              borderRadius: "1px",
            }}
          />
        </div>

        {/* Meteor 8 */}
        <div
          className="absolute flex flex-col items-start"
          style={{
            width: "100px",
            height: "1px",
            left: "474.89px",
            top: "63.84px",
            opacity: 0.65,
            transform: "rotate(22.6deg)",
          }}
        >
          <div
            style={{
              width: "100px",
              height: "1px",
              background:
                "linear-gradient(270deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 100%)",
              borderRadius: "2px",
            }}
          />
          <div
            className="absolute"
            style={{
              width: "2px",
              right: "7.53px",
              top: "37.66px",
              bottom: "-37.67px",
              background: "rgba(255, 255, 255, 0.2)",
              boxShadow: "0px 0px 6px 1px rgba(255, 255, 255, 0.6)",
              borderRadius: "1px",
            }}
          />
        </div>

        {/* Meteor 9 */}
        <div
          className="absolute flex flex-col items-start"
          style={{
            width: "84.87px",
            height: "0.85px",
            left: "445.77px",
            top: "76.77px",
            opacity: 0.62,
            transform: "rotate(22.6deg)",
          }}
        >
          <div
            style={{
              width: "84.87px",
              height: "0.85px",
              background:
                "linear-gradient(270deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 100%)",
              borderRadius: "2px",
            }}
          />
          <div
            className="absolute"
            style={{
              width: "1.7px",
              right: "6.39px",
              top: "31.96px",
              bottom: "-31.96px",
              background: "rgba(255, 255, 255, 0.2)",
              boxShadow: "0px 0px 6px 1px rgba(255, 255, 255, 0.6)",
              borderRadius: "1px",
            }}
          />
        </div>

        {/* Meteor 10 */}
        <div
          className="absolute flex flex-col items-start"
          style={{
            width: "81.38px",
            height: "0.81px",
            left: "636.4px",
            top: "156.21px",
            opacity: 0.38,
            transform: "rotate(22.6deg)",
          }}
        >
          <div
            style={{
              width: "81.38px",
              height: "0.81px",
              background:
                "linear-gradient(270deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 100%)",
              borderRadius: "2px",
            }}
          />
          <div
            className="absolute"
            style={{
              width: "1.62px",
              right: "6.13px",
              top: "30.65px",
              bottom: "-30.65px",
              background: "rgba(255, 255, 255, 0.2)",
              boxShadow: "0px 0px 6px 1px rgba(255, 255, 255, 0.6)",
              borderRadius: "1px",
            }}
          />
        </div>
      </div>

      {/* Footer - Footer */}
      <div
        className="absolute flex flex-col justify-center items-center w-full"
        style={{
          padding: "0px 16px",
          minHeight: "auto",
          left: "0px",
          bottom: "-1px",
          background: "rgba(0, 0, 0, 0.12)",
          backdropFilter: "blur(8px)",
        }}
      >
        {/* HorizontalBorder */}
        <div
          className="absolute left-4 sm:left-8 md:left-[98px] right-4 sm:right-8 md:right-[98px] hidden sm:block"
          style={{
            minHeight: "178px",
            top: "0px",
            borderTop: "1px dashed rgba(255, 255, 255, 0.12)",
          }}
        />

        {/* Content */}
        <div
          className="flex flex-col sm:flex-row justify-between items-start w-full py-6 sm:py-8 gap-6 sm:gap-0"
          style={{
            maxWidth: "1320px",
            minHeight: "auto",
          }}
        >
          {/* Nav - Navigation */}
          <div
            className="flex flex-col sm:flex-row items-start gap-3.5 sm:gap-6"
            style={{
              padding: "0px",
            }}
          >
            <a
              href="#home"
              className="text-white text-sm"
              style={{
                fontFamily: "SF Pro",
                fontWeight: 500,
                lineHeight: "16px",
                letterSpacing: "-0.15px",
              }}
            >
              Home
            </a>
            <a
              href="#support"
              className="text-white text-sm"
              style={{
                fontFamily: "SF Pro",
                fontWeight: 500,
                lineHeight: "16px",
                letterSpacing: "-0.15px",
              }}
            >
              Support
            </a>
            <a
              href="#guides"
              className="text-white text-sm"
              style={{
                fontFamily: "SF Pro",
                fontWeight: 500,
                lineHeight: "16px",
                letterSpacing: "-0.15px",
              }}
            >
              Guides
            </a>
            <a
              href="#404"
              className="text-white text-sm"
              style={{
                fontFamily: "SF Pro",
                fontWeight: 500,
                lineHeight: "16px",
                letterSpacing: "-0.15px",
              }}
            >
              404
            </a>
          </div>

          {/* Contact */}
          <div
            className="flex flex-col items-start gap-3 w-full sm:w-auto"
            style={{
              padding: "0px",
              maxWidth: "100%",
            }}
          >
            {/* Header */}
            <div className="flex flex-row justify-between items-start w-full">
              {/* Stay in touch */}
              <span
                className="text-white text-sm"
                style={{
                  fontFamily: "SF Pro",
                  fontWeight: 500,
                  lineHeight: "22px",
                  letterSpacing: "-0.16px",
                }}
              >
                Stay in touch
              </span>

              {/* Social icons */}
            </div>

            {/* Desktop - Email Form */}
            <div
              className="relative flex flex-row justify-center items-center w-full"
              style={{
                maxWidth: "100%",
                height: "47px",
                borderRadius: "10px",
              }}
            >
              {/* Input */}
              <input
                type="email"
                placeholder="name@email.com"
                className="text-white outline-none w-full text-sm"
                style={{
                  height: "47px",
                  padding: "14px 100px 14px 16px",
                  background: "rgba(18, 17, 17, 0.75)",
                  boxShadow: "inset 0px 0px 0px 1px rgba(255, 255, 255, 0.06)",
                  borderRadius: "12px",
                  fontFamily: "SF Pro",
                  fontWeight: 400,
                  lineHeight: "17px",
                  color: "rgba(255, 255, 255, 0.65)",
                }}
              />

              {/* Subscribe Button */}
              <button
                className="absolute flex flex-row justify-center items-start text-white text-xs sm:text-sm"
                style={{
                  width: "90px",
                  height: "39px",
                  right: "4px",
                  top: "4px",
                  padding: "11.5px 0px",
                  background: "#292929",
                  borderRadius: "8px",
                  fontFamily: "SF Pro",
                  fontWeight: 400,
                  lineHeight: "14px",
                }}
              >
                ↵ Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content - CTA Section */}
      <div
        className="absolute flex flex-col items-center gap-8 sm:gap-12 left-4 sm:left-6 md:left-10 right-4 sm:right-6 md:right-10 px-4"
        style={{
          top: "32px",
        }}
      >
        {/* Text */}
        <div
          className="flex flex-col items-center w-full"
          style={{
            gap: "16px",
          }}
        >
          {/* Heading */}
          <h2
            className="text-white text-center text-xl sm:text-2xl md:text-3xl"
            style={{
              fontFamily: "SF Pro Display",
              fontWeight: 500,
              lineHeight: "1.17",
              letterSpacing: "-0.4px",
            }}
          >
            Your Bitcoin. Your Yield. Your Control.
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            Join the Movement for Trustless Bitcoin Liquidity
          </h2>

          {/* Description */}
          <p
            className="text-white text-center text-sm sm:text-base md:text-lg"
            style={{
              fontFamily: "SF Pro",
              fontWeight: 400,
              lineHeight: "1.3",
              letterSpacing: "-0.4px",
            }}
          >
            Borrow, lend, and earn - natively and securely.
            <br />
            No bridges. No wrapping. No middlemen.
          </p>
        </div>

        {/* Frame 77 - Join Waitlist Button */}
        <button
          onClick={() => window.open("https://app.liquidsat.com/", "_blank")}
          className="flex flex-row justify-center items-center text-white"
          style={{
            padding: "14px 16px",
            width: "129px",
            height: "48px",
            background:
              "linear-gradient(104.37deg, #FB923C -6.75%, #F96A27 89.65%)",
            boxShadow: "inset 0px 2px 2px rgba(0, 0, 0, 0.25)",
            borderRadius: "30px",
            fontFamily: "SF Pro",
            fontWeight: 590,
            fontSize: "14px",
            lineHeight: "18px",
          }}
        >
          Join Waitlist
        </button>
      </div>
    </footer>
  );
};
