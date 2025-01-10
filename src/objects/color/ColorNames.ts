import cssColors from '@/assets/color/css.base.json' // Pre-loaded CSS colors
import xkcdColors from '@/assets/color/xkcd.colors.json' // Pre-loaded CSS colors
import { convertColor, hexToHsl } from '@/objects/color/Colors' // Use a library or write custom functions

export interface ColorData {
  hex: string
  rgb: [number, number, number]
  hsl: [number, number, number]
  lab: [number, number, number]
  cmyk: [number, number, number, number]
}
type ColorDictionary = { [key: string]: string }

export const namedColors: Record<string, string> = { ...cssColors, ...xkcdColors }

export function findByKey(obj: Record<string, string>, key: string): string | undefined {
  return key in obj ? obj[key] : undefined
}
export function findByValue(obj: Record<string, string>, value: string): string[] {
  return Object.keys(obj).filter((k) => obj[k] === value)
}

export function mergeColorDictionaries(
  cssColors: ColorDictionary,
  xkcdColors: ColorDictionary,
): ColorDictionary {
  const mergedColors: ColorDictionary = { ...cssColors }

  for (const key in xkcdColors) {
    if (mergedColors[key]) {
      // Both dictionaries contain the same key
      // Optionally handle conflict resolution here
      console.warn(`Duplicate color key: ${key}. Using xkcdColors value.`)
    }
    mergedColors[key] = xkcdColors[key]
  }

  return mergedColors
}

function calculateDistance(color1: number | string, color2: number | string, mode = 'LAB') {
  if (mode === 'LAB') {
    const lab1 = convertColor(color1.toString()).lab
    const lab2 = convertColor(color2.toString()).lab
    return Math.sqrt((lab1[0] - lab2[0]) ** 2 + (lab1[1] - lab2[1]) ** 2 + (lab1[2] - lab2[2]) ** 2)
  } else if (mode === 'HSL') {
    const hsl1 = hexToHsl(color1.toString())
    const hsl2 = hexToHsl(color2.toString())
    return Math.abs(hsl1.h - hsl2.h) // Simplified for hue distance
  }
}

// // Case-insensitive key search
// const caseInsensitiveKey = 'BlAcK'
// const normalizedKey = Object.keys(namedColors).find(
//   (key) => key.toLowerCase() === caseInsensitiveKey.toLowerCase(),
// )

// console.log(
//   normalizedKey ? `Found: ${normalizedKey} = ${namedColors[normalizedKey]}` : 'Key not found.',
// )

// // Case-insensitive value search
// const caseInsensitiveValue = '#000000'
// const matchingKeysInsensitive = Object.keys(namedColors).filter(
//   (key) => namedColors[key].toLowerCase() === caseInsensitiveValue.toLowerCase(),
// )

// console.log(
//   matchingKeysInsensitive.length > 0
//     ? `Found keys: ${matchingKeysInsensitive}`
//     : 'Value not found.',
// )

// function findClosestColor(hex: string, dataset: { name: string, hex: string }[], mode = 'LAB') {
//   let closest = null
//   let minDistance = Infinity

//   dataset.forEach((color) => {
//     const distance = calculateDistance(hex, color.hex, mode)
//     if (distance < minDistance) {
//       minDistance = distance
//       closest = color
//     }
//   })

//   return closest || { name: 'Unknown', hex }
// }

// function findColorWithTier(hex: string, tier, userCustomColors = []) {
//   let dataset = []

//   switch (tier) {
//     case 'Primary': // Only primary colors
//       dataset = cssColors.filter((color) => ['red', 'green', 'blue'].includes(color.name))
//       break
//     case 'CSS':
//       dataset = cssColors
//       break
//     case 'XKCD':
//       dataset = xkcdColors
//       break
//     case 'Custom':
//       dataset = userCustomColors
//       break
//     default:
//       dataset = [...cssColors, ...xkcdColors, ...userCustomColors]
//   }

//   return findClosestColor(hex: string, dataset)
// }

// const userCustomColors = [{ name: 'threat yellow', hex: '#FFD700' }]

// const hex = '#FFC107' // Example target color
// const tier = 'Custom' // User-selected tier
// const match = findColorWithTier(hex: string, tier, userCustomColors)

// console.log(`Closest match: ${match.name} (${match.hex})`)

export { calculateDistance } // , findClosestColor, findColorWithTier
