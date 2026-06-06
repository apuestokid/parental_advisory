<template>
  <span
    class="ps-difficulty inline-flex shrink-0 items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold"
    :class="levelClass"
  >
    <span class="ps-difficulty__dot h-2 w-2 rounded-full" aria-hidden="true"></span>
    {{ $t(`ps.difficulty.${props.level}`) }}
  </span>
</template>

<script setup>
import { computed } from 'vue'

const LEVEL_CLASS = {
  facil: 'ps-difficulty--facil',
  medio: 'ps-difficulty--medio',
  avanzado: 'ps-difficulty--avanzado',
}

const props = defineProps({
  level: { type: String, default: 'medio' },
})

const levelClass = computed(() => LEVEL_CLASS[props.level] || LEVEL_CLASS.medio)
</script>

<style scoped>
.ps-difficulty--facil {
  color: var(--color-ps-easy);
  background: color-mix(in oklab, var(--color-ps-easy) 14%, white);
}
.ps-difficulty--medio {
  color: var(--color-ps-medium);
  background: color-mix(in oklab, var(--color-ps-medium) 14%, white);
}
.ps-difficulty--avanzado {
  color: var(--color-ps-advanced);
  background: color-mix(in oklab, var(--color-ps-advanced) 14%, white);
}
.ps-difficulty--facil .ps-difficulty__dot {
  background: var(--color-ps-easy);
}
.ps-difficulty--medio .ps-difficulty__dot {
  background: var(--color-ps-medium);
}
.ps-difficulty--avanzado .ps-difficulty__dot {
  background: var(--color-ps-advanced);
}
</style>
