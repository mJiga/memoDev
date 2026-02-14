/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bone: "#F5F2EA",
        "card-bg": "#FFFFFF",
        primary: "#3D405B",
        muted: "#818181",
        sage: {
          DEFAULT: "#81B29A",
          light: "#a8ccb9",
          dark: "#5f9478",
        },
        "accent-hover": "#3D5A80",
        border: "#E0E0E0",
      },
      fontFamily: {
        serif: ['"DM Serif Display"', "Georgia", "serif"],
        sans: ['"DM Sans"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      borderRadius: {
        card: "12px",
      },
      boxShadow: {
        subtle: "0 2px 4px rgba(0,0,0,0.02)",
        card: "0 4px 6px rgba(0,0,0,0.04)",
        "card-hover": "0 8px 24px rgba(0,0,0,0.06)",
      },
      spacing: {
        section: "80px",
      },
    },
  },
  plugins: [],
};
