import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://liquidsat.com"),
  title: {
    default: "LiquidSat | Non-Custodial Bitcoin Financing Layer",
    template: "%s | LiquidSat",
  },
  description:
    "Unlock Bitcoin liquidity without selling, wrapping, or custody. LiquidSat is a non-custodial Bitcoin financing layer for DeFi, payments, and real-world use.",
  keywords: [
    "Bitcoin financing",
    "non-custodial Bitcoin",
    "BTC liquidity",
    "Bitcoin financing layer",
    "self-custodial Bitcoin",
    "Bitcoin lending",
    "Bitcoin borrowing",
    "BTC collateral",
    "no wrapped BTC",
    "bridge-free Bitcoin",
    "Bitcoin DeFi",
    "native Bitcoin",
    "Bitcoin script locks",
    "BTC-backed financing",
    "peer-to-peer Bitcoin lending",
    "Bitcoin yield",
    "stablecoin loans",
    "Bitcoin without custody",
    "Bitcoin capital efficiency",
    "unlock BTC liquidity",
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
    title: "LiquidSat | Non-Custodial Bitcoin Financing Layer",
    description:
      "Unlock Bitcoin liquidity without selling, wrapping, or custody. A Non-custodial Bitcoin financing layer for DeFi, payments, and real-world use.",
    url: "https://liquidsat.com/",
    siteName: "LiquidSat",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://liquidsat.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "LiquidSat - Non-Custodial Bitcoin Financing Layer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LiquidSat | Bitcoin Financing, Reimagined",
    description:
      "Turn Bitcoin into usable liquidity without custody, wrapping, or bridges. Non-custodial Bitcoin financing across chains.",
    images: ["https://liquidsat.com/og-image.png"],
    creator: "@liquidsat_",
    site: "@liquidsat_",
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://liquidsat.com/",
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
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "LiquidSat",
    url: "https://liquidsat.com",
    logo: "https://liquidsat.com/logo.png",
    sameAs: ["https://x.com/liquidsat_", "https://discord.gg/liquidsat"],
    description:
      "LiquidSat is a non-custodial Bitcoin financing layer that enables BTC-backed liquidity and financial utility without wrapping, custody, or bridges.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is LiquidSat?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "LiquidSat is a non-custodial Bitcoin financing layer that allows BTC holders to unlock liquidity and financial utility across chains without wrapping, custody, or bridges.",
        },
      },
      {
        "@type": "Question",
        name: "How is LiquidSat different from traditional Bitcoin lending platforms?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "LiquidSat does not custody funds, wrap BTC, or rely on intermediaries. Bitcoin remains secured on Bitcoin via script-based collateral, while liquidity moves directly between wallets at settlement.",
        },
      },
      {
        "@type": "Question",
        name: "Is LiquidSat a lending protocol or a financing platform?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "LiquidSat is a Bitcoin financing platform. Borrowing and lending are the first applications built on top of its non-custodial BTC collateral and settlement engine.",
        },
      },
      {
        "@type": "Question",
        name: "Does LiquidSat use wrapped BTC, bridges, or synthetic assets?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. LiquidSat does not use wrapped BTC, bridges, or synthetic assets. All financing is secured using native Bitcoin scripts, typically through a multi-signature setup between counterparties.",
        },
      },
      {
        "@type": "Question",
        name: "How is Bitcoin secured during a loan or financing transaction?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bitcoin is locked using script-based, deterministic conditions that pre-define repayment, expiry, or liquidation outcomes, ensuring trustless and predictable settlement.",
        },
      },
      {
        "@type": "Question",
        name: "Is borrowing instant on LiquidSat?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. LiquidSat supports instant liquidity through pooled markets, as well as custom peer-to-peer financing options for negotiated terms.",
        },
      },
      {
        "@type": "Question",
        name: "How do lenders earn yield, and are funds ever held by LiquidSat?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Lenders earn yield by providing stablecoin liquidity secured by native Bitcoin collateral. Funds are never held by LiquidSat and move directly from lender wallets to borrower wallets at the time of loan matching.",
        },
      },
      {
        "@type": "Question",
        name: "What can LiquidSat be used for, and who is it built for?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "LiquidSat enables BTC-backed liquidity for DeFi, payments, RWAs, trading, investments, and real-world spending. It is built for long-term Bitcoin holders, developers, and institutions seeking non-custodial financing without selling BTC.",
        },
      },
      {
        "@type": "Question",
        name: "What happens if a loan is not repaid?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Loan outcomes are enforced by pre-defined, script-based settlement logic, including liquidation when conditions are met.",
        },
      },
      {
        "@type": "Question",
        name: "Why is non-custodial Bitcoin financing important?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Non-custodial Bitcoin financing removes counterparty, bridge, and custodial risks while preserving Bitcoin's core security and self-sovereignty guarantees.",
        },
      },
    ],
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
        <link
          href="https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
