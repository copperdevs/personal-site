// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// Define a `type` and `schema` for each collection
const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    hidden: z.boolean(),
    link: z.string(),
    source: z.string(),
    category: z.string(),
    randomResult: z.boolean()
  }),
});

// Export a single `collections` object to register your collection(s)
export const collections = {
  projects: projectsCollection,
};
