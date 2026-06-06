<template>
  <zButtonGroup v-model="locale" :options="availableLocales" size="sm" class="" :multiple="false" />
</template>

<script setup name="LanguageSelector">
import { useI18n } from 'vue-i18n'
import { watch } from 'vue'
import { actions } from '@/store/index'

const { locale, availableLocales } = useI18n()

// Save language to localStorage when it changes
watch(locale, newLocale => {
  actions.setLanguage(newLocale)
})
</script>
