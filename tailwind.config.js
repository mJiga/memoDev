/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bone: "#F5F2EA",
        paper: "#FFFDF9",
        "card-bg": "#FFFFFF",
        ink: "#2A2C3F",
        primary: "#3D405B",
        muted: "#6C6E7E",
        "muted-soft": "#9395A2",
        sage: {
          DEFAULT: "#81B29A",
          light: "#A8CCB9",
          dark: "#5F9478",
          deep: "#42705A",
        },
        clay: {
          DEFAULT: "#B5724A",
          light: "#D89B74",
        },
        "accent-hover": "#3D5A80",
        border: "#E4DFD3",
      },
      fontFamily: {
        serif: ['"DM Serif Display"', "Georgia", "serif"],
        sans: ['"DM Sans"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      borderRadius: {
        card: "12px",
        xl2: "20px",
      },
      boxShadow: {
        subtle: "0 2px 4px rgba(42,44,63,0.03)",
        card: "0 4px 16px rgba(42,44,63,0.05)",
        "card-hover": "0 18px 48px -12px rgba(42,44,63,0.14)",
        glow: "0 0 40px -8px rgba(129,178,154,0.45)",
      },
      spacing: {
        section: "clamp(72px, 10vw, 132px)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1)" },
          "50%": { transform: "translate3d(40px,-36px,0) scale(1.08)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.8)", opacity: "0.7" },
          "80%, 100%": { transform: "scale(2.2)", opacity: "0" },
        },
        "caret-blink": {
          "0%, 45%": { opacity: "1" },
          "50%, 95%": { opacity: "0" },
        },
      },
      animation: {
        drift: "drift 18s ease-in-out infinite",
        marquee: "marquee 38s linear infinite",
        "pulse-ring": "pulse-ring 2.4s cubic-bezier(0.24,0,0.38,1) infinite",
        "caret-blink": "caret-blink 1.1s steps(1) infinite",
      },
    },
  },
  plugins: [],
};
