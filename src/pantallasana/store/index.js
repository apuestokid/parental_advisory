import { reactive, computed } from 'vue'
import { DEVICES } from '@/pantallasana/data/devices'
import { getStepCount, stepId } from '@/pantallasana/data/guides'

const STORAGE_KEY = 'pantallasana'

/**
 * Estado persistente de PantallaSana (sin registro, todo local).
 * - selectedDevices: ids de dispositivos elegidos en el onboarding.
 * - completedSteps: ids de pasos marcados como hechos ("deviceId:index").
 * - onboarded: si ya completó la selección inicial.
 */
function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    return JSON.parse(raw)
  } catch {
    return null
  }
}

const persisted = loadState()

export const state = reactive({
  selectedDevices: persisted?.selectedDevices ?? [],
  completedSteps: persisted?.completedSteps ?? [],
  onboarded: persisted?.onboarded ?? false,
})

function persist() {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        selectedDevices: state.selectedDevices,
        completedSteps: state.completedSteps,
        onboarded: state.onboarded,
      })
    )
  } catch {
    // almacenamiento no disponible: la app sigue funcionando en memoria
  }
}

export const actions = {
  toggleDevice(id) {
    const i = state.selectedDevices.indexOf(id)
    if (i === -1) state.selectedDevices.push(id)
    else state.selectedDevices.splice(i, 1)
    persist()
  },
  setDevices(ids) {
    state.selectedDevices = [...ids]
    persist()
  },
  finishOnboarding() {
    state.onboarded = true
    persist()
  },
  toggleStep(id) {
    const i = state.completedSteps.indexOf(id)
    if (i === -1) state.completedSteps.push(id)
    else state.completedSteps.splice(i, 1)
    persist()
  },
  isStepDone(id) {
    return state.completedSteps.includes(id)
  },
  resetAll() {
    state.selectedDevices = []
    state.completedSteps = []
    state.onboarded = false
    persist()
  },
}

/** Dispositivos seleccionados, en el orden del catálogo. */
export const selectedDeviceList = computed(() =>
  DEVICES.filter(d => state.selectedDevices.includes(d.id))
)

/** Pasos completados de un dispositivo concreto. */
export function deviceProgress(deviceId) {
  const total = getStepCount(deviceId)
  if (!total) return { done: 0, total: 0, percent: 0 }
  let done = 0
  for (let i = 0; i < total; i++) {
    if (state.completedSteps.includes(stepId(deviceId, i))) done++
  }
  return { done, total, percent: Math.round((done / total) * 100) }
}

/** Nivel de protección familiar: % de pasos completados sobre el total de los dispositivos elegidos. */
export const protectionLevel = computed(() => {
  const totals = state.selectedDevices.reduce(
    (acc, id) => {
      const { done, total } = deviceProgress(id)
      acc.done += done
      acc.total += total
      return acc
    },
    { done: 0, total: 0 }
  )
  const percent = totals.total ? Math.round((totals.done / totals.total) * 100) : 0
  return { ...totals, percent }
})
