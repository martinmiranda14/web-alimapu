# Paleta de Colores del Sitio Web

## Opciones de paleta

---

## Opción 1: Celeste, Amarillo y Rojo (triada oficial)

Los colores se definen en `src/styles/global.css` dentro del bloque `@theme`.

---

## Cómo se aplican los colores

| Rol | Color | Uso |
|---|---|---|
| **Primary (celeste)** | Color principal | Header, hero, fondos de página, títulos, fondos oscuros, cards de conciertos |
| **Accent (amarillo)** | Acentos y CTAs | Botones principales, links activos en navegación, fechas, hover en footer |
| **Highlight (rojo)** | Detalles puntuales | Barras decorativas bajo títulos, botón YouTube, badges destacados |
| **Surface (neutros fríos)** | Fondos auxiliares | Footer, fondos neutros cuando se necesiten |

---

## Valores de la paleta

### Primary: Celeste

```css
--color-primary-50:  #ecfeff;  /* Fondo de secciones "white" */
--color-primary-100: #cffafe;  /* Fondo de secciones "light" */
--color-primary-200: #a5f3fc;
--color-primary-300: #67e8f9;
--color-primary-400: #22d3ee;
--color-primary-500: #06b6d4;
--color-primary-600: #0891b2;
--color-primary-700: #0e7490;  /* Links, hover en títulos */
--color-primary-800: #155e75;
--color-primary-900: #164e63;
--color-primary-950: #0c2d3a;  /* Header, hero, fondos oscuros */
```

### Accent: Amarillo

```css
--color-accent-50:  #fefce8;
--color-accent-100: #fef9c3;
--color-accent-200: #fef08a;
--color-accent-300: #fde047;
--color-accent-400: #facc15;  /* Links activos en nav, fechas en cards */
--color-accent-500: #eab308;  /* Botones principales */
--color-accent-600: #ca8a04;  /* Hover de botones, links de texto */
--color-accent-700: #a16207;
--color-accent-800: #854d0e;
--color-accent-900: #713f12;
```

### Highlight: Rojo

```css
--color-highlight-50:  #fef2f2;
--color-highlight-100: #fee2e2;
--color-highlight-200: #fecaca;
--color-highlight-300: #fca5a5;
--color-highlight-400: #f87171;  /* Barras decorativas (modo oscuro) */
--color-highlight-500: #ef4444;  /* Barras decorativas (modo claro) */
--color-highlight-600: #dc2626;  /* Botón YouTube */
--color-highlight-700: #b91c1c;  /* Hover botón YouTube */
--color-highlight-800: #991b1b;
--color-highlight-900: #7f1d1d;
```

### Surface: Neutros fríos

```css
--color-surface-50:  #f8fafc;
--color-surface-100: #f1f5f9;
--color-surface-200: #e2e8f0;
--color-surface-800: #1e293b;
--color-surface-900: #0f172a;  /* Footer */
```

---

## Archivos clave para cambiar colores

| Archivo | Qué controla |
|---|---|
| `src/styles/global.css` | Definición de la paleta (valores hex) |
| `src/components/ui/Section.astro` | Fondos de las secciones (white/light/dark) |
| `src/components/ui/SectionHeading.astro` | Barras decorativas bajo títulos |
| `src/components/ui/HeroSection.astro` | Fondo fallback del hero |
| `src/layouts/BaseLayout.astro` | Fondo general del body |
| `src/components/common/Header.astro` | Colores del menú de navegación |
| `src/components/common/Footer.astro` | Colores del footer |

---

## Cómo cambiar la paleta

1. Editar los valores hex en `src/styles/global.css` dentro de `@theme`
2. Los nombres (`primary`, `accent`, `highlight`, `surface`) se usan en todo el sitio como clases de Tailwind (ej: `bg-primary-950`, `text-accent-400`)
3. No es necesario tocar otros archivos a menos que se quiera cambiar *dónde* se usa cada color

## Principios de diseño

- **Celeste** como fondo predominante (reemplaza el blanco) para identidad visual fuerte
- **Cards blancas** (`bg-white`) sobre fondo celeste para contraste
- **Amarillo** en elementos interactivos (botones, links) para llamar la atención
- **Rojo** en detalles puntuales para no saturar — barras decorativas, badges importantes
- **Fondos oscuros** (`primary-950`) para hero y secciones CTA que necesitan impacto
