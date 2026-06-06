<template>
  <div v-if="device && guide">
    <!-- Volver -->
    <RouterLink
      :to="{ name: 'ps-dashboard' }"
      class="mb-4 inline-flex items-center gap-1 text-sm font-semibold text-ps-muted transition hover:text-ps-primary"
    >
      {{ $t('ps.ui.backToDashboardArrow') }}
    </RouterLink>

    <!-- Cabecera de la ficha -->
    <section class="ps-card ps-rise mb-6 p-6">
      <div class="flex items-start gap-4">
        <span
          class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-ps-panel text-3xl"
          aria-hidden="true"
        >
          {{ device.icon }}
        </span>
        <div class="flex-1">
          <h1 class="text-2xl font-bold text-ps-ink">
            {{ $t(`ps.devices.${device.id}.name`) }}
          </h1>
          <p class="text-sm text-ps-muted">
            {{ $t('ps.guide.withTool', { tool: $t(`ps.guides.${device.id}.tool`) }) }}
          </p>
          <div class="mt-3 flex flex-wrap items-center gap-2">
            <DifficultyBadge :level="guide.difficulty" />
            <span
              class="inline-flex items-center gap-1 rounded-full bg-ps-panel px-2.5 py-1 text-xs font-semibold text-ps-muted"
            >
              {{ $t('ps.guide.minutes', { min: guide.timeMinutes }) }}
            </span>
          </div>
        </div>
      </div>
      <p class="mt-4 text-ps-ink">{{ $t(`ps.guides.${device.id}.intro`) }}</p>

      <!-- Progreso de esta ficha -->
      <div class="mt-5">
        <div class="mb-1 flex items-center justify-between text-sm">
          <span class="font-semibold text-ps-ink">{{ $t('ps.guide.progressTitle') }}</span>
          <span class="text-ps-muted">
            {{ $t('ps.guide.progressCount', { done: progress.done, total: progress.total }) }}
          </span>
        </div>
        <zProgress
          :value="progress.percent"
          :thickness="10"
          :colors="['var(--color-ps-primary)']"
          background-color="var(--color-ps-line)"
        />
      </div>

      <!-- Documentación oficial -->
      <div v-if="guide.docs?.length" class="mt-5 border-t border-ps-line pt-4">
        <p class="mb-2 text-xs font-bold uppercase tracking-wide text-ps-muted">
          {{ $t('ps.guide.docsTitle') }}
        </p>
        <ul class="flex flex-col gap-1.5">
          <li v-for="(url, di) in guide.docs" :key="url">
            <a
              :href="url"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center gap-1.5 text-sm font-semibold text-ps-primary hover:underline"
            >
              {{ $t(`ps.guides.${device.id}.docs.${di}`) }}
              <span aria-hidden="true" class="text-xs">↗</span>
            </a>
          </li>
        </ul>
      </div>
    </section>

    <!-- Checklist de pasos -->
    <h2 class="mb-3 text-xl font-bold text-ps-ink">{{ $t('ps.guide.stepsTitle') }}</h2>
    <ol class="space-y-3">
      <li
        v-for="index in stepIndices"
        :key="`${route.params.id}-${index}`"
        class="ps-card flex gap-3 p-4 transition"
        :class="isDone(index) ? 'bg-ps-primary-soft border-ps-primary/40' : ''"
      >
        <zCheckbox
          :model-value="isDone(index)"
          class="mt-1"
          :aria-label="$t('ps.guide.stepCheckAria', { n: index + 1 })"
          @update:model-value="toggle(index)"
        />
        <div class="flex-1">
          <div class="flex items-center gap-2">
            <span class="text-xs font-bold text-ps-muted">
              {{ $t('ps.guide.stepLabel', { n: index + 1 }) }}
            </span>
          </div>
          <h3
            class="font-bold text-ps-ink"
            :class="isDone(index) ? 'line-through decoration-ps-primary/50' : ''"
          >
            {{ $t(`ps.guides.${device.id}.steps.${index}.title`) }}
          </h3>
          <p class="mt-1 text-sm text-ps-muted">
            {{ $t(`ps.guides.${device.id}.steps.${index}.detail`) }}
          </p>

          <!-- Instrucciones detalladas -->
          <ol v-if="substepCount(index)" class="mt-3 space-y-1.5">
            <li
              v-for="si in substepIndices(index)"
              :key="si"
              class="flex gap-2.5 text-sm text-ps-ink"
            >
              <span
                class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ps-panel text-xs font-bold text-ps-muted"
                aria-hidden="true"
              >
                {{ si + 1 }}
              </span>
              <span>
                {{ $t(`ps.guides.${device.id}.steps.${index}.substeps.${si}`) }}
              </span>
            </li>
          </ol>
        </div>
      </li>
    </ol>

    <!-- Consejos -->
    <zAlert v-if="tipCount" type="warning" :title="$t('ps.guide.tipsTitle')" class="mt-6">
      <ul class="space-y-1.5 text-sm">
        <li v-for="ti in tipIndices" :key="ti" class="flex gap-2">
          <span aria-hidden="true">•</span>
          <span>{{ $t(`ps.guides.${device.id}.tips.${ti}`) }}</span>
        </li>
      </ul>
    </zAlert>

    <!-- Modal de logro al completar todos los pasos -->
    <zModal :is-open="celebrationOpen" @close-modal="celebrationOpen = false">
      <div class="ps-card max-w-sm bg-ps-primary-soft p-7 text-center">
        <div class="text-5xl" aria-hidden="true">🎉</div>
        <p class="mt-3 text-lg font-bold text-ps-ink">{{ $t('ps.guide.celebrate.title') }}</p>
        <p class="mt-1 text-sm text-ps-muted">
          {{ $t('ps.guide.celebrate.desc', { name: $t(`ps.devices.${device.id}.name`) }) }}
        </p>
        <div class="mt-5 flex flex-col gap-2">
          <RouterLink :to="{ name: 'ps-dashboard' }">
            <zButton variant="primary" @click="celebrationOpen = false">
              {{ $t('ps.guide.celebrate.back') }}
            </zButton>
          </RouterLink>
          <zButton variant="aux" outline size="sm" @click="celebrationOpen = false">
            {{ $t('ps.guide.celebrate.stay') }}
          </zButton>
        </div>
      </div>
    </zModal>
  </div>

  <!-- Dispositivo no encontrado -->
  <zAlert v-else type="info" :title="$t('ps.guide.notFound')">
    <RouterLink :to="{ name: 'ps-dashboard' }" class="font-semibold text-ps-primary">
      {{ $t('ps.ui.backToDashboard') }} →
    </RouterLink>
  </zAlert>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useToast } from '@zeus-front/zeus-ui'
