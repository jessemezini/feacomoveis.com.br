import defaultTheme from "tailwindcss/defaultTheme";
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
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
    extend: {
      fontFamily: {
        sans: ['"Nunito Variable"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          "base-100": colors.white,
          "base-200": colors.gray[200],
          "base-300": colors.gray[300],
          "base-content": "#070606",
          primary: "#40516D",
          "primary-content": colors.white,
          secondary: "#4B6387",
          "secondary-content": colors.white,
          accent: "#F39C5B",
          "accent-content": "#070606",
        },
      },
    ],
  },
};
