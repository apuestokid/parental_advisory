---
name: zeus-ui-botones
description: Agente especializado en los componentes de botones y controles de entrada de Zeus UI: zButton, zButtonGroup, zCheckbox, zRadio, zSearchInput, zSwitch, zDayNight y zFileUpload. Úsalo cuando necesites implementar botones, grupos de selección, checkboxes, radios, inputs de búsqueda, toggles o zonas de subida de archivos en Vue con Zeus UI.
---

# Zeus UI — Botones y Controles de Entrada

## zButton

```vue
<zButton variant="primary">Primario</zButton>
<zButton variant="secondary">Secundario</zButton>
```

**Props:** `variant`: `"primary"` | `"secondary"` | (otros del design system)

---

## zButtonGroup

Selección simple o múltiple. Si `v-model` es array → modo múltiple automático.

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `options` | `Array` | — | Strings u objetos |
| `v-model` | `String\|Array` | — | Array = múltiple |
| `size` | `String` | `"md"` | `"sm"`, `"md"`, `"lg"` |
| `variant` | `String` | `"primary"` | `"primary"`, `"secondary"`, `"success"`, `"danger"`, `"warning"`, `"aux"` |
| `labelKey` | `String` | auto | Propiedad para el label (fallback: `label`→`name`→`value`→`id`→`key`) |
| `valueKey` | `String` | — | Propiedad para el valor en v-model (si no, guarda el objeto completo) |

**Eventos:** `@click` (incluye re-clicks, recibe el valor) · `@update:modelValue`
**Slots:** `#option="{ option }"`

```vue
<zButtonGroup :options="['A', 'B', 'C']" v-model="sel" />
<zButtonGroup :options="['A', 'B', 'C']" v-model="selArray" /><!-- múltiple -->
<zButtonGroup :options="[{ id:1, name:'Alpha' }, { id:2, name:'Beta' }]"
  v-model="selId" label-key="name" value-key="id" />
<zButtonGroup :options="opts" v-model="sel" @click="onOptionClick">
  <template #option="{ option }">
    <span class="font-semibold">{{ option.label }}</span>
  </template>
</zButtonGroup>
```

---

## zButtonGroupSlider

Igual que `zButtonGroup` pero con **fondo animado deslizante**. Solo selección simple (no array).

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `options` | `Array` | — | Strings u objetos |
| `v-model` | `String\|Object` | — | Solo selección simple |
| `size` | `String` | `"md"` | `"sm"`, `"md"`, `"lg"` |
| `variant` | `String` | `"primary"` | `"primary"`, `"secondary"`, `"success"`, `"danger"`, `"warning"`, `"aux"` |
| `labelKey` | `String` | auto | Propiedad para el label |
| `valueKey` | `String` | — | Propiedad para el valor en v-model |
| `vertical` | `Boolean` | `false` | Layout vertical con animación vertical |

**Eventos:** `@click` · `@update:modelValue` | **Slots:** `#option="{ option }"`

```vue
<zButtonGroupSlider :options="['Día', 'Semana', 'Mes']" v-model="periodo" />
<zButtonGroupSlider :options="tabs" v-model="activeTab" size="sm" variant="secondary" />
<zButtonGroupSlider :options="['Día', 'Semana', 'Mes']" v-model="periodo" vertical />
```

> Usa `zButtonGroupSlider` para el efecto deslizante con selección simple; usa `zButtonGroup` cuando necesites selección múltiple.

---

## zCheckbox

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `modelValue` | `Boolean` | — | Estado (v-model) |
| `label` | `String` | — | Texto del label |
| `disabled` | `Boolean` | `false` | — |
| `size` | `String` | `"md"` | `"sm"`, `"md"`, `"lg"` |
| `color` | `String` | — | Color CSS cuando está activo |

```vue
<zCheckbox v-model="accepted" label="Acepto los términos" />
<zCheckbox v-model="pro" size="lg" color="#22c55e">Plan Pro</zCheckbox>
<zCheckbox v-model="locked" :disabled="true" label="Bloqueado" />
```

---

## zRadio

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `modelValue` | `String\|Number\|Boolean` | — | Valor actual (v-model) |
| `options` | `Array` | — | Strings u objetos `{ label, value }` |
| `name` | `String` | — | Nombre del grupo HTML |
| `disabled` | `Boolean` | `false` | — |
| `size` | `String` | `"md"` | `"sm"`, `"md"`, `"lg"` |
| `color` | `String` | — | Color CSS cuando está activo |
| `value` | `String\|Number\|Boolean` | — | Para uso como radio individual (sin `options`) |
| `label` | `String` | — | Label para uso como radio individual |

```vue
<zRadio v-model="plan" name="plan" :options="[
  { label: 'Basic', value: 'basic' },
  { label: 'Pro', value: 'pro' },
]" />
```

---

