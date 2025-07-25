import { describe, it, expect } from 'vitest'
import locales from '../src/locales'

Object.entries(locales).forEach(([key, locale]) => {
  describe(`${key} locale`, () => {
    it('should localize digits', () => {
      expect(locale.localizeNumber('2025')).not.toBe('2025')
    })

    it('should have 12 months', () => {
      expect(locale.months.length).toBe(12)
    })

    it('should have 7 weekdays', () => {
      expect(locale.weekdays.length).toBe(7)
    })
  })
})
