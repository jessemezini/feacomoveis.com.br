import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          "base-100": "#ffffff",
          "base-content": "#0f2137",
          primary: "#231F20",
          "primary-content": "#fafbf5",
          secondary: "#258EA6",
          "secondary-content": "#0f2137",
          accent: "#A0ECD0",
          "accent-content": "#0f2137",
          // "--rounded-btn": "0",
        },
      },
    ],
  },
};
export default config;
