import { describe, it, expect } from 'vitest';
import { dt } from '../src/index';

// A fixed date for predictable test results
const testDate = '2025-07-26T10:30:45';

describe('dt-i18n Math and Manipulation', () => {

  // --- 1. MANIPULATION METHODS ---
  describe('Manipulation: add() and subtract()', () => {
    it('should add 5 days to the date', () => {
      const result = dt(testDate).add(5, 'days').format('YYYY-MM-DD');
      expect(result).toBe('2025-07-31');
    });

    it('should subtract 2 months from the date', () => {
      const result = dt(testDate).subtract(2, 'months').format('YYYY-MM-DD');
      expect(result).toBe('2025-05-26');
    });

    it('should chain multiple add/subtract calls correctly', () => {
      const result = dt(testDate).add(1, 'year').subtract(2, 'months').add(5, 'days').format('YYYY-MM-DD');
      expect(result).toBe('2026-05-31');
    });
  });

  describe('Manipulation: startOf() and endOf()', () => {
    it('should get the start of the day', () => {
      const result = dt(testDate).startOf('day').format('YYYY-MM-DD HH:mm:ss');
      expect(result).toBe('2025-07-26 00:00:00');
    });

    it('should get the end of the month', () => {
      const result = dt(testDate).endOf('month').format('YYYY-MM-DD HH:mm:ss');
      // July has 31 days
      expect(result).toBe('2025-07-31 23:59:59');
    });

    it('should get the start of the year', () => {
      const result = dt(testDate).startOf('year').format('YYYY-MM-DD HH:mm:ss');
      expect(result).toBe('2025-01-01 00:00:00');
    });
  });

  // --- 2. COMPARISON METHODS ---
  describe('Comparison: isBefore(), isAfter(), isSameDay(), isSameMonth()', () => {
    const dateA = dt('2025-10-10');
    const dateB = dt('2025-11-11');
    const dateC = dt('2025-10-10T23:00:00');

    it('isBefore() should return true for a date that is earlier', () => {
      expect(dateA.isBefore(dateB)).toBe(true);
    });

    it('isAfter() should return true for a date that is later', () => {
      expect(dateB.isAfter(dateA)).toBe(true);
    });

    it('isSameDay() should return true for different times on the same day', () => {
      expect(dateA.isSameDay(dateC)).toBe(true);
    });

    it('isSameDay() should return false for different days', () => {
      expect(dateA.isSameDay(dateB)).toBe(false);
    });

    it('isSameMonth() should return true for different days in the same month', () => {
      expect(dateA.isSameMonth(dateC)).toBe(true);
    });

    it('isSameMonth() should return false for different months', () => {
      expect(dateA.isSameMonth(dateB)).toBe(false);
    });
  });

  // --- 3. QUERY METHODS ---
  describe('Query: diff()', () => {
    const date1 = dt('2025-01-01');
    const date2 = dt('2026-01-01');

    it('should calculate the difference in days', () => {
      // 2025 is not a leap year
      expect(date2.diff(date1).as('days')).toBe(365);
    });

    it('should calculate the difference in months (approximate)', () => {
      // Duration.as('months') is an approximation based on the average month length
      expect(date2.diff(date1).as('months')).toBeCloseTo(12, 1);
    });

    it('should calculate the difference in years (approximate)', () => {
      expect(date2.diff(date1).as('years')).toBeCloseTo(1, 1);
    });
  });

  // --- 4. GETTER & UTILITY METHODS ---
  describe('Getters: dayOfYear(), weekOfYear(), quarter()', () => {
    it('should return the correct day of the year', () => {
      // July 26 is the 207th day of 2025
      expect(dt(testDate).dayOfYear()).toBe(207);
    });

    it('should return the correct week of the year', () => {
      expect(dt(testDate).weekOfYear()).toBe(30);
    });

    it('should return the correct quarter of the year', () => {
      // July is in the 3rd quarter
      expect(dt(testDate).quarter()).toBe(3);
    });
  });

  // --- 5. CALENDAR GENERATION ---
  describe('Calendar Generation: calendar()', () => {
    const calendarGrid = dt(testDate).calendar();

    it('should generate a grid with 6 weeks', () => {
      expect(calendarGrid.length).toBe(6);
    });

    it('should generate a grid where each week has 7 days', () => {
      expect(calendarGrid[0].length).toBe(7);
      expect(calendarGrid[5].length).toBe(7);
    });

    it('should start on the correct Sunday before the month begins', () => {
      // July 2025 starts on a Tuesday. The calendar should start on the previous Sunday, June 29.
      const firstDay = calendarGrid[0][0];
      expect(firstDay.format('YYYY-MM-DD')).toBe('2025-06-29');
    });

    it('should contain the first day of the month', () => {
      const firstDayOfMonth = calendarGrid[0][2]; // Tuesday
      expect(firstDayOfMonth.format('YYYY-MM-DD')).toBe('2025-07-01');
    });
  });


  // --- 6. DURATION & INTERVAL ---
  describe('Duration and Interval', () => {
    const start = dt('2025-01-01');
    const end = dt('2025-01-11');
    const interval = dt.interval(start, end);

    it('should create an interval and check if it contains a date', () => {
      expect(interval.contains('2025-01-05')).toBe(true);
      expect(interval.contains('2025-01-15')).toBe(false);
    });

    it('should correctly calculate the duration of an interval', () => {
      const duration = interval.toDuration();
      expect(duration.as('days')).toBe(10);
      expect(duration.as('hours')).toBe(240);
    });

    it('should automatically swap start and end dates if they are in the wrong order', () => {
      const reversedInterval = dt.interval(end, start);
      expect(reversedInterval.start.isSameDay(start)).toBe(true);
      expect(reversedInterval.end.isSameDay(end)).toBe(true);
    });
  });

});
