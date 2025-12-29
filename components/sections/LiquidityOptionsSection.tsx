"use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export const LiquidityOptionsSection = (): JSX.Element => {
  // Data for the liquidity option cards
  const liquidityOptions = [
    {
      icon: "/figmaAssets/component-1-18.svg",
      title: "Reinvest in BTC",
      description: [
        "Use liquidity to buy more",
        "Bitcoin and amplify your",
        "position while keeping your",
        "original holdings.",
      ],
    },
    {
      icon: "/figmaAssets/component-1-21.svg",
      title: "Fund Your Business",
      description: [
        "Access working capital for your",
        "business without liquidating",
        "your Bitcoin investments.",
      ],
    },
    {
      icon: "/figmaAssets/component-1-22.svg",
      title: "Cover Life Expenses",
      description: [
        "Handle unexpected expenses",
        "or major purchases while",
        "keeping your Bitcoin for the",
        "long term.",
      ],
    },
    {
      icon: "/figmaAssets/component-1-24.svg",
      title: "Pay for Education",
      description: [
        "Invest in yourself or your",
        "family's education without",
        "sacrificing your Bitcoin",
        "holdings.",
      ],
    },
  ];

  return (
    <section className="flex flex-col items-center py-[70px] px-4 sm:px-6 md:px-12 lg:px-24 w-full bg-wwwfigmacomwhite">
      <div className="flex flex-col max-w-[1120px] items-center gap-14 w-full">
        <div className="flex flex-col items-center gap-3.5 w-full">
          <h2 className="font-bold text-wwwfigmacomebony text-[29.8px] text-center leading-[35px]">
            What You Can Do With Your Liquidity
          </h2>

          <p className="max-w-[588px] font-normal text-wwwfigmacomriver-bed text-[16.4px] text-center leading-[24.5px]">
            Unlock the potential of your Bitcoin without losing exposure to
            future price
            <br />
            appreciation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {liquidityOptions.map((option, index) => (
            <Card
              key={index}
              className="border border-solid bg-wwwfigmacomwhite rounded-[12.75px]"
              data-testid={`card-liquidity-${index}`}
            >
              <CardContent className="p-[22px] text-center">
                <div className="flex flex-col items-center gap-4">
                  <div className="flex w-14 h-14 items-center justify-center bg-wwwfigmacomserenade rounded-full">
                    <Image
                      className="w-7 h-7"
                      alt={`${option.title} icon`}
                      src={option.icon}
                      width={28}
                      height={28}
                      data-testid={`img-liquidity-icon-${index}`}
                    />
                  </div>

                  <h3
                    className="font-bold text-wwwfigmacomebony text-sm leading-[21px]"
                    data-testid={`text-liquidity-title-${index}`}
                  >
                    {option.title}
                  </h3>

                  <p
                    className="font-normal text-wwwfigmacomriver-bed text-[13.6px] leading-[22.8px]"
                    data-testid={`text-liquidity-description-${index}`}
                  >
                    {option.description.join(" ")}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
