---
name: zeus-ui-tailwind
description: Experto en Tailwind CSS siguiendo la configuración de Zeus UI. Úsalo cuando necesites escribir o revisar estilos: colores siempre con variables Zeus (nunca hardcodeados), tamaños en REM, clases utilitarias Zeus (.module, .box, .piece) y sin duplicar estilos que ya existen.
---

# Zeus UI — Tailwind Expert

Experto en Tailwind CSS v4 aplicado a Zeus UI. Todos los estilos deben ser consistentes con el sistema de diseño Zeus.

---

## Regla fundamental: colores siempre con variables Zeus

Paleta definida en `src/assets/css/theme.css` con `@theme`. **Nunca usar** colores Tailwind estándar (`red-500`, `slate-800`…) ni CSS inline (`#ff0000`, `rgb(…)`).

### Variables de color disponibles

| Clase Tailwind | Uso |
|---|---|
| `text-primary` / `bg-primary` | Acción principal, links activos |
| `text-secondary` / `bg-secondary` | Acción secundaria |
| `text-danger` / `bg-danger` | Error, destructivo |
| `text-warning` / `bg-warning` | Advertencia |
| `text-success` / `bg-success` | Éxito, confirmación |
| `text-info` / `bg-info` | Información neutral |
| `bg-body` / `bg-module` / `bg-box` / `bg-piece` / `bg-input` | Escala de profundidad de fondos |
| `text-font` / `text-font-light` / `text-font-dark` / `text-font-lighten` | Escala tipográfica |
| `text-aux` / `text-llyc` / `bg-llyc` | Colores auxiliares de marca |
| `border-separator-light` / `border-separator-dark` | Bordes sutiles / sobre fondo oscuro |
| `text-zeus1`…`text-zeus8` | Paleta de acento Zeus |

```vue
<!-- Incorrecto -->
<div class="bg-slate-800 text-white border border-gray-600">
<span class="text-red-500">Error</span>
<button style="background-color: #0dcffe">Aceptar</button>

<!-- Correcto -->
<div class="bg-box text-font border border-separator-light">
<span class="text-danger">Error</span>
<button class="bg-primary text-font-lighten">Aceptar</button>
```

---

## Tamaños en REM (nunca px hardcodeados)

Usar siempre las clases utilitarias de Tailwind. Zeus define `text-2xs` (0.625rem) para tamaños muy pequeños.

```vue
<!-- Incorrecto -->
<div style="padding: 16px; font-size: 14px">
<div class="p-[16px] text-[14px]">

<!-- Correcto -->
<div class="p-4 text-sm">
<span class="text-2xs">...</span>
```

---

## Clases utilitarias Zeus (`src/assets/css/base.css`)

Reutilizar siempre en lugar de recrear los estilos manualmente.

| Clase | Descripción |
|---|---|
| `.module` | Contenedor principal (bg-module, py-4 px-5, rounded-4xl) |
| `.module_title` | Título de módulo (text-2xl font-bold) |
| `.module_sub_title` | Subtítulo de módulo (text-xl font-bold) |
| `.box` | Caja de contenido (bg-box, py-4 px-5, rounded-3xl) |
| `.box_title` | Título de caja (text-lg font-bold) |
| `.piece` | Elemento interactivo (bg-piece, py-4 px-5, rounded-xl, shadow-md) |
| `.piece-sm` | Elemento compacto (bg-piece, p-2, rounded-sm) |

```vue
<!-- Incorrecto -->
<div class="bg-box py-4 px-5 rounded-3xl">
  <h3 class="text-lg font-bold">Título</h3>
</div>

<!-- Correcto -->
<div class="box">
  <h3 class="box_title">Título</h3>
</div>
```

---

## CSS inline: nunca

No usar `style=""` para valores expresables con clases Tailwind. Única excepción: variables CSS dinámicas.

```vue
<!-- Incorrecto -->
<div style="display: flex; gap: 8px; align-items: center">

<!-- Correcto -->
<div class="flex gap-2 items-center">

<!-- Aceptable — valor dinámico -->
<div :style="{ '--progress-width': `${value}%` }">
```

---

## Jerarquía de profundidad visual

Respetar la escala de fondos; no saltarse niveles.

```
body (--color-body, más oscuro)
  └── .module → .box → .piece → bg-input (campos de formulario)
```

---

## Responsive

Mobile-first con breakpoints Tailwind (`sm:`, `md:`, `lg:`, `xl:`):

```vue
<div class="flex flex-col gap-2 md:flex-row md:gap-4">
```
