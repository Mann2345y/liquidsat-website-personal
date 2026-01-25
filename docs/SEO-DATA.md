# LiquidSat — SEO Data Reference

> Single source of truth for homepage metadata, Open Graph, Twitter cards, image alt text, heading hierarchy, and structured data. Use this for implementation and audits.

---

## 1. Homepage SEO Metadata

| Field | Value | Constraint |
|-------|-------|------------|
| **Meta Title** | LiquidSat \| Non-Custodial Bitcoin Financing Layer | ≤60 chars |
| **Meta Description** | Unlock Bitcoin liquidity without selling, wrapping, or custody. LiquidSat is a non-custodial Bitcoin financing layer for DeFi, payments, and real-world use. | ≤155 chars |
| **Slug** | `/` | — |
| **Canonical URL** | `https://liquidsat.com/` | — |

### Raw values (for copy-paste)

```
Title: LiquidSat | Non-Custodial Bitcoin Financing Layer
Description: Unlock Bitcoin liquidity without selling, wrapping, or custody. LiquidSat is a non-custodial Bitcoin financing layer for DeFi, payments, and real-world use.
Canonical: https://liquidsat.com/
```

---

## 2. Open Graph (Facebook / Telegram / Discord)

```html
<meta property="og:title" content="LiquidSat | Non-Custodial Bitcoin Financing Layer" />
<meta property="og:description" content="Unlock Bitcoin liquidity without selling, wrapping, or custody. A Non-custodial Bitcoin financing layer for DeFi, payments, and real-world use." />
<meta property="og:image" content="https://liquidsat.com/og-image.png" />
<meta property="og:url" content="https://liquidsat.com/" />
<meta property="og:type" content="website" />
```

### Next.js `openGraph` object

```js
openGraph: {
  title: "LiquidSat | Non-Custodial Bitcoin Financing Layer",
  description: "Unlock Bitcoin liquidity without selling, wrapping, or custody. A Non-custodial Bitcoin financing layer for DeFi, payments, and real-world use.",
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
}
```

---

## 3. Twitter / X Card

```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="LiquidSat | Bitcoin Financing, Reimagined" />
<meta name="twitter:description" content="Turn Bitcoin into usable liquidity without custody, wrapping, or bridges. Non-custodial Bitcoin financing across chains." />
<meta name="twitter:image" content="https://liquidsat.com/og-image.png" />
```

### Next.js `twitter` object

```js
twitter: {
  card: "summary_large_image",
  title: "LiquidSat | Bitcoin Financing, Reimagined",
  description: "Turn Bitcoin into usable liquidity without custody, wrapping, or bridges. Non-custodial Bitcoin financing across chains.",
  images: ["https://liquidsat.com/og-image.png"],
  creator: "@liquidsat_",
  site: "@liquidsat_",
}
```

---

## 4. Image Alt Text (Non-Spammy, Descriptive)

| Image / Asset | Recommended Alt Text |
|---------------|----------------------|
| Hero background | abstract bitcoin financing layer showing non-custodial liquidity flow |
| Financing engine graphic | non-custodial bitcoin financing architecture using script-based collateral |
| Pool + P2P model | bitcoin financing models including pooled and peer-to-peer liquidity |
| BTC lock visual | native bitcoin script lock securing bitcoin-backed financing |
| Borrow / access card | unlock bitcoin liquidity without selling using non-custodial financing |
| Security section | bridge-free bitcoin financing secured by native scripts |

### Usage

- Use exactly one `alt` per image; avoid stuffing keywords.
- For purely decorative images, use `alt=""` and `role="presentation"` only when appropriate.

---

## 5. Homepage H1–H3 Structure

### H1 (one per page)

```
Native Bitcoin Financing, Reimagined
         Non-Custodial, Instant, and Bridge-Free
```

*Rendered as a two-line H1 with the subline as part of the same heading block.*

---

### H2s (section headers)

| Section | H2 |
|---------|----|
| Hero (conceptual) | — *(H1 covers hero)* |
| Why LiquidSat | The Bitcoin Financing Layer — Unlock Liquidity Without Selling Your BTC |
| Execution modes | One Bitcoin Financing Layer. Multiple Paths to Productivity. |
| Use cases | From Bitcoin Collateral to Real-World Utility |
| Security | Non-Custodial by Default. Bitcoin Security by Design. Infrastructure for BTC-Backed Finance. |
| FAQs | — *(use “FAQs” or “Frequently Asked Questions” as section H2 if needed)* |
| Final CTA | Your Bitcoin. Your Liquidity. Your Financial Power. |

**Alternate / legacy H2 set** (for consistency checks):

