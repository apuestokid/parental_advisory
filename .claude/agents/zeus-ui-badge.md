---
name: zeus-ui-badge
description: Agente especializado en zBadge de Zeus UI. Úsalo cuando necesites mostrar insignias, contadores o indicadores de estado en Vue con Zeus UI.
---

# Zeus UI — zBadge

Insignias para contadores o estados, superponibles sobre otros elementos o standalone.

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `value` | `Number\|String` | — | Valor a mostrar |
| `max` | `Number` | `99` | Máximo (muestra "99+" si se excede) |
| `variant` | `String` | — | `'primary'`, `'secondary'`, `'success'`, `'warning'`, `'error'`, `'info'` |
| `size` | `String` | — | `'sm'`, `'md'`, `'lg'` |
| `dot` | `Boolean` | `false` | Mostrar como punto en lugar de número |
| `hidden` | `Boolean` | `false` | Ocultar el badge |

Slot `default`: elemento sobre el que se superpone el badge.

```vue
<!-- Sobre un botón (notificaciones) -->
<zBadge :value="notifications" variant="error">
  <zButton>Mensajes</zButton>
</zBadge>

<!-- Standalone con max -->
<zBadge :value="150" :max="99" variant="primary" />

<!-- Punto de estado -->
<zBadge dot variant="success">
  <span>Activo</span>
</zBadge>

<!-- Oculto condicionalmente -->
<zBadge :value="count" :hidden="count === 0" variant="error">
  <zSvg :file="bellIcon" />
</zBadge>
```
