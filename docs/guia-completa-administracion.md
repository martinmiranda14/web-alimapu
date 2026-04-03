# Guía Completa de Administración del Sitio Web

## Índice

1. [Cómo funciona el sitio](#cómo-funciona-el-sitio)
2. [Agregar un concierto](#agregar-un-concierto)
3. [Agregar una noticia](#agregar-una-noticia)
4. [Agregar un músico](#agregar-un-músico)
5. [Agregar un miembro del equipo directivo](#agregar-un-miembro-del-equipo-directivo)
6. [Agregar una audición](#agregar-una-audición)
7. [Agregar un álbum a la galería](#agregar-un-álbum-a-la-galería)
8. [Subir imágenes](#subir-imágenes)
9. [Editar contenido existente](#editar-contenido-existente)
10. [Eliminar contenido](#eliminar-contenido)
11. [Preguntas frecuentes](#preguntas-frecuentes)

---

## Cómo funciona el sitio

El sitio web se genera automáticamente a partir de **archivos de texto** (formato Markdown `.md`). No es necesario saber programar.

### Flujo de trabajo

```
Tú editas un archivo .md en GitHub → GitHub lo detecta → Se regenera el sitio → Listo en ~2 minutos
```

### Dónde está cada cosa

| Contenido          | Carpeta en GitHub                    |
| ------------------ | ------------------------------------ |
| Conciertos/Agenda  | `src/content/conciertos/`            |
| Noticias           | `src/content/noticias/`              |
| Músicos            | `src/content/integrantes/`           |
| Equipo directivo   | `src/content/equipo-directivo/`      |
| Audiciones         | `src/content/audiciones/`            |
| Galería            | `src/content/galeria/`               |
| Imágenes           | `public/images/`                     |
| Páginas (misión, visión, historia) | `src/content/paginas/`  |

### Cómo acceder

1. Ve a https://github.com/martinmiranda14/web-alimapu
2. Inicia sesión con tu cuenta de GitHub
3. Navega a la carpeta del contenido que quieres modificar

---

## Agregar un concierto

### Paso 1: Ir a la carpeta

Navega a `src/content/conciertos/` en el repositorio.

### Paso 2: Crear archivo

Haz clic en **"Add file"** → **"Create new file"**

### Paso 3: Nombrar el archivo

Usa el formato: `AAAA-MM-nombre-corto.md`

Ejemplo: `2026-07-concierto-fiestas-patrias.md`

### Paso 4: Copiar la plantilla

```markdown
---
title: "Nombre del Concierto"
description: "Descripción corta para Google y redes sociales (máximo 160 caracteres)."
date: 2026-07-15
time: "19:30"
endTime: "21:00"
venue: "Nombre del lugar"
venueAddress: "Dirección del lugar"
image: "/images/conciertos/nombre-imagen.jpg"
imageAlt: "Descripción de la imagen"
program:
  - composer: "Nombre del Compositor"
    work: "Nombre de la Obra"
  - composer: "Otro Compositor"
    work: "Otra Obra"
    soloist: "Nombre del Solista, instrumento"
ensemble: "orquesta"
isFree: true
draft: false
---

Texto libre sobre el concierto. Aquí puedes escribir lo que quieras.

## Subtítulo

Más texto con **negrita** o *cursiva* si lo necesitas.
```

### Referencia de campos

| Campo          | Obligatorio | Qué poner                                                    |
| -------------- | ----------- | ------------------------------------------------------------ |
| `title`        | Sí          | Nombre del concierto entre comillas                          |
| `description`  | Sí          | Resumen corto (máximo 160 caracteres). Aparece en Google     |
| `date`         | Sí          | Fecha en formato `AAAA-MM-DD`                                |
| `time`         | Sí          | Hora de inicio entre comillas: `"19:30"`                     |
| `endTime`      | No          | Hora de término entre comillas: `"21:00"`                    |
| `venue`        | Sí          | Nombre del lugar                                             |
| `venueAddress` | No          | Dirección del lugar                                          |
| `venueMapUrl`  | No          | Link de Google Maps                                          |
| `image`        | No          | Ruta local o link de Google Drive (ver sección "Subir imágenes") |
| `imageAlt`     | No          | Descripción de la imagen (para accesibilidad)                |
| `program`      | No          | Lista de obras (ver plantilla)                               |
| `ensemble`     | Sí          | `"orquesta"`, `"banda"` o `"camara"`                         |
| `isFree`       | No          | `true` si es gratis, `false` si tiene entrada                |
| `ticketUrl`    | No          | Link para comprar entradas (solo si `isFree: false`)         |
| `isCancelled`  | No          | `true` si se canceló el concierto                            |
| `draft`        | No          | `true` para ocultar del sitio (borrador), `false` para publicar |

### Paso 5: Guardar

Haz clic en **"Commit changes"** → agrega un mensaje como "Agregar concierto julio 2026" → **"Commit changes"**

---

## Agregar una noticia

### Carpeta: `src/content/noticias/`

### Nombre del archivo: `AAAA-MM-titulo-corto.md`

Ejemplo: `2026-03-nuevo-director-invitado.md`

### Plantilla

```markdown
---
title: "Título de la Noticia"
description: "Resumen corto para Google (máximo 160 caracteres)."
date: 2026-03-15
image: "/images/noticias/nombre-imagen.webp"
imageAlt: "Descripción de la imagen"
author: "Orquesta Filarmónica Alimapu"
tags: ["etiqueta1", "etiqueta2"]
sources:
  - name: "Nombre del medio"
    url: "https://ejemplo.com/noticia"
  - name: "Otro medio"
    url: "https://otro.com/noticia"
banda: false
draft: false
---

Contenido de la noticia. Escribe lo que necesites aquí.

## Subtítulo

Más contenido con **negrita**, *cursiva* o [un enlace](https://ejemplo.com).
```

### Referencia de campos

| Campo         | Obligatorio | Qué poner                                                    |
| ------------- | ----------- | ------------------------------------------------------------ |
| `title`       | Sí          | Título de la noticia                                         |
| `description` | Sí          | Resumen corto (máximo 160 caracteres)                        |
| `date`        | Sí          | Fecha de publicación: `AAAA-MM-DD`                           |
| `image`       | No          | Ruta a la imagen o link de Google Drive                      |
| `imageAlt`    | No          | Descripción de la imagen                                     |
| `author`      | No          | Autor (por defecto: "Orquesta Filarmónica Alimapu")          |
| `tags`        | No          | Etiquetas entre corchetes: `["concierto", "2026"]`           |
| `sources`     | No          | Lista de fuentes con `name` y `url` (aparecen al final de la noticia) |
| `banda`       | No          | `true` si es noticia de la Banda, `false` si es de la orquesta |
| `draft`       | No          | `true` para borrador, `false` para publicar                  |

---

## Agregar un músico

### Carpeta: `src/content/integrantes/`

### Nombre del archivo: `nombre-apellido.md`

Ejemplo: `maria-gonzalez.md`

### Plantilla

```markdown
---
name: "Nombre Completo"
instrument: "Instrumento"
section: "cuerdas"
photo: "/images/integrantes/nombre-apellido.jpg"
order: 10
isActive: true
bio: "Descripción corta (opcional)."
---
```

### Opciones para `section`

| Valor         | Se muestra como                          |
| ------------- | ---------------------------------------- |
| `"direccion"` | Dirección (aparece en `/sobre-nosotros/direccion/`, no en integrantes) |
| `"cuerdas"`   | Cuerdas                                  |
| `"maderas"`   | Maderas                                  |
| `"bronces"`   | Bronces                                  |
| `"percusion"` | Percusión                                |

### Campos especiales para directores (`section: "direccion"`)

| Campo      | Qué hace                                                         |
| ---------- | ---------------------------------------------------------------- |
| `featured` | Si es `true`, aparece destacado como "Directora/Director Principal" con foto grande y bio visible. Los demás aparecen en la sección "Directores Asistentes" |

### Bio con múltiples párrafos

Para que la bio tenga párrafos separados, usa el formato `|` de YAML:

```yaml
bio: |
    Primer párrafo de la biografía.
    Segundo párrafo con más información.
```

> **Importante:** Usa `|` (barra vertical) seguido de salto de línea, e indenta cada línea con 4 espacios. Cada línea será un párrafo separado.

### Sobre el campo `order`

Controla el orden en que aparecen los músicos dentro de su sección. Números menores aparecen primero.

El sistema usa **rangos de 100** por instrumento, así cada instrumento soporta hasta 99 músicos:

#### Cuerdas (`section: "cuerdas"`)

| Instrumento  | Rango       | Ejemplo |
| ------------ | ----------- | ------- |
| Violín I     | 100 – 199   | 100, 101, 102... |
| Violín II    | 200 – 299   | 200, 201, 202... |
| Viola        | 300 – 399   | 300, 301, 302... |
| Violonchello | 400 – 499   | 400, 401, 402... |
| Contrabajo   | 500 – 599   | 500, 501, 502... |

#### Maderas (`section: "maderas"`)

| Instrumento    | Rango       |
| -------------- | ----------- |
| Flauta         | 100 – 199   |
| Oboe           | 200 – 299   |
| Clarinete      | 300 – 399   |
| Fagot          | 400 – 499   |

#### Bronces (`section: "bronces"`)

| Instrumento | Rango       |
| ----------- | ----------- |
| Trompeta    | 100 – 199   |
| Corno       | 200 – 299   |
| Trombón     | 300 – 399   |
| Tuba        | 400 – 499   |

#### Percusión y Piano (`section: "percusion"`)

| Instrumento | Rango       |
| ----------- | ----------- |
| Percusión   | 100 – 199   |
| Piano       | 200 – 299   |

> **Nota:** El `order` solo afecta dentro de cada sección. Un violín con order 100 y una flauta con order 100 no se mezclan porque están en secciones distintas (`cuerdas` vs `maderas`).
>
> Si dos personas tienen el mismo número, ambas aparecen pero el orden entre ellas no está garantizado.

### Si no hay foto

Simplemente no incluyas el campo `photo`. Se mostrarán las iniciales del músico.

---

## Agregar un miembro del equipo directivo

### Carpeta: `src/content/equipo-directivo/`

### Plantilla

```markdown
---
name: "Nombre Completo"
role: "Cargo en la organización"
photo: "/images/equipo/nombre-apellido.jpg"
order: 1
bio: "Descripción corta de la persona y su rol."
email: "correo@ejemplo.com"
---
```

| Campo   | Obligatorio | Qué poner                          |
| ------- | ----------- | ---------------------------------- |
| `name`  | Sí          | Nombre completo                    |
| `role`  | Sí          | Cargo: "Presidenta", "Tesorero", etc. |
| `photo` | No          | Ruta a la foto                     |
| `order` | No          | Orden de aparición (menor = primero) |
| `bio`   | No          | Descripción breve                  |
| `email` | No          | Correo de contacto                 |

---

## Agregar una audición

### Carpeta: `src/content/audiciones/`

### Nombre del archivo: `AAAA-instrumento.md`

Ejemplo: `2026-bronces.md`

### Plantilla

```markdown
---
title: "Audiciones 2026 - Sección Bronces"
description: "La Orquesta abre audiciones para corno y trombón para la temporada 2026."
instrument: "Corno, Trombón"
section: "bronces"
deadline: 2026-06-30
auditionDate: 2026-07-15
requirements:
  - "Título profesional o estudiante avanzado"
  - "Experiencia en agrupaciones orquestales"
  - "Preparar dos obras contrastantes"
contactEmail: "contacto@orquestaalimapu.cl"
isOpen: true
draft: false
---

Texto libre describiendo la audición, requisitos adicionales, etc.
```

### Referencia de campos

| Campo          | Obligatorio | Qué poner                                          |
| -------------- | ----------- | -------------------------------------------------- |
| `title`        | Sí          | Título de la convocatoria                          |
| `description`  | Sí          | Resumen corto (máximo 160 caracteres)              |
| `instrument`   | Sí          | Instrumentos requeridos                            |
| `section`      | Sí          | `"cuerdas"`, `"maderas"`, `"bronces"` o `"percusion"` |
| `deadline`     | Sí          | Fecha límite de postulación: `AAAA-MM-DD`          |
| `auditionDate` | No          | Fecha de la audición presencial                    |
| `requirements` | No          | Lista de requisitos (cada uno con `- ` al inicio)  |
| `contactEmail` | No          | Email de contacto (por defecto usa el general)     |
| `isOpen`       | No          | `true` si está abierta, `false` si cerró           |
| `draft`        | No          | `true` para borrador, `false` para publicar        |

---

## Agregar un álbum a la galería

### Carpeta: `src/content/galeria/`

### Nombre del archivo: `AAAA-MM-nombre-evento.md`

Ejemplo: `2026-04-concierto-otono.md`

### Plantilla

```markdown
---
title: "Nombre del Evento"
description: "Descripción corta del álbum."
date: 2026-04-19
coverImage: "https://drive.google.com/file/d/ID_DE_LA_FOTO/view?usp=sharing"
coverImageAlt: "Descripción de la imagen de portada"
images:
  - src: "https://drive.google.com/file/d/ID_FOTO_1/view?usp=sharing"
    alt: "Descripción de la foto 1"
    caption: "Texto que aparece debajo de la foto (opcional)"
  - src: "https://drive.google.com/file/d/ID_FOTO_2/view?usp=sharing"
    alt: "Descripción de la foto 2"
  - src: "/images/galeria/foto-local.webp"
    alt: "También se puede usar una imagen local"
videos:
  - youtubeId: "XXXXXXXXXXX"
    title: "Título del video"
tags: ["concierto", "2026"]
---

Texto libre describiendo el evento fotografiado.
```

> **Nota:** Puedes mezclar imágenes de Google Drive con imágenes locales en el mismo álbum.

---

## Editar la Misión y Visión

### Archivo: `src/content/paginas/sobre-nosotros.md`

Este archivo contiene la misión y visión que se muestran en la página "Sobre Nosotros". Se puede editar directamente desde GitHub.

### Ejemplo

```yaml
---
title: "Sobre Nosotros"
description: "Conoce la historia, misión y visión de la Orquesta Filarmónica Alimapu."
mision: "Texto de la misión aquí."
vision: "Texto de la visión aquí."
---
```

### Referencia de campos

| Campo         | Obligatorio | Qué poner                                         |
| ------------- | ----------- | -------------------------------------------------- |
| `title`       | Sí          | Título de la página                                |
| `description` | Sí          | Resumen corto para Google (máximo 160 caracteres)  |
| `mision`      | No          | Texto de la misión de la orquesta                  |
| `vision`      | No          | Texto de la visión de la orquesta                  |

---

## Editar la Historia de la orquesta

### Archivo: `src/content/paginas/historia.md`

Este archivo contiene toda la información de la página de Historia. Se puede editar directamente desde GitHub.

### Qué se puede cambiar

- **Título y subtítulo** de la página
- **Texto introductorio** (el cuerpo del archivo Markdown, debajo del `---`)
- **Hitos de la línea de tiempo**: agregar, editar o eliminar eventos históricos
- **Texto de futuro**: el párrafo final sobre la visión a futuro

### Cómo agregar un nuevo hito

Agrega un nuevo bloque dentro de `hitos:`, respetando el formato:

```yaml
hitos:
  - year: "2025"
    title: "Título del hito"
    description: "Descripción de lo que pasó ese año."
```

> **Importante:** Respetar la indentación (2 espacios). Cada campo de un hito va con 4 espacios de indentación.

### Referencia de campos

| Campo         | Obligatorio | Qué poner                                     |
| ------------- | ----------- | --------------------------------------------- |
| `title`       | Sí          | Título de la página                           |
| `description` | Sí          | Resumen corto para Google (máximo 160 caracteres) |
| `subtitle`    | No          | Subtítulo que aparece en el hero              |
| `hitos`       | No          | Lista de hitos (ver formato arriba)           |
| `futureText`  | No          | Texto de la sección "El futuro"               |

---

### Cómo obtener el ID de un video de YouTube

De la URL `https://www.youtube.com/watch?v=dQw4w9WgXcQ`, el ID es: `dQw4w9WgXcQ`

Es la parte después de `v=`.

---

## Subir imágenes

Hay dos formas de usar imágenes en el sitio: **subirlas al repositorio** o **usar un link de Google Drive**.

### Opción A: Link de Google Drive (recomendado para galerías)

Puedes usar directamente el link de compartir de Google Drive. Solo necesitas que la imagen esté compartida como **"Cualquier persona con el enlace"**.

#### Cómo hacerlo

1. Sube la foto a Google Drive
2. Clic derecho → **"Compartir"** → cambia a **"Cualquier persona con el enlace"**
3. Copia el link (se ve así: `https://drive.google.com/file/d/ABC123XYZ/view?usp=sharing`)
4. Pega el link directamente en el campo de imagen del archivo `.md`

#### Ejemplo en un archivo de galería

```yaml
images:
  - src: "https://drive.google.com/file/d/ABC123XYZ/view?usp=sharing"
    alt: "Descripción de la foto"
  - src: "https://drive.google.com/file/d/DEF456UVW/view?usp=sharing"
    alt: "Otra foto"
```

#### Ejemplo en una noticia

```yaml
image: "https://drive.google.com/file/d/ABC123XYZ/view?usp=sharing"
```

Esto funciona en **todas** las secciones: noticias, conciertos, galería, integrantes y equipo directivo.

> **IMPORTANTE: Google Photos NO funciona.** Los links de Google Photos (`photos.google.com` o `photos.fife.usercontent.google.com`) requieren autenticación y no se pueden mostrar públicamente en el sitio. Usa siempre **Google Drive** para compartir imágenes por link.

### Opción B: Subir al repositorio (recomendado para fotos de músicos)

Navega a `public/images/` en el repositorio. Usa la subcarpeta correspondiente:

| Tipo de imagen      | Carpeta                        |
| ------------------- | ------------------------------ |
| Fotos de conciertos | `public/images/conciertos/`    |
| Fotos de noticias   | `public/images/noticias/`      |
| Fotos de músicos    | `public/images/integrantes/`   |
| Fotos del equipo    | `public/images/equipo/`        |
| Fotos de galería    | `public/images/galeria/`       |

#### Pasos

1. Haz clic en **"Add file"** → **"Upload files"**
2. Arrastra las imágenes o haz clic en "choose your files"
3. Haz clic en **"Commit changes"**

#### En el archivo `.md`, usa la ruta local

```yaml
image: "/images/noticias/concierto-navidad.webp"
```

### Recomendaciones para imágenes

- **Formato**: WebP o JPG (WebP es más liviano)
- **Tamaño fotos de músicos**: 200x200 px (cuadrada)
- **Tamaño fotos de conciertos/noticias**: 1200px de ancho
- **Peso máximo recomendado**: 500 KB por imagen
- **Nombres de archivo**: minúsculas, sin tildes, sin espacios. Usar guiones. Ejemplo: `concierto-navidad-2025.webp`

### Crear carpetas nuevas

GitHub no permite crear carpetas vacías. Para crear una carpeta, al subir un archivo escribe la ruta completa en el nombre:

```
integrantes/juan-perez.jpg
```

Esto crea la carpeta `integrantes` automáticamente.

---

## Editar contenido existente

1. Navega al archivo que quieres editar en GitHub
2. Haz clic en el archivo para verlo
3. Haz clic en el **ícono del lápiz** (Edit this file)
4. Modifica lo que necesites
5. Haz clic en **"Commit changes"**

El sitio se actualizará en ~2 minutos.

---

## Eliminar contenido

### Opción A: Ocultar sin borrar (recomendado)

Edita el archivo y cambia:
- Músicos: `isActive: false`
- Conciertos/Noticias/Audiciones: `draft: true`
- Audiciones: `isOpen: false`

### Opción B: Eliminar permanentemente

1. Navega al archivo
2. Haz clic en el archivo
3. Haz clic en el **ícono de basura** (Delete this file)
4. Confirma con **"Commit changes"**

---

## Preguntas frecuentes

### ¿Cuánto tarda en actualizarse el sitio?

Aproximadamente **1-2 minutos** después de guardar los cambios en GitHub.

### ¿Puedo deshacer un cambio?

Sí. En GitHub, ve al historial del archivo (botón "History") y puedes ver todas las versiones anteriores.

### ¿Qué pasa si cometo un error en el formato?

Si el archivo tiene un error de formato, el sitio seguirá mostrando la versión anterior hasta que se corrija. Puedes ver si hubo un error en la pestaña **"Actions"** del repositorio.

### ¿Puedo editar varios archivos a la vez?

Sí, pero cada archivo se guarda por separado. El sitio se reconstruye con cada cambio guardado.

### ¿Qué es el texto entre `---`?

Se llama **frontmatter**. Es la información estructurada del contenido (título, fecha, etc.). Es importante mantener el formato exacto:
- Siempre entre tres guiones `---` al inicio y al final
- Los textos van entre comillas: `"Texto aquí"`
- Las fechas van sin comillas: `2026-04-19`
- `true` y `false` van sin comillas
- Las listas empiezan con `- ` (guión y espacio)

### ¿Qué es el texto después del segundo `---`?

Es el **contenido libre** que aparece en la página. Puedes usar:
- `**texto**` para **negrita**
- `*texto*` para *cursiva*
- `## Título` para subtítulos
- `[texto del enlace](https://url.com)` para enlaces
- Líneas en blanco para separar párrafos

### ¿Necesito cuenta de GitHub?

Sí, se necesita una cuenta gratuita en https://github.com y tener acceso al repositorio.

### ¿Cómo veo si el sitio se actualizó correctamente?

1. Ve al repositorio en GitHub
2. Haz clic en la pestaña **"Actions"**
3. Verás el último deploy. Si tiene un ✓ verde, funcionó. Si tiene una ✗ roja, hubo un error.
