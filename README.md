# Boilerplate Vue 3 con Zeus front tools

Este proyecto es una plantilla (boilerplate) para iniciar aplicaciones web modernas utilizando Vue 3, Vite y la librería de componentes Zeus front Tools. Incluye una estructura básica de carpetas, configuración de internacionalización (i18n), enrutamiento, gestión de estado y ejemplos de integración con Highcharts y otros plugins útiles.

> [!TIP]
> **🤖 AI Context**: Para facilitar el desarrollo con modelos de IA y agentes, consulta el archivo [AI_CONTEXT.md](./AI_CONTEXT.md) en la raíz del proyecto.

## Características principales

- **Vue 3**: Framework progresivo para construir interfaces de usuario. Consulta la [documentación](https://vuejs.org/).
- **Vite**: Herramienta de desarrollo rápida para proyectos frontend. Consulta la [documentación](https://vitejs.dev/).
- **Zeus UI**: Librería de componentes UI lista para usar. Consulta la [documentación](https://npm.zeus.vision/-/web/detail/@zeus-front/zeus-ui).
- **Zeus FNS**: Librería de funciones para ZEUS. Consulta la [documentación](https://npm.zeus.vision/-/web/detail/@zeus-front/zeus-fns).
- **Zeus ICONS**: Librería de iconos para usar. Consulta la [documentación](https://npm.zeus.vision/-/web/detail/@zeus-front/zeus-icons).
- **Internacionalización (i18n)**: Soporte multilenguaje. Consulta la [documentación de Vue I18n](https://vue-i18n.intlify.dev/).
- **Enrutador**: Navegación entre vistas con Vue Router. Consulta la [documentación](https://router.vuejs.org/).
- **Highcharts**: Integración para gráficos interactivos. Consulta la [documentación](https://www.highcharts.com/docs).
- **Autenticación**: Estructura básica para login/logout y manejo de usuario.

## Estructura del proyecto

```
src/
  App.vue                # Componente raíz
  main.js                # Punto de entrada principal
  assets/                # Recursos estáticos (CSS, imágenes, SVG)
  auth/                  # Lógica de autenticación
  components/            # Componentes reutilizables
  dummy/                 # Datos de ejemplo
  highcharts/            # Integración y componentes de Highcharts
  i18n/                  # Configuración de internacionalización
  mainConfig/            # Configuración principal
  router/                # Enrutador y guards
  store/                 # Gestión de estado
  views/                 # Vistas principales de la app
```

## Instalación

1. Clona el repositorio en la carpeta de tu nuevo proyecto:

   ```bash
   mkdir my_project
   cd my_project
   git clone ssh://git@code.zeus.vision:142/zeus-front/front-boilerplate.git .

   ```

2. Declara las variables de entorno renombrando el `.npmrc.example` a `.npmrc` :

   ```bash
   #Añadimos @zeus-front al registry de NPM para poder instalar los paquetes de ZEUS
   @zeus-front:registry=https://npm.zeus.vision/
   ```

3. Declara las variables de entorno renombrando el `.env.example` a `.env` :

   ```bash
   #dominio de desarrollo (coméntalo si vas a gastar localhost)
   VITE_LOCALHOST_DOMAIN=my_dev_domain.test
   VITE_LOCALHOST_PORT=5173
   #DOMINIO del PROXY para evitar problemas de CORS en local:
   VITE_PROXY_DOMAIN=https://app.my_backend_url.com

   #Ruta base de la URL de la api de back:
   VITE_APP_API_URL=https://app.my_backend_url.com/api
   ```

4. Cambia el repositorio remoto para apuntar a tu propio repositorio, para evitar hacer push al boilerplate:

   ```bash
   git remote set-url origin <URL_DE_TU_REPOSITORIO>
   git add .
   git commit -m "first commit"
   git push origin main
   ```

5. Instala las dependencias:

   ```bash
   npm install
   ```

6. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## Uso

- Accede a `http://localhost:5173` (o el puerto que indique Vite) para ver la aplicación en desarrollo.
- Modifica los componentes y vistas en la carpeta `src/` según tus necesidades.

## Personalización

- **Temas y estilos**: Edita los archivos en `src/assets/css/` para personalizar la apariencia.
- **Idiomas**: Agrega o modifica archivos en `src/i18n/locales/` para soportar más idiomas.
- **Rutas**: Configura nuevas rutas en `src/router/routes.js`.
- **Componentes**: Crea nuevos componentes en `src/components/` o en las carpetas correspondientes.

## Créditos

- [Vue.js](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [Zeus UI](https://npm.zeus.vision/-/web/detail/@zeus-front/zeus-ui)
- [Zeus FNS](https://npm.zeus.vision/-/web/detail/@zeus-front/zeus-fns)
- [Zeus ICONS](https://npm.zeus.vision/-/web/detail/@zeus-front/zeus-icons)
- [Highcharts](https://www.highcharts.com/)

---

Este proyecto está diseñado para servir como base sólida y flexible para desarrollos rápidos en Vue 3 con buenas prácticas y herramientas modernas.
