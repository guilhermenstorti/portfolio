import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--bg)",
        nav: "var(--nav-bg)",
        foreground: "var(--text)",
        muted: "var(--text-muted)",
        dim: "var(--text-dim)",
        faint: "var(--text-faint)",
        border: {
          DEFAULT: "var(--border)",
          soft: "var(--border-soft)",
          strong: "var(--border-strong)",
        },
        accent: "var(--accent)",
        warn: "var(--warn)",
        btn: {
          DEFAULT: "var(--btn-bg)",
          hover: "var(--btn-bg-hover)",
          foreground: "var(--btn-text)",
        },
        contrast: {
          DEFAULT: "var(--contrast-bg)",
          foreground: "var(--contrast-text)",
          muted: "var(--contrast-text-muted)",
          dim: "var(--contrast-text-dim)",
        },
        green: "var(--green)",
        "green-result": "var(--green-result)",
        card: {
          DEFAULT: "var(--card-bg)",
          "hover-border": "var(--card-hover-border)",
        },
        badge: {
          DEFAULT: "var(--badge-bg)",
          foreground: "var(--badge-text)",
        },
        company: {
          text: "var(--company-text)",
          "hover-border": "var(--company-hover-border)",
        },
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
        sans: ["IBM Plex Sans", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        heading: ["Space Grotesk", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "1160px",
      },
      borderRadius: {
        btn: "3px",
        card: "4px",
      },
      screens: {
        tablet: "768px",
        desktop: "1024px",
      },
    },
  },
  plugins: [],
} satisfies Config;
