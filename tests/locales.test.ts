import { describe, it, expect } from 'vitest';
import * as locales from '../src/locales/index';

// No need to test the 'en' local
const localesToTest = Object.entries(locales).filter(([key]) => key !== 'en');

describe('Locale data integrity', () => {
  it('English (en) locale should have 12 months and 7 weekdays', () => {
    expect(locales.en.months).toHaveLength(12);
    expect(locales.en.weekdays).toHaveLength(7);
  });

  // Loop through all other locales to ensure they are complete
  for (const [key, locale] of localesToTest) {
    describe(`${key} locale`, () => {
      it('should have 12 months', () => {
        expect(locale.months).toHaveLength(12);
      });

      it('should have 7 weekdays', () => {
        expect(locale.weekdays).toHaveLength(7);
      });

      it('should have 10 number strings for digit localization', () => {
        expect(locale.numbers).toHaveLength(10);
      });
    });
  }
});
