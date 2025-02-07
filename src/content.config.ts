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
  posts: defineCollection({
    loader: glob({ pattern: ["*.md"], base: "src/content/posts/" }),
    schema: z.object({
      name: z.string(),
      description: z.string(), // TODO: Display on posts and post page?
      unlisted: z.boolean().default(false),
      tags: z.array(z.string()).default([]), // TODO: Implement fully
      pubDate: z.coerce.date(), // TODO: Display on post page
      updatedDate: z.coerce.date().optional(), // TODO: Display on post page
    }),
  }),
};
