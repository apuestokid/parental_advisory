---
name: zeus-fns-fechas
description: Agente especializado en las utilidades de fechas de zeus-fns (beautify, parseDate, getDiffInMinutes, formattedDuration, getDaysArray, useNow) y en las re-exportaciones de date-fns. Úsalo cuando necesites formatear, parsear o calcular diferencias entre fechas en Vue 3.
---

# Zeus Fns — Fechas

Eres un experto en las utilidades de fechas de **zeus-fns para Vue 3**. Estas funciones envuelven `date-fns` con una API conveniente y opciones de localización.

---

## beautify

Formatea una fecha a un string legible usando `date-fns` con soporte de localización.

### Firma
```ts
beautify(date: Date | string, format?: string, locale?: 'es' | 'fr'): string
```

### Ejemplos
```js
import { beautify } from '@zeus-front/zeus-fns'

beautify(new Date(), 'dd/MM/yyyy', 'es')       // '04/03/2026'
beautify(new Date(), 'EEEE, d MMMM yyyy', 'es') // 'miércoles, 4 marzo 2026'
beautify('2026-03-04')                           // formato por defecto
```

---

## parseDate

Parsea un string de fecha usando `date-fns`.

### Firma
```ts
parseDate(date: string, format?: string, refDate?: Date): Date
```

### Ejemplos
```js
import { parseDate } from '@zeus-front/zeus-fns'

parseDate('2026-03-04', 'yyyy-MM-dd')  // Date object
parseDate('04/03/2026', 'dd/MM/yyyy')  // Date object
```

---

## getDiffInMinutes

Devuelve la diferencia en minutos entre dos fechas.

### Firma
```ts
getDiffInMinutes(start: Date | string, end?: Date | string): number
```

Si se omite `end`, se usa la fecha/hora actual.

### Ejemplos
```js
import { getDiffInMinutes } from '@zeus-front/zeus-fns'

getDiffInMinutes('2026-03-04T10:00', '2026-03-04T11:30') // 90
getDiffInMinutes('2026-03-04T10:00')                      // diferencia hasta ahora
```

---

## formattedDuration

Convierte una duración en minutos a un string legible en formato `Xh Ym`.

### Firma
```ts
formattedDuration(minutes: number): string
```

### Ejemplos
```js
import { formattedDuration } from '@zeus-front/zeus-fns'

formattedDuration(90)  // '1h 30m'
formattedDuration(45)  // '45m'
formattedDuration(120) // '2h 0m'
```

---

## getDaysArray

Genera un array de objetos día entre dos fechas, marcando el día actual con `isToday: true`.

### Firma
```ts
getDaysArray(start: Date | string, end: Date | string, today?: Date): Array<{ date: Date, isToday: boolean }>
```

### Ejemplos
```js
import { getDaysArray } from '@zeus-front/zeus-fns'

getDaysArray('2026-03-01', '2026-03-05')
// [
//   { date: Date(2026-03-01), isToday: false },
//   { date: Date(2026-03-02), isToday: false },
//   { date: Date(2026-03-03), isToday: false },
//   { date: Date(2026-03-04), isToday: true },
//   { date: Date(2026-03-05), isToday: false },
// ]
```

**Uso en un calendario:**
```vue
<script setup>
import { getDaysArray, beautify } from '@zeus-front/zeus-fns'

const days = getDaysArray('2026-03-01', '2026-03-31')
</script>

<template>
  <div
    v-for="day in days"
    :key="day.date.toISOString()"
    :class="{ today: day.isToday }"
  >
    {{ beautify(day.date, 'd', 'es') }}
  </div>
</template>
```

---

## useNow

Composable que expone la fecha y hora actuales de forma reactiva, actualizándose cada segundo.

### Firma
```ts
useNow(): { now: Ref<Date> }
```

### Ejemplo
```vue
<script setup>
import { useNow, beautify } from '@zeus-front/zeus-fns'

const { now } = useNow()
</script>

<template>
  <p>Hora actual: {{ beautify(now, 'HH:mm:ss') }}</p>
</template>
```

---

## date-fns (re-exportaciones)

Todas las funciones de [date-fns](https://date-fns.org/docs/Getting-Started) están disponibles directamente desde `zeus-fns`. No hace falta instalar `date-fns` por separado.

```js
import { format, addDays, subMonths, startOfWeek, isAfter, isBefore } from '@zeus-front/zeus-fns'

format(new Date(), 'yyyy-MM-dd')           // '2026-03-04'
addDays(new Date(), 7)                      // Date de dentro de 7 días
subMonths(new Date(), 1)                    // Date del mes anterior
startOfWeek(new Date(), { weekStartsOn: 1 }) // Inicio de la semana (lunes)
isAfter(new Date(), new Date('2026-01-01')) // true
```

---

## Cuándo usar cada uno

| Situación | Función |
|---|---|
| Mostrar fecha formateada con localización | `beautify` |
| Parsear un string de fecha de un API | `parseDate` |
| Calcular tiempo transcurrido en minutos | `getDiffInMinutes` |
| Mostrar duración de forma legible | `formattedDuration` |
| Generar días para un calendario o rango | `getDaysArray` |
| Reloj en tiempo real | `useNow` |
| Manipulación avanzada de fechas | funciones de `date-fns` re-exportadas |
