"use client";

import React from "react";

export const FooterCTASection = (): JSX.Element => {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        minHeight: "525px",
        background: "#0F0F0F",
        borderRadius: "32px 32px 0px 0px",
      }}
    >
      {/* Background Image with Mask */}
      <div className="absolute inset-x-0 bottom-0 h-[507px] mix-blend-lighten">
        {/* Gradient Mask */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(60% 92% at 50% 105.3%, #000000 0%, rgba(0, 0, 0, 0) 95%)",
          }}
        />
        {/* Background Image Placeholder */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(/footerBg.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      {/* Meteor/Shooting Stars */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Meteor 1 */}
        <div
          className="absolute"
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
              width: "100%",
              height: "100%",
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
          className="absolute"
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
              width: "100%",
              height: "100%",
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
          className="absolute"
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
              width: "100%",
              height: "100%",
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
          className="absolute"
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
              width: "100%",
              height: "100%",
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
          className="absolute"
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
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(270deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 100%)",
              borderRadius: "2px",
            }}
          />
        </div>

        {/* Meteor 6 */}
        <div
          className="absolute"
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
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(270deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 100%)",
              borderRadius: "2px",
            }}
          />
        </div>
      </div>

      {/* Content */}
    </section>
  );
};
