/**
 * Guías de control parental por dispositivo (estructura y datos no-textuales).
 *
 * Los textos (tool, intro, docs[].label, steps[].{title,detail,substeps},
 * tips[]) viven en el locale en `ps.guides.{deviceId}` con la misma forma
 * que aquí. Este archivo conserva solo la dificultad, tiempo, URLs y nº de
 * pasos por dispositivo.
 */

export const DIFFICULTY_KEYS = ['facil', 'medio', 'avanzado']

export const DIFFICULTY_COLORS = {
  facil: 'var(--color-ps-easy)',
  medio: 'var(--color-ps-medium)',
  avanzado: 'var(--color-ps-advanced)',
}

/**
 * Para cada guía: difficulty, timeMinutes, URLs de docs alineadas por índice
 * con las labels del locale, y stepsCount (nº de items del checklist).
 */
export const GUIDES = {
  'android-phone': {
    difficulty: 'medio',
    timeMinutes: 20,
    docs: [
      'https://support.google.com/families/answer/7101025?hl=es',
      'https://support.google.com/families/answer/16398726?hl=es',
    ],
    stepsCount: 6,
  },
  iphone: {
    difficulty: 'facil',
    timeMinutes: 15,
    docs: ['https://support.apple.com/es-es/105121', 'https://support.apple.com/es-es/105062'],
    stepsCount: 6,
  },
  'android-tablet': {
    difficulty: 'medio',
    timeMinutes: 20,
    docs: [
      'https://support.google.com/families/answer/7101025?hl=es',
      'https://support.google.com/families/answer/16398726?hl=es',
    ],
    stepsCount: 5,
  },
  ipad: {
    difficulty: 'facil',
    timeMinutes: 15,
    docs: ['https://support.apple.com/es-es/105121', 'https://support.apple.com/es-es/108806'],
    stepsCount: 5,
  },
  playstation: {
    difficulty: 'medio',
    timeMinutes: 25,
    docs: [
      'https://www.playstation.com/es-es/support/account/ps5-parental-controls-spending-limits/',
      'https://www.playstation.com/es-es/parental-controls/',
    ],
    stepsCount: 5,
  },
  xbox: {
    difficulty: 'medio',
    timeMinutes: 25,
    docs: [
      'https://support.xbox.com/es-ES/help/family-online-safety/family-settings-app/family-settings-app-info',
      'https://support.microsoft.com/es-ES/family-safety/set-up-microsoft-family-safety',
    ],
    stepsCount: 5,
  },
  switch: {
    difficulty: 'facil',
    timeMinutes: 15,
    docs: ['https://www.nintendo.com/us/mobile-apps/parental-controls/'],
    stepsCount: 5,
  },
  smarttv: {
    difficulty: 'medio',
    timeMinutes: 20,
    docs: [
      'https://support.google.com/youtubekids/answer/6172308?hl=es',
      'https://help.netflix.com/es/node/264',
    ],
    stepsCount: 5,
  },
  windows: {
    difficulty: 'medio',
    timeMinutes: 20,
    docs: [
      'https://support.microsoft.com/es-ES/family-safety/set-up-microsoft-family-safety',
      'https://www.microsoft.com/es-es/microsoft-365/family-safety',
    ],
    stepsCount: 5,
  },
  mac: {
    difficulty: 'medio',
    timeMinutes: 20,
    docs: ['https://support.apple.com/es-es/105121', 'https://support.apple.com/es-es/105062'],
    stepsCount: 5,
  },
  chromebook: {
    difficulty: 'medio',
    timeMinutes: 20,
    docs: [
      'https://support.google.com/families/answer/7680868?hl=es',
      'https://support.google.com/families/answer/7101025?hl=es',
    ],
    stepsCount: 5,
  },
}

export function getGuide(deviceId) {
  return GUIDES[deviceId] || null
}

/** Devuelve el número total de pasos (= ítems de checklist) de un dispositivo. */
export function getStepCount(deviceId) {
  return GUIDES[deviceId]?.stepsCount || 0
}

/** Id estable de un paso, usado como clave en el progreso guardado. */
export function stepId(deviceId, index) {
  return `${deviceId}:${index}`
}
