---
name: zeus-ui-component-sync
description: Agente de mantenimiento de Zeus UI. Úsalo SIEMPRE después de crear un nuevo componente Vue o modificar uno existente en este proyecto. Se encarga de mantener sincronizados el index.js, los ejemplos de uso, el README, los agentes de Claude, y los archivos de tipado IDE (components.d.ts y web-types.json).
---

# Zeus UI — Component Sync

Agente de mantenimiento de **Zeus UI**. Actúa **siempre** que se cree, modifique o elimine un `.vue` en `src/components/`. Cualquier alta/cambio/baja de **prop** implica también actualizar el playground del archivo de ejemplos (paso 2b).

---

## Checklist

### 1. `src/index.js`

- **Nuevo:** añadir export `defineAsyncComponent` + `app.component('ZMiComponente', zMiComponente)`.
- **Eliminado:** borrar export y `app.component`.

```js
export const zMiComponente = defineAsyncComponent(() => import('@/components/categoria/zMiComponente.vue'))
// en install:
app.component('ZMiComponente', zMiComponente)
```

---

### 2. `src/documentation/examples/MiComponenteExamples.vue`

**Nuevo:** crear siguiendo este patrón:

```vue
<template>
  <div class="module">
    <div class="module_title">zMiComponente Examples</div>
    <!-- API Reference sticky -->
    <div class="mb-4 p-4 box sticky top-0 z-10">
      <div class="flex items-center gap-2 cursor-pointer" @click="isAccordionOpen = !isAccordionOpen">
        <h3 class="text-lg leading-none font-semibold mb-2">API Reference</h3>
        <zArrow :up="isAccordionOpen" icon="angle" class="text-primary" />
      </div>
      <zAccordion :opened="isAccordionOpen">
        <ul class="list-disc list-inside space-y-1">
          <!-- una <li> por prop, evento y slot -->
        </ul>
      </zAccordion>
    </div>
    <!-- PLAYGROUND — ver paso 2b -->
    <PropPlayground is="zMiComponente" name="zMiComponente" :controls="playgroundControls" />
    <CodeExample title="Basic" :code="`...`"><!-- demo --></CodeExample>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CodeExample from '../components/CodeExample.vue'
import PropPlayground from '../components/PropPlayground.vue'

const isAccordionOpen = ref(false)
const playgroundControls = [
  // { prop: 'variant', type: 'select', default: 'primary', options: ['primary', 'secondary'] },
]
</script>
```

> ⚠️ **Comillas en el prop `:code`** — el prop recibe un template literal (backtick) dentro de un atributo delimitado por comillas dobles. **Nunca usar `\"`** → causa `RolldownError: Unterminated template`. Usar siempre `&quot;`:
> - ✅ `:code="\`<zFoo :prop=&quot;value&quot; />\`"`
> - ❌ `:code="\`<zFoo :prop=\"value\" />\`"`

**Modificado:** actualizar `<ul>` del API Reference. **Eliminado:** eliminar el archivo completo.

---

### 2b. `PropPlayground` — sandbox interactivo

Colocar justo después del bloque API Reference. **Un control por cada prop pública** (más uno para el slot por defecto si acepta contenido textual). Al añadir/modificar/eliminar una prop, sincronizar `playgroundControls`.

**Props de `PropPlayground`:**

| Prop | Descripción |
|---|---|
| `is` | Componente registrado globalmente (string) u objeto — qué se renderiza |
| `name` | Nombre del tag en el código generado |
| `controls` | Array de definiciones de controles |
| `previewClass` | Clase solo para la vista previa (sizing), nunca emitida en código |
| `remountOnChange` | Re-montar en cada cambio (para props no reactivas: tippy, countup…) |
| `remountKeys` | Array de props que disparan el remount; el resto sigue reactivo |

**Tipos de control disponibles:**

| `type` | Render | Para qué props | Código generado |
|---|---|---|---|
| `text` | input texto | strings libres | `prop="valor"` |
| `number` | input numérico | números | `:prop="10"` |
| `boolean` | `zSwitch` | flags | `prop` (o `:prop="false"` si `required`) |
| `select` | `zRadio` | enums cortos (`options: ['sm','md','lg']`) | `prop="md"` |
| `color` | `<select>` paleta Zeus | props de color CSS | `prop="var(--color-primary)"` |
| `segments` | lista editable de `{ value, color }` | arrays/stacked (ej. `value` de `zProgress`) | `:prop="[{ value: 30, color: '…' }]"` |
| `list` | lista editable de strings | `options` de selects/grupos | `:prop="['a', 'b']"` |
| `model` | v-model (cambia interactuando con el preview) | componentes con `v-model` | `v-model="<modelName>"` |
| `class` | `zSwitch` | aplicar una clase CSS (`value: 'rounded-full'`) | `class="rounded-full"` |
| `slot` | `zSwitch` | activar un slot con nombre (`name`, `code`) | `<template #name>…</template>` |

**Atributos comunes:**
- `default` — valor inicial; si coincide, el prop no se emite (salvo `required`).
- `required: true` — siempre se emite (cuando el default del playground difiere del real, o props obligatorias).
- `showIf` — string (otro control truthy) o `(state) => boolean`. Oculta el control y lo excluye del preview/código.
- `slot: true` — (en `text`) el valor va al slot por defecto en vez de a un atributo.
- `objectKey: 'options'` — agrupa varios controles en un único prop objeto `:options="{ … }"`.
- `virtual: true` — solo dirige la lógica del playground; nunca se pasa al componente.
- `modelName` — (en `model`) nombre de la variable en `v-model="…"` (default `'value'`).
- `arrayWhen: 'otroControl'` — (en `model`) cuando ese control booleano es true, el v-model pasa a array.
- `colorOptions` — (en `color`/`segments`) paleta personalizada `[{ label, value }]`.

