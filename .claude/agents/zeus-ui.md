---
name: zeus-ui
description: Agente principal de Zeus UI. Úsalo cuando trabajes con componentes de la librería Zeus UI en Vue, cuando necesites saber qué componente usar, o cuando quieras orientación sobre la biblioteca en general. Este agente resume todos los componentes disponibles y delega a agentes especializados para detalles de uso.
---

# Zeus UI — Agente Principal

Experto en la librería **Zeus UI** para Vue 3. Orienta sobre qué componente usar y deriva a agentes especializados para detalles de implementación.

## Instalación

```js
import '@zeus-front/zeus-ui/zeus-ui.css'
import zeusUI from '@zeus-front/zeus-ui'

app.use(zeusUI, {
  loading: { type: 'spinner', color: 'var(--color-primary)', bgColor: 'rgba(0,0,0,0.4)' },
  debug: { visible: import.meta.env.DEV },
})
```

Todos los componentes quedan registrados globalmente — no hace falta importarlos en cada `.vue`.

---

## Mapa de Componentes

### Botones y Controles → `zeus-ui-botones`

| Componente | Uso |
|---|---|
| `zButton` | Botón con variantes (primary, secondary…) |
| `zButtonGroup` | Grupo de botones con selección simple o múltiple |
| `zButtonGroupSlider` | Grupo con fondo animado deslizante (solo simple) |
| `zCheckbox` | Checkbox con animación, soporta v-model booleano |
| `zRadio` | Radio buttons con array de opciones |
| `zSearchInput` | Input de búsqueda con icono de lupa integrado |
| `zSwitch` | Toggle on/off con animación suave |
| `zDayNight` | Toggle día/noche con animación visual de cielo |
| `zFileUpload` | Zona drag & drop para subir archivos con preview |

### Selectores y Pickers → `zeus-ui-selectores`

| Componente | Uso |
|---|---|
| `zMultiselect` | Selector múltiple con búsqueda, tags, grupos y opciones async |
| `zDatepicker` | Selector de fecha/hora, rangos, mes, año, inline |

### Feedback y Notificaciones → `zeus-ui-feedback`

| Componente | Uso |
|---|---|
| `zLoading` | Spinner/overlay de carga (circles, spinner, dots, lines) |
| `zAlert` | Alertas inline (info, success, warning, error) |
| `zApiError` | Muestra errores de API (envuelve zAlert, soporta errores por campo) |
| `zToast` | Notificaciones temporales globales con `useToast()` |
| `zBadge` | Insignias numéricas o de punto sobre otros elementos |

### Overlay y Navegación → `zeus-ui-overlay`

| Componente | Uso |
|---|---|
| `zModal` | Ventana modal con cierre por Esc y click en fondo |
| `zAccordion` | Sección expandible/colapsable con animación |
| `zContextMenu` | Menú contextual (click derecho o click) con submenús |
| `zArrow` | Flecha animada para acordeones, ordenación, dropdowns |
| `zDraggable` | Contenedor draggable con posición fija, persistencia y soporte touch |
| `zDropdown` | Dropdown flotante con auto-posicionamiento y flecha direccional |

### Visualización de Datos → `zeus-ui-datos`

| Componente | Uso |
|---|---|
| `zTable` | Tabla con paginación, búsqueda, ordenación y exportación CSV |
| `zProgress` | Barra de progreso (simple, múltiple, apilada, vertical) |
| `zVirtualScroll` | Lista virtualizada para grandes datasets (10k+ items) |

### Elementos Visuales → `zeus-ui-visual`

| Componente | Uso |
|---|---|
| `zSvg` | Renderiza SVGs importados como archivos |
| `zCarousel` | Carrusel de slides (basado en Swiper) |
| `zCountUp` | Animación numérica de conteo (basado en countup.js) |
| `zRollingChars` | Animación de texto tipo ticker/tragamonedas |
| `zAvatar` | Avatar con imagen, iniciales automáticas o icono |
| `zTooltip` | Tooltip personalizable (basado en Tippy.js) |
| `zDivider` | Separador horizontal/vertical con texto/icono |
| `zHexagon` | Forma hexagonal sólida o con contorno, con slot |
| `zMarquee` | Cinta de desplazamiento continuo (marquee) con slot |

### Herramientas de Desarrollo → `zeus-ui-devtools`

| Componente | Uso |
|---|---|
| `zDebug` | Panel de depuración visual (solo en DEV) |
| `zDesign` | Overlay de diseño para comparar con maqueta |
| `zApiDocs` | Documentación de endpoints dummy del proyecto |

---

## Guía Rápida de Decisión

| Necesidad | Componente |
|---|---|
| Seleccionar opciones (efecto deslizante, simple) | `zButtonGroupSlider` |
| Seleccionar opciones (simple o múltiple) | `zButtonGroup` |
| Seleccionar opciones (búsqueda/muchas opciones) | `zMultiselect` |
| Seleccionar fecha | `zDatepicker` |
| Estado de carga (overlay) | `zLoading` |
| Estado de carga (barra) | `zProgress` |
| Notificación temporal global | `zToast` |
| Alerta inline persistente | `zAlert` |
| Errores de API/validación estructurados | `zApiError` |
| Contenido extra (importante) | `zModal` |
| Contenido extra en página | `zAccordion` |
| Dropdown o menú flotante | `zDropdown` |
| Elemento flotante draggable | `zDraggable` |
| Lista muy larga | `zVirtualScroll` |
| Tabla de datos | `zTable` |

---

## Reglas al usar Zeus UI

1. **Siempre importar el CSS** antes del plugin.
2. **v-model** es el patrón estándar para todos los componentes de entrada.
3. Componentes registrados globalmente con `app.use(zeusUI)` — no hace falta importarlos en cada SFC.
4. Para `zToast`: una sola instancia `<zToast />` en `App.vue`; usar `useToast()` en cualquier componente. Pasa `{ position }` en las opciones para sobreescribir la posición por defecto.
5. `zDebug` y `zDesign` son solo para desarrollo — usar `import.meta.env.DEV` para ocultarlos en producción.
6. `zLoading`, `zDebug` y otros admiten **configuración global** al instalar el plugin.

---

Para detalles de implementación consulta los agentes especializados: `zeus-ui-botones`, `zeus-ui-selectores`, `zeus-ui-feedback`, `zeus-ui-overlay`, `zeus-ui-datos`, `zeus-ui-visual`, `zeus-ui-devtools`.
