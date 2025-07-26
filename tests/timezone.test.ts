import { describe, it, expect } from 'vitest';
import { dt } from '../src/index';
import { ja } from '../src/locales';

// Use a fixed UTC date string to ensure tests are consistent across all systems.
// This is 2:00 PM (14:00) on July 26, 2025, in UTC.
const testDateUTC = '2025-07-26T14:00:00Z';

describe('dt timezone functionality', () => {
  it('should format the time correctly for a US timezone (America/New_York)', () => {
    // New York is UTC-4 during this time of year (EDT). 14:00 UTC should be 10:00 AM.
    const result = dt(testDateUTC).tz('America/New_York').format('YYYY-MM-DD HH:mm:ss');
    expect(result).toBe('2025-07-26 10:00:00');
  });

  it('should format the time correctly for a European timezone (Europe/London)', () => {
    // London is UTC+1 during this time of year (BST). 14:00 UTC should be 3:00 PM (15:00).
    const result = dt(testDateUTC).tz('Europe/London').format('h:mm A');
    expect(result).toBe('3:00 PM');
  });

  it('should handle date changes correctly for an Asian timezone (Asia/Tokyo)', () => {
    // Tokyo is UTC+9. 14:00 UTC on the 26th should be 11:00 PM (23:00) on the 26th.
    // Let's test a time that rolls over to the next day.
    const rolloverDateUTC = '2025-07-26T18:00:00Z'; // 6:00 PM UTC
    const result = dt(rolloverDateUTC).tz('Asia/Tokyo').format('YYYY-MM-DD HH:mm');
    // 6:00 PM UTC + 9 hours = 3:00 AM on the 27th.
    expect(result).toBe('2025-07-27 03:00');
  });

  it('should work correctly when chaining .tz() and .locale()', () => {
    // Test with Japanese locale in Tokyo timezone.
    const result = dt(testDateUTC).tz('Asia/Tokyo').locale(ja).format('DDDD YYYY年M月D日 A h時mm分');
    // Corrected expectation: All numbers should be translated according to the 'ja' locale.
    expect(result).toBe('土曜日 二〇二五年七月二六日 PM 一一時〇〇分');
  });

  it('should default to the system timezone if .tz() is not called', () => {
    // This test is less predictable but verifies the default behavior.
    // It creates a date and formats it with both dt-i18n and the native Date object.
    // The results should match.
    const date = new Date();
    const dtResult = dt(date).format('YYYY-MM-DD HH:mm');

    const nativeHours = String(date.getHours()).padStart(2, '0');
    const nativeMinutes = String(date.getMinutes()).padStart(2, '0');
    const nativeResult = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')} ${nativeHours}:${nativeMinutes}`;

    expect(dtResult).toBe(nativeResult);
  });
});
