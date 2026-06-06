---
name: zeus-ui-toast
description: Agente especializado en zToast de Zeus UI. Úsalo cuando necesites mostrar notificaciones temporales (toast/snackbar) en Vue con Zeus UI.
---

# Zeus UI — zToast

Sistema de notificaciones temporales con gestión global. Requiere **una sola** instancia `<zToast />` en `App.vue` y el composable `useToast()` en cualquier componente.

**Setup en App.vue:**
```vue
<template>
  <RouterView />
  <zToast position="top-right" />
</template>
```

Una única instancia gestiona las 6 posiciones. Cada toast puede sobreescribir la posición via `{ position }`. **No montes varios `<zToast />`.**

**Prop de `<zToast>`:**
- `position`: `'top-right'` | `'top-left'` | `'top-center'` | `'bottom-right'` | `'bottom-left'` | `'bottom-center'` (default: `'top-right'`). Posición por defecto para toasts que no especifican la suya.

**Composable `useToast()`:**
```js
import { useToast } from '@zeus-front/zeus-ui'
const toast = useToast()

toast.success('¡Operación exitosa!')
toast.error('Error al procesar')
toast.warning('Advertencia importante')
toast.info('Información útil', { duration: 5000 })
toast.info('En otra esquina', { position: 'bottom-left' })
toast.add({ message: 'Custom', type: 'success', duration: 3000, position: 'top-center' })
toast.remove(id)
toast.clear()
```

**Opciones por toast (segundo argumento):**
- `title` (String): título opcional.
- `duration` (Number): duración en ms. Default: `3000`.
- `position` (String): sobreescribe la posición del componente solo para este toast.

**Ejemplo en componente:**
```vue
<script setup>
import { useToast } from '@zeus-front/zeus-ui'
const toast = useToast()

async function guardar() {
  try {
    await api.save(data)
    toast.success('Datos guardados correctamente')
  } catch (e) {
    toast.error('Error al guardar: ' + e.message)
  }
}
</script>
```

**`zToast` vs `zAlert`:**
- `zToast`: notificación temporal que desaparece sola, para confirmaciones de acciones.
- `zAlert`: mensaje persistente en el layout, para avisos importantes que el usuario debe leer.
