import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const noticias = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/noticias' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    date: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    author: z.string().default('Orquesta Filarmónica Alimapu'),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    banda: z.boolean().default(false),
    sources: z.array(z.object({
      name: z.string(),
      url: z.string().url(),
    })).optional(),
  }),
});

const conciertos = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/conciertos' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    date: z.coerce.date(),
    time: z.string(),
    endTime: z.string().optional(),
    venue: z.string(),
    venueAddress: z.string().optional(),
    venueMapUrl: z.string().url().optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    program: z
      .array(
        z.object({
          composer: z.string(),
          work: z.string(),
          soloist: z.string().optional(),
        })
      )
      .optional(),
    ensemble: z.enum(['orquesta', 'banda', 'camara']).default('orquesta'),
    isFree: z.boolean().default(true),
    ticketUrl: z.string().url().optional(),
    isCancelled: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const integrantes = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/integrantes' }),
  schema: z.object({
    name: z.string(),
    instrument: z.string(),
    section: z.enum(['cuerdas', 'maderas', 'bronces', 'percusion', 'direccion']),
    photo: z.string().optional(),
    photoPosition: z.string().optional(),
    order: z.number().default(99),
    isActive: z.boolean().default(true),
    featured: z.boolean().default(false),
    bio: z.string().optional(),
  }),
});

const equipoDirectivo = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/equipo-directivo' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    photo: z.string().optional(),
    photoPosition: z.string().optional(),
    order: z.number().default(99),
    bio: z.string().optional(),
    email: z.string().email().optional(),
  }),
});

const galeria = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/galeria' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    coverImage: z.string(),
    coverImageAlt: z.string(),
    images: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string(),
          caption: z.string().optional(),
        })
      )
      .optional(),
    videos: z
      .array(
        z.object({
          youtubeId: z.string(),
          title: z.string(),
        })
      )
      .optional(),
    tags: z.array(z.string()).default([]),
  }),
});

const audiciones = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/audiciones' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    instrument: z.string(),
    section: z.enum(['cuerdas', 'maderas', 'bronces', 'percusion']),
    deadline: z.coerce.date(),
    auditionDate: z.coerce.date().optional(),
    requirements: z.array(z.string()).optional(),
    contactEmail: z.string().email().default('contacto@orquestaalimapu.cl'),
    isOpen: z.boolean().default(true),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  noticias,
  conciertos,
  integrantes,
  'equipo-directivo': equipoDirectivo,
  galeria,
  audiciones,
};
