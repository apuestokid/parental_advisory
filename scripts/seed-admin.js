/**
 * Seeder: crea (o actualiza) una cuenta de administrador en Supabase.
 *
 * Usa la SERVICE ROLE key (API admin), por lo que:
 *  - crea el usuario con el email ya confirmado,
 *  - asigna role = 'admin' en la tabla profiles (saltándose el RLS).
 *
 * Es idempotente: si el usuario ya existe, actualiza su contraseña/rol.
 *
 * Ejecutar:  npm run seed:admin
 * Requiere en el entorno (.env, NO versionado):
 *  - VITE_SUPABASE_URL
 *  - SUPABASE_SERVICE_ROLE_KEY   (Supabase → Settings → API → service_role secret)
 */
import { createClient } from '@supabase/supabase-js'

const url = process.env.VITE_SUPABASE_URL
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

const ADMIN = {
  email: 'pau@apuestokid.com',
  password: 'uD40LaN0A1BENOtaw',
  displayName: 'Pau',
}

if (!url || !serviceKey) {
  console.error(
    '✗ Faltan variables: define VITE_SUPABASE_URL y SUPABASE_SERVICE_ROLE_KEY en .env'
  )
  process.exit(1)
}

const supabase = createClient(url, serviceKey, {
  auth: { autoRefreshToken: false, persistSession: false },
})

/** Busca un usuario por email paginando la lista de auth. */
async function findUserByEmail(email) {
  let page = 1
  for (;;) {
    const { data, error } = await supabase.auth.admin.listUsers({ page, perPage: 1000 })
    if (error) throw error
    const found = data.users.find(u => u.email === email)
    if (found) return found
    if (data.users.length < 1000) return null
    page++
  }
}

async function main() {
  let user = await findUserByEmail(ADMIN.email)

  if (user) {
    console.log(`• Usuario existente: ${user.id} — actualizando…`)
    const { error } = await supabase.auth.admin.updateUserById(user.id, {
      password: ADMIN.password,
      email_confirm: true,
      user_metadata: { display_name: ADMIN.displayName },
    })
    if (error) throw error
  } else {
    const { data, error } = await supabase.auth.admin.createUser({
      email: ADMIN.email,
      password: ADMIN.password,
      email_confirm: true,
      user_metadata: { display_name: ADMIN.displayName },
    })
    if (error) throw error
    user = data.user
    console.log(`• Usuario creado: ${user.id}`)
  }

  // El trigger ya creó el profile; lo elevamos a admin (upsert por si acaso).
  const { error: pErr } = await supabase
    .from('profiles')
    .upsert({ id: user.id, display_name: ADMIN.displayName, role: 'admin' })
  if (pErr) throw pErr

  console.log(`✓ Admin listo: ${ADMIN.email} (role=admin)`)
}

main()
  .then(() => process.exit(0))
  .catch(err => {
    console.error('✗ Error en el seeder:', err.message ?? err)
    process.exit(1)
  })
