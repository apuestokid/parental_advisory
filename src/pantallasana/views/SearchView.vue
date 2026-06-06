<template>
  <div>
    <header class="mb-5">
      <h1 class="text-2xl font-bold text-ps-ink">{{ $t('ps.search.title') }}</h1>
      <p class="text-ps-muted">{{ $t('ps.search.subtitle') }}</p>
    </header>

    <div class="mb-5">
      <zSearchInput
        v-model="query"
        size="lg"
        :placeholder="$t('ps.search.placeholder')"
        :aria-label="$t('ps.search.label')"
      />
    </div>

    <!-- Sugerencias cuando no hay búsqueda -->
    <div v-if="!query">
      <p class="mb-2 text-sm font-semibold text-ps-muted">
        {{ $t('ps.search.faqsTitle') }}
      </p>
      <ul class="space-y-2">
        <li v-for="faq in suggestions" :key="faq.id" class="ps-card overflow-hidden">
          <button
            type="button"
            class="flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-sm font-semibold text-ps-ink transition hover:bg-ps-panel-soft"
            :aria-expanded="openedFaqId === faq.id"
            @click="toggleFaq(faq.id)"
          >
            <span>{{ $t(`ps.faqs.${faq.id}.question`) }}</span>
            <zArrow :up="openedFaqId === faq.id" icon="angle" />
          </button>
          <zAccordion :opened="openedFaqId === faq.id">
            <div class="border-t border-ps-line px-4 py-3">
              <p class="text-sm text-ps-muted">{{ $t(`ps.faqs.${faq.id}.answer`) }}</p>
              <RouterLink
                v-if="faq.device"
                :to="{ name: 'ps-device', params: { id: faq.device } }"
                class="mt-2 inline-block text-sm font-semibold text-ps-primary hover:underline"
              >
                {{ $t('ps.search.viewGuide') }}
              </RouterLink>
            </div>
          </zAccordion>
        </li>
      </ul>
    </div>

    <!-- Resultados -->
    <div v-else-if="results.length" class="space-y-3">
      <p class="text-sm text-ps-muted">
        {{ $t('ps.search.resultsCount', { n: results.length }) }}
      </p>
      <component
        :is="resultTag(r)"
        v-for="r in results"
        :key="r.type + r.id"
        :to="resultLink(r)"
        class="ps-card block p-4 text-left transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-ps-card)]"
      >
        <div class="flex items-center gap-2">
          <span class="rounded-full bg-ps-panel px-2 py-0.5 text-xs font-semibold text-ps-muted">
            {{ $t(`ps.search.typeLabel.${r.type}`) }}
          </span>
          <span v-if="r.deviceName" class="text-xs text-ps-muted">{{ r.deviceName }}</span>
        </div>
        <h3 class="mt-1 font-bold text-ps-ink">{{ r.title }}</h3>
        <p class="mt-1 text-sm text-ps-muted">{{ r.snippet }}</p>
        <span v-if="resultLink(r)" class="mt-2 inline-block text-sm font-semibold text-ps-primary">
          {{ $t('ps.search.viewGuideShort') }}
        </span>
      </component>
    </div>

    <!-- Sin resultados -->
    <zAlert v-else type="info" :title="$t('ps.search.emptyTitle', { q: query })">
      {{ $t('ps.search.emptyDesc') }}
      <RouterLink :to="{ name: 'ps-comparator' }" class="font-semibold text-ps-primary">
        {{ $t('ps.search.emptyLink') }}</RouterLink
      >.
    </zAlert>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { buildIndex, search } from '@/pantallasana/data/search'
import { FAQS } from '@/pantallasana/data/faqs'

const { t, locale } = useI18n({ useScope: 'global' })

const query = ref('')
const openedFaqId = ref(null)

// Índice reactivo: se rehace cuando cambia el idioma.
const index = computed(() => {
  // Acceso a locale.value fuerza la dependencia reactiva.
  void locale.value
  return buildIndex(t)
})

const results = computed(() => search(query.value, index.value))
const suggestions = FAQS.slice(0, 6)

function toggleFaq(id) {
  openedFaqId.value = openedFaqId.value === id ? null : id
}

function resultLink(r) {
  if (r.type === 'device') return { name: 'ps-device', params: { id: r.id } }
  if (r.device) return { name: 'ps-device', params: { id: r.device } }
  return null
}

function resultTag(r) {
  return resultLink(r) ? 'RouterLink' : 'article'
}
</script>
