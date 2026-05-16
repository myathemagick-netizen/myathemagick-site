import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const videos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/videos' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.string(),
    theme: z.string(),
    youtubeId: z.string(),
    duration: z.string(),
    description: z.string(),
    featured: z.boolean(),
  }),
});

export const collections = { videos };