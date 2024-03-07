import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      animation: {
        "infinite-scroll": "infinite-scroll 25s linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        purpleGradient:
          "linear-gradient(175.46deg, rgba(96, 38, 158, 0.3) 3.68%, rgba(96, 38, 158, 0.09) 96.79%)",
      },
      colors: {
        primary: "#60269E",
        primaryBlack: "#1E1E1E",
        primaryGrey: "#101828",
        lightGrey: "#667085",
        toggleTxt: "#555555",
        btn: "#BD00FF",
        textPrimary: "#8501B3",
        textSecondary: "#7F7C98",
        textTertiary: "#FFFFFF",
        textFourth: "#D9D9D9",
        infoBg: "#F5EFFB",
        greyBg: "#181821",
        greyBg2: "#F9F9F9",
        borderGrey: "#E8E8E8",
        cardBlue: "#51A3DA",
        cardRed: "#BE4366",
        cardAsh: "#EFEEF1",
        cardPurple: "#9723F2",
        divideGrey: "#EAECF0",
        inputBorder: "#808080",
        formInputBorder: "#C4C4C4",
        greyText: "#253B4B",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        ash: "#83898C",
        ash2: "#858181",
        ashBorder: "#CFD3D4",
        // primary: {
        //   DEFAULT: "hsl(var(--primary))",
        //   foreground: "hsl(var(--primary-foreground))",
        // },
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
        largeBtn: "12.5rem",
      },
      lineHeight: {
        primary: "1.8rem",
        secondary: "4.8rem",
        tertiary: "2.4rem",
        fourth: "1.5rem",
        fifth: "1.2rem",
        sixth: "3.6rem",
        seventh: "1.05rem",
        eight: "2.75rem",
        ninth: "1.35rem",
      },
      fontFamily: {
        neue: "'Neue Haas Grotesk Display Pro', sans-serif",
        clash: ["var(--font-clash)"],
      },
      gridTemplateColumns: {
        footer: "30% 70%",
      },
      boxShadow: {
        form: "0px 2px 24px 4px #0000001A",
        toggleBtn: "0px 0.5px 40px 0px #1E1E1E1A",
        card: "10px 40px 40px 0px #0000001A",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
