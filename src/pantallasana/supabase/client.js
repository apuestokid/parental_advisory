import { createClient } from '@supabase/supabase-js'

/**
 * Cliente de Supabase para PantallaSana.
 *
 * Si las variables de entorno no están definidas, `supabase` es `null` y la app
 * sigue funcionando sin registro (solo localStorage), exactamente como antes.
 * La sincronización con la nube solo se activa cuando hay credenciales.
 */
const url = import.meta.env.VITE_SUPABASE_URL
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = url && anonKey ? createClient(url, anonKey) : null

export const isSupabaseEnabled = Boolean(supabase)
