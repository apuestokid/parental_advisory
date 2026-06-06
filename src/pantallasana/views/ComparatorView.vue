<template>
  <div>
    <header class="mb-5">
      <h1 class="text-2xl font-bold text-ps-ink">{{ $t('ps.comparator.title') }}</h1>
      <p class="text-ps-muted">{{ $t('ps.comparator.subtitle') }}</p>
    </header>

    <!-- Filtros -->
    <div class="ps-card mb-5 flex flex-col gap-4 p-4">
      <div class="flex flex-wrap items-center gap-4">
        <label class="flex items-center gap-2 text-sm font-semibold text-ps-ink">
          {{ $t('ps.comparator.platform') }}
          <div class="min-w-44">
            <zMultiselect
              v-model="platformFilter"
              :options="platformOptions"
              :searchable="false"
              :placeholder="$t('ps.comparator.allPlatforms')"
            />
          </div>
        </label>

        <zCheckbox v-model="onlyFree" :label="$t('ps.comparator.onlyFree')" />
      </div>

      <div>
        <p class="mb-2 text-sm font-semibold text-ps-ink">
          {{ $t('ps.comparator.requiredFeatures') }}
        </p>
        <zButtonGroup v-model="requiredFeatures" :options="featureOptions" size="sm" />
      </div>

      <div v-if="hasActiveFilters" class="flex items-center justify-between text-sm">
        <span class="text-ps-muted">
          {{ $t('ps.comparator.appsCount', { n: filtered.length }) }}
        </span>
        <zButton variant="primary" size="sm" outline @click="clearFilters">
          {{ $t('ps.comparator.clear') }}
        </zButton>
      </div>
    </div>

    <!-- Tarjetas (móvil) -->
    <div class="grid gap-4 lg:hidden">
      <article v-for="app in filtered" :key="app.id" class="ps-card p-5">
        <div class="flex items-start justify-between gap-3">
          <h2 class="text-lg font-bold text-ps-ink">{{ $t(`ps.apps.${app.id}.name`) }}</h2>
          <span class="rounded-full bg-ps-panel px-2.5 py-1 text-xs font-bold text-ps-ink">
            {{ $t(`ps.apps.${app.id}.price`) }}
          </span>
        </div>
        <p class="mt-1 text-sm text-ps-muted">{{ $t(`ps.apps.${app.id}.bestFor`) }}</p>
        <p class="mt-2 text-xs text-ps-muted">
          {{ $t('ps.comparator.age', { value: $t(`ps.apps.${app.id}.ageTarget`) }) }}
        </p>
        <div class="mt-3 flex flex-wrap gap-1.5">
          <span
            v-for="p in app.platforms"
            :key="p"
            class="rounded-full bg-ps-panel px-2 py-0.5 text-xs text-ps-muted"
          >
            {{ $t(`ps.platforms.${p}`) }}
          </span>
        </div>
        <ul class="mt-3 grid grid-cols-2 gap-1 text-xs">
          <li
            v-for="key in featureKeys"
            :key="key"
            class="flex items-center gap-1"
            :class="app.features[key] ? 'text-ps-ink' : 'text-ps-muted/60'"
          >
            <span aria-hidden="true">{{ app.features[key] ? '✓' : '—' }}</span>
            {{ $t(`ps.features.${key}`) }}
          </li>
        </ul>
        <a
          :href="app.url"
          target="_blank"
          rel="noopener"
          class="mt-4 inline-block text-sm font-semibold text-ps-primary hover:underline"
        >
          {{ $t('ps.comparator.visitWeb') }}
        </a>
      </article>
      <zAlert v-if="!filtered.length" type="info" :title="$t('ps.comparator.noResultsTitle')">
        {{ $t('ps.comparator.noResultsDesc') }}
      </zAlert>
    </div>

    <!-- Tabla (escritorio) -->
    <div class="ps-card hidden overflow-hidden p-0 lg:block">
      <div class="overflow-x-auto">
        <table class="w-full border-collapse text-left text-sm">
          <thead>
            <tr class="border-b border-ps-line bg-ps-panel-soft">
              <th class="p-3 font-bold text-ps-ink">{{ $t('ps.comparator.table.app') }}</th>
              <th class="p-3 font-bold text-ps-ink">{{ $t('ps.comparator.table.price') }}</th>
              <th class="p-3 font-bold text-ps-ink">{{ $t('ps.comparator.table.age') }}</th>
              <th class="p-3 font-bold text-ps-ink">
                {{ $t('ps.comparator.table.platforms') }}
              </th>
              <th
                v-for="key in featureKeys"
                :key="key"
                class="p-3 text-center font-bold text-ps-ink"
              >
                {{ $t(`ps.features.${key}`) }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="app in filtered"
              :key="app.id"
              class="border-b border-ps-line/60 transition hover:bg-ps-panel-soft"
            >
              <td class="p-3">
                <a
                  :href="app.url"
                  target="_blank"
                  rel="noopener"
                  class="font-bold text-ps-primary hover:underline"
                >
                  {{ $t(`ps.apps.${app.id}.name`) }}
                </a>
                <p class="text-xs text-ps-muted">{{ $t(`ps.apps.${app.id}.bestFor`) }}</p>
              </td>
              <td class="p-3 text-ps-ink">{{ $t(`ps.apps.${app.id}.price`) }}</td>
              <td class="p-3 text-ps-muted">{{ $t(`ps.apps.${app.id}.ageTarget`) }}</td>
              <td class="p-3">
                <div class="flex flex-wrap gap-1">
                  <span
                    v-for="p in app.platforms"
                    :key="p"
                    class="rounded-full bg-ps-panel px-2 py-0.5 text-xs text-ps-muted"
                  >
                    {{ $t(`ps.platforms.${p}`) }}
                  </span>
                </div>
              </td>
              <td v-for="key in featureKeys" :key="key" class="p-3 text-center">
                <span
                  v-if="app.features[key]"
                  class="font-bold text-ps-primary"
                  :aria-label="$t('ps.comparator.yes')"
                  >✓</span
                >
                <span v-else class="text-ps-muted/50" :aria-label="$t('ps.comparator.no')">—</span>
              </td>
            </tr>
            <tr v-if="!filtered.length">
              <td :colspan="4 + featureKeys.length" class="p-6 text-center text-ps-muted">
                {{ $t('ps.comparator.noResultsTitle') }}.
                {{ $t('ps.comparator.noResultsDesc') }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { APPS, FEATURE_KEYS, PLATFORM_KEYS } from '@/pantallasana/data/apps'

const { t } = useI18n({ useScope: 'global' })

const featureKeys = FEATURE_KEYS

const platformFilter = ref(null)
const onlyFree = ref(false)
const requiredFeatures = ref([])

const platformOptions = computed(() =>
  PLATFORM_KEYS.map(key => ({ value: key, label: t(`ps.platforms.${key}`) }))
)
const featureOptions = computed(() =>
  FEATURE_KEYS.map(key => ({ value: key, label: t(`ps.features.${key}`) }))
)

const hasActiveFilters = computed(
  () => platformFilter.value || onlyFree.value || requiredFeatures.value.length > 0
)

function clearFilters() {
  platformFilter.value = null
  onlyFree.value = false
  requiredFeatures.value = []
}

const filtered = computed(() =>
  APPS.filter(app => {
    if (platformFilter.value && !app.platforms.includes(platformFilter.value)) return false
    if (onlyFree.value && app.priceTier !== 0) return false
    if (requiredFeatures.value.some(f => !app.features[f])) return false
    return true
  })
)
</script>
