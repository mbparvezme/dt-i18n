import { describe, it, expect } from 'vitest';
import { dt } from '../src/index';
import { bn, hi } from '../src/locales';

// Date for the tests
const testDate = '2025-07-26T11:38:00';

describe('dt formatter', () => {
  it('should format a given date correctly in English (default)', () => {
    const result = dt(testDate).format('YYYY-MM-DD');
    expect(result).toBe('2025-07-26');
  });

  it('should format a given date and time correctly', () => {
    const result = dt(testDate).format('DD/MM/YYYY hh:mm:ss A');
    expect(result).toBe('26/07/2025 11:38:00 AM');
  });

  it('should format month and day names correctly in English', () => {
    // Corrected token from MMMMM to MMMM
    const result = dt(testDate).format('DDDD, MMMM D, YYYY');
    expect(result).toBe('Saturday, July 26, 2025');
  });

  it('should translate the date into Bengali when bn locale is used', () => {
    // Corrected token from MMMMM to MMMM
    const result = dt(testDate).locale(bn).format('DDDD, DD MMMM, YYYY');
    expect(result).toBe('শনিবার, ২৬ জুলাই, ২০২৫');
  });

  it('should translate the numbers into Hindi when hi locale is used', () => {
    const result = dt(testDate).locale(hi).format('YYYY-MM-DD hh:mm');
    expect(result).toBe('२०२५-०७-२६ ११:३८');
  });

  it('should handle different formatting tokens correctly', () => {
    const result = dt(testDate).format('YY M D h m s');
    expect(result).toBe('25 7 26 11 38 0');
  });
});

describe('Custom Format Parsing', () => {
  it('should parse a DD/MM/YYYY date string correctly', () => {
    const date = dt('26/07/2025', 'DD/MM/YYYY');
    expect(date.format('YYYY-MM-DD')).toBe('2025-07-26');
  });

  it('should parse a date with time and AM/PM correctly', () => {
    const date = dt('July 26, 2025 03:30 PM', 'MMMM DD, YYYY hh:mm A');
    expect(date.format('HH:mm')).toBe('15:30');
  });
});