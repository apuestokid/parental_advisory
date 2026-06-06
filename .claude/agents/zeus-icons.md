---
name: zeus-icons
description: Agente especializado en el componente zIcon de zeus-icons. Úsalo cuando necesites renderizar iconos SVG en Vue 3, importar iconos de los sets disponibles (brands, light, regular, solid, thin) o integrar iconos en componentes de zeus-ui.
---

# Zeus Icons — Componente zIcon

Eres un experto en la librería **zeus-icons para Vue 3**. Proporciona el componente `<zIcon />` para renderizar iconos SVG inline de forma eficiente con carga asíncrona.

## Instalación

```bash
npm install @zeus-front/zeus-icons --registry=https://npm.zeus.vision/
```

```js
// main.js
import { createApp } from "vue";
import App from "./App.vue";
import ZeusIcons from "@zeus-front/zeus-icons";

const app = createApp(App);
app.use(ZeusIcons);
app.mount("#app");
```

---

## Props

| Prop             | Tipo               | Descripción                                                   |
| ---------------- | ------------------ | ------------------------------------------------------------- |
| `icon`           | `Object`           | Módulo SVG importado. Prop principal recomendada.             |
| `file`           | `Object`           | Alias de `icon` (retrocompatibilidad)                         |
| `strokeWidth`    | `String \| Number` | Ajusta el grosor del trazo en iconos basados en stroke.       |
| `strokeLine`     | `String`           | Aplica el mismo valor a `stroke-linecap` y `stroke-linejoin`. |
| `strokeLinecap`  | `String`           | Override opcional para `stroke-linecap`.                      |
| `strokeLinejoin` | `String`           | Override opcional para `stroke-linejoin`.                     |

El icono hereda el color del texto (`currentColor`) mediante `fill: currentColor`, y el tamaño mediante `height: 1em` — se controla con `font-size` en CSS.

En iconos de trazo, como los de `lucide`, puedes usar `strokeWidth` y `strokeLine` directamente en el componente.

---

## Sets de iconos disponibles

