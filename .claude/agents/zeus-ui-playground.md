---
name: zeus-ui-playground
description: Experto en el componente PropPlayground de Zeus UI (sandbox interactivo de la documentación). Úsalo para crear o editar el playground de un componente en su archivo *Examples.vue, mapear props a controles, o extender el propio PropPlayground con nuevos tipos de control.
---

# Zeus UI — PropPlayground

Experto en **`PropPlayground`** (`src/documentation/components/PropPlayground.vue`): sandbox interactivo que genera un formulario de controles (izquierda), preview en vivo (derecha) y código Vue copiable (abajo). Se usa en `src/documentation/examples/*Examples.vue`, tras el bloque "API Reference" y antes del primer `<CodeExample>`.

El playground es **declarativo**: defines `playgroundControls` (un control por prop) y el componente gestiona el form, la reactividad y la generación de código (omite props en su default, kebab-case, formatea arrays/objetos multilínea).

---

## Uso básico

```vue
<template>
  <PropPlayground is="zMiComponente" name="zMiComponente" :controls="playgroundControls" />
</template>
<script setup>
import PropPlayground from '../components/PropPlayground.vue'
const playgroundControls = [
  { prop: 'variant', type: 'select', default: 'primary', options: ['primary', 'secondary'] },
  { prop: 'disabled', type: 'boolean', default: false },
]
</script>
```

---

## Props del `PropPlayground`

| Prop | Tipo | Descripción |
|---|---|---|
| `is` | String \| Object | Componente a renderizar (nombre global o objeto componente). |
| `name` | String | Nombre del tag en el código generado (default: `is` si es string). |
| `title` | String | Título del panel (default `'Playground'`). |
| `controls` | Array | Definiciones de controles. **Requerido.** |
| `previewClass` | String\|Array\|Object | Clase aplicada solo a la vista previa. Nunca se emite en el código. |
| `remountOnChange` | Boolean | Re-monta el preview en cada cambio de prop. |
| `remountKeys` | Array | Re-monta solo cuando cambian esos props; el resto sigue reactivo. |

El playground es colapsable y trae un botón **Reset** que restaura todos los controles a su `default`.

---

## Definición de un control

```js
{ prop, label?, type, default, required?, showIf?, /* específicos del type */ }
```

| Campo | Descripción |
|---|---|
| `prop` | Nombre del prop del componente. Obligatorio. |
| `type` | Tipo de control (ver tabla). Obligatorio. |
| `label` | Etiqueta visible (default: `prop`). |
| `default` | Valor inicial. Si coincide, no se emite en el código (salvo `required`). |
| `required` | `true` → se emite siempre, aunque coincida con el default. |
| `showIf` | String (otro control truthy) o `(state) => boolean`. Oculta el control y lo excluye del preview y del código. |

---

## Tipos de control

| `type` | Render | Código generado | Notas |
|---|---|---|---|
| `text` | input texto | `prop="valor"` | Vacío → no se emite. Con `slot: true` va al slot por defecto. |
| `number` | input numérico | `:prop="10"` | Vacío → no se fija (el componente usa su default). |
| `boolean` | `zSwitch` | `prop` (bare) | Con `required`: `:prop="true\|false"` explícito. |
| `select` | `zRadio` inline | `prop="md"` | `options: ['sm','md','lg']` o `[{label,value}]`. Mejor para enums cortos. |
| `color` | `<select>` paleta Zeus | `prop="var(--color-primary)"` | `(auto)` = `''` deja el color sin fijar. Paleta custom con `colorOptions`. |
| `segments` | lista editable `{ value, color }` | `:prop="[{ value: 30, color: '…' }]"` | Para props array/stacked (`value` de `zProgress`). 1 segmento sin color → número simple. |
| `list` | lista editable de strings | `:prop="['a', 'b']"` | Para `options` de selects/grupos. |
| `model` | muestra el v-model (se cambia interactuando con el preview) | `v-model="<modelName>"` | Bidireccional real. `modelName` (default `'value'`). |
| `class` | `zSwitch` | `class="rounded-full"` | Aplica `value` (clase CSS) al preview y al código. |
| `slot` | `zSwitch` | `<template #name>…</template>` | Activa un slot con nombre. Requiere `name` y `code`. |

### Atributos específicos por tipo

