# PantallaSana — Prompt de Desarrollo y Features

> Documento de referencia para el desarrollo de una PWA de control parental orientada a familias con hijos escolarizados de 6 a 14 años.

---

## 📋 Prompt para el desarrollo de la app

Desarrolla una PWA llamada **"PantallaSana"** orientada a padres y madres de niños de entre 6 y 14 años, preocupados por el uso de pantallas. El objetivo es guiar al usuario de forma personalizada hacia la información de control parental relevante según los dispositivos que tiene en casa, evitando abrumarlo con contenido irrelevante.

---

### Flujo principal de la app

#### 1. Onboarding conversacional

Al entrar por primera vez, la app pregunta qué dispositivos tiene el usuario en casa mediante una **selección visual interactiva** (iconos grandes y claros):

- Smartphone Android
- iPhone
- Tablet Android
- iPad
- Consola PlayStation
- Xbox
- Nintendo Switch
- Smart TV
- PC Windows
- Mac
- Chromebook

El usuario puede seleccionar varios dispositivos simultáneamente.

#### 2. Dashboard personalizado

Tras la selección, se genera un **panel de control adaptado exclusivamente** a los dispositivos elegidos. Cada dispositivo tiene su propia "ficha" con métodos de control parental paso a paso.

#### 3. Fichas de dispositivo

Cada ficha incluye:

- Nivel de dificultad de configuración (fácil / medio / avanzado)
- Tiempo estimado de configuración
- Capturas de pantalla o ilustraciones de los pasos
- Checklist de acciones completadas

#### 4. Sección de herramientas transversales

Aplicaciones de control parental multiplataforma con comparativa clara:

- Google Family Link
- Apple Screen Time
- Qustodio
- Bark
- Norton Family
- Otras

#### 5. Contenido educativo para padres

Breves guías sobre:

- Tiempo de pantalla recomendado por edad
- Cómo hablar con los hijos sobre el uso de dispositivos
- Señales de alerta a tener en cuenta

#### 6. Progreso y gamificación leve

El usuario puede marcar qué configuraciones ya ha completado, viendo su **"nivel de protección familiar"** aumentar visualmente conforme avanza.

---

### Requisitos técnicos

| Requisito            | Detalle                                             |
| -------------------- | --------------------------------------------------- |
| PWA instalable       | Manifest + Service Worker con soporte offline       |
| Almacenamiento local | localStorage o IndexedDB (sin registro obligatorio) |
| Diseño               | Responsive, accesible (WCAG AA), fuente grande      |
| Lenguaje             | Llano, no técnico, en español                       |
| Privacidad           | Sin registro obligatorio                            |
| Exportación          | Checklist de configuraciones exportable a PDF       |
| Idioma principal     | Español                                             |

---

### Tono y estética

- **Tono:** Amigable, cálido, sin alarmismo
- **Colores:** Que transmitan seguridad y confianza (evitar rojo/alarma)
- **Ilustraciones:** Simples, de familias o dispositivos
- **Lenguaje:** Directo para adultos no técnicos

---

## 💡 Features sugeridas

### 🟢 Core — MVP

- [x] Selector visual de dispositivos en el onboarding
- [x] Dashboard filtrado por dispositivos del usuario
- [x] Fichas paso a paso por dispositivo (con ilustraciones tipo emoji; capturas pendientes)
- [x] Checklist de configuraciones con progreso guardado localmente
- [x] Modo offline (PWA)

---

### 🔵 Alta utilidad

- [x] **Comparador de apps de control parental**
  Tabla filtrable por precio, plataformas compatibles, edad objetivo y funciones (límite de tiempo, filtro web, geolocalización, etc.)

- [x] **Buscador rápido**
  Ejemplo: _"¿Cómo bloqueo YouTube en Nintendo Switch?"_ → respuesta directa y concreta

- [x] **"Nivel de protección familiar"**
  Indicador visual (0–100%) que aumenta conforme el padre completa configuraciones en cada dispositivo

- [ ] **Guía de conversación con los hijos**
  Scripts y consejos adaptados por rango de edad (6–8, 9–11, 12–14 años)

- [ ] **Alertas y actualizaciones**
  Notificaciones push cuando cambian las opciones de control parental en iOS/Android tras una actualización del sistema

---

### 🟡 Diferenciadores

- **Asistente IA integrado**
  Chat sencillo donde el padre describe su problema (ej: _"mi hijo de 10 años se conecta de madrugada con la Switch"_) y recibe pasos concretos y personalizados

- **Modo "revisión rápida"**
  Checklist de 5 minutos para evaluar el estado actual de protección de cada dispositivo registrado

- **Calculadora de tiempo de pantalla**
  Introduce la edad y actividades del niño, y sugiere límites razonables basados en recomendaciones pediátricas (OMS, AAP, SEEN)

- **Sección "Trampas frecuentes"**
  Los trucos más habituales que usan los niños para saltarse los controles y cómo neutralizarlos

