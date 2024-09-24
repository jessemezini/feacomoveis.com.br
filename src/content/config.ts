import { defineCollection, z } from "astro:content";

const productsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      category: z.string(),
      height: z.string(),
      width: z.string(),
      depth: z.string(),
      sheetWidth: z.string(),
      items: z.string().array(),
      description: z.string().optional(),
      heroImage: image(),
    }),
});

export const collections = { products: productsCollection };
