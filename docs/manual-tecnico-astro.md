# Manual Técnico: Web Alimapu

## Sitio web de la Orquesta Filarmónica Alimapu

**Versión:** 1.0
**Fecha:** Abril 2026
**URL del sitio:** https://beta.orquestaalimapu.cl
**Repositorio:** https://github.com/martinmiranda14/web-alimapu

---

## Tabla de Contenidos

1. [Introducción a Astro](#1-introducción-a-astro)
2. [Estructura del Proyecto](#2-estructura-del-proyecto)
3. [Stack Tecnológico](#3-stack-tecnológico)
4. [Cómo funciona Astro](#4-cómo-funciona-astro)
5. [Content Collections: El corazón del sitio](#5-content-collections-el-corazón-del-sitio)
6. [Esquemas de Datos (content.config.ts)](#6-esquemas-de-datos)
7. [Páginas y Rutas](#7-páginas-y-rutas)
8. [Componentes](#8-componentes)
9. [Layouts](#9-layouts)
10. [Utilidades](#10-utilidades)
11. [Estilos y Diseño Visual](#11-estilos-y-diseño-visual)
12. [SEO y Schema.org](#12-seo-y-schemaorg)
13. [Manejo de Imágenes](#13-manejo-de-imágenes)
14. [Deploy: GitHub Actions → GitHub Pages](#14-deploy)
15. [Guía de Desarrollo Local](#15-guía-de-desarrollo-local)
16. [Referencia Rápida](#16-referencia-rápida)

---

## 1. Introducción a Astro

### ¿Qué es Astro?

Astro es un framework web moderno diseñado para crear sitios rápidos enfocados en contenido. A diferencia de frameworks como React o Vue que envían JavaScript al navegador, Astro genera **HTML estático** en tiempo de compilación.

### Principios clave de Astro

| Principio | Descripción |
|-----------|-------------|
| **Generación estática (SSG)** | Las páginas se convierten en HTML puro durante el build. No hay servidor en producción. |
| **Zero JavaScript por defecto** | El HTML generado no incluye JavaScript a menos que sea explícitamente necesario. |
| **Content Collections** | Sistema integrado para gestionar contenido en Markdown/MDX con validación de tipos. |
| **Rutas basadas en archivos** | Cada archivo en `src/pages/` se convierte automáticamente en una ruta del sitio. |
| **Componentes `.astro`** | Sintaxis propia que combina frontmatter (lógica) con template (HTML). |

### ¿Por qué Astro para este proyecto?

La Orquesta Filarmónica Alimapu necesita un sitio donde personas **sin conocimiento técnico** puedan actualizar contenido. Astro permite:

- Editar conciertos, noticias y músicos mediante **archivos Markdown** simples
- Obtener **rendimiento perfecto** (100 en Lighthouse) al servir solo HTML
- Tener **validación automática** de datos (si un campo está mal, el build falla con error claro)
- **Deploy automático** con GitHub Actions: editar un archivo = sitio actualizado en 2 minutos

---

## 2. Estructura del Proyecto

```
web-alimapu/
├── .github/workflows/
│   └── deploy.yml                  ← Automatización de deploy
├── docs/                           ← Documentación del proyecto
├── public/                         ← Archivos estáticos (imágenes, favicon, robots.txt)
│   ├── images/
│   │   ├── integrantes/            ← Fotos de músicos (.webp)
│   │   ├── conciertos/             ← Fotos de conciertos
│   │   ├── noticias/               ← Fotos de noticias
│   │   ├── equipo/                 ← Fotos del equipo directivo
│   │   └── galeria/                ← Fotos de galería
│   ├── CNAME                       ← Dominio personalizado
│   ├── robots.txt                  ← Directivas para buscadores
│   └── favicon.svg                 ← Ícono del sitio
├── src/
│   ├── components/                 ← Componentes reutilizables
│   │   ├── common/                 ← Header, Footer
│   │   ├── seo/                    ← SEOHead, SchemaOrg
│   │   └── ui/                     ← HeroSection, Section, SectionHeading
│   ├── content/                    ← Archivos Markdown (los datos)
│   │   ├── audiciones/             ← Convocatorias de audición
│   │   ├── conciertos/             ← Conciertos programados
│   │   ├── equipo-directivo/       ← Miembros del equipo
│   │   ├── galeria/                ← Álbumes de fotos/videos
│   │   ├── integrantes/            ← Músicos de la orquesta
│   │   ├── noticias/               ← Noticias y comunicados
│   │   └── paginas/                ← Páginas estáticas (historia, sobre nosotros)
│   ├── content.config.ts           ← Esquemas de validación (Zod)
│   ├── layouts/
│   │   └── BaseLayout.astro        ← Layout principal (HTML, head, body)
│   ├── pages/                      ← Rutas del sitio (file-based routing)
│   ├── styles/
│   │   └── global.css              ← Estilos globales + Tailwind
│   └── utils/                      ← Funciones utilitarias
│       ├── date.ts                 ← Formateo de fechas en español
│       ├── image.ts                ← Conversión de URLs de Google Drive
│       ├── paths.ts                ← Resolución de rutas de assets
│       └── schema.ts               ← Generadores de JSON-LD
├── astro.config.mjs                ← Configuración de Astro
├── tsconfig.json                   ← Configuración de TypeScript
└── package.json                    ← Dependencias y scripts
```

### Convención de nombres

| Tipo | Convención | Ejemplo |
|------|-----------|---------|
| Páginas | kebab-case | `sobre-nosotros/index.astro` |
| Componentes | PascalCase | `HeroSection.astro` |
| Contenido (MD) | kebab-case | `danitza-villarroel.md` |
| Utilidades | camelCase | `formatDateLong()` |
| Imágenes | kebab-case | `concierto-navidad-2025.webp` |

---

## 3. Stack Tecnológico

| Componente | Tecnología | Versión | Propósito |
|-----------|-----------|---------|-----------|
| **Framework** | Astro | 6.1.2 | Generador de sitio estático |
| **CSS** | Tailwind CSS | 4.2.2 | Framework de utilidades CSS |
| **Tipografía** | @tailwindcss/typography | 0.5.19 | Estilos para prosa Markdown |
| **Íconos** | astro-icon + Lucide | 1.1.5 | Íconos SVG |
| **Imágenes** | Sharp | 0.34.5 | Optimización de imágenes |
| **Contenido** | @astrojs/mdx | 5.0.3 | Soporte para MDX |
| **SEO** | @astrojs/sitemap | 3.7.2 | Generación de sitemap |
| **Fuentes** | Inter + Playfair Display | - | Cuerpo + títulos |
| **Deploy** | GitHub Actions + Pages | - | CI/CD automático |
| **Lenguaje** | TypeScript (strict) | - | Tipado estático |

### Requisitos del sistema

- **Node.js** >= 22.12.0
- **npm** (incluido con Node.js)

---

## 4. Cómo funciona Astro

### Anatomía de un archivo `.astro`

Un componente Astro tiene dos partes separadas por `---`:

```astro
---
// FRONTMATTER (se ejecuta en el servidor, durante el build)
// Aquí va: imports, lógica, consultas a datos, variables

import BaseLayout from '../layouts/BaseLayout.astro';
import { getCollection } from 'astro:content';

const noticias = await getCollection('noticias');
const titulo = "Hola Mundo";
---

<!-- TEMPLATE (se convierte en HTML estático) -->
<!-- Aquí va: HTML, expresiones JSX-like, componentes -->

<BaseLayout title={titulo}>
  <h1>{titulo}</h1>
  <ul>
    {noticias.map((n) => (
      <li>{n.data.title}</li>
    ))}
  </ul>
</BaseLayout>
```

### El frontmatter (`---`)

El código entre los tres guiones se ejecuta **solo durante el build**, nunca en el navegador. Es como el "backend" de la página:

```astro
---
// ✅ Se puede hacer:
import Componente from './Componente.astro';       // Importar componentes
const datos = await getCollection('noticias');      // Consultar datos
const hoy = new Date();                            // Lógica JS/TS

// ❌ NO se puede hacer:
document.getElementById('algo');  // No existe DOM aquí
window.location;                  // No existe window
---
```

### Expresiones en el template

```astro
<!-- Variables -->
<h1>{titulo}</h1>

<!-- Condicionales -->
{mostrar && <p>Se muestra</p>}
{esAdmin ? <Admin /> : <Usuario />}

<!-- Listas -->
{items.map((item) => (
  <li>{item.nombre}</li>
))}

<!-- HTML dinámico (con cuidado, evitar XSS) -->
<div set:html={contenidoHTML} />

<!-- Clases dinámicas -->
<div class={`base ${activo ? 'activo' : ''}`}>
```

### JavaScript del lado del cliente

Si necesitas interactividad (como un modal), usas un `<script>` normal:

```astro
<button id="abrir">Abrir Modal</button>
<div id="modal" class="hidden">Contenido</div>

<script>
  // Este código SÍ se ejecuta en el navegador
  document.getElementById('abrir')?.addEventListener('click', () => {
    document.getElementById('modal')?.classList.remove('hidden');
  });
</script>
```

### Flujo de compilación

```
src/content/*.md          → Astro Content Loader → Validación Zod
src/pages/*.astro         → Astro Compiler       → HTML estático
src/components/*.astro    → (se incrustan en las páginas)
src/styles/global.css     → Tailwind CSS          → CSS optimizado
public/*                  → (se copia tal cual al dist/)

Todo → dist/ → GitHub Pages
```

---

## 5. Content Collections: El corazón del sitio

### Concepto

Las Content Collections son el sistema de Astro para gestionar contenido estructurado. Funcionan como una **base de datos de archivos de texto**.

```
Archivo .md (datos)  →  content.config.ts (esquema)  →  getCollection() (consulta)  →  .astro (vista)
```

### Analogía con base de datos

| Concepto SQL | Equivalente en Astro |
|-------------|---------------------|
| Tabla | Content Collection (carpeta en `src/content/`) |
| Columnas | Campos del esquema Zod en `content.config.ts` |
| Fila | Un archivo `.md` individual |
| SELECT | `getCollection('nombre')` |
| WHERE | Función de filtro: `getCollection('x', ({ data }) => data.isActive)` |
| ORDER BY | `.sort((a, b) => a.data.order - b.data.order)` |
| FIND | `.find((item) => item.data.featured)` |

### Estructura de un archivo Markdown

```markdown
---
title: "Concierto de Otoño"      ← Frontmatter (datos estructurados)
date: 2026-04-19                  ← Entre --- y --- obligatorio
venue: "Teatro Municipal"
---

Texto libre en Markdown.          ← Contenido (cuerpo del artículo)
Se puede usar **negrita**,
*cursiva*, listas, etc.
```

### Las 7 colecciones del proyecto

```
src/content/
├── audiciones/         ← Convocatorias de audición
├── conciertos/         ← Agenda de conciertos
├── equipo-directivo/   ← Equipo de gestión
├── galeria/            ← Álbumes multimedia
├── integrantes/        ← Músicos de la orquesta
├── noticias/           ← Noticias y comunicados
└── paginas/            ← Páginas estáticas editables
```

### Ejemplo completo: de Markdown a HTML

**1. Archivo:** `src/content/integrantes/aylin-tapia.md`
```yaml
---
name: "Aylin Tapia"
instrument: "Director Asistente"
section: "direccion"
order: 2
isActive: true
photo: "https://drive.google.com/file/d/1g6Ig.../view"
bio: "Directora Asistente durante el 2026"
---
```

**2. Esquema** (en `content.config.ts`):
```typescript
const integrantes = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/integrantes' }),
  schema: z.object({
    name: z.string(),
    instrument: z.string(),
    section: z.enum(['cuerdas', 'maderas', 'bronces', 'percusion', 'direccion']),
    order: z.number().default(99),
    isActive: z.boolean().default(true),
    photo: z.string().optional(),
    bio: z.string().optional(),
    // ...
  }),
});
```

Si alguien escribe `section: "vientos"` (no está en el enum), Astro mostrará un error claro durante el build.

**3. Consulta** (en `direccion.astro`):
```astro
---
const allMembers = await getCollection('integrantes',
  ({ data }) => data.isActive && data.section === 'direccion'
);
const directors = allMembers.sort((a, b) => a.data.order - b.data.order);
---
```

**4. Renderizado:**
```astro
{directors.map((member) => (
  <div>
    <img src={assetPath(member.data.photo)} alt={member.data.name} />
    <h3>{member.data.name}</h3>
    <p>{member.data.instrument}</p>
  </div>
))}
```

---

## 6. Esquemas de Datos

Archivo: `src/content.config.ts`

Cada colección tiene un esquema Zod que valida los campos. Si un archivo `.md` no cumple el esquema, el build falla con un error descriptivo.

### Conciertos

```typescript
{
  title: z.string(),                           // "Concierto de Otoño"
  description: z.string().max(160),            // Para Google (SEO)
  date: z.coerce.date(),                       // 2026-04-19
  time: z.string(),                            // "19:30"
  endTime: z.string().optional(),              // "21:00"
  venue: z.string(),                           // "Teatro Municipal"
  venueAddress: z.string().optional(),         // "Av. Pedro Montt 1234"
  venueMapUrl: z.string().url().optional(),    // Link Google Maps
  image: z.string().optional(),                // Foto del concierto
  imageAlt: z.string().optional(),             // Descripción de la foto
  program: z.array(z.object({                  // Programa musical
    composer: z.string(),                      //   "Dvořák"
    work: z.string(),                          //   "Sinfonía No. 9"
    soloist: z.string().optional(),            //   "Juan Pérez, violín"
  })).optional(),
  ensemble: z.enum(['orquesta','banda','camara']).default('orquesta'),
  isFree: z.boolean().default(true),           // Gratis o pagado
  ticketUrl: z.string().url().optional(),      // Link para comprar
  isCancelled: z.boolean().default(false),     // Cancelado
  draft: z.boolean().default(false),           // Borrador (oculto)
}
```

### Integrantes

```typescript
{
  name: z.string(),                            // "Scarlett Arias Cubillos"
  instrument: z.string(),                      // "Viola"
  section: z.enum([                            // Sección de la orquesta
    'cuerdas','maderas','bronces','percusion','direccion'
  ]),
  photo: z.string().optional(),                // URL o ruta local
  photoPosition: z.string().optional(),        // "top", "center" (CSS)
  order: z.number().default(99),               // Orden en la sección
  isActive: z.boolean().default(true),         // Activo/inactivo
  featured: z.boolean().default(false),        // Destacado (concertino)
  bio: z.string().optional(),                  // Biografía
}
```

### Noticias

```typescript
{
  title: z.string(),                           // "Nuevo director invitado"
  description: z.string().max(160),            // Resumen para SEO
  date: z.coerce.date(),                       // Fecha de publicación
  updatedDate: z.coerce.date().optional(),     // Última actualización
  image: z.string().optional(),                // Imagen principal
  imageAlt: z.string().optional(),             // Descripción
  author: z.string().default("Orquesta Filarmónica Alimapu"),
  tags: z.array(z.string()).default([]),       // ["concierto", "2026"]
  draft: z.boolean().default(false),           // Borrador
  banda: z.boolean().default(false),           // ¿Es noticia de la banda?
  sources: z.array(z.object({                  // Fuentes externas
    name: z.string(),
    url: z.string().url(),
  })).optional(),
}
```

### Galería

```typescript
{
  title: z.string(),                           // "Concierto de Navidad 2025"
  description: z.string().optional(),          // Descripción del álbum
  date: z.coerce.date(),                       // Fecha del evento
  coverImage: z.string(),                      // Imagen de portada
  coverImageAlt: z.string(),                   // Alt de la portada
  images: z.array(z.object({                   // Lista de fotos
    src: z.string(),                           //   URL o ruta
    alt: z.string(),                           //   Descripción
    caption: z.string().optional(),            //   Pie de foto
  })).optional(),
  videos: z.array(z.object({                   // Videos de YouTube
    youtubeId: z.string(),                     //   ID del video
    title: z.string(),                         //   Título
  })).optional(),
  tags: z.array(z.string()).default([]),
}
```

### Páginas

```typescript
{
  title: z.string(),                           // "Nuestra Historia"
  description: z.string().max(160),            // SEO
  subtitle: z.string().optional(),             // Subtítulo del hero
  resumen: z.array(z.string()).optional(),     // Párrafos de resumen
  hitos: z.array(z.object({                    // Línea de tiempo
    year: z.string(),                          //   "2017"
    title: z.string(),                         //   "El origen"
    description: z.string(),                   //   "Un grupo de músicos..."
  })).optional(),
  futureText: z.string().optional(),           // Sección "El futuro"
  mision: z.string().optional(),               // Texto de misión
  vision: z.string().optional(),               // Texto de visión
}
```

### Audiciones

```typescript
{
  title: z.string(),                           // "Audiciones 2026 - Bronces"
  description: z.string().max(160),            // SEO
  instrument: z.string(),                      // "Corno, Trombón"
  section: z.enum(['cuerdas','maderas','bronces','percusion']),
  deadline: z.coerce.date(),                   // Fecha límite
  auditionDate: z.coerce.date().optional(),    // Fecha de audición
  requirements: z.array(z.string()).optional(),// Lista de requisitos
  contactEmail: z.string().default('contacto@orquestaalimapu.cl'),
  isOpen: z.boolean().default(true),           // Abierta/cerrada
  draft: z.boolean().default(false),           // Borrador
}
```

### Equipo Directivo

```typescript
{
  name: z.string(),                            // "Danitza Villarroel"
  role: z.string(),                            // "Directora General"
  photo: z.string().optional(),                // Foto
  photoPosition: z.string().optional(),        // CSS position
  order: z.number().default(99),               // Orden de aparición
  bio: z.string().optional(),                  // Biografía
  email: z.string().email().optional(),        // Email de contacto
}
```

---

## 7. Páginas y Rutas

Astro usa **file-based routing**: cada archivo en `src/pages/` genera una ruta.

### Mapa de rutas

| Archivo | URL | Descripción |
|---------|-----|-------------|
| `pages/index.astro` | `/` | Página de inicio |
| `pages/contacto.astro` | `/contacto/` | Contacto |
| `pages/agenda/index.astro` | `/agenda/` | Lista de conciertos |
| `pages/agenda/[...slug].astro` | `/agenda/concierto-x/` | Detalle de concierto |
| `pages/noticias/index.astro` | `/noticias/` | Lista de noticias |
| `pages/noticias/[...slug].astro` | `/noticias/noticia-x/` | Detalle de noticia |
| `pages/galeria/index.astro` | `/galeria/` | Álbumes de galería |
| `pages/galeria/[...slug].astro` | `/galeria/album-x/` | Detalle de álbum |
| `pages/audiciones/index.astro` | `/audiciones/` | Lista de audiciones |
| `pages/audiciones/[...slug].astro` | `/audiciones/audicion-x/` | Detalle de audición |
| `pages/banda/index.astro` | `/banda/` | Banda Alimapu |
| `pages/sobre-nosotros/index.astro` | `/sobre-nosotros/` | Sobre Nosotros |
| `pages/sobre-nosotros/historia.astro` | `/sobre-nosotros/historia/` | Historia |
| `pages/sobre-nosotros/equipo.astro` | `/sobre-nosotros/equipo/` | Equipo directivo |
| `pages/sobre-nosotros/integrantes.astro` | `/sobre-nosotros/integrantes/` | Músicos |
| `pages/sobre-nosotros/direccion.astro` | `/sobre-nosotros/direccion/` | Dirección musical |
| `pages/sobre-nosotros/dossier.astro` | `/sobre-nosotros/dossier/` | Dossier |

### Rutas dinámicas (`[...slug].astro`)

Los archivos con `[...slug]` generan una página por cada entrada en la colección:

```astro
---
// pages/agenda/[...slug].astro

import { getCollection } from 'astro:content';

// getStaticPaths() dice a Astro qué páginas generar
export async function getStaticPaths() {
  const conciertos = await getCollection('conciertos');
  return conciertos.map((concierto) => ({
    params: { slug: concierto.id },
    props: { concierto },
  }));
}

// Cada concierto genera su propia página HTML
const { concierto } = Astro.props;
---

<h1>{concierto.data.title}</h1>
```

Si hay 10 conciertos en `src/content/conciertos/`, Astro genera 10 páginas HTML.

### Página de inicio (index.astro)

La página principal combina datos de varias colecciones:

```astro
---
// Próximos 3 conciertos
const conciertos = await getCollection('conciertos', ({ data }) => !data.draft);
const proximos = conciertos
  .filter(c => isUpcoming(c.data.date))
  .sort((a, b) => a.data.date.getTime() - b.data.date.getTime())
  .slice(0, 3);

// Últimas 3 noticias
const noticias = await getCollection('noticias', ({ data }) => !data.draft);
const ultimas = noticias
  .sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
  .slice(0, 3);
---
```

---

## 8. Componentes

### Componentes comunes

#### Header.astro
Barra de navegación fija con:
- Logo y nombre de la orquesta
- Menú desktop con dropdown para "Sobre Nosotros"
- Menú mobile (hamburguesa) con toggle JavaScript
- Detección de link activo basado en URL
- Submenu: Historia, Equipo, Integrantes, Dirección, Dossier

#### Footer.astro
Pie de página con 3 columnas:
- Columna 1: Descripción de la organización
- Columna 2: Links rápidos (Agenda, Noticias, Audiciones, etc.)
- Columna 3: Contacto (email, ubicación) + Redes sociales
- Copyright con año dinámico

### Componentes UI

#### HeroSection.astro

```typescript
interface Props {
  title: string;              // Título principal
  subtitle?: string;          // Subtítulo
  backgroundImage?: string;   // Imagen de fondo
  overlay?: 'light' | 'dark' | 'gradient';  // Tipo de overlay
  height?: 'sm' | 'md' | 'lg' | 'full';    // Altura
  align?: 'left' | 'center';                // Alineación
}
```

Hero de página completa con animación fade-in-up. Soporta slot para contenido adicional (botones CTA).

#### Section.astro

```typescript
interface Props {
  bg?: 'white' | 'light' | 'dark';  // Color de fondo
  class?: string;                     // Clases adicionales
}
```

Contenedor de sección con padding vertical y max-width. Alterna entre fondos para crear ritmo visual.

#### SectionHeading.astro

```typescript
interface Props {
  title: string;              // Título de la sección
  subtitle?: string;          // Subtítulo
  align?: 'left' | 'center'; // Alineación
  dark?: boolean;             // Modo oscuro (texto blanco)
}
```

Encabezado con barra dorada decorativa debajo del título.

### Componentes SEO

#### SEOHead.astro
Genera meta tags para SEO:
- `<title>` con formato "Página | Orquesta Filarmónica Alimapu"
- Meta description
- Canonical URL
- Open Graph tags (og:title, og:description, og:image, og:locale)
- Twitter Card tags
- Noindex opcional para borradores

#### SchemaOrg.astro
Inyecta JSON-LD estructurado:
```html
<script type="application/ld+json">
  { "@context": "https://schema.org", "@type": "MusicGroup", ... }
</script>
```

---

## 9. Layouts

### BaseLayout.astro

Layout maestro que envuelve todas las páginas:

```typescript
interface Props {
  title: string;           // Título de la página
  description: string;     // Meta description
  image?: string;          // OG image
  imageAlt?: string;       // Alt de OG image
  type?: 'website' | 'article';  // Tipo de página
  publishedDate?: Date;    // Fecha de publicación
  modifiedDate?: Date;     // Fecha de modificación
  noindex?: boolean;       // Excluir de buscadores
  schema?: object;         // JSON-LD schema
}
```

Incluye:
- `<html lang="es">` para accesibilidad
- SEOHead con meta tags
- SchemaOrg si se proporcionan schemas
- Link "Saltar al contenido" (accesibilidad)
- Header fijo
- `<main>` con slot para contenido
- Footer
- Script de Scroll Reveal (IntersectionObserver)

### Cómo usar el layout

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---

<BaseLayout title="Mi Página" description="Descripción para SEO">
  <h1>Contenido de la página</h1>
  <p>Todo lo que pones aquí va dentro del <main>.</p>
</BaseLayout>
```

---

## 10. Utilidades

### date.ts - Formateo de fechas en español

```typescript
formatDateLong(date)     // "jueves 3 de abril de 2026"
formatDateShort(date)    // "3 de abril, 2026"
formatDateCompact(date)  // "03/04/2026"
isUpcoming(date)         // true si la fecha es hoy o futura
```

Usa `Intl.DateTimeFormat` con locale `es-CL`.

### image.ts - Resolución de URLs de Google Drive

```typescript
resolveImageUrl(src)
```

Convierte links de Google Drive a URLs directas:

| Input | Output |
|-------|--------|
| `https://drive.google.com/file/d/ABC123/view` | `https://lh3.googleusercontent.com/d/ABC123` |
| `https://drive.google.com/open?id=ABC123` | `https://lh3.googleusercontent.com/d/ABC123` |
| `https://ejemplo.com/foto.jpg` | `https://ejemplo.com/foto.jpg` (sin cambio) |
| `/images/foto.webp` | `/images/foto.webp` (sin cambio) |

### paths.ts - Resolución de rutas

```typescript
assetPath(path)
```

1. Si es URL de Google Drive → la convierte con `resolveImageUrl()`
2. Si es URL externa (http/https) → la devuelve tal cual
3. Si es ruta local → le agrega el BASE_URL del sitio

### schema.ts - Generadores de JSON-LD

```typescript
musicGroupSchema()            // Schema MusicGroup para la orquesta
concertEventSchema(concert)   // Schema MusicEvent para un concierto
newsArticleSchema(article)    // Schema NewsArticle para una noticia
breadcrumbSchema(items)       // Schema BreadcrumbList para migas de pan
```

---

## 11. Estilos y Diseño Visual

### Paleta de colores

```
Primary (Azul oscuro profundo):
  50: #eef4ff  ···  700: #1e3a8a  ···  950: #0f1557

Accent (Dorado):
  50: #fefce8  ···  400: #facc15  ···  500: #d4a017  ···  900: #664e14

Surface (Neutros cálidos):
  50: #fafaf9  ···  200: #e7e5e4  ···  800: #292524  ···  900: #1c1917
```

### Tipografía

| Uso | Fuente | Clase Tailwind |
|-----|--------|---------------|
| Títulos | Playfair Display | `font-display` |
| Cuerpo | Inter | `font-sans` (default) |

### Diseño visual: Dark Hero + Light Content

- **Hero sections**: Fondo primary-950 con overlay, texto blanco
- **Secciones de contenido**: Alternan entre `bg="white"` y `bg="light"`
- **CTA sections**: Fondo oscuro intercalado
- **Footer**: Surface-900

### Animaciones

```css
/* Fade-in-up al cargar */
@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Scroll Reveal (via IntersectionObserver) */
.scroll-reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}
.scroll-reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

---

## 12. SEO y Schema.org

### Meta tags por página

Cada página define `title` y `description` que se pasan al BaseLayout:

```astro
<BaseLayout
  title="Agenda de Conciertos"
  description="Próximos conciertos de la Orquesta Filarmónica Alimapu en Valparaíso."
>
```

Esto genera:
```html
<title>Agenda de Conciertos | Orquesta Filarmónica Alimapu</title>
<meta name="description" content="Próximos conciertos de la...">
<meta property="og:title" content="Agenda de Conciertos">
<meta property="og:description" content="Próximos conciertos de la...">
<meta property="og:locale" content="es_CL">
```

### Schema.org JSON-LD

El sitio implementa 4 tipos de Schema:

1. **MusicGroup** - En la página principal
2. **MusicEvent** - En cada página de concierto
3. **NewsArticle** - En cada página de noticia
4. **BreadcrumbList** - En páginas con navegación jerárquica

### Sitemap

Se genera automáticamente en `/sitemap-index.xml`. Excluye páginas con `draft: true`.

---

## 13. Manejo de Imágenes

### Tres fuentes de imágenes

| Fuente | Ejemplo | Cuándo usar |
|--------|---------|-------------|
| **Local** | `/images/integrantes/foto.webp` | Fotos permanentes (músicos, equipo) |
| **Google Drive** | `https://drive.google.com/file/d/ABC/view` | Galerías, fotos temporales |
| **Externa** | `https://ejemplo.com/foto.jpg` | Imágenes de terceros |

### Flujo de resolución

```
Campo photo en .md
    ↓
assetPath() en la página .astro
    ↓
¿Es Google Drive? → resolveImageUrl() → lh3.googleusercontent.com/d/ID
¿Es URL externa?  → se usa tal cual
¿Es ruta local?   → se agrega BASE_URL
    ↓
<img src={resultado} />
```

### Optimización

- **Sharp** optimiza imágenes locales durante el build
- **Lazy loading** con `loading="lazy"` en imágenes del grid
- **WebP** como formato recomendado para fotos locales
- **Tamaño recomendado**: 200x200px músicos, 1200px ancho para noticias/conciertos

---

## 14. Deploy

### GitHub Actions → GitHub Pages

El archivo `.github/workflows/deploy.yml` automatiza todo:

```
Push a main → GitHub Actions detecta → Build con Astro → Deploy a GitHub Pages
```

### Flujo detallado

```
1. Desarrollador hace push a la rama `main`
2. GitHub Actions se activa (trigger: push a main)
3. Job "build":
   a. Checkout del código
   b. Instala Node.js 22
   c. npm install
   d. npm run build → genera /dist/
   e. Sube /dist/ como artifact
4. Job "deploy":
   a. Descarga artifact
   b. Publica en GitHub Pages
5. Sitio actualizado en ~2 minutos
```

### Dominio personalizado

El archivo `public/CNAME` contiene `beta.orquestaalimapu.cl`. GitHub Pages lo usa para configurar el dominio automáticamente.

---

## 15. Guía de Desarrollo Local

### Instalación

```bash
# Clonar repositorio
git clone https://github.com/martinmiranda14/web-alimapu.git
cd web-alimapu

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El sitio estará en `http://localhost:4321`.

### Scripts disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo con hot reload |
| `npm run build` | Build de producción en `/dist/` |
| `npm run preview` | Preview del build local |

### Agregar contenido nuevo

1. Crear archivo `.md` en la carpeta de la colección correspondiente
2. Copiar el frontmatter de un archivo existente como plantilla
3. Llenar los campos según el esquema
4. `npm run dev` para verificar localmente
5. `npm run build` para verificar que no haya errores
6. Commit y push a `main`

### Agregar una nueva página

1. Crear archivo `.astro` en `src/pages/`
2. Importar `BaseLayout` y los componentes necesarios
3. Usar `getCollection()` para consultar datos
4. El archivo automáticamente genera la ruta

### Agregar un nuevo componente

1. Crear archivo `.astro` en `src/components/`
2. Definir la interface Props
3. Importar y usar en las páginas

---

## 16. Referencia Rápida

### Archivos más importantes

| Archivo | Qué hace |
|---------|----------|
| `content.config.ts` | Define qué campos acepta cada colección |
| `astro.config.mjs` | Configuración general de Astro |
| `src/layouts/BaseLayout.astro` | Layout maestro (HTML, SEO, header, footer) |
| `src/styles/global.css` | Colores, fuentes, animaciones |
| `src/utils/paths.ts` | Resolución de URLs de imágenes |
| `.github/workflows/deploy.yml` | Automatización del deploy |

### Patrones comunes

**Consultar una colección con filtro:**
```astro
const items = await getCollection('noticias', ({ data }) => !data.draft);
```

**Ordenar por fecha (más reciente primero):**
```astro
const sorted = items.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
```

**Ordenar por order (menor primero):**
```astro
const sorted = items.sort((a, b) => a.data.order - b.data.order);
```

**Encontrar un elemento destacado:**
```astro
const featured = items.find((m) => m.data.featured);
```

**Renderizar bio con párrafos múltiples:**
```astro
<div set:html={bio.split('\n').map(p => `<p>${p}</p>`).join('')} />
```

**Resolver imagen (Google Drive o local):**
```astro
<img src={assetPath(member.data.photo)} alt={member.data.name} />
```

### Sistema de orden por instrumento

| Sección | Instrumento | Rango |
|---------|------------|-------|
| cuerdas | Violín I | 100–199 |
| cuerdas | Violín II | 200–299 |
| cuerdas | Viola | 300–399 |
| cuerdas | Violonchello | 400–499 |
| cuerdas | Contrabajo | 500–599 |
| maderas | Flauta | 100–199 |
| maderas | Oboe | 200–299 |
| maderas | Clarinete | 300–399 |
| maderas | Fagot | 400–499 |
| bronces | Trompeta | 100–199 |
| bronces | Corno | 200–299 |
| bronces | Trombón | 300–399 |
| percusion | Percusión | 100–199 |
| percusion | Piano | 200–299 |

---

*Manual generado para la Orquesta Filarmónica Alimapu — Abril 2026*
