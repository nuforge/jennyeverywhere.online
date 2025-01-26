import { describe, it, expect } from 'vitest'
import Tag from '@/objects/nu/Tag'
import StringUtils from '@/utils/StringUtils'

describe('Tag', () => {
  it('should create a Tag instance with default values', () => {
    const tag = new Tag('defaultSeed')
    expect(tag).toBeInstanceOf(Tag)
  })

  it('should clean value correctly', () => {
    expect(StringUtils.CleanString('  test  ')).toBe('test')
    expect(StringUtils.CleanString(undefined)).toBe('')
  })

  it('should normalize tag name correctly', () => {
    expect(StringUtils.normalizeTagName('Test Tag')).toBe('test-tag')
  })

  it('should parse string correctly', () => {
    expect(StringUtils.parseString('space:label')).toEqual({
      space: 'space',
      name: 'label',
    })
    expect(StringUtils.parseString('label')).toEqual({ name: 'label' })
  })

  it('should extract keywords correctly', () => {
    const input = 'This is a test string'
    const { individual, grouped } = StringUtils.extractKeywords(input)
    expect(individual).toEqual(['this', 'is', 'a', 'test', 'string'])
    expect(grouped).toContain('this is')
    expect(grouped).toContain('is a')
    expect(grouped).toContain('a test')
    expect(grouped).toContain('test string')
  })

  it('should extract scoped keywords correctly', () => {
    const input = 'space:name'
    const scopedKeywords = StringUtils.extractScopedKeywords(input)
    expect(scopedKeywords).toEqual(['space', 'name'])
  })

  it('should handle empty string in normalizeTagName', () => {
    expect(StringUtils.normalizeTagName('')).toBe('')
  })

  it('should handle empty string in parseString', () => {
    expect(StringUtils.parseString('')).toEqual({ name: '' })
  })

  it('should handle invalid format in parseString', () => {
    expect(StringUtils.parseString('invalid:format:here')).toEqual({
      space: 'invalid',
      name: 'format:here',
    })
  })
})
