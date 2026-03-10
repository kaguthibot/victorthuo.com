import { defineCollection, z } from 'astro:content';

const work = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.enum(['Experience Design', 'Digital Strategy', 'Behavior Change']),
    summary: z.string(),
    role: z.string().optional(),
    timeline: z.string().optional(),
    team: z.string().optional(),
    metrics: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    order: z.number().default(0),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    challenge: z.string().optional(),
    approach: z.string().optional(),
    outcome: z.string().optional(),
  }),
});

const perspectives = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    readingTime: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { work, perspectives };