- A Non-Custodial Financing Layer for Bitcoin  
- Unlock Bitcoin Liquidity Without Selling  
- Two Ways to Access Bitcoin-Backed Liquidity  
- Built on Native Bitcoin Security  
- A New Bitcoin Liquidity Ecosystem  
- Your Bitcoin. Your Control.

---

### H3s (subsections)

| Parent | H3 |
|--------|----|
| Execution modes | Instant Markets (Market-Based Financing) |
| Execution modes | Custom Agreements (Peer-to-Peer Financing) |
| Security | Native Script Escrow |
| Security | On-Chain Risk & Automation |
| Security | Pre-Signed Settlement |

**Alternate / legacy H3 set**:

- Instant Liquidity via Pooled Financing  
- Custom Financing via Peer-to-Peer Markets  
- Script-Based, Deterministic Settlement  
- No Wrapping. No Bridges. No Custody.

---

## 6. Structured Data (JSON-LD)

### 6.1 Organization Schema

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "LiquidSat",
  "url": "https://liquidsat.com",
  "logo": "https://liquidsat.com/logo.png",
  "sameAs": [
    "https://x.com/liquidsat_",
    "https://discord.gg/liquidsat"
  ],
  "description": "LiquidSat is a non-custodial Bitcoin financing layer that enables BTC-backed liquidity and financial utility without wrapping, custody, or bridges."
}
```

---

### 6.2 FAQ Schema (All 10 Questions)

Use this in a `<script type="application/ld+json">` in the document `<head>` or at the top of the FAQ section. **All 10 FAQs from the spec are included.**

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is LiquidSat?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "LiquidSat is a non-custodial Bitcoin financing layer that allows BTC holders to unlock liquidity and financial utility across chains without wrapping, custody, or bridges."
      }
    },
    {
      "@type": "Question",
      "name": "How is LiquidSat different from traditional Bitcoin lending platforms?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "LiquidSat does not custody funds, wrap BTC, or rely on intermediaries. Bitcoin remains secured on Bitcoin via script-based collateral, while liquidity moves directly between wallets at settlement."
      }
    },
    {
      "@type": "Question",
      "name": "Is LiquidSat a lending protocol or a financing platform?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "LiquidSat is a Bitcoin financing platform. Borrowing and lending are the first applications built on top of its non-custodial BTC collateral and settlement engine."
      }
    },
    {
      "@type": "Question",
      "name": "Does LiquidSat use wrapped BTC, bridges, or synthetic assets?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. LiquidSat does not use wrapped BTC, bridges, or synthetic assets. All financing is secured using native Bitcoin scripts, typically through a multi-signature setup between counterparties."
      }
    },
    {
      "@type": "Question",
      "name": "How is Bitcoin secured during a loan or financing transaction?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bitcoin is locked using script-based, deterministic conditions that pre-define repayment, expiry, or liquidation outcomes, ensuring trustless and predictable settlement."
      }
    },
    {
      "@type": "Question",
      "name": "Is borrowing instant on LiquidSat?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. LiquidSat supports instant liquidity through pooled markets, as well as custom peer-to-peer financing options for negotiated terms."
      }
    },
    {
      "@type": "Question",
      "name": "How do lenders earn yield, and are funds ever held by LiquidSat?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Lenders earn yield by providing stablecoin liquidity secured by native Bitcoin collateral. Funds are never held by LiquidSat and move directly from lender wallets to borrower wallets at the time of loan matching."
      }
    },
    {
      "@type": "Question",
      "name": "What can LiquidSat be used for, and who is it built for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "LiquidSat enables BTC-backed liquidity for DeFi, payments, RWAs, trading, investments, and real-world spending. It is built for long-term Bitcoin holders, developers, and institutions seeking non-custodial financing without selling BTC."
      }
    },
    {
      "@type": "Question",
      "name": "What happens if a loan is not repaid?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Loan outcomes are enforced by pre-defined, script-based settlement logic, including liquidation when conditions are met."
      }
    },
    {
      "@type": "Question",
      "name": "Why is non-custodial Bitcoin financing important?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Non-custodial Bitcoin financing removes counterparty, bridge, and custodial risks while preserving Bitcoin's core security and self-sovereignty guarantees."
      }
    }
  ]
}
```

---

## 7. FAQ Copy (On-Page, for CMS/Components)

