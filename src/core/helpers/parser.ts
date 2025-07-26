import type { LocaleData } from '../../types';

/**
 * An interface to hold the parts of a date parsed from a string.
 */
interface ParsedParts {
  year?: number;
  month?: number; // 1-12
  day?: number;
  hour?: number;
  minute?: number;
  second?: number;
  ampm?: 'am' | 'pm';
}

/**
 * Parses a date string according to a specified format string and locale.
 * @param dateString The string representation of the date.
 * @param formatString The format to parse against (e.g., 'DD/MM/YYYY').
 * @param locale The locale data containing month and day names.
 * @returns A valid Date object, or an invalid Date if parsing fails.
 */
export function parseDate(dateString: string, formatString: string, locale: LocaleData): Date {
  const tokenRegex = /YYYY|YY|MMMM|MM|M|DDDD|DD|D|HH|H|hh|h|mm|m|ss|s|A|a/g;

  const tokens: string[] = [];
  const regexString = formatString.replace(tokenRegex, (match) => {
    tokens.push(match);
    switch (match) {
      case 'YYYY': return '(\\d{4})';
      case 'YY': return '(\\d{2})';
      case 'MM': case 'DD': case 'HH': case 'hh': case 'mm': case 'ss': return '(\\d{2})';
      case 'M': case 'D': case 'H': case 'h': case 'm': case 's': return '(\\d{1,2})';
      case 'A': return '(AM|PM)';
      case 'a': return '(am|pm)';
      case 'MMMM': return `(${locale.months.join('|')})`;
      case 'DDDD': return `(${locale.weekdays.join('|')})`;
      default: return match;
    }
  });

  // Use a case-insensitive regex to match month names like "July" or "july"
  const match = dateString.match(new RegExp(`^${regexString}$`, 'i'));
  if (!match) {
    return new Date(NaN); // Return an invalid date if parsing fails
  }

  const parts: ParsedParts = {};
  tokens.forEach((token, index) => {
    const value = match[index + 1];
    switch (token) {
      case 'YYYY': parts.year = +value; break;
      case 'YY': parts.year = +value < 70 ? 2000 + +value : 1900 + +value; break;
      case 'MM': case 'M': parts.month = +value; break;
      case 'MMMM':
        const monthIndex = locale.months.findIndex(m => m.toLowerCase() === value.toLowerCase());
        if (monthIndex > -1) {
          parts.month = monthIndex + 1; // Store as 1-12
        }
        break;
      case 'DD': case 'D': parts.day = +value; break;
      case 'HH': case 'H': parts.hour = +value; break;
      case 'hh': case 'h': parts.hour = +value; break;
      case 'mm': case 'm': parts.minute = +value; break;
      case 'ss': case 's': parts.second = +value; break;
      case 'A': case 'a': parts.ampm = value.toLowerCase() as 'am' | 'pm'; break;
    }
  });

  // Adjust for 12-hour format with AM/PM
  if (parts.ampm && parts.hour !== undefined) {
    if (parts.ampm === 'pm' && parts.hour < 12) {
      parts.hour += 12;
    }
    if (parts.ampm === 'am' && parts.hour === 12) { // Handle midnight case (12 AM)
      parts.hour = 0;
    }
  }

  // Construct the date, defaulting any missing parts.
  return new Date(
    parts.year || 1970,
    (parts.month || 1) - 1, // Date constructor needs a 0-based month
    parts.day || 1,
    parts.hour || 0,
    parts.minute || 0,
    parts.second || 0
  );
}
