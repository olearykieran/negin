import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cormorant Garamond"', "serif"],
        body: ['"Cormorant Garamond"', "serif"],
        canela: ['"Cormorant Garamond"', "serif"],
        supreme: ['"Cormorant Garamond"', "serif"],
        britney: ['"Brittany"', "serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        ivory: "#F5F1EA",
        cream: "#E8E1D8",
        charcoal: "#2B2A28",
        espresso: "#3A332C",
        antique: "#C6A75E",
      },
    },
  },
  plugins: [],
} satisfies Config;
