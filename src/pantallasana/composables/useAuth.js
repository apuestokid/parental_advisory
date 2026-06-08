import { reactive, computed } from 'vue'
import { supabase, isSupabaseEnabled } from '@/pantallasana/supabase/client'
import { pullRemote, stopSync } from '@/pantallasana/store'

/**
 * Autenticación opcional de PantallaSana (Supabase).
 *
 * La app funciona sin registro; quien crea cuenta sincroniza su configuración
 * entre dispositivos. Si Supabase no está configurado, todo queda inerte y la
 * app sigue siendo 100% local.
 */
const auth = reactive({
  user: null,
  profile: null, // { display_name, role }
  ready: false, // sesión inicial comprobada
})

export const currentUser = computed(() => auth.user)
export const userRole = computed(() => auth.profile?.role ?? null)
export const isLoggedIn = computed(() => Boolean(auth.user))
export const authReady = computed(() => auth.ready)

async function loadProfile(userId) {
  if (!supabase) return
  const { data } = await supabase
    .from('profiles')
    .select('display_name, role')
    .eq('id', userId)
    .maybeSingle()
  auth.profile = data ?? null
}

async function onSignedIn(user) {
  auth.user = user
  await loadProfile(user.id)
  await pullRemote(user.id)
}

/** Arranca la sesión: restaura la existente y escucha cambios. Llamar en main.js. */
export async function initAuth() {
  if (!supabase) {
    auth.ready = true
    return
  }
  const { data } = await supabase.auth.getSession()
  if (data.session?.user) await onSignedIn(data.session.user)
  auth.ready = true

  supabase.auth.onAuthStateChange((event, session) => {
    if (event === 'SIGNED_IN' && session?.user) onSignedIn(session.user)
    if (event === 'SIGNED_OUT') {
      auth.user = null
      auth.profile = null
      stopSync()
    }
  })
}

export function useAuth() {
  function ensureEnabled() {
    if (!isSupabaseEnabled) throw new Error('La sincronización no está configurada.')
  }

  return {
    user: currentUser,
    role: userRole,
    isLoggedIn,
    ready: authReady,
    isEnabled: isSupabaseEnabled,

    async signUp({ email, password, displayName }) {
      ensureEnabled()
      return supabase.auth.signUp({
        email,
        password,
        options: { data: { display_name: displayName } },
      })
    },

    async signIn({ email, password }) {
      ensureEnabled()
      return supabase.auth.signInWithPassword({ email, password })
    },

    async signInWithGoogle() {
      ensureEnabled()
      return supabase.auth.signInWithOAuth({
        provider: 'google',
        options: { redirectTo: window.location.origin },
      })
    },

    async signOut() {
      ensureEnabled()
      return supabase.auth.signOut()
    },
  }
}
