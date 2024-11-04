import { z, defineCollection } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
  }),
});

const songs = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
  }),
});

const uses = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
  }),
});

const photos = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
  }),
});

const blogPosts = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
  }),
});

export const collections = {
  projects: projects,
  songs: songs,
  uses: uses,
  pictures: photos,
  blog: blogPosts,
};
