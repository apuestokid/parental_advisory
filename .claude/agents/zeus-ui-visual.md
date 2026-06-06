---
name: zeus-ui-visual
description: Agente especializado en zSvg, zCarousel, zCountUp, zRollingChars, zAvatar, zTooltip, zDivider, zHexagon y zMarquee de Zeus UI. Úsalo cuando necesites renderizar SVGs, carruseles de slides, animaciones numéricas de conteo, animaciones de texto, avatares, tooltips, separadores/divisores, formas hexagonales o cintas de desplazamiento continuo (marquee) en Vue con Zeus UI.
---

# Zeus UI — Elementos Visuales

## zSvg

Renderiza SVGs importados. Color con `text-*` (usa `currentColor`). Tamaño con `text-xs`/`text-2xl`, `w-*`/`h-*`, o las props `height`/`width`. Sin ellas usa `height: 1em`.

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `file` | `Object\|Function\|String` | — | SVG importado (requerido) |
| `keepColors` | `Boolean` | `false` | Conserva colores originales del SVG |
| `height` | `String\|Number` | `null` | Altura explícita (`'24px'`, `'2rem'`, `24`) |
| `width` | `String\|Number` | `null` | Ancho explícito (mismo comportamiento) |

```vue
<template>
  <zSvg :file="logoLlyc" class="text-5xl text-primary" />
  <zSvg :file="iconClose" :height="24" :width="24" />
  <zSvg :file="logoLlyc" height="2rem" />
</template>
<script setup>
import logoLlyc from '@/assets/svg/llyc_logo.svg'
import iconClose from '@/assets/svg/close.svg'
</script>
```

---

## zCarousel

