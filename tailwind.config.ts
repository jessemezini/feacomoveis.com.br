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
      "dim",
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#6C63FF",
          "primary-content": "#ffffff",
          secondary: "#36344F",
          "secondary-content": "#ffffff",
        },
      },
    ],
  },
};
export default config;
