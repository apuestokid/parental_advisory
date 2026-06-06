<template>
  <RouterView class="h-full w-full" />
  <zToast position="top-center" />
</template>
<script setup>
import { actions } from '@/store'
import { onBeforeMount } from 'vue'
onBeforeMount(() => {
  actions.setTheme()
})
</script>
