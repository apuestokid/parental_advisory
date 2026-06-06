<template>
  <section class="mx-auto max-w-3xl py-2">
    <div class="ps-rise text-center">
      <div class="mb-4 flex justify-center">
        <PaLogo size="lg" />
      </div>
      <h1 class="mb-2 text-3xl font-bold text-ps-ink sm:text-4xl">
        {{ $t('ps.onboarding.title') }}
      </h1>
      <p class="mx-auto max-w-xl text-lg text-ps-muted">
        {{ $t('ps.onboarding.subtitle') }}
      </p>
    </div>

    <p class="mt-8 mb-3 text-center text-sm font-semibold text-ps-muted">
      {{ $t('ps.onboarding.pickHint') }}
    </p>

    <div v-for="group in groupedDevices" :key="group.category" class="mb-6">
      <h2 class="ps-bar mb-3 text-sm">{{ $t(`ps.categories.${group.category}`) }}</h2>
      <div class="grid grid-cols-2 gap-3 sm:grid-cols-3">
        <button
          v-for="device in group.devices"
          :key="device.id"
          type="button"
          class="ps-card flex flex-col items-center gap-2 px-3 py-5 text-center transition active:scale-95"
          :class="
            isSelected(device.id)
              ? 'border-ps-primary! bg-ps-primary-soft! ring-2 ring-ps-primary'
              : 'hover:border-ps-primary/50'
          "
          :aria-pressed="isSelected(device.id)"
          @click="actions.toggleDevice(device.id)"
        >
          <span class="text-4xl" aria-hidden="true">{{ device.icon }}</span>
          <span class="text-sm font-semibold text-ps-ink">
            {{ $t(`ps.devices.${device.id}.name`) }}
          </span>
          <span
            v-if="isSelected(device.id)"
            class="text-xs font-bold text-ps-primary-dark"
            aria-hidden="true"
          >
            {{ $t('ps.onboarding.selectedMark') }}
          </span>
        </button>
      </div>
    </div>

    <!-- Barra de acción fija -->
    <div
      class="sticky bottom-0 -mx-4 mt-8 border-t border-ps-line bg-ps-bg/95 px-4 py-4 backdrop-blur"
    >
      <div class="mx-auto flex max-w-3xl items-center justify-between gap-4">
        <p class="text-sm text-ps-muted">
          <strong class="text-ps-ink">{{ count }}</strong>
          {{ count === 1 ? $t('ps.onboarding.selectedOne') : $t('ps.onboarding.selectedMany') }}
        </p>
        <button
          type="button"
          class="ps-btn-pa rounded-full px-6 py-3 text-base font-bold shadow-md transition disabled:cursor-not-allowed disabled:opacity-40"
          :disabled="count === 0"
          @click="start"
        >
          {{ $t('ps.onboarding.cta') }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { DEVICES } from '@/pantallasana/data/devices'
import { state, actions } from '@/pantallasana/store'
import PaLogo from '@/pantallasana/components/PaLogo.vue'

const router = useRouter()

const groupedDevices = computed(() => {
  const groups = []
  for (const device of DEVICES) {
    let group = groups.find(g => g.category === device.category)
    if (!group) {
      group = { category: device.category, devices: [] }
      groups.push(group)
    }
    group.devices.push(device)
  }
  return groups
})

const count = computed(() => state.selectedDevices.length)

function isSelected(id) {
  return state.selectedDevices.includes(id)
}

function start() {
  if (!count.value) return
  actions.finishOnboarding()
  router.push({ name: 'ps-dashboard' })
}
</script>
