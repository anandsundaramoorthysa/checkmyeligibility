import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

// GovEligify brand palette — the Indian national flag.
//   Saffron #FF9933 · White · India-green #138808 · Chakra-navy #000080 / #0A3D91
// Accessibility rule: saffron and green FAIL AA as small text on white, so body
// text + primary buttons use navy/ink; saffron is for headings/icons/accents and
// green is for "eligible/success" badges (large/weighted or on tinted bg).
const config: Config = {
  darkMode: "class",
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0A3D91", // chakra blue — primary brand, text accents, buttons
          deep: "#000080", // true flag navy — deepest brand tone
          dark: "#06245A",
          deeper: "#04162F", // dark-mode page base
          light: "#1453B8", // hover / raised
          softer: "#2C5FB0", // borders on navy
        },
        saffron: {
          DEFAULT: "#FF9933", // flag saffron — highlights, icon accents, CTAs
          deep: "#E97A1A", // hover/active
          soft: "#FFE9D2", // tint backgrounds
        },
        green: {
          DEFAULT: "#138808", // India green — "eligible / success"
          deep: "#0E6606",
          soft: "#DCEFD7",
        },
        surface: {
          DEFAULT: "#F7F8FC", // page background
          card: "#FFFFFF",
          muted: "#EEF1F8",
          subtle: "#F2F5FB", // hover rows
        },
        ink: {
          DEFAULT: "#0B1020", // body text
          muted: "#5B6577",
          faint: "#8A93A6", // placeholders / tertiary
        },
      },
      fontFamily: {
        // Inter for body/UI, Sora for display/headings — wired via next/font CSS
        // vars in layout.tsx. Noto fallbacks render Tamil + Hindi glyphs per-char.
        sans: [
          "var(--font-inter)",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Noto Sans Tamil",
          "Noto Sans Devanagari",
          "sans-serif",
        ],
        display: [
          "var(--font-sora)",
          "var(--font-inter)",
          "system-ui",
          "sans-serif",
        ],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(10, 61, 145, 0.06), 0 4px 14px rgba(10, 61, 145, 0.08)",
        "card-lg": "0 2px 6px rgba(10, 61, 145, 0.08), 0 16px 36px rgba(10, 61, 145, 0.12)",
        header: "0 1px 0 rgba(10, 61, 145, 0.08)",
        launcher: "0 8px 28px rgba(10, 61, 145, 0.35)",
      },
      backgroundImage: {
        "page-light": "linear-gradient(180deg, #FFFFFF 0%, #F7F8FC 100%)",
        "tricolor": "linear-gradient(90deg, #FF9933 0%, #FFFFFF 50%, #138808 100%)",
        "navy-gradient": "linear-gradient(160deg, #0A3D91 0%, #06245A 100%)",
        "hero-glow":
          "radial-gradient(60% 50% at 50% 0%, rgba(255,153,51,0.10) 0%, rgba(255,255,255,0) 70%)",
      },
      keyframes: {
        "typing-dot": {
          "0%, 60%, 100%": { transform: "translateY(0)", opacity: "0.35" },
          "30%": { transform: "translateY(-3px)", opacity: "1" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(4px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "welcome-rise": {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.9)", opacity: "0.7" },
          "70%, 100%": { transform: "scale(1.6)", opacity: "0" },
        },
      },
      animation: {
        "typing-dot": "typing-dot 1.2s ease-in-out infinite",
        "fade-in": "fade-in 180ms ease-out",
        "welcome-rise": "welcome-rise 420ms cubic-bezier(0.16,1,0.3,1) both",
        "pulse-ring": "pulse-ring 2.4s cubic-bezier(0.16,1,0.3,1) infinite",
      },
    },
  },
  plugins: [
    // touch:* applies only on coarse-pointer devices — used to enlarge tap
    // targets to >=44x44px on phones without bloating desktop density.
    plugin(({ addVariant }) => {
      addVariant("touch", "@media (pointer: coarse)");
    }),
  ],
};

export default config;
