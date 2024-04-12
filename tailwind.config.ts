import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dusk: "#242526",
        lightgray: "#3a3b3c",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: 'class'
    })
  ],
  darkMode: "class",
};
export default config;