import DifficultyBadge from '@/pantallasana/components/DifficultyBadge.vue'
import { getDevice } from '@/pantallasana/data/devices'
import { getGuide, stepId } from '@/pantallasana/data/guides'
import { actions, deviceProgress } from '@/pantallasana/store'

const route = useRoute()
const toast = useToast()
const { t, messages, locale } = useI18n({ useScope: 'global' })

const device = computed(() => getDevice(route.params.id))
const guide = computed(() => getGuide(route.params.id))
const progress = computed(() => deviceProgress(route.params.id))

const celebrationOpen = ref(false)

const stepIndices = computed(() =>
  Array.from({ length: guide.value?.stepsCount || 0 }, (_, i) => i)
)

function guideMessages() {
  return messages.value[locale.value]?.ps?.guides?.[route.params.id]
}

function substepCount(stepIndex) {
  return guideMessages()?.steps?.[stepIndex]?.substeps?.length || 0
}
function substepIndices(stepIndex) {
  return Array.from({ length: substepCount(stepIndex) }, (_, i) => i)
}

const tipCount = computed(() => guideMessages()?.tips?.length || 0)
const tipIndices = computed(() => Array.from({ length: tipCount.value }, (_, i) => i))

function isDone(index) {
  return actions.isStepDone(stepId(route.params.id, index))
}
function toggle(index) {
  const wasDone = isDone(index)
  actions.toggleStep(stepId(route.params.id, index))
  if (!wasDone) {
    toast.success(t('ps.guide.stepCompletedToast', { n: index + 1 }), { duration: 2000 })
  }
}

watch(
  () => progress.value.total && progress.value.done === progress.value.total,
  done => {
    if (done) celebrationOpen.value = true
  }
)
</script>