- **Exportar plan familiar en PDF**
  Resumen de todos los dispositivos configurados, con el checklist de estado, para tenerlo de referencia impreso o guardado

---

### 🟣 Comunidad — Versión avanzada

- Foro o sección de preguntas frecuentes moderado por padres
- Valoraciones de utilidad en cada ficha (_"¿Te ha sido útil este paso?"_)
- Posibilidad de compartir configuraciones entre familias del mismo centro escolar

---

## 🗺️ Roadmap sugerido

```
Fase 1 — MVP (4–6 semanas)                                   ✅ COMPLETADA
  └── Onboarding + Dashboard + Fichas básicas + PWA offline

Fase 2 — Utilidad (4 semanas)                                ✅ COMPLETADA
  └── Comparador de apps + Buscador + Calculadora de pantalla

Fase 3 — Diferenciación (6 semanas)                          ⏸️ EN PAUSA
  └── Asistente IA + Modo revisión rápida + Export PDF

Fase 4 — Comunidad (según demanda)                           ⏸️ EN PAUSA
  └── Foro moderado + Valoraciones + Compartir entre familias

➡️ Estado actual: iterando y puliendo lo entregado en Fases 1 y 2.
```

---

## 🛠️ Estado de implementación

> Bitácora del desarrollo real, para mantener el documento alineado con el código.

### Stack y arquitectura

Construido sobre el boilerplate **Vue 3 + Vite + Tailwind CSS v4 + Zeus UI**. Todo el código
del producto vive aislado en `src/pantallasana/` para no mezclarse con la plantilla base.

- **App pública sin registro** (requisito de privacidad): se monta en `/` a través de
  `src/router/guards/publicGuard.js`. El demo del boilerplate se movió a `/demo`.
- **Tema propio cálido** en `src/assets/css/pantallasana.css` (tokens `--color-ps-*`, clase
  raíz `.ps-app`): verde confianza + ámbar, sin rojos de alarma, fuente grande y foco accesible.
- **Persistencia local** con `localStorage` (clave `pantallasana`) en
  `src/pantallasana/store/index.js`. Sin backend ni cuentas.
- **Idioma**: contenido en español _inline_ (producto monolingüe), no vía i18n.

### Mapa de archivos

| Área                  | Ubicación                                              |
| --------------------- | ------------------------------------------------------ |
| Datos de contenido    | `src/pantallasana/data/` (devices, guides, apps, screenTime, faqs, search) |
| Estado + persistencia | `src/pantallasana/store/index.js`                      |
| Vistas                | `src/pantallasana/views/` (Onboarding, Dashboard, DeviceGuide, Comparator, Search, Calculator, Layout) |
| Componentes           | `src/pantallasana/components/` (ProtectionRing, DifficultyBadge) |
| PWA                   | `public/manifest.webmanifest`, `public/sw.js`, `public/icon.svg`, `src/pantallasana/pwa.js` |
| Rutas                 | `src/pantallasana/routes.js`                           |

### Fase 1 — entregado

- Onboarding visual con multi-selección de los 11 dispositivos, agrupados por categoría.
- Dashboard filtrado por dispositivos del usuario con accesos a herramientas y contenido educativo.
- **Nivel de protección familiar** (anillo 0–100%) calculado sobre los pasos completados.
- Fichas por dispositivo con dificultad, tiempo estimado, pasos accionables como **checklist**
  con progreso guardado, consejos y estado "completado". Contenido real para los 11 dispositivos.
- **PWA offline**: manifest + service worker (network-first en navegación, stale-while-revalidate
  en assets), instalable, con botón "Instalar app".

### Fase 2 — entregado

- **Comparador**: tabla filtrable por plataforma, precio y funciones (tabla en escritorio,
  tarjetas en móvil). 6 apps catalogadas.
- **Buscador rápido**: búsqueda tolerante a acentos sobre guías, pasos y FAQs, con sugerencias
  y enlaces directos a las fichas.
- **Calculadora de tiempo de pantalla**: recomendación orientativa por edad y tipo de uso
  (referencias OMS / AAP).

### Decisiones y notas

- Las "capturas de pantalla" de las fichas se representan de momento con iconos/emoji; pendiente
  sustituir por ilustraciones o capturas reales.
- El service worker se activa en build servido (`npm run preview` / producción), no en
  `vite dev`.
- Pendiente de Fase 2 original: la exportación del plan a PDF se reservó para la Fase 3.

---

## 📚 Referencias y recursos útiles

- [Google Family Link](https://families.google.com/familylink/)
- [Apple Screen Time](https://support.apple.com/es-es/HT208982)
- [Qustodio](https://www.qustodio.com/es/)
- [Bark](https://www.bark.us/)
- Recomendaciones de la OMS sobre tiempo de pantalla por edad
- Guía de la AEPD sobre menores y tecnología
- Is My Child Ready? — American Academy of Pediatrics (AAP)

---

_Documento generado como base para el desarrollo de PantallaSana — Junio 2026_
