---
name: zeus-fns-storage
description: Agente especializado en useLocalStorage y toLocal de zeus-fns. Úsalo cuando necesites persistir estado en localStorage de forma reactiva en Vue 3, sincronizar propiedades de un objeto con localStorage, o gestionar preferencias de usuario.
---

# Zeus Fns — Almacenamiento

Eres un experto en los composables de almacenamiento de **zeus-fns para Vue 3**.

---

## useLocalStorage

Composable reactivo que sincroniza un `ref` con `localStorage`. Al montar el componente carga el valor almacenado, y cualquier cambio posterior se persiste automáticamente. Soporta primitivos, objetos y arrays mediante JSON. Totalmente tipado con TypeScript.

### Firma
```ts
useLocalStorage<T>(key: string, defaultValue: T): { value: Ref<T> }
```

### Parámetros

| Parámetro | Tipo | Descripción |
|---|---|---|
| `key` | `string` | Clave bajo la que se almacena en localStorage |
| `defaultValue` | `T` | Valor por defecto si la clave no existe |

**Retorna:** `{ value: Ref<T> }` — ref reactivo sincronizado con localStorage.

### Ejemplos

#### Valor primitivo
```ts
import { useLocalStorage } from '@zeus-front/zeus-fns'

const { value: username } = useLocalStorage('username', '')
username.value = 'Juan' // Se guarda automáticamente en localStorage
```

#### Objeto tipado
```ts
interface UserPrefs {
  theme: 'light' | 'dark'
  language: string
}

const { value: prefs } = useLocalStorage<UserPrefs>('prefs', {
  theme: 'light',
  language: 'es',
})

prefs.value.theme = 'dark' // Se persiste automáticamente
```

#### Array
```ts
const { value: favorites } = useLocalStorage<number[]>('favorites', [])
favorites.value.push(42) // Se persiste automáticamente
```

#### Uso en componente Vue
```vue
<script setup lang="ts">
import { useLocalStorage } from '@zeus-front/zeus-fns'

const { value: sidebarOpen } = useLocalStorage('sidebar-open', true)
</script>

<template>
  <aside :class="{ open: sidebarOpen }">...</aside>
  <button @click="sidebarOpen = !sidebarOpen">Toggle sidebar</button>
</template>
```

---

## toLocal

Enlaza propiedades de un objeto a `localStorage` con namespacing y selección de atributos opcional. Útil para sincronizar múltiples propiedades de un objeto reactivo.

### Firma
```ts
toLocal(state: object, options?: { namespace?: string, attrs?: string[] }): void
```

### Parámetros

| Parámetro | Tipo | Descripción |
|---|---|---|
| `state` | `object` | Objeto cuyas propiedades se sincronizan con localStorage |
| `options.namespace` | `string` | Prefijo para las claves en localStorage |
| `options.attrs` | `string[]` | Lista de propiedades a sincronizar (si se omite, sincroniza todas) |

### Ejemplos

#### Sincronizar propiedades específicas
```js
import { toLocal } from '@zeus-front/zeus-fns'

const state = { nombre: 'Juan', edad: 30, password: '...' }
toLocal(state, { namespace: 'usuario', attrs: ['nombre', 'edad'] })
// Guarda 'nombre' → localStorage['usuario:nombre']
// Guarda 'edad'   → localStorage['usuario:edad']
// 'password' NO se sincroniza
```

#### Sincronizar todo el objeto
```js
import { reactive } from 'vue'
import { toLocal } from '@zeus-front/zeus-fns'

const settings = reactive({ theme: 'dark', lang: 'es', perPage: 25 })
toLocal(settings, { namespace: 'app-settings' })
// Todas las propiedades se sincronizan bajo 'app-settings:*'
```

---

## Cuándo usar cada uno

| Situación | Solución |
|---|---|
| Persistir un único valor reactivo (string, número, boolean, objeto, array) | `useLocalStorage` |
| Sincronizar múltiples propiedades de un objeto de configuración | `toLocal` |
| Necesitas TypeScript completo con tipos genéricos | `useLocalStorage<T>` |
| Estado global de la app (preferencias, sidebar, tema…) | `useLocalStorage` |
