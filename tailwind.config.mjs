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
        sans: ['"Montserrat Variable"', ...defaultTheme.fontFamily.sans],
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
          "base-200": "#EFEFEF",
          "base-300": "#DCDCDC",
          "base-content": "#292929",
          primary: "#73747D",
          "primary-content": "#ffffff",
          secondary: "#F9F9F9",
          "secondary-content": "#292929",
          accent: "#3d5668",
          "accent-content": "#ffffff",
        },
      },
    ],
  },
};
