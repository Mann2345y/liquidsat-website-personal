"use client";

import React from "react";

export const WhitepaperButton = () => {
  return (
    <button
      onClick={() =>
        window.open(
          "https://drive.google.com/file/d/18FjOfj7A4YcN7VZ1w5aexxAN3JbXFO20/view",
          "_blank"
        )
      }
      className="flex flex-row justify-center items-center px-4 py-3.5 rounded-[30px]"
      style={{
        background:
          "linear-gradient(104.37deg, #FB923C -6.75%, #F96A27 89.65%)",
        boxShadow: "inset 0px 2px 2px rgba(0, 0, 0, 0.25)",
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
        Read Whitepaper
      </span>
    </button>
  );
};
