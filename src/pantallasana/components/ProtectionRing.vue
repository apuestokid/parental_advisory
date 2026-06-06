<template>
  <div class="flex items-center gap-4">
    <div class="relative shrink-0" :style="{ width: size + 'px', height: size + 'px' }">
      <svg :width="size" :height="size" :viewBox="`0 0 ${size} ${size}`" class="-rotate-90">
        <circle
          :cx="size / 2"
          :cy="size / 2"
          :r="radius"
          fill="none"
          :stroke-width="stroke"
          stroke="var(--color-ps-line)"
        />
        <circle
          :cx="size / 2"
          :cy="size / 2"
          :r="radius"
          fill="none"
          :stroke-width="stroke"
          :stroke="ringColor"
          stroke-linecap="round"
          :stroke-dasharray="circumference"
          :stroke-dashoffset="dashOffset"
          style="
            transition:
              stroke-dashoffset 0.6s ease,
              stroke 0.4s ease;
          "
        />
      </svg>
      <div class="absolute inset-0 flex flex-col items-center justify-center">
        <span class="font-bold leading-none" :style="{ fontSize: size * 0.26 + 'px' }">
          {{ percent }}%
        </span>
      </div>
    </div>
    <div v-if="$slots.default">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  percent: { type: Number, default: 0 },
  size: { type: Number, default: 96 },
  stroke: { type: Number, default: 10 },
})

const radius = computed(() => (props.size - props.stroke) / 2)
const circumference = computed(() => 2 * Math.PI * radius.value)
const dashOffset = computed(() => circumference.value * (1 - props.percent / 100))

const ringColor = computed(() => {
  if (props.percent >= 80) return 'var(--color-ps-primary)'
  if (props.percent >= 40) return 'var(--color-ps-accent)'
  return 'var(--color-ps-advanced)'
})
</script>
