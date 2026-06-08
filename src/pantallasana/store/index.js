import { reactive, computed } from 'vue'
import { DEVICES } from '@/pantallasana/data/devices'
import { getStepCount, stepId } from '@/pantallasana/data/guides'
import { supabase } from '@/pantallasana/supabase/client'

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

/** Snapshot serializable del estado (lo que viaja a localStorage y a la nube). */
function snapshot() {
  return {
    selectedDevices: state.selectedDevices,
    completedSteps: state.completedSteps,
    onboarded: state.onboarded,
  }
}

/** Escribe solo en localStorage (caché offline). */
function persistLocal() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(snapshot()))
  } catch {
    // almacenamiento no disponible: la app sigue funcionando en memoria
  }
}

// --- Sincronización con Supabase (opcional) -------------------------------
// Solo activa si hay credenciales (supabase != null) y sesión iniciada.
let syncUserId = null
let pushTimer = null

/** Sube el estado actual a la nube (debounced para no saturar en cada clic). */
function schedulePush() {
  if (!supabase || !syncUserId) return
  clearTimeout(pushTimer)
  pushTimer = setTimeout(pushRemote, 800)
}

async function pushRemote() {
  if (!supabase || !syncUserId) return
  try {
    await supabase
      .from('user_settings')
      .upsert({ user_id: syncUserId, data: snapshot(), updated_at: new Date().toISOString() })
  } catch {
    // sin conexión: queda guardado en local y se reintentará en el próximo cambio
  }
}

/** Aplica una config remota al estado local (la remota gana). */
function applyRemote(data) {
  state.selectedDevices = data.selectedDevices ?? []
  state.completedSteps = data.completedSteps ?? []
  state.onboarded = data.onboarded ?? false
  persistLocal()
}

/**
 * Al iniciar sesión: la config remota gana. Si aún no hay fila remota
 * (primer login), se sube la local para no perder el progreso anónimo.
 */
export async function pullRemote(userId) {
  if (!supabase) return
  try {
    const { data, error } = await supabase
      .from('user_settings')
      .select('data')
      .eq('user_id', userId)
      .maybeSingle()
    if (error) return
    if (data?.data && Object.keys(data.data).length) {
      applyRemote(data.data) // remoto gana
      syncUserId = userId
    } else {
      syncUserId = userId
      await pushRemote() // bootstrap: subir la config local existente
    }
  } catch {
    // sin conexión: seguimos con la config local
  }
}

/** Llamar al cerrar sesión: deja de sincronizar (los datos locales se conservan). */
export function stopSync() {
  syncUserId = null
  clearTimeout(pushTimer)
}

/** Persiste en local y, si hay sesión, programa la subida a la nube. */
function persist() {
  persistLocal()
  schedulePush()
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
