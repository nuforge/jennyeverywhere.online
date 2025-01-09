import chroma from 'chroma-js'
import tinycolor from 'tinycolor2'

/* AI PLAYGROUND - LOTS OF CHATGPT COPYPASTA */

const getColorCategory = (r: number, g: number, b: number) => {
  if (r > g && r > b) {
    if (g > b)
      return 'Orange' // More green than blue
    else return 'Red' // Dominant red
  } else if (g > r && g > b) {
    if (r > b)
      return 'Lime' // More red than blue
    else return 'Green' // Dominant green
  } else if (b > r && b > g) {
    if (r > g)
      return 'Purple' // More red than green
    else return 'Blue' // Dominant blue
  }
  return 'Gray' // No dominant color
}

const color = chroma('red') // Automatically maps to a color
console.log(color.hsl()) // Returns HSL representation

const getColorName = (hex: string) => {
  const color = chroma(hex)
  console.log(color.name()) // Returns the color name
  const closest = chroma.scale(['#000000', '#ffffff']).mode('lab').colors(10) // Example scale for simplicity
  // For more accurate results, you can integrate a color name database or library
  return closest
}

const hexToColorName = (hex: string) => {
  console.log(hex)
  const color = tinycolor(hex)
  console.log(color)
  return color.toName() // Returns a standardized color name (if available)
}

/*
1. Convert HEX to HSL:
We can write a function to convert a HEX color to HSL.*/

function hexToRgb(hex: string) {
  const hexRegex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i
  const result = hexRegex.exec(hex)
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null
}

function rgbToHsl_alt(r: number, g: number, b: number): { h: number; s: number; l: number } {
  r /= 255
  g /= 255
  b /= 255

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  const delta = max - min

  let h = 0
  let s = 0
  const l = (max + min) / 2

  if (delta !== 0) {
    if (max === r) {
      h = (g - b) / delta
    } else if (max === g) {
      h = (b - r) / delta + 2
    } else {
      h = (r - g) / delta + 4
    }

    s = delta / (1 - Math.abs(2 * l - 1))
    h *= 60
    if (h < 0) h += 360
  }

  return { h, s: s * 100, l: l * 100 }
}
// Convert RGB to HSL
function rgbToHsl(r: number, g: number, b: number): { h: number; s: number; l: number } {
  r /= 255
  g /= 255
  b /= 255

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  let h = (max + min) / 2
  let s = h
  const l = h

  if (max === min) {
    h = s = 0 // achromatic
  } else {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0)
        break
      case g:
        h = (b - r) / d + 2
        break
      case b:
        h = (r - g) / d + 4
        break
    }
    h /= 6
  }

  return {
    h: h * 360,
    s: s * 100,
    l: l * 100,
  }
}

// Convert HEX to HSL
function hexToHsl(hex: string): { h: number; s: number; l: number } {
  const { r, g, b } = hexToRgb(hex) || { r: 0, g: 0, b: 0 }
  return rgbToHsl(r, g, b)
}

console.log(hexToHsl('#00ff00'), rgbToHsl_alt(0, 255, 0)) // Should print HSL values for green

/*
2. Convert HSL to HEX:
To go from HSL back to HEX, you can use the following:

typescript
Copy code */

function hslToRgb(h: number, s: number, l: number): { r: number; g: number; b: number } {
  s /= 100
  l /= 100

  const c = (1 - Math.abs(2 * l - 1)) * s
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1))
  const m = l - c / 2

  let r = 0,
    g = 0,
    b = 0

  if (h >= 0 && h < 60) {
    r = c
    g = x
    b = 0
  } else if (h >= 60 && h < 120) {
    r = x
    g = c
    b = 0
  } else if (h >= 120 && h < 180) {
    r = 0
    g = c
    b = x
  } else if (h >= 180 && h < 240) {
    r = 0
    g = x
    b = c
  } else if (h >= 240 && h < 300) {
    r = x
    g = 0
    b = c
  } else if (h >= 300 && h < 360) {
    r = c
    g = 0
    b = x
  }

  r = Math.round((r + m) * 255)
  g = Math.round((g + m) * 255)
  b = Math.round((b + m) * 255)

  return { r, g, b }
}

function hslToHex(h: number, s: number, l: number): string {
  const { r, g, b } = hslToRgb(h, s, l)
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`
}

console.log(hslToHex(120, 100, 50)) // Should print HEX for green

// To extract color information from an image, you can use the Canvas API to sample colors. Here’s how you can pull colors from an image:

function getImageColors(imageUrl: string): Promise<string[]> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.crossOrigin = 'Anonymous' // Handle cross-origin images
    img.src = imageUrl

    img.onload = () => {
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      if (!ctx) {
        reject('Failed to get context')
        return
      }

      canvas.width = img.width
      canvas.height = img.height
      ctx.drawImage(img, 0, 0, img.width, img.height)

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      const colors: string[] = []

      for (let i = 0; i < imageData.data.length; i += 4) {
        const r = imageData.data[i]
        const g = imageData.data[i + 1]
        const b = imageData.data[i + 2]
        const hex = rgbToHex(r, g, b)
        colors.push(hex)
      }

      resolve(colors)
    }

    img.onerror = (error) => {
      reject(error)
    }
  })
}

function rgbToHex(r: number, g: number, b: number): string {
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`
}

getImageColors('https://example.com/image.jpg').then((colors) => {
  console.log(colors)
})

export {
  hexToHsl,
  hslToHex,
  getImageColors,
  hslToRgb,
  rgbToHsl,
  getColorName,
  hexToColorName,
  getColorCategory,
}
