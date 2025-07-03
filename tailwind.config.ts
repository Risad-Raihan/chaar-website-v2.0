import type { Config } from "tailwindcss";
import {heroui} from "@heroui/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Midnight Neon Theme - Custom colors for specific use
        bgPrimary: "#0F172A", // Rich Dark Blue-Black
        bgSurface: "#1E293B", // Elevated Dark Gray
        customPrimary: {
          DEFAULT: "#8B5CF6", // Vibrant Purple
          50: "#F3F0FF",
          100: "#E5DEFF",
          200: "#D1C4E9",
          300: "#B794F6",
          400: "#9F7AEA",
          500: "#8B5CF6", // Main
          600: "#7C3AED",
          700: "#6B46C1",
          800: "#553C9A",
          900: "#44337A",
        },
        customSecondary: {
          DEFAULT: "#10B981", // Emerald Green
          50: "#F0FDF4",
          100: "#DCFCE7",
          200: "#BBF7D0",
          300: "#86EFAC",
          400: "#4ADE80",
          500: "#10B981", // Main
          600: "#059669",
          700: "#047857",
          800: "#065F46",
          900: "#064E3B",
        },
        customAccent: {
          DEFAULT: "#F59E0B", // Golden Amber
          50: "#FFFBEB",
          100: "#FEF3C7",
          200: "#FDE68A",
          300: "#FCD34D",
          400: "#FBBF24",
          500: "#F59E0B", // Main
          600: "#D97706",
          700: "#B45309",
          800: "#92400E",
          900: "#78350F",
        },
        text: {
          light: "#F1F5F9", // Soft White
          muted: "#94A3B8", // Cool Gray
          dark: "#1E293B", // For light backgrounds
        },
        danger: "#EF4444",
        success: "#10B981",
        warning: "#F59E0B",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        body: ["Source Sans 3", "ui-sans-serif", "system-ui"],
        accent: ["Poppins", "ui-sans-serif", "system-ui"],
      },
      fontSize: {
        "xs": ["0.75rem", { lineHeight: "1rem" }],
        "sm": ["0.875rem", { lineHeight: "1.25rem" }],
        "base": ["1rem", { lineHeight: "1.5rem" }], // 16px minimum
        "lg": ["1.125rem", { lineHeight: "1.75rem" }],
        "xl": ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1" }],
        "6xl": ["3.75rem", { lineHeight: "1" }],
        "7xl": ["4.5rem", { lineHeight: "1" }],
        "8xl": ["6rem", { lineHeight: "1" }],
        "9xl": ["8rem", { lineHeight: "1" }],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "glow": "glow 2s ease-in-out infinite alternate",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(139, 92, 246, 0.3)" },
          "100%": { boxShadow: "0 0 30px rgba(139, 92, 246, 0.5)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  darkMode: "class",
  plugins: [heroui({
    themes: {
      dark: {
        colors: {
          // Override HeroUI dark theme with our Midnight Neon colors
          background: "#0F172A",
          foreground: "#F1F5F9",
          primary: {
            50: "#F3F0FF",
            100: "#E5DEFF", 
            200: "#D1C4E9",
            300: "#B794F6",
            400: "#9F7AEA",
            500: "#8B5CF6",
            600: "#7C3AED",
            700: "#6B46C1",
            800: "#553C9A",
            900: "#44337A",
            DEFAULT: "#8B5CF6",
            foreground: "#FFFFFF",
          },
          secondary: {
            50: "#F0FDF4",
            100: "#DCFCE7",
            200: "#BBF7D0", 
            300: "#86EFAC",
            400: "#4ADE80",
            500: "#10B981",
            600: "#059669",
            700: "#047857",
            800: "#065F46",
            900: "#064E3B",
            DEFAULT: "#10B981",
            foreground: "#FFFFFF",
          },
          success: {
            DEFAULT: "#10B981",
            foreground: "#FFFFFF",
          },
          warning: {
            DEFAULT: "#F59E0B",
            foreground: "#FFFFFF",
          },
          danger: {
            DEFAULT: "#EF4444",
            foreground: "#FFFFFF",
          },
        },
      },
    },
  })],
};

export default config; 