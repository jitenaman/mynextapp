import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "text-light": "var(--text-primary-light)",
        "text-dark": "var(--text-primary-dark)",
      },
      screens: {
        mobS: "375px",
        mobL: "425px",
        mds: "576px",
        mdl: "900px",
        "3xl": "1720px",
        "4xl": "1920px",
        "5xl": "2300px",
      },
    },
  },
  plugins: [],
};
export default config;
