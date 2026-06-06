<template>
  <zApiDocs v-bind="options"></zApiDocs>
</template>

<script setup>
const options = {
  modules: import.meta.glob('/src/dummy/endpoints/**/*.js', { eager: true }),
  path: '/src/dummy/endpoints/',
  url: import.meta.env.VITE_APP_API_URL,
}
</script>
