---
name: zeus-ui-loading
description: Agente especializado en zLoading de Zeus UI. Úsalo cuando necesites mostrar spinners u overlays de carga en Vue con Zeus UI.
---

# Zeus UI — zLoading

Spinner/overlay de carga superpuesto sobre el contenido. Varios tipos de animación y configuración global.

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `loading` | `Boolean` | — | Mostrar/ocultar el spinner |
| `size` | `Number` | `2.5` | Tamaño en REM |
| `type` | `String` | `'circles'` | `'circles'`, `'spinner'`, `'dots'`, `'lines'` |
| `nobg` | `Boolean` | `false` | Elimina fondo y backdrop-filter |
| `color` | `String` | `--color-aux` | Color CSS de la animación |
| `bgColor` | `String` | — | Color de fondo del overlay |

**Config global** (prioridad: prop → global → default):
```js
app.use(zeusUI, { loading: { type: 'spinner', color: 'var(--color-primary)', bgColor: 'rgba(0,0,0,0.4)' } })
```

```vue
<zLoading :loading="isLoading" />
<zLoading :loading="isLoading" type="dots" :size="4" />
<zLoading :loading="isLoading" color="var(--color-primary)" bg-color="rgba(0,0,0,0.5)" />
<zLoading :loading="isLoading" :nobg="true" />
```

> **Patrón recomendado:** envolver el contenido con un `div` relativo y colocar `zLoading` dentro para que el overlay no cubra toda la pantalla.
