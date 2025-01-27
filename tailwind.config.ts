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
        // We'll map some custom font families (after you install or load them)
        // Note: If these fonts aren't from Google, you can set them up locally or via another provider
        opensans: ['"Open Sans"', "sans-serif"],
        lora: ['"Lora"', "serif"],
        josefinsans: ['"Josefin Sans"', "sans-serif"],
        dancingscript: ['"Dancing Script"', "cursive"],
        satoshi: ['"Satoshi"', "sans-serif"],
        supreme: ['"Supreme"', "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
