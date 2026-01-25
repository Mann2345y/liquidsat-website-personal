"use client";

import React from "react";

export const FooterSection = (): JSX.Element => {
  return (
    <footer
      className="relative w-full overflow-hidden min-h-[525px] md:min-h-[550px]"
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
        className="absolute flex flex-col justify-center items-center w-full left-0 bottom-[-1px] px-4 sm:px-6 md:px-8 min-h-0"
        style={{
          background: "rgba(0, 0, 0, 0.12)",
          backdropFilter: "blur(8px)",
        }}
      >
        {/* HorizontalBorder */}

        <div className="relative z-10 flex flex-col items-center gap-8 sm:gap-10 md:gap-12 px-4 sm:px-6 md:px-10 py-10 sm:py-12 md:py-14 w-full max-w-[1390px] mx-auto">
          <div className="flex flex-col items-center gap-4 sm:gap-5 md:gap-[22px]">
            <h2
              className="text-white text-center w-full max-w-[812px] whitespace-nowrap"
              style={{
                fontFamily: "SF Pro Display",
                fontWeight: 500,
                fontSize: "clamp(1.25rem, 4.5vw, 40px)",
                lineHeight: "1.15",
                letterSpacing: "-0.4px",
              }}
            >
              Your Bitcoin. Your Liquidity. Your Financial Power.
            </h2>
            <p
              className="text-white text-center w-full max-w-[600px] text-base sm:text-lg md:text-xl lg:text-2xl"
              style={{
                fontFamily: "SF Pro",
                fontWeight: 400,
                lineHeight: "1.35",
                letterSpacing: "-0.4px",
              }}
            >
              Borrow, lend, and earn — natively and securely. No bridges. No wrapping. No middlemen.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <button
              onClick={() =>
                window.open("https://app.liquidsat.com/", "_blank")
              }
              className="flex flex-row justify-center items-center px-6 py-3.5 rounded-[30px]"
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
                Launch App
              </span>
            </button>
            <button
              onClick={() =>
                window.open("https://testnet.liquidsat.com/", "_blank")
              }
              className="flex flex-row justify-center items-center px-6 py-3.5 rounded-[30px]"
              style={{
                background: "rgba(245, 245, 237, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
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
                Join Testnet
              </span>
            </button>
          </div>
        </div>

        <div
          className="w-full hidden sm:block"
          style={{
            top: "0px",
            borderTop: "1px dashed rgba(255, 255, 255, 0.12)",
          }}
        />

        {/* Content */}
        <div
          className="flex flex-col sm:flex-row justify-between items-start w-full py-6 sm:py-8 gap-6 sm:gap-0 px-4 sm:px-6 md:px-10 max-w-[1320px] mx-auto min-h-0"
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
              href="#whitepaper"
              className="text-white text-sm"
              style={{
                fontFamily: "SF Pro",
                fontWeight: 500,
                lineHeight: "16px",
                letterSpacing: "-0.15px",
              }}
            >
              Whitepaper
            </a>
            <a
              href="#docs"
              className="text-white text-sm"
              style={{
                fontFamily: "SF Pro",
                fontWeight: 500,
                lineHeight: "16px",
                letterSpacing: "-0.15px",
              }}
            >
              Docs
            </a>
            <a
              href="https://x.com/liquidsat_ofc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-sm"
              style={{
                fontFamily: "SF Pro",
                fontWeight: 500,
                lineHeight: "16px",
                letterSpacing: "-0.15px",
              }}
            >
              X
            </a>
            <a
              href="https://discord.gg/a7UKTSVxgq"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-sm"
              style={{
                fontFamily: "SF Pro",
                fontWeight: 500,
                lineHeight: "16px",
                letterSpacing: "-0.15px",
              }}
            >
              Discord
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

            {/* Email Form */}
            <div className="relative flex flex-row justify-center items-center w-full max-w-[400px] min-w-0 h-11 sm:h-[47px] rounded-[10px]">
              <input
                type="email"
                placeholder="name@email.com"
                className="text-white outline-none w-full min-w-0 text-sm h-full pl-4 pr-20 sm:pr-[100px] rounded-xl"
                style={{
                  background: "rgba(18, 17, 17, 0.75)",
                  boxShadow: "inset 0px 0px 0px 1px rgba(255, 255, 255, 0.06)",
                  fontFamily: "SF Pro",
                  fontWeight: 400,
                  lineHeight: "17px",
                  color: "rgba(255, 255, 255, 0.65)",
                }}
              />
              <button
                className="absolute flex flex-row justify-center items-center text-white text-xs sm:text-sm right-1 top-1/2 -translate-y-1/2 w-16 sm:w-[90px] h-8 sm:h-[39px] rounded-lg"
                style={{
                  background: "#292929",
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
    </footer>
  );
};
