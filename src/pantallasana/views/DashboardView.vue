<template>
  <div>
    <!-- Nivel de protección familiar -->
    <section class="ps-card ps-rise mb-6 overflow-hidden">
      <div class="flex flex-col items-center gap-5 p-6 sm:flex-row sm:items-center sm:p-7">
        <ProtectionRing :percent="protection.percent" :size="120" :stroke="12" />
        <div class="flex-1 text-center sm:text-left">
          <p class="text-sm font-semibold uppercase tracking-wide text-ps-muted">
            {{ $t('ps.dashboard.levelLabel') }}
          </p>
          <h1 class="mt-1 text-2xl font-bold text-ps-ink">{{ protectionMessage }}</h1>
          <p class="mt-1 text-ps-muted">
            {{ $t('ps.dashboard.completedPrefix') }}
            <strong class="text-ps-ink">{{ protection.done }}</strong>
            {{ $t('ps.dashboard.completedMiddle') }}
            <strong class="text-ps-ink">{{ protection.total }}</strong>
            {{ $t('ps.dashboard.completedSuffix') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Dispositivos -->
    <div class="mb-3 flex items-center justify-between">
      <h2 class="ps-bar text-xl">{{ $t('ps.dashboard.devicesTitle') }}</h2>
      <RouterLink
        :to="{ name: 'ps-onboarding' }"
        class="rounded-full border border-ps-line px-3 py-1.5 text-sm font-semibold text-ps-muted transition hover:border-ps-primary hover:text-ps-primary"
      >
        {{ $t('ps.dashboard.edit') }}
      </RouterLink>
    </div>

    <div class="grid gap-4 sm:grid-cols-2">
      <RouterLink
        v-for="device in devices"
        :key="device.id"
        :to="{ name: 'ps-device', params: { id: device.id } }"
        class="ps-card ps-rise group flex flex-col gap-3 p-5 transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-ps-card)]"
      >
        <div class="flex items-start gap-3">
          <span
            class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-ps-panel text-2xl"
            aria-hidden="true"
          >
            {{ device.icon }}
          </span>
          <div class="flex-1">
            <h3 class="font-bold text-ps-ink">{{ $t(`ps.devices.${device.id}.name`) }}</h3>
            <p class="text-sm text-ps-muted">{{ $t(`ps.guides.${device.id}.tool`) }}</p>
          </div>
          <DifficultyBadge :level="guideOf(device.id).difficulty" />
        </div>

        <div class="flex items-center gap-2 text-xs text-ps-muted">
          <span>{{ $t('ps.dashboard.minutes', { min: guideOf(device.id).timeMinutes }) }}</span>
          <span aria-hidden="true">·</span>
          <span>
            {{
              $t('ps.dashboard.stepCount', {
                done: progressOf(device.id).done,
                total: progressOf(device.id).total,
              })
            }}
          </span>
        </div>

        <zProgress
          :value="progressOf(device.id).percent"
          :thickness="8"
          :colors="['var(--color-ps-primary)']"
          background-color="var(--color-ps-line)"
        />

        <span class="text-sm font-semibold text-ps-primary group-hover:underline">
          {{
            progressOf(device.id).done
              ? $t('ps.dashboard.cta.continue')
              : $t('ps.dashboard.cta.start')
          }}
          →
        </span>
      </RouterLink>
    </div>

    <!-- Accesos rápidos / utilidades -->
    <h2 class="ps-bar mb-3 mt-8 text-xl">{{ $t('ps.dashboard.toolsTitle') }}</h2>
    <div class="grid gap-4 sm:grid-cols-3">
      <RouterLink
        v-for="tool in tools"
        :key="tool.name"
        :to="{ name: tool.name }"
        class="ps-card flex flex-col gap-1 p-5 transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-ps-card)]"
      >
        <span class="text-2xl" aria-hidden="true">{{ tool.icon }}</span>
        <h3 class="font-bold text-ps-ink">{{ $t(`ps.dashboard.tools.${tool.key}.title`) }}</h3>
        <p class="text-sm text-ps-muted">{{ $t(`ps.dashboard.tools.${tool.key}.desc`) }}</p>
      </RouterLink>
    </div>

    <!-- Contenido educativo para padres -->
    <h2 class="mb-3 mt-8 text-xl font-bold text-ps-ink">{{ $t('ps.dashboard.eduTitle') }}</h2>
    <div class="grid gap-4 sm:grid-cols-3">
      <article v-for="tip in eduTips" :key="tip.key" class="ps-card p-5">
        <span class="text-2xl" aria-hidden="true">{{ tip.icon }}</span>
        <h3 class="mt-1 font-bold text-ps-ink">
          {{ $t(`ps.dashboard.eduTips.${tip.key}.title`) }}
        </h3>
        <p class="mt-1 text-sm text-ps-muted">{{ $t(`ps.dashboard.eduTips.${tip.key}.text`) }}</p>
      </article>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import ProtectionRing from '@/pantallasana/components/ProtectionRing.vue'
import DifficultyBadge from '@/pantallasana/components/DifficultyBadge.vue'
import { selectedDeviceList, protectionLevel, deviceProgress, state } from '@/pantallasana/store'
import { getGuide } from '@/pantallasana/data/guides'

const router = useRouter()
const { t } = useI18n()

onMounted(() => {
  if (!state.selectedDevices.length) router.replace({ name: 'ps-onboarding' })
})

const devices = selectedDeviceList
const protection = protectionLevel

const protectionMessage = computed(() => {
  const p = protection.value.percent
  if (p === 0) return t('ps.dashboard.protectionMessages.zero')
  if (p < 40) return t('ps.dashboard.protectionMessages.low')
  if (p < 80) return t('ps.dashboard.protectionMessages.mid')
  if (p < 100) return t('ps.dashboard.protectionMessages.high')
  return t('ps.dashboard.protectionMessages.full')
})

function guideOf(id) {
  return getGuide(id)
}
function progressOf(id) {
  return deviceProgress(id)
}

const tools = [
  { name: 'ps-comparator', key: 'comparator', icon: '⚖️' },
  { name: 'ps-search', key: 'search', icon: '🔎' },
  { name: 'ps-calculator', key: 'calculator', icon: '⏱️' },
]

const eduTips = [
  { key: 'talk', icon: '🗣️' },
  { key: 'bedroom', icon: '🌙' },
  { key: 'signs', icon: '👀' },
]
</script>
