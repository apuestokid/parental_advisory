import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import svgLoader from 'vite-svg-loader'

const manualChunkMatchers = [
  ['highcharts', ['highcharts', 'highcharts-vue']],
  ['highchartsMaps', ['@highcharts/map-collection']],
]

function getManualChunkName(id) {
  for (const [chunkName, patterns] of manualChunkMatchers) {
    if (patterns.some(pattern => id.includes(pattern))) return chunkName
  }
  return undefined
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [vue(), tailwindcss(), svgLoader()],
    optimizeDeps: {
      exclude: ['vue-i18n'],
    },
    server: {
      cors: true,
      host: env.VITE_LOCALHOST_DOMAIN ?? 'localhost',
      port: env.VITE_LOCALHOST_PORT ?? 5173,
      proxy: {
        '/api': {
          target: env.VITE_PROXY_DOMAIN,
          changeOrigin: true,
          secure: false,
        },
      },
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        dummy: fileURLToPath(new URL('./src/dummy/endpoints', import.meta.url)),
        zIcons: '@zeus-front/zeus-icons',
        zFns: '@zeus-front/zeus-fns',
        zUI: '@zeus-front/zeus-ui',
      },
    },
    build: {
      rolldownOptions: {
        output: {
          manualChunks: getManualChunkName,
        },
      },
    },
  }
})
