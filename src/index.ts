import { DateUtils } from './core/DateUtils';
import { Interval } from './core/Interval';
import type { LocaleData } from './types';

/**
 * Main factory function to create a new DateUtils instance. It can be called in multiple ways:
 * - dt()
 * - dt(date)
 * - dt(date, locale)
 * - dt(dateString, formatString)
 * - dt(dateString, formatString, locale)
 */
const dt = (date?: Date | string | number, formatOrLocale?: string | LocaleData, locale?: LocaleData) => new DateUtils(date, formatOrLocale, locale);

/**
 * A new Interval object from a start and end date.
 */
dt.interval = (start: DateUtils, end: DateUtils): Interval => new Interval(start, end)

export { dt };