| Atributo | Tipos | Descripción |
|---|---|---|
| `options` | `select` | Array de strings u `{label, value}`. |
| `colorOptions` | `color`, `segments` | Paleta personalizada `[{label, value}]`. Default: `zeus1`–`zeus8`, `primary`, `success`, `warning`, `danger`, `(auto)`. |
| `slot: true` | `text` | El valor va al slot por defecto en vez de como atributo. |
| `objectKey` | cualquiera | Agrupa varios controles en un prop objeto: `:options="{ a: …, b: … }"`. Campos vacíos se omiten. |
| `modelName` | `model` | Nombre de la variable en `v-model="…"`. |
| `arrayWhen` | `model` | Cuando ese control booleano es `true`, el v-model pasa a array (multi-selección); se resetea al alternar. |
| `value` | `class` | La clase CSS a aplicar cuando el toggle está activo. |
| `name` + `code` | `slot` | Nombre del slot y el bloque de template (string) a inyectar en el código. |
| `virtual: true` | cualquiera | Solo dirige la lógica del playground; nunca se pasa al componente ni se emite en el código. |

---

## Comportamiento del código generado

- Omite props que coinciden con su `default` (salvo `required`).
- Atributos en **kebab-case** (`stripedColor` → `striped-color`).
- Strings → `prop="x"`; números/objetos/arrays → `:prop="…"`; booleanos true → `prop` (bare).
- Arrays de objetos y bloques de slot: **multilínea** indentados; el resto en una línea.
- `previewClass` nunca aparece; controles `class` sí (van a `class="…"`).
- Slot por defecto (controles con `slot: true`): contenido entre etiquetas.

---

## Reactividad y remount

La vista previa usa `v-bind` reactivo. Algunos componentes **leen props una sola vez** (en `onMounted`: tippy, countup) y no reaccionan después:

- `remountOnChange` → re-monta en cada cambio. Útil en `zTooltip` (tippy) y `zCountUp`.
- `remountKeys` → re-monta solo cuando cambian props concretas. Útil en `zArrow`: `:remount-keys="['icon']"` re-monta al cambiar `icon` pero mantiene la rotación animada de `up`.
- Por defecto (ninguna): el preview solo se re-monta cuando cambia el conjunto de slots activos (controles `slot`).

---

## Patrones prop → control

| Caso | Control |
|---|---|
| Enum cerrado (validator con lista) | `select` con esas `options` |
| Color CSS (`var(--color-*)`) | `color` |
| Flag booleano | `boolean`; añade `required` si el default importa en el código |
| Número | `number` (vacío = usar default del componente) |
| Contenido textual del slot | `text` con `slot: true` |
| Grupo/selector con `options` + `v-model` | `list` (options) + `model` (modelValue) |
| Multi-selección | control `boolean` `virtual` + `model` con `arrayWhen` |
| Prop objeto de config (tippy, countup…) | varios controles con `objectKey` + `remount-on-change` |
| Array de segmentos (barras) | `segments` |
| Opción puramente CSS | `class` con su `value` |
| Prop dependiente de otra | `showIf` |
| Prop no reactiva | `remountKeys` con esa prop |

---

## Ejemplos reales

**zButton** — slot + selects + booleanos:
```js
const playgroundControls = [
  { prop: 'label', label: 'label (slot)', type: 'text', default: 'Button', slot: true },
  { prop: 'variant', type: 'select', default: 'primary', options: ['aux', 'primary', 'secondary', 'success', 'danger', 'warning'] },
  { prop: 'size', type: 'select', default: 'md', options: ['sm', 'md', 'lg'] },
  { prop: 'outline', type: 'boolean', default: false },
  { prop: 'disabled', type: 'boolean', default: false },
]
```

**zProgress** — segmentos + dependientes + slot tooltip:
```js
const playgroundControls = [
  { prop: 'value', label: 'value (segmentos)', type: 'segments', required: true,
    default: [{ value: 30, color: 'var(--color-zeus1)' }, { value: 50, color: 'var(--color-zeus3)' }] },
  { prop: 'max', type: 'number', default: 100 },
  { prop: 'stacked', type: 'boolean', default: false },
  { prop: 'striped', type: 'boolean', default: false },
  { prop: 'stripedColor', type: 'select', default: 'light', options: ['light', 'dark'], showIf: 'striped' },
  { prop: 'stripedAnimated', type: 'boolean', default: false, showIf: 'striped' },
  { prop: 'stripedSpeed', type: 'number', default: '', showIf: 'stripedAnimated' },
  { prop: 'tooltip', type: 'slot', name: 'tooltip', default: false,
    code: '<template #tooltip="{ value }">\n  <div class="px-2 py-1 text-xs">{{ value.value }}%</div>\n</template>' },
]
```
```vue
<PropPlayground is="zProgress" :controls="playgroundControls" preview-class="h-4 w-full">
  <template #tooltip="{ value }"><div class="px-2 py-1 text-xs">{{ value.value }}%</div></template>
</PropPlayground>
```

