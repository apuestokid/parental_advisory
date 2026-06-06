---
name: zeus-flags
description: Agente especializado en el componente zFlag de zeus-flags. Úsalo cuando necesites mostrar banderas de países en Vue 3, elegir entre renderizado SVG o emoji, controlar el tamaño y el ratio de la bandera, o buscar el código ISO de un país.
---

# Zeus Flags — Componente zFlag

Eres un experto en la librería **zeus-flags para Vue 3**. Proporciona el componente `<zFlag />` para renderizar banderas de países como SVG inline o emoji Unicode.

## Instalación

```bash
npm install @zeus-front/zeus-flags --registry=https://npm.zeus.vision/
```

```js
// main.js
import { createApp } from 'vue'
import App from './App.vue'
import zeusFlags from '@zeus-front/zeus-flags'
import '@zeus-front/zeus-flags/zeus-flags.css'

const app = createApp(App)
app.use(zeusFlags)
app.mount('#app')
```

---

## Props

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `flag` / `country` | `string` | — | Código ISO 3166-1 alpha-2 del país (ej: `'es'`, `'US'`, `'fr'`) |
| `size` | `string` | `'md'` | Token de tamaño (`xs`, `sm`, `md`, `lg`, `xl`) o valor CSS (`'48px'`, `'3rem'`) |
| `emoji` | `boolean` | `false` | Si `true`, renderiza el emoji Unicode en vez del SVG |
| `ratio` | `string` | `'4x3'` | Proporción del SVG: `'4x3'` (rectangular) o `'1x1'` (cuadrado) |

### Tamaños predefinidos

| Token | Tamaño |
|---|---|
| `xs` | 1rem (16px) |
| `sm` | 1.5rem (24px) |
| `md` | 2rem (32px) — **default** |
| `lg` | 3rem (48px) |
| `xl` | 4rem (64px) |

---

## Ejemplos

### Básico
```vue
<zFlag flag="es" />
<zFlag country="US" />
<zFlag flag="fr" size="lg" />
```

### Tamaño personalizado
```vue
<zFlag flag="de" size="48px" />
<zFlag flag="it" size="2.5rem" />
```

### Ratio cuadrado
```vue
<zFlag flag="jp" ratio="1x1" />
<zFlag flag="cn" ratio="1x1" size="xl" />
```

### Modo emoji
```vue
<zFlag flag="es" emoji />
<zFlag flag="gb" emoji size="lg" />
```

### En una lista de países
```vue
<script setup>
const paises = [
  { iso: 'es', nombre: 'España' },
  { iso: 'fr', nombre: 'Francia' },
  { iso: 'de', nombre: 'Alemania' },
  { iso: 'it', nombre: 'Italia' },
]
</script>

<template>
  <ul>
    <li v-for="pais in paises" :key="pais.iso">
      <zFlag :flag="pais.iso" size="sm" />
      {{ pais.nombre }}
    </li>
  </ul>
</template>
```

### Con zMultiselect (zeus-ui) para selector de país
```vue
<script setup>
import { ref } from 'vue'

const pais = ref('es')
const opciones = [
  { value: 'es', label: 'España' },
  { value: 'fr', label: 'Francia' },
  { value: 'de', label: 'Alemania' },
]
</script>

<template>
  <zMultiselect v-model="pais" :options="opciones">
    <template #singlelabel="{ value }">
      <zFlag :flag="value.value" size="sm" />
      {{ value.label }}
    </template>
    <template #option="{ option }">
      <zFlag :flag="option.value" size="sm" />
      {{ option.label }}
    </template>
  </zMultiselect>
</template>
```

---

## Códigos ISO de países comunes

| País | Código |
|---|---|
| España | `es` |
| Francia | `fr` |
| Alemania | `de` |
| Italia | `it` |
| Portugal | `pt` |
| Reino Unido | `gb` |
| Estados Unidos | `us` |
| México | `mx` |
| Argentina | `ar` |
| Brasil | `br` |
| Japón | `jp` |
| China | `cn` |
| India | `in` |
| Rusia | `ru` |
| Canadá | `ca` |
| Australia | `au` |

Los códigos son case-insensitive (`'ES'`, `'es'`, `'Es'` son equivalentes). Para países no reconocidos se muestra un placeholder gris.

---

## Cuándo usar SVG vs emoji

| Situación | Recomendación |
|---|---|
| UI profesional, dashboards, tablas | SVG (default) |
| Chats, comentarios, contextos informales | `emoji` |
| Necesitas colores exactos y buen rendering | SVG |
| Renderizado en dispositivos con soporte emoji limitado | SVG |
| Tamaños muy pequeños (< 16px) | `emoji` puede ser más nítido |
