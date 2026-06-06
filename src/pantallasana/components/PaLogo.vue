<template>
  <span class="pa-badge" :class="`pa-badge--${size}`" role="img" :aria-label="ariaLabel">
    <span class="pa-badge__frame">
      <span class="pa-badge__top">
        <span>{{ topLine1 }}</span>
        <span>{{ topLine2 }}</span>
      </span>
      <span class="pa-badge__bar">{{ bottom }}</span>
    </span>
  </span>
</template>

<script setup>
import { computed } from 'vue'

/**
 * Logo de marca con la estética del sello "Parental Advisory" noventero:
 * caja oscura, marco claro y barra inferior invertida (tinta + crema del
 * theme). Juego visual entre "parental advisory" y el control parental.
 */
const props = defineProps({
  size: { type: String, default: 'md' }, // sm | md | lg
  topLine1: { type: String, default: 'PANTALLA' },
  topLine2: { type: String, default: 'SANA' },
  bottom: { type: String, default: 'CONTROL PARENTAL' },
})

const ariaLabel = computed(() => `${props.topLine1} ${props.topLine2} · ${props.bottom}`)
</script>

<style scoped>
.pa-badge {
  --pa-fs: 1.5rem;
  /* Estética del sello "Parental Advisory" con la paleta del theme:
     tinta cálida + crema en lugar de negro/blanco puros. */
  --pa-ink: var(--color-ps-ink);
  --pa-paper: var(--color-ps-bg);
  display: inline-flex;
  background: var(--pa-ink);
  padding: 0.16em;
  font-size: var(--pa-fs);
  font-family: 'Arial Narrow', 'Roboto Condensed', 'Oswald', 'Helvetica Neue', Arial, sans-serif;
  font-weight: 900;
  font-stretch: condensed;
  line-height: 0.88;
  vertical-align: middle;
  user-select: none;
}

.pa-badge--sm {
  --pa-fs: 0.82rem;
}
.pa-badge--md {
  --pa-fs: 1.6rem;
}
.pa-badge--lg {
  --pa-fs: 3rem;
}

.pa-badge__frame {
  display: flex;
  flex: 1;
  flex-direction: column;
  border: 0.13em solid var(--pa-paper);
}

.pa-badge__top {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.32em 0.5em 0.36em;
  color: var(--pa-paper);
  text-transform: uppercase;
  letter-spacing: -0.02em;
}

.pa-badge__bar {
  padding: 0.18em 0.45em 0.22em;
  background: var(--pa-paper);
  color: var(--pa-ink);
  font-size: 0.5em;
  letter-spacing: 0.07em;
  text-align: center;
  text-transform: uppercase;
  white-space: nowrap;
}
</style>
