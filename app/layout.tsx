import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://liquidsat.com"),
  title: {
    default: "LiquidSat - Unlock Capital, Stay Bitcoin True",
    template: "%s | LiquidSat",
  },
  description:
    "Use your Bitcoin to unlock liquidity without selling. Get instant access to capital while maintaining your Bitcoin position. Bitcoin-backed loans and lending platform.",
  keywords: [
    "Bitcoin",
    "liquidity",
    "Bitcoin lending",
    "Bitcoin borrowing",
    "crypto loans",
    "Bitcoin collateral",
    "DeFi",
    "Bitcoin finance",
    "cryptocurrency lending",
    "Bitcoin-backed loans",
    "Bitcoin loans",
    "crypto lending",
    "HODL and borrow",
    "Lightning Network",
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
    title: "LiquidSat - Unlock Capital, Stay Bitcoin True",
    description:
      "Use your Bitcoin to unlock liquidity without selling. Get instant access to capital while maintaining your Bitcoin position.",
    url: "https://liquidsat.com",
    siteName: "LiquidSat",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "LiquidSat - Bitcoin Liquidity Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LiquidSat - Unlock Capital, Stay Bitcoin True",
    description:
      "Use your Bitcoin to unlock liquidity without selling. Get instant access to capital while maintaining your Bitcoin position.",
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
      "Bitcoin liquidity platform offering Bitcoin-backed loans and lending services",
    url: "https://liquidsat.com",
    logo: "https://liquidsat.com/liquidsat-logo.png",
    sameAs: [
      // Add your social media URLs here when available
      // "https://twitter.com/liquidsat",
      // "https://linkedin.com/company/liquidsat",
    ],
    areaServed: "Worldwide",
    serviceType: [
      "Bitcoin Lending",
      "Bitcoin Borrowing",
      "Cryptocurrency Loans",
      "Bitcoin-Backed Loans",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Bitcoin Liquidity Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Bitcoin-Backed Loans",
            description:
              "Borrow against your Bitcoin collateral without selling",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Bitcoin Lending",
            description: "Lend your Bitcoin to earn competitive yields",
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
