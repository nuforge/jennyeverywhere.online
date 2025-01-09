import chroma from 'chroma-js'

import cssColors from '@/assets/color/css.base.json' // Pre-loaded CSS colors
import { convertColor, hexToHsl } from '@/objects/chatgpt/Colors' // Use a library or write custom functions
console.log(cssColors)

export interface ColorData {
  hex: string
  rgb: [number, number, number]
  hsl: [number, number, number]
  lab: [number, number, number]
  cmyk: [number, number, number, number]
}

function getColorName(hex: string) {
  const color = chroma(hex)
  console.log(color.name()) // Returns the color name
  const closest = chroma.scale(['#000000', '#ffffff']).mode('lab').colors(10) // Example scale for simplicity
  console.log(closest) // Returns the color name
  // For more accurate results, you can integrate a color name database or library
  return closest
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

export { calculateDistance, getColorName } // , findClosestColor, findColorWithTier
