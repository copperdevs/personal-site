// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `type` and `schema` for each collection
const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    hidden: z.boolean(),
  }),
});

const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    creator: z.string(),
    hidden: z.boolean(),
  }),
});
// Export a single `collections` object to register your collection(s)
export const collections = {
  posts: postsCollection,
  projects: projectsCollection
};