## zSearchInput

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `modelValue` | `String` | `''` | Texto de búsqueda (v-model) |
| `placeholder` | `String` | `'Search...'` | — |
| `size` | `String` | `'md'` | `'sm'`, `'md'`, `'lg'` |
| `disabled` | `Boolean` | `false` | — |
| `icon` | `String` | `null` | Icono de `@zeus-front/zeus-icons`. Default: `magnifying-glass` |

> **Sets disponibles en `@zeus-front/zeus-icons`:** `brands/`, `light/`, `regular/`, `solid/`, `thin/` (Font Awesome 6) y `lucide/` (Lucide, kebab-case).

```vue
<zSearchInput v-model="search" />
<zSearchInput v-model="search" placeholder="Filter users..." size="sm" />
<zSearchInput v-model="search" :icon="filterIcon" /><!-- import filterIcon from '@zeus-front/zeus-icons/regular/filter' -->
```

---

## zSwitch

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `modelValue` | `Boolean` | `false` | Estado (v-model) |
| `disabled` | `Boolean` | `false` | — |
| `size` | `String` | `"md"` | `"xs"`, `"sm"`, `"md"`, `"lg"`, `"xl"` |
| `color` | `String` | `var(--color-primary)` | Color del track activo |
| `offColor` | `String` | `""` | Color del track inactivo (fallback: `var(--color-piece)`) |
| `thumbColor` | `String` | `""` | Color del thumb activo (fallback: `#ffffff`) |
| `thumbOffColor` | `String` | `""` | Color del thumb inactivo (fallback: `thumbColor`) |
| `thumbScale` | `Number` | `1` | Escala del thumb (>1 desborda en las 4 direcciones) |
| `vertical` | `Boolean` | `false` | Thumb se mueve arriba-abajo |
| `fit` | `Boolean` | `false` | Se estira al ancho/alto del padre |

**Eventos:** `@update:modelValue` · `@change` (ambos emiten el booleano)
**Slots:** `#icon-on` · `#icon-off` (contenido dentro del thumb)

```vue
<zSwitch v-model="isEnabled" />
<zSwitch v-model="val" size="xl" :thumb-scale="1.2" color="#10b981" off-color="#ef4444">
  <template #icon-on>ON</template>
  <template #icon-off>OFF</template>
</zSwitch>
<zSwitch v-model="v" vertical size="lg" :thumb-scale="1.3" />
<!-- Fit al padre -->
<div style="width:300px"><zSwitch v-model="w" fit /></div>
<div style="height:150px"><zSwitch v-model="t" vertical fit /></div>
```

---

## zDayNight

Toggle día/noche con animación visual de cielo, estrellas y sol/luna.

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `modelValue` | `Boolean` | `false` | Estado (v-model) |
| `disabled` | `Boolean` | `false` | — |
| `size` | `String` | `"md"` | `"xs"`, `"sm"`, `"md"`, `"lg"`, `"xl"` |

**Eventos:** `@update:modelValue` · `@change`

```vue
<zDayNight v-model="isNight" />
<zDayNight v-model="isNight" size="lg" />
<zDayNight :model-value="true" :disabled="true" />
```

---

## zFileUpload

Zona drag & drop con preview de imágenes, validación de tamaño y soporte múltiple.

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `modelValue` | `File\|Array` | `null` | v-model |
| `accept` | `String` | `'image/jpeg,image/png,image/webp,.pdf'` | Tipos aceptados |
| `multiple` | `Boolean` | `false` | Múltiples archivos |
| `maxFiles` | `Number` | `10` | Máximo en modo múltiple |
| `maxSize` | `Number` | `5242880` | Tamaño máximo en bytes (5 MB) |
| `placeholder` | `String` | `'Click or drag files here'` | — |
| `hint` | `String` | `'PNG, JPG, WEBP, PDF'` | Texto de ayuda |
| `disabled` | `Boolean` | `false` | — |
| `icon` | `Object\|Function\|String` | `null` | Icono de `@zeus-front/zeus-icons` |
| `preview` | `Boolean` | `true` | Mostrar preview de imágenes |

**Eventos:** `@update:modelValue` (File o File[]) · `@error` (mensaje de error o null)
**Slots:** `default` (contenido del dropzone) · `#preview="{ file, previewUrl, remove }"`

```vue
<zFileUpload v-model="file" />
<zFileUpload v-model="files" multiple :max-files="5" />
<zFileUpload v-model="img" accept="image/*" :icon="cloudIcon"
  placeholder="Upload image" hint="Any image format" />
<zFileUpload v-model="small" :max-size="1024" @error="err = $event" />
<zAlert v-if="err" type="error">{{ err }}</zAlert>
```

---

## Patrón: formulario combinado

```vue
<form @submit.prevent="submit">
  <zRadio v-model="form.plan" name="plan" :options="plans" />
  <zCheckbox v-model="form.newsletter" label="Recibir newsletter" />
  <zSwitch v-model="form.notifications" />
  <zButton variant="primary" type="submit">Guardar</zButton>
</form>
```
