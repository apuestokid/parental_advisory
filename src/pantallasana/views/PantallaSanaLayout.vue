<template>
  <div class="ps-app">
    <!-- Cabecera -->
    <header
      class="sticky top-0 z-30 border-b border-ps-line bg-ps-bg/90 backdrop-blur supports-[backdrop-filter]:bg-ps-bg/80"
    >
      <div class="mx-auto flex max-w-5xl items-center gap-3 px-4 py-3">
        <RouterLink :to="{ name: 'ps-dashboard' }" :aria-label="$t('ps.ui.home')">
          <PaLogo size="sm" />
        </RouterLink>

        <div class="flex-1"></div>

        <zButtonGroup
          :model-value="locale"
          :options="localeOptions"
          value-key="value"
          label-key="label"
          size="sm"
          class="hidden sm:flex"
          @update:model-value="setLocale"
        />

        <zDayNight
          :model-value="isDark"
          size="sm"
          :aria-label="$t('ps.ui.themeAria')"
          @update:model-value="toggleTheme"
        />

        <zButton
          v-if="canInstall"
          variant="primary"
          size="sm"
          outline
          class="hidden sm:inline-flex"
          :aria-label="$t('ps.ui.install_aria')"
          @click="install"
        >
          {{ $t('ps.ui.install') }}
        </zButton>

        <RouterLink
          v-if="hasDevices"
          :to="{ name: 'ps-dashboard' }"
          class="flex items-center gap-1 rounded-full bg-ps-primary-soft px-3 py-1.5"
          :aria-label="$t('ps.dashboard.levelLabel')"
        >
          <span class="text-sm font-bold text-ps-primary-dark">
            <zCountUp :number="protectionLevel.percent" :options="{ duration: 0.8 }" />%
          </span>
          <span class="hidden text-xs text-ps-muted sm:inline">
            {{ $t('ps.ui.protectionShort') }}
          </span>
        </RouterLink>

        <!-- Sesión (solo si la sincronización está configurada) -->
        <template v-if="authEnabled">
          <RouterLink
            v-if="!isLoggedIn"
            :to="{ name: 'Login' }"
            class="flex items-center gap-1 rounded-full border border-ps-line px-3 py-1.5 text-sm font-semibold text-ps-muted transition hover:bg-ps-panel"
          >
            <span aria-hidden="true">☁️</span>
            <span class="hidden sm:inline">Sincronizar</span>
          </RouterLink>
          <button
            v-else
            type="button"
            class="flex items-center gap-1 rounded-full bg-ps-primary-soft px-3 py-1.5 text-sm font-semibold text-ps-primary-dark"
            @click="logout"
          >
            <span aria-hidden="true">👤</span>
            <span class="hidden max-w-32 truncate sm:inline">{{ userLabel }}</span>
          </button>
        </template>
      </div>

      <!-- Navegación principal -->
      <nav
        v-if="showNav"
        class="mx-auto flex max-w-5xl gap-1 overflow-x-auto px-2 pb-2 sm:px-4"
        :aria-label="$t('ps.nav.sections')"
      >
        <RouterLink
          v-for="item in navItems"
          :key="item.name"
          :to="{ name: item.name }"
          class="flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-ps-muted transition hover:bg-ps-panel"
          active-class="bg-ps-primary! text-white!"
        >
          <span aria-hidden="true">{{ item.icon }}</span>
          {{ $t(`ps.nav.${item.key}Label`) }}
        </RouterLink>
      </nav>
    </header>

    <!-- Contenido -->
    <main class="mx-auto max-w-5xl px-4 py-6">
      <RouterView v-slot="{ Component }">
        <component :is="Component" />
      </RouterView>
    </main>

    <footer class="mx-auto max-w-5xl px-4 pb-8 pt-2 text-center text-xs text-ps-muted">
      {{ $t('ps.ui.footer') }}
    </footer>
  </div>
</template>

<script setup>
import { computed, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { protectionLevel, state } from '@/pantallasana/store'
import { usePwaInstall } from '@/pantallasana/composables/usePwaInstall'
import { state as globalState, actions as globalActions } from '@/store'
import { useAuth } from '@/pantallasana/composables/useAuth'
import PaLogo from '@/pantallasana/components/PaLogo.vue'

const route = useRoute()
const { canInstall, install } = usePwaInstall()
const { locale, availableLocales } = useI18n({ useScope: 'global' })

const { user, isLoggedIn, isEnabled: authEnabled, signOut } = useAuth()
const userLabel = computed(
  () => user.value?.user_metadata?.display_name || user.value?.email || 'Mi cuenta'
)
async function logout() {
  await signOut()
}

onBeforeMount(() => globalActions.setTheme())

const localeOptions = availableLocales.map(code => ({
  value: code,
  label: code.toUpperCase(),
}))

function setLocale(next) {
  // zButtonGroup puede emitir el objeto de la opción o el value plano según versión.
  const code = typeof next === 'string' ? next : next?.value
  if (!code) return
  locale.value = code
  globalActions.setLanguage(code)
}

const isDark = computed(() => globalState.theme === 'dark')

function toggleTheme(dark) {
  globalActions.setTheme(dark ? 'dark' : 'light')
}

const hasDevices = computed(() => state.selectedDevices.length > 0)
const showNav = computed(() => route.name !== 'ps-onboarding')

const navItems = [
  { name: 'ps-dashboard', key: 'home', icon: '🏠' },
  { name: 'ps-comparator', key: 'comparator', icon: '⚖️' },
  { name: 'ps-search', key: 'search', icon: '🔎' },
  { name: 'ps-calculator', key: 'calculator', icon: '⏱️' },
]
</script>