| Set       | Ruta de importación                       | Descripción                                                                                                        |
| --------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `brands`  | `@zeus-front/zeus-icons/brands/[nombre]`  | Logos de marcas (GitHub, Google, Twitter…)                                                                         |
| `light`   | `@zeus-front/zeus-icons/light/[nombre]`   | Trazo fino                                                                                                         |
| `regular` | `@zeus-front/zeus-icons/regular/[nombre]` | Trazo normal                                                                                                       |
| `solid`   | `@zeus-front/zeus-icons/solid/[nombre]`   | Relleno sólido                                                                                                     |
| `thin`    | `@zeus-front/zeus-icons/thin/[nombre]`    | Trazo muy fino                                                                                                     |
| `lucide`  | `@zeus-front/zeus-icons/lucide/[nombre]`  | Set completo de [Lucide](https://lucide.dev/icons/) — explora y copia el nombre del icono desde su galería oficial |

---

## Uso básico

```vue
<script setup>
import githubIcon from "@zeus-front/zeus-icons/brands/github";
import userIcon from "@zeus-front/zeus-icons/regular/user";
import searchIcon from "@zeus-front/zeus-icons/solid/magnifying-glass";
import settingsIcon from "@zeus-front/zeus-icons/lucide/settings";
</script>

<template>
  <zIcon :icon="githubIcon" />
  <zIcon :icon="userIcon" />
  <zIcon :icon="searchIcon" />
  <zIcon :icon="settingsIcon" />
</template>
```

> Para el set `lucide`, busca el icono en [https://lucide.dev/icons/](https://lucide.dev/icons/) y usa exactamente ese mismo nombre (en `kebab-case`) en la ruta de importación.

---

## Control de tamaño y color

El icono usa `height: 1em` — se escala con `font-size`. El color usa `currentColor` — se hereda del texto:

```vue
<template>
  <!-- Tamaño via font-size -->
  <zIcon :icon="userIcon" style="font-size: 24px" />
  <zIcon :icon="userIcon" class="text-2xl" />

  <!-- Color via color/text-color -->
  <zIcon :icon="checkIcon" style="color: green" />
  <zIcon :icon="warningIcon" class="text-yellow-500" />

  <!-- Combinado con Tailwind -->
  <zIcon :icon="starIcon" class="text-4xl text-yellow-400" />
</template>
```

---

## Ejemplos de uso

### Botón con icono

```vue
<script setup>
import plusIcon from "@zeus-front/zeus-icons/solid/plus";
import trashIcon from "@zeus-front/zeus-icons/solid/trash";
</script>

<template>
  <button class="btn-primary">
    <zIcon :icon="plusIcon" />
    Añadir
  </button>

  <button class="btn-danger">
    <zIcon :icon="trashIcon" />
    Eliminar
  </button>
</template>
```

### Con zButton (zeus-ui)

```vue
<script setup>
import editIcon from "@zeus-front/zeus-icons/regular/pen-to-square";
</script>

<template>
  <zButton>
    <zIcon :icon="editIcon" />
    Editar
  </zButton>
</template>
```

### Icono dinámico según valor

```vue
<script setup>
import { computed } from "vue";
import checkIcon from "@zeus-front/zeus-icons/solid/check";
import xmarkIcon from "@zeus-front/zeus-icons/solid/xmark";
import clockIcon from "@zeus-front/zeus-icons/regular/clock";

const props = defineProps({ estado: String });

const icono = computed(() => {
  if (props.estado === "activo") return checkIcon;
  if (props.estado === "inactivo") return xmarkIcon;
  return clockIcon;
});
</script>

<template>
  <zIcon :icon="icono" />
</template>
```

### Icono Lucide con control de trazo

```vue
<script setup>
import accessibilityIcon from "@zeus-front/zeus-icons/lucide/accessibility";
</script>

<template>
  <zIcon :icon="accessibilityIcon" strokeWidth="2" strokeLine="round" />
</template>
```

### Icono de marca (brands)

```vue
<script setup>
import githubIcon from "@zeus-front/zeus-icons/brands/github";
import linkedinIcon from "@zeus-front/zeus-icons/brands/linkedin";
import twitterIcon from "@zeus-front/zeus-icons/brands/x-twitter";
</script>

<template>
  <a href="https://github.com"><zIcon :icon="githubIcon" class="text-2xl" /></a>
  <a href="https://linkedin.com"
    ><zIcon :icon="linkedinIcon" class="text-2xl text-blue-600"
  /></a>
  <a href="https://twitter.com"
    ><zIcon :icon="twitterIcon" class="text-2xl"
  /></a>
</template>
```

---

## Nombres de iconos comunes

Los nombres de archivo siguen la nomenclatura de Font Awesome 6. Algunos ejemplos frecuentes:

| Icono          | Set recomendado | Nombre de archivo  |
| -------------- | --------------- | ------------------ |
| Usuario        | `regular`       | `user`             |
| Búsqueda       | `solid`         | `magnifying-glass` |
| Editar         | `regular`       | `pen-to-square`    |
| Eliminar       | `solid`         | `trash`            |
| Añadir         | `solid`         | `plus`             |
| Cerrar         | `solid`         | `xmark`            |
| Check          | `solid`         | `check`            |
| Flecha derecha | `solid`         | `chevron-right`    |
| Casa           | `solid`         | `house`            |
| Configuración  | `solid`         | `gear`             |
| Notificación   | `regular`       | `bell`             |
| Calendario     | `regular`       | `calendar`         |
| Descarga       | `solid`         | `download`         |
| GitHub         | `brands`        | `github`           |
| Google         | `brands`        | `google`           |

---

## Cuándo usar cada set

| Set       | Cuándo usarlo                                                                                                                                                           |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `solid`   | Acciones principales, iconos de estado, botones primarios                                                                                                               |
| `regular` | Iconos de contenido, navegación, uso general                                                                                                                            |
| `light`   | Decorativos, fondos, contextos con mucho espacio                                                                                                                        |
| `thin`    | Diseños minimalistas, iconos secundarios                                                                                                                                |
| `brands`  | Logos de servicios y plataformas externas                                                                                                                               |
| `lucide`  | Estilo moderno con trazo uniforme — alternativa cuando el icono buscado no está en Font Awesome o cuando se prefiere la estética de [Lucide](https://lucide.dev/icons/) |
