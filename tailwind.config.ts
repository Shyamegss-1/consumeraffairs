import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        hover: "#F6F8FB",
      },
      fontSize: {
        "heading-1": ["2.25rem", { lineHeight: "2.5rem" }], // text-4xl
        "heading-2": ["1.875rem", { lineHeight: "2.25rem" }], // text-3xl
        "heading-3": ["1.5rem", { lineHeight: "2rem" }], // text-2xl
        "heading-4": ["1.25rem", { lineHeight: "1.75rem" }], // text-xl
        "heading-5": ["1.125rem", { lineHeight: "1.5rem" }], // text-lg
        "heading-6": ["1rem", { lineHeight: "1.5rem" }], // text-base
      },
      fontWeight: {
        "heading-1": "700", // font-bold
        "heading-2": "600", // font-semibold
        "heading-3": "500", // font-medium
        "heading-4": "500", // font-medium
        "heading-5": "400", // font-normal
        "heading-6": "400", // font-normal
      },
      fontFamily: {
        graphik: ['Graphik Web', 'Arial', 'sans-serif'],
        publico: ["Publico Headline Web", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
