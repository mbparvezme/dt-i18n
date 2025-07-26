import type { LocaleData, TimeUnit } from '../types/index'
import { formatDateTime } from './helpers/formatter'
import en from '../locales/en'
import { getDateParts } from './helpers/date-parts'
import { dt } from '../index'
import { Duration } from './Duration'
import { parseDate } from './helpers/parser'

export class DateUtils {
  private date: Date;
  private currentLocale: LocaleData = en;
  private timezone: string | undefined = undefined;

  // --- 1. CONSTRUCTOR ---
  constructor(date?: Date | string | number, formatOrLocale?: string | LocaleData, locale?: LocaleData) {
    let d: Date;
    let loc: LocaleData | undefined;

    // Handle different constructor overloads
    if (typeof formatOrLocale === 'string') {
      // The format string is provided.
      // The third argument, `locale`, is the locale to use for parsing.
      // If `locale` is not provided, it defaults to English.
      const parsingLocale = locale || en;
      d = parseDate(String(date), formatOrLocale, parsingLocale);
      loc = parsingLocale; // The instance should use the locale it was parsed with.
    } else {
      // Standard constructor: dt('2025-07-26') or dt(timestamp)
      d = new Date(date ?? Date.now());
      loc = formatOrLocale as LocaleData; // The second argument is the locale
    }

    this.date = isNaN(d.getTime()) ? new Date() : d;
    this.currentLocale = loc || en;
  }

  // --- 2. CONFIGURATION METHODS ---
  locale(localeObject: LocaleData): this {
    this.currentLocale = localeObject;
    return this;
  }

  tz(timezone: string): this {
    this.timezone = timezone;
    return this;
  }

  // --- 3. MANIPULATION METHODS ---
  add(value: number, unit: TimeUnit): this {
    const newDate = new Date(this.date);
    switch (unit) {
      case 'year': case 'years': newDate.setFullYear(newDate.getFullYear() + value); break;
      case 'month': case 'months': newDate.setMonth(newDate.getMonth() + value); break;
      case 'day': case 'days': newDate.setDate(newDate.getDate() + value); break;
      case 'hour': case 'hours': newDate.setHours(newDate.getHours() + value); break;
      case 'minute': case 'minutes': newDate.setMinutes(newDate.getMinutes() + value); break;
      case 'second': case 'seconds': newDate.setSeconds(newDate.getSeconds() + value); break;
    }
    this.date = newDate;
    return this;
  }

  subtract(value: number, unit: TimeUnit): this {
    return this.add(-value, unit);
  }

  startOf(unit: TimeUnit): this {
    const newDate = new Date(this.date);
    switch (unit) {
      case 'year': case 'years':
        newDate.setMonth(0, 1);
        newDate.setHours(0, 0, 0, 0);
        break;
      case 'month': case 'months':
        newDate.setDate(1);
        newDate.setHours(0, 0, 0, 0);
        break;
      case 'day': case 'days':
        newDate.setHours(0, 0, 0, 0);
        break;
      case 'hour': case 'hours':
        newDate.setMinutes(0, 0, 0);
        break;
      case 'minute': case 'minutes':
        newDate.setSeconds(0, 0);
        break;
      case 'second': case 'seconds':
        newDate.setMilliseconds(0);
        break;
    }
    this.date = newDate;
    return this;
  }

  endOf(unit: TimeUnit): this {
    const newDate = new Date(this.date);
    switch (unit) {
      case 'year': case 'years':
        newDate.setFullYear(newDate.getFullYear() + 1, 0, 0);
        newDate.setHours(23, 59, 59, 999);
        newDate.setDate(0);
        break;
      case 'month': case 'months':
        newDate.setMonth(newDate.getMonth() + 1, 0);
        newDate.setHours(23, 59, 59, 999);
        break;
      case 'day': case 'days':
        newDate.setHours(23, 59, 59, 999);
        break;
      case 'hour': case 'hours':
        newDate.setMinutes(59, 59, 999);
        break;
      case 'minute': case 'minutes':
        newDate.setSeconds(59, 999);
        break;
      case 'second': case 'seconds':
        newDate.setMilliseconds(999);
        break;
    }
    this.date = newDate;
    return this;
  }

  // --- 4. QUERY & COMPARISON METHODS ---
  isBefore(otherDate: Date | string | number | DateUtils): boolean {
    const otherDateObj = otherDate instanceof DateUtils ? otherDate.toDate() : new Date(otherDate);
    return this.date.getTime() < otherDateObj.getTime();
  }

  isAfter(otherDate: Date | string | number | DateUtils): boolean {
    const otherDateObj = otherDate instanceof DateUtils ? otherDate.toDate() : new Date(otherDate);
    return this.date.getTime() > otherDateObj.getTime();
  }

  isSameDay(otherDate: Date | string | number | DateUtils): boolean {
    const otherDateObj = otherDate instanceof DateUtils ? otherDate.toDate() : new Date(otherDate);
    return this.date.getFullYear() === otherDateObj.getFullYear() &&
      this.date.getMonth() === otherDateObj.getMonth() &&
      this.date.getDate() === otherDateObj.getDate();
  }

  isSameMonth(otherDate: Date | string | number | DateUtils): boolean {
    const otherDateObj = otherDate instanceof DateUtils ? otherDate.toDate() : new Date(otherDate);
    return this.date.getFullYear() === otherDateObj.getFullYear() &&
      this.date.getMonth() === otherDateObj.getMonth();
  }

  diff(otherDate: Date | string | number | DateUtils): Duration {
    const otherDateObj = otherDate instanceof DateUtils ? otherDate.toDate() : new Date(otherDate);
    const ms = this.date.getTime() - otherDateObj.getTime();
    return new Duration(ms);
  }

  // --- 5. GETTER & UTILITY METHODS ---
  toDate(): Date {
    return this.date;
  }

  dayOfYear(): number {
    const start = new Date(this.date.getFullYear(), 0, 0);
    const diff = (this.date.getTime() - start.getTime()) + ((start.getTimezoneOffset() - this.date.getTimezoneOffset()) * 60 * 1000);
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
  }

  weekOfYear(): number {
    const start = new Date(this.date.getFullYear(), 0, 1);
    const days = Math.floor((this.date.getTime() - start.getTime()) / (24 * 60 * 60 * 1000));
    return Math.ceil((days + start.getDay() + 1) / 7);
  }

  quarter(): number {
    return Math.floor(this.date.getMonth() / 3) + 1;
  }

  // --- 6. DISPLAY & OUTPUT METHODS ---
  calendar(): DateUtils[][] {
    const startOfMonth = this.startOf('month').toDate();
    const firstDayOfWeek = startOfMonth.getDay(); // 0 for Sunday, 1 for Monday...

    // Find the very first day to display on the calendar grid
    const calendarStart = dt(startOfMonth).subtract(firstDayOfWeek, 'days');

    const calendar: DateUtils[][] = [];
    let currentDay = calendarStart;

    // Generate 6 weeks for a consistent grid size
    for (let i = 0; i < 6; i++) {
      const week: DateUtils[] = [];
      for (let j = 0; j < 7; j++) {
        // Create a new dt instance for each day, preserving the locale
        week.push(dt(currentDay.toDate(), this.currentLocale));
        currentDay = currentDay.add(1, 'day');
      }
      calendar.push(week);
    }

    return calendar;
  }

  format(formatString: string): string {
    const dateParts = getDateParts(this.date, this.timezone);
    return formatDateTime(dateParts, formatString, this.currentLocale);
  }
}
