<template>
  <zThemeSelector :theme="state.theme" @toggle-theme="toggleTheme" />
</template>

<script setup>
import { state, actions } from '@/store'

const toggleTheme = theme => {
  actions.setTheme(theme)
}
</script>
