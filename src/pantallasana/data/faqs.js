/**
 * Preguntas frecuentes para el buscador rápido.
 * Los textos viven en el locale `ps.faqs.{id}.{question,answer}`. Aquí solo el
 * id, el dispositivo enlazado y las keywords (que NO se muestran al usuario,
 * pero alimentan el índice de búsqueda).
 */
export const FAQS = [
  {
    id: 'bloquear-youtube-switch',
    device: 'switch',
    keywords: ['youtube', 'switch', 'nintendo', 'bloquear', 'video', 'vídeo'],
  },
  {
    id: 'limite-tiempo-iphone',
    device: 'iphone',
    keywords: ['iphone', 'límite', 'limite', 'tiempo', 'apple', 'pantalla'],
  },
  {
    id: 'family-link-gratis',
    device: 'android-phone',
    keywords: ['family link', 'gratis', 'precio', 'google', 'android'],
  },
  {
    id: 'youtube-kids-tv',
    device: 'smarttv',
    keywords: ['youtube kids', 'smart tv', 'netflix', 'disney', 'vídeos', 'videos', 'seguro'],
  },
  {
    id: 'limitar-juego-playstation',
    device: 'playstation',
    keywords: ['playstation', 'ps5', 'ps4', 'horas', 'juego', 'tiempo', 'límite'],
  },
  {
    id: 'bloquear-compras',
    device: null,
    keywords: ['compras', 'gasto', 'dinero', 'permiso', 'comprar', 'in-app'],
  },
  {
    id: 'cuanto-tiempo-pantalla',
    device: null,
    keywords: ['tiempo', 'pantalla', 'edad', 'recomendado', 'horas', 'oms', 'aap'],
  },
  {
    id: 'filtro-web-windows',
    device: 'windows',
    keywords: ['windows', 'pc', 'filtro', 'web', 'edge', 'navegador', 'bloquear'],
  },
  {
    id: 'evitar-trampas',
    device: null,
    keywords: ['trampas', 'saltarse', 'incógnito', 'incognito', 'truco', 'administrador'],
  },
]
