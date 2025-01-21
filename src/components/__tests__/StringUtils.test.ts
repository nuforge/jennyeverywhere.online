import { describe, it, expect } from 'vitest'
import StringUtils from '@/utils/StringUtils'

describe('StringUtils', () => {
  it('should clean string with default options', () => {
    expect(StringUtils.CleanString('  Hello World  ')).toBe('Hello World')
  })

  it('should extract keywords correctly', () => {
    const result = StringUtils.extractKeywords('hello world hello')
    expect(result.individual).toEqual(['hello', 'world'])
    expect(result.grouped).toEqual(['hello world'])
  })
})
