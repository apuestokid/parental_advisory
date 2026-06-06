---
name: zeus-ui-feedback
description: Agente especializado en los componentes de feedback y notificaciones de Zeus UI: zLoading, zAlert, zApiError, zToast y zBadge. Úsalo cuando necesites mostrar estados de carga, alertas, errores de API, notificaciones temporales o insignias en Vue con Zeus UI.
---

# Zeus UI — Feedback y Notificaciones

Experto en los componentes de feedback de **Zeus UI para Vue 3**.

Documentación detallada por componente en sus agentes especializados:
- **zeus-ui-loading** → `zLoading`: Spinner/overlay de carga
- **zeus-ui-alert** → `zAlert`: Alertas inline (info, success, warning, error)
- **zeus-ui-toast** → `zToast`: Notificaciones temporales con `useToast()`. Una sola instancia `<zToast />` gestiona las 6 posiciones; cada toast puede sobreescribir la posición via `{ position }`.
- **zeus-ui-badge** → `zBadge`: Insignias y contadores

---

## zApiError

Muestra errores de API de forma estandarizada. Envuelve `zAlert` con `type="error"`. Soporta mensajes simples, objetos con errores por campo y cierre opcional. Solo se renderiza si `error` o `dataError` tienen valor.

**Props:**
| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `error` | `String` | `null` | Mensaje de error simple |
| `dataError` | `Object` | `null` | Objeto con `message` (String u Object) y `errors` (Object) opcionales |
| `closable` | `Boolean` | `true` | Mostrar botón de cierre |

**Evento:** `@close` — emitido al cerrar la alerta.

**Comportamiento:**
- `dataError.message` como **objeto** → itera claves mostrando `key: value`.
- `dataError.message` como **string** → lo muestra como título e itera `dataError.errors` por campo.
- Solo `error` (string) → mensaje único.

```vue
<!-- Error simple -->
<zApiError error="Something went wrong" @close="clearError" />

<!-- Error de API con validaciones por campo -->
<zApiError :dataError="{ message: 'Validation failed', errors: { email: 'Email is required', name: 'Name is too short' } }" @close="clearError" />

<!-- Mensaje como objeto -->
<zApiError :dataError="{ message: { email: 'Invalid email', password: 'Too short' } }" />

<!-- No closable -->
<zApiError error="Cannot dismiss" :closable="false" />
```

> **Patrón recomendado:** usar en formularios pasando directamente `error.response.data` del catch de axios como `dataError`.

---

## Cuándo usar cada uno

| Situación | Componente |
|---|---|
| Esperar respuesta de API / carga de datos | `zLoading` |
| Mensaje de resultado de una acción (guardado, error) | `zToast` |
| Advertencia o información contextual en la página | `zAlert` |
| Errores de API / validación del backend | `zApiError` |
| Contador sobre un icono/botón (notificaciones no leídas) | `zBadge` |
| Estado de un item en una lista | `zBadge` como standalone |

**`zToast` vs `zAlert` vs `zApiError`:**
- `zToast`: notificación temporal que desaparece sola, para confirmaciones de acciones.
- `zAlert`: mensaje persistente en el layout, para avisos importantes que el usuario debe leer.
- `zApiError`: errores de API con estructura de campos, ideal en formularios.
