import type { Config } from "tailwindcss";
import { fontFamily, borderRadius, boxShadow } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },

      colors: {
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
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        ...boxShadow,
        'custom': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 2px 2px 2px 2px rgba(0, 0, 0, 0.06)',
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
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
    plugin(function ({ addBase, addComponents, addUtilities }) {
      addComponents({
        ".flexj-start": {
          "@apply flex items-center justify-start": {},
        },
        ".border-xs": {
          "@apply  border": {},
        },
        ".border-sm": {
          "@apply  border-2": {},
        },
        ".border-md": {
          "@apply  border-[5px]": {},
        },
        ".border-lg": {
          "@apply  border-[6px]": {},
        },
        ".border-xl": {
          "@apply  border-[7px]": {},
        },
        ".flexj-end": {
          "@apply flex items-center justify-end": {},
        },
        ".flex-center": {
          "@apply flex items-center justify-center": {},
        },
        ".flex-start": {
          "@apply flex items-start justify-center": {},
        },
        ".flex-end": {
          "@apply flex items-end justify-center": {},
        },
        ".flexr-center": {
          "@apply flex flex-row items-center justify-center": {},
        },
        ".flexr-between": {
          "@apply flex flex-row items-center justify-between": {},
        },
        ".flexrs-between": {
          "@apply flex flex-row-reverse items-center justify-between": {},
        },
        ".flexc-center": {
          "@apply flex flex-col items-center justify-center": {},
        },

      })
    }),
  ],
} satisfies Config;

export default config;
