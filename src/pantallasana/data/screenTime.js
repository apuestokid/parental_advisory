/**
 * Calculadora de tiempo de pantalla.
 * Basado en recomendaciones de la OMS y la Academia Americana de Pediatría (AAP).
 * Los textos visibles (label, note, descripción, label de actividades) viven en
 * `ps.brackets.{id}` y `ps.activities.{id}`. Aquí solo edades, factores y minutos.
 */
export const AGE_BRACKETS = [
  { id: '2-5', min: 2, max: 5, baseMinutes: 60 },
  { id: '6-8', min: 6, max: 8, baseMinutes: 75 },
  { id: '9-11', min: 9, max: 11, baseMinutes: 90 },
  { id: '12-14', min: 12, max: 14, baseMinutes: 120 },
]

/** Factores que ajustan el tiempo base según el tipo de actividad. */
export const ACTIVITIES = [
  { id: 'educational', factor: 1.3 },
  { id: 'games', factor: 1 },
  { id: 'video', factor: 0.9 },
  { id: 'social', factor: 0.8 },
]

export function getBracketForAge(age) {
  return AGE_BRACKETS.find(b => age >= b.min && age <= b.max) || null
}

/**
 * Calcula una recomendación orientativa de minutos/día.
 * @param {number} age edad del niño
 * @param {string[]} activityIds actividades seleccionadas
 * @returns {{minutes:number, bracket:object}|null}
 */
export function recommendScreenTime(age, activityIds = []) {
  const bracket = getBracketForAge(age)
  if (!bracket) return null

  const selected = ACTIVITIES.filter(a => activityIds.includes(a.id))
  const avgFactor = selected.length
    ? selected.reduce((sum, a) => sum + a.factor, 0) / selected.length
    : 1

  let minutes = Math.round((bracket.baseMinutes * avgFactor) / 5) * 5
  minutes = Math.max(30, Math.min(minutes, 180))

  return { minutes, bracket }
}
