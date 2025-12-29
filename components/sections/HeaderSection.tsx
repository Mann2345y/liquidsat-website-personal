"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const HeaderSection = (): JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  // Navigation links data
  const navLinks = [
    {
      text: "How It Works",
      href: "#how-it-works",
    },
    {
      text: "Calculator",
      href: "#calculator",
    },
    {
      text: "FAQ",
      href: "#faq",
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-wwwfigmacomwhite border-b shadow-sm">
      <div className="flex items-center justify-between w-full px-3 sm:px-4 md:px-8 lg:px-16 xl:px-24 py-2 sm:py-3">
        {/* Logo section */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Image
            src="/LiquidSat_LightBackground.svg"
            alt="LiquidSat Logo"
            width={96}
            height={96}
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain"
          />
        </div>

        {/* Navigation links - hidden on mobile */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-8">
          {navLinks.map((link, index) => (
            <a
              key={index}
              className="font-normal text-wwwfigmacomriver-bed text-sm hover:text-wwwfigmacomblue-ribbon transition-colors whitespace-nowrap"
              href={link.href}
              data-testid={`nav-link-${index}`}
            >
              {link.text}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-wwwfigmacomriver-bed hover:text-wwwfigmacomblue-ribbon"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* CTA Button - hidden on mobile, shown on tablet+ */}
        <Button
          className="hidden lg:flex h-8 px-3 md:px-4 py-2 bg-wwwfigmacomblue-ribbon hover:bg-blue-700 rounded-[6.75px] text-xs md:text-sm font-medium whitespace-nowrap"
          data-testid="button-go-to-app"
          onClick={() => window.open("https://app.liquidsat.com/", "_blank")}
        >
          Go to App
        </Button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-wwwfigmacomwhite border-t">
          <nav className="flex flex-col px-3 py-4 space-y-3">
            {navLinks.map((link, index) => (
              <a
                key={index}
                className="font-normal text-wwwfigmacomriver-bed text-sm hover:text-wwwfigmacomblue-ribbon transition-colors py-2"
                href={link.href}
                data-testid={`nav-link-mobile-${index}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.text}
              </a>
            ))}
            <Button
              className="w-full h-10 px-4 py-2 bg-wwwfigmacomblue-ribbon hover:bg-blue-700 rounded-[6.75px] text-sm font-medium"
              data-testid="button-go-to-app-mobile"
              onClick={() => {
                window.open("https://app.liquidsat.com/", "_blank");
                setIsMobileMenuOpen(false);
              }}
            >
              Go to App
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
