---
name: zeus-ui-overlay
description: Agente especializado en zModal, zAccordion, zContextMenu, zArrow, zDraggable y zDropdown de Zeus UI. Úsalo cuando necesites implementar modales, secciones expandibles, menús contextuales, indicadores de dirección, elementos flotantes draggables o dropdowns en Vue con Zeus UI.
---

# Zeus UI — Overlay y Navegación

Experto en los componentes de overlay y navegación de **Zeus UI para Vue 3**.

---

## zModal

Ventana modal superpuesta. Cierra con Esc o click en el fondo.

| Prop | Tipo | Default |
|---|---|---|
| `isOpen` | `Boolean` | — |
| `zIndex` | `Number` | `100` |

- `@closeModal`: emitido al pulsar Esc o click en fondo
- Slot `default`: contenido del modal

```vue
<zModal :isOpen="open" @closeModal="open = false">
  <div class="p-6">
    <h2>Título</h2>
    <zButton @click="open = false">Cerrar</zButton>
  </div>
</zModal>
```

**Modales anidados:** usa `zIndex` diferente en cada uno (`100`, `200`).

---

## zAccordion

Sección expandible con animación. El trigger va **fuera** del componente.

| Prop | Tipo |
|---|---|
| `opened` | `Boolean` |

Slot `default`: contenido que se muestra/oculta.

```vue
<div class="cursor-pointer flex items-center gap-2" @click="isOpen = !isOpen">
  <span>Ver más</span>
  <zArrow :up="isOpen" />
</div>
<zAccordion :opened="isOpen">
  <div class="p-4">Contenido expandible...</div>
</zAccordion>
```

**Solo uno abierto a la vez:** gestiona `activeIndex` y compara en `:opened="activeIndex === i"`.

---

## zContextMenu

Menú contextual con submenús, divisores e items deshabilitados.

| Prop | Tipo | Default |
|---|---|---|
| `items` | `Array` | — |
| `trigger` | `String` | `'contextmenu'` |

`trigger`: `'contextmenu'` (click derecho) o `'click'` (click izquierdo).

**Estructura de item:**
```js
{ label, icon?, disabled?, divider?, children?, onClick? }
// divider: true → línea separadora (ignora otros campos)
// children: Array → submenú recursivo
```

```vue
<zContextMenu :items="menuItems">
  <div class="p-8 border-2 border-dashed">Click derecho aquí</div>
</zContextMenu>

<zContextMenu :items="actions" trigger="click">
  <zButton>Acciones</zButton>
</zContextMenu>
```

---

## zArrow

Flecha/caret/angle animado que rota 180°. Tamaño y color via clases CSS.

| Prop | Tipo | Default |
|---|---|---|
| `up` | `Boolean` | `true` |
| `icon` | `String` | `'arrow'` |
| `transition` | `Number` | `0.5` |

`icon`: `'arrow'`, `'caret'`, `'angle'`

```vue
<!-- Acordeón -->
<zArrow :up="open" icon="caret" />

<!-- KPI tendencia con color semántico -->
<zArrow :up="value > 0" :class="value > 0 ? 'text-success' : 'text-danger'" />

<!-- Dropdown rápido -->
<zArrow :up="dropdownOpen" :transition="0.2" class="text-xs" />
```

---

## zDraggable

Contenedor `position:fixed` con `Teleport to="body"`. Soporte mouse y touch. Clampeo automático en bordes de viewport.

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `persist` | `Boolean` | `false` | Guarda posición en localStorage |
| `anchor` | `String` | `'top-left'` | `'top-left'`, `'top-right'`, `'bottom-left'`, `'bottom-right'` |
| `initialX` | `Number` | `2` | Posición X inicial (% viewport desde anchor) |
| `initialY` | `Number` | `2` | Posición Y inicial (% viewport desde anchor) |
| `handler` | `String` | `null` | ID del elemento que actúa como mango de arrastre |
| `storageKey` | `String` | `'z-draggable-position'` | Clave localStorage — **usar clave única por instancia** |
| `resizable` | `Boolean` | `false` | Handles de redimensionado en 4 bordes y 4 esquinas |
| `minWidth` | `Number` | `100` | Ancho mínimo en px |
| `minHeight` | `Number` | `50` | Alto mínimo en px |

Slot `default`: contenido del contenedor.

Cuando `resizable=true`, el tamaño se persiste con `storageKey + "-size"`. El redimensionado respeta `anchor` para mantener el borde opuesto fijo.

