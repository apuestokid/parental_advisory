<template>
  <section class="p-3 sm:p-4 lg:p-6 h-full flex container mx-auto flex-col overflow-hidden">
    <!-- Hero Section -->

    <div class="h-full overflow-hidden module flex flex-col">
      <div class="flex">
        <div class="mb-6">
          <h1 class="text-4xl sm:text-5xl font-bold text-font-lighten mb-4">
            {{ $t('welcome.title') }}
          </h1>
          <p class="text-lg sm:text-xl text-font-light">
            {{ $t('welcome.subtitle') }}
          </p>
          <div class="mt-4 flex flex-wrap gap-3">
            <RouterLink
              to="/zeusui"
              class="inline-flex items-center rounded-md bg-color-primary px-4 py-2 text-sm font-semibold text-font-lighten transition hover:opacity-90"
            >
              Ir a Zeus UI
            </RouterLink>
            <RouterLink
              to="/zeusblocks"
              class="inline-flex items-center rounded-md border border-color-primary px-4 py-2 text-sm font-semibold text-color-primary transition hover:bg-color-primary hover:text-font-lighten"
            >
              Ir a Zeus Blocks
            </RouterLink>
          </div>
        </div>
        <div class="flex-1"></div>
        <div class="flex gap-8 items-center self-start">
          <ThemeSelector />
          <LanguageSelector />
        </div>
      </div>
      <!-- NPM Scripts -->
      <div class="module_content overflow-auto flex-1">
        <div class="box mb-8">
          <h2 class="text-2xl font-bold text-font-lighten mb-6 flex items-center gap-2">
            <span>📦</span> {{ $t('welcome.scripts_title') }}
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div
              v-for="script in scripts"
              :key="script.id"
              class="piece hover:shadow-lg transition-shadow"
            >
              <h3 class="font-semibold text-font-lighten mb-2">{{ script.name }}</h3>
              <p class="text-sm text-font-light mb-3">{{ script.description }}</p>
              <code
                class="block bg-color-module-invert text-color-zeus1 text-xs p-2 rounded font-mono overflow-x-auto"
                >{{ script.command }}</code
              >
            </div>
          </div>
        </div>

        <!-- Technologies Section -->
        <div class="box p-6 sm:p-8 mb-8">
          <h2 class="text-2xl font-bold text-font-lighten mb-6 flex items-center gap-2">
            <span>🛠️</span> {{ $t('welcome.tools_title') }}
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <!-- Framework & Routing -->
            <div class="piece">
              <h3 class="text-lg font-semibold text-font-lighten mb-4">
                {{ $t('welcome.framework_routing') }}
              </h3>
              <ul class="space-y-3">
                <li v-for="tool in frameworkTools" :key="tool.id" class="flex items-start gap-3">
                  <span class="text-color-primary mt-1">→</span>
                  <div>
                    <a
                      :href="tool.url"
                      target="_blank"
                      rel="noopener"
                      class="text-color-primary hover:underline font-medium"
                    >
                      {{ tool.name }}
                    </a>
                    <p class="text-sm text-font-light">{{ tool.description }}</p>
                  </div>
                </li>
              </ul>
            </div>

            <!-- Styling & Design -->
            <div class="piece">
              <h3 class="text-lg font-semibold text-font-lighten mb-4">
                {{ $t('welcome.styling_design') }}
              </h3>
              <ul class="space-y-3">
                <li v-for="tool in stylingTools" :key="tool.id" class="flex items-start gap-3">
                  <span class="text-color-primary mt-1">→</span>
                  <div>
                    <a
                      :href="tool.url"
                      target="_blank"
                      rel="noopener"
                      class="text-color-primary hover:underline font-medium"
                    >
                      {{ tool.name }}
                    </a>
                    <p class="text-sm text-font-light">{{ tool.description }}</p>
                  </div>
                </li>
              </ul>
            </div>

            <!-- I18n & Utils -->
            <div class="piece">
              <h3 class="text-lg font-semibold text-font-lighten mb-4">
                {{ $t('welcome.i18n_utils') }}
              </h3>
              <ul class="space-y-3">
                <li v-for="tool in i18nTools" :key="tool.id" class="flex items-start gap-3">
                  <span class="text-color-primary mt-1">→</span>
                  <div>
                    <a
                      :href="tool.url"
                      target="_blank"
                      rel="noopener"
                      class="text-color-primary hover:underline font-medium"
                    >
                      {{ tool.name }}
                    </a>
                    <p class="text-sm text-font-light">{{ tool.description }}</p>
                  </div>
                </li>
              </ul>
            </div>

            <!-- Zeus Libraries -->
            <div class="piece">
              <h3 class="text-lg font-semibold text-font-lighten mb-4">
                {{ $t('welcome.zeus_libs') }}
              </h3>
              <ul class="space-y-3">
                <li v-for="tool in zeusTools" :key="tool.id" class="flex items-start gap-3">
                  <span class="text-color-primary mt-1">→</span>
                  <div>
                    <a
                      :href="tool.url"
                      target="_blank"
                      rel="noopener"
                      class="text-color-primary hover:underline font-medium"
                    >
                      {{ tool.name }}
                    </a>
                    <p class="text-sm text-font-light">{{ tool.description }}</p>
                  </div>
                </li>
              </ul>
            </div>

            <!-- Linting & Formatting -->
            <div class="piece">
              <h3 class="text-lg font-semibold text-font-lighten mb-4">
                {{ $t('welcome.linting_formatting') }}
              </h3>
              <ul class="space-y-3">
                <li v-for="tool in lintingTools" :key="tool.id" class="flex items-start gap-3">
                  <span class="text-color-primary mt-1">→</span>
                  <div>
                    <a
                      :href="tool.url"
                      target="_blank"
                      rel="noopener"
                      class="text-color-primary hover:underline font-medium"
                    >
                      {{ tool.name }}
                    </a>
                    <p class="text-sm text-font-light">{{ tool.description }}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- Getting Started -->
          <div class="box p-6 sm:p-8 mb-8">
            <h2 class="text-2xl font-bold text-font-lighten mb-6 flex items-center gap-2">
              <span>🚀</span> {{ $t('welcome.getting_started') }}
            </h2>
            <ol class="space-y-4">
              <li v-for="(step, index) in steps" :key="index" class="piece flex gap-4">
                <div
                  class="flex-shrink-0 w-8 h-8 bg-color-primary text-font-lighten rounded-full flex items-center justify-center font-bold text-sm"
                >
                  {{ index + 1 }}
                </div>
                <div class="flex-1">
                  <p class="font-medium text-font-lighten">{{ step.title }}</p>
                  <pre
                    v-if="step.command"
                    class="bg-color-module-invert text-color-zeus1 text-xs p-3 rounded mt-2 overflow-x-auto font-mono"
                  ><code>{{ step.command }}</code></pre>
                  <p v-else class="text-sm text-font-light mt-2">{{ step.description }}</p>
                </div>
              </li>
            </ol>
          </div>

          <!-- Project Structure -->
          <div class="box p-6 sm:p-8 mb-8">
            <h2 class="text-2xl font-bold text-font-lighten mb-6 flex items-center gap-2">
              <span>📁</span> {{ $t('welcome.project_structure') }}
            </h2>
            <ul class="space-y-3">
              <li
                v-for="folder in projectStructure"
                :key="folder.path"
                class="piece flex items-start gap-3"
              >
                <span class="text-font-dark mt-1">├</span>
                <div>
                  <code
                    class="text-sm font-mono bg-color-piece px-2 py-1 rounded text-font-lighten"
                    >{{ folder.path }}</code
                  >
                  <p class="text-sm text-font-light mt-1">{{ folder.description }}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!-- Requirements -->
        <div class="piece p-6 sm:p-8 border-l-4 border-color-primary">
          <h3 class="text-lg font-semibold text-font-lighten mb-4 flex items-center gap-2">
            <span>✅</span> {{ $t('welcome.requirements') }}
          </h3>
          <ul class="space-y-2 text-font-light">
            <li>• Node.js ≥ 18.0.0</li>
            <li>• npm ≥ 8.19.0</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import LanguageSelector from '@/components/LanguageSelector.vue'
