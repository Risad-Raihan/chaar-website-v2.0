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
        // Dark Sophisticated Theme - Black and dark tones
        bgPrimary: "#000000", // Pure Black
        bgSurface: "#111111", // Very Dark Gray
        
        // Sophisticated Dark Colors
        dark: {
          cyan: "#4A90A4", // Muted Dark Cyan
          magenta: "#8B4A8B", // Muted Dark Magenta
          blue: "#4A6FA5", // Muted Dark Blue  
          lime: "#6B8E23", // Muted Dark Lime
          purple: "#6A4C93", // Muted Dark Purple
          yellow: "#B8860B", // Dark Goldenrod
          pink: "#B8505A", // Muted Dark Pink
          orange: "#A0522D", // Muted Dark Orange
          gray: "#2A2A2A", // Dark Gray
          charcoal: "#1A1A1A", // Charcoal
        },
        
        customPrimary: {
          DEFAULT: "#4A90A4", // Muted Dark Cyan
          50: "#F0F4F5",
          100: "#E1E9EB", 
          200: "#C3D3D7",
          300: "#A5BDC3",
          400: "#87A7AF",
          500: "#4A90A4", // Main
          600: "#3E7A8A",
          700: "#326470",
          800: "#264E56",
          900: "#1A383C",
        },
        customSecondary: {
          DEFAULT: "#8B4A8B", // Muted Dark Magenta
          50: "#F4F0F4",
          100: "#E9E1E9",
          200: "#D3C3D3",
          300: "#BDA5BD",
          400: "#A787A7",
          500: "#8B4A8B", // Main
          600: "#743E74",
          700: "#5D325D",
          800: "#462646",
          900: "#2F1A2F",
        },
        customAccent: {
          DEFAULT: "#6B8E23", // Muted Dark Lime
          50: "#F2F5E8",
          100: "#E5EBD1",
          200: "#CBD7A3",
          300: "#B1C375",
          400: "#97AF47",
          500: "#6B8E23", // Main
          600: "#59771D",
          700: "#476017",
          800: "#354911",
          900: "#23320B",
        },
        text: {
          light: "#F5F5F5", // Off White
          muted: "#888888", // Medium Gray
          dark: "#111111", // For light backgrounds
        },
        danger: "#DC2626",
        success: "#16A34A",
        warning: "#CA8A04",
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
        "subtle-pulse": "subtlePulse 3s ease-in-out infinite alternate",
        "dark-float": "darkFloat 8s ease-in-out infinite",
        "logo-spin": "logoSpin 30s linear infinite",
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
          "0%": { boxShadow: "0 0 20px rgba(74, 144, 164, 0.3)" },
          "100%": { boxShadow: "0 0 30px rgba(74, 144, 164, 0.5)" },
        },
        subtlePulse: {
          "0%": { 
            boxShadow: "0 0 10px rgba(74, 144, 164, 0.2), 0 0 20px rgba(74, 144, 164, 0.1)" 
          },
          "100%": { 
            boxShadow: "0 0 15px rgba(74, 144, 164, 0.3), 0 0 30px rgba(74, 144, 164, 0.2)" 
          },
        },
        darkFloat: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%": { transform: "translateY(-6px) rotate(0.5deg)" },
          "66%": { transform: "translateY(3px) rotate(-0.5deg)" },
        },
        logoSpin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
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
          // Override HeroUI dark theme with sophisticated dark colors
          background: "#000000",
          foreground: "#F5F5F5",
          primary: {
            50: "#F0F4F5",
            100: "#E1E9EB", 
            200: "#C3D3D7",
            300: "#A5BDC3",
            400: "#87A7AF",
            500: "#4A90A4",
            600: "#3E7A8A",
            700: "#326470",
            800: "#264E56",
            900: "#1A383C",
            DEFAULT: "#4A90A4",
            foreground: "#FFFFFF",
          },
          secondary: {
            50: "#F4F0F4",
            100: "#E9E1E9",
            200: "#D3C3D3",
            300: "#BDA5BD",
            400: "#A787A7",
            500: "#8B4A8B",
            600: "#743E74",
            700: "#5D325D",
            800: "#462646",
            900: "#2F1A2F",
            DEFAULT: "#8B4A8B",
            foreground: "#FFFFFF",
          },
          success: {
            DEFAULT: "#16A34A",
            foreground: "#FFFFFF",
          },
          warning: {
            DEFAULT: "#CA8A04",
            foreground: "#FFFFFF",
          },
          danger: {
            DEFAULT: "#DC2626",
            foreground: "#FFFFFF",
          },
        },
      },
    },
  })],
};

export default config; 