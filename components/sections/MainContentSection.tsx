"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const MainContentSection = (): JSX.Element => {
  // Data for security feature cards
  const securityFeatures = [
    {
      icon: "/figmaAssets/component-1-6.svg",
      title: "Bitcoin-Native Infra",
      description:
        "No wrapped assets or bridges. BTC locked natively using script-based escrow.",
    },
    {
      icon: "/figmaAssets/component-1-2.svg",
      title: "Security First",
      description: "Funds move only after approvals and BTC lock.",
    },
    {
      icon: "/figmaAssets/component-1-13.svg",
      title: "Built-in Failsafes",
      description: "Cancel or reclaim funds if loan steps aren't completed.",
    },
  ];

  return (
    <section className="flex flex-col items-center py-[70px] px-6 md:px-[175px] w-full bg-[#f8fafb]">
      <div className="flex flex-col max-w-[1120px] items-center gap-14 w-full">
        <div className="flex flex-col items-center gap-3.5 relative self-stretch w-full">
          <div className="flex flex-col items-center relative self-stretch w-full">
            <h2 className="font-bold text-wwwfigmacomebony text-[29.8px] text-center leading-[35px]">
              Built for Trust &amp; Security
            </h2>
          </div>

          <div className="max-w-[588px] w-full">
            <p className="font-normal text-wwwfigmacomriver-bed text-[16.4px] text-center leading-[24.5px]">
              Your Bitcoin security is our priority. Every aspect is designed
              with maximum safety and transparency.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
          {securityFeatures.map((feature, index) => (
            <Card
              key={`security-feature-${index}`}
              className="bg-wwwfigmacomwhite rounded-[12.75px] border border-solid h-full"
              data-testid={`card-security-${index}`}
            >
              <CardContent className="p-6 text-center">
                <div className="flex flex-col items-center gap-4 h-full">
                  <div className="flex w-14 h-14 items-center justify-center bg-wwwfigmacomfeta rounded-full">
                    <img
                      className="w-7 h-7"
                      alt="Security feature icon"
                      src={feature.icon}
                      data-testid={`img-security-icon-${index}`}
                    />
                  </div>

                  <h3
                    className="font-bold text-wwwfigmacomebony text-lg leading-[24px]"
                    data-testid={`text-security-title-${index}`}
                  >
                    {feature.title}
                  </h3>

                  <p
                    className="font-normal text-wwwfigmacomriver-bed text-sm leading-[20px]"
                    data-testid={`text-security-description-${index}`}
                  >
                    {feature.description}
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
