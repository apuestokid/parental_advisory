<template>
  <div class="flex">
    <div class="my-auto w-full">
      <form @submit.prevent="submit">
        <h2 class="text-lg font-semibold mb-1">
          {{ mode === 'signup' ? 'Crear cuenta' : 'Iniciar sesión' }}
        </h2>
        <p class="text-sm opacity-70 mb-4">
          Sincroniza tu configuración de PantallaSana entre dispositivos.
        </p>

        <zAccordion :opened="mode === 'signup'">
          <label class="mb-2 block" for="name">
            <p class="text-sm">Nombre</p>
          </label>
          <input
            id="name"
            v-model="form.displayName"
            type="text"
            name="name"
            placeholder="Tu nombre"
            class="input-class w-full mb-4"
          />
        </zAccordion>

        <label class="mb-2 block" for="email">
          <p class="text-sm">Email</p>
        </label>
        <input
          id="email"
          v-model="form.email"
          type="email"
          name="email"
          required
          placeholder="tu@email.com"
          class="input-class w-full"
        />

        <zAccordion :opened="isValidEmail">
          <label class="mb-2 block mt-6" for="password">
            <p class="text-sm">Contraseña</p>
          </label>
          <input
            id="password"
            v-model="form.password"
            type="password"
            name="password"
            required
            placeholder="Mínimo 6 caracteres"
            class="input-class w-full"
          />
        </zAccordion>

        <p v-if="message" class="text-sm mt-4" :class="error ? 'text-red-500' : 'text-green-600'">
          {{ message }}
        </p>

        <zAccordion :opened="isValidEmail && hasPassword">
          <zButton
            type="submit"
            class="w-full mt-6 px-4 py-2 bg-module! bg-opacity-70 hover:bg-opacity-100 font-medium rounded-lg cursor-pointer"
            :class="{ 'opacity-50': loading }"
            :disabled="loading"
          >
            {{ mode === 'signup' ? 'Crear cuenta' : 'Entrar' }}
          </zButton>
        </zAccordion>
      </form>

      <div class="flex items-center gap-3 my-4 opacity-50">
        <span class="h-px flex-1 bg-current"></span>
        <span class="text-xs">o</span>
        <span class="h-px flex-1 bg-current"></span>
      </div>

      <zButton
        class="w-full px-4 py-2 border rounded-lg font-medium cursor-pointer"
        :disabled="loading"
        @click="loginGoogle"
      >
        Continuar con Google
      </zButton>

      <p class="text-sm text-center mt-6">
        {{ mode === 'signup' ? '¿Ya tienes cuenta?' : '¿No tienes cuenta?' }}
        <button type="button" class="underline cursor-pointer" @click="toggleMode">
          {{ mode === 'signup' ? 'Inicia sesión' : 'Regístrate' }}
        </button>
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '@/pantallasana/composables/useAuth'

const router = useRouter()
const { signIn, signUp, signInWithGoogle, isEnabled } = useAuth()

const mode = ref('signin') // 'signin' | 'signup'
const loading = ref(false)
const message = ref('')
const error = ref(false)

const form = reactive({
  displayName: '',
  email: '',
  password: '',
})

const validateEmail = email =>
  String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
const isValidEmail = computed(() => !!validateEmail(form.email))
const hasPassword = computed(() => form.password.length >= 6)

function toggleMode() {
  mode.value = mode.value === 'signup' ? 'signin' : 'signup'
  message.value = ''
  error.value = false
}

function setError(text) {
  error.value = true
  message.value = text
}

function guardEnabled() {
  if (!isEnabled) {
    setError('La sincronización no está configurada (faltan las credenciales de Supabase).')
    return false
  }
  return true
}

async function submit() {
  if (!guardEnabled()) return
  loading.value = true
  message.value = ''
  error.value = false
  try {
    if (mode.value === 'signup') {
      const { data, error: err } = await signUp({
        email: form.email,
        password: form.password,
        displayName: form.displayName,
      })
      if (err) return setError(err.message)
      // Si Supabase exige confirmación por email, aún no hay sesión.
      if (!data.session) {
        error.value = false
        message.value = 'Cuenta creada. Revisa tu email para confirmarla.'
        return
      }
    } else {
      const { error: err } = await signIn({ email: form.email, password: form.password })
      if (err) return setError(err.message)
    }
    router.push({ name: 'ps-dashboard' })
  } catch (e) {
    setError(e.message ?? 'Ha ocurrido un error.')
  } finally {
    loading.value = false
  }
}

async function loginGoogle() {
  if (!guardEnabled()) return
  loading.value = true
  // OAuth redirige al proveedor; al volver, onAuthStateChange restaura la sesión.
  const { error: err } = await signInWithGoogle()
  if (err) {
    setError(err.message)
    loading.value = false
  }
}
</script>
