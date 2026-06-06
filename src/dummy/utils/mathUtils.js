import { eachDayOfInterval, subDays } from 'zFns'

import { startOfDay, endOfDay, format, isBefore, isSameDay, getMonth, getYear } from 'zFns'

export function getRandom(min = 0, max = 100, decimals = 0) {
  const factor = 10 ** decimals
  return Math.round((Math.random() * (max - min) + min) * factor) / factor
}

function getRandomNumber(min = 0, max = 1000) {
  if (!getRandomNumber.last) getRandomNumber.last = Math.floor((max + min) / 2)
  const variation = Math.floor(Math.random() * 100 - 50) // -50 to +49
  getRandomNumber.last = Math.max(min, Math.min(max, getRandomNumber.last + variation))
  return getRandomNumber.last
}

export const daysArray = eachDayOfInterval({
  start: subDays(new Date(), 13),
  end: new Date(),
})

export const daysTimestamps = () => {
  const ret = daysArray.map(date => {
    return [date.getTime(), getRandomNumber()]
  })
  return ret
}

export function getLipsum(wordCount = 10) {
  const loremIpsum =
    'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum'

  const words = loremIpsum.split(' ')
  const startIndex = Math.floor(Math.random() * (words.length - wordCount + 1))
  return words.slice(startIndex, startIndex + wordCount).join(' ')
}

export function getPercent(value, max = 100) {
  return (100 * value) / max
}
export const getRandomElement = array => {
  if (!Array.isArray(array) || array.length === 0) return null

  const randomIndex = Math.floor(Math.random() * array.length)
  return array[randomIndex]
}

export function generatePercents(n) {
  if (n <= 0) return []
  const numbers = Array(n - 1)
    .fill()
    .map(() => Math.random() * 100)
    .sort((a, b) => a - b)

  // Calculate differences to create n segments that sum to 100
  const result = []
  let previous = 0

  for (let i = 0; i < n - 1; i += 1) {
    result.push(numbers[i] - previous)
    previous = numbers[i]
  }

  result.push(100 - previous)
  return result.map(num => Math.round(num * 100) / 100)
}

export function addDataToPoint(point) {
  const comments = {
    positive: getRandom(100, 5000),
    neutral: getRandom(100, 5000),
    negative: getRandom(100, 5000),
  }
  let tone = 'positive'
  if (comments.neutral > comments.positive && comments.neutral > comments.negative) tone = 'neutral'
  if (comments.negative > comments.positive && comments.negative > comments.neutral)
    tone = 'negative'

  const top_media = {}

  return {
    total_comments: comments.positive + comments.negative + comments.neutral,
    z: comments.positive + comments.negative + comments.neutral,
    growth: getRandom(-10, 10, 2),
    reason: getLipsum(),
    tone,
    top_media,
    ...comments,
    ...point,
  }
}

export const getArrayOfFortnights = (startDate = new Date(2025, 0, 1), endDate = new Date()) => {
  const fortnights = []
  let id = 1
  const startYear = getYear(startDate)
  const endYear = getYear(endDate)
  const startMonth = getMonth(startDate)
  const endMonth = getMonth(endDate)

  for (let year = startYear; year <= endYear; year += 1) {
    const monthStart = year === startYear ? startMonth : 0
    const monthEnd = year === endYear ? endMonth : 11

    for (let month = monthStart; month <= monthEnd; month += 1) {
      // Primera quincena: días 1 al 15
      const firstFortnightStart = startOfDay(new Date(year, month, 1))
      const firstFortnightEnd = endOfDay(new Date(year, month, 15))

      // Incluir si la quincena se superpone con el rango [startDate, endDate]
      if (
        (isBefore(firstFortnightStart, endDate) || isSameDay(firstFortnightStart, endDate)) &&
        (isBefore(startDate, firstFortnightEnd) || isSameDay(startDate, firstFortnightEnd))
      ) {
        fortnights.push({
          value: id,
          // label: `Quincena ${id}`,
          label: `Quincena ${id.toString().padStart(2, '0')}`,
          // startDate: format(firstFortnightStart, 'yyyy-MM-dd'),
          // endDate: format(firstFortnightEnd, 'yyyy-MM-dd'),
          extra_label: `(${format(firstFortnightStart, 'ddMMM')}-${format(firstFortnightEnd, 'ddMMM')})`,
        })
        id += 1
      }

      // Segunda quincena: días 16 al último día del mes
      const secondFortnightStart = startOfDay(new Date(year, month, 16))
      const secondFortnightEnd = endOfDay(new Date(year, month + 1, 0)) // Último día del mes

      // Incluir si la quincena se superpone con el rango [startDate, endDate]
      if (
        (isBefore(secondFortnightStart, endDate) || isSameDay(secondFortnightStart, endDate)) &&
        (isBefore(startDate, secondFortnightEnd) || isSameDay(startDate, secondFortnightEnd))
      ) {
        fortnights.push({
          value: id,
          label: `Quincena ${id.toString().padStart(2, '0')}`,
          // startDate: format(secondFortnightStart, 'yyyy-MM-dd'),
          // endDate: format(secondFortnightEnd, 'yyyy-MM-dd'),
          extra_label: `(${format(secondFortnightStart, 'ddMMM')}-${format(secondFortnightEnd, 'ddMMM')})`,
        })
        id += 1
      }
    }
  }

  return fortnights
}

export const filterOptionsByParam = (opt, param) => {
  return Array.isArray(param) && param.length > 0 ? param.includes(opt) : true
}
