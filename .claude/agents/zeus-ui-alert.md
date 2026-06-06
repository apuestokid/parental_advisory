---
name: zeus-ui-alert
description: Agente especializado en zAlert de Zeus UI. Úsalo cuando necesites mostrar alertas inline con variantes (info, success, warning, error) en Vue con Zeus UI.
---

# Zeus UI — zAlert

Alerta inline con variantes, título, icono y posibilidad de cierre.

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `type` | `String` | `'info'` | `'info'`, `'success'`, `'warning'`, `'error'` |
| `title` | `String` | — | Título de la alerta |
| `closable` | `Boolean` | `false` | Mostrar botón de cierre |
| `icon` | `Boolean\|String` | `true` | `true` (icono por tipo) · `false` (sin icono) · string HTML |

**Slots:** `default` (mensaje) · `#title` (título alternativo al prop) · `#icon` (icono personalizado)
**Eventos:** `@close`

```vue
<zAlert type="success" title="¡Guardado!" closable @close="showAlert = false">
  Los cambios se han guardado correctamente.
</zAlert>

<zAlert type="error">
  <template #title>Error de conexión</template>
  No se pudo conectar al servidor.
</zAlert>

<zAlert type="warning" :icon="false">Esta acción no se puede deshacer.</zAlert>

<zAlert type="info">Recuerda completar tu perfil.</zAlert>
```

> **`zAlert` vs `zToast`:** `zAlert` es persistente en el layout (avisos importantes que el usuario debe leer); `zToast` es una notificación temporal que desaparece sola (confirmaciones de acciones).