**Guía rápida prop → tipo de control:**
- String con lista cerrada → `select`; string de color → `color`; Boolean → `boolean`; Number → `number`
- Array `options` → `list` + `model`; prop objeto (tippy, countup) → varios controles con `objectKey`
- Slot textual → `text` con `slot: true`; prop no reactiva → `remountKeys`

---

### 3. `src/documentation/documentation.constants.js`

**Nuevo:** añadir en `DOCUMENTATION_COMPONENTS` (orden alfabético):
```js
{ id: 'mi-componente', name: 'zMiComponente', component: defineAsyncComponent(() => import('./examples/MiComponenteExamples.vue')) },
```
**Eliminado:** borrar su entrada.

---

### 3b. `src/documentation/components/ShowcaseGrid.vue`

**Nuevo (si tiene preview visual):** añadir bloque antes del `<template v-else>` (fallback):
```vue
<template v-else-if="item.id === 'mi-componente'">
  <zMiComponente /* props mínimas para demo compacta */ />
</template>
```
- `item.id` debe coincidir con el `id` de `DOCUMENTATION_COMPONENTS`.
- Preview compacta (`min-height: 40px`), sin interactividad. Puede usar `isOK` (alterna cada 5s) para animar.
- Si necesita datos auxiliares, añadirlos en el `<script setup>` del ShowcaseGrid.

**Eliminado:** borrar el bloque `<template v-else-if>` y variables auxiliares.

---

### 4. `README.md`

**Nuevo:**
1. Añadir el componente al agente correspondiente en la tabla "Agentes disponibles".
2. Añadir línea en la lista "Componentes Disponibles": `- [**zMiComponente**](#zmicimponente): Descripción corta.`
3. Añadir sección de documentación (orden alfabético):
```markdown
<div id="zmicomponente"></div>

# zMiComponente
Descripción.
```vue
<!-- ejemplo básico -->
```
**Props principales:** - **`prop`**: descripción.
**Eventos:** - **`@evento`**: descripción.
```

**Modificado:** actualizar la sección correspondiente.

---

### 5. Agentes de Claude (`.claude/agents/`)

| Agente | Componentes |
|---|---|
| `zeus-ui-botones` | `zButton`, `zButtonGroup`, `zButtonGroupSlider`, `zCheckbox`, `zRadio`, `zSwitch` |
| `zeus-ui-selectores` | `zMultiselect`, `zDatepicker` |
| `zeus-ui-feedback` | `zLoading`, `zAlert`, `zToast`, `zBadge` |
| `zeus-ui-overlay` | `zModal`, `zAccordion`, `zContextMenu`, `zArrow` |
| `zeus-ui-datos` | `zTable`, `zProgress`, `zVirtualScroll` |
| `zeus-ui-visual` | `zSvg`, `zCarousel`, `zRollingChars`, `zAvatar`, `zTooltip` |
| `zeus-ui-devtools` | `zDebug`, `zDesign`, `zApiDocs` |

**Nuevo:** añadir sección en el agente correspondiente (props en tabla, eventos, slots, ejemplos) + entrada en `zeus-ui.md` + actualizar `description` del frontmatter del agente. Si no encaja, crear agente nuevo con el mismo formato.
**Modificado:** actualizar la sección correspondiente.

---

### 6. `src/components.d.ts`

**Nuevo:** añadir interfaz en `declare module 'vue'` → `GlobalComponents`:
```ts
/** Descripción del componente. */
ZMiComponente: DefineComponent<{
  /** Descripción de la prop. */
  miProp?: string
  otraProp: SomeType[]
}>
```
**Modificado:** actualizar la interfaz. **Eliminado:** borrar la entrada.

---

### 7. `web-types.json`

**Nuevo:** añadir en `contributions.html.vue-components`:
```json
{
  "name": "ZMiComponente",
  "description": "Descripción.",
  "props": [{ "name": "miProp", "type": "string", "default": "''", "description": "Descripción." }],
  "events": [{ "name": "miEvento", "description": "Descripción." }]
}
```
**Modificado:** actualizar entrada. **Eliminado:** borrar entrada.

---

### 8. `CHANGELOG.md`

Añadir entrada breve al inicio con fecha actual y resumen del cambio (componente añadido/modificado/eliminado).

---

### 9. Commit

Crear commit con todos los archivos modificados. Mensaje corto y descriptivo:
`feat: add zMiComponente` / `fix: update zButton props` / `chore: remove zOldComponent`

---

## Notas

- Usar siempre `defineAsyncComponent` en `index.js`.
- Orden alfabético en `documentation.constants.js` y lista de componentes del README.
- `id` del `<div>` en README: nombre en minúsculas sin la `z` inicial (`zButtonGroup` → `id="zbuttongroup"`).
- `components.d.ts`: usar `DefineComponent<Props>` con JSDoc; props opcionales con `?`.
- `web-types.json`: `name` en PascalCase con `Z` mayúscula (`ZButton`); tipos de props con unión de strings: `"'sm' | 'md' | 'lg'"`.
