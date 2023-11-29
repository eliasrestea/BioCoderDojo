import { defineCollection, z } from "astro:content";

const accomplishmentsCollection = defineCollection({
  schema: ({ image }) => 
  z.object({
    image: image(),
    title: z.string(),
    description: z.string(),
  }),
});


export const collections = {
  accomplishments: accomplishmentsCollection,
};