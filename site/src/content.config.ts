import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const videos = defineCollection({
  loader: glob({ pattern: '*.md', base: 'src/content/videos' }),
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

const music = defineCollection({
  loader: glob({ pattern: '*.md', base: 'src/content/music' }),
  schema: z.object({
    title: z.string(),
    volume: z.number(),
    track: z.number(),
    duration: z.string(),
    tag: z.string(),
    flavor: z.string(),
    audioUrl: z.string(),
  }),
});

export const collections = { videos, music };