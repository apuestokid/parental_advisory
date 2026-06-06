---
name: zeus-ui-devtools
description: Agente especializado en zDebug, zDesign y zApiDocs de Zeus UI. Úsalo cuando necesites herramientas de desarrollo como paneles de depuración de variables, overlay de diseño para comparar maquetas, o documentación de endpoints dummy en Vue con Zeus UI.
---

# Zeus UI — Herramientas de Desarrollo

Experto en los componentes de desarrollo de **Zeus UI para Vue 3**.

> Exclusivamente para desarrollo. Nunca en producción.

---

## zDebug

Panel visual anclado en pantalla para inspeccionar variables reactivas.

**Props:**
| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `position` | `String` | `'BR'` | `'BR'`, `'BL'`, `'TR'`, `'TL'` |
| `visible` | `Boolean` | `true` | Mostrar u ocultar el panel |
| `draggable` | `Boolean` | `false` | Arrastrabe. Barra con grip (⠿) y botón copiar (⎘). Persiste posición en `localStorage` clave `z-debug-draggable-{position}` |
| `handler` | `String` | `null` | ID de elemento externo como drag handle (solo con `draggable: true`; si no se indica, se genera barra interna) |

**Slot:** `default` — contenido a mostrar.

**Configuración global recomendada** (oculta en producción automáticamente):
```js
// main.js
app.use(zeusUI, { debug: { visible: import.meta.env.DEV } })
```

```vue
<zDebug>{{ myVar }}</zDebug>
<zDebug position="TL">{{ formData }}</zDebug>
<zDebug :visible="isDev">{{ apiResponse }}</zDebug>
<zDebug draggable>{{ myVar }}</zDebug>
<zDebug draggable position="TL">{{ formData }}</zDebug>

<!-- Handle externo (no renderiza barra interna) -->
<button id="my-handle">Drag me</button>
<zDebug draggable handler="my-handle">{{ myVar }}</zDebug>
```

---

## zDesign

Superpone una imagen de diseño (Figma, Sketch…) sobre la maquetación con opacidad.

**Props:**
| Prop | Tipo | Descripción |
|---|---|---|
| `:file` | `Any` | Imagen importada como módulo |
| `:showDesign` | `Boolean` | `true` para mostrar. Usar `import.meta.env.DEV` |

```vue
<template>
  <div class="relative">
    <zDesign :file="designFile" :show-design="showDesign" />
    <!-- maquetación debajo -->
  </div>
</template>
<script setup>
import designFile from '@/assets/designs/home.png'
const showDesign = import.meta.env.DEV
</script>
```

> Colocar `<zDesign>` como primer hijo del contenedor a comparar.

---

## zApiDocs

Documentación interactiva de endpoints dummy del proyecto front.

**Props:**
| Prop | Tipo | Descripción |
|---|---|---|
| `:modules` | `Object` | Módulos de `import.meta.glob` con `eager: true` |
| `:url` | `String` | URL base de la API del servidor |
| `:path` | `String` | Path del proyecto donde están los endpoints |

```vue
<template>
  <zApiDocs :modules="modules" :url="url" :path="path" />
</template>
<script setup>
const modules = import.meta.glob('/src/dummy/endpoints/**/*.js', { eager: true })
const path = '/src/dummy/endpoints/'
const url = import.meta.env.VITE_APP_API_URL
</script>
```

**Estructura esperada:** `src/dummy/endpoints/{módulo}/{acción}.js`

---

## Resumen

| Componente | Cuándo usar |
|---|---|
| `zDebug` | Inspeccionar variables reactivas durante desarrollo |
| `zDesign` | Comparar maquetación con diseño Figma/Sketch |
| `zApiDocs` | Documentar y consultar endpoints dummy del front |
