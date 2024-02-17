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
        primaryBlack: "#09090B",
        btn: "#BD00FF",
        textPrimary: "#8501B3",
        textSecondary: "#7F7C98",
        textTertiary: "#FFFFFF",
        textFourth: "#D9D9D9",
        greyBg: "#181821",
      },
      fontSize: {
        "2.5xl": "4.875rem",
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
        circle:"50%"
      },
    },
  },
  plugins: [],
};
export default config;
