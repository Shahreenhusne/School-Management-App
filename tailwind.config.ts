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
          primary: {
          DEFAULT: '#4b49ac',   // main primary color
          light: '#98bdff',     // lighter shade
        },
          secondary: {
          DEFAULT: '#7da0fa',   // main secondary color
          alt1: '#7978e9',      // alternate shade
          alt2: '#f3797e',      // warm secondary
        },
      },
    },
  },
  plugins: [],
};
export default config;
