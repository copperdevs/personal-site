import { z, defineCollection } from "astro:content";
import { softwarePlatform, stackType } from "../lib/zod-types";

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

const stack = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    type: stackType,
    platform: softwarePlatform.optional(),
    link: z.string().optional(),
  }),
});

const photos = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
  }),
});

const posts = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    description: z.string(),
    published: z.date(),
    unlisted: z.boolean().optional().default(false),
  }),
});

export const collections = {
  projects: projects,
  songs: songs,
  stack: stack,
  pictures: photos,
  posts: posts,
};
