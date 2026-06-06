# Tarea: Implementar soporte de autocompletado IDE para Zeus UI

## Paso 1: Agregar comentarios JSDoc a `defineProps`

Recorre todos los SFC del plugin y añade `/** ... */` encima de cada prop en `defineProps`. No modifiques lógica ni valores.

- Si el prop tiene `validator` con valores específicos, menciónalos: `/** Visual size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' */`
- Documenta también los `defineEmits` cuando sea posible.

```js
const props = defineProps({
  /** Whether the switch is currently on */
  modelValue: { type: Boolean, default: false },
  /** Disables interaction */
  disabled: { type: Boolean, default: false },
  /** Visual size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' */
  size: { type: String, default: 'md', validator: (val) => ['xs','sm','md','lg','xl'].includes(val) },
})
```

---

## Paso 2: Instalar `vite-plugin-dts`

```bash
npm install -D vite-plugin-dts
```

En `vite.config.ts`:

```ts
import dts from 'vite-plugin-dts'
export default defineConfig({
  plugins: [vue(), dts({ insertTypesEntry: true, rollupTypes: true })],
  build: {
    lib: { entry: 'src/index.ts', formats: ['es'] },
    rollupOptions: { external: ['vue'] },
  },
})
```

Verifica que `tsconfig.json` incluya `"src/**/*.ts"` y `"src/**/*.vue"`.

---

## Paso 3: Crear `src/components.d.ts`

```ts
import type { DefineComponent } from 'vue'

declare module 'vue' {
  export interface GlobalComponents {
    ZSwitch: DefineComponent<{
      /** Whether the switch is currently on */
      modelValue?: boolean
      /** Disables interaction */
      disabled?: boolean
      /** Visual size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' */
      size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
      /** Active track color */
      color?: string
      /** Inactive track color */
      offColor?: string
      /** Thumb color when checked */
      thumbColor?: string
      /** Thumb color when unchecked */
      thumbOffColor?: string
      /** Scale factor for thumb (1 = flush, >1 = oversized) */
      thumbScale?: number
      /** Render vertically */
      vertical?: boolean
      /** Stretch to fill parent */
      fit?: boolean
    }>
    // … repetir para TODOS los componentes públicos
  }
}
export {}
```

Reglas: PascalCase (`ZSwitch`, `ZCheckbox`…), union types para validators, JSDoc en cada prop.

---

## Paso 4: Crear `web-types.json`

```json
{
  "$schema": "https://raw.githubusercontent.com/AminulBD/web-types/master/schema.json",
  "framework": "vue",
  "name": "zeus-ui",
  "version": "1.0.0",
  "contributions": {
    "html": {
      "vue-components": [
        {
          "name": "ZSwitch",
          "description": "Toggle switch with customizable colors, sizes and orientation",
          "props": [
            { "name": "modelValue", "type": "boolean", "default": "false", "description": "Whether the switch is currently on" },
            { "name": "size", "type": "'xs' | 'sm' | 'md' | 'lg' | 'xl'", "default": "'md'", "description": "Visual size" }
          ],
          "events": [
            { "name": "update:modelValue", "description": "Emitted when value changes" },
            { "name": "change", "description": "Emitted with the new boolean value" }
          ]
        }
      ]
    }
  }
}
```

Añadir una entrada por cada componente público.

---

## Paso 5: Actualizar `package.json`

```json
{
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/index.mjs"
    }
  },
  "web-types": "./web-types.json"
}
```

---

## Paso 6 (opcional): Script `scripts/generate-web-types.js`

Lee todos los `.vue` del directorio de componentes, extrae `defineProps`/`defineEmits` (regex o `vue-component-meta`) y genera `web-types.json` automáticamente.

```json
{ "scripts": { "build:types": "node scripts/generate-web-types.js", "build": "npm run build:types && vite build" } }
```

---

## Resumen de archivos

| Archivo | Acción |
|---|---|
| Todos los `z*.vue` | Agregar JSDoc a cada prop en `defineProps` |
| `vite.config.ts` | Agregar `vite-plugin-dts` |
| `src/components.d.ts` | Crear con tipos globales de todos los componentes |
| `web-types.json` | Crear con metadata de todos los componentes |
| `package.json` | Agregar `types`, `exports`, `web-types` |
| `scripts/generate-web-types.js` | (Opcional) Generación automática |

**Notas:** No cambies lógica de componentes. Los nombres en `components.d.ts` y `web-types.json` deben coincidir exactamente con los registrados en el plugin (revisar `app.component()` o `index.ts`). Ejecutar `npm run build` al final para verificar la generación del `.d.ts`.
