// SEO Metadata Constants
export const SEO_METADATA = {
  // Site Information
  siteName: "LiquidSat",
  siteUrl: "https://liquidsat.com", // Update with your actual domain

  // Default Page Metadata
  title: "LiquidSat - Unlock Capital, Stay Bitcoin True",
  description:
    "Use your Bitcoin to unlock liquidity without selling. Get instant access to capital while maintaining your Bitcoin position.",

  // Keywords
  keywords: [
    "Bitcoin",
    "Liquidity",
    "Bitcoin Loans",
    "Cryptocurrency",
    "DeFi",
    "Bitcoin Collateral",
    "Crypto Lending",
    "Bitcoin Finance",
  ],

  // Social Media
  author: "LiquidSat",
  twitterHandle: "@liquidsat", // Update with actual Twitter handle

  // Open Graph / Social Sharing
  ogImage: "/og-image.jpg", // Update with actual OG image path
  ogImageWidth: "1200",
  ogImageHeight: "630",
  ogType: "website",

  // Additional Meta
  themeColor: "#000000",
  locale: "en_US",

  // Structured Data
  organizationName: "LiquidSat",
  organizationLogo: "/logo.png", // Update with actual logo path
} as const;

// Page-specific metadata
export const PAGE_METADATA = {
  home: {
    title: "LiquidSat - Unlock Capital, Stay Bitcoin True",
    description:
      "Use your Bitcoin to unlock liquidity without selling. Get instant access to capital while maintaining your Bitcoin position.",
    path: "/",
  },
  calculator: {
    title: "Loan Calculator - LiquidSat",
    description:
      "Calculate your Bitcoin-backed loan terms. See how much liquidity you can unlock with your Bitcoin.",
    path: "/calculator",
  },
  howItWorks: {
    title: "How It Works - LiquidSat",
    description:
      "Learn how LiquidSat helps you unlock capital from your Bitcoin holdings without selling.",
    path: "/how-it-works",
  },
  faq: {
    title: "FAQ - LiquidSat",
    description:
      "Frequently asked questions about Bitcoin-backed loans and LiquidSat's services.",
    path: "/faq",
  },
} as const;

export type PageKey = keyof typeof PAGE_METADATA;
