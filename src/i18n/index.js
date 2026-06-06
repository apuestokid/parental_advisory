import { createI18n } from 'vue-i18n'
import { state } from '@/store/index'
import es from '@/i18n/locales/es.js'
import en from '@/i18n/locales/en.js'
import va from '@/i18n/locales/va.js'
import psEs from '@/i18n/locales/es/pantallasana.js'
import psEn from '@/i18n/locales/en/pantallasana.js'
import psVa from '@/i18n/locales/va/pantallasana.js'
import psGuidesEs from '@/i18n/locales/es/pantallasana-guides.js'
import psGuidesEn from '@/i18n/locales/en/pantallasana-guides.js'
import psGuidesVa from '@/i18n/locales/va/pantallasana-guides.js'

const messages = {
  es: { ...es, ps: { ...psEs, guides: psGuidesEs } },
  en: { ...en, ps: { ...psEn, guides: psGuidesEn } },
  va: { ...va, ps: { ...psVa, guides: psGuidesVa } },
}

const i18n = createI18n({
  legacy: false,
  locale: state.language ?? 'es',
  fallbackLocale: 'es',
  globalInjection: true,
  useScope: 'local',
  missingWarn: true,
  fallbackWarn: false,
  messages,
})

export { i18n }
