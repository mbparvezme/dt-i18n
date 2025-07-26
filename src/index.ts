import { DateUtils } from './core/DateUtils';
import { Interval } from './core/Interval';
import type { LocaleData } from './types';

/**
 * The main factory function to create a new DateUtils instance.
 * Can be called in multiple ways:
 * - dt()
 * - dt(date)
 * - dt(date, locale)
 * - dt(dateString, formatString)
 * - dt(dateString, formatString, locale)
 */
const dt = (date?: Date | string | number, formatOrLocale?: string | LocaleData, locale?: LocaleData) =>{
  return new DateUtils(date, formatOrLocale, locale);
}

/**
 * Creates a new Interval object from a start and end date.
 */
dt.interval = (start: DateUtils, end: DateUtils): Interval => new Interval(start, end)

// Export the dt function and its static method
export { dt };
