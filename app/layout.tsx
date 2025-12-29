import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://liquidsat.com"),
  title: {
    default:
      "LiquidSat - Your BTC. Your Yield. No Wraps. | First Self-Custodial BTCFi Protocol",
    template: "%s | LiquidSat",
  },
  description:
    "The first self-custodial, cross-chain BTCFi protocol. No bridges, no custodians, no wrapped assets. Unlock native BTC liquidity with script-based escrow. Lock BTC on Bitcoin, get stablecoins instantly — Make your Bitcoin work for you without leaving Bitcoin.",
  keywords: [
    "BTCFi",
    "Bitcoin DeFi",
    "self-custodial Bitcoin",
    "native BTC liquidity",
    "Bitcoin lending",
    "Bitcoin borrowing",
    "BTC collateral",
    "no wrapped BTC",
    "cross-chain BTCFi",
    "Bitcoin liquidity protocol",
    "BTC yield",
    "Bitcoin loans",
    "stablecoin loans",
    "Bitcoin script locks",
    "non-custodial Bitcoin",
    "Bitcoin capital efficiency",
    "CoreDAO",
    "Bitcoin Layer 2",
    "BTC utility",
    "unlock BTC",
  ],
  authors: [{ name: "LiquidSat" }],
  creator: "LiquidSat",
  publisher: "LiquidSat",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "LiquidSat - Your BTC. Your Yield. No Wraps.",
    description:
      "The first self-custodial, cross-chain BTCFi protocol. No bridges, no custodians. Unlock native BTC liquidity with script-based escrow. Make your Bitcoin work for you — without leaving Bitcoin.",
    url: "https://liquidsat.com",
    siteName: "LiquidSat",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "LiquidSat - First Self-Custodial BTCFi Protocol",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LiquidSat - Your BTC. Your Yield. No Wraps.",
    description:
      "The first self-custodial, cross-chain BTCFi protocol. No bridges, no custodians. Unlock native BTC liquidity — Make your Bitcoin work for you without leaving Bitcoin.",
    images: ["/og-image.png"],
    creator: "@liquidsat",
    site: "@liquidsat",
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://liquidsat.com",
  },
  verification: {
    // Add your verification tokens when ready
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: "LiquidSat",
    description:
      "The first self-custodial, cross-chain BTCFi protocol. Native BTC liquidity with no bridges, no custodians, no wrapped assets. Lock BTC on Bitcoin, get stablecoins instantly via script-based escrow.",
    url: "https://liquidsat.com",
    logo: "https://liquidsat.com/liquidsat-logo.png",
    sameAs: [
      // Add your social media URLs here when available
      // "https://twitter.com/liquidsat",
      // "https://linkedin.com/company/liquidsat",
    ],
    areaServed: "Worldwide",
    serviceType: [
      "BTCFi Protocol",
      "Self-Custodial Bitcoin Lending",
      "Native BTC Liquidity",
      "Cross-Chain Bitcoin Protocol",
      "Bitcoin Script-Based Escrow",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "BTCFi Liquidity Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Native BTC Borrowing",
            description:
              "Borrow stablecoins against BTC with native script locks. Your keys, your BTC, your yield.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Self-Custodial BTC Lending",
            description:
              "Lend BTC to earn yield without wrapped assets or bridges",
          },
        },
      ],
    },
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