| # | Question | Answer |
|---|----------|--------|
| 1 | What is LiquidSat? | LiquidSat is a non-custodial Bitcoin financing layer that allows BTC holders to unlock liquidity and financial utility across chains without wrapping, custody, or bridges. |
| 2 | How is LiquidSat different from traditional Bitcoin lending platforms? | LiquidSat does not custody funds, wrap BTC, or rely on intermediaries. Bitcoin remains secured on Bitcoin via script-based collateral, while liquidity moves directly between wallets at settlement. |
| 3 | Is LiquidSat a lending protocol or a financing platform? | LiquidSat is a Bitcoin financing platform. Borrowing and lending are the first applications built on top of its non-custodial BTC collateral and settlement engine. |
| 4 | Does LiquidSat use wrapped BTC, bridges, or synthetic assets? | No. LiquidSat does not use wrapped BTC, bridges, or synthetic assets. All financing is secured using native Bitcoin scripts, typically through a multi-signature setup between counterparties. |
| 5 | How is Bitcoin secured during a loan or financing transaction? | Bitcoin is locked using script-based, deterministic conditions that pre-define repayment, expiry, or liquidation outcomes, ensuring trustless and predictable settlement. |
| 6 | Is borrowing instant on LiquidSat? | Yes. LiquidSat supports instant liquidity through pooled markets, as well as custom peer-to-peer financing options for negotiated terms. |
| 7 | How do lenders earn yield, and are funds ever held by LiquidSat? | Lenders earn yield by providing stablecoin liquidity secured by native Bitcoin collateral. Funds are never held by LiquidSat and move directly from lender wallets to borrower wallets at the time of loan matching. |
| 8 | What can LiquidSat be used for, and who is it built for? | LiquidSat enables BTC-backed liquidity for DeFi, payments, RWAs, trading, investments, and real-world spending. It is built for long-term Bitcoin holders, developers, and institutions seeking non-custodial financing without selling BTC. |
| 9 | What happens if a loan is not repaid? | Loan outcomes are enforced by pre-defined, script-based settlement logic, including liquidation when conditions are met. |
| 10 | Why is non-custodial Bitcoin financing important? | Non-custodial Bitcoin financing removes counterparty, bridge, and custodial risks while preserving Bitcoin's core security and self-sovereignty guarantees. |

---

## 8. Page Structure & Key CTAs (for SEO/Content Alignment)

| Section | Primary CTA | Secondary CTA |
|---------|-------------|---------------|
| **Navbar** | Docs, Join Waitlist | — |
| **Hero** | Join Waitlist → | Launch App |
| **Why LiquidSat** | → Learn How It Works | — |
| **Security** | → Read Whitepaper | — |
| **Final CTA** | Launch App | Join Testnet; Whitepaper, Docs, Socials |

Page order: **Navbar** → **Hero** → **Why LiquidSat** → **Bitcoin Financing, Two Execution Modes** → **What You Can Do With Bitcoin-Backed Liquidity** → **Security & Trust** → **FAQs** → **Final CTA**.

---

## 9. Implementation Checklist

- [ ] **Meta**  
  - [ ] `title` ≤60 chars  
  - [ ] `description` ≤155 chars  
  - [ ] `canonical` = `https://liquidsat.com/`
- [ ] **Open Graph**  
  - [ ] `og:title`, `og:description`, `og:image`, `og:url`, `og:type`  
  - [ ] `og:image` = `https://liquidsat.com/og-image.png` (absolute)
- [ ] **Twitter**  
  - [ ] `twitter:card` = `summary_large_image`  
  - [ ] `twitter:title`, `twitter:description`, `twitter:image`  
  - [ ] `twitter:creator` / `twitter:site` = `@liquidsat_`
- [ ] **Images**  
  - [ ] Hero, financing engine, Pool+P2P, BTC lock, borrow card, security section use the alt strings in §4.
- [ ] **Headings**  
  - [ ] One H1 (hero)  
  - [ ] H2s per section as in §5  
  - [ ] H3s for Instant Markets, Custom Agreements, and security principles
- [ ] **Structured data**  
  - [ ] Organization schema in `<head>`  
  - [ ] FAQPage schema with all 10 questions in `<head>` or above FAQ section  
  - [ ] Validate with [Google Rich Results Test](https://search.google.com/test/rich-results) and [Schema.org Validator](https://validator.schema.org/)

---

## 10. File and URL Reference

| Asset | URL / path |
|-------|------------|
| OG image | `https://liquidsat.com/og-image.png` |
| Logo | `https://liquidsat.com/logo.png` |
| Homepage | `https://liquidsat.com/` |
| X / Twitter | `https://x.com/liquidsat_` |
| Discord | `https://discord.gg/liquidsat` |

---

*Last updated from spec: Homepage positioning, Why LiquidSat, Execution Modes, Use Cases, Security, FAQs, Final CTA, and full SEO/OG/Twitter/Image/Headings/Structured Data.*
