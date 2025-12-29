module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "wwwfigmacomathens-gray": "var(--wwwfigmacomathens-gray)",
        "wwwfigmacomblack-10": "var(--wwwfigmacomblack-10)",
        "wwwfigmacomblue-ribbon": "var(--wwwfigmacomblue-ribbon)",
        "wwwfigmacomcod-gray": "var(--wwwfigmacomcod-gray)",
        wwwfigmacomebony: "var(--wwwfigmacomebony)",
        wwwfigmacomfeta: "var(--wwwfigmacomfeta)",
        "wwwfigmacomgray-chateau": "var(--wwwfigmacomgray-chateau)",
        "wwwfigmacomgreen-haze": "var(--wwwfigmacomgreen-haze)",
        wwwfigmacommirage: "var(--wwwfigmacommirage)",
        wwwfigmacommischka: "var(--wwwfigmacommischka)",
        "wwwfigmacompale-sky": "var(--wwwfigmacompale-sky)",
        "wwwfigmacomriver-bed": "var(--wwwfigmacomriver-bed)",
        wwwfigmacomserenade: "var(--wwwfigmacomserenade)",
        "wwwfigmacomstorm-gray": "var(--wwwfigmacomstorm-gray)",
        wwwfigmacomvermilion: "var(--wwwfigmacomvermilion)",
        wwwfigmacomwhite: "var(--wwwfigmacomwhite)",
        wwwfigmacomzumthor: "var(--wwwfigmacomzumthor)",
        "wwwfigmacomorange-primary": "var(--wwwfigmacomorange-primary)",
        "wwwfigmacomorange-light": "var(--wwwfigmacomorange-light)",
        "wwwfigmacomorange-gradient-start":
          "var(--wwwfigmacomorange-gradient-start)",
        "wwwfigmacomorange-gradient-end":
          "var(--wwwfigmacomorange-gradient-end)",
        "orange-25": "#FEF7ED",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        "www-figma-com-inter-bold":
          "var(--www-figma-com-inter-bold-font-family)",
        "www-figma-com-inter-regular":
          "var(--www-figma-com-inter-regular-font-family)",
        "www-figma-com-semantic-button":
          "var(--www-figma-com-semantic-button-font-family)",
        "www-figma-com-semantic-heading-2":
          "var(--www-figma-com-semantic-heading-2-font-family)",
        "www-figma-com-semantic-heading-3":
          "var(--www-figma-com-semantic-heading-3-font-family)",
        "www-figma-com-semantic-input":
          "var(--www-figma-com-semantic-input-font-family)",
        "www-figma-com-semantic-label":
          "var(--www-figma-com-semantic-label-font-family)",
        "www-figma-com-semantic-link":
          "var(--www-figma-com-semantic-link-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
  darkMode: ["class"],
};
