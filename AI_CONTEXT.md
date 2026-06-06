# AI Context & Development Guidelines

This document provides context for AI models and agents to understand the project structure, tech stack, and development patterns of this boilerplate.

## 🏗 Project Structure

The project is organized in a monorepo-like structure with the following main directories:

- `/front-boilerplate`: The main Vue 3 application.
- `/zeus-ui`: Internal UI component library.
- `/zeus-fns`: Internal helper functions and plugins.
- `/zeus-icons`: Internal icon library.

## 🛠 Tech Stack (Front-Boilerplate)

- **Framework**: [Vue 3](https://vuejs.org/) (using Composition API and `<script setup>`).
- **Build Tool**: [Vite](https://vitejs.dev/).
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (integrated via `@tailwindcss/vite`).
- **State Management**: Vue's reactive `ref`/`reactive` or Pinia (check `src/store`).
- **Routing**: [Vue Router](https://router.vuejs.org/).
- **I18n**: [Vue I18n](https://vue-i18n.intlify.dev/).
- **Charts**: [Highcharts](https://www.highcharts.com/) with `highcharts-vue`.

## 📦 Internal Libraries (Zeus Ecosystem)

### Zeus UI (`@zeus-front/zeus-ui`)

A library of reusable UI components.

- **Base Prefix**: Components are usually prefixed with `z` (e.g., `<zButton>`, `<zModal>`).
- **Documentation**: See `front-boilerplate/ZEUS-UI.md` for a full list of components and usage examples.
- **Usage**: Components are registered globally in `front-boilerplate/src/main.js`.
- **Claude agents**: `zeus-ui`, `zeus-ui-botones`, `zeus-ui-selectores`, `zeus-ui-feedback`, `zeus-ui-overlay`, `zeus-ui-datos`, `zeus-ui-visual`, `zeus-ui-devtools` — use them for component-specific implementation help.

### Zeus FNS (`@zeus-front/zeus-fns`)

Contains helper functions and Vue plugins.

- **zPlugins**: Installed in `main.js`.
- **Documentation**: See `front-boilerplate/ZEUS-FNS.md` for a full list of functions and usage examples.
- **Claude agents**: `zeus-fns`, `zeus-fns-api`, `zeus-fns-storage`, `zeus-fns-fechas`, `zeus-fns-numeros`, `zeus-fns-eventos`, `zeus-fns-plugins` — use them for composable and utility help.

### Zeus ICONS (`@zeus-front/zeus-icons`)

Icon library used across the project.

- **Installation**: `zeusIcons.install(app)` in `main.js`.
- **Claude agent**: `zeus-icons` — use it for icon imports and usage examples.

### Zeus FLAGS (`@zeus-front/zeus-flags`)

Country flag component library.

- **Usage**: `<zFlag flag="es" />` renders flags as inline SVG or emoji.
- **Claude agent**: `zeus-flags` — use it for prop reference and rendering modes.

## 🎨 Development Patterns

### 1. Component Development

- Use `<script setup>` in `.vue` files.
- Prefer Tailwind CSS for styling.
- Utilize Zeus UI components whenever possible to maintain consistency.

### 2. File Organization (front-boilerplate/src)

- `assets/`: Global styles and static assets.
- `auth/`: Authentication logic and API request configuration.
- `components/`: Global or shared components.
- `highcharts/`: Highcharts configuration.
- `i18n/`: Translation files.
- `router/`: Route definitions.
- `views/`: Page-level components.

### 3. API Requests

- Configuration is handled in `src/auth/index.js`.
- It sets up global API request behavior (likely using a custom wrapper or Axios).

### 4. Internationalization

- Translations are managed in `src/i18n/`.
- Use `$t('key')` in templates.

## 🚀 Key Commands (front-boilerplate)

- `npm run dev`: Starts the Vite development server.
- `npm run build`: Builds the application for production.
- `npm run lint`: Runs ESLint with auto-fix.
- `npm run format`: Formats code using Prettier.
- `npm run framework-dev`: Links the internal `zeus-*` packages for local development.

## 🤖 [!IMPORTANT] Guidelines for AI Agents

- **Use the specialized Claude agents** installed in `.claude/agents/` for all Zeus library questions — they contain the full API reference and examples for each package.
- **Follow the `<script setup>` pattern** for all new Vue components.
- **Use Tailwind CSS v4** utilities for custom styling.
- **Never use hardcoded hex or RGB colors** in templates or CSS. Always use the predefined variables in `src/assets/css/theme.css` (e.g., `var(--color-primary)` or Tailwind classes mapped to them like `text-primary`).
- **Use the container hierarchy** for content boxes: `.module` (top-level), `.box` (mid-level), and `.piece` (bottom-level). This hierarchy ensures consistent nesting and background colors.
- **Ensure i18n keys are added** to the translation files when adding new text. **Avoid hardcoded strings** in templates; always use `$t('key')` or `t('key')` and create the translation strings in the corresponding language files.
- **Format numeric variables** using `$numberFormat()` for general numbers, `$percentice()` for percentages, or `$reduceBigNumbers()` for large values.
- **Check `src/router`** to understand the application flow before adding new pages.
