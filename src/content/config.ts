import { z, defineCollection } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    primaryLink: z.string().url(),
    packageLink: z.string().url().optional(),
    sourceLink: z.string().url().optional(),
    projectLink: z.string().url().optional(),
    hidden: z.boolean(),
  }),
});
const songs = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    artist: z.string(),
    songUrl: z.string().url(),
    artistUrl: z.string().url(),
    hidden: z.boolean(),
  }),
});
const uses = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    link: z.string().url(),
    hidden: z.boolean(),
  }),
});

export const collections = {
  projects: projects,
  songs: songs,
  uses: uses,
};
