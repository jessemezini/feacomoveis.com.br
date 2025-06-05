import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import partytown from "@astrojs/partytown";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import netlify from "@astrojs/netlify";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://moveisdec.com.br",
  integrations: [
    tailwind(),
    icon({
      iconDir: "src/assets/icons",
    }),
    partytown(),
    react(),
    mdx(),
    sitemap(),
  ],
  output: "server",
  adapter: netlify(),
});
