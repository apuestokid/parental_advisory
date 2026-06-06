---
name: zeus-ui-datos
description: Agente especializado en zTable, zProgress y zVirtualScroll de Zeus UI. Úsalo cuando necesites implementar tablas de datos con búsqueda/ordenación/exportación, barras de progreso o listas virtualizadas en Vue con Zeus UI.
---

# Zeus UI — Visualización de Datos

## zTable

Tabla con paginación, búsqueda, ordenación, agrupación colapsable (con `zArrow` en cabecera de grupo) y exportación CSV.

**Props:**
| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `data` | `Array` | — | Datos de la tabla |
| `cells` | `Array` | — | Configuración de columnas |
| `title` | `String` | — | Título |
| `perPage` | `Number\|falsy` | `25` | Filas por página. Falsy = todas |
| `showTitleBar` | `Boolean` | — | Mostrar barra de título e input de búsqueda |
| `showSearch` | `Boolean` | `true` | Mostrar input de búsqueda |
| `searchPlaceholder` | `String` | `'Search table'` | Placeholder del buscador |
| `showResetButton` | `Boolean` | `false` | Botón para resetear estado |
| `defaultOrderField` | `String` | — | Campo de ordenación inicial |
| `defaultOrderDirection` | `String` | `'asc'` | Dirección inicial de ordenación |
| `groupBy` | `String\|Function` | — | Campo o callback para agrupar filas |
| `groupCollapsible` | `Boolean` | `true` | Permitir expandir/colapsar grupos |
| `collapseGroupedByDefault` | `Boolean` | `false` | Iniciar grupos colapsados |
| `showGroupToolbarButton` | `Boolean` | `true` | Botón toolbar para activar/desactivar agrupación |
| `canExport` | `Boolean` | `false` | Habilitar exportación CSV |
| `exportFileName` | `String` | — | Nombre del CSV (sin extensión) |
| `exportSeparator` | `String` | — | Separador CSV (ej: `";"` para locales europeos) |
| `exportAllFilteredRows` | `Boolean` | — | `true` = todas las filas filtradas; `false` = solo la página |
| `rowKey` | `String` | `'id'` | Campo key de cada fila |
| `emptyMessage` | `String` | `'No data available'` | Mensaje de estado vacío |
| `dense` | `Boolean` | `false` | Modo compacto |
| `stripedRows` | `Boolean` | `true` | Filas alternadas |
| `hoverableRows` | `Boolean` | `true` | Resaltar en hover |
| `stickyHeader` | `Boolean` | `true` | Cabecera sticky |
| `stickyFirstColumn` | `Boolean` | `true` | Primera columna sticky |
| `themeClass` | `String` | `''` | Clase para theming por CSS variables |

**Eventos:** `@zTableEvent` (re-emite eventos de `cellComponent`) · `@toggleSection` · `@groupToggle` · `@reset`

**Slots de toolbar:** `beforeTitle` · `afterTitle` · `afterButtons`

**Estructura de `cells`:**
| Propiedad | Tipo | Descripción |
|---|---|---|
| `field` | `String` | Propiedad del objeto |
| `label` | `String` | Título de cabecera |
| `headerClass` | `String` | Clases CSS para cabecera |
| `cellClass` | `String` | Clases CSS para celdas |
| `baseClass` | `String` | Clases CSS para cabecera y celdas |
| `searchable` | `Boolean\|String\|Array\|Function` | Configurar búsqueda |
| `sortable` | `Boolean` | Ordenar por este campo (nulls al final) |
| `customSort` | `Function(row) => value` | Ordenación personalizada |
| `cellComponent` | `Component` | Componente Vue para renderizar la celda |

**`searchable` — formas:**
```js
searchable: true                          // busca en `field`
searchable: 'otroField'                   // busca en otro campo
searchable: ['field1', 'field2']          // múltiples campos
searchable: (row, query) => boolean       // función personalizada
```

**`cellComponent` — props que recibe:** `row: Object`, `cell: Object`

**Ejemplo:**
```vue
<template>
  <zTable
    :cells="cells" :data="users" title="Usuarios"
    :perPage="10" :showTitleBar="true" :showResetButton="true"
    groupBy="department" :groupCollapsible="true"
    defaultOrderField="name"
    :canExport="true" exportFileName="usuarios" exportSeparator=";"
    :exportAllFilteredRows="true" themeClass="table-ocean-theme"
  />
</template>

<script setup>
import UserCell from './cells/UserCell.vue'

const users = [
  { id: 1, name: 'Ana García', age: 28, department: 'Engineering' },
  { id: 2, name: 'Luis Martín', age: 34, department: 'Design' },
]

const cells = [
  { field: 'id', label: 'ID', baseClass: 'max-w-16', sortable: true },
  { field: 'name', label: 'Nombre', searchable: true, sortable: true, cellComponent: UserCell },
  { field: 'age', label: 'Edad', sortable: true },
  { field: 'department', label: 'Departamento', searchable: true, sortable: true },
  {
    field: 'dimensions', label: 'Dimensiones',
    customSort: (row) => row.width * row.height * row.depth,
    searchable: (row, query) => row.reviews.map((r) => r.comment).join(' ').includes(query),
  },
]
</script>
```

---

## zProgress

