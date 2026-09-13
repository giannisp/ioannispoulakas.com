/**
 * @file Content collections: markdown pages and blog posts.
 */

import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const pages = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/pages' }),
  schema: z.object({
    path: z.string(),
    title: z.string(),
  }),
});

const posts = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/posts' }),
  schema: z.object({
    path: z.string(),
    title: z.string(),
    date: z.coerce.date(),
  }),
});

export const collections = { pages, posts };
