/**
 * Catálogo de dispositivos seleccionables en el onboarding.
 * Solo contiene IDs, iconos y categorías. Los textos visibles se resuelven
 * desde el locale: `ps.devices.{id}.{name,short}` y `ps.categories.{category}`.
 */
export const DEVICES = [
  { id: 'android-phone', icon: '📱', category: 'movil' },
  { id: 'iphone', icon: '📱', category: 'movil' },
  { id: 'android-tablet', icon: '📲', category: 'movil' },
  { id: 'ipad', icon: '📲', category: 'movil' },
  { id: 'playstation', icon: '🎮', category: 'consola' },
  { id: 'xbox', icon: '🎮', category: 'consola' },
  { id: 'switch', icon: '🕹️', category: 'consola' },
  { id: 'smarttv', icon: '📺', category: 'tv' },
  { id: 'windows', icon: '💻', category: 'ordenador' },
  { id: 'mac', icon: '💻', category: 'ordenador' },
  { id: 'chromebook', icon: '💻', category: 'ordenador' },
]

export const DEVICE_MAP = Object.fromEntries(DEVICES.map(d => [d.id, d]))

export function getDevice(id) {
  return DEVICE_MAP[id] || null
}