import ThemeSelector from '@/components/ThemeSelector.vue'

const { t } = useI18n()

const scripts = [
  {
    id: 'dev',
    name: 'npm run dev',
    command: 'npm run dev',
    description: t('welcome.script_dev'),
  },
  {
    id: 'build',
    name: 'npm run build',
    command: 'npm run build',
    description: t('welcome.script_build'),
  },
  {
    id: 'preview',
    name: 'npm run preview',
    command: 'npm run preview',
    description: t('welcome.script_preview'),
  },
  {
    id: 'lint',
    name: 'npm run lint',
    command: 'npm run lint',
    description: t('welcome.script_lint'),
  },
  {
    id: 'format',
    name: 'npm run format',
    command: 'npm run format',
    description: t('welcome.script_format'),
  },
  {
    id: 'framework-dev',
    name: 'npm run framework-dev',
    command: 'npm run framework-dev',
    description: t('welcome.script_framework_dev'),
  },
]

const frameworkTools = [
  {
    id: 'vue3',
    name: 'Vue 3',
    url: 'https://vuejs.org',
    description: t('welcome.tool_vue3'),
  },
  {
    id: 'vue-router',
    name: 'Vue Router',
    url: 'https://router.vuejs.org',
    description: t('welcome.tool_vue_router'),
  },
  {
    id: 'vite',
    name: 'Vite',
    url: 'https://vite.dev',
    description: t('welcome.tool_vite'),
  },
]

