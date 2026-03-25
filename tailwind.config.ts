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
          50: "#f0f7ff",
          100: "#e0effe",
          200: "#bae0fd",
          300: "#7cc8fb",
          400: "#38aaf7",
          500: "#0e8ee9",
          600: "#0270c7",
          700: "#0359a1",
          800: "#074c85",
          900: "#0c416e",
          950: "#08294a",
        },
      },
    },
  },
  plugins: [],
};
export default config;