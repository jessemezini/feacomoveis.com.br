import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import partytown from "@astrojs/partytown";

import react from "@astrojs/react";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://jlmoveisdeaco.com.br",
  output: "hybrid",
  integrations: [
    tailwind(),
    icon({
      iconDir: "src/assets/icons",
    }),
    partytown(),
    react(),
    mdx(),
  ],
});
