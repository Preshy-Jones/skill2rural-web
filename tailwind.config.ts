import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#60269E",
        primaryBlack: "#1E1E1E",
        primaryGrey: "#101828",
        lightGrey: "#667085",
        btn: "#BD00FF",
        textPrimary: "#8501B3",
        textSecondary: "#7F7C98",
        textTertiary: "#FFFFFF",
        textFourth: "#D9D9D9",
        infoBg: "#F5EFFB",
        greyBg: "#181821",
        borderGrey: "#E8E8E8",
        cardBlue: "#51A3DA",
        cardRed: "#BE4366",
        cardAsh: "#EFEEF1",
        cardPurple: "#9723F2",
      },
      fontSize: {
        "2.5xl": "4.875rem",
        "3.5xl": "2rem",
      },
      spacing: {
        primaryCover: "86.11%",
        btnH: "3.125rem",
        btnW: "9.625rem",
      },
      borderRadius: {
        primary: "1.875rem",
        secondary: "50%",
        tertiary: "0.25rem",
        "2xc": "1.25rem",
        lgx: "0.625rem",
        third: "0.3125rem",
        circle: "50%",
        btn: "6.25rem",
      },
      lineHeight: {
        primary: "1.8rem",
        secondary: "4.8rem",
        tertiary: "2.4rem",
        fourth: "1.5rem",
        fifth: "1.2rem",
        sixth: "3.6rem",
        seventh: "1.05rem",
        eight:"2.75rem"
      },
      fontFamily: {
        neue: "'Neue Haas Grotesk Display Pro', sans-serif",
      },
    },
  },
  plugins: [],
};
export default config;
