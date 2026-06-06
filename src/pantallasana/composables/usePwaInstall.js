import { ref } from 'vue'

/**
 * Captura el evento `beforeinstallprompt` para ofrecer un botón de instalación de la PWA.
 * Se inicializa una sola vez a nivel de módulo.
 */
const deferredPrompt = ref(null)
const canInstall = ref(false)
const installed = ref(false)

if (typeof window !== 'undefined') {
  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault()
    deferredPrompt.value = e
    canInstall.value = true
  })
  window.addEventListener('appinstalled', () => {
    installed.value = true
    canInstall.value = false
    deferredPrompt.value = null
  })
}

export function usePwaInstall() {
  async function install() {
    if (!deferredPrompt.value) return
    deferredPrompt.value.prompt()
    await deferredPrompt.value.userChoice
    deferredPrompt.value = null
    canInstall.value = false
  }
  return { canInstall, installed, install }
}