const stylingTools = [
  {
    id: 'tailwind',
    name: 'Tailwind CSS v4',
    url: 'https://tailwindcss.com',
    description: t('welcome.tool_tailwind'),
  },
  {
    id: 'highcharts',
    name: 'Highcharts',
    url: 'https://www.highcharts.com',
    description: t('welcome.tool_highcharts'),
  },
  {
    id: 'fontsource',
    name: 'Fontsource',
    url: 'https://fontsource.org',
    description: t('welcome.tool_fontsource'),
  },
]

const i18nTools = [
  {
    id: 'vue-i18n',
    name: 'Vue i18n',
    url: 'https://vue-i18n.intlify.dev',
    description: t('welcome.tool_vue_i18n'),
  },
  {
    id: 'svg-loader',
    name: 'Vite SVG Loader',
    url: 'https://github.com/zcong1993/vite-svg-loader',
    description: t('welcome.tool_svg_loader'),
  },
  {
    id: 'uuid',
    name: 'UUID',
    url: 'https://github.com/uuidjs/uuid',
    description: t('welcome.tool_uuid'),
  },
]

const zeusTools = [
  {
    id: 'zeus-ui',
    name: '@zeus-front/zeus-ui',
    url: 'https://npm.zeus.vision/-/web/detail/@zeus-front/zeus-ui',
    description: t('welcome.tool_zeus_ui'),
  },
  {
    id: 'zeus-fns',
    name: '@zeus-front/zeus-fns',
    url: 'https://npm.zeus.vision/-/web/detail/@zeus-front/zeus-fns',
    description: t('welcome.tool_zeus_fns'),
  },
  {
    id: 'zeus-icons',
    name: '@zeus-front/zeus-icons',
    url: 'https://npm.zeus.vision/-/web/detail/@zeus-front/zeus-icons',
    description: t('welcome.tool_zeus_icons'),
  },
]

const lintingTools = [
  {
    id: 'eslint',
    name: 'ESLint',
    url: 'https://eslint.org',
    description: t('welcome.tool_eslint'),
  },
  {
    id: 'prettier',
    name: 'Prettier',
    url: 'https://prettier.io',
    description: t('welcome.tool_prettier'),
  },
  {
    id: 'airbnb',
    name: 'Airbnb ESLint Config',
    url: 'https://github.com/airbnb/javascript',
    description: t('welcome.tool_airbnb'),
  },
]

const steps = [
  {
    title: t('welcome.step_1_title'),
    command: 'npm install',
  },
  {
    title: t('welcome.step_2_title'),
    command: 'npm run framework-dev',
  },
  {
    title: t('welcome.step_3_title'),
    command: 'npm run dev',
  },
  {
    title: t('welcome.step_4_title'),
    description: t('welcome.step_4_desc'),
  },
  {
    title: t('welcome.step_5_title'),
    description: t('welcome.step_5_desc'),
  },
]

const projectStructure = [
  {
    path: 'src/views/',
    description: t('welcome.folder_views'),
  },
  {
    path: 'src/components/',
    description: t('welcome.folder_components'),
  },
  {
    path: 'src/router/',
    description: t('welcome.folder_router'),
  },
  {
    path: 'src/store/',
    description: t('welcome.folder_store'),
  },
  {
    path: 'src/i18n/',
    description: t('welcome.folder_i18n'),
  },
  {
    path: 'src/assets/',
    description: t('welcome.folder_assets'),
  },
]
</script>
