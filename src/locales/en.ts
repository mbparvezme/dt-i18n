// bd.ts - Bengali (Bangladesh)
import type { LocaleData } from '../types/index';
const en: LocaleData = {
  lang: 'en',
  numbers: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
  months: [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ],
  weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  localizeNumber(input: string | number): string {
    return String(input).replace(/\d/g, d => this.numbers[+d]);
  }
};
export default en;