Barra de progreso. Soporta barras simples, múltiples (superpuestas o apiladas), verticales y con tooltip.

**Props:**
| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `value` | `Number\|Array\|Object` | — | Valor(es). Cada barra puede ser `{ value, color?, striped?, ...meta }` |
| `max` | `Number\|'auto'` | `100` | Valor máximo. `'auto'` = suma de los values |
| `direction` | `String` | `'horizontal'` | `'horizontal'` o `'vertical'` |
| `stacked` | `Boolean` | `false` | Apilar en secuencia (vs superponer) |
| `striped` | `Boolean` | `false` | Franjas diagonales. Cada barra puede sobreescribir con su propia clave `striped` |
| `stripedColor` | `String` | `'light'` | `'light'` (franjas blancas) o `'dark'` (franjas negras). Requiere `striped` |
| `stripedAnimated` | `Boolean` | `false` | Animar franjas (requiere `striped`) |
| `stripedSpeed` | `Number\|String` | `null` | Velocidad animación: número = segundos o string CSS (`'500ms'`). `null` → `1s` |
| `stripedWidth` | `Number\|String` | `null` | Tamaño patrón: número = px o longitud CSS. `null` → `1rem`. Requiere `striped` |
| `thickness` | `Number\|String` | `null` | Grosor (alto en horizontal, ancho en vertical). Número = px o longitud CSS |
| `stackedRadius` | `Number\|String` | `null` | Redondeo junturas entre segmentos apilados. `0` = junturas rectas. Solo con `stacked` |
| `borderWidth` | `Number\|String` | `null` | Ancho del hueco alrededor de cada barra. `0` elimina; `null` = 1px por defecto |
| `padding` | `Number\|String` | `null` | Espacio entre track y relleno (inset en los cuatro lados). Número = px o longitud CSS |
| `colors` | `Array` | `['--color-aux','--color-primary','--color-secondary']` | Colores por barra |
| `backgroundColor` | `String` | `'var(--color-piece)'` | Color de fondo |
| `tooltipOptions` | `Object` | — | Opciones de Tippy.js |

**Slot:** `#tooltip="{ value }"` — personalizar contenido del tooltip

**Config global (`config.progress`):** todas las props anteriores excepto `value` y `tooltipOptions` son configurables globalmente:
```js
app.use(zeusUI, {
  progress: { striped: true, stripedAnimated: true, thickness: 12, backgroundColor: 'var(--color-module)' },
})
```

**Ejemplos:**
```vue
<zProgress :value="75" />
<zProgress :value="[80, 50, 20]" />                          <!-- superpuestas -->
<zProgress :value="[30, 40, 20]" stacked />                  <!-- apiladas -->
<zProgress :value="[300, 200, 500]" max="auto" stacked />    <!-- max automático -->
<zProgress :value="60" striped />
<zProgress :value="60" striped striped-animated :striped-speed="3" />
<zProgress :value="[{ value: 30, color: '#ef4444' }, { value: 50, color: '#3b82f6' }]" />
<zProgress :value="75" :padding="4" :border-width="4" />
<zProgress :value="65" direction="vertical" />

<!-- Tooltip personalizado -->
<zProgress :value="[20, 30, 50]" stacked>
  <template #tooltip="{ value }"><div>{{ value.value }}%</div></template>
</zProgress>
```

---

## zVirtualScroll

Lista virtualizada para datasets grandes. Solo renderiza los elementos visibles en pantalla.

**Props:**
| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `items` | `Array` | — | Items a renderizar |
| `itemHeight` | `Number` | — | **Requerido.** Altura fija de cada item en px |
| `height` | `Number\|String` | `'400px'` | Altura del contenedor |
| `buffer` | `Number` | `5` | Items extra renderizados fuera del viewport |
| `keyField` | `String` | `'id'` | Campo key única |

**Slot:** `default="{ item, index }"` — template de cada item

**Método (via ref):** `scrollToIndex(index)` — scroll programático

> **Importante:** la altura CSS del item debe coincidir exactamente con `itemHeight`.

```vue
<template>
  <zVirtualScroll :items="largeList" :item-height="60" :height="500" ref="listRef">
    <template #default="{ item, index }">
      <div class="item"><span>#{{ index + 1 }}</span><span>{{ item.name }}</span></div>
    </template>
  </zVirtualScroll>
  <zButton @click="listRef?.scrollToIndex(0)">Ir al inicio</zButton>
</template>

<script setup>
import { ref } from 'vue'
const listRef = ref(null)
const largeList = ref(Array.from({ length: 50000 }, (_, i) => ({ id: i, name: `Item ${i}` })))
</script>

<style scoped>
.item { height: 60px; display: flex; align-items: center; padding: 0 1rem; border-bottom: 1px solid var(--color-border); }
</style>
```

---

## Cuándo usar cada uno

| Situación | Componente |
|---|---|
| Lista tabular de datos | `zTable` |
| Lista tabular con búsqueda y paginación | `zTable` con `perPage` + `showTitleBar` |
| Lista no tabular con miles de items | `zVirtualScroll` |
| Porcentaje simple de completitud | `zProgress` valor único |
| Distribución de partes de un total | `zProgress` apilado con `max="auto"` |
| Comparar múltiples métricas en paralelo | `zProgress` múltiple sin `stacked` |
