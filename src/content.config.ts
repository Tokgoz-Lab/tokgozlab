import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const publications = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    year: z.number(),
    venue: z.string(),
    type: z.enum(['paper', 'book', 'patent', 'software']).default('paper'),
    description: z.string().optional(),
    doi: z.string().optional(),
    award: z.string().optional(),
    links: z
      .object({
        pdf: z.string().optional(),
        code: z.string().optional(),
        website: z.string().optional(),
        demo: z.string().optional(),
        slides: z.string().optional(),
        video: z.string().optional(),
      })
      .optional(),
    featured: z.boolean().default(false),
    badges: z
      .array(
        z.object({
          text: z.string(),
          type: z.enum(['gold', 'blue', 'red', 'green', 'default']).default('default'),
        }),
      )
      .optional(),
  }),
});

const team = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/team' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      role: z.enum([
        'Principal Investigator',
        'Postdoctoral Researcher',
        'PhD Candidate',
        "Master's Student",
        'Alumni',
      ]),
      title: z.array(z.string()).optional(),
      avatar: image(),
      bio: z.string().optional(),
      email: z.string().optional(),
      website: z.string().optional(),
      personalWebsite: z.string().optional(),
      linkedin: z.string().optional(),
      github: z.string().optional(),
      twitter: z.string().optional(),
      googleScholar: z.string().optional(),
      orcid: z.string().optional(),
      weight: z.number().default(100),
    }),
});

const research = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/research' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number().default(100),
  }),
});

const news = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/news' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      summary: z.string(),
      image: image().optional(),
      imageAlt: z.string().optional(),
      imageFit: z.enum(['cover', 'contain']).default('cover'),
      link: z.string().url().optional(),
      linkText: z.string().optional(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { publications, team, research, news };
