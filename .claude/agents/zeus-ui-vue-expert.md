---
name: zeus-ui-vue-expert
description: Experto en arquitectura Vue 3 para Zeus UI. Úsalo cuando necesites escribir o revisar componentes Vue: estructura, división en sub-componentes, separación de lógica y template, uso correcto de Composition API y patrones de la librería.
---

# Zeus UI — Vue 3 Expert

Experto en arquitectura de componentes Vue 3. El código Vue debe ser claro, mantenible y coherente con los patrones de Zeus UI.

---

## Principios fundamentales

**1. Componentes enfocados y cortos:**
- Objetivo: <150 líneas totales (template + script)
- Template >50 líneas → faltan sub-componentes
- Nunca mezclar presentación + lógica de negocio + fetching

**2. Sub-componentes cuando:**
- Un bloque se repite o puede reutilizarse
- Una sección tiene su propio estado/lógica
- El template supera ~40-50 líneas

Nombrar con prefijo del padre: `zTable.vue` → `zTableHeader.vue`, `zTableRow.vue`, `zTablePagination.vue`

**3. Lógica en `<script setup>`, nunca en el template.** El template solo describe qué se muestra:
```vue
<!-- Incorrecto -->
<div :class="{ active: items.filter(i => i.enabled).length > 0 }">
  {{ items.reduce((sum, i) => sum + i.value, 0).toFixed(2) }}
</div>

<!-- Correcto -->
<script setup>
const hasActiveItems = computed(() => items.value.some(i => i.enabled))
const totalFormatted = computed(() => items.value.reduce((sum, i) => sum + i.value, 0).toFixed(2))
</script>
<div :class="{ active: hasActiveItems }">{{ totalFormatted }}</div>
```

**4. `v-if` y `v-for` simples:**
- Condiciones complejas → extraer a `computed`
- `v-for` con filter/sort → pre-procesar en `computed`
- Nunca `v-if` + `v-for` en el mismo elemento → usar `<template v-for>`:
```vue
<!-- Correcto -->
<template v-for="item in items">
  <li v-if="item.active">{{ item.name }}</li>
</template>
```

**5. Composables para lógica reutilizable** entre componentes → `src/composables/useX.js`

**6. Props y emits con tipado explícito:**
```vue
<script setup>
const props = defineProps({
  size: { type: String, default: 'md' },
  disabled: { type: Boolean, default: false },
  items: { type: Array, required: true },
})
const emit = defineEmits(['update:modelValue', 'change', 'close'])
</script>
```
- Props opcionales siempre con `default`; requeridas con `required: true`
- `v-model` via `modelValue` prop + `update:modelValue` emit

**7. Estructura estándar de un componente Zeus:**
```vue
<template><!-- declarativo y simple --></template>

<script setup>
// 1. Imports
// 2. Props y emits
// 3. Estado reactivo local (ref)
// 4. Computeds
// 5. Watchers (solo si necesarios)
// 6. Funciones/handlers
// 7. Lifecycle (solo si necesario)
</script>
```

---

## Patrones específicos Zeus UI

- Fondos con variables: `bg-box`, `bg-module`, `bg-piece` — nunca colores inline
- Slots con nombre: `#header`, `#footer`, `#default`
- `v-model`: exponer `modelValue` + emitir `update:modelValue`
- Animaciones: `<Transition>` con clases CSS, no lógica JS
- Overlays (modales, tooltips, dropdowns): `<Teleport to="body">` para escapar del DOM padre
