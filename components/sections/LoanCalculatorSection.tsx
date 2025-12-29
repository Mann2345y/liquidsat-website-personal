"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

export const LoanCalculatorSection = (): JSX.Element => {
  const [borrowAmount, setBorrowAmount] = useState("10000");
  const [termLength, setTermLength] = useState("90");

  // Calculate loan summary values based on inputs
  const calculateSummary = () => {
    const amount = parseFloat(borrowAmount) || 0;
    const days = parseInt(termLength) || 90;
    const interestRate = 6; // 6% APR
    const ltv = 50; // 50% LTV

    const collateralValue = amount / (ltv / 100);
    const dailyRate = interestRate / 365 / 100;
    const interest = amount * dailyRate * days;
    const paymentAtMaturity = amount + interest;

    return {
      interestRate: `${interestRate}%`,
      ltv: `${ltv}%`,
      collateralValue: `$${collateralValue.toLocaleString()}`,
      paymentAtMaturity: `$${paymentAtMaturity.toLocaleString()}`,
      termLength: `${days} days`,
    };
  };

  const summary = calculateSummary();

  return (
    <section
      id="calculator"
      className="px-6 py-[70px] bg-[#f8fafb] flex flex-col items-center w-full md:px-[175px]"
    >
      <div className="flex flex-col items-center gap-14 w-full max-w-[1120px]">
        <header className="flex flex-col items-center gap-3.5 w-full">
          <h2 className="font-bold text-wwwfigmacomebony text-[29.8px] text-center leading-[35px]">
            Loan Calculator
          </h2>
          <p className="font-normal text-wwwfigmacomriver-bed text-[16.4px] text-center leading-[24.5px] max-w-[588px]">
            See how much you can borrow against your Bitcoin.
          </p>
        </header>

        <Card className="w-full max-w-[960px] border border-solid shadow-sm bg-wwwfigmacomwhite rounded-[12.75px]">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Configure Your Loan */}
              <div className="flex flex-col gap-6">
                <h3 className="font-bold text-wwwfigmacomebony text-xl">
                  Configure Your Loan
                </h3>

                <div className="flex flex-col gap-6">
                  {/* Borrowed Amount */}
                  <div className="flex flex-col gap-2.5">
                    <label className="font-medium text-wwwfigmacomcod-gray text-sm">
                      Borrowed Amount (USDT)
                    </label>
                    <div className="relative">
                      <Input
                        className="h-12 bg-wwwfigmacomathens-gray rounded border border-gray-200 font-normal text-wwwfigmacomcod-gray text-base pr-16"
                        value={borrowAmount}
                        onChange={(e) => setBorrowAmount(e.target.value)}
                        type="number"
                        data-testid="input-loan-amount"
                      />
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">
                        USDT
                      </div>
                    </div>
                  </div>

                  {/* Term Length */}
                  <div className="flex flex-col gap-2.5">
                    <label className="font-medium text-wwwfigmacomcod-gray text-sm">
                      Term Length (Days)
                    </label>
                    <div className="relative">
                      <Select value={termLength} onValueChange={setTermLength}>
                        <SelectTrigger
                          className="h-12 bg-wwwfigmacomathens-gray rounded border border-gray-200 font-normal text-wwwfigmacomcod-gray text-base"
                          data-testid="select-term-length"
                        >
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-gray-400" />
                            <SelectValue placeholder="90 days" />
                          </div>
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="30">30 days</SelectItem>
                          <SelectItem value="60">60 days</SelectItem>
                          <SelectItem value="90">90 days</SelectItem>
                          <SelectItem value="120">120 days</SelectItem>
                          <SelectItem value="180">180 days</SelectItem>
                          <SelectItem value="365">365 days</SelectItem>
                        </SelectContent>
                      </Select>
                      <div className="absolute right-12 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">
                        Days
                      </div>
                    </div>
                  </div>

                  {/* Apply Button */}
                  <Button
                    className="w-full h-12 bg-gradient-to-r from-wwwfigmacomorange-gradient-start to-wwwfigmacomorange-gradient-end hover:from-wwwfigmacomorange-primary hover:to-wwwfigmacomorange-gradient-end text-white font-medium rounded text-base mt-4"
                    data-testid="button-apply-loan"
                    onClick={() =>
                      window.open("https://app.liquidsat.com/", "_blank")
                    }
                  >
                    Apply for This Loan
                  </Button>
                </div>
              </div>

              {/* Right Column - Loan Summary */}
              <div className="flex flex-col gap-6">
                <h3 className="font-bold text-wwwfigmacomebony text-xl">
                  Loan Summary
                </h3>

                <div className="flex flex-col gap-4">
                  {/* Interest Rate */}
                  <div className="flex justify-between items-center py-2">
                    <span className="text-wwwfigmacomriver-bed text-base">
                      Interest Rate (APR)
                    </span>
                    <span className="font-semibold text-wwwfigmacomebony text-base">
                      {summary.interestRate}
                    </span>
                  </div>

                  {/* LTV */}
                  <div className="flex justify-between items-center py-2">
                    <span className="text-wwwfigmacomriver-bed text-base">
                      LTV
                    </span>
                    <span className="font-semibold text-wwwfigmacomebony text-base">
                      {summary.ltv}
                    </span>
                  </div>

                  {/* Collateral Value */}
                  <div className="flex justify-between items-center py-2">
                    <span className="text-wwwfigmacomriver-bed text-base">
                      Collateral Value
                    </span>
                    <span className="font-semibold text-wwwfigmacomebony text-base">
                      {summary.collateralValue}
                    </span>
                  </div>

                  {/* Payment at Maturity */}
                  <div className="flex justify-between items-center py-2">
                    <span className="text-wwwfigmacomriver-bed text-base">
                      Payment at Maturity
                    </span>
                    <span className="font-semibold text-wwwfigmacomebony text-base">
                      {summary.paymentAtMaturity}
                    </span>
                  </div>

                  {/* Term Length */}
                  <div className="flex justify-between items-center py-2">
                    <span className="text-wwwfigmacomriver-bed text-base">
                      Term Length
                    </span>
                    <span className="font-semibold text-wwwfigmacomebony text-base">
                      {summary.termLength}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
