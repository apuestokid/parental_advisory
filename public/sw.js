/* Service Worker de PantallaSana
   Estrategia:
   - Navegaciones (SPA): network-first con fallback a index.html en caché (soporte offline).
   - Recursos estáticos same-origin: stale-while-revalidate.
   Los chunks de Vite llevan hash, así que se cachean en tiempo de ejecución tras la 1ª visita. */

const VERSION = 'pantallasana-v2'
const APP_SHELL = `${VERSION}-shell`
const RUNTIME = `${VERSION}-runtime`

const PRECACHE_URLS = ['/', '/index.html', '/manifest.webmanifest', '/icon.svg']

self.addEventListener('install', event => {
  event.waitUntil(
    caches
      .open(APP_SHELL)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  )
})

self.addEventListener('activate', event => {
  event.waitUntil(
    caches
      .keys()
      .then(keys =>
        Promise.all(
          keys.filter(key => !key.startsWith(VERSION)).map(key => caches.delete(key))
        )
      )
      .then(() => self.clients.claim())
  )
})

self.addEventListener('fetch', event => {
  const { request } = event
  if (request.method !== 'GET') return

  const url = new URL(request.url)
  if (url.origin !== self.location.origin) return

  // Navegaciones SPA: red primero, si falla servimos el shell cacheado.
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then(response => {
          const copy = response.clone()
          caches.open(APP_SHELL).then(cache => cache.put('/index.html', copy))
          return response
        })
        .catch(() => caches.match('/index.html').then(r => r || caches.match('/')))
    )
    return
  }

  // Recursos estáticos: stale-while-revalidate.
  event.respondWith(
    caches.match(request).then(cached => {
      const network = fetch(request)
        .then(response => {
          if (response && response.status === 200) {
            const copy = response.clone()
            caches.open(RUNTIME).then(cache => cache.put(request, copy))
          }
          return response
        })
        .catch(() => cached)
      return cached || network
    })
  )
})
