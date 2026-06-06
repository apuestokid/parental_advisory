/**
 * Datos del comparador de apps de control parental.
 * Las strings (nombre, precio, bestFor, ageTarget, labels) viven en el locale
 * `ps.apps.{id}`, `ps.features.{key}` y `ps.platforms.{key}`.
 */
export const FEATURE_KEYS = [
  'timeLimit',
  'webFilter',
  'appBlock',
  'geolocation',
  'reports',
  'contentMonitor',
]

export const PLATFORM_KEYS = ['android', 'ios', 'windows', 'mac', 'chromebook', 'console']

export const APPS = [
  {
    id: 'family-link',
    priceTier: 0,
    platforms: ['android', 'ios', 'chromebook'],
    features: {
      timeLimit: true,
      webFilter: true,
      appBlock: true,
      geolocation: true,
      reports: true,
      contentMonitor: false,
    },
    url: 'https://families.google.com/familylink/',
  },
  {
    id: 'screen-time',
    priceTier: 0,
    platforms: ['ios', 'mac'],
    features: {
      timeLimit: true,
      webFilter: true,
      appBlock: true,
      geolocation: true,
      reports: true,
      contentMonitor: false,
    },
    url: 'https://support.apple.com/es-es/HT208982',
  },
  {
    id: 'microsoft-family',
    priceTier: 0,
    platforms: ['windows', 'android', 'ios', 'console'],
    features: {
      timeLimit: true,
      webFilter: true,
      appBlock: true,
      geolocation: true,
      reports: true,
      contentMonitor: false,
    },
    url: 'https://www.microsoft.com/family-safety',
  },
  {
    id: 'qustodio',
    priceTier: 2,
    platforms: ['android', 'ios', 'windows', 'mac', 'chromebook'],
    features: {
      timeLimit: true,
      webFilter: true,
      appBlock: true,
      geolocation: true,
      reports: true,
      contentMonitor: true,
    },
    url: 'https://www.qustodio.com/es/',
  },
  {
    id: 'bark',
    priceTier: 2,
    platforms: ['android', 'ios'],
    features: {
      timeLimit: true,
      webFilter: true,
      appBlock: false,
      geolocation: true,
      reports: true,
      contentMonitor: true,
    },
    url: 'https://www.bark.us/',
  },
  {
    id: 'norton-family',
    priceTier: 1,
    platforms: ['android', 'ios', 'windows'],
    features: {
      timeLimit: true,
      webFilter: true,
      appBlock: true,
      geolocation: true,
      reports: true,
      contentMonitor: true,
    },
    url: 'https://es.norton.com/products/norton-family',
  },
]
