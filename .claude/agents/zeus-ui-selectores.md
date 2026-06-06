---
name: zeus-ui-selectores
description: Agente especializado en zMultiselect y zDatepicker de Zeus UI. Úsalo cuando necesites implementar selectores con búsqueda, selección múltiple, tags, opciones agrupadas o selectores de fecha/hora/rango en Vue con Zeus UI.
---

# Zeus UI — Selectores y Pickers

## zMultiselect

Selector avanzado basado en `@vueform/multiselect`. Soporta selección simple, múltiple, tags, búsqueda, grupos y opciones asíncronas.

**Props principales:**
| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `modelValue` | `String\|Number\|Array\|Object` | — | Valor seleccionado (v-model) |
| `options` | `Array` | — | Opciones disponibles |
| `mode` | `String` | `'single'` | `'single'`, `'multiple'`, `'tags'` |
| `searchable` | `Boolean` | `false` | Búsqueda en tiempo real |
| `placeholder` | `String` | — | Texto placeholder |
| `label` | `String` | — | Propiedad del objeto a usar como label |
| `trackBy` | `String` | — | Propiedad única para identificar opciones objeto |
| `createOption` | `Boolean` | `false` | Crear nuevas opciones (solo en modo `tags`) |
| `groups` | `Boolean` | `false` | Opciones agrupadas |
| `groupLabel` | `String` | — | Propiedad del grupo para el nombre |
| `groupValues` | `String` | — | Propiedad del grupo para los items |

**Ejemplos:**
```vue
<!-- Simple / múltiple -->
<zMultiselect v-model="framework" :options="['Vue', 'React', 'Angular']" placeholder="Framework" />
<zMultiselect v-model="selected" mode="multiple" :options="['Vue', 'React', 'Angular']" />

<!-- Con búsqueda y opciones objeto -->
<zMultiselect v-model="userId" :options="users" label="name" track-by="id" :searchable="true" />

<!-- Agrupadas -->
<zMultiselect v-model="item" :options="groupedOptions" :groups="true" group-label="category" group-values="items" />

<!-- Tags con creación libre -->
<zMultiselect v-model="tags" :options="existingTags" mode="tags" :create-option="true" />
```

```js
const users = [{ id: 1, name: 'Ana García' }, { id: 2, name: 'Luis Martín' }]
const groupedOptions = [
  { category: 'Frutas', items: ['Manzana', 'Naranja'] },
  { category: 'Verduras', items: ['Zanahoria', 'Brócoli'] },
]
```

> Para opciones avanzadas (async, slots, eventos) consulta la [documentación de @vueform/multiselect](https://github.com/vueform/multiselect).

---

## zDatepicker

Selector de fecha/hora basado en `@vuepic/vue-datepicker`. Wrapper con el design system Zeus aplicado vía CSS variables; reenvía todos los props y slots del componente original.

**Props principales:**
| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `v-model` | `Date\|String\|Number\|Array\|null` | — | Valor de fecha |
| `range` | `Boolean` | `false` | Rango de fechas |
| `enable-time-picker` | `Boolean` | `false` | Añadir selector de hora |
| `time-picker` | `Boolean` | `false` | Solo hora |
| `month-picker` | `Boolean` | `false` | Solo mes/año |
| `year-picker` | `Boolean` | `false` | Solo año |
| `inline` | `Boolean` | `false` | Sin popup, siempre visible |
| `auto-apply` | `Boolean` | `false` | Aplicar al hacer click (sin botón confirmar) |
| `min-date` / `max-date` | `Date\|String` | — | Rango permitido |
| `disabled-dates` | `Array\|Function` | — | Fechas deshabilitadas |
| `disabled-week-days` | `Array` | — | Días de la semana (0=Dom, 6=Sáb) |
| `format` | `String\|Function` | — | Formato de visualización |
| `model-type` | `String` | — | Formato de salida: `"iso"`, `"timestamp"` o patrón |
| `locale` | `String` | — | Idioma: `"es-ES"`, `"fr-FR"`, etc. |
| `placeholder` | `String` | — | Texto placeholder |
| `disabled` | `Boolean` | `false` | Deshabilitar |
| `is24` | `Boolean` | `true` | Formato 24 horas |
| `week-start` | `Number` | `1` | Primer día (0=Dom, 1=Lun) |
| `multi-calendars` | `Boolean\|Object` | — | Mostrar múltiples meses |
| `preset-dates` | `Array` | — | Rangos predefinidos |
| `teleport` | `String\|Boolean` | — | Renderizar menú en otro nodo DOM |

**Eventos:** `@update:model-value` · `@open` / `@closed` · `@cleared` · `@range-start` / `@range-end` · `@invalid-select`

**Slots:** `#dp-input` · `#trigger` · `#calendar-icon` · `#action-row` · `#day`

**Ejemplos:**
```vue
<zDatepicker v-model="date" :auto-apply="true" placeholder="Fecha" />
<zDatepicker v-model="range" :range="true" :auto-apply="true" placeholder="Rango" />
<zDatepicker v-model="datetime" :enable-time-picker="true" placeholder="Fecha y hora" />
<zDatepicker v-model="month" :month-picker="true" />
<zDatepicker v-model="time" :time-picker="true" />
<zDatepicker v-model="date" :inline="true" :auto-apply="true" />
<zDatepicker v-model="date" :disabled-week-days="[0, 6]" :auto-apply="true" />
<zDatepicker v-model="range" :range="true" :multi-calendars="true" />

<!-- Restricciones -->
<zDatepicker v-model="d" :min-date="new Date()" :max-date="maxDate" :auto-apply="true" />

<!-- Formato personalizado -->
<zDatepicker v-model="d" :format="(d) => new Date(d).toLocaleDateString('es-ES')" :auto-apply="true" />
```

> Para opciones avanzadas consulta la [documentación de @vuepic/vue-datepicker](https://vue3datepicker.com/).

---

## Cuándo usar cada uno

| Situación | Componente |
|---|---|
| 1 de pocas opciones (<8) | `zButtonGroup` o `zRadio` |
| 1 de muchas opciones (>8) | `zMultiselect` con `searchable` |
| Selección múltiple | `zMultiselect` con `mode="multiple"` |
| Tags / etiquetas libres | `zMultiselect` con `mode="tags"` + `createOption` |
| Seleccionar una fecha | `zDatepicker` con `auto-apply` |
| Rango de fechas | `zDatepicker` con `range` |
| Fecha y hora | `zDatepicker` con `enable-time-picker` |
