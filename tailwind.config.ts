import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0f172a",
          light: "#334155",
        },
        accent: {
          DEFAULT: "#0369a1",
          hover: "#075985",
        },
        highlight: "#d97706",
        success: "#10b981",
        surface: "#f8fafc",
        ink: {
          DEFAULT: "#0f172a",
          light: "#64748b",
        },
        border: "#e2e8f0",
        case: {
          "mogno-start": "#8b5cf6",
          "mogno-end": "#6d28d9",
          "accountfy-ai-start": "#8b5cf6",
          "accountfy-ai-end": "#a78bfa",
          "accountfy-fpa-start": "#10b981",
          "accountfy-fpa-end": "#059669",
          "euphoria-start": "#3b82f6",
          "euphoria-end": "#1e40af",
        },
      },
      fontFamily: {
        sans: ["DM Sans", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        heading: ["Space Grotesk", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      screens: {
        tablet: "768px",
        desktop: "1024px",
      },
    },
  },
  plugins: [],
} satisfies Config;
