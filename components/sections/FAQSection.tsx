"use client";

import React, { useState } from "react";

export const FAQSection = (): JSX.Element => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems = [
    { question: "Restrictions (Please read)" },
    { question: "How can I get started?" },
    { question: "What services do you offer?" },
    { question: "How long does it take?" },
    { question: "Do you offer support?" },
    { question: "What tools do you use?" },
  ];

  return (
    <section
      className="flex flex-col items-center px-4 sm:px-6 md:px-10 py-8 sm:py-10 md:py-[38px] pb-10 sm:pb-12 md:pb-[43px] w-full"
      style={{
        minHeight: "auto",
        background: "#FFFFFF",
      }}
    >
      {/* Content Container */}
      <div className="flex flex-col items-center gap-10 sm:gap-12 md:gap-[60px] w-full max-w-[1390px]">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 sm:gap-5 w-full">
          {/* Questions Badge */}
          <div
            className="flex flex-col justify-center items-center px-3 rounded-[56px] relative"
            style={{
              width: "81px",
              height: "32px",
              border: "1px solid #C5C5C5",
            }}
          >
            <span
              className="text-[#0D0D0D] text-xs"
              style={{
                fontFamily: "SF Pro",
                fontWeight: 500,
                lineHeight: "14px",
                letterSpacing: "-0.26px",
              }}
            >
              Questions
            </span>
          </div>

          {/* Text Section */}
          <div className="flex flex-col items-center gap-4 sm:gap-[22px] w-full">
            <h2
              className="text-[#71717A] text-center text-2xl sm:text-3xl md:text-[36px]"
              style={{
                fontFamily: "SF Pro Display",
                fontWeight: 500,
                lineHeight: "1.17",
                letterSpacing: "-0.4px",
              }}
            >
              Got questions? We&apos;ve got answers
            </h2>
            <p
              className="text-[#71717A] text-center text-base sm:text-lg md:text-xl px-4"
              style={{
                fontFamily: "SF Pro",
                fontWeight: 400,
                lineHeight: "1.3",
                letterSpacing: "-0.4px",
              }}
            >
              Explore our frequently asked questions to find the information you
              need about our services and process.
            </p>
          </div>
        </div>

        {/* Accordion Container */}
        <div
          className="flex flex-col items-start p-2 sm:p-2.5 gap-1 rounded-[16px] sm:rounded-[24px] w-full"
          style={{
            maxWidth: "720px",
            minHeight: "auto",
            background: "#FAECCF",
            boxShadow:
              "0px 0.941px 0.941px -0.28125px rgba(0, 0, 0, 0.01), 0px 2.229px 2.229px -0.5625px rgba(0, 0, 0, 0.01), 0px 4.067px 4.067px -0.84375px rgba(0, 0, 0, 0.01), 0px 6.761px 6.761px -1.125px rgba(0, 0, 0, 0.016), 0px 10.918px 10.918px -1.40625px rgba(0, 0, 0, 0.016), 0px 17.871px 17.871px -1.6875px rgba(0, 0, 0, 0.016), 0px 30.773px 30.773px -1.96875px rgba(0, 0, 0, 0.016), 0px 56px 56px -2.25px rgba(0, 0, 0, 0.016)",
          }}
        >
          {faqItems.map((item, index) => (
            <button
              key={index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="flex flex-col items-start px-4 sm:px-6 md:px-8 w-full rounded-[12px] sm:rounded-[20px] bg-white transition-all relative"
              style={{
                height: "auto",
                minHeight: "56px",
              }}
            >
              <div className="flex flex-row items-center justify-between py-4 sm:py-5 pr-4 sm:pr-10 w-full">
                <span
                  className="text-black text-left flex-1 text-sm sm:text-base md:text-lg"
                  style={{
                    fontFamily: "SF Pro",
                    fontWeight: 400,
                    lineHeight: "1.33",
                    letterSpacing: "-0.32px",
                  }}
                >
                  {item.question}
                </span>

                {/* Plus Icon */}
                <div className="relative w-4 h-4 opacity-30 flex-shrink-0 ml-2 sm:ml-4">
                  {/* Horizontal bar */}
                  <div
                    className="absolute bg-black rounded-[10px]"
                    style={{
                      width: "16px",
                      height: "2px",
                      left: "0px",
                      top: "7px",
                    }}
                  />
                  {/* Vertical bar (only when closed) */}
                  {openIndex !== index && (
                    <div
                      className="absolute bg-black rounded-[10px]"
                      style={{
                        width: "2px",
                        height: "16px",
                        left: "7px",
                        top: "0px",
                      }}
                    />
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
