import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef6ff",
          100: "#d8eaff",
          200: "#b7d6ff",
          300: "#89b8ff",
          400: "#5b93ff",
          500: "#346dff",
          600: "#1648ed",
          700: "#0f37c6",
          800: "#13339d",
          900: "#142f7d"
        },
        slate: {
          950: "#0f172a"
        }
      },
      borderRadius: {
        xl: "1.5rem"
      },
      boxShadow: {
        glow: "0 0 60px -15px rgba(20, 51, 125, 0.45)"
      },
      fontFamily: {
        display: ["'Poppins'", "ui-sans-serif", "system-ui"],
        body: ["'Inter'", "ui-sans-serif", "system-ui"]
      }
    }
  },
  plugins: []
};

export default config;
