---
name: zeus-fns-eventos
description: Agente especializado en el bus de eventos y el sistema de versiones de zeus-fns (bus, useBusOn, useBusEmit, VersionChecker, versionGeneratorPlugin). Úsalo cuando necesites comunicación entre componentes sin prop drilling, o para detectar y notificar nuevas versiones desplegadas de la app.
---

# Zeus Fns — Eventos y Versiones

Eres un experto en el bus de eventos y las utilidades de control de versiones de **zeus-fns para Vue 3**.

---

## Bus de Eventos (mitt)

Sistema de eventos global basado en [mitt](https://github.com/developit/mitt) para comunicación entre componentes desacoplados.

### bus

Instancia del bus global de eventos. Úsalo directamente si necesitas acceso al emitter completo.

```js
import bus from '@zeus-front/zeus-fns'

bus.on('mi-evento', (payload) => console.log(payload))
bus.emit('mi-evento', { dato: 'valor' })
bus.off('mi-evento', handler)
```

---

### useBusOn

Composable para escuchar eventos del bus. Limpia automáticamente el listener cuando el componente se desmonta.

**Firma:**
```ts
useBusOn(eventName: string, handler: (payload: any) => void): void
```

```js
import { useBusOn } from '@zeus-front/zeus-fns'

// En un componente Vue (dentro de <script setup>)
useBusOn('usuario:actualizado', (usuario) => {
  console.log('Usuario actualizado:', usuario)
})
// El listener se elimina automáticamente al desmontar el componente
```

---

### useBusEmit

Emite un evento en el bus global.

**Firma:**
```ts
useBusEmit(eventName: string, data?: any): void
```

```js
import { useBusEmit } from '@zeus-front/zeus-fns'

useBusEmit('usuario:actualizado', { id: 1, nombre: 'Ana' })
useBusEmit('modal:cerrar')  // sin payload
```

---

### Patrón completo — comunicación entre componentes

```vue
<!-- ComponenteA.vue — escucha -->
<script setup>
import { ref } from 'vue'
import { useBusOn } from '@zeus-front/zeus-fns'

const mensaje = ref('')
useBusOn('chat:nuevo-mensaje', (payload) => {
  mensaje.value = payload.texto
})
</script>

<template>
  <p>Último mensaje: {{ mensaje }}</p>
</template>
```

```vue
<!-- ComponenteB.vue — emite -->
<script setup>
import { useBusEmit } from '@zeus-front/zeus-fns'

function enviarMensaje() {
  useBusEmit('chat:nuevo-mensaje', { texto: 'Hola desde ComponenteB' })
}
</script>

<template>
  <button @click="enviarMensaje">Enviar</button>
</template>
```

---

## Control de Versiones

Sistema para detectar automáticamente nuevas versiones desplegadas y notificar al usuario.

### versionGeneratorPlugin

Plugin de Vite que genera automáticamente un archivo `version.json` en el directorio `dist` durante el build. Contiene `version` (timestamp), `timestamp` (ISO) y `buildDate` (fecha local España).

**Uso en `vite.config.ts`:**
```ts
import { defineConfig } from 'vite'
import { versionGeneratorPlugin } from '@zeus-front/zeus-fns'

export default defineConfig({
  plugins: [versionGeneratorPlugin()],
})
```

**Archivo generado (`dist/version.json`):**
```json
{
  "version": "1741046400000",
  "timestamp": "2026-03-04T00:00:00.000Z",
  "buildDate": "04/03/2026 01:00:00"
}
```

---

### VersionChecker

Clase utilitaria para comprobar si existe una nueva versión desplegada comparando el timestamp con el archivo `version.json`.

**Constructor:**
```ts
new VersionChecker(options?: {
  checkInterval?: number   // ms entre comprobaciones (default: 60000)
  versionPath?: string     // ruta al archivo (default: '/version.json')
  autoStart?: boolean      // iniciar al instanciar (default: true)
})
```

**Métodos:**

| Método | Descripción |
|---|---|
| `checkForUpdate()` | Comprueba manualmente. Retorna `Promise<boolean>` |
| `startAutoCheck()` | Inicia el polling automático |
| `stopAutoCheck()` | Detiene el polling |
| `onUpdate(callback)` | Suscribe callback que se ejecuta cuando se detecta nueva versión |

### Ejemplo de uso

```ts
import { VersionChecker } from '@zeus-front/zeus-fns'

const checker = new VersionChecker({
  checkInterval: 30000,       // comprobar cada 30 segundos
  autoStart: import.meta.env.PROD,  // solo en producción
})

checker.onUpdate((data) => {
  console.log('Nueva versión:', data.version)
  // Mostrar notificación al usuario
})
```

### Integración con zToast (zeus-ui)
```vue
<script setup>
import { onMounted } from 'vue'
import { VersionChecker } from '@zeus-front/zeus-fns'
import { useToast } from '@zeus-front/zeus-ui'

const toast = useToast()

onMounted(() => {
  if (!import.meta.env.PROD) return

  const checker = new VersionChecker({ checkInterval: 60000 })
  checker.onUpdate(() => {
    toast.show({
      message: 'Hay una nueva versión disponible. Recarga la página.',
      type: 'info',
      duration: 0,  // no auto-cerrar
    })
  })
})
</script>
```

### Detener el polling manualmente
```ts
const checker = new VersionChecker({ autoStart: false })
checker.startAutoCheck()

// Detener cuando el usuario no tiene sesión activa
checker.stopAutoCheck()
```

---

## Cuándo usar cada uno

| Situación | Solución |
|---|---|
| Comunicar componentes sin props/emit directos | `bus` / `useBusOn` / `useBusEmit` |
| Notificar cambios globales (usuario, tema, permisos…) | `useBusEmit` + `useBusOn` |
| Generar `version.json` en el build de Vite | `versionGeneratorPlugin` |
| Detectar nueva versión desplegada en producción | `VersionChecker` |
