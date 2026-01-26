"use client";

import React from "react";

export const FooterCTAButtons = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
      <button
        onClick={() => window.open("https://app.liquidsat.com/", "_blank")}
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
        onClick={() => window.open("https://testnet.liquidsat.com/", "_blank")}
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
  );
};
