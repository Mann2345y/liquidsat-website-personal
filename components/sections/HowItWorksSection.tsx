"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const HowItWorksSection = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<"pool" | "p2p">("pool");

  return (
    <section
      id="how-it-works"
      className="flex flex-col items-center py-16 px-6 md:px-24 w-full bg-wwwfigmacomwhite"
    >
      <div className="flex flex-col max-w-6xl items-center gap-10 w-full">
        {/* Header */}
        <div className="flex flex-col items-center gap-3 w-full">
          <h2 className="font-bold text-wwwfigmacomebony text-3xl text-center">
            Two Ways to Access{" "}
            <span className="text-wwwfigmacomorange-primary">
              Bitcoin-Backed Financing
            </span>{" "}
            — Fully Non-Custodial
          </h2>

          <p className="max-w-2xl font-normal text-wwwfigmacomriver-bed text-base text-center leading-relaxed">
            Choose the financing model that works best for you
          </p>
        </div>

        {/* Tab Navigation */}
        <div
          className="flex gap-2 p-1 bg-gray-100 rounded-lg"
          role="tablist"
          aria-label="Choose borrower or lender financing options on LiquidSat"
        >
          <button
            role="tab"
            aria-selected={activeTab === "pool"}
            onClick={() => setActiveTab("pool")}
            className={`px-6 py-3 rounded-md text-sm font-medium transition-all ${
              activeTab === "pool"
                ? "bg-white text-wwwfigmacomorange-primary shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            🧩 Peer-to-Pool Financing
          </button>
          <button
            role="tab"
            aria-selected={activeTab === "p2p"}
            onClick={() => setActiveTab("p2p")}
            className={`px-6 py-3 rounded-md text-sm font-medium transition-all ${
              activeTab === "p2p"
                ? "bg-white text-wwwfigmacomorange-primary shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            🤝 Peer-to-Peer Financing
          </button>
        </div>

        {/* Tab Content */}
        <div className="w-full">
          {activeTab === "pool" && (
            <div className="flex flex-col items-center gap-8 w-full">
              {/* Pool Header */}
              <div className="text-center max-w-3xl">
                <h3 className="font-bold text-wwwfigmacomebony text-2xl mb-3">
                  Instant BTC-Backed Liquidity. Fixed Rates. Zero Custody Risk.
                </h3>
                <p className="font-normal text-wwwfigmacomriver-bed text-base mb-2">
                  Tap into instant Bitcoin financing pools — offering continuous
                  yield for lenders and predictable liquidity for borrowers.
                </p>
                <p className="font-medium text-wwwfigmacomorange-primary text-sm">
                  ✓ Ideal For: Users who want immediate financing and fixed-rate
                  predictability.
                </p>
              </div>

              {/* Pool Features Card */}
              <Card className="w-full max-w-4xl border-2 border-wwwfigmacomorange-light">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-wwwfigmacomorange-light rounded-full flex items-center justify-center">
                        <span className="text-wwwfigmacomorange-primary font-bold">
                          ⚡
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-wwwfigmacomebony mb-1">
                          Instant Liquidity
                        </h4>
                        <p className="text-sm text-wwwfigmacomriver-bed">
                          Access funds immediately from pre-funded pools
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-wwwfigmacomorange-light rounded-full flex items-center justify-center">
                        <span className="text-wwwfigmacomorange-primary font-bold">
                          📊
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-wwwfigmacomebony mb-1">
                          Fixed Rates
                        </h4>
                        <p className="text-sm text-wwwfigmacomriver-bed">
                          Predictable APR with transparent terms
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-wwwfigmacomorange-light rounded-full flex items-center justify-center">
                        <span className="text-wwwfigmacomorange-primary font-bold">
                          🔒
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-wwwfigmacomebony mb-1">
                          Non-Custodial
                        </h4>
                        <p className="text-sm text-wwwfigmacomriver-bed">
                          BTC secured by native Bitcoin scripts
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-wwwfigmacomorange-light rounded-full flex items-center justify-center">
                        <span className="text-wwwfigmacomorange-primary font-bold">
                          💰
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-wwwfigmacomebony mb-1">
                          Continuous Yield
                        </h4>
                        <p className="text-sm text-wwwfigmacomriver-bed">
                          Lenders earn predictable returns on stablecoin capital
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "p2p" && (
            <div className="flex flex-col items-center gap-8 w-full">
              {/* P2P Header */}
              <div className="text-center max-w-3xl">
                <h3 className="font-bold text-wwwfigmacomebony text-2xl mb-3">
                  Custom, Direct, Peer-to-Peer Bitcoin Financing — On Your Terms
                </h3>
                <p className="font-normal text-wwwfigmacomriver-bed text-base mb-2">
                  Set custom APR, LTV, and duration. Lenders fund directly from
                  their wallets. Repayments and settlements execute trustlessly
                  using Bitcoin scripts.
                </p>
                <p className="font-medium text-wwwfigmacomorange-primary text-sm">
                  ✓ Ideal For: Users who want flexible, personalized financing
                  options.
                </p>
              </div>

              {/* P2P Features Card */}
              <Card className="w-full max-w-4xl border-2 border-wwwfigmacomorange-light">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-wwwfigmacomorange-light rounded-full flex items-center justify-center">
                        <span className="text-wwwfigmacomorange-primary font-bold">
                          ⚙️
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-wwwfigmacomebony mb-1">
                          Custom Terms
                        </h4>
                        <p className="text-sm text-wwwfigmacomriver-bed">
                          Negotiate APR, LTV, and duration directly
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-wwwfigmacomorange-light rounded-full flex items-center justify-center">
                        <span className="text-wwwfigmacomorange-primary font-bold">
                          👥
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-wwwfigmacomebony mb-1">
                          Direct Matching
                        </h4>
                        <p className="text-sm text-wwwfigmacomriver-bed">
                          Connect directly with counterparties
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-wwwfigmacomorange-light rounded-full flex items-center justify-center">
                        <span className="text-wwwfigmacomorange-primary font-bold">
                          🔐
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-wwwfigmacomebony mb-1">
                          Wallet-to-Wallet
                        </h4>
                        <p className="text-sm text-wwwfigmacomriver-bed">
                          Funds flow directly between wallets at settlement
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-wwwfigmacomorange-light rounded-full flex items-center justify-center">
                        <span className="text-wwwfigmacomorange-primary font-bold">
                          📜
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-wwwfigmacomebony mb-1">
                          Script-Based Settlement
                        </h4>
                        <p className="text-sm text-wwwfigmacomriver-bed">
                          Trustless execution via Bitcoin native scripts
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>

        {/* CTA Button */}
        <div className="mt-4">
          <Button
            className="bg-wwwfigmacomorange-primary hover:bg-wwwfigmacomorange-primary/90 text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2 text-base"
            onClick={() => window.open("https://app.liquidsat.com/", "_blank")}
          >
            → Explore Financing Models
          </Button>
        </div>
      </div>
    </section>
  );
};
