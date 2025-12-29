"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const HowItWorksSection = (): JSX.Element => {
  // Data for the steps
  const steps = [
    {
      number: "01",
      title: "Connect Wallet",
      description:
        "Connect your Bitcoin wallet to start the process. Your keys, your Bitcoin - always.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 7H4C2.9 7 2 7.9 2 9V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V9C22 7.9 21.1 7 20 7ZM20 19H4V9H20V19ZM8 11H6V13H8V11ZM18 11H10V13H18V11Z"
            fill="#F57F17"
          />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Lock Collateral",
      description:
        "Deposit Bitcoin as collateral in our secure smart contract while maintaining custody.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 8H17V6C17 3.24 14.76 1 12 1S7 3.24 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8ZM9 6C9 4.34 10.34 3 12 3S15 4.34 15 6V8H9V6ZM18 20H6V10H18V20ZM12 17C13.1 17 14 16.1 14 15S13.1 13 12 13S10 13.9 10 15S10.9 17 12 17Z"
            fill="#F57F17"
          />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Access Liquidity",
      description:
        "Borrow up to 50% of your Bitcoin value with competitive rates and flexible terms.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.8 10.9C9.53 10.31 8.8 9.7 8.8 8.75C8.8 7.66 9.81 6.9 11.5 6.9C13.28 6.9 13.94 7.75 14 9H16.21C16.14 7.28 15.09 5.7 13 5.19V3H10V5.16C8.06 5.58 6.5 6.84 6.5 8.77C6.5 11.08 8.41 12.23 11.2 12.9C13.7 13.5 14.2 14.38 14.2 15.31C14.2 16 13.71 17.1 11.5 17.1C9.44 17.1 8.63 16.18 8.5 15H6.32C6.44 17.19 8.08 18.42 10 18.83V21H13V18.85C14.95 18.5 16.5 17.35 16.5 15.3C16.5 12.46 14.07 11.5 11.8 10.9Z"
            fill="#F57F17"
          />
        </svg>
      ),
    },
    {
      number: "04",
      title: "Repay & Unlock",
      description:
        "Repay your loan anytime to unlock your Bitcoin. No penalties, complete flexibility.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 6V9L16 5L12 1V4C7.58 4 4 7.58 4 12C4 13.57 4.46 15.03 5.24 16.26L6.7 14.8C6.25 13.97 6 13 6 12C6 8.69 8.69 6 12 6ZM18.76 7.74L17.3 9.2C17.74 10.04 18 11 18 12C18 15.31 15.31 18 12 18V15L8 19L12 23V20C16.42 20 20 16.42 20 12C20 10.43 19.54 8.97 18.76 7.74Z"
            fill="#F57F17"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="how-it-works"
      className="flex flex-col items-center py-16 px-6 md:px-24 w-full bg-wwwfigmacomwhite"
    >
      <div className="flex flex-col max-w-6xl items-center gap-10 w-full">
        <div className="flex flex-col items-center gap-3 w-full">
          <h2 className="font-bold text-wwwfigmacomebony text-3xl text-center">
            How <span className="text-wwwfigmacomorange-primary">It Works</span>
          </h2>

          <p className="max-w-xl font-normal text-wwwfigmacomriver-bed text-base text-center leading-relaxed">
            Get liquidity from your Bitcoin in four simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 w-full relative">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="border border-solid bg-wwwfigmacomwhite rounded-[12.75px] h-full">
                <CardContent className="p-6 text-center flex flex-col items-center h-full">
                  {/* Orange step number circle - positioned at top left */}
                  <div className="absolute -top-3 -left-3 flex w-12 h-12 items-center justify-center bg-wwwfigmacomorange-primary rounded-full">
                    <div className="font-bold text-wwwfigmacomwhite text-sm">
                      {step.number}
                    </div>
                  </div>

                  {/* Icon container - left aligned */}
                  <div className="flex justify-start mb-3 mt-4">
                    <div className="flex w-12 h-12 items-center justify-center bg-wwwfigmacomorange-light rounded-xl flex-shrink-0">
                      {step.icon}
                    </div>
                  </div>

                  {/* Title - centered */}
                  <div className="text-center mb-3">
                    <h3 className="font-bold text-wwwfigmacomebony text-lg leading-[24px]">
                      {step.title}
                    </h3>
                  </div>

                  <p className="font-normal text-wwwfigmacomriver-bed text-sm leading-[20px] text-center flex-grow">
                    {step.description}
                  </p>
                </CardContent>
              </Card>

              {/* Arrow connector for desktop - positioned between cards */}
              {index < steps.length - 1 && (
                <div className="hidden xl:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z"
                      fill="#F57F17"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Start Now button */}
        <div className="mt-4">
          <Button
            className="bg-wwwfigmacomorange-primary hover:bg-wwwfigmacomorange-primary/90 text-white px-6 py-2.5 rounded-lg font-medium flex items-center gap-2"
            onClick={() =>
              window.open("https://liquidsat.danlabs.xyz/", "_blank")
            }
          >
            Start Now
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z"
                fill="currentColor"
              />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
};
