<template>
  <div>
    <header class="mb-5">
      <h1 class="text-2xl font-bold text-ps-ink">{{ $t('ps.calculator.title') }}</h1>
      <p class="text-ps-muted">{{ $t('ps.calculator.subtitle') }}</p>
    </header>

    <div class="grid gap-6 lg:grid-cols-2">
      <!-- Formulario -->
      <div class="ps-card p-6">
        <label class="block">
          <span class="text-sm font-semibold text-ps-ink">{{ $t('ps.calculator.age') }}</span>
          <div class="mt-3 flex items-center gap-4">
            <input
              v-model.number="age"
              type="range"
              min="2"
              max="14"
              class="w-full! accent-[var(--color-ps-primary)]"
              :aria-label="$t('ps.calculator.ageAria')"
            />
            <span
              class="flex h-12 w-14 shrink-0 items-center justify-center rounded-xl bg-ps-primary-soft text-xl font-bold text-ps-primary-dark"
            >
              {{ age }}
            </span>
          </div>
        </label>

        <div class="mt-6">
          <p class="text-sm font-semibold text-ps-ink">{{ $t('ps.calculator.usageTitle') }}</p>
          <p class="mb-3 text-xs text-ps-muted">{{ $t('ps.calculator.usageHint') }}</p>
          <div class="space-y-2">
            <label
              v-for="activity in activities"
              :key="activity.id"
              class="flex cursor-pointer items-start gap-3 rounded-xl border p-3 transition"
              :class="
                selectedActivities.includes(activity.id)
                  ? 'border-ps-primary bg-ps-primary-soft'
                  : 'border-ps-line hover:border-ps-primary/50'
              "
            >
              <zCheckbox
                :model-value="selectedActivities.includes(activity.id)"
                class="mt-1"
                @update:model-value="toggleActivity(activity.id)"
              />
              <span>
                <span class="block font-semibold text-ps-ink">
                  {{ $t(`ps.activities.${activity.id}.label`) }}
                </span>
                <span class="block text-xs text-ps-muted">
                  {{ $t(`ps.activities.${activity.id}.description`) }}
                </span>
              </span>
            </label>
          </div>
        </div>
      </div>

      <!-- Resultado -->
      <div
        class="ps-card flex flex-col items-center justify-center bg-ps-primary-soft p-6 text-center"
      >
        <template v-if="result">
          <p class="text-sm font-semibold uppercase tracking-wide text-ps-primary-dark">
            {{ $t('ps.calculator.resultPretitle') }}
          </p>
          <p class="my-2 text-5xl font-bold text-ps-ink">{{ formattedTime }}</p>
          <p class="text-sm text-ps-muted">
            {{
              $t('ps.calculator.resultBracket', {
                label: $t(`ps.brackets.${result.bracket.id}.label`),
              })
            }}
          </p>
          <p class="mt-4 rounded-xl bg-ps-surface/70 p-3 text-sm text-ps-ink">
            {{ $t(`ps.brackets.${result.bracket.id}.note`) }}
          </p>
          <p class="mt-3 text-xs text-ps-muted">{{ $t('ps.calculator.disclaimer') }}</p>
        </template>
        <template v-else>
          <p class="text-ps-muted">{{ $t('ps.calculator.placeholder') }}</p>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { ACTIVITIES, recommendScreenTime } from '@/pantallasana/data/screenTime'

const { t } = useI18n()

const age = ref(8)
const selectedActivities = ref(['games'])
const activities = ACTIVITIES

function toggleActivity(id) {
  const i = selectedActivities.value.indexOf(id)
  if (i === -1) selectedActivities.value.push(id)
  else selectedActivities.value.splice(i, 1)
}

const result = computed(() => recommendScreenTime(age.value, selectedActivities.value))

const formattedTime = computed(() => {
  if (!result.value) return ''
  const m = result.value.minutes
  const h = Math.floor(m / 60)
  const rest = m % 60
  if (h && rest) return t('ps.calculator.duration.hAndM', { h, m: rest })
  if (h) return t('ps.calculator.duration.h', { h })
  return t('ps.calculator.duration.m', { m: rest })
})
</script>
