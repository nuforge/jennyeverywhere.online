import cssColors from './cssColors.json' // Pre-loaded CSS colors
import xkcdColors from './xkcdColors.json' // XKCD colors dataset

// Example data format
const cssColors = [
  { name: 'red', hex: '#FF0000' },
  { name: 'blue', hex: '#0000FF' },
]

const xkcdColors = [
  { name: 'red', hex: '#FF0000' },
  { name: 'bluey green', hex: '#2A4B54' },
]

import { hexToHsl, hexToLab } from 'color-conversion-library' // Use a library or write custom functions

function calculateDistance(color1, color2, mode = 'LAB') {
  if (mode === 'LAB') {
    const lab1 = hexToLab(color1)
    const lab2 = hexToLab(color2)
    return Math.sqrt((lab1.l - lab2.l) ** 2 + (lab1.a - lab2.a) ** 2 + (lab1.b - lab2.b) ** 2)
  } else if (mode === 'HSL') {
    const hsl1 = hexToHsl(color1)
    const hsl2 = hexToHsl(color2)
    return Math.abs(hsl1.h - hsl2.h) // Simplified for hue distance
  }
}
