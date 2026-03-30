export function musicGroupSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'MusicGroup',
    name: 'Orquesta Filarmónica Alimapu',
    alternateName: 'Alimapu',
    url: 'https://orquestaalimapu.cl',
    logo: 'https://orquestaalimapu.cl/images/logo-alimapu.png',
    description:
      'Orquesta profesional y autogestionada de la región de Valparaíso, Chile. Dedicada al desarrollo humano y cultural a través de la música clásica.',
    foundingDate: '2019',
    foundingLocation: {
      '@type': 'Place',
      name: 'Valparaíso',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Valparaíso',
        addressRegion: 'Valparaíso',
        addressCountry: 'CL',
      },
    },
    genre: ['Classical', 'Symphonic', 'Chilean Contemporary'],
    email: 'contacto@orquestaalimapu.cl',
    sameAs: [
      'https://www.instagram.com/orquestaalimapu/',
      'https://www.youtube.com/@orquestaalimapu',
    ],
  };
}

export function concertEventSchema(concert: {
  title: string;
  description: string;
  date: Date;
  time: string;
  endTime?: string;
  venue: string;
  venueAddress?: string;
  isFree: boolean;
  ticketUrl?: string;
  slug: string;
  image?: string;
}) {
  const startDateTime = new Date(concert.date);
  const [hours, minutes] = concert.time.split(':');
  startDateTime.setHours(parseInt(hours), parseInt(minutes));

  return {
    '@context': 'https://schema.org',
    '@type': 'MusicEvent',
    name: concert.title,
    description: concert.description,
    startDate: startDateTime.toISOString(),
    ...(concert.endTime && {
      endDate: (() => {
        const end = new Date(concert.date);
        const [h, m] = concert.endTime!.split(':');
        end.setHours(parseInt(h), parseInt(m));
        return end.toISOString();
      })(),
    }),
    location: {
      '@type': 'Place',
      name: concert.venue,
      ...(concert.venueAddress && {
        address: {
          '@type': 'PostalAddress',
          streetAddress: concert.venueAddress,
          addressLocality: 'Valparaíso',
          addressCountry: 'CL',
        },
      }),
    },
    performer: {
      '@type': 'MusicGroup',
      name: 'Orquesta Filarmónica Alimapu',
    },
    isAccessibleForFree: concert.isFree,
    ...(concert.ticketUrl && {
      offers: {
        '@type': 'Offer',
        url: concert.ticketUrl,
        availability: 'https://schema.org/InStock',
      },
    }),
    url: `https://orquestaalimapu.cl/agenda/${concert.slug}/`,
    ...(concert.image && { image: concert.image }),
    eventStatus: 'https://schema.org/EventScheduled',
  };
}

export function newsArticleSchema(article: {
  title: string;
  description: string;
  date: Date;
  updatedDate?: Date;
  image?: string;
  slug: string;
  author: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: article.title,
    description: article.description,
    datePublished: article.date.toISOString(),
    ...(article.updatedDate && {
      dateModified: article.updatedDate.toISOString(),
    }),
    author: {
      '@type': 'Organization',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Orquesta Filarmónica Alimapu',
      logo: {
        '@type': 'ImageObject',
        url: 'https://orquestaalimapu.cl/images/logo-alimapu.png',
      },
    },
    url: `https://orquestaalimapu.cl/noticias/${article.slug}/`,
    ...(article.image && { image: article.image }),
  };
}

export function breadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
