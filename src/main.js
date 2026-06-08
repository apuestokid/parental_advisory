import { createApp } from 'vue'
import App from './App.vue'

import setGlobalComponents from '@/components'
import setupApiRequest from '@/auth/index'

import { i18n } from '@/i18n'

import router from './router/index.js'

import zeusBlocks from '@zeus-front/zeus-blocks'
import { zPugins } from '@zeus-front/zeus-fns'
import zeusUI from '@zeus-front/zeus-ui'
import zeusIcons from '@zeus-front/zeus-icons'

import { HighchartsVue, Highcharts } from '@/highcharts'

import { registerServiceWorker } from '@/pantallasana/pwa'
import { initAuth } from '@/pantallasana/composables/useAuth'

const app = createApp(App)
setupApiRequest()
app.use(i18n)
app.use(router, app)

app.use(zPugins)
zeusUI.install(app)
zeusIcons.install(app)
app.use(HighchartsVue, { highcharts: Highcharts })
setGlobalComponents(app)

app.use(zeusBlocks)
import '@zeus-front/zeus-blocks/zeus-blocks.css'
import '@zeus-front/zeus-ui/zeus-ui.css'
import './assets/css/main.css'

app.mount('#app')

registerServiceWorker()
initAuth()
