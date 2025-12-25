import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#09090b",
        surface: "#18181b",
        "surface-2": "#111113",
        border: "#27272a",
        text: "#e4e4e7",
        muted: "#a1a1aa",

        primary: "#a855f7",
        secondary: "#ec4899",
        accent: "#06b6d4",

        /* backward-compat for old usage */
        sand: {
          50: "#09090b",
          100: "#18181b",
          200: "#27272a",
        },
        brand: {
          600: "#a855f7",
          700: "#a855f7",
        },
        teal: {
          600: "#06b6d4",
        },
        ink: "#e4e4e7",
      },
      boxShadow: {
        soft: "0 12px 36px rgba(0,0,0,0.38)",
        glow:
          "0 0 0 1px rgba(168,85,247,0.14), 0 18px 50px rgba(168,85,247,0.12)",
      },
      borderRadius: {
        xl: "14px",
        "2xl": "16px",
      },
    },
  },
  plugins: [],
} satisfies Config;
