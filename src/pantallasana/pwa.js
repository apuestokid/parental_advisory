/** Registra el service worker para habilitar el funcionamiento offline (PWA). */
export function registerServiceWorker() {
  if (!('serviceWorker' in navigator)) return
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(err => {
      // El registro puede fallar en local sin HTTPS; no es crítico para el desarrollo.
      // eslint-disable-next-line no-console
      console.warn('No se pudo registrar el service worker:', err)
    })
  })
}
