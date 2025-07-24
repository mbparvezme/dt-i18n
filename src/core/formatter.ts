import type { LocaleData } from '../types/index';

/**
 * Formats a Date object into a string using a format string and locale data.
 * @param date - The Date object to format.
 * @param format - The format string with tokens.
 * @param locale - The locale data containing translations.
 * @returns The formatted and localized string.
 */
export function formatDateTime(date: Date, format: string, locale: LocaleData): string {
  const year = date.getFullYear();
  const month = date.getMonth(); // 0-11
  const dayOfMonth = date.getDate();
  const dayOfWeek = date.getDay(); // 0-6 (Sun-Sat)
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  // Create a map of format tokens to their corresponding values.
  const tokens: { [key: string]: string } = {
    // Year
    YYYY: String(year),
    YY: String(year).slice(-2),

    // Month
    MMMM: locale.months[month],
    MMM: locale.months[month].substring(0, 3), // Or you can add a `monthsShort` to your locale data
    MM: String(month + 1).padStart(2, '0'),
    M: String(month + 1),

    // Day
    DD: String(dayOfMonth).padStart(2, '0'),
    D: String(dayOfMonth),
    dddd: locale.weekdays[dayOfWeek],
    ddd: locale.weekdays[dayOfWeek].substring(0, 3), // Or add `weekdaysShort`

    // Hour
    HH: String(hours).padStart(2, '0'), // 24-hour
    H: String(hours),
    hh: String(hours % 12 || 12).padStart(2, '0'), // 12-hour
    h: String(hours % 12 || 12),

    // Minute
    mm: String(minutes).padStart(2, '0'),
    m: String(minutes),

    // Second
    ss: String(seconds).padStart(2, '0'),
    s: String(seconds),

    // AM/PM
    A: hours >= 12 ? 'PM' : 'AM',
    a: hours >= 12 ? 'pm' : 'am',
  };

  // Build a regex to find all supported tokens.
  const tokenRegex = /YYYY|YY|MMMM|MMM|MM|M|DD|D|dddd|ddd|HH|H|hh|h|mm|m|ss|s|A|a/g;

  // Replace tokens with their values.
  const formattedString = format.replace(tokenRegex, (match) => tokens[match] || match);

  // Finally, translate any numbers in the resulting string using the locale's method.
  return locale.localizeNumber(formattedString);
}
