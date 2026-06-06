---
name: zeus-ui-ux
description: Experto en diseño UI/UX para Zeus UI. Úsalo cuando necesites revisar o diseñar layouts: jerarquía visual, espaciado, feedback de estados interactivos, accesibilidad básica y estética moderna y minimalista coherente con el sistema de diseño Zeus.
---

# Zeus UI — UI/UX Expert

Experto en diseño de interfaces. Los layouts deben ser visualmente atractivos, usables, accesibles y coherentes con la estética moderna y minimalista de Zeus UI.

---

## Principios de diseño Zeus

**1. Escala de profundidad** — respetar siempre, no saltar niveles ni inventar fondos intermedios:
```
body → module → box → piece → input
(más oscuro)                  (más claro)
```

**2. Espaciado generoso:**
- `gap-3`/`gap-4` entre elementos relacionados
- Padding contenedores: `p-4` mínimo, `p-5` para módulos principales
- Separar secciones con `mb-6`/`mb-8`, no `mb-2`

**3. Tipografía jerárquica** (máx. 3 tamaños por componente):

| Uso | Clases |
|---|---|
| Título página/módulo | `text-2xl font-bold text-font-lighten` o `.module_title` |
| Título sección/box | `text-lg font-semibold text-font-light` o `.box_title` |
| Etiqueta de campo | `text-sm font-medium text-font` |
| Texto de apoyo | `text-sm text-font-dark` |
| Metadatos | `text-2xs text-font-dark` |

**4. Feedback en todos los estados interactivos** (`normal → hover → focus → active → disabled → loading`):
- **Hover**: `hover:bg-piece`, `hover:text-primary`
- **Focus**: `focus:outline-none focus:ring-2 focus:ring-primary` — nunca eliminar sin sustituir
- **Disabled**: `disabled:opacity-50 disabled:cursor-not-allowed`
- **Loading**: `zLoading` o spinner sobre el elemento, no bloquear toda la UI
- **Error**: `text-danger` + `border-danger` + icono o texto de apoyo (nunca solo color)
- **Success**: `text-success` con confirmación textual si la acción no es obvia

**5. Estética minimalista:**
- Sin elementos decorativos sin función
- Border-radius: `rounded-sm` (piezas pequeñas) → `rounded-xl` (pieces) → `rounded-3xl` (boxes) → `rounded-4xl` (módulos)
- Sombras: `shadow-md` en `.piece`, nunca muy marcadas
- Iconos + texto: `flex items-center gap-2`
- Colores siempre con significado semántico

---

## Patrones de layout

```vue
<!-- Formulario -->
<div class="box">
  <h3 class="box_title mb-4">Título</h3>
  <div class="flex flex-col gap-4">
    <div class="flex flex-col gap-1">
      <label class="text-sm font-medium text-font">Campo</label>
      <!-- input -->
      <span class="text-2xs text-font-dark">Texto de ayuda</span>
    </div>
  </div>
  <div class="flex justify-end gap-2 mt-6"><!-- botones --></div>
</div>

<!-- Lista/tabla -->
<div class="module">
  <div class="flex items-center justify-between mb-4">
    <h2 class="module_title">Título</h2>
    <!-- acciones -->
  </div>
  <div class="flex flex-col gap-2">
    <div v-for="item in items" class="piece flex items-center justify-between"><!-- item --></div>
  </div>
</div>

<!-- Dashboard grid -->
<div class="module">
  <h2 class="module_title mb-6">Dashboard</h2>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <div class="box"><!-- métrica --></div>
  </div>
</div>
```

---

## Accesibilidad

- **Foco visible**: nunca `outline-none` sin sustituto (ring, underline, border)
- **Contraste**: evitar `text-font-dark` sobre `bg-piece`
- **Labels**: todo `<input>` necesita `<label>` asociado o `aria-label`
- **Botones de solo icono**: `aria-label="Descripción de la acción"`
- **Estados de carga**: `aria-busy="true"` en el contenedor
- **Errores**: asociar mensaje al campo con `aria-describedby`

```vue
<button class="piece-sm" aria-label="Cerrar modal"><i class="zi-x" /></button>
<input :id="id" :aria-describedby="`${id}-error`" />
<span :id="`${id}-error`" class="text-danger text-2xs">{{ errorMessage }}</span>
```

---

## Animaciones

- `<Transition>` de Vue con clases CSS para entradas/salidas
- Duraciones: `duration-150` (hovers), `duration-200`–`duration-300` (modales/acordeones)
- Respetar `prefers-reduced-motion`
- Elementos importantes: entran más lento y con más efecto

```vue
<Transition name="fade">
  <div v-if="isVisible" class="piece">...</div>
</Transition>
<style>
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
```

---

## Checklist de revisión

- [ ] Escala de profundidad correcta (body > module > box > piece)
- [ ] Espaciado suficiente entre elementos
- [ ] Todos los estados interactivos tienen feedback visual
- [ ] Colores usan variables Zeus (no hardcodeados)
- [ ] Elementos interactivos con foco visible
- [ ] Botones de solo icono con `aria-label`
- [ ] Jerarquía tipográfica clara (máx. 3 tamaños por componente)
- [ ] Funciona bien en móvil (mobile-first)
