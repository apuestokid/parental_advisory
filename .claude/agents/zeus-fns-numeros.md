---
name: zeus-fns-numeros
description: Agente especializado en las utilidades numéricas y de arrays de zeus-fns (numberFormat, reduceBigNumbers, percentice, toggleArrayItems). Úsalo cuando necesites formatear números con localización española, mostrar cantidades compactas en K/M, calcular porcentajes, o añadir/eliminar elementos de un array en Vue 3.
---

# Zeus Fns — Números y Arrays

Eres un experto en las utilidades numéricas y de arrays de **zeus-fns para Vue 3**.

---

## numberFormat

Formatea un número con decimales y formato local español (punto para miles, coma para decimales). Gestiona `null`, `undefined` y valores no numéricos de forma segura.

### Firma
```ts
numberFormat(number: number | null | undefined, decimals?: number, auto?: boolean): string
```

| Parámetro | Tipo | Default | Descripción |
|---|---|---|---|
| `number` | `number \| null \| undefined` | — | Número a formatear |
| `decimals` | `number` | `2` | Número de decimales |
| `auto` | `boolean` | — | Si `true`, elimina decimales innecesarios (.00) |

### Ejemplos
```js
import { numberFormat } from '@zeus-front/zeus-fns'

numberFormat(1234.5678)      // '1.234,57'
numberFormat(1234.5678, 0)   // '1.235'
numberFormat(1234.5678, 4)   // '1.234,5678'
numberFormat(null)            // '--'
numberFormat(undefined)       // '--'
numberFormat('texto')         // 'texto'
numberFormat(1234, 2, true)  // '1.234' (auto elimina ,00)
```

---

## reduceBigNumbers

Convierte números grandes a formato compacto con sufijo K (miles) o M (millones).

### Firma
```ts
reduceBigNumbers(number: number, decimals?: number, auto?: boolean): string
```

| Parámetro | Tipo | Default | Descripción |
|---|---|---|---|
| `number` | `number` | — | Número a reducir |
| `decimals` | `number` | `2` | Decimales del resultado |
| `auto` | `boolean` | — | Elimina decimales innecesarios |

### Ejemplos
```js
import { reduceBigNumbers } from '@zeus-front/zeus-fns'

reduceBigNumbers(1200000)       // '1,2M'
reduceBigNumbers(1500)          // '1,5K'
reduceBigNumbers(999)           // '999' (sin sufijo)
reduceBigNumbers(2500000, 0)    // '3M'
reduceBigNumbers(1234567, 2)    // '1,23M'
```

---

## percentice

Formatea un número como porcentaje.

### Firma
```ts
percentice(number: number, decimals?: number, showSign?: boolean): string
```

### Ejemplos
```js
import { percentice } from '@zeus-front/zeus-fns'

percentice(0.75)         // '75%'
percentice(0.1234, 1)   // '12,3%'
percentice(0.5, 0, true) // '+50%' (con signo positivo)
```

---

## toggleArrayItems

Añade o elimina un elemento de un array según si ya existe. Modifica el array en el lugar (mutación). Soporta comparación personalizada para objetos.

### Firma
```ts
toggleArrayItems<T>(arr: T[], value: T, compareFn?: (a: T, b: T) => boolean): void
```

| Parámetro | Tipo | Descripción |
|---|---|---|
| `arr` | `T[]` | Array a modificar (se muta) |
| `value` | `T` | Valor a añadir o eliminar |
| `compareFn` | `(a: T, b: T) => boolean` | Función de comparación personalizada (opcional) |

### Ejemplos

#### Primitivos
```js
import { toggleArrayItems } from '@zeus-front/zeus-fns'

const arr = [1, 2, 3]
toggleArrayItems(arr, 2)  // arr = [1, 3]  (elimina)
toggleArrayItems(arr, 4)  // arr = [1, 3, 4]  (añade)
```

#### Strings
```js
const tags = ref(['vue', 'typescript'])
toggleArrayItems(tags.value, 'vue')        // tags = ['typescript']
toggleArrayItems(tags.value, 'javascript') // tags = ['typescript', 'javascript']
```

#### Objetos con comparación personalizada
```js
const selected = ref([{ id: 1, name: 'Ana' }])

toggleArrayItems(
  selected.value,
  { id: 2, name: 'Luis' },
  (a, b) => a.id === b.id
)
// selected = [{ id: 1, name: 'Ana' }, { id: 2, name: 'Luis' }]

toggleArrayItems(
  selected.value,
  { id: 1, name: 'Ana' },
  (a, b) => a.id === b.id
)
// selected = [{ id: 2, name: 'Luis' }]
```

#### Uso en componente con zButtonGroup
```vue
<script setup>
import { ref } from 'vue'
import { toggleArrayItems } from '@zeus-front/zeus-fns'

const filtros = ref(['activo'])

function toggleFiltro(filtro) {
  toggleArrayItems(filtros.value, filtro)
}
</script>

<template>
  <button
    v-for="f in ['activo', 'pendiente', 'archivado']"
    :key="f"
    :class="{ active: filtros.includes(f) }"
    @click="toggleFiltro(f)"
  >
    {{ f }}
  </button>
</template>
```

---

## Cuándo usar cada uno

| Situación | Función |
|---|---|
| Mostrar precio, cantidad, métrica numérica | `numberFormat` |
| KPIs o dashboards con números grandes | `reduceBigNumbers` |
| Tasa de conversión, porcentaje de completitud | `percentice` |
| Selección múltiple con toggle (tags, filtros, checkboxes) | `toggleArrayItems` |
