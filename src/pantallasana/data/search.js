import { DEVICES } from './devices'
import { GUIDES } from './guides'
import { FAQS } from './faqs'

/** Normaliza texto: minúsculas y sin acentos, para búsquedas tolerantes. */
export function normalize(text = '') {
  return text.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').trim()
}

/**
 * Construye el índice de búsqueda usando la función de traducción activa.
 * Debe llamarse cada vez que cambie el locale para que los textos coincidan.
 *
 * Cada entrada del índice contiene:
 *   - type: 'faq' | 'device' | 'step'
 *   - id, title, snippet, device (opcional), deviceName (opcional)
 *   - haystack: texto normalizado donde se buscan los términos
 */
export function buildIndex(t) {
  const entries = []

  for (const faq of FAQS) {
    const question = t(`ps.faqs.${faq.id}.question`)
    const answer = t(`ps.faqs.${faq.id}.answer`)
    entries.push({
      type: 'faq',
      id: faq.id,
      title: question,
      snippet: answer,
      device: faq.device,
      haystack: normalize([question, answer, ...(faq.keywords || [])].join(' ')),
    })
  }

  for (const device of DEVICES) {
    const guide = GUIDES[device.id]
    if (!guide) continue
    const name = t(`ps.devices.${device.id}.name`)
    const short = t(`ps.devices.${device.id}.short`)
    const tool = t(`ps.guides.${device.id}.tool`)
    const intro = t(`ps.guides.${device.id}.intro`)
    entries.push({
      type: 'device',
      id: device.id,
      title: name,
      snippet: intro,
      device: device.id,
      haystack: normalize([name, short, tool, intro].join(' ')),
    })
    for (let index = 0; index < guide.stepsCount; index++) {
      const stepTitle = t(`ps.guides.${device.id}.steps.${index}.title`)
      const stepDetail = t(`ps.guides.${device.id}.steps.${index}.detail`)
      entries.push({
        type: 'step',
        id: `${device.id}:${index}`,
        title: stepTitle,
        snippet: stepDetail,
        device: device.id,
        deviceName: name,
        haystack: normalize([name, stepTitle, stepDetail].join(' ')),
      })
    }
  }

  return entries
}

/** Busca en el índice. Devuelve resultados ordenados por relevancia simple. */
export function search(query, index) {
  const q = normalize(query)
  if (q.length < 2) return []
  const terms = q.split(/\s+/).filter(Boolean)

  return index
    .map(entry => {
      let score = 0
      for (const term of terms) {
        if (!entry.haystack.includes(term)) continue
        score += 1
        if (normalize(entry.title).includes(term)) score += 2
      }
      if (score && entry.type !== 'step') score += 0.5
      return { ...entry, score }
    })
    .filter(r => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 12)
}
