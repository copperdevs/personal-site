import { defineCollection, z } from "astro:content";

import { glob } from "astro/loaders";

export const collections = {
  projects: defineCollection({
    loader: glob({ pattern: ["*.md"], base: "src/content/projects/" }),
    schema: z.object({
      name: z.string(),
      description: z.string(),
      link: z.string(),
    }),
  }),
};