Carrusel basado en [Swiper](https://swiperjs.com/element). Acepta cualquier opción de Swiper como prop o atributo kebab-case.

| Prop | Tipo | Descripción |
|---|---|---|
| `slides` | `Array` | Datos de cada slide |
| `swiperOptions` | `Object` | Opciones Swiper (loop, pagination, autoplay…) |

**Slot:** `default="{ slide }"` — template por slide.

```vue
<template>
  <zCarousel :slides="slides" :swiperOptions="{ spaceBetween: 16, loop: true, pagination: { clickable: true }, autoplay: { delay: 5000 } }">
    <template #default="{ slide }">
      <div class="rounded-lg p-4"><h3>{{ slide.title }}</h3></div>
    </template>
  </zCarousel>
</template>
```

---

## zCountUp

Animación numérica basada en [countup.js](https://inorganik.github.io/countUp.js/). Default: `separator: '.'`, `decimal: ','`. Reactivo: cambiar `number` → `update(v)`; cambiar `options` → recrea instancia.

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `number` | `Number\|String` | — (required) | Número destino |
| `options` | `Object` | `{}` | `separator`, `decimal`, `duration`, `prefix`, `suffix`, `decimalPlaces`, `startVal`… |

**Eventos:** `@start`, `@complete`

```vue
<zCountUp :number="1234" />
<zCountUp :number="9.99" :options="{ decimalPlaces: 2 }" />
<zCountUp :number="500" :options="{ prefix: '$', suffix: ' USD' }" />
<zCountUp :number="reactiveNumber" @complete="onComplete" />
```

---

## zRollingChars

Animación de texto tipo ticker/tragamonedas por caracteres o palabras.

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `text` | `String` | — | Texto a animar |
| `type` | `String` | `'char'` | `'char'` o `'word'` |
| `interval` | `Number` | `3000` | Intervalo en ms. `0` = sin loop |
| `duration` | `Number` | `0.8` | Duración en segundos |
| `hover` | `Boolean` | `false` | Activar al hover |

```vue
<zRollingChars text="ZEUS UI" :interval="3000" />
<zRollingChars text="Diseño moderno" type="word" :duration="1.2" />
<zRollingChars text="Hover me" :interval="0" hover />
```

---

## zAvatar

Avatar con imagen, iniciales automáticas o icono. Hace fallback a iniciales si la imagen no carga.

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `src` | `String` | — | URL de la imagen |
| `alt` | `String` | — | Texto alternativo |
| `size` | `String\|Number` | `'md'` | `'xs'`, `'sm'`, `'md'`, `'lg'`, `'xl'` o px |
| `shape` | `String` | `'circle'` | `'circle'` o `'square'` |
| `name` | `String` | — | Genera iniciales automáticas |
| `icon` | `String` | — | HTML del icono SVG |

```vue
<zAvatar src="/users/ana.jpg" alt="Ana García" size="lg" />
<zAvatar name="Ana García" size="md" />
<zAvatar :size="48" name="Luis M" shape="square" />
<!-- Grupo superpuesto -->
<div class="flex -space-x-2">
  <zAvatar v-for="user in team" :key="user.id" :src="user.avatar" :name="user.name" size="sm" class="ring-2 ring-white" />
</div>
```

---

## zTooltip

Tooltip basado en [Tippy.js](https://atomiks.github.io/tippyjs/). Envuelve cualquier elemento.

| Prop | Tipo | Descripción |
|---|---|---|
| `options` | `Object` | Opciones de Tippy.js |

**Slot:** `default` — elemento activador.

**Opciones más usadas:** `content`, `placement` (`'top'`/`'bottom'`/`'left'`/`'right'`), `trigger` (`'mouseenter'`/`'click'`/`'focus'`), `allowHTML`, `delay` (`[show, hide]` ms), `arrow`.

```vue
<zTooltip :options="{ content: 'Texto del tooltip' }">
  <span class="cursor-help">Información</span>
</zTooltip>
<zTooltip :options="{ content: '<strong>Negrita</strong>', allowHTML: true, placement: 'bottom' }">
  <zButton>Hover</zButton>
</zTooltip>
<zTooltip :options="{ content: 'Click tooltip', trigger: 'click' }">
  <zButton variant="secondary">Click</zButton>
</zTooltip>
```

---

## zHexagon

Forma hexagonal SVG (paths con curvas Bézier). Contenido del slot se centra automáticamente.

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `color` | `String` | `var(--color-primary)` | Relleno (sólido) o borde (outline) |
| `outline` | `Boolean` | `false` | Borde coloreado, interior oscuro |
| `size` | `Number` | `5` | Dimensión mayor en rem |
| `bg` | `String` | `var(--color-module)` | Color interior en modo outline |
| `radius` | `Number` | `0` | Radio de esquinas (0=sharp, ~10=redondeado, máx ~25) |
| `flat` | `Boolean` | `false` | Orientación flat-top |

**Slot:** `default` — contenido centrado. **Resolución:** `props.x ?? config?.hexagon?.x ?? hardcoded`.

**Config global:**
```js
app.use(zeusUI, { hexagon: { color: 'var(--color-success)', radius: 8, size: 4, flat: false } })
```

```vue
<zHexagon color="var(--color-success)" />
<zHexagon outline color="var(--color-primary)" />
<zHexagon :radius="8" flat outline color="var(--color-warning)" />
<!-- Con contenido -->
<zHexagon color="var(--color-primary)"><span class="text-white font-bold text-sm">OK</span></zHexagon>
<!-- Outline sobre fondo distinto a module -->
<div style="background: var(--color-box)">
  <zHexagon outline color="var(--color-primary)" bg="var(--color-box)" />
</div>
```

---

## zDivider

Separador horizontal/vertical con texto, iconos y efecto bisel.

> **Sets de iconos (`@zeus-front/zeus-icons`):** `brands/`, `light/`, `regular/`, `solid/`, `thin/` (Font Awesome 6) y `lucide/` (kebab-case igual que en la galería de Lucide). Ej: `import star from '@zeus-front/zeus-icons/solid/star'` / `import settings from '@zeus-front/zeus-icons/lucide/settings'`.

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `text` | `String` | `''` | Texto label |
| `icon` | `Object\|Function\|String` | `null` | Icono de zeus-icons |
| `vertical` | `Boolean` | `false` | Orientación vertical |
| `color` | `String` | `var(--color-font-light)` | Color de la línea |
| `color2` | `String` | `''` | Segundo color para efecto bisel |
| `thickness` | `String\|Number` | `1` | Grosor en px |
| `spacing` | `String\|Number` | `16` | Margen en px |
| `align` | `String` | `'center'` | `'left'`, `'center'`, `'right'` |

**Slot:** `default` — contenido personalizado entre las líneas.

```vue
<zDivider />
<zDivider text="OR" />
<zDivider text="Section" align="left" />
<zDivider :icon="star" />
<zDivider color="rgba(0,0,0,0.3)" color2="rgba(255,255,255,0.15)" />
<div class="flex items-center h-16"><span>A</span><zDivider vertical :spacing="12" /><span>B</span></div>
<zDivider color="var(--color-success)"><zBadge value="NEW" variant="success" /></zDivider>
```

---

## zMarquee

Cinta de desplazamiento continuo via `transform` (GPU). Bucle perfecto con contenido duplicado. Se detiene automáticamente si el contenido ya cabe en el contenedor. Respeta `prefers-reduced-motion`.

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `speed` | `Number` | `60` | Velocidad en px/s |
| `direction` | `String` | `'left'` | `'left'`, `'right'`, `'up'`, `'down'` |
| `paused` | `Boolean` | `false` | Pausa; soporta `v-model:paused` |
| `pauseOnHover` | `Boolean` | `false` | Pausa al hover |
| `gap` | `Number\|String` | `0` | Espacio entre repeticiones (px si número) |

**Eventos:** `@play`, `@pause`, `@update:paused`
**Métodos expuestos (ref):** `play()`, `pause()`, `toggle()`

```vue
<template>
  <zMarquee><span>Noticia · </span></zMarquee>
  <zMarquee direction="right" :speed="120" :gap="40"><span>Rápido · </span></zMarquee>
  <zMarquee direction="up" pause-on-hover style="height: 120px">
    <div>Línea 1</div><div>Línea 2</div>
  </zMarquee>
  <zMarquee ref="marqueeRef" v-model:paused="isPaused">
    <span>Controlado · </span>
  </zMarquee>
  <zButton @click="marqueeRef.toggle()">Toggle</zButton>
</template>
<script setup>
import { ref } from 'vue'
const marqueeRef = ref(null)
const isPaused = ref(false)
</script>
```
