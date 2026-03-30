# Guía: Cómo agregar un músico al sitio web

## Paso 1: Subir la foto del músico

1. Ve al repositorio en GitHub: https://github.com/martinmiranda14/web-alimapu
2. Navega a la carpeta `public/images/integrantes/`
   - Si la carpeta no existe, la crearás en el siguiente paso
3. Haz clic en **"Add file"** → **"Upload files"**
4. Arrastra la foto del músico
   - **Formato recomendado**: JPG o PNG
   - **Tamaño recomendado**: 400x400 píxeles (cuadrada)
   - **Nombre del archivo**: usar el nombre del músico sin espacios ni tildes, ejemplo: `juan-perez.jpg`
5. Haz clic en **"Commit changes"**

> **Tip**: Si necesitas crear la carpeta `integrantes` dentro de `public/images/`, al subir el archivo escribe la ruta completa en el nombre: `integrantes/juan-perez.jpg`

---

## Paso 2: Crear el archivo del músico

1. En el repositorio, navega a la carpeta `src/content/integrantes/`
2. Haz clic en **"Add file"** → **"Create new file"**
3. En el campo de nombre, escribe el nombre del archivo. Ejemplo:

   ```
   juan-perez.md
   ```

   > Usa solo minúsculas, sin tildes ni espacios. Separa las palabras con guiones.

4. Copia y pega la siguiente plantilla en el editor:

   ```markdown
   ---
   name: "Nombre Completo del Músico"
   instrument: "Nombre del instrumento"
   section: "cuerdas"
   photo: "/images/integrantes/nombre-del-archivo.jpg"
   order: 10
   isActive: true
   bio: "Breve descripción del músico (opcional)."
   ---
   ```

5. Modifica los campos con los datos reales (ver referencia abajo)
6. Haz clic en **"Commit changes"**

---

## Referencia de campos

| Campo        | Obligatorio | Descripción                                                   | Ejemplo                                    |
| ------------ | ----------- | ------------------------------------------------------------- | ------------------------------------------ |
| `name`       | Sí          | Nombre completo del músico                                    | `"María González Soto"`                    |
| `instrument` | Sí          | Instrumento que toca                                          | `"Violín"`, `"Flauta Traversa"`, `"Corno"` |
| `section`    | Sí          | Sección instrumental (ver opciones abajo)                     | `"cuerdas"`                                |
| `photo`      | No          | Ruta a la foto (debe empezar con `/images/integrantes/`)      | `"/images/integrantes/maria-gonzalez.jpg"` |
| `order`      | No          | Número para ordenar dentro de la sección (menor = primero)    | `10`                                       |
| `isActive`   | No          | Si el músico está activo. Poner `false` para ocultar          | `true`                                     |
| `bio`        | No          | Descripción corta (una o dos frases)                          | `"Egresada de la UPLA, 5 años en la orquesta."` |

### Opciones válidas para `section`

| Valor         | Se muestra como |
| ------------- | --------------- |
| `"direccion"` | Dirección       |
| `"cuerdas"`   | Cuerdas         |
| `"maderas"`   | Maderas         |
| `"bronces"`   | Bronces         |
| `"percusion"` | Percusión       |

---

## Ejemplo completo

Archivo: `src/content/integrantes/maria-gonzalez.md`

```markdown
---
name: "María González Soto"
instrument: "Violín"
section: "cuerdas"
photo: "/images/integrantes/maria-gonzalez.jpg"
order: 10
isActive: true
bio: "Violinista egresada de la Universidad de Valparaíso. Integrante desde 2020."
---
```

---

## Cómo editar un músico existente

1. Navega a `src/content/integrantes/` en el repositorio
2. Haz clic en el archivo `.md` del músico que quieres editar
3. Haz clic en el ícono del lápiz (editar)
4. Modifica los campos que necesites
5. Haz clic en **"Commit changes"**

---

## Cómo desactivar o eliminar un músico

### Opción A: Desactivar (ocultar sin borrar)

Edita el archivo del músico y cambia `isActive` a `false`:

```markdown
isActive: false
```

El músico dejará de aparecer en el sitio pero su archivo se mantiene en el repositorio.

### Opción B: Eliminar permanentemente

1. Navega al archivo del músico en `src/content/integrantes/`
2. Haz clic en el archivo
3. Haz clic en el ícono de basura (eliminar)
4. Confirma con **"Commit changes"**

---

## Notas importantes

- Después de cada cambio (agregar, editar o eliminar), el sitio se actualiza automáticamente en **1-2 minutos**
- Los nombres de archivos deben ser **únicos** (no puede haber dos `juan-perez.md`)
- Si el músico no tiene foto, simplemente omite el campo `photo` y se mostrará un ícono con sus iniciales
- El campo `order` sirve para controlar el orden en que aparecen. Se recomienda usar múltiplos de 10 (10, 20, 30...) para poder insertar músicos entre medio después