**zButtonGroup** — options + v-model + multi-selección:
```js
const playgroundControls = [
  { prop: 'options', type: 'list', required: true, default: ['Option 1', 'Option 2', 'Option 3'] },
  { prop: 'multiple', label: 'multiple selection', type: 'boolean', default: false, virtual: true },
  { prop: 'modelValue', label: 'v-model', type: 'model', modelName: 'selected', default: 'Option 1', arrayWhen: 'multiple' },
  { prop: 'variant', type: 'select', default: 'primary', options: ['aux', 'primary', 'secondary', 'success', 'danger', 'warning'] },
  { prop: 'size', type: 'select', default: 'md', options: ['sm', 'md', 'lg'] },
]
```

**zTooltip** — `objectKey` + slot textual + remount:
```js
const playgroundControls = [
  { prop: 'target', label: 'contenido (slot)', type: 'text', slot: true, default: 'Pasa el ratón por aquí' },
  { prop: 'content', type: 'text', objectKey: 'options', default: '¡Hola! Soy un tooltip' },
  { prop: 'placement', type: 'select', objectKey: 'options', default: 'top', options: ['top', 'bottom', 'left', 'right'] },
]
// <PropPlayground is="zTooltip" :controls="playgroundControls" remount-on-change />
```

**zArrow** — remount selectivo:
```js
const playgroundControls = [
  { prop: 'up', type: 'boolean', default: true, required: true },
  { prop: 'icon', type: 'select', default: 'arrow', options: ['arrow', 'caret', 'angle'] },
  { prop: 'transition', type: 'number', default: '' },
]
// <PropPlayground is="zArrow" :controls="playgroundControls" :remount-keys="['icon']" />
```

**zFlag** — opción CSS con `class`:
```js
const playgroundControls = [
  { prop: 'country', type: 'select', required: true, default: 'es', options: ['es', 'fr', 'de', 'it', 'us', 'jp', 'gb', 'pt'] },
  { prop: 'size', type: 'select', default: 'md', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
  { prop: 'ratio', type: 'select', default: '4x3', options: ['4x3', '1x1'] },
  { prop: 'emoji', type: 'boolean', default: false },
  { prop: 'rounded', type: 'class', value: 'rounded-full overflow-hidden', default: false },
]
```

---

## Extender PropPlayground con un nuevo tipo de control

Toca estos puntos en `PropPlayground.vue`:

1. **`defaultFor(c)`** — valor inicial del tipo (clona arrays/objetos con `cloneVal`).
2. **Template del form** — rama `v-else-if="control.type === '…'"`. Si es toggle, añade el tipo a la condición `field--row` y reutiliza `zSwitch`.
3. **`boundProps`** — cómo se pasa al componente del preview (o `continue` si no es prop: `class`/`virtual`/`slot`).
4. **`generatedCode`** — cómo se serializa (atributo, `v-model`, objeto, `class`…).
5. **Documentación** — JSDoc del prop `controls` y este agente.

Helpers internos: `coerce(c)` (number→Number, vacío→undefined), `kebab(str)`, `isDefault(c)`, `isVisible(c)`, `segmentsValue()`, `formatModel()`.

---

## Checklist al tocar props de un componente

- [ ] ¿Nueva prop? → nuevo control con `type` adecuado y `default` sensato.
- [ ] ¿Prop renombrada/modificada? → actualizar `prop`, `options`, `default`.
- [ ] ¿Prop eliminada? → quitar su control.
- [ ] ¿Prop solo tiene sentido junto a otra? → `showIf`.
- [ ] ¿Default del playground difiere del default real? → `required`.
- [ ] ¿Componente no reacciona al cambio de esa prop? → `remountKeys`.
- [ ] Ejecutar `npx eslint --fix` sobre el `*Examples.vue` (comillas simples, sin `;`).
