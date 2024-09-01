import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Manrope Variable"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          "base-100": "#110D0E",
          "base-200": "#292526",
          "base-300": "#413d3e",
          "base-content": "#F0F7FE",
          primary: "#110D0E",
          "primary-content": "#F0F7FE",
          secondary: "#258EA6",
          "secondary-content": "#110D0E",
          accent: "#F4F4EC",
          "accent-content": "#110D0E",
        },
      },
    ],
  },
};