```vue
<!-- Básico -->
<zDraggable>
  <div class="p-4 bg-primary text-body rounded shadow-lg">Arrástrameee</div>
</zDraggable>

<!-- Con handler (solo la cabecera arrastra) -->
<zDraggable handler="mi-handle" :initial-x="40" :initial-y="30">
  <div id="mi-handle" class="px-3 py-2 bg-primary text-body text-sm">↕ Arrastra</div>
  <div class="p-4">Contenido seleccionable</div>
</zDraggable>

<!-- Persist + resizable + esquina inferior derecha -->
<zDraggable anchor="bottom-right" persist storage-key="mi-panel" resizable :min-width="200">
  <div class="p-4 w-full h-full">Panel</div>
</zDraggable>

<!-- Múltiples instancias: storageKey único -->
<zDraggable persist storage-key="widget-chat" anchor="bottom-right" />
<zDraggable persist storage-key="widget-debug" anchor="bottom-left" />
```

---

## zDropdown

Dropdown flotante con auto-posicionamiento, flecha direccional y teleport al body. Detecta colisiones con el viewport.

| Prop | Tipo | Default |
|---|---|---|
| `open` | `Boolean` | — |
| `position` | `String` | `'bottom'` |
| `align` | `String` | `'start'` |
| `variant` | `String` | `'piece'` |
| `width` | `String` | `'content'` |
| `maxHeight` | `String` | — |
| `maxWidth` | `String` | — |
| `offset` | `Number` | `8` |
| `arrow` | `Boolean` | `true` |
| `arrowSize` | `Number` | `7` |
| `closeOnClickOutside` | `Boolean` | `true` |
| `closeOnEscape` | `Boolean` | `true` |
| `disabled` | `Boolean` | `false` |
| `zIndex` | `Number` | `1000` |
| `teleportToBody` | `Boolean` | `true` |
| `trigger` | `String` | `'click'` |
| `hoverDelay` | `Number` | `150` |
| `hoverCloseDelay` | `Number` | `200` |
| `rounded` | `String` | `'md'` |
| `shadow` | `String` | `'lg'` |

Valores válidos:
- `position`: `'top'`, `'bottom'`, `'left'`, `'right'`, `'auto'`
- `align`: `'start'`, `'center'`, `'end'`, `'auto'`
- `variant`: `'piece'`, `'box'`, `'module'`
- `width`: `'content'`, `'trigger'`, `'sm'`, `'md'`, `'lg'`
- `trigger`: `'click'`, `'hover'`, `'manual'`
- `rounded`: `'none'`, `'sm'`, `'md'`, `'lg'`, `'xl'`, `'full'`
- `shadow`: `'none'`, `'sm'`, `'md'`, `'lg'`, `'xl'`

**Eventos:** `@update:open`, `@open`, `@close`, `@toggle`, `@after-enter`, `@after-leave`

**Slots:**
- `default`: trigger — recibe `{ isOpen, toggle, show, hide }`
- `#content`: contenido — recibe `{ hide }`

**Métodos expuestos (ref):** `show()`, `hide()`, `toggle()`, `isOpen`

```vue
<!-- Básico -->
<zDropdown>
  <zButton>Abrir menú</zButton>
  <template #content="{ hide }">
    <div class="p-4">
      <zButton size="sm" @click="hide">Cerrar</zButton>
    </div>
  </template>
</zDropdown>

<!-- Menú de acciones (align end) -->
<zDropdown position="bottom" align="end" variant="piece">
  <zButton variant="secondary" size="sm">Acciones</zButton>
  <template #content="{ hide }">
    <ul class="py-1 min-w-[160px]">
      <li class="px-4 py-2 cursor-pointer" @click="edit(); hide()">Editar</li>
      <li class="px-4 py-2 cursor-pointer text-danger" @click="remove(); hide()">Eliminar</li>
    </ul>
  </template>
</zDropdown>

<!-- Hover -->
<zDropdown trigger="hover" position="right">
  <span class="underline cursor-help">Hover para info</span>
  <template #content>
    <div class="p-3">Información adicional</div>
  </template>
</zDropdown>

<!-- Control manual -->
<zDropdown v-model:open="isOpen" trigger="manual">
  <zButton @click="isOpen = !isOpen">Manual</zButton>
  <template #content>...</template>
</zDropdown>
```

---

## Patrones comunes

**Modal de confirmación:**
```vue
<zModal :isOpen="showConfirm" @closeModal="showConfirm = false">
  <div class="p-6 flex flex-col gap-4">
    <zAlert type="warning" title="¿Estás seguro?">Esta acción no se puede deshacer.</zAlert>
    <div class="flex gap-2 justify-end">
      <zButton @click="showConfirm = false">Cancelar</zButton>
      <zButton variant="primary" @click="confirm">Confirmar</zButton>
    </div>
  </div>
</zModal>
```

**FAQ con acordeón:**
```vue
<div v-for="faq in faqs" :key="faq.id" class="border-b">
  <div class="flex justify-between cursor-pointer py-3" @click="toggle(faq.id)">
    <span>{{ faq.question }}</span>
    <zArrow :up="active === faq.id" icon="caret" />
  </div>
  <zAccordion :opened="active === faq.id">
    <p class="pb-3">{{ faq.answer }}</p>
  </zAccordion>
</div>
```
